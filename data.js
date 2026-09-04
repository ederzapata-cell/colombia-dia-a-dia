const dayMeta = {
  "2026-08-07": {
    status: "VERIFICADO ✓",
    subtitle: "Inicio del periodo presidencial 2026–2030."
  },
  "2026-08-08": {
    status: "VERIFICADO ✓",
    subtitle: "Seguridad, conformación del Gobierno y primeras decisiones."
  },
  "2026-08-09": {
    status: "VERIFICADO ✓",
    subtitle: "Actividad presidencial, seguridad y una verificación pública."
  },
  "2026-08-10": {
    status: "VERIFICADO ✓",
    subtitle: "Terremoto de magnitud 7,4 y activación de la respuesta nacional."
  },
  "2026-08-11": {
    status: "VERIFICADO ✓",
    subtitle: "Declaratoria de desastre y primeras medidas nacionales."
  },
  "2026-08-12": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencia, cooperación internacional e instituciones."
  },
  "2026-08-13": {
    status: "VERIFICADO ✓",
    subtitle: "Actualización de la emergencia y nueva cooperación internacional."
  },
  "2026-08-14": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencia, justicia, reconstrucción y derechos humanos."
  },
  "2026-08-15": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencia, seguridad y actividad de la oposición."
  },
  "2026-08-16": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencia, cooperación internacional y relaciones comerciales."
  },
  "2026-08-17": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencia, seguridad y control político."
  },
  "2026-08-18": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencia, control político y política antidrogas."
  },
  "2026-08-19": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencia económica y actividad institucional."
  },
  "2026-08-20": {
    status: "VERIFICADO ✓",
    subtitle: "Fuerza Pública, terremoto y actuaciones judiciales."
  },
  "2026-08-21": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencia, cooperación internacional y decisiones comerciales."
  },
  "2026-08-22": {
    status: "VERIFICADO ✓",
    subtitle: "Reconstrucción, justicia y seguimiento de la emergencia."
  },
  "2026-08-23": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencias y actuaciones institucionales."
  },
  "2026-08-24": {
    status: "VERIFICADO ✓",
    subtitle: "Reconstrucción, energía y actualización de la emergencia."
  },
  "2026-08-25": {
    status: "VERIFICADO ✓",
    subtitle: "Instituciones, justicia constitucional y terremoto."
  },
  "2026-08-26": {
    status: "VERIFICADO ✓",
    subtitle: "Seguridad, oposición, cooperación y justicia."
  },
  "2026-08-27": {
    status: "VERIFICADO ✓",
    subtitle: "Presupuesto, seguridad e impacto del terremoto."
  },
  "2026-08-28": {
    status: "VERIFICADO ✓",
    subtitle: "Reconstrucción, servicios, derechos humanos y política de paz."
  },
  "2026-08-29": {
    status: "VERIFICADO ✓",
    subtitle: "Emergencias, contratación pública, oposición y recuperación."
  },
  "2026-08-30": {
    status: "VERIFICADO ✓",
    subtitle: "Seguridad, derechos humanos, incendios y decisiones nacionales."
  },
  "2026-08-31": {
    status: "VERIFICADO ✓",
    subtitle: "Economía, seguridad, oposición e instituciones."
  },
  "2026-09-01": {
    status: "VERIFICADO ✓",
    subtitle: "Energía, instituciones, justicia y seguridad."
  },
  "2026-09-02": {
    status: "VERIFICADO ✓",
    subtitle: "Seguridad, justicia, contratación pública, control institucional y reconstrucción."
  },
  "2026-09-03": {
    status: "VERIFICADO ✓",
    subtitle: "Justicia, seguridad, instituciones, política y control de recursos públicos."
  }
};


