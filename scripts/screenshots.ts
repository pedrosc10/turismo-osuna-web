/**
 * Capturas de página completa con Playwright → reports/v2/screenshots/.
 * Por defecto: inicio y una página de ruta, en los 3 idiomas, a 375, 768, 1280 y 1920 px.
 * Además mide la altura del inicio en móvil (375 × 812) y detecta desbordamientos horizontales.
 * Requiere el servidor de vista previa en marcha (npm run preview) en PREVIEW_URL (por defecto http://localhost:4321).
 * Uso: npm run screenshots [-- filtro]   (filtro opcional: parte del nombre, p. ej. "de" o "ruta")
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const base = process.env.PREVIEW_URL ?? 'http://localhost:4321';
const out = 'reports/v2/screenshots';
const widths = [375, 768, 1280, 1920];
const pages: [string, string][] = [
  ['es-inicio', '/'],
  ['en-inicio', '/en/'],
  ['de-inicio', '/de/'],
  ['es-ruta-colegiata', '/rutas/colegiata-sepulcro-ducal/'],
  ['en-ruta-colegiata', '/en/tours/collegiate-church-ducal-tomb/'],
  ['de-ruta-colegiata', '/de/fuehrungen/stiftskirche-herzogsgruft/'],
];
const only = process.argv[2];
const PHONE_H = 812; // alto de pantalla de referencia (iPhone X/11/12/13 mini…)

await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: process.env.PW_CHANNEL ?? 'chrome' });
const problems: string[] = [];
const heights: string[] = [];

for (const [name, path] of pages) {
  if (only && !name.includes(only)) continue;
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: width < 768 ? PHONE_H : 900 }, deviceScaleFactor: 1 });
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
    const overflow = await page.evaluate(() => {
      const w = document.documentElement.clientWidth;
      const res: string[] = [];
      document.querySelectorAll<HTMLElement>('body *').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > w + 1 || r.left < -1) && getComputedStyle(el).position !== 'fixed') {
          if (!el.closest('.leaflet-container') && !el.closest('.visually-hidden')) {
            res.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} → ${Math.round(r.left)}..${Math.round(r.right)} (vp ${w})`);
          }
        }
      });
      return { scrollW: document.documentElement.scrollWidth, w, out: res.slice(0, 8), h: document.documentElement.scrollHeight };
    });
    if (overflow.scrollW > overflow.w || overflow.out.length) problems.push(`${name} @${width}: scrollWidth=${overflow.scrollW} ${overflow.out.join(' | ')}`);
    if (width === 375) heights.push(`| ${name} | ${overflow.h} px | ${(overflow.h / PHONE_H).toFixed(1)} |`);
    await page.screenshot({ path: `${out}/${name}-${width}.png`, fullPage: true });
    console.log(`${name}-${width}.png  (alto ${overflow.h} px)`);
    await page.close();
  }
}
await browser.close();
const table = `| Página | Alto a 375 px | Pantallas de ${PHONE_H} px |\n|---|---|---|\n${heights.join('\n')}\n`;
if (!only) await writeFile(`${out}/ALTURAS.md`, `# Altura de las páginas en móvil\n\n${table}`);
console.log(table);
console.log(problems.length ? 'Posibles desbordamientos:\n' + problems.join('\n') : 'Sin desbordamientos horizontales.');
