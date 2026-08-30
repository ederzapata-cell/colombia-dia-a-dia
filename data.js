const events = [
  {
    id:"posesion-presidencial",
    group:"government",
    groupLabel:"GOBIERNO",
    category:"INSTITUCIONAL",
    title:"Abelardo de la Espriella se posesiona como presidente de Colombia",
    summary:"El Congreso en pleno tomó juramento al nuevo presidente para el periodo 2026–2030 durante una ceremonia realizada en Cali.",
    eventDate:"2026-08-07",
    publishedDate:"2026-08-07",
    sourceType:"Fuente oficial",
    sourceName:"Senado de la República",
    sourceUrl:"https://senado.gov.co/index.php/el-senado/noticias/7506-como-fue-la-sesion-del-congreso-en-pleno-en-la-que-se-posesiono-abelardo-de-la-espriella",
    status:"Verificado",
    related:["Congreso en pleno","posesión presidencial","Cali","Abelardo de la Espriella"],
    extraSources:[
      ["Presidencia de la República · video de la ceremonia","https://www.presidencia.gov.co/prensa/videos/Paginas/Video-Ceremonia-de-posesion-presidencial-2026-2030-260807.aspx"],
      ["Cámara de Representantes · orden del día","https://www.camara.gov.co/evento/orden-del-dia-congreso-pleno-07-08-2026/"]
    ]
  },

  {
    id:"mando-presidencial",
    group:"government",
    groupLabel:"GOBIERNO",
    category:"FUERZA PÚBLICA",
    title:"Fuerzas Militares reconocen al nuevo comandante supremo",
    summary:"El Ejército documentó el reconocimiento del mando presidencial, acompañado por los honores militares protocolarios y la salva de 21 cañonazos.",
    eventDate:"2026-08-07",
    publishedDate:"2026-08-07",
    sourceType:"Fuente oficial",
    sourceName:"Ejército Nacional",
    sourceUrl:"https://www.ejercito.mil.co/tradicion-solemnidad-y-marcialidad-la-escuela-militar-de-cadetes-acompano-el-reconocimiento-del-mando-presidencial",
    status:"Verificado",
    related:["comandante supremo","Fuerza Pública","honores militares"],
    extraSources:[]
  },

  {
    id:"contactos-internacionales",
    group:"government",
    groupLabel:"GOBIERNO",
    category:"INTERNACIONAL",
    title:"El nuevo presidente sostiene sus primeros contactos internacionales",
    summary:"Durante la jornada de posesión hubo reuniones con mandatarios y delegaciones extranjeras en las que se abordaron temas como seguridad, comercio, inversión y energía.",
    eventDate:"2026-08-07",
    publishedDate:"2026-08-07",
    sourceType:"Fuente periodística",
    sourceName:"EFE",
    sourceUrl:"https://efe.com/mundo/2026-08-07/abelardo-de-la-espriella-dialogo-seguridad-presidentes-latinoamerica-investidura-colombia/",
    status:"Documentado",
    related:["relaciones internacionales","seguridad","comercio","inversión","energía"],
    extraSources:[]
  },

  {
    id:"cepeda-barranquilla",
    group:"opposition",
    groupLabel:"OPOSICIÓN",
    category:"ACTIVIDAD POLÍTICA",
    title:"Iván Cepeda encabeza una concentración en Barranquilla",
    summary:"Cepeda describió la movilización como una expresión de “desobediencia civil, resistencia y soberanía popular” y manifestó que no reconocía la legitimidad del nuevo mandatario.",
    eventDate:"2026-08-07",
    publishedDate:"2026-08-07",
    sourceType:"Declaración atribuida",
    sourceName:"EFE",
    sourceUrl:"https://efe.com/mundo/2026-08-07/ivan-cepeda-resistencia-gobierno-aberlado-de-la-espriella/",
    status:"Declaración documentada",
    related:["Iván Cepeda","Barranquilla","desobediencia civil","legitimidad"],
    extraSources:[]
  },

  {
    id:"pacto-protestas",
    group:"opposition",
    groupLabel:"OPOSICIÓN",
    category:"PROTESTAS",
    title:"Pacto Histórico realiza acciones paralelas durante la investidura",
    summary:"Congresistas y simpatizantes participaron en actos de oposición durante la posesión. La cobertura también registró denuncias de censura y afirmaciones de fraude atribuidas a sus voceros; esas afirmaciones no se presentan aquí como hechos probados.",
    eventDate:"2026-08-07",
    publishedDate:"2026-08-07",
    sourceType:"Fuente periodística",
    sourceName:"EFE",
    sourceUrl:"https://efe.com/mundo/2026-08-07/oposicion-colombia-de-la-espriella/",
    status:"Contextualizado",
    related:["Pacto Histórico","Salón Elíptico","protesta","fraude electoral"],
    extraSources:[]
  },

  {
    id:"petro-casa-narino",
    group:"opposition",
    groupLabel:"OPOSICIÓN",
    category:"TRANSICIÓN",
    title:"Gustavo Petro deja la Casa de Nariño al terminar su mandato",
    summary:"El expresidente salió de la Casa de Nariño por última vez como jefe de Estado y recibió honores militares antes del cambio de gobierno.",
    eventDate:"2026-08-07",
    publishedDate:"2026-08-07",
    sourceType:"Fuente periodística",
    sourceName:"EFE",
    sourceUrl:"https://efe.com/mundo/2026-08-07/petro-despedida-presidencia-colombia/",
    status:"Documentado",
    related:["Gustavo Petro","Casa de Nariño","transición presidencial"],
    extraSources:[]
  },

  {
    id:"captura-segovia",
    group:"state",
    groupLabel:"ESTADO Y PAÍS",
    category:"SEGURIDAD",
    title:"Policía reporta captura en Segovia con arma, munición y un dron",
    summary:"La Policía informó la captura de un hombre en Segovia, Antioquia, y la incautación de una pistola, munición, un dron y accesorios. El hecho ocurrió el 7 de agosto y fue publicado el 8.",
    eventDate:"2026-08-07",
    publishedDate:"2026-08-08",
    sourceType:"Fuente oficial",
    sourceName:"Policía Nacional",
    sourceUrl:"https://oas.policia.gov.co/index.php/noticia/captura-un-ciudadano-por-porte-ilegal-armas-fuego",
    status:"Verificado",
    related:["Segovia","Antioquia","Policía Nacional","porte ilegal de armas"],
    extraSources:[]
  },

  {
    id:"captura-maceo",
    group:"state",
    groupLabel:"ESTADO Y PAÍS",
    category:"JUSTICIA Y SEGURIDAD",
    title:"Capturan en Maceo a un hombre requerido por concierto para delinquir agravado",
    summary:"Policía y Ejército reportaron la captura por orden judicial de un hombre presuntamente vinculado con una estructura criminal. El procedimiento ocurrió el 7 de agosto y fue publicado el 10.",
    eventDate:"2026-08-07",
    publishedDate:"2026-08-10",
    sourceType:"Fuente oficial",
    sourceName:"Policía Nacional",
    sourceUrl:"https://chat.policia.gov.co/noticia/capturado-en-maceo-por-presunta-vinculacion-con-estructura-criminal",
    status:"Verificado",
    related:["Maceo","concierto para delinquir agravado","presunción de inocencia","Policía Nacional"],
    extraSources:[]
  },

  {
    id:"consejo-seguridad-cali-0808",
    group:"government",
    groupLabel:"GOBIERNO",
    category:"SEGURIDAD",
    title:"Concluye en Cali el primer Consejo de Seguridad del nuevo Gobierno",
    summary:"El primer Consejo de Seguridad encabezado por el presidente Abelardo de la Espriella se extendió hasta la madrugada del 8 de agosto. Autoridades nacionales y regionales analizaron los principales retos de seguridad del suroccidente colombiano.",
    eventDate:"2026-08-08",
    publishedDate:"2026-08-08",
    sourceType:"Fuente periodística",
    sourceName:"El Espectador",
    sourceUrl:"https://www.elespectador.com/politica/abelardo-de-la-espriella-asi-fue-el-primer-consejo-de-seguridad-que-cito-con-gobernadores-y-fuerzas-armadas-noticias-hoy/",
    status:"Documentado",
    related:["Consejo de Seguridad","Cali","Valle del Cauca","Cauca","Nariño","Fuerza Pública"],
    extraSources:[
      ["El Colombiano · primer Consejo de Seguridad","https://www.elcolombiano.com/colombia/primer-consejo-seguridad-abelardo-espriella-presidente-cali-AP39728910"]
    ]
  },

  {
    id:"traslado-117-internos",
    group:"government",
    groupLabel:"GOBIERNO",
    category:"SISTEMA PENITENCIARIO",
    title:"Gobierno informa el traslado de 117 internos de alto perfil",
    summary:"El Gobierno informó el 8 de agosto sobre el traslado de 117 personas privadas de la libertad hacia establecimientos de mayor seguridad. La operación había comenzado durante el inicio del nuevo Gobierno.",
    eventDate:"2026-08-08",
    publishedDate:"2026-08-08",
    sourceType:"Fuente periodística",
    sourceName:"Caracol Radio",
    sourceUrl:"https://caracol.com.co/2026/08/08/el-gobierno-confirmo-el-traslado-de-117-internos-de-alto-perfil-a-carceles-de-maxima-seguridad/",
    status:"Documentado",
    related:["INPEC","sistema penitenciario","117 internos","cárceles de máxima seguridad"],
    extraSources:[]
  },

  {
    id:"respuesta-presidencial-atentados-0808",
    group:"government",
    groupLabel:"GOBIERNO",
    category:"SEGURIDAD",
    title:"Presidente se pronuncia sobre los ataques registrados en Cauca y Cesar",
    summary:"El presidente Abelardo de la Espriella rechazó públicamente los hechos violentos conocidos en Cauca y Cesar y afirmó que el Estado buscaría identificar y judicializar a los responsables.",
    eventDate:"2026-08-08",
    publishedDate:"2026-08-08",
    sourceType:"Declaración atribuida",
    sourceName:"El Espectador",
    sourceUrl:"https://www.elespectador.com/politica/de-la-espriella-condeno-atentados-en-el-peaje-de-mondomo-en-cauca-y-en-el-cesar-no-habra-impunidad-noticias-hoy/",
    status:"Declaración documentada",
    related:["Abelardo de la Espriella","Cauca","Cesar","seguridad","atentados"],
    extraSources:[]
  },

  {
    id:"atentado-mondomo-0808",
    group:"state",
    groupLabel:"ESTADO Y PAÍS",
    category:"SEGURIDAD",
    title:"Explosión afecta el nuevo peaje de Mondomo en la vía Panamericana",
    summary:"Una explosión registrada durante la madrugada afectó gravemente la infraestructura del nuevo peaje de Mondomo, en jurisdicción de Santander de Quilichao, Cauca. Dos guardas de seguridad resultaron heridos. La autoría permanecía bajo investigación.",
    eventDate:"2026-08-08",
    publishedDate:"2026-08-08",
    sourceType:"Fuente periodística",
    sourceName:"El Espectador",
    sourceUrl:"https://www.elespectador.com/judicial/destruyeron-con-explosivos-un-peaje-en-santander-de-quilichao-cauca/",
    status:"Autoría en investigación",
    related:["Mondomo","Santander de Quilichao","Cauca","vía Panamericana","explosivos"],
    extraSources:[
      ["Semana · operación para identificar responsables","https://www.semana.com/nacion/articulo/gobierno-de-la-espriella-ordena-operacion-para-dar-con-los-responsables-del-atentado-en-la-via-panamericana/202634/"]
    ]
  },

  {
    id:"palermo-huila-desalojo-0808",
    group:"state",
    groupLabel:"ESTADO Y PAÍS",
    category:"DERECHOS HUMANOS",
    title:"Ciudadano resulta gravemente herido durante un desalojo en Palermo, Huila",
    summary:"Durante una diligencia de desalojo en Palermo, Huila, un ciudadano resultó gravemente herido por un disparo. La Defensoría del Pueblo pidió esclarecer las circunstancias y señaló que, según la información conocida entonces, el disparo habría involucrado a uniformados del Batallón de Artillería N.º 9 Tenerife.",
    eventDate:"2026-08-08",
    publishedDate:"2026-08-09",
    sourceType:"Fuente oficial",
    sourceName:"Defensoría del Pueblo",
    sourceUrl:"https://www.defensoria.gov.co/web/guest/-/urge-esclarecer-los-hechos-que-dejaron-a-un-ciudadano-gravemente-herido-durante-una-diligencia-de-desalojo-en-palermo-huila-y-que-presuntamente-serian-atribuibles-a-miembros-de-las-fuerzas-militares",
    status:"En esclarecimiento",
    related:["Palermo","Huila","Defensoría del Pueblo","Fuerzas Militares","desalojo"],
    extraSources:[]
  },

  {
    id:"defensoria-acciones-armadas-0808",
    group:"state",
    groupLabel:"ESTADO Y PAÍS",
    category:"SEGURIDAD",
    title:"Defensoría documenta acciones armadas en diferentes regiones del país",
    summary:"La Defensoría del Pueblo expresó preocupación por ataques, hostigamientos y hechos con explosivos registrados entre el 7 y el 8 de agosto en varios departamentos. La entidad advirtió que las circunstancias y autorías de diversos hechos todavía estaban en verificación.",
    eventDate:"2026-08-08",
    publishedDate:"2026-08-09",
    sourceType:"Fuente oficial",
    sourceName:"Defensoría del Pueblo",
    sourceUrl:"https://www.defensoria.gov.co/web/guest/-/hacemos-un-llamado-a-prevenir-una-escalada-de-la-violencia-ante-recientes-acciones-armadas-en-el-pais",
    status:"Verificación en curso",
    related:["Defensoría del Pueblo","Cauca","Nariño","Cesar","Antioquia","violencia armada"],
    extraSources:[]
  }
];

const glossary = {
  "posesión presidencial":"Acto formal mediante el cual la persona elegida asume constitucionalmente la Presidencia y presta juramento.",
  "congreso en pleno":"Reunión conjunta del Senado de la República y la Cámara de Representantes.",
  "comandante supremo":"La Constitución asigna al Presidente de la República la dirección de la Fuerza Pública como comandante supremo.",
  "desobediencia civil":"Forma de protesta pública en la que se incumple deliberadamente una norma o mandato para expresar oposición política o moral. Su alcance jurídico depende del caso concreto.",
  "legitimidad":"En política, se refiere al reconocimiento de que una autoridad ejerce el poder de manera válida o aceptada. No es exactamente lo mismo que legalidad.",
  "concierto para delinquir agravado":"Delito relacionado con el acuerdo entre varias personas para cometer delitos, bajo circunstancias que aumentan su gravedad.",
  "presunción de inocencia":"Toda persona debe ser tratada como inocente mientras no exista una decisión judicial que establezca su responsabilidad."
};
