/* =========================================================
   COLOMBIA · DÍA A DÍA
   App principal
   ========================================================= */

const timeline =
  document.getElementById("timeline");

const searchDialog =
  document.getElementById("searchDialog");

const searchInput =
  document.getElementById("searchInput");

const searchResults =
  document.getElementById("searchResults");

const dateDialog =
  document.getElementById("dateDialog");

const dateInput =
  document.getElementById("dateInput");

const briefDialog =
  document.getElementById("briefDialog");

const briefResults =
  document.getElementById("briefResults");

const termDialog =
  document.getElementById("termDialog");

const glossaryDialog =
  document.getElementById("glossaryDialog");

const glossarySearch =
  document.getElementById("glossarySearch");

const glossaryResults =
  document.getElementById("glossaryResults");

const supportDialog =
  document.getElementById("supportDialog");


/* =========================================================
   DATOS BÁSICOS
   ========================================================= */

const groupConfig = {
  government: {
    label: "GOBIERNO"
  },

  opposition: {
    label: "OPOSICIÓN"
  },

  state: {
    label: "ESTADO Y PAÍS"
  }
};


const importanceRank = {
  ESENCIAL: 1,
  RELEVANTE: 2,
  ARCHIVO: 3
};


const availableDates = [
  ...new Set(
    events.map(
      event => event.eventDate
    )
  )
].sort();


const latestDate =
  availableDates[
    availableDates.length - 1
  ];


let selectedDate =
  latestDate;


let activeGroup =
  null;


/* =========================================================
   FECHAS
   ========================================================= */

function parseLocalDate(dateString) {

  const [
    year,
    month,
    day
  ] = dateString
    .split("-")
    .map(Number);

  return new Date(
    year,
    month - 1,
    day
  );

}


