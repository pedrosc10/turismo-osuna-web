import { copyFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

/**
 * Astro solo genera un 404.html en la raíz. Cloudflare Pages sirve el 404.html más cercano
 * a la URL pedida, así que copiamos /en/404/index.html → /en/404.html (y lo mismo para /de/).
 */
export function copyLocale404() {
  return {
    name: 'copy-locale-404',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        for (const locale of ['en', 'de']) {
          const from = fileURLToPath(new URL(`${locale}/404/index.html`, dir));
          const to = fileURLToPath(new URL(`${locale}/404.html`, dir));
          try {
            await access(from);
            await copyFile(from, to);
            logger.info(`404 de /${locale}/ copiado a ${locale}/404.html`);
          } catch {
            logger.warn(`No se encontró ${locale}/404/index.html`);
          }
        }
      },
    },
  };
}
