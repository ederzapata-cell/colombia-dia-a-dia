/* =========================================================
   COLOMBIA · DÍA A DÍA
   Archivo anticorrupción — experiencia e interacción
   ========================================================= */

"use strict";

const byId = (id) => document.getElementById(id);
const all = (selector, root = document) => [...root.querySelectorAll(selector)];

const state = {
  query: "",
  stage: "all",
  selectedTimelineId: ""
};

let serviceWorkerRegistration = null;

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value = "") {
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function normalizeText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function parseLocalDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatLongDate(value) {
  const date = parseLocalDate(value);
  if (!date || Number.isNaN(date.getTime())) return "Fecha por verificar";
  return date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function formatShortDate(value) {
  const date = parseLocalDate(value);
  if (!date || Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function casesReady() {
  return typeof corruptionCases !== "undefined" && Array.isArray(corruptionCases);
}

function stageReady() {
  return typeof stageDefinitions !== "undefined" && Array.isArray(stageDefinitions);
}

function caseSearchText(item) {
  return normalizeText([
    item.title,
    item.deck,
    item.institution,
    item.sector,
    item.territory,
    item.relation,
    item.stageLabel,
    item.summary,
    ...(item.tags || []),
    ...(item.people || []).flatMap((person) => [person.name, person.role, person.status])
  ].join(" "));
}

function getFilteredCases() {
  const query = normalizeText(state.query);
  return corruptionCases.filter((item) => {
    const matchesStage = state.stage === "all" || item.stage === state.stage;
    const matchesQuery = !query || caseSearchText(item).includes(query);
    return matchesStage && matchesQuery;
  });
}

function setArchiveMeta() {
  if (typeof archiveMeta === "undefined") return;
  byId("verifiedDate").textContent = `Verificado el ${formatLongDate(archiveMeta.lastVerified)}`;
  byId("coverageEdition").textContent = archiveMeta.edition;
  byId("scopeDescription").textContent = archiveMeta.scopeNote;
}

function renderMetrics() {
  const sourceCount = corruptionCases.reduce(
    (total, item) => total + (item.sources?.length || 0),
    0
  );

  byId("caseCount").textContent = corruptionCases.length.toLocaleString("es-CO");
  byId("trialCount").textContent = corruptionCases.filter((item) => item.stage === "trial").length.toLocaleString("es-CO");
  byId("decisionCount").textContent = corruptionCases.filter((item) => item.stage === "sanction").length.toLocaleString("es-CO");
  byId("sourceCount").textContent = sourceCount.toLocaleString("es-CO");
}

function latestEventFor(item) {
  const events = [...(item.timeline || [])].sort((a, b) => b.date.localeCompare(a.date));
  return events[0] || {
    date: item.lastUpdate,
    title: item.stageLabel,
    text: item.summary
  };
}

function renderLatestUpdates() {
  const updates = corruptionCases
    .map((item) => ({ item, event: latestEventFor(item) }))
    .sort((a, b) => b.event.date.localeCompare(a.event.date))
    .slice(0, 3);

  byId("latestUpdates").innerHTML = updates.map(({ item, event }) => `
    <article class="update-card">
      <time class="update-date" datetime="${escapeHTML(event.date)}">${escapeHTML(formatLongDate(event.date))}</time>
      <h3>${escapeHTML(event.title)}</h3>
      <p><strong>${escapeHTML(item.title)}.</strong> ${escapeHTML(event.text)}</p>
      <button type="button" data-open-case="${escapeHTML(item.id)}">Abrir expediente</button>
    </article>
  `).join("");
}

function renderCases() {
  const filtered = getFilteredCases();
  const grid = byId("caseGrid");
  const empty = byId("emptyState");

  byId("resultsCount").textContent = filtered.length.toLocaleString("es-CO");
  empty.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;

  grid.innerHTML = filtered.map((item) => {
    const index = corruptionCases.findIndex((candidate) => candidate.id === item.id) + 1;
    const money = (item.money || []).slice(0, 2);
    return `
      <article class="case-card stage-${escapeHTML(item.stage)}">
        <div class="case-topline">
          <span class="case-number">EXP. ${String(index).padStart(2, "0")}</span>
          <span class="stage-pill">${escapeHTML(item.stageLabel)}</span>
        </div>
        <div class="case-relation">${escapeHTML(item.relation)}</div>
        <h3>${escapeHTML(item.title)}</h3>
        <p class="case-deck">${escapeHTML(item.deck)}</p>
        <div class="case-money">
          ${money.map((entry) => `
            <div><small>${escapeHTML(entry.label)}</small><strong>${escapeHTML(entry.value)}</strong></div>
          `).join("")}
        </div>
        <div class="case-footer">
          <small>Última actuación<strong>${escapeHTML(formatShortDate(item.lastUpdate))}</strong></small>
          <button class="open-case" type="button" data-open-case="${escapeHTML(item.id)}" aria-label="Abrir expediente ${escapeHTML(item.title)}">Ver evidencia</button>
        </div>
      </article>
    `;
  }).join("");

  const activeSearch = byId("activeSearch");
  activeSearch.hidden = !state.query && state.stage === "all";
  if (!activeSearch.hidden) {
    const stage = stageDefinitions.find((definition) => definition.id === state.stage);
    const parts = [];
    if (state.query) parts.push(`Búsqueda: “${state.query}”`);
    if (stage) parts.push(`Etapa: ${stage.short}`);
    byId("activeSearchText").textContent = parts.join(" · ");
  }
}

function renderTimelineOptions() {
  const select = byId("timelineCaseSelect");
  const preferred = corruptionCases.find((item) => item.featured) || corruptionCases[0];
  state.selectedTimelineId = state.selectedTimelineId || preferred?.id || "";
  select.innerHTML = corruptionCases.map((item) => `
    <option value="${escapeHTML(item.id)}" ${item.id === state.selectedTimelineId ? "selected" : ""}>${escapeHTML(item.title)}</option>
  `).join("");
}

function renderMasterTimeline() {
  const item = corruptionCases.find((candidate) => candidate.id === state.selectedTimelineId);
  const target = byId("masterTimeline");
  if (!item) {
    target.innerHTML = "";
    return;
  }

  target.innerHTML = [...(item.timeline || [])]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((entry) => `
      <article class="timeline-entry">
        <time datetime="${escapeHTML(entry.date)}">${escapeHTML(formatShortDate(entry.date))}</time>
        <div><h3>${escapeHTML(entry.title)}</h3><p>${escapeHTML(entry.text)}</p></div>
      </article>
    `).join("");
}

function renderStages() {
  byId("methodStageList").innerHTML = stageDefinitions.map((stage) => `
    <div class="stage-definition">
      <strong>${escapeHTML(stage.label)}</strong>
      <p>${escapeHTML(stage.meaning)}</p>
    </div>
  `).join("");
}

function renderGlossary(query = "") {
  const needle = normalizeText(query);
  const entries = Object.entries(corruptionGlossary)
    .filter(([term, definition]) => normalizeText(`${term} ${definition}`).includes(needle));

  byId("glossaryList").innerHTML = entries.length
    ? entries.map(([term, definition]) => `
        <article class="glossary-entry"><strong>${escapeHTML(term)}</strong><p>${escapeHTML(definition)}</p></article>
      `).join("")
    : `<article class="glossary-entry"><strong>Sin resultados</strong><p>Prueba con otro concepto procesal.</p></article>`;
}

function listMarkup(items = []) {
  return items.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
}

function openCase(caseId, { updateHash = true } = {}) {
  const item = corruptionCases.find((candidate) => candidate.id === caseId);
  const dialog = byId("caseDialog");
  if (!item || !dialog) return;

  byId("caseDialogContent").innerHTML = `
    <header class="case-sheet-head stage-${escapeHTML(item.stage)}">
      <span class="stage-pill">${escapeHTML(item.stageLabel)}</span>
      <div class="case-relation">${escapeHTML(item.relation)}</div>
      <h2>${escapeHTML(item.title)}</h2>
      <p>${escapeHTML(item.summary)}</p>
      <div class="sheet-meta">
        <span>${escapeHTML(item.institution)}</span>
        <span>${escapeHTML(item.sector)}</span>
        <span>${escapeHTML(item.territory)}</span>
      </div>
    </header>
    <div class="case-sheet-body">
      <div class="sheet-alert"><strong>Regla de lectura</strong><span>El estado mostrado corresponde a la última fuente revisada. Una imputación, acusación o medida preventiva no equivale a una condena.</span></div>

      <div class="money-grid">
        ${(item.money || []).map((entry) => `<article><span>${escapeHTML(entry.label)}</span><strong>${escapeHTML(entry.value)}</strong></article>`).join("")}
      </div>

      <div class="sheet-grid">
        <section class="evidence-panel established"><h3>Qué está documentado</h3><ul>${listMarkup(item.established)}</ul></section>
        <section class="evidence-panel pending"><h3>Qué falta por decidir</h3><ul>${listMarkup(item.pending)}</ul></section>
      </div>

      <section class="sheet-section">
        <h3>Personas e instituciones</h3>
        <ul class="people-list">
          ${(item.people || []).map((person) => `
            <li><strong>${escapeHTML(person.name)}</strong><span>${escapeHTML(person.role)}</span><small>${escapeHTML(person.status)}</small></li>
          `).join("")}
        </ul>
      </section>

      <section class="sheet-section">
        <h3>Cronología del expediente</h3>
        <div class="dialog-timeline">
          ${[...(item.timeline || [])].sort((a, b) => a.date.localeCompare(b.date)).map((entry) => `
            <article><time datetime="${escapeHTML(entry.date)}">${escapeHTML(formatLongDate(entry.date))}</time><h4>${escapeHTML(entry.title)}</h4><p>${escapeHTML(entry.text)}</p></article>
          `).join("")}
        </div>
      </section>

      <section class="sheet-section">
        <h3>Fuentes enlazadas</h3>
        <ul class="source-list">
          ${(item.sources || []).map((source) => `
            <li><a href="${escapeHTML(safeUrl(source.url))}" target="_blank" rel="noopener noreferrer"><span><strong>${escapeHTML(source.name)}</strong><span>${escapeHTML(source.type)} · ${escapeHTML(formatShortDate(source.date))}</span></span><span class="source-arrow" aria-hidden="true">↗</span></a></li>
          `).join("")}
        </ul>
      </section>

      <div class="last-verified-box">Última actuación registrada: <strong>${escapeHTML(formatLongDate(item.lastUpdate))}</strong> · Corte general del archivo: <strong>${escapeHTML(formatLongDate(archiveMeta.lastVerified))}</strong>.</div>
    </div>
  `;

  if (!dialog.open) dialog.showModal();
  if (updateHash) history.pushState({ caseId }, "", `#caso=${encodeURIComponent(caseId)}`);
}

function openDialog(id) {
  const dialog = byId(id);
  if (dialog && !dialog.open) dialog.showModal();
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function clearCaseHash() {
  if (location.hash.startsWith("#caso=")) {
    history.replaceState(null, "", `${location.pathname}${location.search}#casos`);
  }
}

function caseIdFromHash() {
  const match = location.hash.match(/^#caso=(.+)$/);
  return match ? decodeURIComponent(match[1]) : "";
}

function focusSearch() {
  byId("caseSearch")?.focus({ preventScroll: true });
  byId("casos")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFilters() {
  state.query = "";
  state.stage = "all";
  byId("caseSearch").value = "";
  all("[data-stage]").forEach((button) => button.classList.toggle("active", button.dataset.stage === "all"));
  renderCases();
}

function bindExplorer() {
  byId("caseSearch").addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderCases();
  });

  byId("stageFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-stage]");
    if (!button) return;
    state.stage = button.dataset.stage;
    all("[data-stage]").forEach((item) => item.classList.toggle("active", item === button));
    renderCases();
  });

  byId("clearSearch").addEventListener("click", resetFilters);
  byId("resetFilters").addEventListener("click", resetFilters);

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-case]");
    if (trigger) openCase(trigger.dataset.openCase);
  });
}

