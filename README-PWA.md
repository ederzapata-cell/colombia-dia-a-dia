# Instalación y actualizaciones en celular

La PWA ya está integrada en `index.html`; no hay que copiar fragmentos adicionales.

## Publicación

1. Reemplaza todos los archivos públicos por los de este paquete.
2. Conserva las rutas `/icons`, `/assets` y `/data`.
3. Publica `sw.js` en la raíz del dominio.
4. Abre el sitio una vez con conexión y recarga.

## Cómo se actualiza

El navegador consulta primero la versión publicada y usa la copia local solo cuando no hay conexión. Cuando detecta un nuevo `sw.js`, muestra el aviso **Nueva versión disponible**. Al pulsar **Actualizar ahora**, activa la versión nueva y recarga la página.

Si un celular todavía conserva una edición anterior, cierra la PWA, abre el dominio en el navegador y recarga una vez. En casos excepcionales, elimina y vuelve a instalar la PWA para borrar un service worker muy antiguo.
