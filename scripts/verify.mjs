/**
 * Verificación estática del build de producción (dist/) — v2:
 *  - un solo <h1>, lang correcto, title (50–60) y description (140–155) únicos por página
 *  - canonical absoluto, hreflang completo y recíproco + x-default en cada página; sitemap coherente
 *  - enlaces internos rotos, anclas inexistentes y páginas huérfanas (sin ningún enlace entrante)
 *  - enlaces wa.me y tel: bien formados, con el mensaje en el idioma de la página
 *  - JSON-LD válido y con los campos requeridos según el tipo de página; sin precios ni valoraciones;
 *    sin preguntas FAQ duplicadas entre páginas del mismo idioma
 *  - credencial de guía oficial visible en todas las páginas (pie) y en cada ruta
 *  - alt en todas las imágenes; recursos externos no permitidos
 *  - ningún dato ficticio de la v1 ni menciones a la lluvia
 * Uso: npm run build && npm run verify
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const dist = process.env.DIST ?? 'dist';
const errors = [];
const err = (file, msg) => errors.push(`✗ ${file}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const htmlFiles = walk(dist).filter((f) => f.endsWith('index.html'));
const rel = (f) => '/' + path.relative(dist, f).replace(/\\/g, '/').replace(/index\.html$/, '');

const site = (() => {
  const robots = readFileSync(path.join(dist, 'robots.txt'), 'utf8');
  return new URL(robots.match(/Sitemap: (\S+)/)[1]).origin;
})();
// Misma regla que isPreviewSite (src/data/site.ts): en workers.dev / pages.dev todo va con noindex
const preview = /\.(workers|pages)\.dev$/.test(new URL(site).hostname);

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const text = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');

const pages = new Map();
for (const file of htmlFiles) pages.set(rel(file), readFileSync(file, 'utf8'));

const kindOf = (url) => {
  if (/\/404\/$/.test(url)) return '404';
  if (/^\/(en\/|de\/)?$/.test(url)) return 'home';
  if (/^\/(rutas|en\/tours|de\/fuehrungen)\/[^/]+\/$/.test(url)) return 'route';
  if (/^\/(visitas-a-medida|en\/private-group-tours|de\/gruppenfuehrungen)\/$/.test(url)) return 'custom';
  if (/^\/(preguntas-frecuentes|en\/faq|de\/haeufige-fragen)\/$/.test(url)) return 'faq';
  return 'other';
};

const waExpect = { es: /Hola/, en: /Hello/, de: /Hallo/ };
const counts = { wa: 0, tel: 0, ld: 0, img: 0, imgDecorative: 0 };
const inbound = new Map([...pages.keys()].map((u) => [u, 0]));
const questions = { es: new Map(), en: new Map(), de: new Map() };
const titles = new Map();
const descs = new Map();
const kinds = {};

for (const [url, html] of pages) {
  const kind = kindOf(url);
  kinds[kind] = (kinds[kind] ?? 0) + 1;
  const is404 = kind === '404';
  const hasNoindex = /<meta name="robots" content="noindex"/.test(html);
  const lang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1];
  const expectedLang = url.startsWith('/en/') ? 'en' : url.startsWith('/de/') ? 'de' : 'es';
  if (lang !== expectedLang) err(url, `lang="${lang}" (esperado ${expectedLang})`);

  // h1 y jerarquía básica
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) err(url, `${h1s.length} elementos h1`);
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) if (levels[i] > levels[i - 1] + 1) err(url, `salto de encabezado h${levels[i - 1]} → h${levels[i]}`);

  // title y description
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!is404) {
    const tl = [...title].length;
    const dl = [...desc].length;
    if (tl < 50 || tl > 60) err(url, `title de ${tl} caracteres: «${title}»`);
    if (dl < 140 || dl > 155) err(url, `description de ${dl} caracteres`);
    if (!title.endsWith('| Osuna Paso a Paso')) err(url, 'title sin la marca al final');
    if (titles.has(title)) err(url, `title duplicado con ${titles.get(title)}`);
    if (descs.has(desc)) err(url, `description duplicada con ${descs.get(desc)}`);
    titles.set(title, url);
    descs.set(desc, url);
  }

  // Credencial de guía oficial visible (pie en todas; además en la cabecera y la ficha de cada ruta)
  const visible = text(html);
  const credential = (visible.match(/GT\/00975/g) ?? []).length;
  if (credential < 1) err(url, 'no muestra la credencial GT/00975');
  if (kind === 'route' && credential < 3) err(url, `la credencial GT/00975 solo aparece ${credential} veces`);
  if (kind === 'home' && credential < 3) err(url, 'el inicio debe mostrar GT/00975 en el hero, en contacto y en el pie');

  // Datos ficticios de la v1 y lluvia
  for (const [re, what] of [
    [/600[\s.]?000[\s.]?000/, 'teléfono ficticio'],
    [/GT-0000-SE/, 'n.º de guía ficticio'],
    [/ejemplo\.com/, 'email ficticio'],
    [/\[(NIF|Nombre|Dirección)/, 'placeholder del titular'],
    [/€|\bEUR\b|euros?\b/i, 'cifra o moneda en euros'],
    [/\b\d{1,2}:\d{2}\s*(h|Uhr)\b/, 'horario fijo de salida'],
    [/lluvi|llueve|\brain|\bRegen\b/i, 'mención a la lluvia'],
    [/todo-v2/i, 'marca TODO-V2'],
  ])
    if (re.test(html)) err(url, `contiene ${what}: «${html.match(re)[0]}»`);

  // Recursos externos (scripts, estilos, iframes, imágenes) — solo Cloudflare Analytics
  for (const m of html.matchAll(/<(script|link|iframe|img|source)\b[^>]*>/g)) {
    const tag = m[0];
    const src = attr(tag, 'src') ?? (m[1] === 'link' && /stylesheet|preload|icon/.test(attr(tag, 'rel') ?? '') ? attr(tag, 'href') : undefined);
    if (src && /^https?:\/\//.test(src) && !src.startsWith(site) && !src.includes('static.cloudflareinsights.com')) err(url, `recurso externo: ${src}`);
    if (m[1] === 'iframe') err(url, 'iframe incrustado');
    if (m[1] === 'img') {
      counts.img++;
      // Astro escribe alt="" como atributo sin valor («alt»)
      const alt = attr(tag, 'alt') ?? (/\salt[\s>/]/.test(tag) ? '' : undefined);
      if (alt === undefined) err(url, `img sin alt: ${tag.slice(0, 90)}`);
      else if (alt === '') {
        // Solo se permiten vacías las miniaturas del índice de rutas (el nombre de la ruta ya está en el enlace)
        if (!/ri__img/.test(tag)) err(url, `img con alt vacío fuera del índice de rutas: ${tag.slice(0, 90)}`);
        counts.imgDecorative++;
      }
    }
  }
  if (/fonts\.googleapis|google\.com\/maps\/embed|youtube\.com\/embed/.test(html)) err(url, 'embed de Google/YouTube');
  // Enlaces http:// (la competencia los mezcla); se excluye el propio sitio cuando se compila contra http://localhost
  for (const m of html.matchAll(/<a\b[^>]*\shref="(http:\/\/[^"]*)"/g)) if (!m[1].startsWith(site)) err(url, `enlace http:// (sin https): ${m[1]}`);

  // Enlaces
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/<a\b[^>]*>/g)) {
    const href = decode(attr(m[0], 'href') ?? '');
    if (!href) {
      err(url, `<a> sin href: ${m[0].slice(0, 80)}`);
      continue;
    }
    if (href.startsWith('https://wa.me/')) {
      counts.wa++;
      const u = new URL(href);
      if (u.pathname !== '/34652845159') err(url, `wa.me con número incorrecto: ${u.pathname}`);
      const msg = u.searchParams.get('text');
      if (!msg) err(url, 'wa.me sin mensaje');
      else if (!waExpect[expectedLang].test(msg)) err(url, `mensaje WhatsApp no está en ${expectedLang}: ${msg}`);
      if (attr(m[0], 'target') === '_blank' && !/noopener/.test(attr(m[0], 'rel') ?? '')) err(url, 'target=_blank sin noopener');
      continue;
    }
    if (href.startsWith('tel:')) {
      counts.tel++;
      if (href !== 'tel:+34652845159') err(url, `tel: incorrecto: ${href}`);
      continue;
    }
    if (/^(https?:|mailto:)/.test(href)) continue;
    const [p, hash] = href.split('#');
    const target = p === '' ? url : p;
    if (!pages.has(target) && !existsSync(path.join(dist, target))) err(url, `enlace roto: ${href}`);
    else {
      if (target !== url && inbound.has(target)) inbound.set(target, inbound.get(target) + 1);
      if (hash) {
        const targetIds = target === url ? ids : new Set([...pages.get(target).matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]));
        if (!targetIds.has(hash)) err(url, `ancla inexistente: ${href}`);
      }
    }
  }

  // JSON-LD
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!is404 && blocks.length !== 1) err(url, `${blocks.length} bloques JSON-LD (esperado 1)`);
  for (const m of blocks) {
    counts.ld++;
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch (e) {
      err(url, `JSON-LD no es JSON válido: ${e.message}`);
      continue;
    }
    if (data['@context'] !== 'https://schema.org') err(url, 'JSON-LD sin @context schema.org');
    const graph = data['@graph'] ?? [data];
    const byType = (t) => graph.filter((n) => n['@type'] === t);
    const raw = JSON.stringify(data);
    if (/"(offers|price|priceRange|aggregateRating|review)"/.test(raw)) err(url, 'JSON-LD con precios o valoraciones');
    if (/"(departureTime|startDate|arrivalTime)"/.test(raw)) err(url, 'JSON-LD con horarios fijos');
    for (const n of graph) if (n.url && !String(n.url).startsWith(site)) err(url, `url de ${n['@type']} fuera del sitio: ${n.url}`);

    if (!byType('WebPage').length) err(url, 'falta WebPage');

    if (kind === 'home') {
      const biz = byType('LocalBusiness')[0];
      if (!biz) err(url, 'falta LocalBusiness');
      else {
        for (const k of ['name', 'telephone', 'address', 'areaServed', 'knowsLanguage', 'openingHoursSpecification', 'url', 'hasCredential'])
          if (!biz[k]) err(url, `LocalBusiness sin ${k}`);
        if (biz.telephone !== '+34652845159') err(url, 'LocalBusiness con teléfono incorrecto');
        if (JSON.stringify(biz.knowsLanguage) !== JSON.stringify(['es', 'en', 'de', 'it'])) err(url, 'knowsLanguage incorrecto');
        if (!/Plaza Mayor/.test(biz.address?.streetAddress ?? '')) err(url, 'dirección sin la Plaza Mayor');
        if (biz.areaServed?.name !== 'Osuna') err(url, 'areaServed no es Osuna');
        if (biz.openingHoursSpecification.length !== 3) err(url, 'horario de atención incompleto');
      }
      if (byType('TouristTrip').length) err(url, 'TouristTrip en el inicio (va en cada ruta)');
    } else if (!is404 && !byType('BreadcrumbList').length) err(url, 'falta BreadcrumbList');

    for (const b of byType('BreadcrumbList')) {
      const items = b.itemListElement ?? [];
      if (items.length < 2) err(url, 'BreadcrumbList con menos de 2 elementos');
      items.forEach((it, i) => {
        if (it.position !== i + 1 || !it.name || !it.item) err(url, `BreadcrumbList: elemento ${i + 1} incompleto`);
        else if (!pages.has(it.item.replace(site, ''))) err(url, `BreadcrumbList apunta a página inexistente: ${it.item}`);
      });
      if (items.at(-1)?.item !== site + url) err(url, 'el último elemento de BreadcrumbList no es la página');
    }

    if (kind === 'route') {
      const trips = byType('TouristTrip');
      if (trips.length !== 1) err(url, `${trips.length} TouristTrip (esperado 1)`);
      for (const t of trips) {
        for (const k of ['name', 'description', 'url', 'image', 'touristType', 'itinerary', 'provider']) if (!t[k]) err(url, `TouristTrip sin ${k}`);
        if (!t.itinerary?.itemListElement?.length) err(url, 'itinerary vacío');
        if (!t.provider?.name || !t.provider?.telephone) err(url, 'provider incompleto');
        if (t.image && !existsSync(path.join(dist, t.image.replace(site, '')))) err(url, `imagen de TouristTrip inexistente: ${t.image}`);
      }
    }
    if (kind === 'custom' && !byType('Service').length) err(url, 'falta Service');

    const faqs = byType('FAQPage');
    if (['home', 'route', 'custom', 'faq'].includes(kind) && faqs.length !== 1) err(url, `${faqs.length} FAQPage (esperado 1)`);
    for (const fq of faqs) {
      if (!fq.mainEntity?.length) err(url, 'FAQPage vacía');
      for (const q of fq.mainEntity ?? []) {
        if (q['@type'] !== 'Question' || !q.name || !q.acceptedAnswer?.text) err(url, 'Question incompleta');
        // La pregunta marcada debe estar visible en la página
        if (!visible.includes(q.name)) err(url, `pregunta del JSON-LD no visible: ${q.name}`);
        const seen = questions[expectedLang];
        if (seen.has(q.name)) err(url, `pregunta duplicada con ${seen.get(q.name)}: ${q.name}`);
        seen.set(q.name, url);
      }
    }
  }

  // canonical + hreflang
  if (!is404) {
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (canonical !== site + url) err(url, `canonical ${canonical}`);
    if (!canonical?.startsWith('https://') && !/localhost|127\.0\.0\.1/.test(site)) err(url, 'canonical sin https');
    const alts = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
    for (const l of ['es', 'en', 'de', 'x-default']) if (!alts[l]) err(url, `falta hreflang ${l}`);
    if (alts[expectedLang] !== site + url) err(url, 'hreflang propio incorrecto');
    if (alts['x-default'] !== alts.es) err(url, 'x-default no apunta a la versión en español');
    for (const [l, href] of Object.entries(alts)) {
      const other = pages.get(href.replace(site, ''));
      if (!other) err(url, `hreflang ${l} apunta a página inexistente ${href}`);
      else if (!other.includes(`hreflang="${expectedLang}" href="${site + url}"`)) err(url, `hreflang ${l} no es recíproco`);
    }
    const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    if (!og || !existsSync(path.join(dist, og.replace(site, '')))) err(url, `og:image inexistente: ${og}`);
  } else if (!hasNoindex) err(url, '404 sin noindex');
  if (!is404 && hasNoindex !== preview) err(url, preview ? 'falta noindex (URL de demostración)' : 'noindex en página indexable');
}

// Páginas huérfanas (sin ningún enlace desde otra página)
for (const [u, n] of inbound) if (kindOf(u) !== '404' && n === 0) err(u, 'página huérfana (ningún enlace interno entrante)');

// Sitemap
const sm = readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(site, ''));
const indexable = [...pages.keys()].filter((u) => kindOf(u) !== '404');
for (const u of indexable) if (!locs.includes(u)) err('sitemap', `falta ${u}`);
for (const u of locs) if (!pages.has(u)) err('sitemap', `URL sin página: ${u}`);
if ((sm.match(/hreflang="x-default"/g) ?? []).length !== locs.length) err('sitemap', 'faltan x-default');
if ((sm.match(/<xhtml:link/g) ?? []).length !== locs.length * 4) err('sitemap', 'no todas las URL tienen sus 4 alternativas');

const perLang = (l) => indexable.filter((u) => (l === 'es' ? !/^\/(en|de)\//.test(u) : u.startsWith(`/${l}/`))).length;
console.log(
  `${pages.size} páginas HTML (${Object.entries(kinds)
    .map(([k, n]) => `${k}: ${n}`)
    .join(', ')}).\n` +
    `Indexables por idioma: es ${perLang('es')}, en ${perLang('en')}, de ${perLang('de')}.\n` +
    `${counts.wa} enlaces wa.me, ${counts.tel} enlaces tel:, ${counts.ld} bloques JSON-LD, ${locs.length} URL en el sitemap, ` +
    `${counts.img} imágenes (${counts.imgDecorative} miniaturas del índice con alt vacío).\n` +
    (preview ? 'URL de demostración: todas las páginas con noindex.' : 'URL definitiva: páginas indexables.'),
);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('✓ Verificación superada sin errores.');