function bindTimeline() {
  byId("timelineCaseSelect").addEventListener("change", (event) => {
    state.selectedTimelineId = event.target.value;
    renderMasterTimeline();
  });

  byId("showAllUpdates").addEventListener("click", () => {
    byId("cronologia").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bindDialogs() {
  const methodButtons = ["openMethodologyHero", "openMethodology", "footerMethodology", "mobileMethod"];
  methodButtons.forEach((id) => byId(id)?.addEventListener("click", () => openDialog("methodologyDialog")));
  byId("openStages")?.addEventListener("click", () => openDialog("methodologyDialog"));
  byId("openGlossary")?.addEventListener("click", () => openDialog("glossaryDialog"));

  ["topSupportBtn", "supportBtn"].forEach((id) => byId(id)?.addEventListener("click", () => openDialog("supportDialog")));

  all("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => closeDialog(byId(button.dataset.closeDialog)));
  });

  all("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
    dialog.addEventListener("close", () => {
      if (dialog.id === "caseDialog") clearCaseHash();
    });
  });

  byId("glossarySearch")?.addEventListener("input", (event) => renderGlossary(event.target.value));
}

function bindSearchShortcuts() {
  ["focusSearch", "mobileSearch"].forEach((id) => byId(id)?.addEventListener("click", focusSearch));

  document.addEventListener("keydown", (event) => {
    const tag = document.activeElement?.tagName?.toLowerCase();
    const isTyping = ["input", "textarea", "select"].includes(tag) || document.activeElement?.isContentEditable;
    const commandSearch = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    const slashSearch = event.key === "/" && !isTyping;
    if (commandSearch || slashSearch) {
      event.preventDefault();
      focusSearch();
    }
  });
}

async function copySupportKey() {
  const value = byId("brebKey").textContent.trim();
  const status = byId("copyStatus");
  try {
    await navigator.clipboard.writeText(value);
    status.textContent = "Llave copiada.";
  } catch {
    const input = document.createElement("textarea");
    input.value = value;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.append(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();
    status.textContent = copied ? "Llave copiada." : `Copia manualmente la llave: ${value}`;
  }
}

function bindSupport() {
  byId("copyKeyBtn")?.addEventListener("click", copySupportKey);
}

function bindHashNavigation() {
  const openHashCase = () => {
    const id = caseIdFromHash();
    if (id) openCase(id, { updateHash: false });
  };
  window.addEventListener("hashchange", openHashCase);
  openHashCase();
}

function bindMobileNavigation() {
  const links = all(".mobile-nav a");
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-35% 0px -55%", threshold: [0, 0.2, 0.5] });
  sections.forEach((section) => observer.observe(section));
}

function showUpdateToast(registration) {
  serviceWorkerRegistration = registration;
  byId("updateToast").hidden = false;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;

  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  navigator.serviceWorker.register("/sw.js?v=2.1.0").then((registration) => {
    serviceWorkerRegistration = registration;
    registration.update().catch(() => {});
    if (registration.waiting) showUpdateToast(registration);

    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) {
          showUpdateToast(registration);
        }
      });
    });
  }).catch(() => {
    // El sitio continúa funcionando en línea aunque el navegador no permita PWA.
  });

  byId("reloadApp")?.addEventListener("click", () => {
    if (serviceWorkerRegistration?.waiting) {
      serviceWorkerRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
    } else {
      window.location.reload();
    }
  });
}

function renderDataError() {
  const grid = byId("caseGrid");
  if (!grid) return;
  grid.innerHTML = `
    <article class="empty-state" style="display:block;grid-column:1/-1">
      <span aria-hidden="true">!</span><h3>No se pudo abrir el archivo documental</h3>
      <p>Recarga la página. Si el problema continúa, verifica que <strong>data/cases.js</strong> esté publicado junto al sitio.</p>
    </article>
  `;
}

function init() {
  if (!casesReady() || !stageReady() || typeof corruptionGlossary === "undefined") {
    renderDataError();
    return;
  }

  setArchiveMeta();
  renderMetrics();
  renderLatestUpdates();
  renderCases();
  renderTimelineOptions();
  renderMasterTimeline();
  renderStages();
  renderGlossary();

  bindExplorer();
  bindTimeline();
  bindDialogs();
  bindSearchShortcuts();
  bindSupport();
  bindHashNavigation();
  bindMobileNavigation();
  registerServiceWorker();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
