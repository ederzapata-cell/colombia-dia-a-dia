const timeline = document.getElementById("timeline");
const searchDialog = document.getElementById("searchDialog");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const dateDialog = document.getElementById("dateDialog");
const dateInput = document.getElementById("dateInput");
const supportDialog = document.getElementById("supportDialog");

const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

const MONTHS_SHORT = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC"
];

const availableDates = [...new Set(events.map(e => e.eventDate))].sort();

let currentDate =
  availableDates[availableDates.length - 1] || "2026-08-07";

function formatDate(s) {
  if (!s) return "—";

  const [y, m, d] = s.split("-");

  return `${d}/${m}/${y}`;
}

function longDate(s) {
  const [y, m, d] = s.split("-").map(Number);

  return `${d} de ${MONTHS[m - 1]} de ${y}`;
}

function shortNodeDate(s) {
  const [y, m, d] = s.split("-").map(Number);

  return `${String(d).padStart(2, "0")} ${MONTHS_SHORT[m - 1]} ${y}`;
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

function sourceLabel(item) {
  /*
    IMPORTANTE:
    "Fuente oficial" describe el origen de la información.

    No significa automáticamente:
    - verdad demostrada
    - responsabilidad judicial establecida
    - hecho independiente verificado

    Por eso NO añadimos un ✓ universal a las fuentes.
  */

  return `${item.sourceType} · ${item.sourceName}`;
}

function cardTemplate(item) {
  const effectiveDate =
    item.effectiveDate || item.legalDate || null;

  const related =
    Array.isArray(item.related) && item.related.length
      ? item.related.join(", ")
      : "—";

  const extraSources =
    Array.isArray(item.extraSources) &&
    item.extraSources.length
      ? `
        <div class="secondary-sources">
          <h4>OTRAS FUENTES</h4>

          ${item.extraSources
            .map(
              ([name, url]) => `
                <a
                  href="${url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${name} ↗
                </a>
              `
            )
            .join("")}
        </div>
      `
      : "";

  const note = item.note
    ? `<p class="record-note">${item.note}</p>`
    : "";

  let effectiveDateHtml = "";

  if (effectiveDate) {
    const label = item.legalDate
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

        <span class="badge">
          ${item.category}
        </span>

        <span class="badge verified">
          ${item.status}
        </span>

      </div>

      <h3>
        ${item.title}
      </h3>

      <p>
        ${item.summary}
      </p>

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

        <h4>DATOS DEL REGISTRO</h4>

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
            ${item.status}
          </li>

          <li>
            Relacionados:
            ${related}
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

function updateHero() {
  const meta = getDayMeta(currentDate);

  const heroEyebrow =
    document.getElementById("heroEyebrow");

  const heroDate =
    document.getElementById("heroDate");

  const heroSubtitle =
    document.getElementById("heroSubtitle");

  if (heroEyebrow) {
    heroEyebrow.textContent =
      currentDate === "2026-08-07"
        ? "PUNTO CERO · DÍA 1"
        : "COLOMBIA · DÍA A DÍA";
  }

  if (heroDate) {
    heroDate.textContent =
      longDate(currentDate);
  }

  if (heroSubtitle) {
    heroSubtitle.textContent =
      meta.subtitle;
  }

  if (dateInput) {
    dateInput.value =
      currentDate;
  }
}

function renderTimeline() {
  const groups = [
    ["government", "GOBIERNO"],
    ["opposition", "OPOSICIÓN"],
    ["state", "ESTADO Y PAÍS"]
  ];

  const meta =
    getDayMeta(currentDate);

  const dayEvents =
    events.filter(
      e => e.eventDate === currentDate
    );

  timeline.innerHTML = `
    <div class="day-node">
      ${shortNodeDate(currentDate)}
      ·
      ${meta.status}
    </div>

    ${groups
      .map(([groupKey, groupLabel]) => {
        const items =
          dayEvents.filter(
            e => e.group === groupKey
          );

        return `
          <section class="group ${groupKey}">

            <div class="group-label">
              ${groupLabel}
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
      })
      .join("")}
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

  updateHero();
}

function goToDate(date) {
  if (!availableDates.includes(date)) {
    alert(
      "Todavía no hay registros cargados para esa fecha."
    );

    return;
  }

  currentDate = date;

  renderTimeline();

  document
    .querySelector(".day-node")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}

function doSearch(query) {
  const q =
    query.trim().toLowerCase();

  if (!q) {
    searchResults.innerHTML = "";
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
      ? Object.entries(glossary).filter(
          ([term, definition]) =>
            `${term} ${definition}`
              .toLowerCase()
              .includes(q)
        )
      : [];

  const eventResults =
    hits
      .map(
        item => `
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
              ${item.groupLabel || ""}
              ·
              ${item.category}
              ·
              ${formatDate(item.eventDate)}
            </span>

          </button>
        `
      )
      .join("");

  const glossaryResults =
    glossaryHits
      .map(
        ([term, definition]) => `
          <div class="search-hit">

            <strong>
              ${term}
            </strong>

            <span>
              ${definition}
            </span>

          </div>
        `
      )
      .join("");

  searchResults.innerHTML =
    eventResults ||
    glossaryResults
      ? eventResults + glossaryResults
      : `
        <div class="search-hit">

          <strong>
            Sin resultados
          </strong>

          <span>
            Prueba otro término.
          </span>

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

          requestAnimationFrame(
            () => {
              document
                .getElementById(
                  button.dataset.jump
                )
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
            }
          );
        }
      );
    });
}

document
  .getElementById("openSearch")
  ?.addEventListener(
    "click",
    () => {
      searchDialog?.showModal();
    }
  );

document
  .getElementById("navSearch")
  ?.addEventListener(
    "click",
    () => {
      searchDialog?.showModal();
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
    () => {
      dateDialog?.showModal();
    }
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

const openSupport = () => {
  supportDialog?.showModal();
};

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
        await navigator.clipboard.writeText(
          key
        );

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

      setTimeout(
        () => {
          if (status) {
            status.textContent = "";
          }
        },
        2200
      );
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
            item.classList.remove(
              "active"
            )
          );

        button.classList.add(
          "active"
        );

        if (
          button.dataset.section ===
          "hoy"
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
          button.dataset.section ===
          "dia"
        ) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }

        if (
          button.dataset.section ===
          "entiende"
        ) {
          searchDialog?.showModal();

          if (searchInput) {
            searchInput.value =
              "presunción de inocencia";

            doSearch(
              searchInput.value
            );
          }
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
