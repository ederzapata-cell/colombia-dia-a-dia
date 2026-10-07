/* =========================================================
   COLOMBIA · DÍA A DÍA
   Archivo anticorrupción — modelo de expedientes
   Última verificación editorial: 2026-10-07
   ========================================================= */

const archiveMeta = {
  title: "Memoria pública contra la corrupción",
  period: "Gobierno de Gustavo Petro · 7 ago 2022 — 7 ago 2026",
  lastVerified: "2026-10-07",
  edition: "Cobertura inicial · versión 2.0",
  description:
    "Expedientes construidos con decisiones judiciales, actuaciones de organismos de control y documentos públicos. Una denuncia o imputación nunca se presenta como condena.",
  scopeNote:
    "Esta primera entrega no pretende ser un inventario definitivo. Prioriza casos nacionales con actuación formal verificable y crecerá mediante actualizaciones documentales, no por volumen de titulares."
};

const stageDefinitions = [
  {
    id: "report",
    label: "DENUNCIA / REPORTE",
    short: "Denuncia",
    meaning: "Una persona o entidad puso hechos en conocimiento de una autoridad. No prueba responsabilidad."
  },
  {
    id: "finding",
    label: "AUDITORÍA / HALLAZGO",
    short: "Hallazgo",
    meaning: "Una autoridad de control identificó hechos que requieren aclaración, corrección o investigación."
  },
  {
    id: "investigation",
    label: "INVESTIGACIÓN",
    short: "Investigación",
    meaning: "La autoridad recauda y contrasta pruebas. Todavía no existe declaración de responsabilidad."
  },
  {
    id: "charges",
    label: "IMPUTACIÓN",
    short: "Imputación",
    meaning: "La Fiscalía comunicó formalmente cargos. La persona conserva la presunción de inocencia."
  },
  {
    id: "trial",
    label: "ACUSACIÓN / JUICIO",
    short: "Juicio",
    meaning: "La acusación fue presentada para que el caso avance a juicio. Aún no equivale a condena."
  },
  {
    id: "sanction",
    label: "SANCIÓN / CONDENA",
    short: "Decisión",
    meaning: "Existe una decisión sancionatoria o condenatoria. El expediente precisa si está en firme y contra quién."
  },
  {
    id: "international",
    label: "MEDIDA INTERNACIONAL",
    short: "Internacional",
    meaning: "Una autoridad extranjera adoptó una medida. No se equipara automáticamente a una condena colombiana."
  }
];

