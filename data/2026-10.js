// =========================================================
// COLOMBIA DÍA A DÍA
// DATOS · OCTUBRE 2026
//
// Cada nuevo día se agrega AL FINAL de este archivo.
// No modificar ni reconstruir días anteriores.
// =========================================================


// =========================================================
// 01 OCT 2026
// =========================================================

dayMeta["2026-10-01"] = {
  status: "VERIFICADO ✓",
  subtitle: "Gobierno, oposición, Congreso, economía, justicia, seguridad, salud, educación, ambiente y regiones."
};

events.push(
  {
    id: "presupuesto-2027-plenarias-01", group: "government", groupLabel: "GOBIERNO", category: "PRESUPUESTO Y CONGRESO", importance: "MUY IMPORTANTE",
    title: "Senado y Cámara retoman el trámite del Presupuesto General de 2027",
    summary: "Las plenarias fueron citadas para iniciar formalmente la discusión del presupuesto. Después del receso legislativo, las votaciones están previstas entre el 13 y el 16 de octubre, con el 19 como fecha límite para aprobar los textos y abrir una eventual conciliación.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Cobertura legislativa", sourceName: "El Espectador", sourceUrl: "https://www.elespectador.com/politica/congreso-retoma-debate-del-presupuesto-de-2027-que-promueve-gobierno-de-de-la-espriella/", status: "Trámite en plenarias",
    related: ["Presupuesto 2027", "Senado", "Cámara", "Ministerio de Hacienda"], whyItMatters: "El monto y la distribución del presupuesto determinarán el margen del Gobierno para financiar inversión, funcionamiento, deuda y reconstrucción.", extraSources: []
  },
  {
    id: "ley-rescate-economico-01", group: "government", groupLabel: "GOBIERNO", category: "ECONOMÍA Y FINANZAS PÚBLICAS", importance: "MUY IMPORTANTE",
    title: "Hacienda anuncia Ley de Rescate Económico con recorte superior a $40 billones",
    summary: "El ministro Miguel Gómez informó que el proyecto llegará al Congreso en 10 a 12 días y buscará reducir el gasto en 2,2 % del PIB. La iniciativa será la segunda fase del ajuste fiscal, después del Presupuesto de 2027 y antes del nuevo Plan Nacional de Desarrollo.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Información económica y legislativa", sourceName: "La República", sourceUrl: "https://www.larepublica.co/economia/en-menos-de-15-dias-se-radicara-la-ley-de-rescate-en-el-congreso-de-la-republica-4494104", status: "Radicación anunciada",
    related: ["Ley de Rescate Económico", "Miguel Gómez", "déficit fiscal", "austeridad"], whyItMatters: "Un ajuste de esa magnitud puede reorganizar entidades, contratos e inversión pública y tendrá efectos directos sobre servicios y crecimiento.", extraSources: ["https://www.lafm.com.co/carta-del-director/seis-de-las-6-con-juan-lozano-jueves-1-de-octubre-de-2026-412629"]
  },
  {
    id: "gasolina-reversion-aumento-01", group: "government", groupLabel: "GOBIERNO", category: "ENERGÍA Y COSTO DE VIDA", importance: "MUY IMPORTANTE",
    title: "Gobierno deja sin efecto el aumento de $46 por galón en la gasolina",
    summary: "Los ministerios de Minas y Hacienda revirtieron el incremento que había comenzado a regir el 1 de octubre y mantuvieron sin cambios el precio del ACPM. El Estado asumirá durante el mes cerca de $8.300 millones para reconocer el mayor precio del etanol a los productores sin trasladarlo a los consumidores.",
    eventDate: "2026-10-01", publishedDate: "2026-10-02", sourceType: "Decisión tarifaria", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/minenergia-reverso-aumento-de-precio-de-la-gasolina-de-46-tras-orden-del-presidente-de-la-espriella/", status: "Aumento anulado",
    related: ["gasolina", "Ministerio de Minas", "Ministerio de Hacienda", "costo de vida"], whyItMatters: "La reversión evita un aumento inmediato para hogares y transportadores, aunque traslada temporalmente el costo del ajuste a las finanzas públicas.", extraSources: ["https://www.elespectador.com/economia/precio-de-la-gasolina-de-la-espriella-pidio-revertir-el-aumento-de-octubre/"]
  },
  {
    id: "debate-regulacion-protestas-01", group: "opposition", groupLabel: "OPOSICIÓN Y MOVIMIENTOS", category: "PROTESTA, OPOSICIÓN Y DERECHOS", importance: "MUY IMPORTANTE",
    title: "Gobierno y oposición chocan por el nuevo protocolo para las protestas",
    summary: "La izquierda, que prepara movilizaciones estudiantiles y sindicales, cuestiona el alcance del borrador que amplía la actuación policial ante hechos violentos. El ministro del Interior, Rodrigo Lara, sostiene que el diálogo seguirá abierto para quienes marchan y que la fuerza sólo se dirigirá contra agresiones, armas, retenciones o bloqueos de ambulancias.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Debate político", sourceName: "El Espectador", sourceUrl: "https://www.elespectador.com/politica/debate-en-colombia-entre-izquierda-y-derecha-por-regulacion-de-protestas-que-promueve-el-gobierno/", status: "Borrador en debate",
    related: ["Pacto Histórico", "Rodrigo Lara", "protesta social", "Policía"], whyItMatters: "La regulación definirá límites prácticos para el uso de la fuerza, la mediación y el ejercicio de la oposición en las calles.", extraSources: []
  },
  {
    id: "gobierno-aclara-edad-pension-01", group: "government", groupLabel: "GOBIERNO", category: "PENSIONES Y EQUIDAD", importance: "IMPORTANTE",
    title: "Gobierno aclara que no estudia aumentar la edad de pensión de las mujeres",
    summary: "El vicepresidente José Manuel Restrepo afirmó que el Ejecutivo no ha discutido ningún ajuste a la edad de jubilación femenina. Señaló que la conversación surgió en el Congreso y reiteró que el Gobierno debe definir la implementación de la reforma pensional aprobada durante la administración anterior.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Pronunciamiento gubernamental", sourceName: "El Espectador", sourceUrl: "https://www.elespectador.com/politica/reforma-pensional-en-colombia-gobierno-aclara-que-no-ha-debatido-sobre-edad-de-mujeres/", status: "Propuesta descartada por ahora",
    related: ["José Manuel Restrepo", "pensiones", "mujeres", "reforma pensional"], whyItMatters: "La aclaración reduce incertidumbre para millones de trabajadoras y separa el debate legislativo de una política formal del Ejecutivo.", extraSources: []
  },
  {
    id: "fractura-derecha-regionales-01", group: "government", groupLabel: "GOBIERNO", category: "COALICIÓN Y PARTIDOS", importance: "MUY IMPORTANTE",
    title: "Centro Democrático condiciona su apoyo al Gobierno tras ruptura con Salvación Nacional",
    summary: "El partido de Álvaro Uribe rechazó alianzas regionales con Enrique Gómez, mientras Salvación Nacional, Creemos y Defensores de la Patria avanzan en una coalición sin el uribismo. La bancada del Centro Democrático seguirá apoyando proyectos que considere convenientes, pero advirtió que no acompañará iniciativas que afecten libertades o instituciones.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Análisis y cobertura política", sourceName: "El País", sourceUrl: "https://elpais.com/america-colombia/2026-10-01/enrique-gomez-tensa-la-convivencia-entre-los-partidos-de-derecha.html", status: "Alianza oficialista tensionada",
    related: ["Centro Democrático", "Salvación Nacional", "Enrique Gómez", "elecciones regionales 2027"], whyItMatters: "El Gobierno necesita a la principal bancada oficialista para aprobar presupuesto, ajuste fiscal y reformas, y la pelea puede alterar esas mayorías.", extraSources: ["https://elpais.com/america-colombia/2026-10-01/salvacion-nacional-se-desteta.html"]
  },
  {
    id: "zut-putumayo-pausa-01", group: "government", groupLabel: "GOBIERNO", category: "PAZ, JUSTICIA Y REINCORPORACIÓN", importance: "MUY IMPORTANTE",
    title: "Gobierno frena el cierre de la ZUT de Putumayo y abre un plazo de dos meses",
    summary: "El Ejecutivo suspendió el desalojo previsto para el 1 y 2 de octubre en Valle del Guamuez después de una orden judicial. Las entidades tendrán dos meses para resolver la situación de 62 desmovilizados; cinco tienen órdenes de captura vigentes y los demás podrán continuar su ruta de reincorporación.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Desarrollo judicial y de paz", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/gobierno-freno-cierre-de-zut-en-putumayo-y-dio-dos-meses-para-resolver-situacion-juridica/", status: "Cierre suspendido",
    related: ["Putumayo", "Valle del Guamuez", "ZUT", "reincorporación"], whyItMatters: "La pausa evita una salida inmediata sin garantías y obliga a coordinar seguridad, justicia y reintegración para cada persona.", extraSources: []
  },
  {
    id: "corte-vladimir-fernandez-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "JUSTICIA E INSTITUCIONES", importance: "MUY IMPORTANTE",
    title: "Corte Constitucional responde por señalamientos contra Vladimir Fernández",
    summary: "El tribunal defendió la presunción de inocencia del magistrado y dijo que colaborará con las autoridades si es requerido por las conversaciones atribuidas a Fernández con el condenado exdirector de la UNGRD Olmedo López. También sostuvo que sus fallos son decisiones colegiadas y no quedan comprometidos por asuntos personales de un integrante.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Comunicado judicial", sourceName: "El Espectador", sourceUrl: "https://www.elespectador.com/judicial/corte-constitucional-responde-por-cuestionamientos-contra-magistrado-vladimir-fernandez/", status: "Pronunciamiento institucional",
    related: ["Corte Constitucional", "Vladimir Fernández", "Olmedo López", "UNGRD"], whyItMatters: "El caso involucra la confianza en el alto tribunal y exige distinguir la responsabilidad individual de la validez de decisiones colegiadas.", extraSources: []
  },
  {
    id: "bruce-mac-master-renuncia-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "EMPRESA Y RELACIÓN CON EL GOBIERNO", importance: "MUY IMPORTANTE",
    title: "Bruce Mac Master renuncia a la presidencia de la ANDI tras casi 13 años",
    summary: "Mac Master comunicó su salida a la Junta de Dirección General y mencionó presiones que, según dijo, limitaron la autonomía del gremio. La renuncia ocurre en medio de tensiones entre sectores empresariales y el Gobierno; el ministro del Interior la calificó como una decisión interna de la organización.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Información empresarial", sourceName: "El Espectador", sourceUrl: "https://www.elespectador.com/economia/bruce-mac-master-renuncia-a-la-presidencia-de-la-andi-tras-mas-de-13-anos-en-el-cargo/", status: "Renuncia presentada",
    related: ["Bruce Mac Master", "ANDI", "empresarios", "Gobierno"], whyItMatters: "La salida cambia la principal vocería empresarial del país durante un ajuste fiscal y puede redefinir la interlocución del sector privado con el Ejecutivo.", extraSources: []
  },
  {
    id: "contraloria-pasaportes-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "CONTROL FISCAL Y PASAPORTES", importance: "IMPORTANTE",
    title: "Contraloría vigilará los contratos de urgencia para evitar interrupciones en pasaportes",
    summary: "El organismo anunció control sobre precios, plazos, idoneidad de contratistas y respeto de las decisiones judiciales en la urgencia manifiesta declarada por Cancillería. La medida busca mantener la producción, personalización, custodia y entrega de libretas y visas sin suspensiones.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Control fiscal", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/contraloria-pone-lupa-en-urgencia-manifiesta-de-pasaportes-para-que-los-expidan-sin-interrupcion/", status: "Seguimiento anunciado",
    related: ["Contraloría", "Cancillería", "pasaportes", "contratación"], whyItMatters: "El control debe proteger simultáneamente la continuidad de un servicio esencial y el uso transparente de recursos bajo contratación urgente.", extraSources: []
  },
  {
    id: "colfecar-bloqueos-perdidas-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "TRANSPORTE, PROTESTA Y ECONOMÍA", importance: "IMPORTANTE",
    title: "Colfecar calcula 2.841 bloqueos viales y pérdidas por $12,9 billones desde 2023",
    summary: "El gremio de transporte de carga presentó en Cartagena un balance acumulado entre enero de 2023 y el 7 de agosto de 2026. Su presidenta pidió al Gobierno anticipar y atender los reclamos comunitarios antes de que las carreteras se conviertan en escenarios de presión.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Balance gremial", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/2841-bloqueos-y-129-billones-en-perdidas-la-alerta-de-colfecar-por-las-protestas-en-las-vias/", status: "Alerta presentada",
    related: ["Colfecar", "bloqueos", "transporte de carga", "protesta"], whyItMatters: "Las interrupciones encarecen alimentos e insumos, pero su prevención también exige soluciones institucionales a las demandas sociales que las originan.", extraSources: []
  },
  {
    id: "masacre-sevilla-valle-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SEGURIDAD Y DERECHOS HUMANOS", importance: "MUY IMPORTANTE",
    title: "Ataque en Sevilla deja tres muertos y es registrado como la masacre 94 de 2026",
    summary: "Hombres armados asesinaron la noche del 30 de septiembre a tres personas dentro de un establecimiento del barrio El Carmen, entre ellas un patrullero de la Policía que estaba de permiso y dos hermanos. Indepaz incluyó el hecho en su registro nacional de masacres.",
    eventDate: "2026-09-30", publishedDate: "2026-10-01", sourceType: "Reporte regional y de derechos humanos", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/masacre-94-en-colombia-asesinan-a-patrullero-y-dos-hermanos-en-sevilla-valle/", status: "Investigación abierta",
    related: ["Sevilla", "Valle del Cauca", "Indepaz", "homicidio múltiple"], whyItMatters: "El crimen evidencia la persistencia de violencia letal en municipios intermedios y exige esclarecer responsables, móviles y riesgos para la comunidad.", extraSources: []
  },
  {
    id: "sanitas-gestores-octubre-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SALUD Y MEDICAMENTOS", importance: "IMPORTANTE",
    title: "Entra en operación el cambio de gestores farmacéuticos de EPS Sanitas",
    summary: "Desde hoy cambia parte de la red de dispensación en Bogotá, Cundinamarca, Antioquia, Santander, Tolima y Huila. Colsubsidio, Disfarma y Ramédicas asumen puntos y modalidades según el territorio; en Bogotá, Cruz Verde seguirá entregando hasta el 31 de octubre y cuatro sedes de Colsubsidio atenderán medicamentos no PBS.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Información de servicio en salud", sourceName: "Consultorsalud", sourceUrl: "https://consultorsalud.com/eps-sanitas-cambia-gestores-farmaceuticos/", status: "Transición en vigor",
    related: ["EPS Sanitas", "medicamentos", "Colsubsidio", "Disfarma"], whyItMatters: "La transición afecta la continuidad de tratamientos en seis territorios y obliga a los afiliados a verificar el punto asignado antes de reclamar sus medicamentos.", extraSources: []
  },
  {
    id: "crc-cancelacion-servicios-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "CONSUMIDORES Y TELECOMUNICACIONES", importance: "IMPORTANTE",
    title: "Empieza a regir el canal digital permanente para cancelar servicios móviles",
    summary: "Los operadores deben ofrecer un canal exclusivo disponible las 24 horas, tramitar directamente la solicitud y entregar un Código Único Numérico. Durante ese proceso no podrán remitir al usuario a otra área, exigir requisitos adicionales ni hacer ofertas de retención.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Regulación de usuarios", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/quiere-cancelar-el-servicio-de-telefonia-celular-y-es-imposible-crc-le-pone-el-freno-a-operadores/", status: "Regla en vigor",
    related: ["CRC", "telefonía móvil", "internet", "derechos del consumidor"], whyItMatters: "La obligación elimina barreras diseñadas para retrasar cancelaciones y fortalece la libertad de los usuarios para cambiar de operador.", extraSources: []
  },
  {
    id: "villa-rosario-agua-nino-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "AGUA, CLIMA Y REGIONES", importance: "IMPORTANTE",
    title: "Villa del Rosario activa contingencia por la caída del caudal del río Táchira",
    summary: "Aqualia reforzó su plan ante la alerta naranja de Corpornor y redujo 30 % el caudal concesionado para captación. El sistema todavía puede abastecer al municipio, pero la empresa evalúa racionamientos en sectores con servicio continuo si los niveles siguen bajando.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Reporte regional de servicio público", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/villa-del-rosario-enfrenta-efectos-por-el-fenomeno-del-nino-aqualia-activa-plan-de-contingencia/", status: "Plan de contingencia activo",
    related: ["Villa del Rosario", "río Táchira", "Aqualia", "Fenómeno de El Niño"], whyItMatters: "La reducción del caudal amenaza el suministro de agua en un municipio fronterizo y anticipa impactos concretos del fenómeno de El Niño.", extraSources: []
  },
  {
    id: "seguridad-alimentaria-ocana-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "ALIMENTOS, CLIMA Y REGIONES", importance: "IMPORTANTE",
    title: "Ocaña advierte riesgo para la seguridad alimentaria por el fenómeno de El Niño",
    summary: "El alcalde Emiro Quintero alertó que la sequía y la reducción de agua pueden comprometer cultivos y abastecimiento en Ocaña y municipios vecinos. Las autoridades locales pidieron acelerar prevención, ahorro de agua y coordinación regional antes de una mayor afectación productiva.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Alerta regional", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/seguridad-alimentaria-en-riesgo-en-la-region-por-culpa-del-fenomeno-del-nino/", status: "Riesgo advertido",
    related: ["Ocaña", "Norte de Santander", "seguridad alimentaria", "Fenómeno de El Niño"], whyItMatters: "Una caída de la producción local puede elevar precios, reducir ingresos rurales y agravar la inseguridad alimentaria en el nororiente del país.", extraSources: []
  },
  {
    id: "mision-salud-choco-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SALUD PÚBLICA Y REGIONES", importance: "IMPORTANTE",
    title: "OPS y Unicórdoba llevan una misión de salud ambiental a comunidades del Chocó",
    summary: "La misión, que se extenderá hasta el 6 de octubre, combina educación comunitaria y atención veterinaria. Mediante actividades pedagógicas abordará rabia, zoonosis, agua segura, saneamiento, higiene y enfermedades transmitidas por vectores.",
    eventDate: "2026-09-30", publishedDate: "2026-10-01", sourceType: "Información regional de salud", sourceName: "El Heraldo", sourceUrl: "https://www.elheraldo.co/colombia/2026/10/01/unicordoba-se-une-a-mision-de-la-ops-para-llevar-salud-y-educacion-a-comunidades-del-choco/", status: "Misión en terreno",
    related: ["Chocó", "OPS", "Universidad de Córdoba", "salud ambiental"], whyItMatters: "La prevención integrada de enfermedades humanas, animales y ambientales es especialmente valiosa en comunidades con acceso limitado a servicios sanitarios.", extraSources: []
  },
  {
    id: "vamos-palante-2026-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "EDUCACIÓN SUPERIOR", importance: "IMPORTANTE",
    title: "Vamos Pa'lante abre campaña para evitar la deserción universitaria y apoyar a damnificados",
    summary: "La novena edición se fijó la meta de recaudar $10.000 millones para estudiantes con dificultades económicas. Además del apoyo nacional, reservará ayudas para 500 jóvenes de cuatro universidades afectadas por el terremoto del 10 de agosto.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Campaña educativa", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/llega-la-campana-vamos-palante-2026-para-evitar-que-jovenes-universitarios-abandonen-sus-carreras/", status: "Campaña abierta",
    related: ["Vamos Pa'lante", "deserción universitaria", "terremoto", "becas"], whyItMatters: "El apoyo financiero puede evitar que jóvenes abandonen sus estudios y prioriza a quienes sufrieron una emergencia que afectó ingresos e infraestructura educativa.", extraSources: []
  },
  {
    id: "universidad-quindio-danos-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "EDUCACIÓN Y RECONSTRUCCIÓN", importance: "IMPORTANTE",
    title: "Universidad del Quindío reporta daños en cerca del 60 % de sus edificios",
    summary: "Una visita del Ministerio de Educación verificó afectaciones importantes en bloques de Salud, Ingeniería, Ciencias Básicas y Administrativo 2, que mantienen suspendida la presencialidad. La universidad entregó su diagnóstico y espera una hoja de ruta con recursos para reconstrucción y continuidad académica.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Reporte regional", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/jueves-1-de-octubre-las-noticias-mas-importantes-de-armenia-y-quindio/", status: "Evaluación técnica en curso",
    related: ["Universidad del Quindío", "terremoto", "Ministerio de Educación", "reconstrucción"], whyItMatters: "La recuperación de la principal universidad pública del departamento es clave para restablecer plenamente clases, investigación y servicios regionales.", extraSources: []
  },
  {
    id: "personeria-armenia-salud-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SALUD Y REGIONES", importance: "IMPORTANTE",
    title: "Personería de Armenia registra 1.680 solicitudes para proteger el derecho a la salud",
    summary: "El balance a septiembre ya supera los 1.012 casos atendidos durante todo 2025. La falta de entrega de medicamentos es uno de los principales motivos de tutela; Nueva EPS concentra el mayor número de requerimientos, seguida por Asmet Salud.",
    eventDate: "2026-09-30", publishedDate: "2026-10-01", sourceType: "Balance regional", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/jueves-1-de-octubre-las-noticias-mas-importantes-de-armenia-y-quindio/", status: "Alerta institucional",
    related: ["Armenia", "Personería", "Nueva EPS", "medicamentos"], whyItMatters: "El aumento de reclamos muestra barreras persistentes de acceso a tratamientos y permite identificar las entidades que requieren mayor vigilancia.", extraSources: []
  },
  {
    id: "climate-week-medellin-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "AMBIENTE Y CIUDADES", importance: "RELEVANTE",
    title: "Medellín recibe la primera Climate Week Biodiversity realizada en América Latina",
    summary: "El encuentro reúne hasta el 10 de octubre a más de 13.200 inscritos de 30 países en unas 240 actividades sobre biodiversidad, clima y contaminación. Gobiernos, empresas, academia y ciudadanía discuten soluciones y financiación ambiental con énfasis en la aplicación territorial.",
    eventDate: "2026-09-28", publishedDate: "2026-10-01", sourceType: "Fuente oficial local", sourceName: "Alcaldía de Medellín", sourceUrl: "https://www.medellin.gov.co/es/sala-de-prensa/noticias/medellin-es-un-ejemplo-de-transformaciones-en-colombia-diego-mesa-director-del-fondo-para-el-medio-ambiente-mundial/", status: "Encuentro en curso",
    related: ["Medellín", "Climate Week", "biodiversidad", "financiación climática"], whyItMatters: "El evento conecta decisiones globales con proyectos urbanos y regionales y posiciona a Colombia como sede de cooperación ambiental internacional.", extraSources: []
  },
  {
    id: "cabal-renuncia-centro-democratico-01", group: "opposition", groupLabel: "OPOSICIÓN Y MOVIMIENTOS", category: "PARTIDOS Y OPOSICIÓN", importance: "MUY IMPORTANTE",
    title: "María Fernanda Cabal formaliza su renuncia al Centro Democrático",
    summary: "La exsenadora comunicó su salida después de no recibir respuesta a la solicitud de escisión que había presentado. Anunció que impulsará un proyecto político independiente y que respaldará al Gobierno únicamente en las decisiones que considere convenientes para el país.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Declaración política", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/maria-fernanda-cabal-anuncio-su-renuncia-al-partido-centro-democratico/", status: "Renuncia formalizada",
    related: ["María Fernanda Cabal", "Centro Democrático", "oposición", "partidos"], whyItMatters: "La salida reordena el espacio de la derecha y puede alterar alianzas, bancadas y candidaturas de cara a las elecciones regionales de 2027.", extraSources: []
  },
  {
    id: "seguridad-privada-crimen-01", group: "government", groupLabel: "GOBIERNO", category: "SEGURIDAD Y VIGILANCIA PRIVADA", importance: "MUY IMPORTANTE",
    title: "Gobierno investiga vínculos de empresas de seguridad privada con redes criminales",
    summary: "La Superintendencia de Vigilancia informó que canceló la licencia de Maximus y que adelanta decisiones contra Blink, Lost Prevention, Atenas, OL Security Group y Servisecurity por posibles nexos o irregularidades. Varias actuaciones todavía no están en firme y deben agotar sus recursos administrativos.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Información institucional", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/gobierno-pone-el-ojo-en-los-vinculos-de-empresas-privadas-de-seguridad-con-organizaciones-criminales/", status: "Investigaciones y sanciones en trámite",
    related: ["Supervigilancia", "seguridad privada", "crimen organizado", "licencias"], whyItMatters: "Las firmas de vigilancia manejan armas, personal e información sensible; depurar el sector reduce riesgos de infiltración criminal y exige respetar el debido proceso.", extraSources: []
  },
  {
    id: "santos-jep-presupuesto-2033-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "PAZ Y JUSTICIA TRANSICIONAL", importance: "MUY IMPORTANTE",
    title: "Juan Manuel Santos pide garantizar recursos para la JEP hasta 2033",
    summary: "El expresidente corrigió una declaración inicial sobre un cierre en 2028 y precisó que la jurisdicción debe contar con financiación durante los quince años de su mandato. Mantuvo su llamado a acelerar resultados, reducir demoras y responder con mayor eficacia a las víctimas.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Declaración y rectificación pública", sourceName: "La Silla Vacía", sourceUrl: "https://www.lasillavacia.com/en-vivo/santos-corrige-y-pide-garantizar-presupuesto-de-la-jep-hasta-2033/", status: "Solicitud pública",
    related: ["Juan Manuel Santos", "JEP", "Acuerdo de Paz", "víctimas"], whyItMatters: "La continuidad presupuestal es necesaria para concluir los macrocasos y las sanciones propias sin recortar el mandato legal de la justicia transicional.", extraSources: ["https://caracol.com.co/2026/10/01/santos-pide-a-la-jep-acelerar-sus-procesos-y-cumplir-su-cometido-antes-de-2028/"]
  },
  {
    id: "guardias-indigenas-borrador-01", group: "government", groupLabel: "GOBIERNO", category: "PUEBLOS INDÍGENAS Y SEGURIDAD", importance: "MUY IMPORTANTE",
    title: "MinInterior propone un sistema de información sobre guardias indígenas",
    summary: "Un borrador de decreto plantea caracterizar a las guardias, sus territorios, formas organizativas y mecanismos de coordinación con autoridades estatales. El Ministerio del Interior presentó la medida como una herramienta de reconocimiento y articulación, todavía sujeta a discusión.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Borrador normativo", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/gobierno-plantea-crear-sistema-de-informacion-sobre-guardias-indigenas-para-que/", status: "Borrador en discusión",
    related: ["Ministerio del Interior", "guardias indígenas", "autonomía", "territorios"], whyItMatters: "El registro toca la autonomía y la seguridad de estructuras comunitarias que actúan en territorios con presencia de grupos armados.", extraSources: []
  },
  {
    id: "icbf-amenazas-directora-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "PROTECCIÓN A LA NIÑEZ", importance: "MUY IMPORTANTE",
    title: "Directora del ICBF denuncia amenazas de muerte y presiones en redes sociales",
    summary: "María Carolina Restrepo informó que recibió mensajes intimidatorios relacionados con su gestión y pidió a la Fiscalía investigar su origen. El caso fue puesto en conocimiento de las autoridades para evaluar riesgos y adoptar medidas de protección.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Denuncia pública", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/directora-del-icbf-denuncia-amenazas-de-muerte-y-pide-a-la-fiscalia-investigar-el-caso/", status: "Denuncia remitida a la Fiscalía",
    related: ["ICBF", "María Carolina Restrepo", "Fiscalía", "amenazas"], whyItMatters: "Las amenazas contra una alta funcionaria pueden interferir con decisiones de protección infantil y requieren una investigación que identifique responsables y motivaciones.", extraSources: []
  },
  {
    id: "igac-investigacion-disciplinaria-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "CONTROL DISCIPLINARIO", importance: "IMPORTANTE",
    title: "Procuraduría investiga a ocho exfuncionarios del IGAC por posibles irregularidades contractuales",
    summary: "La investigación disciplinaria incluye a la exsecretaria general Martha Lucía Parra García y a otros siete servidores por contratos relacionados con Findeter y Agrilink durante 2022 y 2023. El proceso busca establecer si hubo faltas en la planeación, supervisión o ejecución.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Actuación disciplinaria", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/procuraduria-abrio-investigacion-disciplinaria-contra-exfuncionarios-del-igac-por-posible-corrupcion/", status: "Investigación abierta",
    related: ["Procuraduría", "IGAC", "Findeter", "contratación"], whyItMatters: "El proceso examina el manejo de recursos y responsabilidades en una entidad clave para catastro, tierras y ordenamiento territorial.", extraSources: []
  },
  {
    id: "caicedo-fiscalia-condena-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "JUSTICIA Y CORRUPCIÓN", importance: "MUY IMPORTANTE",
    title: "Fiscalía pide condenar a Carlos Caicedo por presuntas irregularidades en contrato de parques",
    summary: "Durante los alegatos finales, la Fiscalía solicitó un fallo condenatorio contra el exalcalde de Santa Marta por un contrato de adecuación de parques. La petición no equivale a una condena: la decisión corresponde al tribunal que conoce el proceso y debe valorar las pruebas y la defensa.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Cobertura judicial", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/fiscalia-pidio-que-carlos-caicedo-sea-condenado-por-presunta-corrupcion/", status: "Alegatos finales",
    related: ["Carlos Caicedo", "Fiscalía", "Santa Marta", "contratación"], whyItMatters: "El expediente involucra a una figura nacional y recursos locales; el fallo deberá preservar la presunción de inocencia y precisar responsabilidades.", extraSources: []
  },
  {
    id: "colfecar-violencia-carreteras-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SEGURIDAD VIAL Y TRANSPORTE", importance: "MUY IMPORTANTE",
    title: "Colfecar alerta por violencia contra transportadores en las carreteras",
    summary: "El gremio reportó que durante los últimos cuatro años fueron incinerados 158 camiones, murieron 56 personas y se registraron 86 artefactos explosivos en corredores viales. Solicitó mayor inteligencia, presencia estatal y reacción oportuna en las rutas con mayor riesgo.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Balance gremial", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/colfecar-alerta-por-violencia-en-las-carreteras-tras-158-vehiculos-incinerados-y-56-asesinatos/", status: "Alerta presentada",
    related: ["Colfecar", "transportadores", "carreteras", "seguridad"], whyItMatters: "La violencia amenaza vidas, abastecimiento y costos logísticos, y muestra que los bloqueos no son el único riesgo que enfrenta el transporte de carga.", extraSources: []
  },
  {
    id: "choco-ataques-drones-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "ORDEN PÚBLICO Y REGIONES", importance: "MUY IMPORTANTE",
    title: "Autoridades realizan consejo de seguridad tras once ataques en tres días en Chocó",
    summary: "Las autoridades reportaron once acciones violentas en distintos puntos del departamento, algunas con drones adaptados para lanzar explosivos. El consejo de seguridad evaluó refuerzos y coordinación para proteger a comunidades, fuerza pública e infraestructura.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Reporte regional de seguridad", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/tras-11-atentados-en-tres-dias-en-choco-autoridades-realizaron-un-consejo-de-seguridad/", status: "Respuesta institucional en curso",
    related: ["Chocó", "drones", "explosivos", "consejo de seguridad"], whyItMatters: "La frecuencia y la tecnología de los ataques elevan el riesgo para poblaciones aisladas y exigen capacidad preventiva, no sólo reacción militar.", extraSources: []
  },
  {
    id: "regalias-2027-2028-01", group: "government", groupLabel: "GOBIERNO", category: "REGALÍAS Y FINANZAS TERRITORIALES", importance: "MUY IMPORTANTE",
    title: "Gobierno radica presupuesto de regalías 2027-2028 por $27,54 billones",
    summary: "El proyecto destina cerca de $25,9 billones, equivalentes al 94,2 %, a inversión. Entre las asignaciones informadas figuran $7,59 billones para paz, $7,28 billones regionales, $5,37 billones directos, $3,21 billones locales y $2,14 billones para ciencia y tecnología.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Información presupuestal", sourceName: "El Espectador", sourceUrl: "https://www.elespectador.com/economia/gobierno-radica-el-presupuesto-de-regalias-2027-2028-por-cop-2754-billones/", status: "Proyecto radicado",
    related: ["Sistema General de Regalías", "Congreso", "regiones", "inversión pública"], whyItMatters: "La distribución definirá la financiación territorial de proyectos de paz, infraestructura, ciencia y desarrollo local durante el próximo bienio.", extraSources: []
  },
  {
    id: "dian-iva-hibridos-01", group: "government", groupLabel: "GOBIERNO", category: "IMPUESTOS Y MOVILIDAD LIMPIA", importance: "IMPORTANTE",
    title: "DIAN anuncia medidas para destrabar devoluciones de IVA a vehículos híbridos y eléctricos",
    summary: "La entidad habilitó jornadas y cerca de 200 citas diarias en Bogotá, Medellín, Cali y Bucaramanga para atender solicitudes acumuladas. La medida busca corregir el cuello de botella en los trámites de devolución asociados a estos vehículos.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Información tributaria", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/devolucion-iva-a-hibridos-y-electricos-dian-anuncio-medidas-por-cuello-de-botella-en-solicitudes/", status: "Plan de atención anunciado",
    related: ["DIAN", "IVA", "vehículos eléctricos", "vehículos híbridos"], whyItMatters: "La agilidad de las devoluciones afecta la confianza en los incentivos tributarios diseñados para acelerar una movilidad con menores emisiones.", extraSources: []
  },
  {
    id: "cortissoz-convenio-barranquilla-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "INFRAESTRUCTURA Y REGIONES", importance: "IMPORTANTE",
    title: "Aerocivil y Barranquilla acuerdan acelerar obras en el aeropuerto Ernesto Cortissoz",
    summary: "Un convenio de 18 meses entrega temporalmente al Distrito la gestión de obras del lado tierra, mientras Aerocivil conserva pista, navegación y seguridad operacional. Barranquilla prevé aportar $40.000 millones para intervenir infraestructura y servicios de la terminal.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Información de infraestructura", sourceName: "La Silla Vacía", sourceUrl: "https://www.lasillavacia.com/en-vivo/abelardo-entrega-a-la-alcaldia-de-char-las-obras-del-ernesto-cortissoz/", status: "Convenio suscrito",
    related: ["Ernesto Cortissoz", "Barranquilla", "Aerocivil", "infraestructura"], whyItMatters: "La coordinación define quién ejecuta la recuperación de una terminal estratégica para la conectividad y la economía del Caribe.", extraSources: []
  },
  {
    id: "manifiesto-centro-constitucion-01", group: "opposition", groupLabel: "OPOSICIÓN Y MOVIMIENTOS", category: "DEMOCRACIA E INSTITUCIONES", importance: "MUY IMPORTANTE",
    title: "Exministros y académicos publican manifiesto sobre garantías constitucionales",
    summary: "Alejandro Gaviria, Cecilia López, José Antonio Ocampo, Juan Daniel Oviedo, Cecilia María Vélez, Moisés Wasserman y Humberto de la Calle, entre otros firmantes, expresaron preocupación por la concentración del poder presidencial y defendieron la libertad de prensa y la autonomía de sindicatos y gremios. Se trata de la posición política de quienes suscriben el documento.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Manifiesto político", sourceName: "Asuntos Legales", sourceUrl: "https://www.asuntoslegales.com.co/actualidad/exministros-e-intelectuales-alertan-por-deterioro-de-principios-constitucionales-con-adle-4494283", status: "Pronunciamiento publicado",
    related: ["centro político", "Constitución", "libertad de prensa", "autonomía gremial"], whyItMatters: "El pronunciamiento articula una crítica institucional desde sectores de centro y amplía el mapa de oposición más allá de los partidos tradicionales.", extraSources: []
  },
  {
    id: "clan-golfo-capturas-choco-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SEGURIDAD Y CRIMEN ORGANIZADO", importance: "IMPORTANTE",
    title: "Capturan a tres presuntos integrantes del Clan del Golfo vinculados con Chocó",
    summary: "Operativos en Quibdó, Juradó y Medellín dejaron tres capturas, entre ellas la de alias Capi, señalado por las autoridades como cabecilla financiero. Durante las diligencias fueron incautados cerca de $336 millones; la responsabilidad penal deberá establecerse judicialmente.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Reporte de autoridades", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/capturados-tres-integrantes-del-clan-del-golfo-entre-ellos-un-cabecilla-financiero/", status: "Capturas realizadas",
    related: ["Clan del Golfo", "Chocó", "Medellín", "capturas"], whyItMatters: "El golpe apunta a las finanzas y coordinación territorial de una estructura que disputa rentas ilegales y ejerce presión armada sobre comunidades.", extraSources: []
  },
  {
    id: "cocaina-ecuador-inteligencia-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "COOPERACIÓN Y NARCOTRÁFICO", importance: "IMPORTANTE",
    title: "Inteligencia colombiana apoya incautación de 3,6 toneladas de cocaína en Ecuador",
    summary: "Información compartida por la Policía de Colombia contribuyó a una operación en Guayas en la que fueron interceptadas dos lanchas rápidas con 3.679 kilogramos de cocaína. Las autoridades ecuatorianas investigan una posible coordinación con Los Choneros y estimaron una afectación de US$123 millones.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Reporte policial", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/con-apoyo-de-inteligencia-de-la-policia-de-colombia-incautan-36-toneladas-de-cocaina-en-ecuador/", status: "Operación ejecutada",
    related: ["Policía", "Ecuador", "narcotráfico", "Los Choneros"], whyItMatters: "La operación muestra el carácter transnacional de las rutas del Pacífico y el valor de compartir inteligencia entre países vecinos.", extraSources: []
  },
  {
    id: "fac-cooperacion-eeuu-congreso-01", group: "government", groupLabel: "GOBIERNO", category: "DEFENSA Y RELACIONES EXTERIORES", importance: "IMPORTANTE",
    title: "FAC explica el alcance legal de operaciones de cooperación con Estados Unidos",
    summary: "El comandante de la Fuerza Aeroespacial afirmó que actividades de inteligencia, entrenamiento y ciertas operaciones aéreas pueden desarrollarse bajo acuerdos vigentes sin una nueva autorización legislativa. Precisó que cualquier convenio que sí requiera aprobación seguirá el trámite ante el Congreso.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Declaración militar", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/01/comandante-de-fac-asegura-que-algunas-operaciones-con-ee-uu-no-requieren-permiso-del-congreso/", status: "Alcance jurídico explicado",
    related: ["Fuerza Aeroespacial", "Estados Unidos", "Congreso", "cooperación militar"], whyItMatters: "La precisión delimita el control político y jurídico sobre la cooperación militar extranjera y las operaciones que pueden ejecutarse con acuerdos existentes.", extraSources: []
  },
  {
    id: "tarapaca-identificacion-indigena-01", group: "state", groupLabel: "ESTADO Y PAÍS", category: "IDENTIDAD Y PUEBLOS INDÍGENAS", importance: "IMPORTANTE",
    title: "Juez ordena atender falta de documentos de 611 indígenas de Tarapacá",
    summary: "Un juzgado de Leticia ordenó a la Registraduría caracterizar en 30 días a la población afectada y presentar después un plan de intervención. La Defensoría identificó a 335 niños que requieren tarjeta de identidad y 276 jóvenes que necesitan cédula o actualización documental.",
    eventDate: "2026-10-01", publishedDate: "2026-10-01", sourceType: "Fuente oficial de derechos humanos", sourceName: "Defensoría del Pueblo", sourceUrl: "https://www.defensoria.gov.co/web/guest/w/tutela-identificacion-indigenas-tarapaca?redirect=/", status: "Orden judicial vigente",
    related: ["Tarapacá", "Amazonas", "Registraduría", "pueblos indígenas"], whyItMatters: "Sin documentos de identidad, cientos de personas enfrentan barreras para educación, salud, participación política y otros derechos básicos.", extraSources: []
  }
);


