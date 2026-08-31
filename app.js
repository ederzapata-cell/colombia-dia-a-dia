const timeline = document.getElementById("timeline");

const searchDialog = document.getElementById("searchDialog");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const dateDialog = document.getElementById("dateDialog");
const dateInput = document.getElementById("dateInput");

const supportDialog = document.getElementById("supportDialog");

const termDialog = document.getElementById("termDialog");
const termDialogTitle = document.getElementById("termDialogTitle");
const termDialogDefinition = document.getElementById("termDialogDefinition");

const briefDialog = document.getElementById("briefDialog");
const briefTitle = document.getElementById("briefTitle");
const briefList = document.getElementById("briefList");

const MONTHS = [
  "enero","febrero","marzo","abril","mayo","junio",
  "julio","agosto","septiembre","octubre","noviembre","diciembre"
];

const MONTHS_SHORT = [
  "ENE","FEB","MAR","ABR","MAY","JUN",
  "JUL","AGO","SEP","OCT","NOV","DIC"
];

const WEEKDAYS = [
  "DOMINGO","LUNES","MARTES","MIÉRCOLES",
  "JUEVES","VIERNES","SÁBADO"
];

const GROUP_ORDER = {
  government: 1,
  opposition: 2,
  state: 3
};

const GROUP_NAMES = {
  government: "Gobierno",
  opposition: "Oposición",
  state: "Estado y País"
};


const availableDates =
  [...new Set(events.map(event => event.eventDate))].sort();

let currentDate =
  availableDates[availableDates.length - 1] || "2026-08-07";


/* =========================================================
   FECHAS
   ========================================================= */

function dateObject(dateString) {
  const [year, month, day] =
    dateString.split("-").map(Number);

  return new Date(year, month - 1, day, 12, 0, 0);
}


function formatDate(dateString) {
  if (!dateString) return "—";

  const [year, month, day] =
    dateString.split("-");

  return `${day}/${month}/${year}`;
}


function longDate(dateString) {
  const [year, month, day] =
    dateString.split("-").map(Number);

  return `${day} de ${MONTHS[month - 1]} de ${year}`;
}


function shortNodeDate(dateString) {
  const [year, month, day] =
    dateString.split("-").map(Number);

  return `${String(day).padStart(2, "0")} ${MONTHS_SHORT[month - 1]} ${year}`;
}


function weekdayName(dateString) {
  return WEEKDAYS[dateObject(dateString).getDay()];
}


function getDayMeta(date) {
  if (
    typeof dayMeta !== "undefined" &&
    dayMeta &&
    dayMeta[date]
  ) {
    return dayMeta[date];
  }

  if (date === "2026-08-30") {
    return {
      status: "EN ACTUALIZACIÓN ⟳",
      subtitle:
        "Información verificada hasta el último barrido disponible."
    };
  }

  return {
    status: "VERIFICADO ✓",
    subtitle:
      "Hechos verificados y contextualizados para esta fecha."
  };
}


/* =========================================================
   SEGURIDAD DE TEXTO
   ========================================================= */

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}


function getGlossaryTerms() {
  if (
    typeof glossary === "undefined" ||
    !glossary
  ) {
    return [];
  }

  return Object.keys(glossary)
    .sort((a, b) => b.length - a.length);
}


function highlightTerms(text) {
  if (!text) return "";

  const terms = getGlossaryTerms();

  if (!terms.length) return text;

  const pattern =
    terms.map(term => escapeRegExp(term)).join("|");

  const regex =
    new RegExp(`\\b(${pattern})\\b`, "gi");

  return text.replace(regex, match => {

    const realTerm =
      terms.find(
        term =>
          term.toLowerCase() === match.toLowerCase()
      ) || match;

    return `
      <button
        type="button"
        class="glossary-term"
        data-term="${encodeURIComponent(realTerm)}"
        aria-label="Ver explicación de ${realTerm}"
      >
        ${match}
      </button>
    `;
  });
}


/* =========================================================
   ENTIENDE
   ========================================================= */

function openTerm(term) {
  if (
    typeof glossary === "undefined" ||
    !glossary ||
    !glossary[term]
  ) {
    return;
  }

  if (termDialogTitle) {
    termDialogTitle.textContent = term;
  }

  if (termDialogDefinition) {
    termDialogDefinition.textContent =
      glossary[term];
  }

  termDialog?.showModal();
}


