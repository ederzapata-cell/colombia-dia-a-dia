# Colombia · Día a Día

Archivo documental ciudadano para entender casos de corrupción pública sin confundir denuncias, imputaciones, acusaciones y condenas.

## Enfoque editorial

La primera etapa documenta hechos vinculados institucionalmente con el Gobierno de Gustavo Petro (2022–2026). No es un listado de titulares ni una afirmación colectiva de culpabilidad. Cada expediente separa:

1. lo que está respaldado por una actuación formal;
2. lo que todavía debe resolverse;
3. el estado individual de cada persona;
4. valor contractual, posible detrimento, sobrecosto y recuperación de recursos;
5. fuentes primarias y cobertura de contexto.

Los archivos, absoluciones, revocatorias y correcciones deben publicarse con la misma visibilidad que una apertura o una imputación.

## Archivos activos

- `index.html`: estructura y textos públicos.
- `styles.css`: interfaz adaptable a computador y celular.
- `data/cases.js`: expedientes, fuentes, personas y cronologías.
- `app.js`: búsqueda, filtros, fichas y actualización de la PWA.
- `sw.js`: actualización en línea y respaldo sin conexión.
- `manifest.webmanifest`: instalación en el celular.

`data.js`, `data/2026-09.js` y `data/2026-10.js` pertenecen al formato anterior. La copia de trabajo los conserva como respaldo, pero no se incluyen en el paquete de reemplazo ni son cargados por la nueva página.

## Vista local

Desde esta carpeta ejecuta:

```bash
python3 -m http.server 8000
```

Luego abre `http://localhost:8000`. Para publicar, reemplaza el contenido del sitio por el paquete completo; no mezcles archivos de versiones distintas.
