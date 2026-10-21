// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
import { copyLocale404 } from './src/integrations/copy-locale-404.mjs';
import { sitemapLinks } from './src/i18n/pages.mjs';

// La URL base es configurable: SITE_URL en .env o en las variables de entorno de Cloudflare Pages.
// Mientras no haya dominio se usa la URL provisional de Cloudflare Pages.
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const SITE_URL = env.SITE_URL || 'https://osuna-visitas.pages.dev'; // TODO-V2: dato provisional (dominio)

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  i18n: {
    locales: ['es', 'en', 'de'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      serialize: (item) => ({ ...item, links: sitemapLinks(item.url, SITE_URL) }),
    }),
    copyLocale404(),
  ],
  image: {
    responsiveStyles: false,
  },
});