function bindGlossaryTerms(container = document) {

  container
    .querySelectorAll(".glossary-term")
    .forEach(button => {

      button.addEventListener("click", event => {

        event.stopPropagation();

        const term =
          decodeURIComponent(button.dataset.term);

        openTerm(term);

      });

    });
}


function renderGlossaryBrowser(query = "") {

  if (
    typeof glossary === "undefined" ||
    !glossary
  ) {
    searchResults.innerHTML = `
      <div class="search-hit">
        <strong>Diccionario no disponible</strong>
      </div>
    `;

    return;
  }

  const q =
    query.trim().toLowerCase();

  const entries =
    Object.entries(glossary)
      .filter(([term, definition]) => {

        if (!q) return true;

        return `${term} ${definition}`
          .toLowerCase()
          .includes(q);

      })
      .sort(([a], [b]) =>
        a.localeCompare(b, "es")
      );


  if (!entries.length) {

    searchResults.innerHTML = `
      <div class="search-hit">
        <strong>Sin resultados</strong>
        <span>Prueba otro término.</span>
      </div>
    `;

    return;
  }


  searchResults.innerHTML = `
    <div class="search-section-title">
      ENTIENDE
    </div>

    ${entries.map(([term, definition]) => `
      <button
        class="search-hit glossary-search-hit"
        data-glossary="${encodeURIComponent(term)}"
        type="button"
      >
        <strong>${term}</strong>
        <span>${definition}</span>
      </button>
    `).join("")}
  `;


  bindGlossarySearch();
}


function bindGlossarySearch() {

  document
    .querySelectorAll("[data-glossary]")
    .forEach(button => {

      button.addEventListener("click", () => {

        const term =
          decodeURIComponent(
            button.dataset.glossary
          );

        openTerm(term);

      });

    });
}


/* =========================================================
   FUENTES / CONTADORES
   ========================================================= */

function sourceLabel(item) {
  return `${item.sourceType} · ${item.sourceName}`;
}


function getDayEvents() {
  return events.filter(
    item => item.eventDate === currentDate
  );
}


function countDaySources(dayEvents) {

  const sources = new Set();

  dayEvents.forEach(item => {

    if (item.sourceUrl) {
      sources.add(item.sourceUrl);
    }

    if (
      Array.isArray(item.extraSources)
    ) {

      item.extraSources.forEach(source => {

        if (Array.isArray(source) && source[1]) {
          sources.add(source[1]);
        }

      });
    }

  });

  return sources.size;
}


function updateTodayDashboard() {

  const dayEvents =
    getDayEvents();

  const eventCount =
    dayEvents.length;

  const sourceCount =
    countDaySources(dayEvents);

  const groupCount =
    new Set(
      dayEvents.map(item => item.group)
    ).size;


  const todayKicker =
    document.getElementById("todayKicker");

  const heroDate =
    document.getElementById("heroDate");

  const heroSubtitle =
    document.getElementById("heroSubtitle");

  const todayEventCount =
    document.getElementById("todayEventCount");

  const todaySourceCount =
    document.getElementById("todaySourceCount");

  const todayGroupCount =
    document.getElementById("todayGroupCount");


  if (todayKicker) {

    todayKicker.textContent =
      `${weekdayName(currentDate)} · HOY EN COLOMBIA`;

  }


  if (heroDate) {
    heroDate.textContent =
      longDate(currentDate);
  }


  if (heroSubtitle) {
    heroSubtitle.textContent =
      getDayMeta(currentDate).subtitle;
  }


  if (todayEventCount) {
    todayEventCount.textContent =
      eventCount;
  }


  if (todaySourceCount) {
    todaySourceCount.textContent =
      sourceCount;
  }


  if (todayGroupCount) {
    todayGroupCount.textContent =
      groupCount;
  }


  if (dateInput) {
    dateInput.value =
      currentDate;
  }
}


/* =========================================================
   TARJETAS
   ========================================================= */

function getImportance(item) {

  if (item.importance) {
    return item.importance;
  }

  return null;
}


