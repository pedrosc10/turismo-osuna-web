/**
 * Genera los recursos estáticos que dependen de los datos de negocio y de los textos:
 *   - public/favicon-32.png, apple-touch-icon.png, icon-192.png, icon-512.png (desde public/favicon.svg)
 *   - public/logo.svg y public/site.webmanifest (con el nombre comercial de src/data/site.ts)
 *   - public/og/og-{es,en,de}.jpg (imágenes Open Graph 1200×630, renderizadas con Playwright)
 *
 * Uso:  npm run assets
 * Requiere Google Chrome instalado (o `npx playwright install chromium` y PW_CHANNEL=chromium).
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import { chromium } from 'playwright';
import { site } from '../src/data/site';
import es from '../src/i18n/es';
import en from '../src/i18n/en';
import de from '../src/i18n/de';

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const pub = (p: string) => path.join(root, 'public', p);
const fontCache = new Map<string, string>();
for (const f of [
  '@fontsource-variable/fraunces/files/fraunces-latin-opsz-normal.woff2',
  '@fontsource-variable/fraunces/files/fraunces-latin-opsz-italic.woff2',
  '@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2',
]) {
  fontCache.set(f, `data:font/woff2;base64,${(await readFile(path.join(root, 'node_modules', f))).toString('base64')}`);
}
const nm = (p: string) => fontCache.get(p)!;

// 1. Favicons PNG
const svg = await readFile(pub('favicon.svg'));
for (const [file, size] of [
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
] as const) {
  await sharp(svg, { density: 600 }).resize(size, size).png().toFile(pub(file));
}

// 2. Logo SVG y manifest con el nombre comercial
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
await writeFile(
  pub('logo.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 60" width="360" height="60" role="img" aria-label="${esc(site.brand)}">
  <!-- Logotipo provisional generado por scripts/generate-assets.ts. Sustituir por el definitivo si lo hay. -->
  <g fill="none" stroke="#211b15">
    <path d="M6 58V30a17 17 0 0 1 34 0v28" stroke-width="3.4"/>
    <path d="M14 58V31a9 9 0 0 1 18 0v27" stroke-width="1.5"/>
  </g>
  <path d="M20.3 7.5h5.4l-1 6h-3.4z" fill="#a3401f"/>
  <text x="54" y="34" font-family="Fraunces, Georgia, 'Times New Roman', serif" font-size="27" fill="#211b15">${esc(site.brand)}</text>
  <text x="55" y="53" font-family="'Source Sans 3', 'Segoe UI', Arial, sans-serif" font-size="11" font-weight="600" letter-spacing="2.6" fill="#5b4d3f">${esc(site.brandTagline.toUpperCase())} · OSUNA</text>
</svg>
`,
);
await writeFile(
  pub('site.webmanifest'),
  JSON.stringify(
    {
      name: `${site.brand} · ${site.brandTagline}`,
      short_name: site.brand,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      theme_color: '#f2eadb',
      background_color: '#f2eadb',
      display: 'browser',
      start_url: '/',
    },
    null,
    2,
  ) + '\n',
);

// 3. Imágenes Open Graph
const photo = await sharp(path.join(root, 'src/assets/photos/colegiata-exterior.jpg'))
  .resize(560, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 88 })
  .toBuffer();
const photoUrl = `data:image/jpeg;base64,${photo.toString('base64')}`;

const html = (d: typeof es, locale: string) => `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><style>
@font-face{font-family:F;src:url(${nm('@fontsource-variable/fraunces/files/fraunces-latin-opsz-normal.woff2')}) format('woff2');font-weight:100 900}
@font-face{font-family:F;font-style:italic;src:url(${nm('@fontsource-variable/fraunces/files/fraunces-latin-opsz-italic.woff2')}) format('woff2');font-weight:100 900}
@font-face{font-family:S;src:url(${nm('@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2')}) format('woff2');font-weight:200 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#f2eadb;color:#211b15;font-family:S;display:grid;grid-template-columns:600px 560px;gap:40px;overflow:hidden}
.t{padding:56px 0 48px 64px;display:flex;flex-direction:column}
.k{font-size:17px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#5b4d3f;display:flex;gap:14px;align-items:center}
.k:before{content:'';width:36px;height:1.5px;background:#5b4d3f}
h1{font-family:F;font-weight:340;font-size:92px;line-height:.96;letter-spacing:-.025em;margin-top:44px}
h1 em{display:block;color:#a3401f;font-weight:320}
.l{margin-top:auto;font-size:22px;color:#5b4d3f;border-top:1.5px solid #cdbb9c;padding-top:18px}
.b{font-family:F;font-size:26px;margin-top:14px;color:#211b15}
.p{margin-top:40px;border-radius:999px 999px 0 0;overflow:hidden;height:590px;background:url(${photoUrl}) center/cover}
</style></head><body>
<div class="t"><p class="k">${esc(d.hero.kicker)}</p>
<h1>${esc(d.meta.ogTitle.split(' ').slice(0, -1).join(' '))}<em>${esc(d.meta.ogTitle.split(' ').slice(-1)[0])}.</em></h1>
<p class="l">${esc(d.meta.ogLine)}</p><p class="b">${esc(site.brand)} · ${esc(d.hero.languages)}</p></div>
<div class="p"></div></body></html>`;

await mkdir(pub('og'), { recursive: true });
const browser = await chromium.launch({ channel: process.env.PW_CHANNEL ?? 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [locale, d] of [
  ['es', es],
  ['en', en],
  ['de', de],
] as const) {
  await page.setContent(html(d, locale), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: 'png' });
  await sharp(png).jpeg({ quality: 86, mozjpeg: true }).toFile(pub(`og/og-${locale}.jpg`));
  console.log(`og-${locale}.jpg`);
}
await browser.close();
console.log('Recursos generados.');
