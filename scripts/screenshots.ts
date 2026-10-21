/**
 * Capturas de página completa con Playwright: 3 idiomas × 4 anchos → reports/screenshots/.
 * Requiere el servidor de vista previa en marcha (npm run preview) en PREVIEW_URL (por defecto http://localhost:4321).
 * Uso: npm run screenshots
 */
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const base = process.env.PREVIEW_URL ?? 'http://localhost:4321';
const widths = [375, 768, 1280, 1920];
const pages = [
  ['es', '/'],
  ['en', '/en/'],
  ['de', '/de/'],
];
const only = process.argv[2]; // opcional: "de" para un solo idioma

await mkdir('reports/screenshots', { recursive: true });
const browser = await chromium.launch({ channel: process.env.PW_CHANNEL ?? 'chrome' });
const problems: string[] = [];

for (const [lang, path] of pages) {
  if (only && only !== lang) continue;
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    await page.goto(base + path, { waitUntil: 'networkidle' });
    // Fuerza la carga de imágenes diferidas, del mapa y de las apariciones
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
    });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(400);
    // Desbordamiento horizontal
    const overflow = await page.evaluate(() => {
      const w = document.documentElement.clientWidth;
      const out: string[] = [];
      document.querySelectorAll<HTMLElement>('body *').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > w + 1 || r.left < -1) && getComputedStyle(el).position !== 'fixed') {
          if (!el.closest('.leaflet-container') && !el.closest('.visually-hidden')) {
            out.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} → ${Math.round(r.left)}..${Math.round(r.right)} (vp ${w})`);
          }
        }
      });
      return { scrollW: document.documentElement.scrollWidth, w, out: out.slice(0, 8) };
    });
    if (overflow.scrollW > overflow.w || overflow.out.length) problems.push(`${lang} @${width}: scrollWidth=${overflow.scrollW} ${overflow.out.join(' | ')}`);
    await page.screenshot({ path: `reports/screenshots/${lang}-${width}.png`, fullPage: true });
    console.log(`${lang}-${width}.png`);
    await page.close();
  }
}
await browser.close();
console.log(problems.length ? 'Posibles desbordamientos:\n' + problems.join('\n') : 'Sin desbordamientos horizontales.');