function importanceBadge(item) {

  const importance =
    getImportance(item);

  if (!importance) return "";

  const normalized =
    importance.toLowerCase();

  return `
    <span class="importance-badge ${normalized}">
      ${importance}
    </span>
  `;
}


function cardTemplate(item) {

  const effectiveDate =
    item.effectiveDate ||
    item.legalDate ||
    null;


  const related =
    Array.isArray(item.related) &&
    item.related.length
      ? item.related.join(", ")
      : "—";


  const extraSources =
    Array.isArray(item.extraSources) &&
    item.extraSources.length
      ? `
        <div class="secondary-sources">

          <h4>OTRAS FUENTES</h4>

          ${item.extraSources
            .map(([name, url]) => `
              <a
                href="${url}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${name} ↗
              </a>
            `)
            .join("")}

        </div>
      `
      : "";


  const note =
    item.note
      ? `
        <p class="record-note">
          ${highlightTerms(item.note)}
        </p>
      `
      : "";


  const whyItMatters =
    item.whyItMatters
      ? `
        <div class="why-box">

          <span>
            ¿POR QUÉ IMPORTA?
          </span>

          <p>
            ${highlightTerms(item.whyItMatters)}
          </p>

        </div>
      `
      : "";


  let effectiveDateHtml = "";

  if (effectiveDate) {

    const label =
      item.legalDate
        ? "Fecha jurídica"
        : "Fecha de aplicación";

    effectiveDateHtml = `
      <li>
        ${label}: ${formatDate(effectiveDate)}
      </li>
    `;
  }


  return `
    <article
      class="event-card"
      id="${item.id}"
    >

      <div class="meta">

        ${importanceBadge(item)}

        <span class="badge">
          ${item.category}
        </span>

        <span class="badge verified">
          ${item.status}
        </span>

      </div>


      <h3>
        ${highlightTerms(item.title)}
      </h3>


      <p class="event-summary">
        ${highlightTerms(item.summary)}
      </p>


      ${whyItMatters}


      <div class="source-row">

        <a
          href="${item.sourceUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${sourceLabel(item)}
        </a>

        <button
          class="details-btn"
          data-details="${item.id}"
          type="button"
        >
          Ver →
        </button>

      </div>


      <div
        class="details"
        id="details-${item.id}"
      >

        <h4>
          DATOS DEL REGISTRO
        </h4>

        <ul>

          <li>
            Fecha del hecho:
            ${formatDate(item.eventDate)}
          </li>

          <li>
            Fecha de publicación:
            ${formatDate(item.publishedDate)}
          </li>

          ${effectiveDateHtml}

          <li>
            Estado:
            ${highlightTerms(item.status)}
          </li>

          <li>
            Relacionados:
            ${highlightTerms(related)}
          </li>

        </ul>

        ${note}

        ${extraSources}

      </div>

    </article>
  `;
}


function emptyGroup() {
  return `
    <div class="event-card empty-card">
      <p>
        Sin acontecimientos relevantes documentados.
      </p>
    </div>
  `;
}


/* =========================================================
   CRONOLOGÍA
   ========================================================= */

function renderTimeline() {

  const groups = [
    ["government", "GOBIERNO", "◆"],
    ["opposition", "OPOSICIÓN", "◐"],
    ["state", "ESTADO Y PAÍS", "●"]
  ];


  const meta =
    getDayMeta(currentDate);


  const dayEvents =
    getDayEvents();


  const isUpdating =
    meta.status
      .toLowerCase()
      .includes("actualización");


  timeline.classList.remove(
    "timeline-enter"
  );

  void timeline.offsetWidth;

  timeline.classList.add(
    "timeline-enter"
  );


  timeline.innerHTML = `

    <div
      class="day-node ${isUpdating ? "updating" : ""}"
    >
      ${shortNodeDate(currentDate)}
      ·
      ${meta.status}
    </div>


    ${groups.map(
      ([groupKey, groupLabel, icon]) => {

        const items =
          dayEvents.filter(
            item =>
              item.group === groupKey
          );


        return `
          <section
            class="group ${groupKey}"
          >

            <div class="group-heading">

              <div class="group-label">
                <span class="group-symbol">
                  ${icon}
                </span>

                ${groupLabel}
              </div>

              <span class="group-count">
                ${items.length}
              </span>

            </div>


            ${
              items.length
                ? items
                    .map(cardTemplate)
                    .join("")
                : emptyGroup()
            }

          </section>
        `;

      }
    ).join("")}
  `;


  document
    .querySelectorAll(".details-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const panel =
            document.getElementById(
              `details-${button.dataset.details}`
            );

          if (!panel) return;

          panel.classList.toggle("open");

          button.textContent =
            panel.classList.contains("open")
              ? "Cerrar ↑"
              : "Ver →";

        }
      );

    });


  bindGlossaryTerms(timeline);

  updateTodayDashboard();
}