function formatLongDate(dateString) {

  if (!dateString) {
    return "";
  }

  return parseLocalDate(
    dateString
  ).toLocaleDateString(
    "es-CO",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

}


function formatShortDate(dateString) {

  if (!dateString) {
    return "—";
  }

  const [
    year,
    month,
    day
  ] = dateString.split("-");

  return `${day}/${month}/${year}`;

}


function greeting() {

  const hour =
    new Date().getHours();

  if (hour < 12) {
    return "Buenos días, Colombia.";
  }

  if (hour < 19) {
    return "Buenas tardes, Colombia.";
  }

  return "Buenas noches, Colombia.";

}


/* =========================================================
   EVENTOS DEL DÍA
   ========================================================= */

function getEventsForDate(
  date = selectedDate
) {

  return events.filter(
    event =>
      event.eventDate === date
  );

}


function getEventsForGroup(
  group,
  date = selectedDate
) {

  return getEventsForDate(date)
    .filter(
      event =>
        event.group === group
    );

}


/* =========================================================
   GLOSARIO
   ========================================================= */

function escapeRegex(text) {

  return text.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

}


function glossaryEntries() {

  if (
    typeof glossary !== "object" ||
    !glossary
  ) {
    return [];
  }

  return Object.entries(
    glossary
  );

}


/*
  Permite usar dos formatos:

  FORMATO ANTIGUO:
  "tutela": "Definición..."

  FORMATO NUEVO:
  "tutela": {
    definition: "...",
    simple: "...",
    not: "..."
  }
*/

function normalizeGlossaryEntry(value) {

  if (
    typeof value === "string"
  ) {

    return {
      definition: value,
      simple: "",
      not: ""
    };

  }


  if (
    value &&
    typeof value === "object"
  ) {

    return {
      definition:
        value.definition || "",

      simple:
        value.simple || "",

      not:
        value.not || ""
    };

  }


  return {
    definition: "",
    simple: "",
    not: ""
  };

}


function glossarySearchText(
  term,
  value
) {

  const entry =
    normalizeGlossaryEntry(
      value
    );


  return [
    term,
    entry.definition,
    entry.simple,
    entry.not
  ]
    .join(" ")
    .toLowerCase();

}


function glossaryPreview(
  value
) {

  const entry =
    normalizeGlossaryEntry(
      value
    );


  if (entry.simple) {
    return entry.simple;
  }


  return entry.definition;

}


function highlightGlossary(text) {

  if (!text) {
    return "";
  }

  let output =
    text;


  const terms =
    glossaryEntries()
      .map(([term]) => term)
      .sort(
        (a, b) =>
          b.length - a.length
      );


  terms.forEach(term => {

    const regex =
      new RegExp(
        `\\b(${escapeRegex(term)})\\b`,
        "gi"
      );


    output =
      output.replace(
        regex,
        match =>
          `<button
            type="button"
            class="glossary-term"
            data-term="${encodeURIComponent(term)}"
          >${match}</button>`
      );

  });


  return output;

}


function openTerm(term) {

  const realTerm =
    glossaryEntries()
      .find(
        ([name]) =>
          name.toLowerCase() ===
          term.toLowerCase()
      );


  if (!realTerm) {
    return;
  }


  const [
    name,
    value
  ] = realTerm;


  const entry =
    normalizeGlossaryEntry(
      value
    );


  document.getElementById(
    "termDialogTitle"
  ).textContent =
    name;


  const definitionBox =
    document.getElementById(
      "termDialogDefinition"
    );


  definitionBox.innerHTML = `
    ${
      entry.definition
        ? `
          <span
            style="
              display:block;
              margin-bottom:18px;
            "
          >
            <strong
              style="
                display:block;
                margin-bottom:6px;
              "
            >
              DEFINICIÓN
            </strong>

            <span>
              ${entry.definition}
            </span>
          </span>
        `
        : ""
    }

    ${
      entry.simple
        ? `
          <span
            style="
              display:block;
              margin-bottom:18px;
              padding:14px 16px;
              border-radius:14px;
              background:#f3f6f9;
            "
          >
            <strong
              style="
                display:block;
                margin-bottom:6px;
              "
            >
              EN PALABRAS SENCILLAS
            </strong>

            <span>
              ${entry.simple}
            </span>
          </span>
        `
        : ""
    }

    ${
      entry.not
        ? `
          <span
            style="
              display:block;
              padding:14px 16px;
              border-radius:14px;
              background:#fff7e8;
            "
          >
            <strong
              style="
                display:block;
                margin-bottom:6px;
              "
            >
              NO SIGNIFICA...
            </strong>

            <span>
              ${entry.not}
            </span>
          </span>
        `
        : ""
    }
  `;


  termDialog.showModal();

}


/* =========================================================
   HERO
   ========================================================= */

function renderHero() {

  const isLatest =
    selectedDate === latestDate;


  document.body.classList.toggle(
    "history-mode",
    !isLatest
  );


  document.getElementById(
    "welcomeKicker"
  ).textContent =
    isLatest
      ? "COLOMBIA · DÍA A DÍA"
      : "DÍA A DÍA";


  document.getElementById(
    "welcomeTitle"
  ).textContent =
    isLatest
      ? greeting()
      : "Colombia, día a día.";


  document.getElementById(
    "heroDate"
  ).textContent =
    formatLongDate(
      selectedDate
    );


  document.getElementById(
    "heroStatus"
  ).textContent =
    isLatest
      ? "Información verificada"
      : "Archivo verificado";


  document.getElementById(
    "eventsHeading"
  ).textContent =
    isLatest
      ? "Todo lo ocurrido hoy"
      : `Lo ocurrido el ${formatLongDate(
          selectedDate
        )}`;

}


/* =========================================================
   RESUMEN
   ========================================================= */

function updateCounts() {

  const dayEvents =
    getEventsForDate();


  document.getElementById(
    "todayEventCount"
  ).textContent =
    `${dayEvents.length} ${
      dayEvents.length === 1
        ? "hecho"
        : "hechos"
    }`;


  document.getElementById(
    "governmentCount"
  ).textContent =
    getEventsForGroup(
      "government"
    ).length;


  document.getElementById(
    "oppositionCount"
  ).textContent =
    getEventsForGroup(
      "opposition"
    ).length;


  document.getElementById(
    "stateCount"
  ).textContent =
    getEventsForGroup(
      "state"
    ).length;

}


/* =========================================================
   COLOMBIA EN 2 MINUTOS
   ========================================================= */

function getBriefEvents() {

  const dayEvents =
    [...getEventsForDate()];


  dayEvents.sort(
    (a, b) => {

      const aRank =
        importanceRank[
          (
            a.importance ||
            "RELEVANTE"
          ).toUpperCase()
        ] || 2;


      const bRank =
        importanceRank[
          (
            b.importance ||
            "RELEVANTE"
          ).toUpperCase()
        ] || 2;


      if (aRank !== bRank) {
        return aRank - bRank;
      }


      const groupOrder = {
        government: 1,
        opposition: 2,
        state: 3
      };


      return (
        groupOrder[a.group] -
        groupOrder[b.group]
      );

    }
  );


  return dayEvents.slice(
    0,
    5
  );

}


function renderBrief() {

  const selected =
    getBriefEvents();


  document.getElementById(
    "briefCount"
  ).textContent =
    `${selected.length} ${
      selected.length === 1
        ? "asunto"
        : "asuntos"
    }`;


  if (!selected.length) {

    briefResults.innerHTML =
      `
        <div class="empty-group">
          Todavía no hay hechos cargados
          para esta fecha.
        </div>
      `;

    return;

  }


  briefResults.innerHTML =
    selected
      .map(
        (event, index) => `
          <article class="brief-result">

            <div class="brief-number">
              ${index + 1}
            </div>

            <div>

              <h4>
                ${event.title}
              </h4>

              <p>
                ${event.summary}
              </p>

            </div>

          </article>
        `
      )
      .join("");

}


/* =========================================================
   TARJETA DE EVENTO
   ========================================================= */

function cardTemplate(event) {

  const importance =
    event.importance
      ? event.importance.toUpperCase()
      : "";


  const why =
    event.whyItMatters
      ? `
        <div class="why-box">

          <strong>
            ¿POR QUÉ IMPORTA?
          </strong>

          <p>
            ${highlightGlossary(
              event.whyItMatters
            )}
          </p>

        </div>
      `
      : "";


  const related =
    Array.isArray(event.related)
      ? event.related
      : [];


  const extraSources =
    Array.isArray(event.extraSources)
      ? event.extraSources
      : [];


  const secondarySources =
    extraSources.length
      ? `
        <div class="secondary-sources">

          <p class="detail-label">
            OTRAS FUENTES
          </p>

          ${extraSources
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


  const note =
    event.note
      ? `
        <div class="note-box">
          ${highlightGlossary(
            event.note
          )}
        </div>
      `
      : "";


  return `
    <article
      class="event-card"
      id="${event.id}"
      data-group="${event.group}"
    >

      <div class="card-topline">

        <span class="category-label">
          ${event.category}
        </span>

        ${
          importance
            ? `
              <span class="importance-pill">
                ${importance}
              </span>
            `
            : ""
        }

        <span class="status-pill">
          ${event.status}
        </span>

      </div>


      <h3>
        ${highlightGlossary(
          event.title
        )}
      </h3>


      <p class="event-summary">
        ${highlightGlossary(
          event.summary
        )}
      </p>


      ${why}


      <div class="card-actions">

        <a
          class="source-link"
          href="${event.sourceUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${event.sourceName} ↗
        </a>

        <button
          class="details-btn"
          type="button"
          data-details="${event.id}"
        >
          Entender mejor →
        </button>

      </div>


      <div
        class="details"
        id="details-${event.id}"
      >

        <p class="detail-label">
          DATOS DEL REGISTRO
        </p>

        <ul>

          <li>
            Fecha del hecho:
            ${formatShortDate(
              event.eventDate
            )}
          </li>

          <li>
            Fecha de publicación:
            ${formatShortDate(
              event.publishedDate
            )}
          </li>

          ${
            event.effectiveDate
              ? `
                <li>
                  Entrada en vigencia:
                  ${formatShortDate(
                    event.effectiveDate
                  )}
                </li>
              `
              : ""
          }

          <li>
            Estado:
            ${event.status}
          </li>

          ${
            related.length
              ? `
                <li>
                  Relacionados:
                  ${related.join(", ")}
                </li>
              `
              : ""
          }

        </ul>

        ${secondarySources}

        ${note}

      </div>

    </article>
  `;

}


/* =========================================================
   RENDER DE GRUPOS
   ========================================================= */

function renderGroup(
  group,
  label
) {

  const groupEvents =
    getEventsForGroup(group);


  if (
    activeGroup &&
    activeGroup !== group
  ) {
    return "";
  }


  return `
    <section
      class="group-block group-${group}"
    >

      <div class="group-heading">

        <span class="group-dot"></span>

        <strong>
          ${label}
        </strong>

        <span class="group-count">
          ${groupEvents.length}
        </span>

      </div>


      ${
        groupEvents.length
          ? groupEvents
              .map(cardTemplate)
              .join("")
          : `
            <div class="empty-group">
              Sin acontecimientos relevantes
              documentados.
            </div>
          `
      }

    </section>
  `;

}


/* =========================================================
   TIMELINE / FEED
   ========================================================= */

function renderTimeline() {

  timeline.innerHTML =
    [
      [
        "government",
        "GOBIERNO"
      ],

      [
        "opposition",
        "OPOSICIÓN"
      ],

      [
        "state",
        "ESTADO Y PAÍS"
      ]
    ]
      .map(
        ([key, label]) =>
          renderGroup(
            key,
            label
          )
      )
      .join("");


  document
    .querySelectorAll(
      ".details-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const panel =
            document.getElementById(
              `details-${button.dataset.details}`
            );


          panel.classList.toggle(
            "open"
          );


          button.textContent =
            panel.classList.contains(
              "open"
            )
              ? "Cerrar ↑"
              : "Entender mejor →";

        }
      );

    });


  bindGlossaryTerms();

}


/* =========================================================
   TÉRMINOS DESTACADOS
   ========================================================= */

function getRelevantTerms() {

  const text =
    getEventsForDate()
      .map(
        event =>
          [
            event.title,
            event.summary,
            event.note || "",
            event.whyItMatters || "",
            ...(event.related || [])
          ].join(" ")
      )
      .join(" ")
      .toLowerCase();


  const matches =
    glossaryEntries()
      .filter(
        ([term]) =>
          text.includes(
            term.toLowerCase()
          )
      )
      .map(
        ([term]) => term
      );


  if (matches.length) {
    return matches.slice(0, 4);
  }


  return glossaryEntries()
    .slice(0, 4)
    .map(
      ([term]) => term
    );

}


function renderTermChips() {

  const terms =
    getRelevantTerms();


  const container =
    document.getElementById(
      "termChips"
    );


  if (!terms.length) {

    document.getElementById(
      "understandStrip"
    ).style.display =
      "none";

    return;

  }


  document.getElementById(
    "understandStrip"
  ).style.display =
    "";


  container.innerHTML =
    terms
      .map(
        term => `
          <button
            class="term-chip"
            type="button"
            data-term="${encodeURIComponent(term)}"
          >
            ${term}
          </button>
        `
      )
      .join("");


  bindGlossaryTerms();

}


/* =========================================================
   GLOSSARY EVENTS
   ========================================================= */

function bindGlossaryTerms() {

  document
    .querySelectorAll(
      "[data-term]"
    )
    .forEach(button => {

      button.onclick =
        () => {

          const term =
            decodeURIComponent(
              button.dataset.term
            );

          openTerm(term);

        };

    });

}


/* =========================================================
   BUSCAR
   ========================================================= */

function doSearch(query) {

  const q =
    query
      .trim()
      .toLowerCase();


  if (!q) {

    searchResults.innerHTML =
      "";

    return;

  }


  const eventHits =
    events.filter(event => {

      const content = [
        event.title,
        event.summary,
        event.category,
        event.sourceName,
        event.status,
        event.note || "",
        event.whyItMatters || "",
        ...(event.related || [])
      ]
        .join(" ")
        .toLowerCase();


      return content.includes(q);

    });


  const glossaryHits =
    glossaryEntries()
      .filter(
        ([term, value]) =>
          glossarySearchText(
            term,
            value
          ).includes(q)
      );


  const eventHtml =
    eventHits
      .slice(0, 30)
      .map(
        event => `
          <button
            type="button"
            class="search-hit"
            data-jump="${event.id}"
            data-date="${event.eventDate}"
          >

            <strong>
              ${event.title}
            </strong>

            <span>
              ${
                event.groupLabel ||
                groupConfig[
                  event.group
                ]?.label ||
                ""
              }
              ·
              ${formatLongDate(
                event.eventDate
              )}
            </span>

          </button>
        `
      )
      .join("");


  const glossaryHtml =
    glossaryHits
      .slice(0, 15)
      .map(
        ([term, value]) => `
          <button
            type="button"
            class="glossary-hit"
            data-search-term="${encodeURIComponent(term)}"
          >

            <strong>
              ${term}
            </strong>

            <span>
              ${glossaryPreview(value)}
            </span>

          </button>
        `
      )
      .join("");


  searchResults.innerHTML =
    eventHtml +
    glossaryHtml ||
    `
      <div class="empty-group">
        No encontramos resultados.
        Prueba otro término.
      </div>
    `;


  document
    .querySelectorAll(
      "[data-jump]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          selectedDate =
            button.dataset.date;


          activeGroup =
            null;


          renderAll();


          searchDialog.close();


          setTimeout(
            () => {

              document
                .getElementById(
                  button.dataset.jump
                )
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });

            },
            60
          );

        }
      );

    });


  document
    .querySelectorAll(
      "[data-search-term]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const term =
            decodeURIComponent(
              button.dataset.searchTerm
            );


          searchDialog.close();

          openTerm(term);

        }
      );

    });

}


/* =========================================================
   GLOSARIO COMPLETO
   ========================================================= */

function renderGlossary(
  query = ""
) {

  const q =
    query
      .trim()
      .toLowerCase();


  const entries =
    glossaryEntries()
      .filter(
        ([term, value]) => {

          if (!q) {
            return true;
          }


          return glossarySearchText(
            term,
            value
          ).includes(q);

        }
      )
      .sort(
        (a, b) =>
          a[0].localeCompare(
            b[0],
            "es"
          )
      );


  glossaryResults.innerHTML =
    entries.length
      ? entries
          .map(
            ([term, value]) => `
              <button
                type="button"
                class="glossary-hit"
                data-full-term="${encodeURIComponent(term)}"
              >

                <strong>
                  ${term}
                </strong>

                <span>
                  ${glossaryPreview(value)}
                </span>

              </button>
            `
          )
          .join("")
      : `
          <div class="empty-group">
            No encontramos ese concepto.
          </div>
        `;


  document
    .querySelectorAll(
      "[data-full-term]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const term =
            decodeURIComponent(
              button.dataset.fullTerm
            );


          glossaryDialog.close();

          openTerm(term);

        }
      );

    });

}


/* =========================================================
   FECHA
   ========================================================= */

function selectDate(date) {

  if (!date) {
    return;
  }


  selectedDate =
    date;


  activeGroup =
    null;


  renderAll();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   FILTER POR GRUPO
   ========================================================= */

function filterByGroup(group) {

  activeGroup =
    group;


  document.getElementById(
    "clearGroupFilter"
  ).hidden =
    false;


  renderTimeline();


  document
    .querySelector(
      ".events-section"
    )
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

}


function clearGroupFilter() {

  activeGroup =
    null;


  document.getElementById(
    "clearGroupFilter"
  ).hidden =
    true;


  renderTimeline();

}


/* =========================================================
   APOYO
   ========================================================= */

function openSupport() {

  supportDialog.showModal();

}


async function copyBrebKey() {

  const key =
    document.getElementById(
      "brebKey"
    ).textContent.trim();


  const status =
    document.getElementById(
      "copyStatus"
    );


  try {

    await navigator.clipboard.writeText(
      key
    );


    status.textContent =
      "Llave copiada ✓";


  } catch {

    status.textContent =
      `Llave: ${key}`;

  }


  setTimeout(
    () => {

      status.textContent =
        "";

    },
    2200
  );

}


/* =========================================================
   NAV
   ========================================================= */

function setActiveNav(section) {

  document
    .querySelectorAll(
      ".nav-item"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.section === section
      );

    });

}


/* =========================================================
   RENDER GENERAL
   ========================================================= */

function renderAll() {

  renderHero();

  updateCounts();

  renderBrief();

  renderTermChips();

  renderTimeline();


  dateInput.value =
    selectedDate;


  dateInput.max =
    latestDate;

}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

document
  .getElementById(
    "openSearch"
  )
  .addEventListener(
    "click",
    () => {

      searchDialog.showModal();

      setTimeout(
        () =>
          searchInput.focus(),
        40
      );

    }
  );


document
  .getElementById(
    "navSearch"
  )
  .addEventListener(
    "click",
    () => {

      searchDialog.showModal();

      setTimeout(
        () =>
          searchInput.focus(),
        40
      );

    }
  );


searchInput.addEventListener(
  "input",
  event =>
    doSearch(
      event.target.value
    )
);


document
  .getElementById(
    "goToDate"
  )
  .addEventListener(
    "click",
    () => {

      dateDialog.showModal();

    }
  );


document
  .getElementById(
    "dateSubmit"
  )
  .addEventListener(
    "click",
    () => {

      const value =
        dateInput.value;


      dateDialog.close();

      selectDate(value);

      setActiveNav("dia");

    }
  );


document
  .getElementById(
    "openBrief"
  )
  .addEventListener(
    "click",
    () => {

      renderBrief();

      briefDialog.showModal();

    }
  );


document
  .getElementById(
    "supportBtn"
  )
  .addEventListener(
    "click",
    openSupport
  );


document
  .getElementById(
    "topSupportBtn"
  )
  .addEventListener(
    "click",
    openSupport
  );


document
  .getElementById(
    "copyKeyBtn"
  )
  .addEventListener(
    "click",
    copyBrebKey
  );


document
  .getElementById(
    "clearGroupFilter"
  )
  .addEventListener(
    "click",
    clearGroupFilter
  );


document
  .querySelectorAll(
    "[data-filter-group]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () =>
        filterByGroup(
          button.dataset.filterGroup
        )
    );

  });


glossarySearch.addEventListener(
  "input",
  event =>
    renderGlossary(
      event.target.value
    )
);


/* =========================================================
   CERRAR DIALOGS
   ========================================================= */

document
  .querySelectorAll(
    "[data-close-dialog]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .getElementById(
            button.dataset.closeDialog
          )
          ?.close();

      }
    );

  });


/* =========================================================
   NAV
   ========================================================= */

document
  .querySelectorAll(
    ".nav-item"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const section =
          button.dataset.section;


        setActiveNav(
          section
        );


        if (
          section === "hoy"
        ) {

          selectDate(
            latestDate
          );

        }


        if (
          section === "dia"
        ) {

          dateDialog.showModal();

        }


        if (
          section === "entiende"
        ) {

          renderGlossary();

          glossarySearch.value =
            "";

          glossaryDialog.showModal();

        }


        if (
          section === "mas"
        ) {

          document
            .querySelector(
              ".support-card"
            )
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

        }

      }
    );

  });


/* =========================================================
   BRAND
   ========================================================= */

document
  .getElementById(
    "brandHome"
  )
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      setActiveNav(
        "hoy"
      );

      selectDate(
        latestDate
      );

    }
  );


/* =========================================================
   ESCUCHAR TERM BUTTONS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        ".glossary-term"
      );


    if (!button) {
      return;
    }


    const term =
      decodeURIComponent(
        button.dataset.term
      );


    openTerm(term);

  }
);


/* =========================================================
   INICIO
   ========================================================= */

renderAll();
