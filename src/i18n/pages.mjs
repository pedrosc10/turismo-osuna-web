// Mapa de páginas y sus rutas traducidas. Lo usan los componentes (hreflang, selector de idioma)
// y astro.config.mjs (enlaces alternativos del sitemap), por eso es JavaScript plano.

export const locales = /** @type {const} */ (['es', 'en', 'de']);
export const defaultLocale = 'es';

/** Código hreflang de cada idioma. */
export const hreflang = { es: 'es', en: 'en', de: 'de' };

/** Ruta (sin barra inicial, con barra final) de cada página en cada idioma. */
export const pages = {
  home: { es: '', en: 'en/', de: 'de/' },
  credits: { es: 'creditos/', en: 'en/credits/', de: 'de/bildnachweise/' },
  legal: { es: 'aviso-legal/', en: 'en/legal-notice/', de: 'de/impressum/' },
  privacy: { es: 'privacidad/', en: 'en/privacy/', de: 'de/datenschutz/' },
  cookies: { es: 'cookies/', en: 'en/cookies/', de: 'de/cookies/' },
};

/** URL relativa a la raíz ("/en/credits/") de una página en un idioma. */
export function pagePath(key, locale) {
  return '/' + pages[key][locale];
}

/** Busca qué página es una ruta ("/en/credits/") para enlazar sus traducciones. */
export function pageKeyFromPath(path) {
  const clean = path.replace(/^\/+/, '');
  for (const [key, byLocale] of Object.entries(pages)) {
    for (const p of Object.values(byLocale)) if (p === clean) return key;
  }
  return undefined;
}

/** Enlaces alternativos para @astrojs/sitemap (hreflang en el sitemap). */
export function sitemapLinks(url, site) {
  const base = site.replace(/\/$/, '');
  const key = pageKeyFromPath(new URL(url).pathname);
  if (!key) return [];
  return [
    ...locales.map((l) => ({ lang: hreflang[l], url: `${base}${pagePath(key, l)}` })),
    { lang: 'x-default', url: `${base}${pagePath(key, defaultLocale)}` },
  ];
}
