const timeline = document.getElementById("timeline"),
  searchDialog = document.getElementById("searchDialog"),
  searchInput = document.getElementById("searchInput"),
  searchResults = document.getElementById("searchResults"),
  dateDialog = document.getElementById("dateDialog"),
  dateInput = document.getElementById("dateInput"),
  supportDialog = document.getElementById("supportDialog");

const availableDates = [...new Set(events.map(e => e.eventDate))].sort();

let currentDate = availableDates[availableDates.length - 1];

function formatDate(s) {
  const [y, m, d] = s.split("-");
  return `${d}/${m}/${y}`;
}

function longDate(s) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(`${s}T12:00:00`));
}

function shortNodeDate(s) {
  const [y, m, d] = s.split("-");

  const months = [
    "ENE","FEB","MAR","ABR","MAY","JUN",
    "JUL","AGO","SEP","OCT","NOV","DIC"
  ];

  return `${d} ${months[Number(m) - 1]} ${y}`;
}

function dayNumber(s) {
  const start = new Date("2026-08-07T12:00:00");
  const current = new Date(`${s}T12:00:00`);

  return Math.round((current - start) / 86400000) + 1;
}

function cardTemplate(i) {
  return `
    <article class="event-card" id="${i.id}">
      <div class="meta">
        <span class="badge">${i.category}</span>
        <span class="badge verified">${i.status}</span>
      </div>

      <h3>${i.title}</h3>

      <p>${i.summary}</p>

      <div class="source-row">
        <a
          href="${i.sourceUrl}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${i.sourceType} ✓ · ${i.sourceName}
        </a>

        <button
          class="details-btn"
          data-details="${i.id}"
        >
          Ver →
        </button>
      </div>

      <div class="details" id="details-${i.id}">
        <h4>DATOS DEL REGISTRO</h4>

        <ul>
          <li>Fecha del hecho: ${formatDate(i.eventDate)}</li>
          <li>Fecha de publicación: ${formatDate(i.publishedDate)}</li>
          <li>Estado: ${i.status}</li>
          <li>Relacionados: ${i.related.join(", ")}</li>
        </ul>

        ${
          i.extraSources.length
            ? `
              <div class="secondary-sources">
                <h4>OTRAS FUENTES</h4>

                ${i.extraSources
                  .map(
                    ([n, u]) =>
                      `<a href="${u}" target="_blank" rel="noopener noreferrer">${n} ↗</a>`
                  )
                  .join("")}
              </div>
            `
            : ""
        }
      </div>
    </article>
  `;
}

function renderTimeline(date = currentDate) {
  currentDate = date;

  const groups = [
    ["government", "GOBIERNO"],
    ["opposition", "OPOSICIÓN"],
    ["state", "ESTADO Y PAÍS"]
  ];

  const dayEvents = events.filter(
    e => e.eventDate === currentDate
  );

  timeline.innerHTML =
    `<div class="day-node">
      ${shortNodeDate(currentDate)} · VERIFICADO ✓
    </div>` +

    groups.map(([key, label]) => {
      const groupEvents = dayEvents.filter(
        e => e.group === key
      );

      return `
        <section class="group ${key}">
          <div class="group-label">
            ${label}
          </div>

          ${
            groupEvents.length
              ? groupEvents.map(cardTemplate).join("")
              : `
                <div class="empty-group">
                  Sin acontecimientos relevantes documentados.
                </div>
              `
          }
        </section>
      `;
    }).join("");

  updateHero();

  document
    .querySelectorAll(".details-btn")
    .forEach(button => {
      button.addEventListener("click", () => {
        const details = document.getElementById(
          `details-${button.dataset.details}`
        );

        details.classList.toggle("open");

        button.textContent =
          details.classList.contains("open")
            ? "Cerrar ↑"
            : "Ver →";
      });
    });
}

function updateHero() {
  const eyebrow = document.getElementById("dayEyebrow");
  const title = document.getElementById("dayTitle");
  const subtitle = document.getElementById("daySubtitle");

  if (eyebrow) {
    eyebrow.textContent =
      `CRONOLOGÍA · DÍA ${dayNumber(currentDate)}`;
  }

  if (title) {
    title.textContent = longDate(currentDate);
  }

  if (subtitle) {
    subtitle.textContent =
      currentDate === "2026-08-07"
        ? "Inicio de la cronología verificable de esta plataforma."
        : "Hechos relevantes documentados y verificables de esta jornada.";
  }

  if (dateInput) {
    dateInput.value = currentDate;
  }
}

