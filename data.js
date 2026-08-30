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
    status: "EN ACTUALIZACIÓN ⟳",
    subtitle: "Información verificada hasta el último barrido disponible."
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
  // 30 AGO · EN ACTUALIZACIÓN
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
    title: "Defensoría advierte que la desaparición forzada continúa afectando a Colombia",
    summary: "La Defensoría reportó 2.145 casos de atención relacionados con desaparición forzada entre enero y agosto de 2026 y recordó que el universo histórico de personas desaparecidas supera ampliamente esa cifra.",
    eventDate: "2026-08-30",
    publishedDate: "2026-08-30",
    sourceType: "Fuente oficial",
    sourceName: "Defensoría del Pueblo",
    sourceUrl: "https://www.defensoria.gov.co/",
    status: "Verificado",
    related: ["desaparición forzada", "Defensoría", "UBPD"],
    note: "El universo histórico aproximado de 137.000 personas desaparecidas no corresponde a casos ocurridos solamente durante 2026.",
    extraSources: []
  },

  {
    id: "petro-controversia-pacto",
    group: "opposition",
    groupLabel: "OPOSICIÓN",
    category: "POLÍTICA Y CONGRESO",
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
  }

];


const glossary = {

  "posesión presidencial":
    "Acto formal mediante el cual la persona elegida asume constitucionalmente la Presidencia y presta juramento.",

  "congreso en pleno":
    "Reunión conjunta del Senado de la República y la Cámara de Representantes.",

  "comandante supremo":
    "La Constitución asigna al Presidente de la República la dirección de la Fuerza Pública como comandante supremo.",

  "desobediencia civil":
    "Forma de protesta pública en la que se incumple deliberadamente una norma o mandato para expresar oposición política o moral. Su alcance jurídico depende del caso concreto.",

  "legitimidad":
    "En política, se refiere al reconocimiento de que una autoridad ejerce el poder de manera válida o aceptada. No es exactamente lo mismo que legalidad.",

  "concierto para delinquir agravado":
    "Delito relacionado con el acuerdo entre varias personas para cometer delitos bajo circunstancias que aumentan su gravedad.",

  "presunción de inocencia":
    "Toda persona debe ser tratada como inocente mientras no exista una decisión judicial que establezca su responsabilidad.",

  "imputación":
    "Acto mediante el cual la Fiscalía comunica formalmente a una persona que está siendo investigada por determinados hechos que podrían constituir delito. No equivale a una condena.",

  "acusación":
    "Etapa posterior en la que la Fiscalía presenta formalmente ante un juez los cargos que pretende demostrar durante un juicio.",

  "condena":
    "Decisión judicial que declara penalmente responsable a una persona después del procedimiento correspondiente.",

  "detrimento patrimonial":
    "Daño o pérdida de recursos o bienes públicos que puede generar responsabilidad fiscal. Una investigación por posible detrimento no significa que este ya haya sido probado.",

  "deuda pública":
    "Dinero que el Estado obtiene mediante préstamos o emisión de títulos y que deberá pagar posteriormente junto con sus obligaciones financieras.",

  "PIB":
    "Producto Interno Bruto. Es una medida del valor total de los bienes y servicios producidos en un país durante un periodo determinado.",

  "apropiación presupuestal":
    "Autorización incluida en un presupuesto público para destinar recursos a una finalidad específica.",

  "ejecución presupuestal":
    "Proceso mediante el cual los recursos aprobados en un presupuesto son efectivamente comprometidos, obligados y pagados.",

  "regalías":
    "Recursos que recibe el Estado por la explotación de recursos naturales no renovables, como petróleo, gas o minerales.",

  "tutela":
    "Mecanismo judicial rápido para solicitar la protección inmediata de derechos fundamentales cuando estos están siendo vulnerados o amenazados.",

  "fuero":
    "Regla especial que determina qué autoridad puede investigar o juzgar a determinadas personas por razón de su cargo o función.",

  "moción de censura":
    "Mecanismo de control político mediante el cual el Congreso puede debatir la responsabilidad política de un ministro u otro funcionario cobijado por esta figura y, si se cumplen las mayorías exigidas, separarlo del cargo.",

  "urgencia manifiesta":
    "Figura de contratación estatal que permite adoptar procedimientos excepcionales cuando existe una situación urgente que exige respuesta inmediata.",

  "nulidad electoral":
    "Proceso judicial mediante el cual se solicita al juez administrativo que revise la legalidad de una elección o nombramiento y eventualmente lo anule.",

  "doble militancia":
    "Prohibición constitucional y legal que, en determinadas circunstancias, impide pertenecer simultáneamente o apoyar candidaturas contrarias a las reglas del partido o movimiento político correspondiente.",

  "estado de emergencia económica":
    "Estado de excepción que permite al Presidente expedir temporalmente decretos con fuerza de ley para enfrentar hechos extraordinarios que alteran gravemente el orden económico, social o ecológico.",

  "decreto legislativo":
    "Norma con fuerza de ley expedida por el Presidente durante determinados estados de excepción. Está sometida a control automático de la Corte Constitucional.",

  "derecho de réplica de la oposición":
    "Garantía que permite a organizaciones políticas declaradas en oposición responder, bajo determinadas condiciones legales, a intervenciones institucionales del Gobierno.",

  "liquidez":
    "Capacidad de una persona, empresa o entidad para disponer de dinero suficiente para cumplir sus obligaciones inmediatas.",

  "control fiscal":
    "Vigilancia sobre la forma en que se administran y utilizan los recursos públicos. En Colombia es ejercida principalmente por la Contraloría General y las contralorías territoriales.",

  "EDAN":
    "Evaluación de Daños y Análisis de Necesidades. Herramienta utilizada después de una emergencia para identificar daños, población afectada y necesidades prioritarias.",

  "situación de desastre":
    "Declaratoria utilizada cuando una emergencia supera capacidades ordinarias y requiere medidas especiales de coordinación, recursos y recuperación.",

  "estado de excepción":
    "Mecanismo constitucional extraordinario que permite adoptar medidas temporales frente a determinadas crisis. Sus poderes y límites están definidos por la Constitución.",

  "fecha jurídica":
    "Fecha en la que se adopta o expide formalmente una decisión jurídica. Puede ser distinta de la fecha en que esa decisión se hace pública en los medios.",

  "fecha de publicación":
    "Fecha en la que un documento, noticia o decisión se hace públicamente accesible. No siempre coincide con la fecha en que ocurrió el hecho.",

  "fuente oficial":
    "Documento, comunicado, base de datos o pronunciamiento producido por una institución pública. Que una fuente sea oficial identifica su origen; no convierte automáticamente todas sus afirmaciones en hechos independientes comprobados.",

  "balance provisional":
    "Cifra susceptible de cambiar a medida que las autoridades reciben, depuran y concilian nueva información.",

  "capturado":
    "Persona privada de la libertad por orden judicial o en una situación permitida por la ley. Una captura no equivale a una condena.",

  "extradición":
    "Procedimiento mediante el cual un Estado entrega a una persona a otro Estado que la requiere para ser procesada o cumplir una decisión judicial, según las reglas legales aplicables.",

  "radicado":
    "Documento o proyecto que ha sido presentado formalmente ante la autoridad competente. Su radicación no significa que haya sido aprobado.",

  "anunciado":
    "Medida o proyecto comunicado públicamente pero que puede requerir actos posteriores antes de producir efectos jurídicos o materiales.",

  "recibido":
    "En ayuda humanitaria, indica que el recurso o bien ya llegó al destinatario institucional o territorial correspondiente. Es distinto de anunciado, comprometido o movilizado.",

  "ejecutado":
    "Indica que un recurso o medida ya fue utilizado o aplicado efectivamente, no solamente anunciado, apropiado o transferido."
};