// =========================================================
// 02 OCT 2026
// =========================================================

dayMeta["2026-10-02"] = {
  status: "EN DESARROLLO",
  subtitle: "Gobierno, oposición, Congreso, economía, justicia, seguridad, salud, educación, ambiente y regiones."
};

events.push(
  {
    id: "jerico-clan-golfo-combates-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "ORDEN PÚBLICO Y REGIONES", importance: "MUY IMPORTANTE",
    title: "Combates entre Ejército y Clan del Golfo dejan muertos y un soldado herido en Jericó",
    summary: "El reporte inicial de una operación rural informó la muerte de al menos dos presuntos integrantes de la estructura, entre ellos un hombre conocido como alias Terry, y lesiones a un militar. Las autoridades mantenían el despliegue y el balance era preliminar al momento de la publicación.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Reporte regional de seguridad", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/combates-entre-ejercito-y-clan-del-golfo-dejan-dos-muertos-en-zona-rural-de-jerico-antioquia/", status: "Operación en desarrollo",
    related: ["Jericó", "Antioquia", "Ejército", "Clan del Golfo"], whyItMatters: "La confrontación muestra la expansión de disputas armadas hacia el suroeste antioqueño y obliga a proteger a comunidades rurales durante las operaciones.", extraSources: []
  },
  {
    id: "puerto-rey-cuatro-homicidios-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SEGURIDAD URBANA", importance: "MUY IMPORTANTE",
    title: "Investigan el asesinato de cuatro jóvenes hallados dentro de un vehículo en Cartagena",
    summary: "Cuatro hombres de entre 18 y 29 años fueron encontrados muertos en Puerto Rey después de que habitantes reportaran disparos durante la noche del 1 de octubre. Las autoridades investigan móviles, responsables y una posible relación con estructuras de crimen organizado.",
    eventDate: "2026-10-01", publishedDate: "2026-10-02", sourceType: "Reporte judicial regional", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/se-conocen-detalles-de-los-cuatro-hombres-asesinados-en-puerto-rey-cartagena/", status: "Investigación abierta",
    related: ["Cartagena", "Puerto Rey", "homicidio múltiple", "Fiscalía"], whyItMatters: "El crimen múltiple eleva la presión sobre la seguridad en la periferia de Cartagena y exige esclarecer si forma parte de una disputa organizada.", extraSources: []
  },
  {
    id: "bogota-homicidios-septiembre-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SEGURIDAD CIUDADANA", importance: "IMPORTANTE",
    title: "Bogotá reporta 73 homicidios en septiembre, la cifra más baja para ese mes en 24 años",
    summary: "El balance distrital registró una reducción interanual de 13 %. Sin embargo, el sicariato representó cerca de la mitad de los casos y Bosa, junto con otras localidades, mostró aumentos, por lo que la mejora agregada no fue uniforme en el territorio.",
    eventDate: "2026-09-30", publishedDate: "2026-10-02", sourceType: "Balance distrital", sourceName: "La Silla Vacía", sourceUrl: "https://www.lasillavacia.com/en-vivo/bogota-cerro-septiembre-con-73-homicidios-la-cifra-mas-baja-en-24-anos/", status: "Balance publicado",
    related: ["Bogotá", "homicidios", "sicariato", "Bosa"], whyItMatters: "La reducción es una señal positiva, pero la concentración territorial y el peso del sicariato indican dónde deben focalizarse prevención e investigación criminal.", extraSources: []
  },
  {
    id: "magdalena-homicidios-2026-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SEGURIDAD Y REGIONES", importance: "IMPORTANTE",
    title: "Policía reporta reducción de 11 % en homicidios en Magdalena durante 2026",
    summary: "Entre enero y septiembre se contabilizaron 198 homicidios frente a 223 en el mismo periodo anterior, y septiembre registró una disminución de 38 %, según el balance policial. La institución también informó 1.526 capturas y la incautación de 163 armas de fuego.",
    eventDate: "2026-09-30", publishedDate: "2026-10-02", sourceType: "Balance policial regional", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/homicidios-bajan-11-en-magdalena-durante-2026-segun-la-policia/", status: "Balance publicado",
    related: ["Magdalena", "Policía", "homicidios", "seguridad ciudadana"], whyItMatters: "La tendencia permite medir resultados de seguridad, aunque requiere contraste territorial y continuidad para determinar si la reducción es sostenible.", extraSources: []
  },
  {
    id: "quindio-plan-reconstruccion-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "RECONSTRUCCIÓN Y REGIONES", importance: "MUY IMPORTANTE",
    title: "Aprueban plan de reconstrucción del Quindío por $3,29 billones",
    summary: "El plan obtuvo 11 de 14 votos y cubre los doce municipios afectados por el terremoto. La financiación proyectada incluye $3,086 billones de la Nación, $130.000 millones del departamento, $68.077 millones de municipios y $8.373 millones privados para vivienda, hospitales, educación e infraestructura pública.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Información regional de reconstrucción", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/32-billones-de-pesos-costaria-la-reconstruccion-del-quindio-afectado-por-el-terremoto/", status: "Plan aprobado",
    related: ["Quindío", "terremoto", "reconstrucción", "financiación pública"], whyItMatters: "El plan fija la hoja de ruta financiera para restablecer servicios y viviendas, y exige seguimiento a desembolsos, prioridades y ejecución en los doce municipios.", extraSources: []
  },
  {
    id: "sic-hospital-santander-medicamentos-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SALUD Y CONTROL DE PRECIOS", importance: "IMPORTANTE",
    title: "SIC deja en firme sanción al Hospital Universitario de Santander por precios de medicamentos",
    summary: "La multa asciende a $558.793.344 por vender 37 medicamentos por encima de los máximos regulados. La autoridad citó diferencias de hasta 234,98 % en Lantus, 196 % en Curosurf y 173,03 % en Clenox, después de resolver los recursos administrativos.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Decisión administrativa", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/sic-deja-en-firme-millonaria-sancion-una-sancion-de-558793-millones/", status: "Sanción en firme",
    related: ["SIC", "Hospital Universitario de Santander", "medicamentos", "precios máximos"], whyItMatters: "El control de precios protege recursos del sistema y acceso a tratamientos; la decisión también exige fortalecer compras y cumplimiento en hospitales públicos.", extraSources: []
  },
  {
    id: "timbiqui-rio-saija-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "EMERGENCIAS Y REGIONES", importance: "IMPORTANTE",
    title: "Creciente del río Saija afecta a más de cien familias en Timbiquí",
    summary: "Comunidades rurales reportaron nueve viviendas dañadas, cinco de ellas con pérdida total, además de afectaciones a cultivos, comercios y equipos de minería artesanal. Las dificultades de acceso complican la evaluación y la entrega de ayuda humanitaria.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Reporte regional de emergencia", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/creciente-del-rio-saija-afecto-a-mas-de-100-familias-en-zona-rural-de-timbiqui-cauca/", status: "Atención solicitada",
    related: ["Timbiquí", "río Saija", "Cauca", "emergencia"], whyItMatters: "La creciente compromete vivienda y sustento en comunidades aisladas, donde las barreras logísticas pueden convertir daños materiales en una crisis humanitaria prolongada.", extraSources: []
  },
  {
    id: "cumbre-movilidad-humana-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "MIGRACIÓN Y DERECHOS HUMANOS", importance: "IMPORTANTE",
    title: "Defensorías iberoamericanas debaten en Cartagena garantías para personas migrantes",
    summary: "La cumbre de la FIO y RINDHCA aborda externalización del asilo, detenciones, deportaciones y separación familiar. La agenda incluye una visita territorial a la comunidad Nelson Mandela para contrastar políticas de movilidad humana con experiencias locales.",
    eventDate: "2026-10-01", publishedDate: "2026-10-02", sourceType: "Fuente oficial de derechos humanos", sourceName: "Defensoría del Pueblo", sourceUrl: "https://www.defensoria.gov.co/web/guest/w/cumbre-fio-rindhca-cartagena-movilidad-humana?redirect=/", status: "Cumbre en curso",
    related: ["migración", "asilo", "Defensoría del Pueblo", "Cartagena"], whyItMatters: "Las decisiones migratorias afectan debido proceso, unidad familiar y protección internacional; la coordinación regional es esencial frente a rutas transfronterizas.", extraSources: []
  },
  {
    id: "icfes-citaciones-saber-pro-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "EDUCACIÓN Y EVALUACIÓN", importance: "IMPORTANTE",
    title: "ICFES publica citaciones para las pruebas Saber Pro y Saber TyT reprogramadas",
    summary: "Las evaluaciones se aplicarán el 18 de octubre a 180.929 personas en 341 sitios, después del aplazamiento asociado al terremoto. Cada inscrito debe consultar su citación para confirmar lugar y hora; el instituto también mantiene su calendario de resultados para otras pruebas.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Fuente oficial educativa", sourceName: "ICFES", sourceUrl: "https://www.icfes.gov.co/icfes-reprograma-aplicacion-de-las-pruebas-saber-pro-y-tyt-segundo-semestre-2026/", status: "Citaciones disponibles",
    related: ["ICFES", "Saber Pro", "Saber TyT", "educación superior"], whyItMatters: "La reprogramación afecta requisitos de grado y evaluación de calidad para miles de estudiantes, por lo que una citación clara evita nuevas barreras.", extraSources: []
  },
  {
    id: "fomag-recursos-salud-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SALUD DEL MAGISTERIO", importance: "MUY IMPORTANTE",
    title: "FOMAG traslada $859.000 millones para sostener la atención en salud del magisterio",
    summary: "El consejo directivo movió recursos del componente pensional al de salud, cuyo presupuesto se acerca así a $4,6 billones. La medida busca mantener la atención de unos 330.000 docentes y beneficiarios y cubrir parte de un faltante estimado en $2,7 billones; el Ministerio indicó que las pensiones de 2026 están financiadas.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Información financiera de salud", sourceName: "La República", sourceUrl: "https://www.larepublica.co/economia/el-fomag-aprobo-el-traslado-de-859-000-millones-para-garantizar-salud-del-magisterio-4495161", status: "Traslado aprobado",
    related: ["FOMAG", "docentes", "salud", "pensiones"], whyItMatters: "El traslado evita una interrupción inmediata, pero deja pendiente resolver estructuralmente el déficit y asegurar que no se comprometan obligaciones pensionales futuras.", extraSources: []
  },
  {
    id: "superservicios-plan-energia-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "ENERGÍA Y CLIMA", importance: "MUY IMPORTANTE",
    title: "Superservicios activa estrategia de cuatro frentes para asegurar energía durante El Niño",
    summary: "La vigilancia cubrirá equilibrio entre generación y demanda, salud financiera de empresas, estado de la infraestructura y planes de gestión del riesgo. En las zonas no interconectadas también revisará inventarios y logística de combustibles.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Anuncio de supervisión", sourceName: "La República", sourceUrl: "https://www.larepublica.co/economia/superservicios-anuncio-estrategia-de-cuatro-frentes-para-garantizar-el-servicio-de-energia-4495220", status: "Estrategia activada",
    related: ["Superservicios", "El Niño", "energía", "zonas no interconectadas"], whyItMatters: "La preparación reduce el riesgo de fallas, racionamientos o crisis empresariales durante un periodo de menor disponibilidad hídrica y mayor presión sobre la generación.", extraSources: []
  },
  {
    id: "oro-aluvion-informe-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "AMBIENTE Y ECONOMÍAS ILEGALES", importance: "MUY IMPORTANTE",
    title: "Explotación de oro de aluvión llega a 118.410 hectáreas y 75 % sería ilegal",
    summary: "Un nuevo informe calcula que el área creció 4,5 % en 2025 y que cerca de 88.800 hectáreas carecen de permisos. Chocó, Antioquia y Bolívar concentran 82 % del área ilegal; 58.216 hectáreas están en zonas prohibidas y la afectación en parques aumentó 153 % entre 2023 y 2025.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Informe sectorial y ambiental", sourceName: "La República", sourceUrl: "https://www.larepublica.co/economia/la-explotacion-de-oro-de-aluvion-llego-a-118-410-hectareas-en-2025-y-aumento-4-5-4495461", status: "Informe publicado",
    related: ["oro de aluvión", "minería ilegal", "Chocó", "parques naturales"], whyItMatters: "La expansión combina deforestación, contaminación con mercurio, financiación criminal y pérdida de control estatal en territorios de alta biodiversidad.", extraSources: []
  },
  {
    id: "nueva-eps-enfermedad-huerfana-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "SALUD Y JUSTICIA CONSTITUCIONAL", importance: "IMPORTANTE",
    title: "Corte ordena a Nueva EPS garantizar tratamiento integral a niña con enfermedad huérfana",
    summary: "La sentencia T-232 ordenó suministrar oportunamente Burosumab y evitar nuevas trabas administrativas a una paciente de diez años con raquitismo hipofosfatémico ligado al cromosoma X. El fallo, adoptado el 3 de agosto y divulgado ahora, extiende la protección a la continuidad integral del tratamiento.",
    eventDate: "2026-08-03", publishedDate: "2026-10-02", sourceType: "Divulgación de sentencia constitucional", sourceName: "Consultorsalud", sourceUrl: "https://consultorsalud.com/corte-ordena-a-nueva-eps-evitar-trabas-salud/", status: "Orden judicial divulgada",
    related: ["Corte Constitucional", "Nueva EPS", "enfermedades huérfanas", "Burosumab"], whyItMatters: "La decisión protege a una menor y reafirma que las barreras administrativas no pueden interrumpir tratamientos de alto costo médicamente ordenados.", extraSources: []
  }
);