const corruptionCases = [
  {
    id: "ungrd-carrotanques-guajira",
    title: "Carrotanques de la UNGRD para La Guajira",
    deck: "El contrato que abrió el mayor expediente de corrupción del cuatrienio.",
    institution: "UNGRD · Fondo Nacional de Gestión del Riesgo",
    sector: "Gestión del riesgo",
    territory: "La Guajira · Nacional",
    relation: "ENTIDAD DEL GOBIERNO",
    stage: "sanction",
    stageLabel: "SANCIÓN Y PROCESOS PENALES",
    featured: true,
    lastUpdate: "2026-10-06",
    summary:
      "La compra de 40 carrotanques por $46.800 millones derivó en investigaciones penales y disciplinarias por direccionamiento contractual, apropiación de recursos y sobrecostos. La Procuraduría confirmó sanciones contra tres exdirectivos; varios procesos penales siguieron rutas distintas.",
    money: [
      { label: "Valor del contrato", value: "$46.800 millones" },
      { label: "Sobrecosto establecido disciplinariamente", value: "> $16.000 millones" }
    ],
    established: [
      "La Procuraduría confirmó en segunda instancia destitución e inhabilidad de 18 años para Olmedo López, 20 años para Sneyder Pinilla y 10 años para Víctor Meza.",
      "El fallo disciplinario indicó que el pago superó en más de 54 % los precios reales de mercado.",
      "Un juez aprobó el preacuerdo de Sneyder Pinilla, con pena de cinco años y ocho meses por concierto para delinquir agravado y peculado por apropiación agravado.",
      "La Resolución 008041 del Inpec ordenó el 6 de octubre de 2026 trasladar a Olmedo López y Sneyder Pinilla desde establecimientos especiales a La Picota."
    ],
    pending: [
      "Las responsabilidades penales deben individualizarse: la sanción disciplinaria no sustituye las decisiones de los jueces penales.",
      "El proceso contra Olmedo López avanzó a acusación; la acusación no es una condena.",
      "La defensa de Pinilla cuestionó el traslado carcelario y alegó la existencia de una orden judicial previa; esa controversia no modifica el fondo del proceso penal."
    ],
    people: [
      { name: "Olmedo López Martínez", role: "Exdirector de la UNGRD", status: "Sancionado disciplinariamente; acusado en proceso penal" },
      { name: "Sneyder Pinilla Álvarez", role: "Exsubdirector de Manejo de Desastres", status: "Condena derivada de preacuerdo; sanción disciplinaria confirmada" },
      { name: "Víctor Andrés Meza Galván", role: "Exsubdirector general", status: "Sanción disciplinaria confirmada" },
      { name: "Luis Eduardo López Rosero", role: "Contratista", status: "Proceso penal con principio de oportunidad y actuaciones posteriores" }
    ],
    timeline: [
      { date: "2024-07-25", title: "Imputación inicial", text: "La Fiscalía presentó a Olmedo López, Sneyder Pinilla y Luis Eduardo López como presuntos integrantes de un esquema para direccionar la contratación." },
      { date: "2025-04-04", title: "Preacuerdo aprobado", text: "Un juez aprobó el preacuerdo con Sneyder Pinilla y fijó una pena de cinco años y ocho meses." },
      { date: "2025-07-31", title: "Sanción disciplinaria confirmada", text: "La Procuraduría resolvió la segunda instancia y confirmó las destituciones e inhabilidades." },
      { date: "2026-04-16", title: "Acusación contra el exdirector", text: "La Fiscalía informó la radicación del escrito de acusación contra Olmedo López por otra línea de direccionamiento de contratos." },
      { date: "2026-10-06", title: "Traslado ordenado a La Picota", text: "El Inpec ordenó trasladar a Olmedo López y Sneyder Pinilla a la cárcel La Picota; la defensa de Pinilla anunció oposición a la medida." }
    ],
    sources: [
      { name: "Fiscalía · inicio del caso penal", type: "Fuente primaria", date: "2024-07-25", url: "https://www.fiscalia.gov.co/colombia/inicio/mas-noticias/page/672/" },
      { name: "Fiscalía · preacuerdo de Sneyder Pinilla", type: "Fuente primaria", date: "2025-04-04", url: "https://www.fiscalia.gov.co/colombia/inicio/mas-noticias/page/435/" },
      { name: "Procuraduría · fallo disciplinario de segunda instancia", type: "Fuente primaria", date: "2025-07-31", url: "https://www.procuraduria.gov.co/Pages/procuraduria-confirmo-sancion-olmedo-lopez-sneyder-pinilla-sobrecostos-adquisicion-carrotanques.aspx" },
      { name: "Fiscalía · seguimiento UNGRD", type: "Fuente primaria", date: "2026-04-16", url: "https://www.fiscalia.gov.co/colombia/tag/olmedo-lopez/" },
      { name: "Cambio · Resolución 008041 y controversia por el traslado", type: "Cobertura documental", date: "2026-10-06", url: "https://d1x0qnenkl91hi.cloudfront.net/poder/articulo/2026/10/el-inpec-traslada-a-la-picota-a-olmedo-lopez-y-sneyder-pinilla-dos-dias-despues-de-la-publicacion-de-cambio" }
    ],
    tags: ["carrotanques", "La Guajira", "sobrecostos", "contratación", "UNGRD"]
  },
  {
    id: "ungrd-dadivas-congreso",
    title: "UNGRD: dinero y contratos para influir en el Congreso",
    deck: "La línea que conectó recursos de una entidad de emergencias con apoyos legislativos.",
    institution: "DAPRE · UNGRD · Congreso",
    sector: "Gobierno y Congreso",
    territory: "Bogotá · Nacional",
    relation: "ALTOS FUNCIONARIOS Y CONGRESO",
    stage: "trial",
    stageLabel: "ACUSACIÓN / JUICIO",
    featured: true,
    lastUpdate: "2026-03-11",
    summary:
      "Fiscalía y Corte Suprema abrieron procesos separados por la presunta entrega de dinero y el ofrecimiento de contratos de la UNGRD a congresistas para favorecer proyectos en trámite. Las actuaciones alcanzan a exfuncionarios de Presidencia, una exconsejera y varios congresistas y excongresistas.",
    money: [
      { label: "Dádivas investigadas", value: "$4.000 millones" },
      { label: "Contratos presuntamente ofrecidos", value: "$70.000 millones" }
    ],
    established: [
      "La Corte Suprema ordenó en mayo de 2025 detención preventiva de Iván Name y Andrés Calle y los acusó en agosto del mismo año.",
      "La Fiscalía acusó a Sandra Ortiz por el presunto traslado de recursos y a Carlos Ramón González por el supuesto direccionamiento de dádivas con recursos de la UNGRD.",
      "En marzo de 2026 la Corte acusó por cohecho impropio a otros cinco congresistas y un excongresista por ofrecimientos vinculados con proyectos de la UNGRD.",
      "Existen decisiones procesales formales; no existe una condena general contra todas las personas mencionadas."
    ],
    pending: [
      "Los juicios deben determinar la responsabilidad individual y la credibilidad de testimonios y evidencia técnica.",
      "El expediente no permite atribuir automáticamente responsabilidad penal al entonces presidente ni a todo el Gobierno."
    ],
    people: [
      { name: "Iván Name Vásquez", role: "Expresidente del Senado", status: "Acusado por la Corte Suprema; medida de aseguramiento" },
      { name: "Andrés Calle Aguas", role: "Expresidente de la Cámara", status: "Acusado por la Corte Suprema; medida de aseguramiento" },
      { name: "Sandra Ortiz Nova", role: "Exconsejera presidencial para las regiones", status: "Acusada por la Fiscalía" },
      { name: "Carlos Ramón González Merchán", role: "Exdirector del DAPRE", status: "Acusado por la Fiscalía" },
      { name: "Wadith Manzur Imbett", role: "Representante a la Cámara", status: "Acusado por la Corte; medida de aseguramiento" },
      { name: "Karen Manrique Olarte", role: "Representante a la Cámara", status: "Acusada por la Corte; medida de aseguramiento" },
      { name: "Liliana Bitar, Juan Pablo Gallo y Julián Peinado", role: "Congresistas", status: "Acusados por la Corte; continuaron en libertad" },
      { name: "Juan Diego Muñoz Cabrera", role: "Excongresista", status: "Acusado por la Corte; continuó en libertad" }
    ],
    timeline: [
      { date: "2024-07-16", title: "Copias a la Corte Suprema", text: "La Fiscalía remitió información para investigar a nueve congresistas por hechos relacionados con la UNGRD." },
      { date: "2025-05-07", title: "Detención preventiva", text: "La Sala de Instrucción ordenó la captura y suspensión de Iván Name y Andrés Calle." },
      { date: "2025-08-27", title: "Acusación a los congresistas", text: "La Corte consideró que existían indicios suficientes para llevarlos a juicio." },
      { date: "2025-09-01", title: "Acusación a Sandra Ortiz", text: "La Fiscalía la acusó por el presunto traslado de recursos entre integrantes del esquema." },
      { date: "2026-01-29", title: "Acusación a Carlos Ramón González", text: "La Fiscalía formalizó la acusación por el presunto direccionamiento de dádivas a congresistas." },
      { date: "2026-03-11", title: "Seis acusaciones adicionales", text: "La Corte acusó a cinco congresistas y un excongresista por presunto cohecho impropio y ordenó medida de aseguramiento contra dos de ellos." }
    ],
    sources: [
      { name: "Corte Suprema · compulsa contra nueve aforados", type: "Fuente primaria", date: "2024-07-16", url: "https://cortesuprema.gov.co/sala-de-instruccion-recibio-compulsa-de-copias-contra-nueve-aforados-por-presuntas-irregularidades-en-la-ungrd/" },
      { name: "Corte Suprema · medida contra Name y Calle", type: "Fuente primaria", date: "2025-05-07", url: "https://cortesuprema.gov.co/sala-de-instruccion-ordeno-medida-de-aseguramiento-contra-los-congresistas-ivan-name-y-andres-calle/" },
      { name: "Corte Suprema · acusación a Name y Calle", type: "Fuente primaria", date: "2025-08-27", url: "https://cortesuprema.gov.co/caso-ungrd-la-sala-de-instruccion-acuso-a-los-congresistas-ivan-name-y-andres-calle/" },
      { name: "Fiscalía · actuaciones del caso UNGRD", type: "Fuente primaria", date: "2026-01-29", url: "https://www.fiscalia.gov.co/colombia/tag/ungrd/" },
      { name: "Corte Suprema · seis acusaciones por cohecho impropio", type: "Fuente primaria", date: "2026-03-11", url: "https://cortesuprema.gov.co/sala-de-instruccion-acusa-a-cinco-congresistas-y-un-excongresista-por-presunto-cohecho-impropio-y-dicta-medidas-de-aseguramiento-contra-dos-de-ellos/" }
    ],
    tags: ["Congreso", "cohecho", "DAPRE", "Sandra Ortiz", "Carlos Ramón González", "Iván Name", "Andrés Calle"]
  },
  {
    id: "ungrd-invias-exministros",
    title: "Contratos UNGRD–Invías y los exministros Bonilla y Velasco",
    deck: "La Fiscalía sostiene que contratos públicos fueron usados para asegurar apoyos parlamentarios.",
    institution: "Ministerios de Hacienda e Interior · UNGRD · Invías",
    sector: "Contratación e infraestructura",
    territory: "Nacional",
    relation: "EXMINISTROS DEL GOBIERNO",
    stage: "trial",
    stageLabel: "ACUSACIÓN FORMAL",
    featured: true,
    lastUpdate: "2026-04-30",
    summary:
      "La Fiscalía acusó formalmente a los exministros Ricardo Bonilla y Luis Fernando Velasco por su presunta participación en el redireccionamiento de contratos de la UNGRD y el Invías en favor de congresistas. Ambos han controvertido los señalamientos y su responsabilidad debe decidirse en juicio.",
    money: [
      { label: "Contratos señalados por la acusación", value: "$612.000 millones" },
      { label: "Contratos que habrían llegado a adjudicarse", value: "7 de 79" }
    ],
    established: [
      "La Fiscalía formuló imputación y posteriormente presentó acusación formal ante la Sala de Primera Instancia de la Corte Suprema.",
      "Una decisión de aseguramiento restringió la libertad de los exministros mientras avanzó el proceso.",
      "Las cifras corresponden a contratos presuntamente direccionados; no deben leerse como dinero apropiado o perdido."
    ],
    pending: [
      "El juicio debe determinar si existió una organización y cuál fue la intervención de cada acusado.",
      "Los exministros no tienen condena por estos hechos en las fuentes revisadas."
    ],
    people: [
      { name: "Ricardo Bonilla González", role: "Exministro de Hacienda", status: "Acusado; sin condena en este expediente" },
      { name: "Luis Fernando Velasco Chaves", role: "Exministro del Interior", status: "Acusado; sin condena en este expediente" },
      { name: "María Alejandra Benavides", role: "Exasesora del Ministerio de Hacienda", status: "Vinculada como testigo y procesada en líneas relacionadas" }
    ],
    timeline: [
      { date: "2025-12-18", title: "Medida de aseguramiento", text: "Un juez dispuso aseguramiento en centro carcelario dentro de la investigación." },
      { date: "2026-04-30", title: "Acusación formal", text: "La Fiscalía presentó la acusación ante la Corte Suprema por concierto para delinquir agravado, interés indebido en contratos y cohecho por dar u ofrecer." }
    ],
    sources: [
      { name: "Fiscalía · medida contra los exministros", type: "Fuente primaria", date: "2025-12-18", url: "https://www.fiscalia.gov.co/colombia/inicio/mas-noticias/page/104/" },
      { name: "Fiscalía · seguimiento del caso UNGRD", type: "Fuente primaria", date: "2026-04-30", url: "https://www.fiscalia.gov.co/colombia/tag/ungrd/" },
      { name: "El Tiempo · detalles de la acusación", type: "Contexto judicial", date: "2026-04-30", url: "https://www.eltiempo.com/justicia/cortes/los-exministros-bonilla-y-velasco-fueron-oficialmente-acusados-por-la-fiscalia-ante-la-corte-suprema-por-caso-ungrd-3552329" }
    ],
    tags: ["Ricardo Bonilla", "Luis Fernando Velasco", "Invías", "contratos", "Congreso"]
  },
  {
    id: "ungrd-ant-cesar-manrique",
    title: "UNGRD–ANT y el proceso contra César Manrique",
    deck: "Una línea distinta del caso UNGRD sobre contratos, un convenio de tierras y una coima atribuida por la Fiscalía.",
    institution: "Función Pública · UNGRD · Agencia Nacional de Tierras",
    sector: "Contratación y tierras",
    territory: "Nacional",
    relation: "EXDIRECTOR DE ENTIDAD DEL GOBIERNO",
    stage: "trial",
    stageLabel: "ACUSACIÓN · MEDIDA DE ASEGURAMIENTO",
    featured: false,
    lastUpdate: "2026-02-25",
    summary:
      "La Fiscalía acusó al exdirector de Función Pública César Manrique y vinculó a otras siete personas por el presunto direccionamiento de contratos de la UNGRD. La investigación también examina un convenio por $100.000 millones relacionado con la Agencia Nacional de Tierras. Manrique ha controvertido los cargos y no tiene condena en este expediente.",
    money: [
      { label: "Convenio bajo investigación", value: "$100.000 millones" },
      { label: "Coima atribuida por la Fiscalía", value: "$3.000 millones" }
    ],
    established: [
      "La Fiscalía imputó a César Manrique y a otras siete personas en julio de 2025.",
      "Un juez ordenó medida de aseguramiento en centro carcelario y la Fiscalía radicó escrito de acusación en octubre de 2025.",
      "En febrero de 2026 un juez confirmó la medida de aseguramiento; los medios judiciales reportaron que Manrique permanecía prófugo."
    ],
    pending: [
      "El juicio debe decidir si existieron los direccionamientos y pagos atribuidos y cuál fue la participación de cada acusado.",
      "El valor del convenio no equivale a detrimento probado ni a dinero apropiado.",
      "La situación de captura o comparecencia debe verificarse de nuevo antes de cada actualización."
    ],
    people: [
      { name: "César Augusto Manrique Soacha", role: "Exdirector del Departamento Administrativo de la Función Pública", status: "Acusado; medida de aseguramiento confirmada" },
      { name: "Édgar Eduardo Riveros Rey", role: "Abogado señalado en el esquema", status: "Imputado en la misma línea" },
      { name: "Ana María Riveros Barbosa y Sonia Romero Hernández", role: "Particulares vinculadas", status: "Imputadas en la misma línea" },
      { name: "Otros cuatro procesados", role: "Directivos, asesor y contratista citados por la Fiscalía", status: "Imputados; situación individual en expediente" }
    ],
    timeline: [
      { date: "2025-07-02", title: "Ocho personas imputadas", text: "La Fiscalía judicializó a César Manrique y a otras siete personas por la presunta red de direccionamiento contractual." },
      { date: "2025-07-29", title: "Medidas de aseguramiento", text: "Una jueza impuso medidas privativas de la libertad a los procesados definidos en la decisión." },
      { date: "2025-10-29", title: "Escrito de acusación", text: "La Fiscalía anunció la acusación contra Manrique dentro de esta línea del caso UNGRD." },
      { date: "2026-02-25", title: "Medida confirmada", text: "Un juez de conocimiento dejó en firme la medida de aseguramiento contra el exdirector." }
    ],
    sources: [
      { name: "Fiscalía · actuaciones contra César Manrique y otras siete personas", type: "Fuente primaria", date: "2025-07-02", url: "https://www.fiscalia.gov.co/colombia/tag/ungrd/page/2/" },
      { name: "Fiscalía · escrito de acusación y seguimiento", type: "Fuente primaria", date: "2025-10-29", url: "https://www.fiscalia.gov.co/colombia/tag/ungrd/" },
      { name: "El Espectador · medida de aseguramiento confirmada", type: "Cobertura judicial", date: "2026-02-25", url: "https://www.elespectador.com/judicial/caso-ungrd-confirman-medida-de-aseguramiento-contra-cesar-manrique-profugo-de-la-justicia/" }
    ],
    tags: ["César Manrique", "Función Pública", "ANT", "UNGRD", "contratos", "tierras"]
  },
  {
    id: "ricardo-roa-ecopetrol-hocol",
    title: "Ricardo Roa: apartamento, Hocol y tráfico de influencias",
    deck: "Una imputación y posterior acusación separada del expediente electoral de la campaña de 2022.",
    institution: "Ecopetrol · Hocol · Fiscalía",
    sector: "Hidrocarburos y conflicto de interés",
    territory: "Bogotá · La Guajira",
    relation: "ALTO DIRECTIVO DE EMPRESA ESTATAL",
    stage: "trial",
    stageLabel: "ACUSACIÓN FORMAL",
    featured: true,
    lastUpdate: "2026-06-09",
    summary:
      "La Fiscalía imputó y después acusó a Ricardo Roa por presunto tráfico de influencias de servidor público. Sostiene que habría intervenido desde la presidencia de Ecopetrol para favorecer un proyecto de regasificación en Hocol vinculado con un empresario relacionado con la compra de su apartamento. Roa no aceptó responsabilidad.",
    money: [
      { label: "Precio reportado del apartamento", value: "$1.800 millones" },
      { label: "Diferencia frente al avalúo citada", value: "≈ $900 millones" }
    ],
    established: [
      "La Fiscalía formuló imputación por tráfico de influencias de servidor público el 11 de marzo de 2026.",
      "La negociación del proyecto entre Hocol y la empresa interesada terminó sin adjudicación en abril de 2025, según la reconstrucción de la audiencia.",
      "La Fiscalía radicó escrito de acusación el 9 de junio de 2026; la acusación abre la ruta de juicio, no declara culpabilidad."
    ],
    pending: [
      "El juez debe establecer si hubo influencia indebida, si existió una contraprestación y qué relevancia tuvo la operación inmobiliaria.",
      "Roa y su defensa cuestionaron la precisión de la imputación y sostuvieron que el proyecto no fue adjudicado.",
      "La imputación electoral por topes de campaña es un proceso distinto y se registra en la ficha de financiación de 2022."
    ],
    people: [
      { name: "Ricardo Roa Barragán", role: "Expresidente de Ecopetrol y exgerente de campaña", status: "Acusado por tráfico de influencias; sin condena" },
      { name: "Juan Guillermo Mancera", role: "Empresario relacionado por la Fiscalía con el negocio inmobiliario", status: "Mencionado en la teoría del caso" },
      { name: "Luis Enrique Rojas", role: "Expresidente de Hocol", status: "Funcionario que habría recibido las presiones, según la Fiscalía" },
      { name: "Serafino Iacono", role: "Empresario y anterior propietario del inmueble", status: "Mencionado en la operación inmobiliaria" }
    ],
    timeline: [
      { date: "2022-12-07", title: "Transferencia del inmueble", text: "El apartamento fue transferido a Roa; la Fiscalía cuestionó precio, forma y fechas de pago." },
      { date: "2024-08-20", title: "Gestiones en Hocol", text: "La teoría de la Fiscalía ubica desde esta fecha las presiones para favorecer el proyecto Chuchupa–Ballena." },
      { date: "2026-03-11", title: "Imputación", text: "La Fiscalía imputó tráfico de influencias de servidor público. Roa se declaró inocente y siguió en libertad." },
      { date: "2026-06-09", title: "Escrito de acusación", text: "La Fiscalía llevó el expediente a etapa de acusación para que continúe hacia juicio." }
    ],
    sources: [
      { name: "Fiscalía · actuaciones sobre Ricardo Roa", type: "Fuente primaria", date: "2026-05-11", url: "https://www.fiscalia.gov.co/colombia/tag/ricardo-roa-barragan/" },
      { name: "Cambio · reconstrucción de la audiencia de imputación", type: "Cobertura judicial", date: "2026-03-11", url: "https://d1x0qnenkl91hi.cloudfront.net/poder/articulo/2026/3/fiscalia-imputa-a-ricardo-roa-usted-uso-su-cargo-de-presidente-de-ecopetrol-indebidamente-para-beneficiar-intereses-particulares" },
      { name: "El País · radicación del escrito de acusación", type: "Cobertura judicial", date: "2026-06-09", url: "https://elpais.com/america-colombia/2026-06-09/la-fiscalia-lleva-a-juicio-a-ricardo-roa-por-trafico-de-influencias.html" }
    ],
    tags: ["Ricardo Roa", "Ecopetrol", "Hocol", "tráfico de influencias", "apartamento", "regasificación"]
  },
  {
    id: "campana-petro-topes-2022",
    title: "Financiación y topes de la campaña Petro Presidente 2022",
    deck: "Un expediente electoral separado de la gestión administrativa del Gobierno.",
    institution: "Campaña Petro Presidente · CNE",
    sector: "Financiación electoral",
    territory: "Nacional",
    relation: "CAMPAÑA PRESIDENCIAL 2022",
    stage: "sanction",
    stageLabel: "SANCIÓN ADMINISTRATIVA",
    featured: true,
    lastUpdate: "2026-04-29",
    summary:
      "El Consejo Nacional Electoral abrió investigación y formuló cargos en 2024 por presuntas irregularidades en ingresos, gastos y fuentes de financiación. En abril de 2026 confirmó administrativamente la sanción a responsables de la campaña y organizaciones políticas, según la decisión reportada públicamente.",
    money: [
      { label: "Exceso atribuido en primera y segunda vuelta", value: "> $5.300 millones" },
      { label: "Naturaleza de la cifra", value: "Gastos y financiación electoral" }
    ],
    established: [
      "El CNE formuló cargos contra responsables de la campaña, auditores y organizaciones políticas.",
      "El Consejo de Estado precisó en 2024 la distribución de competencias entre CNE y Congreso.",
      "En abril de 2026 se resolvieron recursos y quedó confirmada la sanción administrativa reportada por distintos medios."
    ],
    pending: [
      "La sanción electoral no equivale por sí sola a una condena penal.",
      "La responsabilidad de cada persona debe leerse según la decisión que le resulte aplicable; no se extiende automáticamente a todos los integrantes de la campaña."
    ],
    people: [
      { name: "Ricardo Roa Barragán", role: "Gerente de campaña en 2022", status: "Sancionado administrativamente; actuaciones penales separadas" },
      { name: "Lucy Mogollón Alfonso", role: "Tesorera de campaña", status: "Incluida en la actuación administrativa" },
      { name: "María Lucy Soto Caro", role: "Auditora", status: "Incluida en la actuación administrativa" },
      { name: "Gustavo Petro Urrego", role: "Candidato presidencial", status: "Investigado bajo régimen constitucional especial durante su mandato" }
    ],
    timeline: [
      { date: "2024-08-06", title: "Competencia electoral", text: "El Consejo de Estado definió el alcance de las competencias administrativas del CNE y del Congreso." },
      { date: "2024-10-08", title: "Investigación y cargos", text: "La Sala Plena del CNE abrió investigación y formuló cargos por presunta vulneración del régimen de financiación." },
      { date: "2026-04-29", title: "Sanción confirmada", text: "La Sala Plena resolvió los recursos y confirmó la sanción administrativa, según la cobertura de la decisión." }
    ],
    sources: [
      { name: "CNE · apertura de investigación y formulación de cargos", type: "Fuente primaria", date: "2024-10-08", url: "https://www.cne.gov.co/prensa/comunicados-oficiales/814-comunicado-de-prensa-08-de-octubre-de-2024" },
      { name: "Consejo de Estado · distribución de competencias", type: "Fuente primaria", date: "2024-08-23", url: "https://www.consejodeestado.gov.co/news/2024/23.2-Ago-2024.php" },
      { name: "Caracol Radio · confirmación de la sanción", type: "Cobertura de decisión", date: "2026-04-29", url: "https://caracol.com.co/2026/04/29/cne-confirmo-sancion-a-campana-petro-presidente-2022-y-determino-que-recibio-financiacion-irregular/" }
    ],
    tags: ["campaña 2022", "CNE", "topes", "Ricardo Roa", "financiación"]
  },
  {
    id: "nicolas-petro-lavado-enriquecimiento",
    title: "Proceso penal contra Nicolás Petro",
    deck: "Un caso del entorno familiar del expresidente, no de una entidad del Ejecutivo.",
    institution: "Fiscalía · Juzgado de Barranquilla",
    sector: "Lavado de activos y enriquecimiento ilícito",
    territory: "Atlántico · Bogotá",
    relation: "ENTORNO FAMILIAR / CAMPAÑA",
    stage: "trial",
    stageLabel: "ACUSACIÓN · JUICIO PENDIENTE",
    featured: false,
    lastUpdate: "2026-09-18",
    summary:
      "La Fiscalía acusó a Nicolás Petro por lavado de activos y enriquecimiento ilícito. El proceso principal terminó su etapa preparatoria, pero el inicio del juicio quedó sujeto a decisiones del Tribunal Superior de Barranquilla sobre recursos probatorios. Existe además una línea separada relacionada con la Fundación Conciencia Social.",
    money: [
      { label: "Valor atribuido en la investigación inicial", value: "> $1.000 millones" },
      { label: "Lectura correcta", value: "Dinero investigado, no recuperado ni condenado" }
    ],
    established: [
      "La Fiscalía imputó cargos en agosto de 2023 y presentó acusación en enero de 2024.",
      "La etapa preparatoria concluyó en junio de 2026; recursos sobre pruebas debían resolverse antes de fijar el juicio oral.",
      "La relación familiar con el expresidente no atribuye responsabilidad penal a Gustavo Petro."
    ],
    pending: [
      "El juicio oral del proceso principal no había producido sentencia en la última verificación.",
      "La procedencia y valoración de varias pruebas seguía pendiente de decisiones de segunda instancia.",
      "La actuación sobre Fundación Conciencia Social es otro expediente y no debe mezclarse con los cargos iniciales."
    ],
    people: [
      { name: "Nicolás Fernando Petro Burgos", role: "Exdiputado del Atlántico e hijo del expresidente", status: "Acusado; sin condena en el proceso principal" },
      { name: "Daysuris Vásquez Castro", role: "Expareja y testigo", status: "Procesada separadamente; colaboró con la Fiscalía" }
    ],
    timeline: [
      { date: "2023-08-04", title: "Imputación", text: "La Fiscalía imputó enriquecimiento ilícito y lavado de activos a Nicolás Petro." },
      { date: "2024-01-11", title: "Acusación", text: "La Fiscalía presentó acusación formal por los dos delitos." },
      { date: "2026-06-02", title: "Cierre de etapa preparatoria", text: "El inicio del juicio quedó condicionado a la decisión de recursos probatorios." },
      { date: "2026-09-18", title: "Segundo expediente aplazado", text: "Fue aplazada la audiencia de acusación en la línea relacionada con Fundación Conciencia Social." }
    ],
    sources: [
      { name: "Fiscalía · imputación y medida no privativa", type: "Fuente primaria", date: "2023-08-04", url: "https://www.fiscalia.gov.co/colombia/inicio/mas-noticias/page/1075/" },
      { name: "Fiscalía · acusación por lavado y enriquecimiento", type: "Fuente primaria", date: "2024-01-11", url: "https://www.fiscalia.gov.co/colombia/tag/lavados-de-activos/" },
      { name: "Caracol Radio · estado de la etapa preparatoria", type: "Cobertura judicial", date: "2026-06-03", url: "https://caracol.com.co/2026/06/03/termina-etapa-preparatoria-para-juicio-contra-nicolas-petro-tribunal-resolvera-varias-apelaciones/" },
      { name: "El Heraldo · expediente Fundación Conciencia Social", type: "Cobertura judicial", date: "2026-09-18", url: "https://www.elheraldo.co/colombia/2026/09/18/aplazan-audiencia-de-acusacion-contra-nicolas-petro-por-presuntas-irregularidades-con-la-fundacion-conciencia-social/" }
    ],
    tags: ["Nicolás Petro", "lavado de activos", "enriquecimiento ilícito", "Barranquilla", "Fundación Conciencia Social"]
  },
  {
    id: "poligrafo-marelbys-laura-sarabia",
    title: "Uso de bienes públicos en el caso del polígrafo de Marelbys Meza",
    deck: "Una imputación por presunto abuso de función, constreñimiento y peculado por uso; no por la pérdida del dinero.",
    institution: "DAPRE · Jefatura de Despacho · Policía Nacional",
    sector: "Abuso de función y uso de bienes públicos",
    territory: "Bogotá",
    relation: "ALTA FUNCIONARIA DE PRESIDENCIA",
    stage: "charges",
    stageLabel: "IMPUTACIÓN",
    featured: true,
    lastUpdate: "2026-09-14",
    summary:
      "La Fiscalía imputó a Laura Sarabia por su presunta intervención en la prueba de polígrafo practicada a Marelbys Meza en dependencias de Presidencia. Los cargos se refieren al posible uso de poder y equipos públicos para resolver un asunto privado. Sarabia no aceptó cargos.",
    money: [
      { label: "Bien público cuestionado", value: "Equipo estatal de poligrafía" },
      { label: "Dinero cuya pérdida originó el caso", value: "> USD 4.000 reportados" }
    ],
    established: [
      "La prueba de polígrafo se realizó el 30 de enero de 2023 en oficinas vinculadas al DAPRE.",
      "En septiembre de 2026 la Fiscalía imputó abuso de función pública, constreñimiento ilegal agravado y peculado por uso.",
      "Sarabia no aceptó los cargos. La imputación es un acto de comunicación y no una declaración de responsabilidad."
    ],
    pending: [
      "La Fiscalía debe decidir si presenta acusación y sostener su teoría ante un juez de conocimiento.",
      "El proceso debe determinar quién impartió cada orden y si el uso del equipo público configuró los delitos imputados.",
      "Las denuncias sobre interceptaciones ilegales y la procedencia del dinero tienen expedientes o verificaciones distintas y no deben mezclarse automáticamente con esta imputación."
    ],
    people: [
      { name: "Laura Camila Sarabia Torres", role: "Exjefa de Despacho, exdirectora del DAPRE y excanciller", status: "Imputada; no aceptó cargos" },
      { name: "Marelbys del Carmen Meza Vuelvas", role: "Extrabajadora doméstica de Sarabia", status: "Víctima reconocida en la actuación" },
      { name: "Carlos Alberto Feria Buitrago", role: "Exjefe de Protección Presidencial", status: "Procesado en actuaciones relacionadas" },
      { name: "Óscar Leandro Mojica", role: "Exintegrante de la Sijín", status: "Principio de oportunidad en la línea de interceptaciones" }
    ],
    timeline: [
      { date: "2023-01-30", title: "Prueba de polígrafo", text: "Marelbys Meza fue llevada a dependencias de Presidencia y sometida a la prueba que originó la investigación." },
      { date: "2024-02-10", title: "Acusación por interceptaciones", text: "La Fiscalía acusó a un integrante de la Policía y a un particular por facilitar escuchas ilegales a Meza y otra persona." },
      { date: "2026-09-14", title: "Imputación a Laura Sarabia", text: "La Fiscalía comunicó tres cargos; Sarabia se declaró inocente y no los aceptó." }
    ],
    sources: [
      { name: "Fiscalía · acusación en la línea de interceptaciones", type: "Fuente primaria", date: "2024-02-10", url: "https://www.fiscalia.gov.co/colombia/inicio/mas-noticias/page/884/" },
      { name: "Caracol Radio · audiencia de imputación a Laura Sarabia", type: "Cobertura judicial", date: "2026-09-14", url: "https://caracol.com.co/2026/09/14/caso-poligrafo-marelbys-meza-fiscal-imputo-cargo-a-laura-sarabia/" },
      { name: "El País · contexto y respuesta de la defensa", type: "Cobertura judicial", date: "2026-09-14", url: "https://elpais.com/america-colombia/2026-09-14/la-fiscalia-imputa-cargos-a-laura-sarabia-por-la-prueba-de-poligrafo-a-marelbys-meza.html" }
    ],
    tags: ["Laura Sarabia", "Marelbys Meza", "DAPRE", "polígrafo", "peculado por uso", "abuso de función"]
  },
  {
    id: "mi17-mantenimiento-defensa",
    title: "Contrato para mantenimiento de helicópteros MI-17",
    deck: "Un contrato de defensa por USD 32 millones que llegó a imputaciones.",
    institution: "Ministerio de Defensa · Ejército Nacional",
    sector: "Defensa y contratación",
    territory: "Nacional · Estados Unidos",
    relation: "ENTIDAD DEL GOBIERNO",
    stage: "charges",
    stageLabel: "IMPUTACIÓN",
    featured: false,
    lastUpdate: "2026-03-13",
    summary:
      "La Fiscalía judicializó a dos exfuncionarios del Ministerio de Defensa y a un coronel por presuntas irregularidades en la selección de una empresa para mantener helicópteros MI-17. La investigación cuestiona requisitos técnicos, evaluaciones y el desembolso de un anticipo.",
    money: [
      { label: "Valor del contrato", value: "USD 32 millones" },
      { label: "Anticipo señalado", value: "50 % del contrato" }
    ],
    established: [
      "La Fiscalía formuló cargos a tres personas por su presunta intervención en el proceso contractual.",
      "El contrato fue suscrito el 31 de diciembre de 2024 y contempló recursos girados a una cuenta del contratista en Estados Unidos.",
      "La existencia de imputación no demuestra responsabilidad ni que todo el valor del contrato se haya perdido."
    ],
    pending: [
      "La justicia debe determinar si hubo falsedad, tráfico de influencias o apropiación de recursos y quiénes participaron.",
      "Debe precisarse el estado de recuperación, ejecución o aseguramiento de los recursos girados."
    ],
    people: [
      { name: "Hugo Mora", role: "Exsecretario general del Ministerio de Defensa", status: "Imputado" },
      { name: "Diego Manrique", role: "Exasesor del Ministerio de Defensa", status: "Imputado" },
      { name: "Julián Ferney Rincón Ricaurte", role: "Coronel del Ejército", status: "Imputado" }
    ],
    timeline: [
      { date: "2024-12-31", title: "Contrato suscrito", text: "Se formalizó el contrato de mantenimiento de la flota MI-17." },
      { date: "2025-12-17", title: "Judicialización", text: "La Fiscalía anunció la judicialización de dos exfuncionarios y un coronel." },
      { date: "2026-03-13", title: "Imputación documentada", text: "Continuó la actuación judicial por las presuntas irregularidades del proceso y del anticipo." }
    ],
    sources: [
      { name: "Fiscalía · comunicado sobre la judicialización", type: "Fuente primaria reproducida", date: "2025-12-17", url: "https://www.ambitojuridico.com/sites/default/files/2025-12/COMUNICADO-Fiscalia-2025%28Fiscaliajudicializaa%29.pdf" },
      { name: "Caracol Radio · seguimiento contractual", type: "Investigación periodística", date: "2026-02-24", url: "https://caracol.com.co/2026/02/24/el-capitulo-inedito-del-descalabro-de-los-mi-17-mindefensa-dijo-no-a-un-contrato-directo-con-eeuu/" }
    ],
    tags: ["MI-17", "Ministerio de Defensa", "Ejército", "Vertol", "contrato"]
  },
  {
    id: "aremca-regalias",
    title: "AREMCA y 101 contratos financiados con regalías",
    deck: "La Fiscalía investiga una asociación de municipios creada para administrar proyectos sin cumplir requisitos.",
    institution: "Sistema General de Regalías · AREMCA",
    sector: "Regalías y contratación territorial",
    territory: "Caribe y otras regiones",
    relation: "RECURSOS NACIONALES Y TERRITORIALES",
    stage: "charges",
    stageLabel: "CAPTURAS E IMPUTACIONES",
    featured: false,
    lastUpdate: "2026-06-02",
    summary:
      "La Fiscalía informó que nueve personas fueron capturadas por un presunto esquema que habría direccionado 101 contratos a través de la Asociación Regional de Municipios del Caribe. La entidad sostuvo que muchos de los proyectos no se ejecutaron y que la asociación no cumplía requisitos para administrar los recursos.",
    money: [
      { label: "Valor agregado de contratos investigados", value: "≈ $500.000 millones" },
      { label: "Número de contratos", value: "101" }
    ],
    established: [
      "La Fiscalía realizó capturas y formuló cargos dentro de una investigación especial sobre recursos de regalías.",
      "Los contratos abarcan distintas entidades y periodos; su detección durante 2026 no prueba que todos fueran ordenados por el Gobierno nacional.",
      "El valor agregado de contratos no es igual al monto efectivamente apropiado."
    ],
    pending: [
      "La responsabilidad de funcionarios, contratistas y mandatarios territoriales debe resolverse en los procesos individuales.",
      "Debe verificarse proyecto por proyecto qué recursos fueron ejecutados, desviados, recuperados o permanecen protegidos."
    ],
    people: [
      { name: "Nueve personas capturadas", role: "Funcionarios, exfuncionarios y particulares según la Fiscalía", status: "Imputaciones en curso" },
      { name: "AREMCA", role: "Asociación Regional de Municipios del Caribe", status: "Vehículo contractual investigado" }
    ],
    timeline: [
      { date: "2026-04-15", title: "Operativo y capturas", text: "La Fiscalía anunció nueve capturas y la afectación del presunto entramado." },
      { date: "2026-06-02", title: "Ampliación de la investigación", text: "La entidad reportó actuaciones adicionales sobre proyectos asignados a AREMCA con recursos de regalías." }
    ],
    sources: [
      { name: "Fiscalía · 101 contratos y capturas", type: "Fuente primaria", date: "2026-04-15", url: "https://www.fiscalia.gov.co/colombia/noticias/fiscalia-afecta-entramado-de-corrupcion-senalado-de-direccionar-101-contratos-que-ascendieron-en-valor-a-medio-billon-de-pesos/" },
      { name: "Fiscalía · etiqueta AREMCA", type: "Fuente primaria", date: "2026-06-02", url: "https://www.fiscalia.gov.co/colombia/tag/aremca/" }
    ],
    tags: ["AREMCA", "regalías", "contratos", "municipios", "medio billón"]
  },
  {
    id: "libro-verdad-empalme-2026",
    title: "Libro de la Verdad: reportes del empalme sobre el Gobierno Petro",
    deck: "Un conjunto de señalamientos remitido a los organismos de control, todavía sujeto a verificación caso por caso.",
    institution: "Presidencia 2026–2030 · Fiscalía · Contraloría · Procuraduría",
    sector: "Empalme y control administrativo",
    territory: "Nacional",
    relation: "REVISIÓN DEL GOBIERNO ANTERIOR",
    stage: "report",
    stageLabel: "REPORTE REMITIDO A AUTORIDADES",
    featured: true,
    lastUpdate: "2026-09-09",
    summary:
      "El nuevo Gobierno entregó a Fiscalía, Contraloría y Procuraduría un documento sobre presuntas irregularidades encontradas durante el empalme. La remisión activa verificaciones preliminares, pero el documento proviene de la administración sucesora y no constituye por sí mismo un hallazgo fiscal, una imputación o una condena.",
    money: [
      { label: "Naturaleza", value: "Reporte de empalme" },
      { label: "Regla de lectura", value: "No sumar como detrimento probado" }
    ],
    established: [
      "La Presidencia entregó formalmente el documento a los tres principales organismos de investigación y control el 18 de agosto de 2026.",
      "Entre los asuntos divulgados aparecen procesos de FENOGE, Fondo de Igualdad, tierras, UNP, Fontur y contratos en distintas entidades.",
      "La entrega del reporte es un hecho verificable; la veracidad y alcance jurídico de cada señalamiento requieren decisiones independientes."
    ],
    pending: [
      "Fiscalía, Contraloría y Procuraduría deben decidir cuáles hechos abren actuaciones, cuáles se archivan y cuáles producen hallazgos o cargos.",
      "Cada capítulo debe convertirse en expediente propio solo cuando exista documento, contrato o actuación formal verificable.",
      "Las respuestas y documentos de los exfuncionarios señalados deben incorporarse cuando estén disponibles."
    ],
    people: [
      { name: "Gobierno 2026–2030", role: "Autor y remitente del reporte", status: "Denunciante institucional; no autoridad que decide responsabilidad" },
      { name: "Fiscalía, Contraloría y Procuraduría", role: "Entidades receptoras", status: "Verificación e investigaciones preliminares" },
      { name: "Exfuncionarios del Gobierno Petro", role: "Personas o administraciones mencionadas", status: "Sin responsabilidad automática por aparecer en el documento" }
    ],
    timeline: [
      { date: "2026-08-18", title: "Entrega oficial", text: "La Presidencia remitió el Libro de la Verdad a Fiscalía, Contraloría y Procuraduría." },
      { date: "2026-08-29", title: "Auditorías forenses anunciadas", text: "El Ejecutivo ordenó revisar informes y actas de gestión de la administración anterior." },
      { date: "2026-09-09", title: "Seguimiento gubernamental", text: "La Presidencia informó que continuaría la identificación de patrones y la remisión de hallazgos." }
    ],
    sources: [
      { name: "Presidencia · entrega del Libro de la Verdad", type: "Fuente del denunciante", date: "2026-08-18", url: "https://www.presidencia.gov.co/prensa/Paginas/Pongo-formalmente-en-sus-manos-el-Libro-de-la-Verdad-el-pais-quiere-saber-que-paso-Presidente-Abelardo-260818.aspx" },
      { name: "Presidencia · explicación del alcance", type: "Fuente del denunciante", date: "2026-08-18", url: "https://www.presidencia.gov.co/prensa/Paginas/Libro-de-la-Verdad-no-es-el-fin-de-la-historia-sigue-la-tarea-de-identificar-patrones-de-comportamiento-260818.aspx" },
      { name: "Vanguardia · capítulos divulgados y respuestas", type: "Contexto periodístico", date: "2026-08-19", url: "https://www.vanguardia.com/politica/2026/08/19/el-listado-de-casos-de-corrupcion-en-el-gobierno-petro-revelado-por-abelardo-de-la-espriella/" }
    ],
    tags: ["Libro de la Verdad", "empalme", "FENOGE", "Fonigualdad", "Fontur", "auditoría"]
  },
  {
    id: "hospital-san-juan-de-dios-licitacion",
    title: "Licitación del Hospital San Juan de Dios",
    deck: "La Procuraduría pidió suspender un proceso de más de $292.000 millones mientras se aclaran sus soportes.",
    institution: "ANIM · Fiduciaria · Hospital San Juan de Dios",
    sector: "Salud e infraestructura",
    territory: "Bogotá",
    relation: "CONTRATACIÓN INICIADA EN EL PERÍODO",
    stage: "finding",
    stageLabel: "CONTROL PREVENTIVO",
    featured: false,
    lastUpdate: "2026-08-19",
    summary:
      "La Procuraduría pidió suspender la licitación para remodelar y ampliar el Hospital San Juan de Dios y el Materno Infantil. Señaló ausencia de soportes claros de financiación, inconsistencias en la evaluación y posibles deficiencias de publicidad e igualdad.",
    money: [
      { label: "Valor del proceso", value: "> $292.000 millones" },
      { label: "Estado del dinero", value: "Proceso contractual bajo revisión" }
    ],
    established: [
      "Existe una solicitud preventiva formal de la Procuraduría dirigida a las entidades responsables del proceso.",
      "La solicitud identifica riesgos contractuales; no declara que los recursos hayan sido robados ni asigna responsabilidad penal.",
      "El expediente debe actualizarse con la decisión de las entidades y cualquier actuación fiscal, disciplinaria o penal posterior."
    ],
    pending: [
      "Determinar si el proceso fue suspendido, corregido, cancelado o adjudicado.",
      "Establecer si las inconsistencias derivan en hallazgos formales o se subsanan dentro del trámite."
    ],
    people: [
      { name: "Agencia Nacional Inmobiliaria Virgilio Barco", role: "Entidad responsable", status: "Requerida por la Procuraduría" },
      { name: "Fiduciaria administradora", role: "Interviniente contractual", status: "Requerida por la Procuraduría" }
    ],
    timeline: [
      { date: "2026-08-19", title: "Solicitud de suspensión", text: "La Procuraduría pidió detener preventivamente la licitación mientras se aclaraban financiación, evaluación y publicidad." }
    ],
    sources: [
      { name: "Procuraduría · solicitud de suspensión", type: "Fuente primaria", date: "2026-08-19", url: "https://www.procuraduria.gov.co/Pages/procuraduria-pide-suspender-licitacion-mas-292-mil-millones-para-remodelacion-hospital-san-juan-de-dios.aspx" }
    ],
    tags: ["Hospital San Juan de Dios", "licitación", "Bogotá", "salud", "Procuraduría"]
  },
  {
    id: "ofac-petro-red-apoyo",
    title: "Designaciones OFAC a Gustavo Petro y su red de apoyo",
    deck: "Una medida financiera de Estados Unidos bajo autoridad antinarcóticos; no una condena colombiana por corrupción.",
    institution: "Departamento del Tesoro de Estados Unidos · OFAC",
    sector: "Medida financiera internacional",
    territory: "Estados Unidos · Colombia",
    relation: "MEDIDA INTERNACIONAL",
    stage: "international",
    stageLabel: "LISTA OFAC / SDN",
    featured: true,
    lastUpdate: "2025-10-24",
    summary:
      "OFAC añadió a Gustavo Petro, Verónica Alcocer, Nicolás Petro y Armando Benedetti a la lista de Nacionales Especialmente Designados. El Tesoro fundamentó la medida en la Orden Ejecutiva 14059, relacionada con el comercio ilícito global de drogas.",
    money: [
      { label: "Tipo de medida", value: "Bloqueo financiero OFAC" },
      { label: "Base declarada", value: "Autoridad antinarcóticos" }
    ],
    established: [
      "La designación aparece en la actualización oficial de la lista SDN del 24 de octubre de 2025.",
      "La medida bloquea bienes bajo jurisdicción estadounidense y restringe transacciones de personas estadounidenses con los designados, salvo autorización.",
      "El comunicado es una decisión administrativa del Ejecutivo estadounidense, no una sentencia penal colombiana ni una condena judicial por corrupción."
    ],
    pending: [
      "Cualquier modificación o retiro debe verificarse directamente en OFAC; no basta una declaración política o periodística.",
      "La página no contará la revocación de la visa de Petro como corrupción: Estados Unidos la atribuyó a declaraciones realizadas en una protesta, una causa distinta."
    ],
    people: [
      { name: "Gustavo Petro Urrego", role: "Expresidente de Colombia", status: "Designado por OFAC bajo E.O. 14059" },
      { name: "Verónica Alcocer García", role: "Esposa del expresidente", status: "Designada por OFAC" },
      { name: "Nicolás Petro Burgos", role: "Hijo del expresidente", status: "Designado por OFAC" },
      { name: "Armando Benedetti Villaneda", role: "Exalto funcionario y aliado político", status: "Designado por OFAC" }
    ],
    timeline: [
      { date: "2025-09-27", title: "Visa revocada por una causa distinta", text: "El Departamento de Estado anunció la revocación de la visa de Petro por declaraciones en una protesta. Este hecho no se clasifica como corrupción." },
      { date: "2025-10-24", title: "Designaciones OFAC", text: "Tesoro y OFAC publicaron las cuatro inclusiones bajo la Orden Ejecutiva 14059." }
    ],
    sources: [
      { name: "Tesoro de EE. UU. · comunicado de designación", type: "Fuente primaria", date: "2025-10-24", url: "https://home.treasury.gov/news/press-releases/sb0292" },
      { name: "OFAC · actualización de la lista SDN", type: "Fuente primaria", date: "2025-10-24", url: "https://ofac.treasury.gov/recent-actions/20251024" },
      { name: "Reuters · motivo anunciado para la revocación de visa", type: "Contexto verificable", date: "2025-09-27", url: "https://www.reuters.com/world/us/us-revoke-colombia-president-petros-visa-over-reckless-actions-new-york-2025-09-27/" }
    ],
    tags: ["OFAC", "SDN", "Estados Unidos", "Gustavo Petro", "Armando Benedetti", "Nicolás Petro"]
  }
];