/* =========================================================
   COLOMBIA EN 2 MINUTOS
   ========================================================= */

function getBriefEvents() {

  const dayEvents =
    [...getDayEvents()];


  dayEvents.sort((a, b) => {

    const importanceOrder = {
      esencial: 1,
      relevante: 2,
      archivo: 3
    };


    const aImportance =
      importanceOrder[
        String(a.importance || "")
          .toLowerCase()
      ] || 10;


    const bImportance =
      importanceOrder[
        String(b.importance || "")
          .toLowerCase()
      ] || 10;


    if (aImportance !== bImportance) {
      return aImportance - bImportance;
    }


    return (
      (GROUP_ORDER[a.group] || 9) -
      (GROUP_ORDER[b.group] || 9)
    );

  });


  return dayEvents.slice(0, 5);
}


function renderBrief() {

  const items =
    getBriefEvents();


  if (briefTitle) {
    briefTitle.textContent =
      longDate(currentDate);
  }


  if (!items.length) {

    briefList.innerHTML = `
      <div class="brief-empty">
        No hay acontecimientos relevantes documentados para esta fecha.
      </div>
    `;

    return;
  }


  briefList.innerHTML =
    items.map((item, index) => `

      <button
        class="brief-item"
        data-brief-jump="${item.id}"
        type="button"
      >

        <span class="brief-number">
          ${index + 1}
        </span>

        <span class="brief-content">

          <span class="brief-group">
            ${GROUP_NAMES[item.group] || ""}
            ·
            ${item.category}
          </span>

          <strong>
            ${item.title}
          </strong>

          <span class="brief-summary">
            ${item.summary}
          </span>

        </span>

        <span class="brief-arrow">
          →
        </span>

      </button>

    `).join("");


  document
    .querySelectorAll(
      "[data-brief-jump]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          briefDialog?.close();

          requestAnimationFrame(() => {

            document
              .getElementById(
                button.dataset.briefJump
              )
              ?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });

          });

        }
      );

    });
}


/* =========================================================
   CAMBIO DE FECHA
   ========================================================= */

function goToDate(date) {

  if (!availableDates.includes(date)) {

    alert(
      "Todavía no hay registros cargados para esa fecha."
    );

    return;
  }


  currentDate =
    date;


  renderTimeline();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   BÚSQUEDA
   ========================================================= */

function doSearch(query) {

  const q =
    query.trim().toLowerCase();


  if (!q) {

    searchResults.innerHTML = `
      <div class="search-empty">

        <strong>
          ¿Qué quieres comprobar?
        </strong>

        <span>
          Busca una persona, institución, hecho
          o concepto.
        </span>

      </div>
    `;

    return;
  }


  const hits =
    events.filter(item => {

      const searchableText = [
        item.title,
        item.summary,
        item.category,
        item.sourceName,
        item.groupLabel,
        item.status,
        item.note,
        item.whyItMatters,
        ...(item.related || [])
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();


      return searchableText.includes(q);

    });


  const glossaryHits =
    typeof glossary !== "undefined" &&
    glossary
      ? Object.entries(glossary)
          .filter(([term, definition]) =>
            `${term} ${definition}`
              .toLowerCase()
              .includes(q)
          )
      : [];


  const eventResults =
    hits.length
      ? `
        <div class="search-section-title">
          HECHOS
        </div>

        ${hits.map(item => `
          <button
            class="search-hit"
            data-jump="${item.id}"
            data-date="${item.eventDate}"
            type="button"
          >

            <strong>
              ${item.title}
            </strong>

            <span>
              ${GROUP_NAMES[item.group] || ""}
              ·
              ${item.category}
              ·
              ${formatDate(item.eventDate)}
            </span>

          </button>
        `).join("")}
      `
      : "";


  const glossaryResults =
    glossaryHits.length
      ? `
        <div class="search-section-title">
          ENTIENDE
        </div>

        ${glossaryHits.map(
          ([term, definition]) => `
            <button
              class="search-hit glossary-search-hit"
              data-glossary="${encodeURIComponent(term)}"
              type="button"
            >

              <strong>
                ${term}
              </strong>

              <span>
                ${definition}
              </span>

            </button>
          `
        ).join("")}
      `
      : "";


  searchResults.innerHTML =
    eventResults ||
    glossaryResults
      ? eventResults + glossaryResults
      : `
        <div class="search-hit">
          <strong>Sin resultados</strong>
          <span>Prueba otro término.</span>
        </div>
      `;


  document
    .querySelectorAll("[data-jump]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          searchDialog.close();

          currentDate =
            button.dataset.date;

          renderTimeline();


          requestAnimationFrame(() => {

            document
              .getElementById(
                button.dataset.jump
              )
              ?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              });

          });

        }
      );

    });


  bindGlossarySearch();
}