events.push(
  {
    id: "andi-autonomia-gremial-02", group: "opposition", groupLabel: "OPOSICIÓN Y MOVIMIENTOS", category: "GREMIOS, GOBIERNO Y DEMOCRACIA", importance: "MUY IMPORTANTE",
    title: "Congresistas y regionales de la ANDI abren debate sobre autonomía gremial",
    summary: "El representante Duvalier Sánchez afirmó que la salida de Bruce Mac Master refleja presiones contra la independencia empresarial, mientras el oficialista Simón Molina negó una intervención del Ejecutivo. La seccional Santander pidió a la junta no aceptar la renuncia; las acusaciones de presión siguen siendo posiciones de sus autores, no hechos probados.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Debate político y gremial", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/se-rompe-autonomia-de-los-gremios-tras-salida-de-bruce-mac-master-de-la-andi-congresistas-debaten/", status: "Debate abierto",
    related: ["ANDI", "Bruce Mac Master", "autonomía gremial", "Congreso"], whyItMatters: "La controversia incide en la relación entre Gobierno y sector privado durante el ajuste fiscal y pone a prueba la independencia de la representación empresarial.", extraSources: ["https://www.lasillavacia.com/en-vivo/andi-santander-pide-a-la-junta-directiva-no-aceptar-la-renuncia-de-mac-master/", "https://elpais.com/america-colombia/2026-10-02/miedo-cautela-prevencion-los-gremios-reaccionan-en-silencio-a-la-victoria-de-de-la-espriella-frente-a-bruce-mac-master.html"]
  },
  {
    id: "demanda-superintendente-sic-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "JUSTICIA Y NOMBRAMIENTOS", importance: "MUY IMPORTANTE",
    title: "Demandan ante el Consejo de Estado el nombramiento de la superintendente de Industria y Comercio",
    summary: "Una demanda electoral cuestiona la designación de María Rocío Cortés y sostiene que no acreditaría la experiencia relacionada exigida para el cargo. El Consejo de Estado deberá estudiar la admisión y el fondo del caso; por ahora, el nombramiento conserva su presunción de legalidad.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Cobertura judicial", sourceName: "La Silla Vacía", sourceUrl: "https://www.lasillavacia.com/en-vivo/demandan-nombramiento-de-maria-rocio-cortes-en-la-superintendencia-sic/", status: "Demanda presentada",
    related: ["María Rocío Cortés", "SIC", "Consejo de Estado", "nombramientos"], whyItMatters: "La superintendencia vigila competencia, datos y consumidores; la decisión judicial puede definir la permanencia de su máxima autoridad.", extraSources: []
  },
  {
    id: "findeter-maria-paula-tejada-02", group: "government", groupLabel: "GOBIERNO", category: "NOMBRAMIENTOS Y FINANCIACIÓN TERRITORIAL", importance: "IMPORTANTE",
    title: "Junta de Findeter aprueba a María Paula Tejada como nueva presidenta",
    summary: "La junta directiva aprobó el 1 de octubre la designación de María Paula Tejada para dirigir la entidad que financia proyectos territoriales. La nueva administración tendrá a su cargo una cartera estratégica de infraestructura y desarrollo regional.",
    eventDate: "2026-10-01", publishedDate: "2026-10-02", sourceType: "Seguimiento al Gobierno", sourceName: "La Silla Vacía", sourceUrl: "https://www.lasillavacia.com/en-vivo/diario-del-gobierno-de-abelardo-otra-semana-de-tension-con-los-gremios/", status: "Designación aprobada",
    related: ["Findeter", "María Paula Tejada", "infraestructura", "regiones"], whyItMatters: "Findeter canaliza crédito y asistencia para proyectos locales, por lo que su dirección incide en prioridades de inversión y coordinación con alcaldías y gobernaciones.", extraSources: []
  },
  {
    id: "colfuturo-alianza-reactivada-02", group: "government", groupLabel: "GOBIERNO", category: "EDUCACIÓN SUPERIOR", importance: "MUY IMPORTANTE",
    title: "Gobierno reactiva la alianza con Colfuturo para financiar posgrados",
    summary: "El Ejecutivo anunció US$25 millones para reanudar el programa y proyectó seleccionar alrededor de 3.000 personas en 2027. El esquema contempla un componente de beca del 25 % y una condonación adicional de hasta 40 %, de modo que el apoyo no reembolsable podría llegar al 65 % si se cumplen las condiciones.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Anuncio gubernamental", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/gobierno-de-la-espriella-reactivo-alianza-con-colfuturo-para-becas-petro-busco-acabarla/", status: "Alianza reactivada",
    related: ["Colfuturo", "posgrados", "becas", "educación superior"], whyItMatters: "La reapertura amplía el acceso a formación avanzada y vuelve a vincular recursos públicos con un programa que exige reglas claras de selección y retorno social.", extraSources: []
  },
  {
    id: "plebiscito-diez-anos-jep-02", group: "opposition", groupLabel: "OPOSICIÓN Y MOVIMIENTOS", category: "PAZ, MEMORIA Y OPOSICIÓN", importance: "MUY IMPORTANTE",
    title: "Diez años del plebiscito reabren el debate sobre implementación y reconciliación",
    summary: "En un foro de la Comisión Primera, Álvaro Uribe volvió a cuestionar los efectos del Acuerdo de Paz para integrantes de la fuerza pública. Humberto de la Calle defendió el proceso, reconoció demoras y burocracia en la JEP y pidió resultados y reconciliación; sus intervenciones reflejan lecturas políticas contrapuestas.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Foro legislativo y debate político", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/diez-anos-del-plebiscito-uribe-cuestiono-efectos-para-militares-y-de-la-calle-reconocio-errores-de/", status: "Conmemoración y debate",
    related: ["plebiscito de paz", "Álvaro Uribe", "Humberto de la Calle", "JEP"], whyItMatters: "El plebiscito sigue ordenando posiciones de Gobierno y oposición y condiciona la legitimidad política de la implementación del Acuerdo.", extraSources: ["https://elpais.com/america-colombia/2026-10-02/tras-10-anos-del-plebiscito-por-la-paz-el-no-se-hizo-mas-fuerte.html"]
  },
  {
    id: "dapre-contrato-eventos-02", group: "government", groupLabel: "GOBIERNO", category: "CONTRATACIÓN PÚBLICA", importance: "IMPORTANTE",
    title: "DAPRE adjudica contrato de $5.300 millones para logística de eventos oficiales",
    summary: "El Departamento Administrativo de la Presidencia adjudicó a Neomundo, empresa de Bucaramanga, un contrato de aproximadamente $5.300 millones y 80 días de ejecución. El objeto incluye producción y apoyo logístico para actividades institucionales del Gobierno.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Información contractual", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/gobierno-adjudica-por-5300-millones-contrato-a-empresa-santandereana-para-realizacion-de-eventos/", status: "Contrato adjudicado",
    related: ["DAPRE", "Neomundo", "contratación", "eventos oficiales"], whyItMatters: "El monto, el plazo corto y el uso de recursos de Presidencia hacen necesario seguimiento público a la ejecución, los costos y los productos contratados.", extraSources: []
  },
  {
    id: "cric-guardia-indigena-decreto-02", group: "opposition", groupLabel: "OPOSICIÓN Y MOVIMIENTOS", category: "PUEBLOS INDÍGENAS Y AUTONOMÍA", importance: "MUY IMPORTANTE",
    title: "CRIC rechaza borrador para caracterizar a la Guardia Indígena y pide retirarlo",
    summary: "El Consejo Regional Indígena del Cauca advirtió que el sistema de información propuesto por el Gobierno podría facilitar vigilancia, estigmatización o judicialización. Solicitó retirar el texto y abrir un diálogo previo con las autoridades propias; el Ejecutivo lo había presentado como una herramienta de reconocimiento y coordinación.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Pronunciamiento de organización indígena", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/el-cric-pide-desmontar-borrador-de-decreto-que-pretende-caracterizar-a-la-guardia-indigena/", status: "Borrador rechazado por el CRIC",
    related: ["CRIC", "Guardia Indígena", "Ministerio del Interior", "consulta"], whyItMatters: "El choque enfrenta objetivos estatales de información con derechos de autonomía, seguridad colectiva y concertación de los pueblos indígenas.", extraSources: []
  },
  {
    id: "mesa-normas-laborales-02", group: "government", groupLabel: "GOBIERNO", category: "TRABAJO Y DIÁLOGO SOCIAL", importance: "MUY IMPORTANTE",
    title: "Gobierno, empleadores y trabajadores abren mesa para revisar normas laborales",
    summary: "La mesa técnica y jurídica recibirá observaciones hasta el 9 de octubre y volverá a reunirse el 13. La agenda incluye trabajo en plataformas, servicio doméstico, acoso, tercerización y negociación colectiva, con participación tripartita.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Información laboral", sourceName: "El Espectador", sourceUrl: "https://www.elespectador.com/economia/normas-laborales-en-colombia-gobierno-abre-mesa-para-revisarlas/", status: "Mesa instalada",
    related: ["Ministerio del Trabajo", "empleadores", "sindicatos", "normas laborales"], whyItMatters: "La revisión puede cambiar obligaciones y protecciones para millones de trabajadores en sectores con alta informalidad o nuevas modalidades de contratación.", extraSources: []
  },
  {
    id: "canje-tes-deuda-02", group: "government", groupLabel: "GOBIERNO", category: "DEUDA PÚBLICA", importance: "MUY IMPORTANTE",
    title: "Crédito Público canjea $11,15 billones en TES para extender vencimientos",
    summary: "La operación sustituyó títulos próximos a vencer por referencias con plazos entre 2029 y 2062. Hacienda anunció nuevos canjes para el 29 de octubre y el 26 de noviembre, mientras las obligaciones previstas para 2027 rondan los $78 billones.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Información financiera pública", sourceName: "La República", sourceUrl: "https://www.larepublica.co/economia/credito-publico-canjeo-tes-por-11-15-billones-para-reperfilar-deuda-de-la-nacion-4495343", status: "Canje ejecutado",
    related: ["Crédito Público", "TES", "deuda", "Ministerio de Hacienda"], whyItMatters: "Mover vencimientos reduce presiones inmediatas de caja, aunque no elimina la deuda y condiciona el costo fiscal de administraciones futuras.", extraSources: []
  },
  {
    id: "auditoria-parafiscales-arroz-02", group: "government", groupLabel: "GOBIERNO", category: "AGRICULTURA Y CONTROL DE RECURSOS", importance: "IMPORTANTE",
    title: "MinAgricultura ordena revisión forense al manejo de recursos parafiscales del arroz",
    summary: "El ministro pidió examinar el uso de los fondos administrados por Fedearroz, que habrían superado $259.000 millones durante los últimos quince años. Si la auditoría encuentra posibles irregularidades, el Gobierno anunció que remitirá los hallazgos a los organismos competentes.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Anuncio de control sectorial", sourceName: "La República", sourceUrl: "https://www.larepublica.co/economia/ministro-de-agricultura-ordeno-una-revision-de-los-recursos-parafiscales-del-sector-arrocero-4495166", status: "Revisión ordenada",
    related: ["Ministerio de Agricultura", "Fedearroz", "parafiscales", "auditoría"], whyItMatters: "Los recursos provienen del propio sector y deben traducirse en bienes colectivos, investigación y apoyo verificable para productores.", extraSources: []
  },
  {
    id: "crisis-productores-arroz-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "CAMPO Y SEGURIDAD ALIMENTARIA", importance: "MUY IMPORTANTE",
    title: "Productores de arroz piden apoyo tras una caída acumulada de 30 % en el precio",
    summary: "Organizaciones del sector señalaron que la reducción se acumula desde 2023 y afecta a unos 16.000 productores y 400.000 familias vinculadas a la cadena. Solicitaron incentivos al almacenamiento e inversión en distritos de riego frente a importaciones, clima y menores ingresos.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Balance sectorial", sourceName: "La República", sourceUrl: "https://www.larepublica.co/economia/productores-piden-subsidios-por-una-caida-de-30-en-el-precio-del-arroz-desde-2023-4494818", status: "Solicitud sectorial",
    related: ["arroceros", "precios agrícolas", "almacenamiento", "riego"], whyItMatters: "La caída de ingresos amenaza la sostenibilidad de productores rurales y puede afectar empleo, oferta nacional y precios futuros de un alimento básico.", extraSources: []
  },
  {
    id: "ifc-inversion-colombia-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "INVERSIÓN E INFRAESTRUCTURA", importance: "IMPORTANTE",
    title: "IFC calcula una cartera madura de proyectos por US$26.000 millones en Colombia",
    summary: "En entrevista, la directora regional Elizabeth Martínez estimó que la Corporación Financiera Internacional podría movilizar entre US$7.500 millones y US$10.000 millones hacia 2030. La cifra es una proyección, no una apropiación comprometida, y prioriza infraestructura, turismo, agroindustria, manufactura y salud.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Entrevista y proyección financiera", sourceName: "El País", sourceUrl: "https://elpais.com/america-colombia/2026-10-02/elizabeth-martinez-banco-mundial-el-capital-privado-puede-ser-parte-de-la-solucion-a-la-estrechez-fiscal.html", status: "Potencial de inversión estimado",
    related: ["IFC", "Banco Mundial", "inversión privada", "infraestructura"], whyItMatters: "La movilización de capital podría aliviar restricciones fiscales, pero dependerá de proyectos viables, distribución territorial, reglas transparentes y manejo de riesgos.", extraSources: []
  },
  {
    id: "andrade-odebrecht-fallo-02", group: "state", groupLabel: "ESTADO Y PAÍS", category: "JUSTICIA Y CORRUPCIÓN", importance: "MUY IMPORTANTE",
    title: "Juzgado fija para noviembre lectura de fallo a exdirector de la ANI por caso Odebrecht",
    summary: "El despacho programó para el 30 de noviembre la lectura de la decisión sobre Luis Fernando Andrade por el proyecto Ocaña-Gamarra. La defensa sostiene que algunos delitos ya habrían prescrito; esa discusión y la responsabilidad del exfuncionario deben ser resueltas por la autoridad judicial.",
    eventDate: "2026-10-02", publishedDate: "2026-10-02", sourceType: "Cobertura judicial", sourceName: "Caracol Radio", sourceUrl: "https://caracol.com.co/2026/10/02/sentencia-sin-ningun-efecto-prescribieron-todos-los-delitos-a-exdirector-de-ani-por-caso-odebrecht/", status: "Lectura de fallo programada",
    related: ["Luis Fernando Andrade", "ANI", "Odebrecht", "Ocaña-Gamarra"], whyItMatters: "El caso es una prueba de la capacidad judicial para resolver, antes de prescripciones, uno de los mayores expedientes de corrupción en infraestructura.", extraSources: []
  }
);