function doSearch(q) {
  q = q.trim().toLowerCase();

  if (!q) {
    searchResults.innerHTML = "";
    return;
  }

  const hits = events.filter(e =>
    [
      e.title,
      e.summary,
      e.category,
      e.sourceName,
      ...e.related
    ]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );

  const glossaryHits = Object.entries(glossary).filter(
    ([term, definition]) =>
      `${term} ${definition}`
        .toLowerCase()
        .includes(q)
  );

  searchResults.innerHTML =
    hits.map(e => `
      <button
        class="search-hit"
        data-jump="${e.id}"
        data-date="${e.eventDate}"
      >
        <strong>${e.title}</strong>
        <span>
          ${e.groupLabel}
          · ${e.category}
          · ${formatDate(e.eventDate)}
        </span>
      </button>
    `).join("")

    +

    glossaryHits.map(([term, definition]) => `
      <div class="search-hit">
        <strong>${term}</strong>
        <span>${definition}</span>
      </div>
    `).join("")

    ||

    `
      <div class="search-hit">
        <strong>Sin resultados</strong>
        <span>Prueba otro término.</span>
      </div>
    `;

  document
    .querySelectorAll("[data-jump]")
    .forEach(button => {
      button.addEventListener("click", () => {
        searchDialog.close();

        renderTimeline(button.dataset.date);

        setTimeout(() => {
          document
            .getElementById(button.dataset.jump)
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
        }, 80);
      });
    });
}


/* BUSCAR */

document
  .getElementById("openSearch")
  .addEventListener(
    "click",
    () => searchDialog.showModal()
  );

document
  .getElementById("navSearch")
  .addEventListener(
    "click",
    () => searchDialog.showModal()
  );

searchInput.addEventListener(
  "input",
  e => doSearch(e.target.value)
);


/* IR A FECHA */

document
  .getElementById("goToDate")
  .addEventListener("click", () => {
    dateInput.min = availableDates[0];
    dateInput.max =
      availableDates[availableDates.length - 1];

    dateInput.value = currentDate;

    dateDialog.showModal();
  });

document
  .getElementById("dateSubmit")
  .addEventListener("click", e => {
    e.preventDefault();

    const selected = dateInput.value;

    if (availableDates.includes(selected)) {
      renderTimeline(selected);

      dateDialog.close();

      document
        .querySelector(".day-node")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    } else {
      alert(
        "Todavía no hay registros disponibles para esa fecha."
      );
    }
  });


/* APÓYANOS */

document
  .querySelectorAll("#supportBtn, #topSupportBtn")
  .forEach(button => {
    button.addEventListener("click", () => {
      supportDialog.showModal();
    });
  });


/* COPIAR LLAVE BRE-B */

const copyKeyBtn =
  document.getElementById("copyKeyBtn");

const copyStatus =
  document.getElementById("copyStatus");

const brebKey =
  document.getElementById("brebKey");

copyKeyBtn.addEventListener("click", async () => {
  const key = brebKey.textContent.trim();

  try {
    await navigator.clipboard.writeText(key);

    copyStatus.textContent =
      "Llave copiada ✓";

    copyKeyBtn.textContent =
      "Copiada ✓";

  } catch (error) {
    const textarea =
      document.createElement("textarea");

    textarea.value = key;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    textarea.remove();

    copyStatus.textContent =
      "Llave copiada ✓";

    copyKeyBtn.textContent =
      "Copiada ✓";
  }

  setTimeout(() => {
    copyStatus.textContent = "";

    copyKeyBtn.textContent =
      "Copiar llave";
  }, 2200);
});


/* NAVEGACIÓN INFERIOR */

document
  .querySelectorAll(".nav-item")
  .forEach(button => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".nav-item")
        .forEach(item =>
          item.classList.remove("active")
        );

      button.classList.add("active");


      /* HOY = ÚLTIMO DÍA DISPONIBLE */

      if (button.dataset.section === "hoy") {
        renderTimeline(
          availableDates[availableDates.length - 1]
        );

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }


      /* DÍA A DÍA = SELECTOR */

      if (button.dataset.section === "dia") {
        dateInput.min = availableDates[0];

        dateInput.max =
          availableDates[availableDates.length - 1];

        dateInput.value = currentDate;

        dateDialog.showModal();
      }


      /* ENTIENDE */

      if (button.dataset.section === "entiende") {
        searchDialog.showModal();

        searchInput.value =
          "presunción de inocencia";

        doSearch(searchInput.value);
      }
    });
  });


/* CARGAR EL DÍA MÁS RECIENTE */

renderTimeline(
  availableDates[availableDates.length - 1]
);
