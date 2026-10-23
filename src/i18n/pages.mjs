// Mapa de páginas y sus rutas traducidas. Lo usan los componentes (hreflang, selector de idioma,
// enlaces internos), las páginas dinámicas de rutas y astro.config.mjs (enlaces alternativos del
// sitemap), por eso es JavaScript plano.

export const locales = /** @type {const} */ (['es', 'en', 'de']);
export const defaultLocale = 'es';

/** Código hreflang de cada idioma. */
export const hreflang = { es: 'es', en: 'en', de: 'de' };

/** Carpeta de las páginas de ruta en cada idioma. */
export const routeBase = { es: 'rutas/', en: 'en/tours/', de: 'de/fuehrungen/' };

/** Slug de cada ruta en cada idioma (pensado en cómo busca un turista de cada país). */
export const routeSlugs = {
  colegiata: { es: 'colegiata-sepulcro-ducal', en: 'collegiate-church-ducal-tomb', de: 'stiftskirche-herzogsgruft' },
  universidad: { es: 'antigua-universidad', en: 'old-university', de: 'alte-universitaet' },
  encarnacion: { es: 'monasterio-encarnacion', en: 'encarnacion-convent', de: 'kloster-encarnacion' },
  sanpedro: { es: 'calle-san-pedro-palacios-barrocos', en: 'calle-san-pedro-baroque-palaces', de: 'calle-san-pedro-barockpalaeste' },
  canteras: { es: 'canteras-necropolis-zona-arqueologica', en: 'quarries-necropolis-roman-urso', de: 'steinbrueche-nekropole-urso' },
  cine: { es: 'juego-de-tronos-escenarios-rodaje', en: 'game-of-thrones-filming-locations', de: 'game-of-thrones-drehorte' },
  nocturna: { es: 'osuna-nocturna', en: 'osuna-by-night', de: 'osuna-bei-nacht' },
};

const routePages = Object.fromEntries(
  Object.entries(routeSlugs).map(([id, slugs]) => [
    `route-${id}`,
    Object.fromEntries(locales.map((l) => [l, `${routeBase[l]}${slugs[l]}/`])),
  ]),
);

/** Ruta (sin barra inicial, con barra final) de cada página en cada idioma. */
export const pages = {
  home: { es: '', en: 'en/', de: 'de/' },
  custom: { es: 'visitas-a-medida/', en: 'en/private-group-tours/', de: 'de/gruppenfuehrungen/' },
  faq: { es: 'preguntas-frecuentes/', en: 'en/faq/', de: 'de/haeufige-fragen/' },
  ...routePages,
  credits: { es: 'creditos/', en: 'en/credits/', de: 'de/bildnachweise/' },
  legal: { es: 'aviso-legal/', en: 'en/legal-notice/', de: 'de/impressum/' },
  privacy: { es: 'privacidad/', en: 'en/privacy/', de: 'de/datenschutz/' },
  cookies: { es: 'cookies/', en: 'en/cookies/', de: 'de/cookies/' },
};

/** URL relativa a la raíz ("/en/credits/") de una página en un idioma. */
export function pagePath(key, locale) {
  return '/' + pages[key][locale];
}

/** getStaticPaths de las páginas de ruta de un idioma: [{ params: { slug }, props: { id } }]. */
export function routeStaticPaths(locale) {
  return Object.entries(routeSlugs).map(([id, slugs]) => ({ params: { slug: slugs[locale] }, props: { id } }));
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