const events = [

  // =========================================================
  // 07 AGO
  // =========================================================

  {
    id: "posesion-presidencial",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "INSTITUCIONAL",
    title: "Abelardo de la Espriella se posesiona como presidente de Colombia",
    summary: "El Congreso en pleno tomó juramento al nuevo presidente para el periodo 2026–2030 durante una ceremonia realizada en Cali.",
    eventDate: "2026-08-07",
    publishedDate: "2026-08-07",
    sourceType: "Fuente oficial",
    sourceName: "Senado de la República",
    sourceUrl: "https://senado.gov.co/index.php/el-senado/noticias/7506-como-fue-la-sesion-del-congreso-en-pleno-en-la-que-se-posesiono-abelardo-de-la-espriella",
    status: "Verificado",
    related: ["Congreso en pleno", "posesión presidencial", "Cali", "Abelardo de la Espriella"],
    extraSources: [
      ["Presidencia · video de la ceremonia", "https://www.presidencia.gov.co/prensa/videos/Paginas/Video-Ceremonia-de-posesion-presidencial-2026-2030-260807.aspx"],
      ["Cámara de Representantes · orden del día", "https://www.camara.gov.co/evento/orden-del-dia-congreso-pleno-07-08-2026/"]
    ]
  },

  {
    id: "mando-presidencial",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "FUERZA PÚBLICA",
    title: "Fuerzas Militares reconocen al nuevo comandante supremo",
    summary: "El Ejército documentó el reconocimiento del mando presidencial, acompañado por los honores militares protocolarios.",
    eventDate: "2026-08-07",
    publishedDate: "2026-08-07",
    sourceType: "Fuente oficial",
    sourceName: "Ejército Nacional",
    sourceUrl: "https://www.ejercito.mil.co/tradicion-solemnidad-y-marcialidad-la-escuela-militar-de-cadetes-acompano-el-reconocimiento-del-mando-presidencial",
    status: "Verificado",
    related: ["comandante supremo", "Fuerza Pública", "honores militares"],
    extraSources: []
  },

  {
    id: "cepeda-barranquilla",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "ACTIVIDAD POLÍTICA",
    title: "Iván Cepeda encabeza concentración en Barranquilla",
    summary: "Cepeda describió la movilización como una expresión de “desobediencia civil, resistencia y soberanía popular” y manifestó que no reconocía la legitimidad del nuevo mandatario.",
    eventDate: "2026-08-07",
    publishedDate: "2026-08-07",
    sourceType: "Declaración atribuida",
    sourceName: "EFE",
    sourceUrl: "https://efe.com/mundo/2026-08-07/ivan-cepeda-resistencia-gobierno-aberlado-de-la-espriella/",
    status: "Declaración documentada",
    related: ["Iván Cepeda", "Barranquilla", "desobediencia civil", "legitimidad"],
    extraSources: []
  },

  {
    id: "petro-sale-casa-narino",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "TRANSICIÓN",
    title: "Gustavo Petro deja la Casa de Nariño al terminar su mandato",
    summary: "El expresidente salió de la Casa de Nariño por última vez como jefe de Estado antes del cambio de gobierno.",
    eventDate: "2026-08-07",
    publishedDate: "2026-08-07",
    sourceType: "Fuente periodística",
    sourceName: "EFE",
    sourceUrl: "https://efe.com/mundo/2026-08-07/petro-despedida-presidencia-colombia/",
    status: "Documentado",
    related: ["Gustavo Petro", "Casa de Nariño", "transición presidencial"],
    extraSources: []
  },

  {
    id: "captura-segovia",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Policía reporta captura en Segovia con arma, munición y un dron",
    summary: "La Policía informó la captura de un hombre en Segovia, Antioquia, y la incautación de una pistola, munición, un dron y accesorios. El hecho ocurrió el 7 y fue publicado el 8.",
    eventDate: "2026-08-07",
    publishedDate: "2026-08-08",
    sourceType: "Fuente oficial",
    sourceName: "Policía Nacional",
    sourceUrl: "https://oas.policia.gov.co/index.php/noticia/captura-un-ciudadano-por-porte-ilegal-armas-fuego",
    status: "Verificado",
    related: ["Segovia", "Antioquia", "Policía Nacional"],
    extraSources: []
  },


  // =========================================================
  // 08 AGO
  // =========================================================

  {
    id: "consejo-seguridad-cali",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "SEGURIDAD",
    title: "Gobierno concluye su primer consejo de seguridad en Cali",
    summary: "El nuevo Gobierno realizó su primer consejo de seguridad, con revisión de la situación de orden público y las primeras orientaciones de seguridad.",
    eventDate: "2026-08-08",
    publishedDate: "2026-08-08",
    sourceType: "Fuente institucional",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Documentado",
    related: ["Cali", "consejo de seguridad", "orden público"],
    extraSources: []
  },

  {
    id: "posesion-gabinete",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "INSTITUCIONAL",
    title: "Presidente posesiona a integrantes de su gabinete",
    summary: "El acto de posesión del gabinete ocurrió el 8 de agosto, aunque parte de la información institucional fue publicada al día siguiente.",
    eventDate: "2026-08-08",
    publishedDate: "2026-08-09",
    sourceType: "Fuente institucional",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Verificado",
    related: ["gabinete", "ministros", "posesión"],
    extraSources: []
  },

  {
    id: "explosion-mondomo",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Explosión en Mondomo afecta la vía Panamericana y deja dos guardias heridos",
    summary: "Una explosión registrada durante la madrugada en Mondomo, Cauca, dejó dos guardias heridos. La autoría permanecía bajo investigación.",
    eventDate: "2026-08-08",
    publishedDate: "2026-08-08",
    sourceType: "Fuente periodística",
    sourceName: "Prensa nacional",
    sourceUrl: "https://www.eltiempo.com/",
    status: "En esclarecimiento",
    related: ["Mondomo", "Cauca", "Panamericana"],
    note: "No se atribuye autoría mientras las autoridades no la establezcan.",
    extraSources: []
  },


  // =========================================================
  // 09 AGO
  // =========================================================

  {
    id: "silleteros-medellin",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "REGIONES",
    title: "Presidente participa en el Desfile de Silleteros en Medellín",
    summary: "El presidente asistió al 69.º Desfile de Silleteros, en su primera visita presidencial documentada a Medellín y Antioquia.",
    eventDate: "2026-08-09",
    publishedDate: "2026-08-09",
    sourceType: "Fuente institucional",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Verificado",
    related: ["Medellín", "Desfile de Silleteros", "Antioquia"],
    extraSources: []
  },

  {
    id: "verificacion-soldado-video",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "VERIFICACIÓN",
    title: "Ejército aclara que el hombre de un video compartido por Petro no pertenecía a la institución",
    summary: "Gustavo Petro y Gustavo Bolívar compartieron un video presentado como mensaje de un supuesto integrante activo del Ejército. La institución aclaró que la persona no hacía parte de sus filas.",
    eventDate: "2026-08-09",
    publishedDate: "2026-08-09",
    sourceType: "Verificación con fuente institucional",
    sourceName: "Ejército Nacional",
    sourceUrl: "https://www.ejercito.mil.co/",
    status: "Falso",
    related: ["Gustavo Petro", "Gustavo Bolívar", "Ejército", "verificación"],
    note: "El veredicto se limita a la identidad institucional de la persona del video. No se atribuye intención de engañar a quienes lo compartieron.",
    extraSources: []
  },

  {
    id: "operacion-mapiripan",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Operación conjunta deja cuatro integrantes de una estructura armada muertos en Mapiripán",
    summary: "Ejército y Fuerza Aeroespacial reportaron cuatro muertos durante una operación contra la Estructura 28. Entre ellos, según las autoridades, estaban alias Ruso y alias Alemán.",
    eventDate: "2026-08-09",
    publishedDate: "2026-08-09",
    sourceType: "Fuente oficial",
    sourceName: "Fuerzas Militares",
    sourceUrl: "https://www.cgfm.mil.co/",
    status: "Atribución oficial",
    related: ["Mapiripán", "Meta", "Estructura 28"],
    extraSources: []
  },


  // =========================================================
  // 10 AGO
  // =========================================================

  {
    id: "terremoto-10-agosto",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "Sismo de magnitud 7,4 golpea Colombia",
    summary: "El Servicio Geológico Colombiano registró a las 7:34 a. m. un sismo de magnitud 7,4 con epicentro en San José del Palmar, Chocó, y profundidad cercana a 103 kilómetros.",
    eventDate: "2026-08-10",
    publishedDate: "2026-08-10",
    sourceType: "Fuente oficial",
    sourceName: "Servicio Geológico Colombiano",
    sourceUrl: "https://www2.sgc.gov.co/Noticias/Paginas/Sismo-de-magnitud-7-4-el-SGC-resolvio-las-preguntas-mas-frecuentes-para-entender-el-evento.aspx",
    status: "Verificado",
    related: ["terremoto", "San José del Palmar", "Chocó", "SGC"],
    extraSources: []
  },

  {
    id: "respuesta-nacional-sismo",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "EMERGENCIA",
    title: "Gobierno activa respuesta nacional tras el terremoto",
    summary: "El presidente convocó el Comité Nacional para el Manejo de Desastres y se activaron la Sala de Crisis y mecanismos de coordinación nacional.",
    eventDate: "2026-08-10",
    publishedDate: "2026-08-10",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Verificado",
    related: ["UNGRD", "Sala de Crisis", "PMU", "terremoto"],
    note: "La situación de desastre nacional fue declarada jurídicamente el 11 de agosto, no el día 10.",
    extraSources: []
  },

  {
    id: "petro-solidaridad-sismo",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "EMERGENCIA",
    title: "Petro llama a sus seguidores a coordinar solidaridad tras el terremoto",
    summary: "El expresidente pidió organizar acciones de solidaridad y apoyo para las comunidades afectadas.",
    eventDate: "2026-08-10",
    publishedDate: "2026-08-10",
    sourceType: "Declaración atribuida",
    sourceName: "Gustavo Petro",
    sourceUrl: "https://x.com/petrogustavo",
    status: "Declaración documentada",
    related: ["Gustavo Petro", "terremoto", "solidaridad"],
    extraSources: []
  },


  // =========================================================
  // 11 AGO
  // =========================================================

  {
    id: "decreto-1171-desastre",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "EMERGENCIA",
    title: "Gobierno declara situación de desastre de carácter nacional",
    summary: "El Decreto 1171 declaró la situación de desastre nacional por 12 meses, prorrogables, y ordenó formular un Plan de Acción Específico para la recuperación.",
    eventDate: "2026-08-11",
    publishedDate: "2026-08-11",
    legalDate: "2026-08-11",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://dapre.presidencia.gov.co/",
    status: "Verificado",
    related: ["Decreto 1171", "situación de desastre", "UNGRD"],
    extraSources: []
  },

  {
    id: "decreto-1172-luto",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "INSTITUCIONAL",
    title: "Gobierno decreta tres días de duelo nacional",
    summary: "El Decreto 1172 estableció tres días de duelo nacional y dispuso banderas a media asta por las víctimas del terremoto.",
    eventDate: "2026-08-11",
    publishedDate: "2026-08-11",
    legalDate: "2026-08-11",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://dapre.presidencia.gov.co/",
    status: "Verificado",
    related: ["Decreto 1172", "duelo nacional", "terremoto"],
    extraSources: []
  },

  {
    id: "unicef-balance-11",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNICEF reporta fuerte impacto del terremoto en población e infraestructura educativa",
    summary: "El balance conocido el 11 registró 181 fallecidos, 195 desaparecidos, más de 2.595 heridos y 796 escuelas afectadas.",
    eventDate: "2026-08-11",
    publishedDate: "2026-08-11",
    sourceType: "Fuente institucional",
    sourceName: "UNICEF",
    sourceUrl: "https://www.unicef.org/colombia/",
    status: "Balance provisional",
    related: ["UNICEF", "terremoto", "escuelas"],
    extraSources: []
  },


  // =========================================================
  // 12 AGO
  // =========================================================

  {
    id: "anuncio-emergencia-economica",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "ECONOMÍA",
    title: "Presidente anuncia intención de declarar emergencia económica",
    summary: "El presidente anunció que acudiría a la figura de Emergencia Económica, Social y Ecológica para enfrentar las consecuencias del terremoto.",
    eventDate: "2026-08-12",
    publishedDate: "2026-08-12",
    sourceType: "Declaración oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Anunciado",
    related: ["emergencia económica", "terremoto", "Fondo Milagro"],
    note: "El anuncio no equivalía todavía a la declaratoria jurídica. El Decreto 1261 fue expedido el 19 de agosto.",
    extraSources: []
  },

  {
    id: "contralor-eleccion",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "CONGRESO",
    title: "Congreso elige a Jorge Eliécer Laverde Vargas como contralor general",
    summary: "El Congreso en pleno eligió a Jorge Eliécer Laverde Vargas como nuevo contralor general con 269 votos consolidados.",
    eventDate: "2026-08-12",
    publishedDate: "2026-08-12",
    sourceType: "Fuente institucional",
    sourceName: "Congreso de la República",
    sourceUrl: "https://www.senado.gov.co/",
    status: "Verificado",
    related: ["Contraloría General", "Jorge Eliécer Laverde Vargas", "Congreso"],
    extraSources: []
  },

  {
    id: "ue-ayuda-2-1m",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INTERNACIONAL",
    title: "Unión Europea anuncia 2,1 millones de euros adicionales para la respuesta humanitaria",
    summary: "La Unión Europea anunció financiación adicional para apoyar la atención humanitaria tras el terremoto.",
    eventDate: "2026-08-12",
    publishedDate: "2026-08-12",
    sourceType: "Fuente institucional",
    sourceName: "Unión Europea",
    sourceUrl: "https://civil-protection-humanitarian-aid.ec.europa.eu/",
    status: "Anunciado",
    related: ["Unión Europea", "ayuda humanitaria", "terremoto"],
    note: "Anunciado no equivale automáticamente a recibido o ejecutado.",
    extraSources: []
  },

  {
    id: "ayuda-internacional-contexto",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "VERIFICACIÓN",
    title: "La afirmación de que Colombia rechazó toda la ayuda internacional necesita contexto",
    summary: "Colombia aceptó y coordinó asistencia internacional, aunque inicialmente limitó qué equipos extranjeros de búsqueda y rescate serían incorporados a la operación.",
    eventDate: "2026-08-12",
    publishedDate: "2026-08-12",
    sourceType: "Verificación",
    sourceName: "Fuentes oficiales y periodísticas",
    sourceUrl: "https://www.cancilleria.gov.co/",
    status: "Necesita contexto",
    related: ["ayuda internacional", "USAR", "terremoto"],
    extraSources: []
  },


  // =========================================================
  // 13 AGO
  // =========================================================

  {
    id: "balance-sismo-13",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "Balance oficial eleva a 281 las personas fallecidas por el terremoto",
    summary: "El balance reportó 281 fallecidos, 3.971 heridos, 379 desaparecidos y decenas de miles de viviendas afectadas.",
    eventDate: "2026-08-13",
    publishedDate: "2026-08-13",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Balance provisional",
    related: ["terremoto", "UNGRD", "damnificados"],
    extraSources: []
  },

  {
    id: "petro-deuda-reconstruccion",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "ECONOMÍA",
    title: "Petro cuestiona financiar la atención del terremoto mediante mayor endeudamiento",
    summary: "El expresidente compartió un mensaje atribuido al exdirector de la UNGRD Javier Pava y sostuvo que los sectores con mayores recursos deberían asumir una mayor parte del costo.",
    eventDate: "2026-08-13",
    publishedDate: "2026-08-13",
    sourceType: "Declaración atribuida",
    sourceName: "Gustavo Petro",
    sourceUrl: "https://x.com/petrogustavo",
    status: "Declaración documentada",
    related: ["Gustavo Petro", "deuda pública", "reconstrucción"],
    extraSources: []
  },

  {
    id: "emiratos-ayuda",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INTERNACIONAL",
    title: "Emiratos Árabes Unidos anuncia respuesta humanitaria valorada en US$10 millones",
    summary: "El Gobierno de Emiratos Árabes Unidos anunció una respuesta de emergencia para Colombia tras el terremoto.",
    eventDate: "2026-08-13",
    publishedDate: "2026-08-13",
    sourceType: "Fuente institucional",
    sourceName: "Gobierno de Emiratos Árabes Unidos",
    sourceUrl: "https://www.mofa.gov.ae/",
    status: "Anunciado",
    related: ["Emiratos Árabes Unidos", "ayuda humanitaria"],
    note: "El valor anunciado no se presenta automáticamente como recursos ya ejecutados.",
    extraSources: []
  },


  // =========================================================
  // 14 AGO
  // =========================================================

  {
    id: "balance-ungrd-14",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD reporta 288 fallecidos y 4.018 heridos",
    summary: "El corte de las 4:30 p. m. registró 288 fallecidos, 4.018 heridos, 202 desaparecidos y 354 rescatados.",
    eventDate: "2026-08-14",
    publishedDate: "2026-08-14",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto", "Chocó"],
    extraSources: []
  },

  {
    id: "plan-marshall-choco",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "RECONSTRUCCIÓN",
    title: "Gobierno anuncia un plan especial de reconstrucción para Chocó",
    summary: "El Gobierno anunció un esquema especial de recuperación para Chocó y la designación de una gerencia para coordinar la reconstrucción.",
    eventDate: "2026-08-14",
    publishedDate: "2026-08-14",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Anunciado",
    related: ["Chocó", "reconstrucción", "terremoto"],
    extraSources: []
  },

  {
    id: "catatumbo-defensoria",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "DERECHOS HUMANOS",
    title: "Defensoría pide esclarecer heridas a civiles durante operación en Catatumbo",
    summary: "La Defensoría confirmó tres civiles heridos por explosivos en El Sinaí y pidió a la Fiscalía determinar si las lesiones fueron causadas por la Fuerza Pública o por un grupo armado.",
    eventDate: "2026-08-14",
    publishedDate: "2026-08-14",
    sourceType: "Fuente oficial",
    sourceName: "Defensoría del Pueblo",
    sourceUrl: "https://www.defensoria.gov.co/",
    status: "En esclarecimiento",
    related: ["Catatumbo", "Defensoría", "Fiscalía", "civiles"],
    note: "La responsabilidad por las lesiones no estaba establecida.",
    extraSources: []
  },


  // =========================================================
  // 15 AGO
  // =========================================================

  {
    id: "balance-ungrd-15",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD actualiza a 294 las personas fallecidas",
    summary: "El corte de las 6:30 a. m. registró 294 fallecidos, 3.935 heridos, 320 desaparecidos y 353 rescatados.",
    eventDate: "2026-08-15",
    publishedDate: "2026-08-15",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["terremoto", "UNGRD"],
    extraSources: []
  },

  {
    id: "ataque-abrego",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Ataque con drones y explosivos en Ábrego deja un soldado muerto y cinco heridos",
    summary: "El Ejército reportó un ataque nocturno contra tropas que prestaban seguridad vial en Ábrego, Norte de Santander.",
    eventDate: "2026-08-15",
    publishedDate: "2026-08-15",
    sourceType: "Fuente oficial",
    sourceName: "Ejército Nacional",
    sourceUrl: "https://www.ejercito.mil.co/",
    status: "Atribución preliminar",
    related: ["Ábrego", "ELN", "drones", "Ejército"],
    note: "La atribución al Frente Carlos Armando Cacua Guerrero del ELN fue presentada como valoración preliminar del Ejército.",
    extraSources: []
  },

  {
    id: "cepeda-quibdo-ayuda",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "CONTROL POLÍTICO",
    title: "Iván Cepeda cuestiona en Quibdó el manejo de la ayuda humanitaria",
    summary: "Cepeda calificó como “selectivo” el manejo de la ayuda y anunció vigilancia de la oposición sobre su distribución.",
    eventDate: "2026-08-15",
    publishedDate: "2026-08-15",
    sourceType: "Declaración atribuida",
    sourceName: "EFE",
    sourceUrl: "https://efe.com/",
    status: "Declaración documentada",
    related: ["Iván Cepeda", "Quibdó", "ayuda humanitaria"],
    note: "La expresión “selectivo” corresponde a Cepeda y no a una conclusión editorial.",
    extraSources: []
  },


  // =========================================================
  // 16 AGO
  // =========================================================

  {
    id: "balance-sismo-16",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD reporta 287 fallecidos, 4.147 heridos y 194 desaparecidos",
    summary: "El corte de las 6:30 p. m. mostró ajustes en las cifras luego de procesos de conciliación y eliminación de registros duplicados.",
    eventDate: "2026-08-16",
    publishedDate: "2026-08-16",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto", "conciliación de datos"],
    extraSources: []
  },

  {
    id: "ayuda-bilateral-222-ton",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INTERNACIONAL",
    title: "Cancillería reporta 222,5 toneladas de ayuda bilateral recibidas",
    summary: "Cancillería informó que Colombia había recibido 222,5 toneladas de ayuda humanitaria bilateral y que 144 especialistas internacionales estaban desplegados.",
    eventDate: "2026-08-16",
    publishedDate: "2026-08-16",
    sourceType: "Fuente oficial",
    sourceName: "Cancillería",
    sourceUrl: "https://www.cancilleria.gov.co/",
    status: "Recibido",
    related: ["ayuda humanitaria", "Cancillería", "cooperación internacional"],
    extraSources: []
  },


  // =========================================================
  // 17 AGO
  // =========================================================

  {
    id: "alocucion-terremoto",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "EMERGENCIA",
    title: "Presidente realiza su primera alocución nacional sobre el terremoto",
    summary: "El Gobierno presentó al país un balance de la emergencia y las líneas generales de respuesta y reconstrucción.",
    eventDate: "2026-08-17",
    publishedDate: "2026-08-17",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Verificado",
    related: ["alocución", "terremoto", "reconstrucción"],
    extraSources: []
  },

  {
    id: "mocion-beltran-anuncio",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "CONTROL POLÍTICO",
    title: "Alejandro Toro anuncia moción de censura contra el ministro de Vivienda",
    summary: "El congresista anunció que promovería una moción de censura contra Jaime Andrés Beltrán tras la controversia por un viaje a Santa Marta.",
    eventDate: "2026-08-17",
    publishedDate: "2026-08-17",
    sourceType: "Declaración atribuida",
    sourceName: "Congreso / medios nacionales",
    sourceUrl: "https://www.camara.gov.co/",
    status: "Anunciado",
    related: ["moción de censura", "Jaime Andrés Beltrán", "Alejandro Toro"],
    note: "El 17 fue anunciada. La presentación formal ocurrió el 18.",
    extraSources: []
  },

  {
    id: "secuestro-policias",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Tres integrantes de la Dijín son secuestrados en Norte de Santander",
    summary: "Fredy Alexis Russi González, Erika Tatiana Monroy Hurtado y Edinson Yesid Medina Traslaviña fueron secuestrados en La Curva, Bucarasica.",
    eventDate: "2026-08-17",
    publishedDate: "2026-08-17",
    sourceType: "Fuente institucional",
    sourceName: "Policía Nacional",
    sourceUrl: "https://www.policia.gov.co/",
    status: "Verificado",
    related: ["Dijín", "Bucarasica", "secuestro", "Norte de Santander"],
    extraSources: []
  },


  // =========================================================
  // 18 AGO
  // =========================================================

  {
    id: "mocion-beltran-radicada",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "CONTROL POLÍTICO",
    title: "Congresistas presentan formalmente moción de censura contra el ministro de Vivienda",
    summary: "La moción anunciada el día anterior fue presentada formalmente con el respaldo mínimo requerido de firmas.",
    eventDate: "2026-08-18",
    publishedDate: "2026-08-18",
    sourceType: "Fuente institucional",
    sourceName: "Cámara de Representantes",
    sourceUrl: "https://www.camara.gov.co/",
    status: "Presentado",
    related: ["moción de censura", "Jaime Andrés Beltrán", "Congreso"],
    note: "Presentar una moción no significa que el ministro haya sido censurado o removido.",
    extraSources: []
  },

  {
    id: "balance-sismo-18",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "Balance del terremoto llega a 312 fallecidos",
    summary: "El corte de las 7:00 p. m. registró 312 fallecidos, 4.611 heridos, 290 desaparecidos y 358 rescatados.",
    eventDate: "2026-08-18",
    publishedDate: "2026-08-18",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["terremoto", "UNGRD"],
    extraSources: []
  },

  {
    id: "glifosato-resolucion-0006",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "POLÍTICA ANTIDROGAS",
    title: "Consejo Nacional de Estupefacientes elimina la suspensión normativa de 2015 sobre aspersión aérea con glifosato",
    summary: "La Resolución 0006 derogó la norma que mantenía suspendido el uso del glifosato dentro del programa de erradicación mediante aspersión aérea.",
    eventDate: "2026-08-18",
    publishedDate: "2026-08-28",
    legalDate: "2026-08-18",
    sourceType: "Acto administrativo",
    sourceName: "Consejo Nacional de Estupefacientes",
    sourceUrl: "https://www.minjusticia.gov.co/",
    status: "Verificado",
    related: ["glifosato", "aspersión aérea", "Consejo Nacional de Estupefacientes"],
    note: "La derogatoria no significa que las fumigaciones aéreas se hayan reanudado automáticamente. Persisten requisitos ambientales, sanitarios, operativos y de consulta previa.",
    extraSources: []
  },

  {
    id: "video-ia-sismo-falso",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "VERIFICACIÓN",
    title: "Es falso un video viral atribuido a niños afectados por el terremoto",
    summary: "EFE Verifica determinó que un video viral que supuestamente mostraba niños damnificados pidiendo balones al presidente había sido generado a partir de imágenes anteriores de África.",
    eventDate: "2026-08-18",
    publishedDate: "2026-08-18",
    sourceType: "Verificación periodística",
    sourceName: "EFE Verifica",
    sourceUrl: "https://efe.com/efe-verifica/",
    status: "Falso",
    related: ["inteligencia artificial", "video falso", "terremoto"],
    extraSources: []
  },


  // =========================================================
  // 19 AGO
  // =========================================================

  {
    id: "decreto-1261-emergencia",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "ECONOMÍA",
    title: "Gobierno declara Estado de Emergencia Económica, Social y Ecológica",
    summary: "El Decreto 1261 declaró la emergencia por grave calamidad pública durante 30 días y con aplicación en 15 departamentos.",
    eventDate: "2026-08-19",
    publishedDate: "2026-08-19",
    legalDate: "2026-08-19",
    sourceType: "Fuente jurídica",
    sourceName: "Decreto 1261 de 2026",
    sourceUrl: "https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?dt=S&i=193990",
    status: "Verificado",
    related: ["Decreto 1261", "emergencia económica", "terremoto"],
    extraSources: []
  },

  {
    id: "balance-sismo-19",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD reporta 314 fallecidos y 4.437 heridos",
    summary: "El Reporte 36, con corte de las 12:30 p. m., registró 314 fallecidos, 4.437 heridos, 262 desaparecidos y 364 rescatados.",
    eventDate: "2026-08-19",
    publishedDate: "2026-08-19",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto"],
    extraSources: []
  },

  {
    id: "pacto-oposicion-cne",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "INSTITUCIONAL",
    title: "CNE registra formalmente al Pacto Histórico como organización de oposición",
    summary: "La Resolución 3962, adoptada el 18 y publicada el 19, registró formalmente la declaración de oposición del Pacto Histórico.",
    eventDate: "2026-08-19",
    publishedDate: "2026-08-19",
    legalDate: "2026-08-18",
    sourceType: "Fuente institucional",
    sourceName: "Consejo Nacional Electoral",
    sourceUrl: "https://www.cne.gov.co/",
    status: "Verificado",
    related: ["Pacto Histórico", "CNE", "oposición"],
    extraSources: []
  },

  {
    id: "replica-petro-cepeda",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "DERECHO DE RÉPLICA",
    title: "Petro y Cepeda ejercen derecho de réplica a la alocución presidencial",
    summary: "Representantes de la oposición utilizaron el mecanismo de réplica previsto para responder a la alocución presidencial del 17 de agosto.",
    eventDate: "2026-08-19",
    publishedDate: "2026-08-19",
    sourceType: "Fuente institucional",
    sourceName: "Medios públicos / oposición",
    sourceUrl: "https://www.rtvc.gov.co/",
    status: "Documentado",
    related: ["derecho de réplica", "Gustavo Petro", "Iván Cepeda"],
    extraSources: []
  },


  // =========================================================
  // 20 AGO
  // =========================================================

  {
    id: "nuevo-mando-militar",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "FUERZA PÚBLICA",
    title: "Gobierno presenta nuevo alto mando de las Fuerzas Militares",
    summary: "El Gobierno presentó en Barranquilla a los nuevos comandantes de las Fuerzas Militares y del Estado Mayor Conjunto.",
    eventDate: "2026-08-20",
    publishedDate: "2026-08-20",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Verificado",
    related: ["Fuerzas Militares", "alto mando", "Ejército", "Armada"],
    extraSources: []
  },

  {
    id: "balance-sismo-20",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD reporta 319 fallecidos y 4.506 heridos",
    summary: "El corte de las 6:30 p. m. registró 319 fallecidos, 4.506 heridos, 260 desaparecidos y 364 rescatados.",
    eventDate: "2026-08-20",
    publishedDate: "2026-08-20",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["terremoto", "UNGRD"],
    extraSources: []
  },

  {
    id: "captura-coronel-perez",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA",
    title: "Capturan al coronel Carlos Didier Pérez Amorocho",
    summary: "El oficial fue capturado dentro de una investigación por presuntos vínculos y suministro de información a estructuras armadas.",
    eventDate: "2026-08-20",
    publishedDate: "2026-08-20",
    sourceType: "Fuente institucional",
    sourceName: "Fiscalía General de la Nación",
    sourceUrl: "https://www.fiscalia.gov.co/",
    status: "Capturado",
    related: ["Carlos Didier Pérez Amorocho", "Fiscalía", "ELN"],
    note: "Al 20 de agosto su situación era capturado, no condenado.",
    extraSources: []
  },


  // =========================================================
  // 21 AGO
  // =========================================================

  {
    id: "balance-sismo-21",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD actualiza a 321 las personas fallecidas",
    summary: "El corte de las 6:30 a. m. registró 321 fallecidos, 4.595 heridos, 257 desaparecidos y 364 rescatados.",
    eventDate: "2026-08-21",
    publishedDate: "2026-08-21",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["terremoto", "UNGRD"],
    extraSources: []
  },

  {
    id: "onu-plan-humanitario",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INTERNACIONAL",
    title: "ONU presenta adenda humanitaria para responder al terremoto",
    summary: "La ONU estimó 1,2 millones de personas con necesidades, solicitó US$148,1 millones y señaló que más de US$35 millones habían sido movilizados.",
    eventDate: "2026-08-21",
    publishedDate: "2026-08-21",
    sourceType: "Fuente institucional",
    sourceName: "Naciones Unidas en Colombia",
    sourceUrl: "https://colombia.un.org/es/321418-adenda-del-plan-de-respuesta-necesidades-humanitarias-en-colombia-2026",
    status: "Verificado",
    related: ["ONU", "financiación humanitaria", "terremoto"],
    note: "Solicitado, movilizado, asignado, recibido y ejecutado son etapas distintas.",
    extraSources: []
  },

  {
    id: "carbon-israel-reactivacion",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "COMERCIO EXTERIOR",
    title: "Gobierno reactiva exportaciones de carbón a Israel",
    summary: "El Gobierno adoptó una decisión que permitió reactivar las exportaciones de carbón a Israel.",
    eventDate: "2026-08-21",
    publishedDate: "2026-08-22",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Documentado",
    related: ["carbón", "Israel", "exportaciones"],
    extraSources: []
  },


  // =========================================================
  // 22 AGO
  // =========================================================

  {
    id: "credito-vivienda-8",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "RECONSTRUCCIÓN",
    title: "Gobierno y sector financiero acuerdan créditos de vivienda al 8 % E.A. para damnificados",
    summary: "Se anunció un esquema para nuevos créditos de vivienda destinados a personas afectadas por el terremoto en las regiones priorizadas.",
    eventDate: "2026-08-22",
    publishedDate: "2026-08-22",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Acuerdo anunciado",
    related: ["vivienda", "crédito", "terremoto"],
    note: "No significa que el Gobierno haya reducido todas las tasas de vivienda del país.",
    extraSources: []
  },

  {
    id: "balance-sismo-22",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD reporta 329 personas fallecidas",
    summary: "El corte de las 6:30 a. m. registró 329 fallecidos, 4.600 heridos, 247 desaparecidos y 364 rescatados.",
    eventDate: "2026-08-22",
    publishedDate: "2026-08-22",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto"],
    extraSources: []
  },

  {
    id: "imputacion-coronel-perez",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA",
    title: "Fiscalía imputa cargos al coronel Carlos Didier Pérez Amorocho",
    summary: "La Fiscalía formuló cargos, entre ellos concierto para delinquir agravado, cohecho propio y un delito relacionado con armas.",
    eventDate: "2026-08-22",
    publishedDate: "2026-08-22",
    sourceType: "Fuente institucional",
    sourceName: "Fiscalía General de la Nación",
    sourceUrl: "https://www.fiscalia.gov.co/",
    status: "Imputado",
    related: ["Carlos Didier Pérez Amorocho", "imputación", "Fiscalía"],
    note: "El imputado no aceptó los cargos. Imputación no equivale a condena.",
    extraSources: []
  },


  // =========================================================
  // 23 AGO
  // =========================================================

  {
    id: "incendios-23",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INCENDIOS",
    title: "Balance nacional registra nueve incendios activos",
    summary: "El corte de las 5:00 p. m. registró nueve incendios activos y dos controlados. Seis de los activos estaban en Tolima.",
    eventDate: "2026-08-23",
    publishedDate: "2026-08-23",
    sourceType: "Fuente institucional",
    sourceName: "Sistema Nacional de Gestión del Riesgo",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["incendios forestales", "Tolima", "Caldas", "Huila"],
    extraSources: []
  },

  {
    id: "emisoras-paz-defensoria",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "PAZ",
    title: "Defensoría pide reevaluar suspensión de programación de Emisoras de Paz",
    summary: "La Defensoría solicitó revisar la suspensión de programación regional e informativa en 20 Emisoras de Paz.",
    eventDate: "2026-08-23",
    publishedDate: "2026-08-23",
    sourceType: "Fuente oficial",
    sourceName: "Defensoría del Pueblo",
    sourceUrl: "https://www.defensoria.gov.co/",
    status: "Verificado",
    related: ["Emisoras de Paz", "Defensoría", "Acuerdo de Paz"],
    extraSources: []
  },


  // =========================================================
  // 24 AGO
  // =========================================================

  {
    id: "reconstruccion-quibdo",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "RECONSTRUCCIÓN",
    title: "Gobierno abre una nueva etapa de reconstrucción en Quibdó",
    summary: "El Gobierno anunció apoyos temporales de arrendamiento y nuevas medidas para las familias afectadas por el terremoto.",
    eventDate: "2026-08-24",
    publishedDate: "2026-08-24",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Declaracion-del-Presidente-de-la-Republica-Abelardo-De-La-Espriella-al-anunciar-260824.aspx",
    status: "Anunciado",
    related: ["Quibdó", "reconstrucción", "arrendamiento"],
    extraSources: []
  },

  {
    id: "energia-1-5-billones",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "ENERGÍA",
    title: "Gobierno destina $1,5 billones para atender problemas de liquidez del sector eléctrico",
    summary: "MinEnergía anunció recursos para enfrentar problemas de liquidez del sistema, con una primera transferencia de $300.000 millones prevista para los días siguientes.",
    eventDate: "2026-08-24",
    publishedDate: "2026-08-24",
    sourceType: "Fuente oficial",
    sourceName: "Ministerio de Minas y Energía",
    sourceUrl: "https://www.minenergia.gov.co/es/sala-de-prensa/noticias-index/gobierno-nacional-destina-1-5-billones-para-proteger-a-los-colombianos-de-posibles-afectaciones-en-el-servicio-de-energia/",
    status: "Verificado",
    related: ["energía", "liquidez", "sector eléctrico"],
    note: "No se trata de un pago directo de las facturas o deudas de los hogares.",
    extraSources: []
  },

  {
    id: "balance-sismo-24",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD reporta 331 fallecidos y 240 desaparecidos",
    summary: "El corte de las 6:30 p. m. registró 331 fallecidos, 4.439 heridos, 240 desaparecidos y 364 rescatados.",
    eventDate: "2026-08-24",
    publishedDate: "2026-08-24",
    sourceType: "Balance UNGRD reproducido por prensa",
    sourceName: "Vanguardia",
    sourceUrl: "https://www.vanguardia.com/colombia/2026/08/24/terremoto-en-colombia-ya-deja-331-muertos-y-240-desaparecidos-nuevo-balance-de-la-ungrd/",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto"],
    extraSources: []
  },

  {
    id: "ataque-naylea-barros",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Atacan vehículo de dirigente del Pacto Histórico en Santa Marta",
    summary: "Dos hombres en motocicleta dispararon contra el vehículo en el que se movilizaba Naylea Barros. La autoría y el motivo no estaban establecidos.",
    eventDate: "2026-08-24",
    publishedDate: "2026-08-25",
    sourceType: "Fuente periodística",
    sourceName: "Prensa nacional",
    sourceUrl: "https://www.elespectador.com/",
    status: "En investigación",
    related: ["Naylea Barros", "Santa Marta", "Pacto Histórico"],
    extraSources: []
  },


  // =========================================================
  // 25 AGO
  // =========================================================

  {
    id: "posesion-contralor",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INSTITUCIONAL",
    title: "Jorge Eliécer Laverde Vargas toma posesión como contralor general",
    summary: "El contralor elegido por el Congreso el 12 de agosto tomó posesión oficialmente en La Dorada.",
    eventDate: "2026-08-25",
    publishedDate: "2026-08-25",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Palabras-del-Presidente-de-Colombia-Abelardo-De-La-Espriella-durante-260825.aspx",
    status: "Verificado",
    related: ["Contraloría", "Jorge Eliécer Laverde Vargas"],
    extraSources: []
  },

  {
    id: "eleccion-cne",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "CONGRESO",
    title: "Congreso elige a los nueve magistrados del Consejo Nacional Electoral",
    summary: "El Congreso en pleno eligió a los nueve magistrados del CNE para el periodo 2026–2030.",
    eventDate: "2026-08-25",
    publishedDate: "2026-08-26",
    sourceType: "Fuente oficial",
    sourceName: "Senado de la República",
    sourceUrl: "https://www.senado.gov.co/index.php/el-senado/noticias/7541-asi-fue-la-eleccion-de-los-nueve-magistrados-del-consejo-nacional-electoral-en-el-congreso-2",
    status: "Verificado",
    related: ["CNE", "Congreso", "magistrados"],
    extraSources: [
      ["Cámara de Representantes", "https://www.camara.gov.co/el-congreso-en-pleno-eligio-a-los-nuevos-magistrados-del-consejo-nacional-electoral/"]
    ]
  },

  {
    id: "pacto-candidatos-cne",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "INSTITUCIONAL",
    title: "Pacto Histórico selecciona sus candidatas al CNE",
    summary: "El Pacto Histórico seleccionó a Cielo Rusinque y Ana Jimena Bautista como candidatas al Consejo Nacional Electoral. Ambas resultaron elegidas posteriormente por el Congreso.",
    eventDate: "2026-08-25",
    publishedDate: "2026-08-25",
    sourceType: "Fuente partidista",
    sourceName: "Pacto Histórico",
    sourceUrl: "https://www.movimientopactohistorico.co/",
    status: "Documentado",
    related: ["Pacto Histórico", "Cielo Rusinque", "Ana Jimena Bautista", "CNE"],
    extraSources: []
  },

  {
    id: "reforma-pensional-corte",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA CONSTITUCIONAL",
    title: "Corte Constitucional avala la mayor parte de la reforma pensional y devuelve disposiciones a la Cámara",
    summary: "La Corte mantuvo la mayor parte de la Ley 2381 de 2024 y devolvió varias disposiciones a la Cámara para subsanar aspectos del trámite legislativo.",
    eventDate: "2026-08-25",
    publishedDate: "2026-08-26",
    legalDate: "2026-08-25",
    sourceType: "Decisión judicial",
    sourceName: "Corte Constitucional / Cámara",
    sourceUrl: "https://www.camara.gov.co/presidente-de-la-camara-nicolas-barguil-anuncia-todas-las-garantias-para-subsanar-reforma-pensional/",
    status: "Verificado",
    related: ["reforma pensional", "Corte Constitucional", "Sentencia C-264 de 2026"],
    extraSources: [
      ["EFE", "https://efe.com/mundo/2026-08-26/corte-constitucional-colombia-avala-reforma-pensional/"]
    ]
  },

  {
    id: "balance-sismo-25",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD mantiene en 331 las personas fallecidas por el terremoto",
    summary: "El corte de las 6:30 a. m. registró 331 fallecidos, 4.439 heridos, 240 desaparecidos y 364 rescatados.",
    eventDate: "2026-08-25",
    publishedDate: "2026-08-25",
    sourceType: "Fuente oficial",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto"],
    extraSources: []
  },


  // =========================================================
  // 26 AGO
  // =========================================================

  {
    id: "extradiciones-cinco",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "JUSTICIA",
    title: "Gobierno levanta la suspensión de cinco extradiciones vinculadas a antiguos procesos de paz",
    summary: "El Gobierno hizo efectivas decisiones de extradición previamente autorizadas y suspendidas. Tres de las personas estaban bajo custodia y dos continuaban prófugas.",
    eventDate: "2026-08-26",
    publishedDate: "2026-08-26",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Presidente-De-La-Espriella-autorizo-extradicion-de-cinco-exnegociadores-260826.aspx",
    status: "Verificado",
    related: ["extradición", "Estados Unidos", "procesos de paz"],
    note: "La decisión no significa que las cinco personas hayan sido trasladadas físicamente a Estados Unidos ese mismo día.",
    extraSources: []
  },

  {
    id: "gabinete-por-la-vida",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "ORGANIZACIÓN POLÍTICA",
    title: "Pacto Histórico lanza el “Gabinete por la Vida”",
    summary: "El Pacto Histórico presentó una estructura política de 13 personas para hacer seguimiento a carteras del Gobierno, formular críticas y plantear propuestas.",
    eventDate: "2026-08-26",
    publishedDate: "2026-08-26",
    sourceType: "Fuente partidista",
    sourceName: "Pacto Histórico",
    sourceUrl: "https://www.movimientopactohistorico.co/noticias/pacto-historico-lanza-gabinete-por-la-vida",
    status: "Verificado",
    related: ["Pacto Histórico", "Gabinete por la Vida", "Gustavo Petro", "Iván Cepeda"],
    note: "Es una estructura política de oposición, no un gabinete con funciones ejecutivas.",
    extraSources: []
  },

  {
    id: "sismo-los-santos",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SISMO",
    title: "SGC registra sismo de magnitud 5,1 en Los Santos, Santander",
    summary: "El sismo ocurrió a las 11:45 a. m., tuvo una profundidad de 149 kilómetros y generó más de 2.000 reportes de percepción.",
    eventDate: "2026-08-26",
    publishedDate: "2026-08-26",
    sourceType: "Fuente oficial",
    sourceName: "Servicio Geológico Colombiano",
    sourceUrl: "https://www2.sgc.gov.co/Noticias/Paginas/El-SGC-registra-sismo-con-epicentro-en-Los-Santos-Santander-este-26-de-agosto-de-2026.aspx",
    status: "Verificado",
    related: ["Los Santos", "Santander", "SGC"],
    note: "No se presenta como réplica del terremoto del 10 de agosto porque el SGC no lo estableció así.",
    extraSources: []
  },

  {
    id: "balance-sismo-26",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD reporta 331 fallecidos, 4.449 heridos y 219 desaparecidos",
    summary: "El corte de las 6:30 p. m. registró además 364 personas rescatadas.",
    eventDate: "2026-08-26",
    publishedDate: "2026-08-26",
    sourceType: "Balance UNGRD reproducido por prensa",
    sourceName: "Radio Santa Fe",
    sourceUrl: "https://www.radiosantafe.com/2026/08/26/medicina-legal-confirma-que-ha-completado-331-cuerpos-recibidos-de-zona-de-desastre-del-terremoto-y-todos-fueron-identificados-y-entregados-a-sus-familias-la-misma-cifra-de-fallecidos-reporta-la-ungr/",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto", "Medicina Legal"],
    extraSources: []
  },

  {
    id: "tutela-posesion-religion",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA",
    title: "Juzgado ordena disculpas por vulneración de la neutralidad religiosa en la posesión presidencial",
    summary: "Un juzgado laboral de Bogotá concluyó en primera instancia que el acto oficial del 7 de agosto vulneró el deber de neutralidad religiosa y ordenó disculpas públicas.",
    eventDate: "2026-08-26",
    publishedDate: "2026-08-27",
    legalDate: "2026-08-26",
    sourceType: "Decisión judicial",
    sourceName: "Juzgado Quinto Laboral del Circuito de Bogotá",
    sourceUrl: "https://efe.com/mundo/2026-08-27/juez-orden-de-la-espriella-disculpas-religion-investidura/",
    status: "Primera instancia · impugnable",
    related: ["tutela", "neutralidad religiosa", "posesión presidencial"],
    extraSources: []
  },

  {
    id: "decreto-1327-donaciones",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "COOPERACIÓN",
    title: "Gobierno adopta régimen sanitario transitorio para donaciones internacionales",
    summary: "El Decreto 1327 estableció un procedimiento sanitario especial y abreviado para facilitar el ingreso de donaciones internacionales destinadas a la atención del desastre.",
    eventDate: "2026-08-26",
    publishedDate: "2026-08-26",
    legalDate: "2026-08-26",
    sourceType: "Fuente jurídica",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://dapre.presidencia.gov.co/normativa/decretos-2026/decretos-agosto-2026",
    status: "Verificado",
    related: ["Decreto 1327", "donaciones internacionales", "terremoto"],
    extraSources: []
  },


  // =========================================================
  // 27 AGO
  // =========================================================

  {
    id: "presupuesto-2027",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "PRESUPUESTO",
    title: "Gobierno radica proyecto de Presupuesto General de la Nación 2027 por $634,9 billones",
    summary: "El Ejecutivo presentó al Congreso el proyecto de presupuesto para 2027. La radicación inicia su trámite legislativo.",
    eventDate: "2026-08-27",
    publishedDate: "2026-08-27",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Gobierno-radica-Presupuesto-de-la-Verdad-para-2027-por-635-billones-260827.aspx",
    status: "Radicado",
    related: ["PGN 2027", "presupuesto", "Congreso"],
    note: "Radicado no significa aprobado. “Presupuesto de la Verdad” es el nombre utilizado por el Gobierno.",
    extraSources: [
      ["EFE", "https://efe.com/economia/2026-08-27/gobierno-colombia-presupuesto-2027/"]
    ]
  },

  {
    id: "operacion-amon",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Operación militar en Guaviare deja 11 integrantes de una estructura disidente muertos",
    summary: "La Operación Amón se desarrolló en El Retorno contra campamentos atribuidos al Bloque Jorge Suárez Briceño. El balance del día terminó en 11 muertos.",
    eventDate: "2026-08-27",
    publishedDate: "2026-08-27",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Presidente-De-La-Espriella-confirma-bombardeo-contra-campamento-de-alias-Calarca-en-el-Guaviare-260827.aspx",
    status: "Atribución oficial",
    related: ["Guaviare", "Operación Amón", "Calarcá"],
    note: "El balance inicial fue de ocho muertos y luego se actualizó a once. No se incluye como hecho ningún rumor sobre la muerte de alias Calarcá.",
    extraSources: [
      ["EFE", "https://efe.com/mundo/2026-08-27/bombardeo-miembros-disidencias-farc-ejercito-colombia/"]
    ]
  },

  {
    id: "incendios-tolima-recompensa",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "INCENDIOS",
    title: "Gobierno anuncia recompensas e investigación sobre incendios provocados en Tolima",
    summary: "Tras un PMU en Ibagué, el presidente anunció recompensas de hasta $50 millones por información que permita capturar responsables de incendios provocados intencionalmente.",
    eventDate: "2026-08-27",
    publishedDate: "2026-08-27",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Presidente-De-La-Espriella-ofrecio-recompensas-de-50-millones-por-captura-260827.aspx",
    status: "Anunciado",
    related: ["Tolima", "incendios forestales", "recompensa"],
    note: "No se afirma que todos o la mayoría de los incendios hayan sido provocados. La intencionalidad debe establecerse caso por caso.",
    extraSources: []
  },

  {
    id: "balance-terremoto-27",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "Evaluación conjunta UNGRD–PNUD consolida 331 fallecidos y 143 desaparecidos al 27 de agosto",
    summary: "La evaluación rápida reportó 331 fallecidos, 4.449 heridos, 143 desaparecidos y 364 rescatados, además de daños directos de gran escala.",
    eventDate: "2026-08-27",
    publishedDate: "2026-08-28",
    sourceType: "Fuente institucional",
    sourceName: "PNUD",
    sourceUrl: "https://www.undp.org/es/colombia/comunicados-de-prensa/evaluacion-rapida-terremotow-colombia-estima-danos-economicos-directos-estructuras-por-cop-421-billones-usd",
    status: "Consolidado al 27",
    related: ["PNUD", "UNGRD", "terremoto"],
    extraSources: []
  },

  {
    id: "ataque-pelaya",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Ataque con drones y explosivos en Pelaya deja tres soldados heridos",
    summary: "El ataque ocurrió en zona rural de Pelaya, Cesar. Las autoridades atribuyeron la acción al ELN.",
    eventDate: "2026-08-27",
    publishedDate: "2026-08-28",
    sourceType: "Fuente periodística con atribución oficial",
    sourceName: "El Pilón",
    sourceUrl: "https://elpilon.com.co/cesar/asi-fue-el-ataque-con-drones-en-pelaya-que-dejo-tres-soldados-heridos-lanzaron-cerca-de-40-granadas",
    status: "Atribución oficial",
    related: ["Pelaya", "Cesar", "ELN", "drones"],
    extraSources: []
  },


  // =========================================================
  // 28 AGO
  // =========================================================

  {
    id: "ayudas-valle-entrega",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "RECONSTRUCCIÓN",
    title: "Gobierno documenta entrega de apoyos económicos a damnificados en Valle del Cauca",
    summary: "Durante una jornada en Cali, el Gobierno documentó entregas de $3.150.000 a afectados y anunció $110.000 millones para mejoramiento de vivienda.",
    eventDate: "2026-08-28",
    publishedDate: "2026-08-28",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Presidente-De-La-Espriella-anuncio-110-mil-millones-para-mejoramiento-260828.aspx",
    status: "Entrega documentada",
    related: ["Valle del Cauca", "damnificados", "vivienda", "terremoto"],
    note: "La entrega a beneficiarios no significa que todos los recursos anunciados para reconstrucción ya hayan sido ejecutados.",
    extraSources: []
  },

  {
    id: "balance-terremoto-28",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD reporta 331 fallecidos, 4.449 heridos y 152 desaparecidos",
    summary: "El corte de las 6:30 a. m. registró además 364 rescatados, 406.963 personas afectadas y 196.614 familias.",
    eventDate: "2026-08-28",
    publishedDate: "2026-08-28",
    sourceType: "Balance UNGRD reproducido por prensa",
    sourceName: "La República",
    sourceUrl: "https://www.larepublica.co/economia/cifra-de-fallecidos-por-el-terremoto-asciende-a-331-y-de-heridos-a-4-449-4466252",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto"],
    extraSources: []
  },

  {
    id: "crc-8332",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SERVICIOS",
    title: "CRC adopta medidas especiales para usuarios de comunicaciones afectados por el terremoto",
    summary: "La Resolución CRC 8332 permite, bajo determinadas condiciones, suspender servicios hasta seis meses y flexibiliza cancelaciones y otros trámites para damnificados.",
    eventDate: "2026-08-28",
    publishedDate: "2026-08-28",
    legalDate: "2026-08-28",
    sourceType: "Fuente oficial",
    sourceName: "Comisión de Regulación de Comunicaciones",
    sourceUrl: "https://www.crcom.gov.co/es/noticias/proyectos-regulatorios/damnificados-por-sismo-podran-suspender-sus-servicios-seis-meses",
    status: "Verificado",
    related: ["CRC", "telecomunicaciones", "damnificados"],
    extraSources: []
  },

  {
    id: "crisis-humanitaria-choco",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "DERECHOS HUMANOS",
    title: "Defensoría advierte que violencia y terremoto profundizan la crisis humanitaria en Chocó",
    summary: "La Defensoría reportó confinamientos, desplazamientos, comunidades incomunicadas y dificultades para completar el censo y llevar ayuda humanitaria a zonas rurales.",
    eventDate: "2026-08-28",
    publishedDate: "2026-08-28",
    sourceType: "Fuente oficial",
    sourceName: "Defensoría del Pueblo",
    sourceUrl: "https://www.defensoria.gov.co/web/guest/-/violencia-armada-confinamientos-y-efectos-del-terremoto-profundizan-la-crisis-humanitaria-en-el-choco",
    status: "Verificado",
    related: ["Chocó", "confinamiento", "desplazamiento", "terremoto"],
    extraSources: []
  },

  {
    id: "pedraza-defensoria",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "GARANTÍAS DEMOCRÁTICAS",
    title: "Defensoría advierte riesgos para Jennifer Pedraza tras señalamientos que la relacionaban con el ELN",
    summary: "La Defensoría señaló que acusaciones que calificó como infundadas podían aumentar riesgos para la senadora, su equipo y el ejercicio de su actividad política.",
    eventDate: "2026-08-28",
    publishedDate: "2026-08-28",
    sourceType: "Fuente oficial",
    sourceName: "Defensoría del Pueblo",
    sourceUrl: "https://www.defensoria.gov.co/",
    status: "Verificado",
    related: ["Jennifer Pedraza", "Defensoría", "garantías políticas"],
    extraSources: []
  },

  {
    id: "fin-dialogos-paz",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "PAZ Y SEGURIDAD",
    title: "Gobierno pone fin a tres procesos de diálogo heredados de la política de Paz Total",
    summary: "Mediante nueve resoluciones, el Gobierno terminó procesos relacionados con estructuras de alias Calarcá, la CNEB y las Autodefensas Conquistadoras de la Sierra Nevada.",
    eventDate: "2026-08-28",
    publishedDate: "2026-08-29",
    legalDate: "2026-08-28",
    sourceType: "Actos administrativos",
    sourceName: "Gobierno nacional",
    sourceUrl: "https://efe.com/mundo/2026-08-29/colombia-termina-paz-total-grupos-ilegales/",
    status: "Verificado",
    related: ["Paz Total", "Calarcá", "CNEB", "ACSN"],
    note: "Se trata de nueve resoluciones relacionadas con tres procesos o espacios de diálogo, no de nueve mesas distintas.",
    extraSources: []
  },

  {
    id: "plan-choque-cesar",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "SEGURIDAD",
    title: "Gobierno activa plan de choque y refuerza capacidades antidrones en Cesar",
    summary: "El presidente dirigió un consejo extraordinario de seguridad en Valledupar tras el ataque ocurrido el día anterior en Pelaya.",
    eventDate: "2026-08-28",
    publishedDate: "2026-08-28",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Presidente-De-La-Espriella-ordena-plan-de-choque-de-seguridad-e-intensifica-260828.aspx",
    status: "Verificado",
    related: ["Cesar", "Pelaya", "drones", "seguridad"],
    extraSources: []
  },
  // =========================================================
  // 29 AGO
  // =========================================================

  {
    id: "revision-contratacion",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "ADMINISTRACIÓN",
    title: "Presidente ordena revisar la contratación de ministerios y entidades nacionales",
    summary: "Después del Consejo de Ministros en Barranquilla, el presidente ordenó una revisión inmediata de contratos, convenios y otros mecanismos de contratación en las entidades del Gobierno.",
    eventDate: "2026-08-29",
    publishedDate: "2026-08-30",
    sourceType: "Declaración oficial reproducida por prensa",
    sourceName: "Infobae",
    sourceUrl: "https://www.infobae.com/colombia/2026/08/30/de-la-espriella-anuncio-revision-integral-de-contrataciones-y-de-la-estructura-del-gobierno-para-acabar-con-las-roscas-ministerio-por-ministerio/",
    status: "Orden presidencial",
    related: ["contratación estatal", "ministerios", "Consejo de Ministros"],
    note: "La revisión anunciada no equivale a una auditoría de la Contraloría, una investigación penal ni a irregularidades ya demostradas.",
    extraSources: []
  },

  {
    id: "balance-terremoto-29",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    title: "UNGRD actualiza a 4.497 las personas heridas por el terremoto",
    summary: "El corte de las 6:30 a. m. mantuvo 331 fallecidos y 152 desaparecidos, con 364 personas rescatadas.",
    eventDate: "2026-08-29",
    publishedDate: "2026-08-29",
    sourceType: "Balance UNGRD",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["terremoto", "UNGRD"],
    extraSources: []
  },

  {
    id: "incendios-29",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INCENDIOS",
    title: "UNGRD reporta 19 incendios activos en seis departamentos",
    summary: "El corte de las 7:30 a. m. registró 19 incendios activos y dos controlados. Tolima concentraba 11 de los incendios activos.",
    eventDate: "2026-08-29",
    publishedDate: "2026-08-29",
    sourceType: "Balance UNGRD reproducido por prensa",
    sourceName: "La República",
    sourceUrl: "https://www.larepublica.co/economia/la-ungrd-esta-monitoreando-a-19-incendios-activos-en-seis-departamentos-4470411",
    status: "Balance provisional",
    related: ["incendios", "Tolima", "UNGRD"],
    extraSources: []
  },

  {
    id: "petro-defiende-paz-total",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "PAZ Y SEGURIDAD",
    title: "Petro defiende los resultados de la Paz Total tras el cierre de tres procesos de diálogo",
    summary: "El expresidente atribuyó a los procesos de diálogo reducciones de violencia y avances en sustitución de cultivos en algunos territorios.",
    eventDate: "2026-08-29",
    publishedDate: "2026-08-30",
    sourceType: "Declaración atribuida",
    sourceName: "Gustavo Petro / Infobae",
    sourceUrl: "https://www.infobae.com/colombia/2026/08/30/petro-defendio-su-paz-total-tras-el-desmonte-de-las-mesas-de-dialogo-por-parte-de-abelardo-de-la-espriella-se-salvaron-miles-de-vidas/",
    status: "Declaración documentada",
    related: ["Gustavo Petro", "Paz Total", "procesos de diálogo"],
    note: "Las cifras y resultados mencionados por Petro permanecen atribuidos a él y no se presentan automáticamente como hechos independientemente comprobados.",
    extraSources: []
  },

  {
    id: "proyecto-transito",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "TRANSPORTE",
    title: "Presidente anuncia proyecto de ley para modificar trámites y costos de tránsito",
    summary: "El presidente anunció que presentará al Congreso una iniciativa relacionada con multas, licencias, revisión técnico-mecánica, RUNT y otros procedimientos.",
    eventDate: "2026-08-29",
    publishedDate: "2026-08-29",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Presidente-De-La-Espriella-anuncio-proyecto-de-ley-para-acabar-con-los-abusos-260829.aspx",
    status: "Anunciado",
    related: ["tránsito", "RUNT", "multas", "licencias"],
    note: "Anunciado no significa radicado, aprobado, sancionado ni vigente.",
    extraSources: []
  },

  {
    id: "matecana-reapertura",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "RECONSTRUCCIÓN",
    title: "Aeropuerto Matecaña recupera parcialmente sus operaciones",
    summary: "El aeropuerto de Pereira reanudó operaciones mientras continuaban las reparaciones necesarias para recuperar completamente su capacidad tras el terremoto.",
    eventDate: "2026-08-29",
    publishedDate: "2026-08-29",
    sourceType: "Fuente institucional",
    sourceName: "Ministerio de Comercio, Industria y Turismo",
    sourceUrl: "https://www.mincit.gov.co/prensa/noticias/turismo",
    status: "Operación parcial",
    related: ["Aeropuerto Matecaña", "Pereira", "terremoto"],
    note: "Reabierto no significa operación al 100 %.",
    extraSources: []
  },


  // =========================================================
  // 30 AGO
  // =========================================================

  {
    id: "arcadio-valle",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    title: "Ejército reporta muerte de alias “Felipe” o “Arcadio” en Valle del Cauca",
    summary: "Durante una operación militar murió un hombre señalado por las autoridades como cabecilla de la compañía Rodrigo Arias de la estructura Jaime Martínez.",
    eventDate: "2026-08-30",
    publishedDate: "2026-08-30",
    sourceType: "Atribución oficial",
    sourceName: "Ejército / Presidencia",
    sourceUrl: "https://www.ejercito.mil.co/",
    status: "Atribución oficial",
    related: ["Valle del Cauca", "Jaime Martínez", "disidencias"],
    note: "Las responsabilidades atribuidas por ataques anteriores corresponden a señalamientos de las autoridades y no se presentan como condenas judiciales.",
    extraSources: []
  },

  {
    id: "captura-fantasma",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA Y SEGURIDAD",
    title: "Capturan con fines de extradición a alias “Fantasma” en Cundinamarca",
    summary: "Emilio José Cordero Sierra fue capturado en Paratebueno durante una operación coordinada entre Policía, Fiscalía y DEA. Es requerido por autoridades de Estados Unidos.",
    eventDate: "2026-08-30",
    publishedDate: "2026-08-30",
    sourceType: "Fuente periodística con información institucional",
    sourceName: "Judiciales y Denuncias",
    sourceUrl: "https://judicialesydenunciasmedio.com.co/destacados/capturan-con-fines-de-extradicion-a-alias-fantasma/",
    status: "Capturado con fines de extradición",
    related: ["alias Fantasma", "extradición", "DEA", "Cundinamarca"],
    note: "Capturado con fines de extradición no significa extraditado ni condenado.",
    extraSources: []
  },

  {
    id: "incendios-tolima-30",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INCENDIOS",
    title: "Bomberos reporta siete incendios todavía activos en Tolima",
    summary: "De 43 puntos atendidos en 11 municipios, 20 estaban controlados, 16 liquidados y siete permanecían activos.",
    eventDate: "2026-08-30",
    publishedDate: "2026-08-30",
    sourceType: "Balance territorial",
    sourceName: "Dirección Nacional de Bomberos / MinInterior",
    sourceUrl: "https://www.elheraldo.co/colombia/2026/08/30/mininterior-aseguro-que-siete-incendios-permanecen-activos-en-tolima/",
    status: "Balance territorial",
    related: ["Tolima", "incendios forestales", "Bomberos"],
    note: "Los siete incendios corresponden a Tolima. No representan el total nacional.",
    extraSources: []
  },

  {
    id: "desaparicion-forzada-30",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "DERECHOS HUMANOS",
    importance: "ESENCIAL",
    title: "Defensoría advierte que la desaparición forzada continúa afectando a Colombia",
    summary: "La Defensoría reportó 2.145 casos de atención relacionados con desaparición forzada entre enero y agosto de 2026 y recordó que el universo histórico de personas desaparecidas supera ampliamente esa cifra.",
    eventDate: "2026-08-30",
    publishedDate: "2026-08-30",
    sourceType: "Fuente oficial",
    sourceName: "Defensoría del Pueblo",
    sourceUrl: "https://www.defensoria.gov.co/web/guest/-/la-desaparici%C3%B3n-forzada-es-un-fen%C3%B3meno-que-persiste-en-colombia",
    status: "Verificado",
    related: ["desaparición forzada", "Defensoría", "UBPD"],
    whyItMatters: "Permite distinguir los casos atendidos durante 2026 del universo histórico de personas desaparecidas en Colombia.",
    note: "El universo histórico aproximado de 137.000 personas desaparecidas no corresponde a casos ocurridos solamente durante 2026.",
    extraSources: []
  },

  {
    id: "petro-controversia-pacto",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "POLÍTICA Y CONGRESO",
    importance: "RELEVANTE",
    title: "Petro interviene en controversia interna del Pacto Histórico",
    summary: "El expresidente se pronunció sobre diferencias internas relacionadas con actuaciones de integrantes de su bancada en la Comisión de Acusaciones y con recientes decisiones políticas.",
    eventDate: "2026-08-30",
    publishedDate: "2026-08-30",
    sourceType: "Declaración atribuida",
    sourceName: "El Espectador",
    sourceUrl: "https://www.elespectador.com/politica/",
    status: "Declaración documentada",
    related: ["Gustavo Petro", "Pacto Histórico", "Comisión de Acusaciones"],
    extraSources: []
  },


  // =========================================================
  // 31 AGO
  // =========================================================

  {
    id: "cepeda-tensiones-pacto-31",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "POLÍTICA",
    importance: "RELEVANTE",
    title: "Iván Cepeda se pronuncia sobre tensiones internas del Pacto Histórico",
    summary: "Cepeda se refirió públicamente a las diferencias dentro del Pacto Histórico y pidió mantener la unidad política del movimiento frente al nuevo escenario de oposición.",
    eventDate: "2026-08-31",
    publishedDate: "2026-08-31",
    sourceType: "Declaración atribuida",
    sourceName: "Medios nacionales",
    sourceUrl: "https://www.elespectador.com/politica/",
    status: "Declaración documentada",
    related: ["Iván Cepeda", "Pacto Histórico", "oposición"],
    extraSources: []
  },

  {
    id: "desempleo-julio-dane-31",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "ECONOMÍA",
    importance: "ESENCIAL",
    title: "DANE reporta tasa de desempleo de 8,8 % para julio de 2026",
    summary: "El DANE publicó los resultados del mercado laboral correspondientes a julio de 2026 y reportó una tasa nacional de desempleo de 8,8 %.",
    eventDate: "2026-08-31",
    publishedDate: "2026-08-31",
    sourceType: "Fuente oficial",
    sourceName: "DANE",
    sourceUrl: "https://www.dane.gov.co/index.php/estadisticas-por-tema/mercado-laboral/empleo-y-desempleo",
    status: "Verificado",
    related: ["DANE", "desempleo", "mercado laboral"],
    whyItMatters: "La tasa de desempleo es uno de los principales indicadores para seguir la situación del mercado laboral y la evolución de la economía.",
    extraSources: []
  },

  {
    id: "operacion-amon-menores-31",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    importance: "ESENCIAL",
    title: "Autoridades confirman que tres menores estaban entre los muertos identificados de la Operación Amón",
    summary: "Medicina Legal informó que recibió diez cuerpos relacionados con la operación militar del 27 de agosto en Guaviare. Nueve habían sido identificados y uno continuaba en análisis forense. Entre los nueve identificados había tres menores de edad.",
    eventDate: "2026-08-31",
    publishedDate: "2026-08-31",
    sourceType: "Fuente oficial",
    sourceName: "Instituto Nacional de Medicina Legal",
    sourceUrl: "https://www.medicinalegal.gov.co/inicio/-/asset_publisher/t0LBQNMxVOxe/content/plantilla_comunic-14",
    status: "Confirmación posterior",
    related: ["Operación Amón", "Guaviare", "Medicina Legal", "menores de edad"],
    whyItMatters: "La identificación forense aporta nueva información sobre una operación militar cuyo balance inicial había sido divulgado el 27 de agosto.",
    note: "La operación ocurrió el 27 de agosto. El balance operacional informado ese día fue de 11 muertos. Medicina Legal informó posteriormente haber recibido 10 cuerpos relacionados con la operación. Las dos cifras corresponden a registros distintos y se conservan de manera transparente.",
    extraSources: [
      ["Caracol Radio · declaración del Ministerio de Defensa", "https://caracol.com.co/2026/08/31/mindefensa-confirmo-que-tres-menores-murieron-en-ataque-en-guaviare-y-rechazo-reclutamiento-forzado/"]
    ]
  },

  {
    id: "interes-bancario-corriente-31",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "ECONOMÍA",
    importance: "RELEVANTE",
    title: "Superfinanciera certifica en 19,49 % E.A. el interés bancario corriente para septiembre",
    summary: "La Superintendencia Financiera certificó en 19,49 % efectivo anual el interés bancario corriente para crédito de consumo y ordinario durante septiembre de 2026.",
    eventDate: "2026-08-31",
    publishedDate: "2026-08-31",
    effectiveDate: "2026-09-01",
    sourceType: "Fuente oficial",
    sourceName: "Superintendencia Financiera de Colombia",
    sourceUrl: "https://www.superfinanciera.gov.co/publicaciones/10116235/superfinanciera-certifica-el-interes-bancario-corriente/",
    status: "Verificado",
    related: ["interés bancario corriente", "crédito", "Superfinanciera", "efectivo anual"],
    whyItMatters: "Esta tasa sirve como referencia para determinar límites legales aplicables a determinados intereses.",
    note: "No significa que todos los créditos bancarios deban cobrar exactamente 19,49 % E.A.",
    extraSources: []
  },

  {
    id: "procuraduria-nukak-31",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "DERECHOS HUMANOS",
    importance: "RELEVANTE",
    title: "Procuraduría solicita información sobre atención en salud a la comunidad Nukak Baka",
    summary: "La Procuraduría requirió información a autoridades administrativas y de salud de Guaviare sobre afiliación, atención diferencial y diferentes riesgos sanitarios que afectan a la comunidad indígena Nukak Baka.",
    eventDate: "2026-08-31",
    publishedDate: "2026-08-31",
    sourceType: "Fuente oficial",
    sourceName: "Procuraduría General de la Nación",
    sourceUrl: "https://www.procuraduria.gov.co/Pages/procuraduria-requiere-informacion-autoridades-administrativas-salud-guaviare-sobre-atencion-comunidad-indigena.aspx",
    status: "Actuación preventiva",
    related: ["Nukak Baka", "Guaviare", "Procuraduría", "salud", "actuación preventiva"],
    note: "El requerimiento es una actuación preventiva. No equivale a una sanción ni establece por sí mismo que alguna autoridad haya incumplido sus obligaciones.",
    extraSources: []
  },

  {
    id: "operacion-azarias-31",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    importance: "ESENCIAL",
    title: "Gobierno eleva a 20 muertos el balance de la Operación Azarías",
    summary: "El presidente informó durante la noche un balance de 20 muertos en operaciones militares, cinco capturados y dos menores recuperados en una acción contra una estructura que las autoridades relacionan con alias Iván Mordisco.",
    eventDate: "2026-08-31",
    publishedDate: "2026-09-01",
    sourceType: "Balance oficial reproducido por prensa",
    sourceName: "DW",
    sourceUrl: "https://amp.dw.com/es/bombardeo-m%C3%A1s-letal-del-ej%C3%A9rcito-en-colombia-deja-20-muertos/a-78582252",
    status: "Atribución oficial",
    related: ["Operación Azarías", "Iván Mordisco", "Carolina Ramírez"],
    note: "Las pertenencias, cargos y responsabilidades atribuidas a las personas involucradas corresponden a información de las autoridades. La publicación periodística ocurrió el 1 de septiembre, pero la actualización oficial del balance fue comunicada la noche del 31 de agosto.",
    extraSources: []
  },


  // =========================================================
  // 01 SEP
  // =========================================================

  {
    id: "creg-ahorro-energia-septiembre",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "ENERGÍA",
    importance: "ESENCIAL",
    title: "Comienza el programa transitorio de ahorro de energía eléctrica de la CREG",
    summary: "Desde el 1 de septiembre comienza el programa transitorio que establece metas individuales de consumo y un esquema de incentivos al ahorro y cobros adicionales por determinados consumos superiores a la meta.",
    eventDate: "2026-09-01",
    publishedDate: "2026-09-01",
    effectiveDate: "2026-09-01",
    sourceType: "Fuente regulatoria oficial",
    sourceName: "Comisión de Regulación de Energía y Gas",
    sourceUrl: "https://gestornormativo.creg.gov.co/gestor/entorno/novedades_resoluciones.html",
    status: "Vigente",
    related: ["CREG", "energía", "meta individual de consumo", "ahorro de energía"],
    whyItMatters: "La medida puede producir cobros adicionales para determinados usuarios que consuman por encima de su meta y beneficios monetarios para usuarios que logren ahorro reconocido.",
    note: "No es un aumento general de la tarifa de energía ni un programa de racionamiento. La regulación excluye a usuarios ubicados en municipios identificados por la UNGRD como afectados por el terremoto del 10 de agosto. La duración inicial del programa es de seis meses.",
    extraSources: [
      ["Resolución CREG 101 120 de 2026 · programa original", "https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_101-120_2026.htm"]
    ]
  },

  {
    id: "posesion-magistrados-cne-01",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INSTITUCIONAL",
    importance: "ESENCIAL",
    title: "Nuevos magistrados del CNE toman posesión para el periodo 2026–2030",
    summary: "Los nueve magistrados elegidos por el Congreso el 25 de agosto tomaron posesión de sus cargos en el Consejo Nacional Electoral.",
    eventDate: "2026-09-01",
    publishedDate: "2026-09-01",
    sourceType: "Fuente institucional",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/",
    status: "Verificado",
    related: ["CNE", "Consejo Nacional Electoral", "magistrados", "posesión"],
    whyItMatters: "El CNE es una de las principales autoridades administrativas electorales y tendrá responsabilidades sobre los procesos políticos y electorales del nuevo periodo.",
    note: "La elección ocurrió el 25 de agosto. El hecho nuevo del 1 de septiembre es la posesión de los magistrados.",
    extraSources: []
  },

  {
    id: "reactivacion-46-ordenes-01",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA Y SEGURIDAD",
    importance: "ESENCIAL",
    title: "Fiscalía reactiva órdenes de captura contra 46 integrantes de tres estructuras armadas",
    summary: "Tras la terminación de tres procesos de diálogo, la Fiscalía reactivó órdenes de captura que habían estado suspendidas contra integrantes de las estructuras involucradas.",
    eventDate: "2026-09-01",
    publishedDate: "2026-09-02",
    sourceType: "Actuación judicial reportada por prensa",
    sourceName: "DW",
    sourceUrl: "https://amp.dw.com/es/colombia-reactiva-%C3%B3rdenes-de-captura-contra-46-armados/a-78657513",
    status: "Órdenes reactivadas",
    related: ["orden de captura", "Fiscalía", "Calarcá", "ACSN", "procesos de paz"],
    whyItMatters: "La terminación de los procesos de diálogo tuvo consecuencias judiciales concretas para personas que habían contado con suspensiones temporales de órdenes de captura.",
    note: "Una orden de captura vigente no significa que la persona haya sido capturada ni condenada.",
    extraSources: []
  },

  {
    id: "captura-pirry-espana-01",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA Y SEGURIDAD",
    importance: "RELEVANTE",
    title: "Autoridades reportan captura en España de alias Pirry, requerido para extradición",
    summary: "Jhonatan Alexander Castrillón Arango, alias Pirry, fue capturado en Tarragona, España. Las autoridades colombianas lo señalan como segundo cabecilla de La Mesa y reportaron que tenía circular roja de Interpol.",
    eventDate: "2026-09-01",
    publishedDate: "2026-09-01",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Cayo-en-Espana-alias-Pirry-segundo-cabecilla-de-la-La-Mesa-organizacion-narcoterrorista-que-delinquia-260801.aspx",
    status: "Capturado · requerido para extradición",
    related: ["alias Pirry", "La Mesa", "Interpol", "España", "extradición"],
    note: "La captura en España y la existencia de un requerimiento de extradición no significan que la extradición a Colombia se haya ejecutado ese mismo día. Las vinculaciones criminales corresponden a señalamientos de las autoridades.",
    extraSources: []
  },
  // =========================================================
  // 02 SEP
  // =========================================================

  {
    id: "balance-seguridad-gobierno-02",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "SEGURIDAD",
    importance: "ESENCIAL",
    title: "Gobierno reporta 18 capturas y siete sometimientos a la justicia en las últimas 24 horas",
    summary: "Presidencia informó un balance de 18 capturas, siete sometimientos a la justicia, cuatro menores recuperados y un integrante del Clan del Golfo muerto en operaciones durante las últimas 24 horas.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Balance oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/No-vine-a-negociar-con-asesinos-extorsionistas-y-reclutadores-de-menores-260902.aspx",
    status: "Balance oficial",
    related: ["Fuerza Pública", "capturas", "sometimiento a la justicia", "Clan del Golfo", "narcotráfico"],
    whyItMatters: "Permite seguir de forma acumulativa y diaria la política de seguridad del Gobierno, diferenciando los resultados reportados oficialmente de resultados judiciales posteriores.",
    note: "Las cifras corresponden al balance presentado por el Gobierno y la Fuerza Pública. No se presentan como una auditoría independiente. Presidencia también reportó incautaciones de narcóticos y destrucción de cinco laboratorios.",
    extraSources: []
  },

  {
    id: "calarca-medida-aseguramiento-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA",
    importance: "ESENCIAL",
    title: "Jueza ordena medida de aseguramiento en prisión contra alias Calarcá",
    summary: "Una jueza de control de garantías impuso medida de aseguramiento privativa de la libertad contra Alexander Díaz Mendoza, alias Calarcá Córdoba, dentro de un proceso relacionado con el homicidio de seis firmantes del Acuerdo de Paz.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    legalDate: "2026-09-02",
    sourceType: "Actuación judicial",
    sourceName: "El Espectador",
    sourceUrl: "https://www.elespectador.com/judicial/ordenan-prision-contra-alias-calarca-jefe-de-las-disidencias-de-las-farc/",
    status: "Medida de aseguramiento · prófugo",
    related: ["alias Calarcá", "medida de aseguramiento", "firmantes de paz", "Fiscalía"],
    whyItMatters: "La decisión representa un nuevo avance judicial después de la reactivación de órdenes de captura contra integrantes de estructuras cuyos diálogos fueron terminados.",
    note: "La medida de aseguramiento no equivale a una condena. Alias Calarcá continuaba prófugo; una orden de detención no significa que haya sido capturado.",
    extraSources: [
      ["Cambio", "https://cambiocolombia.com/conflicto-armado-en-colombia/articulo/2026/9/dictan-medida-de-aseguramiento-contra-alias-calarca-sucede-despues-de-que-se-reactivara-su-orden-de-captura"]
    ]
  },

  {
    id: "captura-la-puerca-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA Y SEGURIDAD",
    importance: "ESENCIAL",
    title: "Capturan en Santa Marta a alias La Puerca, señalado como cabecilla de las ACSN",
    summary: "Daniel Bravo Arias, alias La Puerca, fue capturado en zona rural de Santa Marta. Las autoridades lo señalan como integrante de mando de las Autodefensas Conquistadoras de la Sierra Nevada.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Fuente periodística con información de autoridades",
    sourceName: "Semana",
    sourceUrl: "https://www.semana.com/nacion/barranquilla/articulo/cayo-alias-la-puerca-uno-de-los-cabecillas-de-las-autodefensas-conquistadores-de-la-sierra-a-quien-se-le-habia-suspendido-la-orden-de-captura/202644/",
    status: "Capturado",
    related: ["alias La Puerca", "ACSN", "Santa Marta", "orden de captura"],
    whyItMatters: "La captura ocurre después de la reactivación de órdenes judiciales derivada del cierre de procesos de diálogo.",
    note: "La captura no equivale a condena. Los cargos y la posición que las autoridades le atribuyen dentro de la organización deberán ser establecidos dentro del proceso correspondiente.",
    extraSources: []
  },

  {
    id: "zaragoza-clan-golfo-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    importance: "RELEVANTE",
    title: "Operación contra el Clan del Golfo en Zaragoza deja dos capturados y un menor recuperado",
    summary: "Ejército y Policía reportaron dos capturas, el sometimiento de otra persona y la recuperación de un menor durante una operación en Zaragoza, Antioquia.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Información de autoridades reproducida por prensa",
    sourceName: "Cambio",
    sourceUrl: "https://d1x0qnenkl91hi.cloudfront.net/conflicto-armado-en-colombia/articulo/2026/9/golpe-al-clan-del-golfo-en-zaragoza-antioquia-ejercito-captura-a-alias-80-y-recupera-a-un-menor",
    status: "Atribución oficial",
    related: ["Zaragoza", "Antioquia", "Clan del Golfo", "menor recuperado"],
    note: "La pertenencia de los capturados a una estructura armada corresponde a la atribución de las autoridades y deberá ser determinada judicialmente.",
    extraSources: []
  },

  {
    id: "captura-bam-bam-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA",
    importance: "RELEVANTE",
    title: "Capturan en El Dorado a alias Bam Bam por investigación del homicidio de Gustavo Aponte",
    summary: "Jherson Leonardo Contreras Ramírez, alias Bam Bam, fue detenido en el aeropuerto El Dorado cuando pretendía viajar a Perú. Es el segundo capturado dentro de la investigación por el homicidio del empresario Gustavo Aponte.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Fuente periodística con información de Fiscalía",
    sourceName: "Cambio",
    sourceUrl: "https://d1x0qnenkl91hi.cloudfront.net/pais/articulo/2026/9/cayo-bam-bam-en-el-dorado-segundo-capturado-por-el-crimen-de-gustavo-aponte-dueno-de-arroz-sonora",
    status: "Capturado",
    related: ["alias Bam Bam", "Gustavo Aponte", "Fiscalía", "El Dorado"],
    note: "La hipótesis sobre las circunstancias del homicidio forma parte de la investigación de la Fiscalía. Captura no equivale a condena.",
    extraSources: []
  },

  {
    id: "procuraduria-vigilancia-sismo-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "CONTROL DE RECURSOS",
    importance: "ESENCIAL",
    title: "Procuraduría activa vigilancia especial sobre contratación y recursos de reconstrucción",
    summary: "La Procuraduría creó un grupo especial para hacer seguimiento a la atención de víctimas, contratación, reconstrucción y manejo de recursos, incluida la Subcuenta Sismo 2026.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Fuente oficial",
    sourceName: "Procuraduría General de la Nación",
    sourceUrl: "https://www.procuraduria.gov.co/Pages/procuraduria-activa-vigilancia-para-proteger-victimas-garantizar-reconstruccion-transparente-tras-terremo.aspx",
    status: "Actuación preventiva",
    related: ["Procuraduría", "Subcuenta Sismo 2026", "contratación pública", "reconstrucción", "transparencia"],
    whyItMatters: "La reconstrucción moviliza grandes cantidades de recursos públicos y requiere controles para reducir riesgos de irregularidades, retrasos o uso indebido.",
    note: "La creación del grupo de vigilancia es una actuación preventiva. No significa que la Procuraduría haya establecido que existe corrupción en la reconstrucción.",
    extraSources: []
  },

  {
    id: "anolaima-cargos-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "CONTRATACIÓN PÚBLICA",
    importance: "RELEVANTE",
    title: "Procuraduría formula cargos a exsecretario de Planeación de Anolaima por supervisión de obra vial",
    summary: "La Procuraduría formuló cargos a Cristian Leonardo Ramos Sarmiento por presuntas fallas en la supervisión de un contrato de obra vial.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Fuente oficial",
    sourceName: "Procuraduría General de la Nación",
    sourceUrl: "https://www.procuraduria.gov.co/Pages/procuraduria-formulo-cargos-exsecretario-planeacion-anolaima-cundinamarca-presuntas-fallas-supervision-obra-vial.aspx",
    status: "Pliego de cargos",
    related: ["Procuraduría", "Anolaima", "contratación pública", "pliego de cargos"],
    whyItMatters: "El caso permite seguir actuaciones concretas de los organismos de control sobre la supervisión de contratos financiados con recursos públicos.",
    note: "La conducta fue calificada provisionalmente como falta grave a título de culpa grave. El pliego de cargos no equivale a sanción y se mantiene la presunción de inocencia.",
    extraSources: []
  },

  {
    id: "ricardo-roa-desarchivo-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "CONTROL Y JUSTICIA",
    importance: "ESENCIAL",
    title: "Procuraduría respalda solicitud para desarchivar investigación relacionada con Ricardo Roa",
    summary: "La Procuraduría se sumó a la solicitud para que se revise el archivo de una investigación relacionada con contratación de helicópteros en Ecopetrol y posibles restricciones a la libre competencia.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Actuación institucional reportada por prensa",
    sourceName: "Semana",
    sourceUrl: "https://semana-semana-prod.web.arc-cdn.net/nacion/articulo/procuraduria-se-suma-a-la-solicitud-de-desarchivar-una-investigacion-contra-ricardo-roa-por-contratos-de-helicopteros-en-ecopetrol/202628/",
    status: "Solicitud de desarchivo",
    related: ["Ricardo Roa", "Ecopetrol", "Procuraduría", "helicópteros", "solicitud de desarchivo"],
    whyItMatters: "Se trata de contratación de una empresa con participación estatal y de una actuación institucional destinada a determinar si una investigación archivada debe continuar.",
    note: "Que la Procuraduría apoye una solicitud de desarchivo no significa que la Fiscalía haya reabierto la investigación ni que exista responsabilidad establecida.",
    extraSources: []
  },

  {
    id: "presupuesto-debate-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "CONGRESO Y ECONOMÍA",
    importance: "ESENCIAL",
    title: "Congresistas de varias bancadas se retiran del debate del Presupuesto 2027 por ausencia de funcionarios",
    summary: "El trámite del proyecto de Presupuesto General de la Nación por $634,9 billones enfrentó una controversia cuando congresistas de diferentes bancadas se retiraron del debate ante la ausencia de varios altos funcionarios del Gobierno.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Fuente periodística",
    sourceName: "El País",
    sourceUrl: "https://elpais.com/america-colombia/2026-09-02/los-congresistas-de-todas-las-bancadas-se-retiran-del-debate-del-presupuesto-de-de-la-espriella-ante-la-ausencia-de-los-ministros.html",
    status: "En trámite",
    related: ["Presupuesto 2027", "Congreso", "PGN 2027", "MinHacienda"],
    whyItMatters: "El presupuesto define cómo pretende financiar y distribuir el Estado cientos de billones de pesos durante 2027.",
    note: "El proyecto fue radicado el 27 de agosto. El debate y las controversias del trámite no significan que el presupuesto haya sido aprobado o rechazado.",
    extraSources: []
  },

  {
    id: "balance-terremoto-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "TERREMOTO",
    importance: "ESENCIAL",
    title: "Nuevo balance registra 331 fallecidos, 4.519 heridos y 136 desaparecidos por el terremoto",
    summary: "El corte conocido el 2 de septiembre registró 331 fallecidos, 4.519 heridos, 136 desaparecidos y 364 personas rescatadas.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Balance UNGRD",
    sourceName: "UNGRD",
    sourceUrl: "https://portal.gestiondelriesgo.gov.co/",
    status: "Balance provisional",
    related: ["UNGRD", "terremoto", "damnificados", "desaparecidos"],
    whyItMatters: "Los balances permiten seguir la evolución de la emergencia y las variaciones producidas por identificación, conciliación y depuración de registros.",
    note: "Las cifras de una emergencia pueden subir o bajar cuando las autoridades eliminan duplicados, identifican personas o actualizan reportes territoriales.",
    extraSources: []
  },

  {
    id: "incendios-tolima-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INCENDIOS",
    importance: "RELEVANTE",
    title: "Ejército reporta seis focos de incendio activos en Tolima",
    summary: "El Ejército informó que continuaba apoyando la atención de seis focos activos en Carmen de Apicalá, Cunday, Suárez, Villahermosa, Venadillo y Chaparral.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Fuente oficial",
    sourceName: "Ejército Nacional",
    sourceUrl: "https://www.ejercito.mil.co/ejercito-nacional-continua-atendiendo-emergencia-por-incendios-forestales-en-el-tolima",
    status: "Balance territorial",
    related: ["Tolima", "incendios forestales", "Ejército"],
    note: "El dato corresponde a Tolima y no representa un balance nacional de incendios.",
    extraSources: []
  },

  {
    id: "arauca-extradicion-proceso-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "EXTRADICIÓN",
    importance: "RELEVANTE",
    title: "INPEC refuerza seguridad de alias Araña mientras avanza su proceso de extradición",
    summary: "Geovanny Andrés Rojas, alias Araña, permanecía recluido en La Picota mientras se adelantaban los preparativos relacionados con su extradición a Estados Unidos.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Información penitenciaria reproducida por prensa",
    sourceName: "Semana",
    sourceUrl: "https://www.semana.com/nacion/articulo/inpec-extrema-medidas-de-seguridad-contra-el-temido-alias-arana-mientras-se-produce-su-extradicion-a-estados-unidos/202606/",
    status: "Extradición en trámite",
    related: ["alias Araña", "extradición", "La Picota", "Estados Unidos", "INPEC"],
    note: "No se encontró confirmación suficiente de que el traslado físico a Estados Unidos se hubiera ejecutado el 2 de septiembre. Por eso el estado se mantiene como extradición en trámite.",
    extraSources: []
  },

  {
    id: "reforma-codigo-disciplinario-02",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INSTITUCIONES",
    importance: "RELEVANTE",
    title: "Grupo de expertos inicia trabajo para proponer reforma al Código General Disciplinario",
    summary: "La Procuraduría informó el inicio de sesiones de un grupo de expertos encargado de preparar una propuesta de reforma al régimen disciplinario.",
    eventDate: "2026-09-02",
    publishedDate: "2026-09-02",
    sourceType: "Fuente oficial",
    sourceName: "Procuraduría General de la Nación",
    sourceUrl: "https://www.procuraduria.gov.co/Pages/comenzaron-sesiones-grupo-expertos-procuraduria-general-nacion-reforma-codigo-general-di.aspx",
    status: "Proceso iniciado",
    related: ["Código General Disciplinario", "Procuraduría", "régimen disciplinario"],
    whyItMatters: "El régimen disciplinario establece procedimientos y responsabilidades aplicables a servidores públicos y otros sujetos sometidos a control disciplinario.",
    note: "El inicio del trabajo técnico no significa que exista todavía una reforma aprobada. La propuesta deberá pasar por las etapas jurídicas correspondientes.",
    extraSources: []
  },


  // =========================================================
  // 03 SEP
  // =========================================================

  {
    id: "corte-suprema-visita-03",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "JUSTICIA",
    importance: "ESENCIAL",
    title: "Presidente visita la Corte Suprema y afirma que respetará la independencia judicial",
    summary: "Abelardo De La Espriella se reunió con la Sala Plena de la Corte Suprema de Justicia y afirmó que las decisiones de jueces y magistrados serán respetadas y que el Ejecutivo no interferirá en la autonomía de la Rama Judicial.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Presidencia de la República",
    sourceUrl: "https://www.presidencia.gov.co/prensa/Paginas/Las-decisiones-judiciales-seran-respetadas-desde-el-mas-humilde-juez-hasta-260903.aspx",
    status: "Declaración oficial",
    related: ["Corte Suprema de Justicia", "independencia judicial", "Presidencia", "Rama Judicial"],
    whyItMatters: "La relación entre el Ejecutivo y las altas cortes es central para la separación de poderes y el funcionamiento del Estado de derecho.",
    note: "La fuente oficial documenta el compromiso expresado por el Presidente. La declaración no constituye por sí sola una verificación independiente sobre el comportamiento futuro del Gobierno.",
    extraSources: []
  },

  {
    id: "directiva-comunicaciones-03",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "COMUNICACIONES",
    importance: "ESENCIAL",
    title: "Gobierno expide su primera directiva para coordinar la comunicación institucional",
    summary: "La Directiva Presidencial No. 01 establece que decisiones, anuncios, políticas, cifras y resultados del Ejecutivo se divulguen principalmente mediante canales institucionales y que altos funcionarios coordinen previamente entrevistas y declaraciones con la Secretaría para las Comunicaciones y Prensa de la Presidencia.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    legalDate: "2026-09-03",
    sourceType: "Directiva presidencial reportada por prensa",
    sourceName: "Cambio",
    sourceUrl: "https://cambiocolombia.com/poder/articulo/2026/9/ministros-podran-dar-entrevistas-pero-con-autorizacion-de-presidencia-detalles-de-la-nueva-directiva-del-gobierno-de-la-espriella",
    status: "Expedida",
    related: ["Directiva Presidencial No. 01", "comunicación institucional", "medios de comunicación", "Presidencia"],
    whyItMatters: "Define reglas para la manera en que ministros, directores y otras entidades del Ejecutivo comunican información oficial y se relacionan con los medios.",
    note: "La directiva conocida no establece una categoría de 'medios amigos'. Esa expresión apareció en reportes sobre una reunión interna anterior y no se presenta como contenido de la Directiva Presidencial No. 01.",
    extraSources: [
      ["La República", "https://www.larepublica.co/economia/asi-funcionara-la-nueva-estrategia-de-comunicacion-del-gobierno-de-de-la-espriella-4473930"]
    ]
  },

  {
    id: "distritos-mineros-proyecto-03",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "MINERÍA",
    importance: "RELEVANTE",
    title: "MinMinas anuncia proyecto para derogar las resoluciones de los Distritos Mineros Especiales",
    summary: "El Ministerio de Minas y Energía presentó para comentarios un proyecto de resolución orientado a derogar las diez resoluciones que delimitaron Distritos Mineros Especiales para la Diversificación Productiva.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Ministerio de Minas y Energía",
    sourceUrl: "https://www.minenergia.gov.co/es/servicio-al-ciudadano/foros/derogar-las-resoluciones-mediante-las-cuales-se-delimitaron-los-distritos-mineros-especiales-para-la-diversificacion-productiva/",
    status: "Proyecto en consulta",
    related: ["Distritos Mineros Especiales", "Ministerio de Minas y Energía", "minería", "consulta pública"],
    whyItMatters: "La eventual derogatoria modificaría una política territorial minera adoptada durante el Gobierno anterior.",
    note: "A esta fecha el Ministerio mantiene publicado un proyecto de resolución para comentarios. Por eso no se presenta la derogatoria jurídica como ya consumada.",
    extraSources: []
  },

  {
    id: "marco-rubio-visita-anunciada-03",
    group: "government",
    groupLabel: "GOBIERNO",
    category: "RELACIONES INTERNACIONALES",
    importance: "RELEVANTE",
    title: "Anuncian próxima visita de Marco Rubio a Colombia para reunirse con el Presidente",
    summary: "El 3 de septiembre se conoció que el secretario de Estado de Estados Unidos, Marco Rubio, realizará una visita oficial a Colombia durante la semana del 7 de septiembre y sostendrá un encuentro con el presidente Abelardo De La Espriella.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Anuncio diplomático reportado por prensa",
    sourceName: "Caracol Radio",
    sourceUrl: "https://caracol.com.co/2026/09/03/marco-rubio-visitara-colombia-para-reunirse-con-abelardo-de-la-espriella-esto-se-sabe/",
    status: "Visita anunciada",
    related: ["Marco Rubio", "Estados Unidos", "Abelardo De La Espriella", "relaciones internacionales", "Barranquilla"],
    whyItMatters: "La reunión será uno de los primeros encuentros de alto nivel entre el nuevo Gobierno colombiano y la administración estadounidense.",
    note: "El hecho registrado el 3 de septiembre es el anuncio de la futura visita, no la realización del encuentro. La fecha definitiva debe confirmarse cuando exista información oficial suficiente.",
    extraSources: [
      ["Blu Radio", "https://www.bluradio.com/nacion/marco-rubio-visitara-colombia-para-reunirse-con-presidente-de-la-espriella-la-proxima-semana-so35"],
      ["Noticias RCN", "https://www.noticiasrcn.com/colombia/presidente-de-la-espriella-se-reunira-con-el-secretario-de-estado-marco-rubio-en-barranquilla-1057217"]
    ]
  },

  {
    id: "alianza-verde-independencia-03",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "PARTIDOS",
    importance: "ESENCIAL",
    title: "Alianza Verde se declara independiente frente al Gobierno",
    summary: "La Dirección Nacional de Alianza Verde decidió asumir una posición de independencia frente al Gobierno de Abelardo De La Espriella, en lugar de declararse formalmente en oposición.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Decisión partidista reportada por prensa",
    sourceName: "Cambio",
    sourceUrl: "https://cambiocolombia.com/poder/articulo/2026/9/alianza-verde-independencia-abelardo-espriella-pacto-historico-disputas",
    status: "Decisión partidista",
    related: ["Alianza Verde", "independencia", "oposición", "Gobierno"],
    whyItMatters: "La decisión ayuda a definir el mapa formal de relaciones entre partidos y Gobierno durante el nuevo periodo presidencial.",
    note: "La categoría de esta tarjeta dentro de la interfaz es OPOSICIÓN por corresponder al espacio político no gubernamental; jurídicamente, Alianza Verde decidió declararse independiente, no partido de oposición.",
    extraSources: [
      ["Semana", "https://www.semana.com/politica/articulo/la-alianza-verde-se-declaro-en-independencia-frente-al-gobierno-de-abelardo-de-la-espriella-el-ala-petrista-perdio-el-pulso/202653/"]
    ]
  },

  {
    id: "bombardeos-menores-cautelar-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA Y DERECHOS HUMANOS",
    importance: "ESENCIAL",
    title: "Juzgado dicta medida provisional sobre bombardeos cuando exista información de menores reclutados",
    summary: "El Juzgado 34 de Familia de Bogotá ordenó de manera provisional que las autoridades se abstengan de ejecutar operaciones aéreas ofensivas en escenarios cobijados por la medida mientras se resuelve de fondo una tutela relacionada con la protección de menores reclutados.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    legalDate: "2026-09-03",
    sourceType: "Decisión judicial reportada por prensa",
    sourceName: "Cambio",
    sourceUrl: "https://cambiocolombia.com/justicia/articulo/2026/9/jueza-le-ordena-al-gobierno-de-abelardo-de-la-espriella-que-suspenda-temporalmente-los-bombardeos",
    status: "Medida cautelar provisional",
    related: ["Juzgado 34 de Familia", "bombardeos", "menores reclutados", "tutela", "Fuerzas Militares"],
    whyItMatters: "La decisión judicial incide de manera directa en el uso de operaciones aéreas ofensivas y en las obligaciones de protección de menores reclutados por grupos armados.",
    note: "No es una prohibición definitiva de todos los bombardeos en Colombia. Es una medida provisional dentro de una acción de tutela mientras se adopta una decisión de fondo.",
    extraSources: [
      ["Canal 1", "https://canal1.com.co/noticias/nacional/juzgado-ordena-suspender-ataques-aereos-donde-haya-menores-reclutados/"]
    ]
  },

  {
    id: "pae-suspension-proceso-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "CONTRATACIÓN PÚBLICA",
    importance: "ESENCIAL",
    title: "Colombia Compra Eficiente suspende temporalmente un proceso logístico del PAE",
    summary: "La Agencia Nacional de Contratación Pública suspendió temporalmente el proceso CCENEG-098-01-2026 después de que la Procuraduría formulara observaciones jurídicas, técnicas, económicas y operativas que requerían revisión adicional.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Procuraduría General de la Nación",
    sourceUrl: "https://www.procuraduria.gov.co/Pages/colombia-compra-eficiente-acoge-recomendacion-preventiva-procuraduria-sobre-proceso-logistico-pae.aspx",
    status: "Suspensión temporal preventiva",
    related: ["PAE", "Colombia Compra Eficiente", "Procuraduría", "contratación pública"],
    whyItMatters: "El PAE moviliza recursos públicos destinados a alimentación escolar y el proceso de selección quedó sometido a revisión preventiva antes de una decisión definitiva.",
    note: "La suspensión puede durar hasta 30 días y puede levantarse antes. Recae exclusivamente sobre el proceso de selección y no suspende la prestación del Programa de Alimentación Escolar. La actuación preventiva no demuestra por sí sola corrupción.",
    extraSources: []
  },

  {
    id: "cne-mesa-directiva-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INSTITUCIONES",
    importance: "RELEVANTE",
    title: "Juan Felipe Lemos es elegido presidente del Consejo Nacional Electoral",
    summary: "La Sala Plena del CNE eligió a Juan Felipe Lemos Uribe como presidente del organismo y a José Antonio Parra Fandiño como vicepresidente.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Decisión institucional reportada por prensa",
    sourceName: "El Heraldo",
    sourceUrl: "https://www.elheraldo.co/colombia/2026/09/03/juan-felipe-lemos-es-el-nuevo-presidente-del-consejo-nacional-electoral/",
    status: "Elegidos",
    related: ["CNE", "Juan Felipe Lemos", "José Antonio Parra", "mesa directiva"],
    whyItMatters: "La mesa directiva encabezará una de las principales autoridades administrativas electorales durante el inicio del nuevo periodo institucional.",
    note: "La elección de la mesa directiva es distinta de la elección y posesión de los nueve magistrados del CNE, hechos registrados en días anteriores.",
    extraSources: []
  },

  {
    id: "explosivos-charta-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD",
    importance: "ESENCIAL",
    title: "Ejército ubica y destruye 250 kilogramos de explosivo R1 en Charta, Santander",
    summary: "Ejército y Dijín, con mecanismos de cooperación del FBI, localizaron un depósito ilegal con 250 kilogramos de explosivo R1 en la vereda Ovejera de Charta. El material fue destruido de forma controlada.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Ejército Nacional",
    sourceUrl: "https://www.ejercito.mil.co/ejercito-nacional-neutraliza-posible-accion-terrorista-del-gao-eln-tras-la-ubicacion-de-250-kilogramos-de-explosivo-r1-en-charta-santander-643705",
    status: "Atribución oficial",
    related: ["Charta", "Santander", "ELN", "explosivo R1", "Dijín"],
    whyItMatters: "La cantidad y ubicación del material representaban, según las autoridades, un riesgo para población civil, Fuerza Pública e infraestructura.",
    note: "La pertenencia del depósito al Frente de Guerra Nororiental del ELN corresponde a la atribución oficial del Ejército.",
    extraSources: []
  },

  {
    id: "incautacion-cocaina-736-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "SEGURIDAD Y NARCOTRÁFICO",
    importance: "RELEVANTE",
    title: "Autoridades reportan incautación de 736 kilogramos de cocaína en operación marítima",
    summary: "El presidente informó que autoridades colombianas, en coordinación con Estados Unidos y Guardacostas de Santa Marta, interceptaron una lancha rápida con 736 kilogramos de cocaína que tendría como destino República Dominicana.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Balance oficial reproducido por prensa",
    sourceName: "Semana",
    sourceUrl: "https://www.semana.com/confidenciales/articulo/abelardo-de-la-espriella-confirmo-golpe-al-narcotrafico-se-evito-la-distribucion-de-18-millones-de-dosis-de-cocaina/202611/",
    status: "Incautación reportada",
    related: ["cocaína", "Guardacostas", "Santa Marta", "República Dominicana", "narcotráfico"],
    note: "Las estimaciones sobre número de dosis evitadas y afectación económica corresponden a cálculos divulgados por las autoridades y no se presentan como mediciones independientes.",
    extraSources: []
  },

  {
    id: "sinai-repatriacion-oficial-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "FUERZA PÚBLICA",
    importance: "RELEVANTE",
    title: "Ejército repatría y reemplaza a oficial del Batallón Colombia en el Sinaí mientras avanzan investigaciones",
    summary: "El Ejército ordenó la repatriación y reemplazo del oficial que ejercía un cargo en el Batallón Colombia N.° 3 en la península del Sinaí mientras se adelantan actuaciones disciplinarias y otras investigaciones sobre presuntas conductas incompatibles con las políticas institucionales.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Ejército Nacional",
    sourceUrl: "https://www.ejercito.mil.co/comunicado-de-prensa-643700",
    status: "Investigaciones en curso",
    related: ["Batallón Colombia", "Sinaí", "Ejército Nacional", "MFO", "investigación disciplinaria"],
    whyItMatters: "La decisión involucra a una unidad colombiana desplegada en una misión internacional y activa controles disciplinarios e investigaciones de otras jurisdicciones.",
    note: "La repatriación es una decisión administrativa y no equivale a una sanción o declaración de responsabilidad. Las conductas investigadas permanecen como presuntas.",
    extraSources: []
  },

  {
    id: "carlos-ramon-gonzalez-defensa-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA Y CORRUPCIÓN",
    importance: "ESENCIAL",
    title: "Tribunal ordena asignar defensor de oficio a Carlos Ramón González en proceso por el caso UNGRD",
    summary: "La Sala Penal del Tribunal Superior de Bogotá ordenó a la Defensoría del Pueblo adelantar los trámites para asignar un abogado de oficio al exdirector del Dapre Carlos Ramón González Merchán, quien no compareció a la actuación judicial.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Actuación judicial reportada por prensa",
    sourceName: "Semana",
    sourceUrl: "https://www.semana.com/nacion/articulo/no-hay-noticia-de-don-carlos-ramon-gonzalez-tribunal-ordeno-que-se-le-designe-abogado-al-exdirector-del-dapre/202649/",
    status: "Proceso penal en curso",
    related: ["Carlos Ramón González", "UNGRD", "Dapre", "Tribunal Superior de Bogotá", "Defensoría del Pueblo"],
    whyItMatters: "El caso UNGRD es uno de los principales procesos de corrupción vinculados a la administración anterior y esta actuación permite seguir su estado procesal.",
    note: "La asignación de un defensor de oficio es una garantía procesal y no equivale a condena. Debe mantenerse separada la condición procesal del investigado o acusado de cualquier conclusión sobre responsabilidad penal.",
    extraSources: []
  },

  {
    id: "amenazas-magistrados-refuerzo-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "JUSTICIA Y SEGURIDAD",
    importance: "ESENCIAL",
    title: "Autoridades refuerzan seguridad de magistrados y del Palacio de Justicia ante posibles amenazas",
    summary: "El presidente de la Corte Suprema, Iván Mauricio Lenis, informó que autoridades investigan hechos que podrían comprometer la seguridad de magistrados y funcionarios de la Procuraduría y que la Policía reforzó medidas preventivas de protección.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Declaración institucional reportada por prensa",
    sourceName: "El Espectador",
    sourceUrl: "https://www.elespectador.com/judicial/ningun-funcionario-judicial-debe-afrontar-amenazas-presidente-de-corte-suprema/",
    status: "En investigación",
    related: ["Corte Suprema de Justicia", "Palacio de Justicia", "magistrados", "amenazas", "Policía Nacional"],
    whyItMatters: "Las amenazas o riesgos contra operadores judiciales pueden afectar la independencia de la justicia y requieren esclarecimiento y protección institucional.",
    note: "El 2 de septiembre Presidencia había ordenado reforzar medidas de seguridad. El hecho registrado aquí corresponde a la nueva información conocida el 3 de septiembre sobre las investigaciones y las medidas preventivas adoptadas. No se atribuye autoría mientras las autoridades competentes no la establezcan.",
    extraSources: [
      ["Ministerio de Justicia", "https://www.minjusticia.gov.co/Sala-de-prensa/Paginas/Ministerio-de-Justicia-rechaza-cualquier-acto-de-intimidacion-o-agresion-contra-Rama-Judicial.aspx"],
      ["Presidencia · orden del 2 de septiembre", "https://www.presidencia.gov.co/prensa/Paginas/Presidente-de-la-Republica-ordena-reforzar-medidas-de-seguridad-de-los-magistrados-de-la-Sala-de-Casacion-Pena-260902.aspx"]
    ]
  },

  {
    id: "renta-joven-ciclo4-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "PROGRAMAS SOCIALES",
    importance: "RELEVANTE",
    title: "Comienza el cuarto ciclo de pagos de Renta Joven",
    summary: "Prosperidad Social programó desde el 3 de septiembre el abono bancario para 1.557 participantes de Renta Joven. Los pagos por giro para otros 1.171 estudiantes comienzan el 4 y continúan hasta el 11 de septiembre.",
    eventDate: "2026-09-03",
    publishedDate: "2026-08-30",
    effectiveDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Prosperidad Social",
    sourceUrl: "https://prosperidadsocial.gov.co/Noticias/prosperidad-social-entregara-el-cuarto-ciclo-de-renta-joven-el-3-de-septiembre/",
    status: "Ciclo de pagos iniciado",
    related: ["Renta Joven", "Prosperidad Social", "transferencias monetarias"],
    whyItMatters: "El ciclo afecta directamente a miles de participantes y fue reprogramado durante la transición hacia el Registro Universal de Ingresos.",
    note: "El anuncio fue publicado el 30 de agosto, pero el hecho nuevo del 3 de septiembre es el inicio efectivo de los abonos bancarios previstos para esa fecha.",
    extraSources: []
  },

  {
    id: "colombia-mayor-ciclo7-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "PROGRAMAS SOCIALES",
    importance: "ESENCIAL",
    title: "Comienza el séptimo ciclo de transferencias de Colombia Mayor",
    summary: "Prosperidad Social inició el séptimo ciclo de Colombia Mayor, programado del 3 al 13 de septiembre para cerca de tres millones de participantes, con recursos por $639.643 millones.",
    eventDate: "2026-09-03",
    publishedDate: "2026-08-30",
    effectiveDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Prosperidad Social",
    sourceUrl: "https://prosperidadsocial.gov.co/Noticias/colombia-mayor-gobierno-nacional-garantiza-entrega-del-septimo-ciclo/",
    status: "Ciclo de pagos iniciado",
    related: ["Colombia Mayor", "Prosperidad Social", "adultos mayores", "transferencias monetarias"],
    whyItMatters: "El programa entrega transferencias a cerca de tres millones de adultos mayores en situación de vulnerabilidad y moviliza más de $639 mil millones durante este ciclo.",
    note: "El anuncio fue publicado antes del inicio del ciclo. El hecho correspondiente al 3 de septiembre es el comienzo efectivo de las transferencias.",
    extraSources: [
      ["El País", "https://elpais.com/america-colombia/2026-09-03/colombia-mayor-y-renta-joven-fechas-de-pago-para-septiembre-y-como-recibir-el-apoyo.html"]
    ]
  },

  {
    id: "residencias-medicas-segundo-debate-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "CONGRESO Y SALUD",
    importance: "RELEVANTE",
    title: "Senado aprueba en segundo debate proyecto contra el maltrato en residencias médicas",
    summary: "La Plenaria del Senado aprobó en segundo debate el Proyecto de Ley 192 de 2025, que busca prevenir, corregir y sancionar el acoso, hostigamiento y otras formas de violencia psicológica en residencias médicas y escenarios de formación profesional.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    legalDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Senado de la República",
    sourceUrl: "https://www.senado.gov.co/index.php/el-senado/noticias/7558-senado-aprobo-en-segundo-debate-proyecto-para-prevenir-y-sancionar-maltrato-en-residencias-medicas",
    status: "Aprobado en segundo debate",
    related: ["Senado", "residencias médicas", "acoso", "violencia psicológica", "Proyecto de Ley 192 de 2025"],
    whyItMatters: "La iniciativa busca establecer mecanismos de prevención y atención frente a conductas que pueden afectar la salud mental y las condiciones de formación de médicos residentes, estudiantes y practicantes.",
    note: "La aprobación en segundo debate no significa que el proyecto ya sea ley. Debe continuar el trámite legislativo correspondiente.",
    extraSources: []
  },

  {
    id: "via-bucaramanga-san-gil-control-03",
    group: "state",
    groupLabel: "ESTADO Y PAÍS",
    category: "INFRAESTRUCTURA Y CONTROL",
    importance: "RELEVANTE",
    title: "Procuraduría intensifica vigilancia sobre deterioro de la vía Bucaramanga–San Gil",
    summary: "La Procuraduría intensificó el seguimiento preventivo a la Ruta Nacional 45A y solicitó a Invías información sobre la emergencia vial, medidas de mitigación, ejecución de recursos, obras previstas y condiciones de seguridad y transitabilidad.",
    eventDate: "2026-09-03",
    publishedDate: "2026-09-03",
    sourceType: "Fuente oficial",
    sourceName: "Procuraduría General de la Nación",
    sourceUrl: "https://www.procuraduria.gov.co/Pages/procuraduria-exige-respuestas-deterioro-corredor-vial-bucaramanga-san-gil.aspx",
    status: "Actuación preventiva",
    related: ["Bucaramanga", "San Gil", "Ruta Nacional 45A", "Invías", "Procuraduría"],
    whyItMatters: "El corredor conecta municipios y actividades económicas de Santander y presenta puntos afectados por socavación, pérdida de banca e inestabilidad del terreno.",
    note: "La vigilancia preventiva busca obtener información y promover soluciones. No significa que la Procuraduría haya establecido responsabilidad disciplinaria, fiscal o penal de funcionarios o contratistas.",
    extraSources: []
  }

];
const glossary = {

  "acto administrativo": {
    definition: "Decisión formal emitida por una autoridad administrativa que produce efectos jurídicos.",
    simple: "Es una decisión oficial tomada por una entidad del Estado.",
    not: "No es lo mismo que una ley aprobada por el Congreso."
  },

  "aforo": {
    definition: "Límite autorizado de personas que pueden permanecer en un espacio determinado.",
    simple: "Es la cantidad máxima de personas permitidas en un lugar.",
    not: "No significa necesariamente que ese número de personas esté presente."
  },

  "alocución": {
    definition: "Intervención pública de una autoridad transmitida por medios de comunicación para dirigirse a la ciudadanía.",
    simple: "Es un mensaje oficial dirigido al país.",
    not: "No equivale a una ley, decreto o decisión jurídica."
  },

  "aspersión aérea": {
    definition: "Aplicación desde aeronaves de sustancias sobre determinadas áreas, utilizada en Colombia dentro de programas de erradicación de cultivos ilícitos.",
    simple: "Es fumigar desde el aire.",
    not: "Que exista autorización normativa no significa que las fumigaciones comiencen automáticamente."
  },

  "balance provisional": {
    definition: "Conjunto de cifras sujetas a actualización mientras continúa la recolección, validación y depuración de información.",
    simple: "Son cifras que todavía pueden cambiar.",
    not: "No significa que los datos sean falsos; significa que aún no son definitivos."
  },

  "cabecilla": {
    definition: "Término utilizado por las autoridades para referirse a una persona señalada de ejercer mando o liderazgo dentro de una organización armada o criminal.",
    simple: "Es alguien señalado como jefe o líder de un grupo.",
    not: "El uso del término por una autoridad no sustituye una decisión judicial sobre responsabilidad penal."
  },

  "captura": {
    definition: "Privación de la libertad de una persona por orden judicial o en los casos permitidos por la ley.",
    simple: "Es cuando una persona queda detenida por las autoridades.",
    not: "Captura no significa condena."
  },

  "captura con fines de extradición": {
    definition: "Detención de una persona requerida por otro Estado mientras se adelanta el procedimiento de extradición.",
    simple: "La persona es detenida porque otro país la está solicitando.",
    not: "No significa que ya haya sido extraditada."
  },

  "CNE": {
    definition: "Consejo Nacional Electoral, autoridad administrativa encargada de funciones relacionadas con elecciones, partidos y organizaciones políticas.",
    simple: "Es una de las principales autoridades electorales de Colombia.",
    not: "No es lo mismo que la Registraduría Nacional."
  },

  "consulta pública": {
    definition: "Etapa en la que una entidad publica un proyecto de norma o decisión para recibir comentarios antes de adoptar una versión definitiva.",
    simple: "La entidad muestra una propuesta para que pueda ser comentada antes de decidir.",
    not: "Un proyecto en consulta todavía no es una norma definitiva."
  },

  "Contraloría": {
    definition: "Organismo de control encargado de vigilar la gestión fiscal y el uso de recursos y bienes públicos.",
    simple: "Revisa cómo se usa el dinero público.",
    not: "No es una entidad judicial ni reemplaza a la Fiscalía."
  },

  "control político": {
    definition: "Facultad del Congreso para citar, cuestionar y evaluar políticamente la actuación de ministros y otros funcionarios.",
    simple: "Es cuando el Congreso le pide cuentas al Gobierno.",
    not: "No es un proceso penal."
  },

  "crédito E.A.": {
    definition: "Crédito cuya tasa se expresa como efectivo anual, una forma estandarizada de mostrar el costo financiero durante un año.",
    simple: "Es la tasa anual real que permite comparar créditos.",
    not: "Una tasa E.A. no es lo mismo que una tasa mensual."
  },

  "DAPRE": {
    definition: "Departamento Administrativo de la Presidencia de la República.",
    simple: "Es la entidad administrativa que apoya directamente el funcionamiento de la Presidencia.",
    not: "No es un ministerio."
  },

  "declaración de oposición": {
    definition: "Decisión formal mediante la cual un partido u organización política se reconoce jurídicamente como oposición al Gobierno.",
    simple: "Es cuando un partido declara oficialmente que hará oposición.",
    not: "Criticar al Gobierno no convierte automáticamente a un partido en oposición formal."
  },

  "decreto": {
    definition: "Norma expedida por el Presidente de la República u otra autoridad competente dentro de las facultades que le otorgan la Constitución y la ley.",
    simple: "Es una decisión normativa emitida por el Ejecutivo.",
    not: "No todos los decretos tienen el mismo alcance ni pueden reemplazar cualquier ley."
  },

  "Defensoría del Pueblo": {
    definition: "Institución del Estado encargada de promover, proteger y divulgar los derechos humanos.",
    simple: "Es una entidad que protege los derechos de las personas.",
    not: "No es una fiscalía ni un tribunal."
  },

  "defensor de oficio": {
    definition: "Abogado designado para garantizar la defensa de una persona que no cuenta con abogado particular o cuando el proceso exige asegurar su representación jurídica.",
    simple: "Es un abogado que el Estado asigna para que una persona tenga defensa.",
    not: "Que se asigne un defensor de oficio no significa que la persona sea culpable."
  },

  "derecho de réplica": {
    definition: "Mecanismo que permite a determinados sectores políticos responder en medios a intervenciones oficiales del Gobierno, bajo condiciones establecidas por la ley.",
    simple: "Es el derecho de responder públicamente a un mensaje oficial.",
    not: "No significa que la respuesta tenga carácter oficial de Gobierno."
  },

  "desastre nacional": {
    definition: "Situación declarada formalmente cuando un evento afecta de manera grave a la población, infraestructura, economía o territorio y requiere coordinación extraordinaria del Estado.",
    simple: "Es cuando el Gobierno reconoce oficialmente que una emergencia tiene impacto nacional.",
    not: "No es lo mismo que declarar un Estado de Emergencia Económica."
  },

  "emergencia económica": {
    definition: "Estado de excepción previsto en la Constitución que permite al Presidente expedir decretos con fuerza de ley durante un periodo limitado para enfrentar hechos que alteren gravemente el orden económico, social o ecológico.",
    simple: "Es un mecanismo extraordinario que le da al Gobierno poderes temporales para responder a una crisis grave.",
    not: "No significa que el Presidente pueda gobernar sin límites ni controles."
  },

  "estado de excepción": {
    definition: "Mecanismo constitucional extraordinario que permite adoptar medidas especiales en circunstancias de grave crisis.",
    simple: "Es una herramienta especial de la Constitución para situaciones excepcionales.",
    not: "No suspende automáticamente la Constitución ni elimina los controles judiciales."
  },

  "extradición": {
    definition: "Procedimiento mediante el cual un Estado entrega a una persona a otro país que la requiere para investigación, juicio o cumplimiento de una condena.",
    simple: "Es cuando una persona es enviada a otro país porque allí es requerida por la justicia.",
    not: "Autorizar una extradición no significa que el traslado físico ya haya ocurrido."
  },

  "Fiscalía": {
    definition: "Fiscalía General de la Nación, entidad encargada de investigar delitos y ejercer la acción penal en Colombia.",
    simple: "Es la entidad que investiga delitos y lleva casos ante los jueces.",
    not: "La Fiscalía investiga y acusa; quien condena o absuelve es un juez."
  },

  "fondo": {
    definition: "Mecanismo financiero mediante el cual se administran recursos destinados a una finalidad específica.",
    simple: "Es una bolsa de dinero separada para un objetivo concreto.",
    not: "Que un fondo tenga recursos asignados no significa que todo el dinero ya haya sido gastado."
  },

  "fuente oficial": {
    definition: "Información publicada directamente por una institución pública o autoridad competente.",
    simple: "Es información que viene directamente de una entidad del Estado.",
    not: "Fuente oficial no significa automáticamente verdad absoluta; puede requerir contraste."
  },

  "glifosato": {
    definition: "Herbicida utilizado en distintos contextos agrícolas y empleado en Colombia en programas de erradicación de cultivos ilícitos.",
    simple: "Es una sustancia usada para eliminar plantas.",
    not: "Que una norma permita su uso no significa que pueda aplicarse sin requisitos ambientales y sanitarios."
  },

  "imputación": {
    definition: "Acto procesal mediante el cual la Fiscalía comunica formalmente a una persona que está siendo investigada por determinados hechos y delitos.",
    simple: "La Fiscalía le informa oficialmente a alguien de qué lo está investigando.",
    not: "Imputación no significa condena ni prueba definitiva de culpabilidad."
  },

  "independencia judicial": {
    definition: "Principio según el cual jueces y tribunales deben tomar sus decisiones sin interferencias indebidas de otros poderes, autoridades o intereses externos.",
    simple: "Significa que los jueces deben poder decidir sin órdenes del Gobierno ni de otros actores.",
    not: "No significa que las decisiones judiciales estén libres de controles, recursos o revisión."
  },

  "incautación": {
    definition: "Retención de bienes, dinero, sustancias u otros elementos por parte de una autoridad dentro de una actuación legal.",
    simple: "Es cuando la autoridad toma algo porque puede estar relacionado con una actividad ilegal.",
    not: "Incautar no significa automáticamente que exista una condena."
  },

  "interés bancario corriente": {
    definition: "Tasa promedio certificada por la Superintendencia Financiera para determinadas modalidades de crédito.",
    simple: "Es una tasa de referencia que muestra cuánto están cobrando en promedio los bancos en ciertos créditos.",
    not: "No es una tarifa única que todos los bancos deban cobrar."
  },

  "medida cautelar": {
    definition: "Decisión provisional adoptada por una autoridad judicial para proteger derechos, evitar daños o asegurar el resultado de un proceso mientras se toma una decisión definitiva.",
    simple: "Es una orden temporal mientras el juez estudia el caso.",
    not: "No significa que el proceso ya esté decidido definitivamente."
  },

  "medida de aseguramiento": {
    definition: "Decisión judicial que impone restricciones a una persona investigada, incluida en ciertos casos la privación preventiva de la libertad, mientras avanza el proceso penal.",
    simple: "Es una medida temporal que puede incluir cárcel mientras continúa el proceso.",
    not: "No equivale a una condena."
  },

  "moción de censura": {
    definition: "Mecanismo de control político mediante el cual el Congreso puede cuestionar y eventualmente separar del cargo a un ministro u otro funcionario sujeto a este procedimiento.",
    simple: "Es un proceso del Congreso que puede terminar con la salida de un ministro.",
    not: "Presentar una moción no significa que el funcionario ya haya sido removido."
  },

  "orden de captura": {
    definition: "Decisión judicial que autoriza la detención de una persona dentro de un proceso.",
    simple: "Es una orden de un juez para detener a alguien.",
    not: "Que exista la orden no significa que la persona ya haya sido capturada."
  },

  "oposición": {
    definition: "Condición política y jurídica de partidos o movimientos que se declaran contrarios al Gobierno y ejercen funciones de control y crítica dentro del marco democrático.",
    simple: "Son los partidos que oficialmente se ubican en contra del Gobierno.",
    not: "No toda persona o partido que critique al Gobierno es oposición formal."
  },

  "partido independiente": {
    definition: "Organización política que, conforme al Estatuto de la Oposición, decide no declararse ni de Gobierno ni de oposición.",
    simple: "Es un partido que no se ubica oficialmente ni con el Gobierno ni contra él.",
    not: "Ser independiente no significa ser neutral en todas las votaciones o decisiones."
  },

  "PAE": {
    definition: "Programa de Alimentación Escolar, estrategia pública destinada a suministrar complemento alimentario a estudiantes del sistema educativo.",
    simple: "Es el programa que entrega alimentación a estudiantes en colegios públicos.",
    not: "Una suspensión de un proceso de contratación no significa necesariamente que se suspenda la alimentación escolar."
  },

  "pliego de cargos": {
    definition: "Decisión dentro de un proceso disciplinario mediante la cual se formula formalmente una acusación por posibles faltas.",
    simple: "Es cuando la Procuraduría presenta formalmente cargos disciplinarios.",
    not: "No equivale a una sanción ni demuestra culpabilidad."
  },

  "PMU": {
    definition: "Puesto de Mando Unificado, mecanismo de coordinación interinstitucional utilizado para dirigir respuestas frente a emergencias, seguridad u otras situaciones complejas.",
    simple: "Es una mesa donde varias autoridades coordinan qué hacer frente a una emergencia.",
    not: "No es una entidad permanente del Estado."
  },

  "Presupuesto General de la Nación": {
    definition: "Instrumento mediante el cual se estiman los ingresos y se autorizan los gastos del Gobierno nacional para una vigencia fiscal.",
    simple: "Es el plan anual de cuánto dinero espera recibir y gastar el Gobierno.",
    not: "Presentar el proyecto no significa que el presupuesto ya esté aprobado."
  },

  "presunción de inocencia": {
    definition: "Principio según el cual toda persona debe ser considerada inocente mientras no exista una decisión judicial definitiva que establezca su responsabilidad.",
    simple: "Nadie debe ser tratado como culpable antes de una condena.",
    not: "Que una persona sea investigada, capturada, imputada o acusada no elimina este principio."
  },

  "Procuraduría": {
    definition: "Procuraduría General de la Nación, organismo de control que vigila la conducta de servidores públicos, interviene en procesos y desarrolla funciones preventivas y disciplinarias.",
    simple: "Es una entidad que vigila cómo actúan los funcionarios públicos.",
    not: "No es lo mismo que la Fiscalía ni la Contraloría."
  },

  "proyecto de ley": {
    definition: "Propuesta normativa presentada al Congreso para ser debatida y eventualmente convertirse en ley.",
    simple: "Es una propuesta que todavía tiene que pasar por el Congreso.",
    not: "Un proyecto de ley todavía no es una ley vigente."
  },

  "proyecto de resolución": {
    definition: "Borrador de una resolución administrativa que una entidad prepara antes de adoptar una decisión definitiva.",
    simple: "Es una propuesta de decisión administrativa.",
    not: "No produce por sí sola los mismos efectos de una resolución ya expedida."
  },

  "Rama Judicial": {
    definition: "Conjunto de órganos encargados de administrar justicia en Colombia.",
    simple: "Es la parte del Estado donde funcionan jueces, tribunales y altas cortes.",
    not: "No depende jerárquicamente del Presidente de la República."
  },

  "Renta Joven": {
    definition: "Programa de transferencias monetarias dirigido a jóvenes en determinadas condiciones de vulnerabilidad y vinculados a procesos de educación o formación.",
    simple: "Es una ayuda económica para jóvenes que cumplen ciertos requisitos.",
    not: "No todos los jóvenes del país reciben automáticamente este beneficio."
  },

  "resolución": {
    definition: "Acto administrativo mediante el cual una autoridad adopta una decisión dentro de sus competencias.",
    simple: "Es una decisión oficial de una entidad pública.",
    not: "No es lo mismo que una ley aprobada por el Congreso."
  },

  "RUNT": {
    definition: "Registro Único Nacional de Tránsito, sistema que concentra información sobre conductores, vehículos, licencias y otros datos del sector tránsito.",
    simple: "Es la gran base de datos nacional de tránsito.",
    not: "No es una empresa privada que pueda cambiar por sí sola las reglas de tránsito."
  },

  "Sala Plena": {
    definition: "Reunión de todos o de la mayoría de integrantes de una corporación judicial o administrativa para tomar determinadas decisiones.",
    simple: "Es cuando se reúne el organismo completo para decidir.",
    not: "No es una sala física específica necesariamente."
  },

  "sometimiento a la justicia": {
    definition: "Acto mediante el cual una persona vinculada a una estructura criminal se entrega o acepta ponerse a disposición de las autoridades bajo el marco jurídico correspondiente.",
    simple: "Es cuando alguien de un grupo ilegal se entrega a la justicia.",
    not: "No significa automáticamente que quede libre de responsabilidad penal."
  },

  "subcuenta": {
    definition: "Componente específico dentro de un fondo o mecanismo financiero destinado a administrar recursos para un propósito determinado.",
    simple: "Es una parte separada de un fondo para manejar dinero con un objetivo específico.",
    not: "No es necesariamente una cuenta bancaria independiente."
  },

  "tutela": {
    definition: "Mecanismo judicial previsto en la Constitución para proteger de manera inmediata derechos fundamentales cuando estos resultan vulnerados o amenazados.",
    simple: "Es una acción rápida ante un juez para proteger derechos fundamentales.",
    not: "Una decisión inicial de tutela puede tener recursos, revisión o etapas posteriores."
  },

  "UNGRD": {
    definition: "Unidad Nacional para la Gestión del Riesgo de Desastres.",
    simple: "Es la entidad nacional que coordina la respuesta ante desastres y emergencias.",
    not: "No es la única entidad responsable de atender una emergencia."
  },

  "verificación": {
    definition: "Proceso de contraste de una afirmación mediante documentos, fuentes primarias, registros oficiales y otras evidencias disponibles.",
    simple: "Es comprobar si algo que se dijo coincide con la evidencia.",
    not: "Verificar no significa defender o atacar políticamente a quien hizo la afirmación."
  }

};