/* =========================================================
   EVENTOS UI
   ========================================================= */

document
  .getElementById("openBrief")
  ?.addEventListener(
    "click",
    () => {

      renderBrief();

      briefDialog?.showModal();

    }
  );


document
  .getElementById("openSearch")
  ?.addEventListener(
    "click",
    () => {

      searchDialog?.showModal();

      if (searchInput) {
        searchInput.value = "";
        searchInput.placeholder =
          "Ej. terremoto, Petro, Congreso, imputación…";
      }

      doSearch("");

    }
  );


document
  .getElementById("navSearch")
  ?.addEventListener(
    "click",
    () => {

      searchDialog?.showModal();

      if (searchInput) {
        searchInput.value = "";
        searchInput.placeholder =
          "Ej. terremoto, Petro, Congreso, imputación…";
      }

      doSearch("");

    }
  );


searchInput?.addEventListener(
  "input",
  event => {
    doSearch(event.target.value);
  }
);


document
  .getElementById("goToDate")
  ?.addEventListener(
    "click",
    () =>
      dateDialog?.showModal()
  );


document
  .getElementById("dateSubmit")
  ?.addEventListener(
    "click",
    () => {

      const selected =
        dateInput.value;

      dateDialog?.close();

      goToDate(selected);

    }
  );


const openSupport =
  () => supportDialog?.showModal();


document
  .getElementById("supportBtn")
  ?.addEventListener(
    "click",
    openSupport
  );


document
  .getElementById("topSupportBtn")
  ?.addEventListener(
    "click",
    openSupport
  );


document
  .getElementById("copyKeyBtn")
  ?.addEventListener(
    "click",
    async () => {

      const key =
        document
          .getElementById("brebKey")
          ?.textContent
          ?.trim();

      const status =
        document.getElementById(
          "copyStatus"
        );


      if (!key) return;


      try {

        await navigator.clipboard
          .writeText(key);

        if (status) {
          status.textContent =
            "Llave copiada ✓";
        }

      } catch {

        if (status) {
          status.textContent =
            `Llave: ${key}`;
        }

      }


      setTimeout(() => {

        if (status) {
          status.textContent = "";
        }

      }, 2200);

    }
  );


document
  .querySelectorAll(".nav-item")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".nav-item")
          .forEach(item =>
            item.classList.remove("active")
          );


        button.classList.add("active");


        if (
          button.dataset.section === "hoy"
        ) {

          currentDate =
            availableDates[
              availableDates.length - 1
            ] || currentDate;

          renderTimeline();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }


        if (
          button.dataset.section === "dia"
        ) {

          document
            .querySelector(".day-node")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

        }


        if (
          button.dataset.section === "entiende"
        ) {

          searchDialog?.showModal();

          if (searchInput) {

            searchInput.value = "";

            searchInput.placeholder =
              "Busca un término…";

          }

          renderGlossaryBrowser();

          setTimeout(
            () => searchInput?.focus(),
            100
          );

        }

      }
    );

  });


if (
  dateInput &&
  availableDates.length
) {

  dateInput.min =
    availableDates[0];

  dateInput.max =
    availableDates[
      availableDates.length - 1
    ];

}


renderTimeline();