const corruptionGlossary = {
  "hallazgo fiscal": "Resultado preliminar o definitivo de control fiscal sobre un posible daño al patrimonio. Debe leerse según la etapa indicada por la Contraloría.",
  "indagación": "Etapa de verificación inicial para identificar hechos y posibles responsables.",
  "imputación": "Comunicación formal de cargos de la Fiscalía ante un juez. No equivale a condena.",
  "acusación": "Acto con el que la Fiscalía lleva su teoría del caso a juicio. La responsabilidad todavía no ha sido decidida.",
  "medida de aseguramiento": "Restricción preventiva ordenada durante el proceso. No es una pena ni prueba por sí sola culpabilidad.",
  "condena": "Decisión judicial que declara responsabilidad penal. El expediente debe indicar si admite recursos o está en firme.",
  "sanción disciplinaria": "Decisión sobre el incumplimiento de deberes de un servidor público. Es distinta de una condena penal.",
  "preacuerdo": "Acuerdo entre Fiscalía y procesado que requiere aprobación judicial y puede conducir a una condena con beneficios.",
  "OFAC": "Oficina de Control de Activos Extranjeros del Tesoro de Estados Unidos. Administra sanciones económicas; sus designaciones no son sentencias penales colombianas.",
  "presunción de inocencia": "Toda persona debe ser tratada como inocente mientras no exista una decisión judicial condenatoria conforme al debido proceso."
};
