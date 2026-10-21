/**
 * Verificación estática del build de producción (dist/):
 *  - enlaces internos rotos, anclas inexistentes
 *  - enlaces wa.me y tel: bien formados, con mensaje en el idioma de la página
 *  - JSON-LD válido y con los campos requeridos
 *  - canonical, hreflang recíprocos y x-default; sitemap coherente
 *  - un solo <h1>, atributo lang correcto
 *  - sin rastro del marcado TODO-V2 ni de recursos externos no permitidos
 * Uso: npm run build && npm run verify
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const errors = [];
const notes = [];
const err = (file, msg) => errors.push(`✗ ${file}: ${msg}`);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const htmlFiles = walk(dist).filter((f) => f.endsWith('.html'));
const rel = (f) => '/' + path.relative(dist, f).replace(/\\/g, '/').replace(/index\.html$/, '');

const site = (() => {
  const robots = readFileSync(path.join(dist, 'robots.txt'), 'utf8');
  return new URL(robots.match(/Sitemap: (\S+)/)[1]).origin;
})();

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const pages = new Map();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  pages.set(rel(file), { file, html });
}

const waExpect = { es: /Hola/, en: /Hello/, de: /Hallo/ };
let waCount = 0;
let telCount = 0;
let ldCount = 0;

for (const [url, { html }] of pages) {
  const is404 = /404/.test(url);
  const lang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1];
  const expectedLang = url.startsWith('/en/') ? 'en' : url.startsWith('/de/') ? 'de' : 'es';
  if (lang !== expectedLang) err(url, `lang="${lang}" (esperado ${expectedLang})`);

  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) err(url, `${h1s.length} elementos h1`);

  if (/todo-v2|TODO-V2/i.test(html)) err(url, 'contiene marcado TODO-V2');

  // Recursos externos (scripts, estilos, iframes, imágenes) — solo permitidos los de Cloudflare Analytics
  for (const m of html.matchAll(/<(script|link|iframe|img|source)\b[^>]*>/g)) {
    const tag = m[0];
    const src = attr(tag, 'src') ?? (m[1] === 'link' && /stylesheet|preload|icon/.test(attr(tag, 'rel') ?? '') ? attr(tag, 'href') : undefined);
    if (src && /^https?:\/\//.test(src) && !src.startsWith(site) && !src.includes('static.cloudflareinsights.com'))
      err(url, `recurso externo: ${src}`);
    if (m[1] === 'iframe') err(url, 'iframe incrustado');
  }
  if (/fonts\.googleapis|google\.com\/maps\/embed|youtube\.com\/embed/.test(html)) err(url, 'embed de Google/YouTube');

  // Enlaces
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/<a\b[^>]*>/g)) {
    const href = decode(attr(m[0], 'href') ?? '');
    if (!href) {
      err(url, `<a> sin href: ${m[0].slice(0, 80)}`);
      continue;
    }
    if (href.startsWith('https://wa.me/')) {
      waCount++;
      const u = new URL(href);
      if (!/^\/\d{9,15}$/.test(u.pathname)) err(url, `wa.me con número mal formado: ${u.pathname}`);
      const text = u.searchParams.get('text');
      if (!text) err(url, 'wa.me sin mensaje');
      else if (!waExpect[expectedLang].test(text)) err(url, `mensaje WhatsApp no está en ${expectedLang}: ${text}`);
      if (attr(m[0], 'target') === '_blank' && !/noopener/.test(attr(m[0], 'rel') ?? '')) err(url, 'target=_blank sin noopener');
      continue;
    }
    if (href.startsWith('tel:')) {
      telCount++;
      if (!/^tel:\+\d{9,15}$/.test(href)) err(url, `tel: mal formado: ${href}`);
      continue;
    }
    if (/^(https?:|mailto:)/.test(href)) continue;
    const [p, hash] = href.split('#');
    const target = p === '' ? url : p;
    if (!pages.has(target) && !existsSync(path.join(dist, target))) err(url, `enlace roto: ${href}`);
    else if (hash) {
      const targetIds = target === url ? ids : new Set([...pages.get(target).html.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]));
      if (!targetIds.has(hash)) err(url, `ancla inexistente: ${href}`);
    }
  }

  // JSON-LD
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    ldCount++;
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch (e) {
      err(url, `JSON-LD no es JSON válido: ${e.message}`);
      continue;
    }
    const graph = data['@graph'] ?? [data];
    if (data['@context'] !== 'https://schema.org') err(url, 'JSON-LD sin @context schema.org');
    const byType = (t) => graph.filter((n) => n['@type'] === t);
    const biz = byType('TravelAgency')[0];
    if (!biz) err(url, 'falta TravelAgency/LocalBusiness');
    else for (const k of ['name', 'telephone', 'address', 'areaServed', 'url']) if (!biz[k]) err(url, `TravelAgency sin ${k}`);
    const trips = byType('TouristTrip');
    if (trips.length !== 7) err(url, `${trips.length} TouristTrip (esperados 7)`);
    for (const t of trips) {
      if (!t.name || !t.description || !t.provider) err(url, `TouristTrip incompleto: ${t.name}`);
      if (t.offers && (typeof t.offers.price !== 'number' || t.offers.priceCurrency !== 'EUR')) err(url, `Offer mal formada en ${t.name}`);
    }
    const faq = byType('FAQPage')[0];
    if (!faq || !faq.mainEntity?.length) err(url, 'falta FAQPage');
    else for (const q of faq.mainEntity) if (q['@type'] !== 'Question' || !q.name || !q.acceptedAnswer?.text) err(url, 'Question incompleta');
  }

  // canonical + hreflang
  if (!is404) {
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (canonical !== site + url) err(url, `canonical ${canonical}`);
    const alts = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
    for (const l of ['es', 'en', 'de', 'x-default']) if (!alts[l]) err(url, `falta hreflang ${l}`);
    if (alts[expectedLang] !== site + url) err(url, `hreflang propio incorrecto`);
    for (const [l, href] of Object.entries(alts)) {
      const other = pages.get(href.replace(site, ''));
      if (!other) err(url, `hreflang ${l} apunta a página inexistente ${href}`);
      else if (!other.html.includes(`hreflang="${expectedLang}" href="${site + url}"`)) err(url, `hreflang ${l} no es recíproco`);
    }
    const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    if (!og || !existsSync(path.join(dist, og.replace(site, '')))) err(url, `og:image inexistente: ${og}`);
    if (!/<meta name="description" content="[^"]{50,}"/.test(html)) err(url, 'meta description corta o ausente');
  } else if (!/name="robots" content="noindex"/.test(html)) err(url, '404 sin noindex');
}

// Títulos y descripciones únicos
const titles = new Map();
for (const [url, { html }] of pages) {
  const t = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (titles.has(t) && !/404/.test(url)) err(url, `título duplicado con ${titles.get(t)}`);
  titles.set(t, url);
}

// Sitemap
const sm = readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(site, ''));
const indexable = [...pages.keys()].filter((u) => !/404/.test(u));
for (const u of indexable) if (!locs.includes(u)) err('sitemap', `falta ${u}`);
for (const u of locs) if (!pages.has(u)) err('sitemap', `URL sin página: ${u}`);
if ((sm.match(/hreflang="x-default"/g) ?? []).length !== locs.length) err('sitemap', 'faltan x-default');

// Mapa: OSM y sin Google
notes.push(`${pages.size} páginas HTML, ${waCount} enlaces wa.me, ${telCount} enlaces tel:, ${ldCount} bloques JSON-LD, ${locs.length} URLs en el sitemap.`);
console.log(notes.join('\n'));
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('✓ Verificación superada sin errores.');
