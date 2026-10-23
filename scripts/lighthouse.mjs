/**
 * Lighthouse móvil y escritorio → reports/v2/lighthouse/ (HTML + JSON + RESUMEN.md).
 * Páginas: el inicio de cada idioma y dos rutas por idioma (Colegiata y Juego de Tronos).
 * Requiere `npm run preview` en marcha (PREVIEW_URL, por defecto http://localhost:4321).
 *
 * IMPORTANTE: con la URL de demostración (*.workers.dev) todas las páginas llevan noindex a propósito
 * y Lighthouse baja la nota de SEO por eso. Para medir la web tal como quedará con dominio propio,
 * compila antes con una URL indexable que coincida con el servidor local:
 *   SITE_URL=http://localhost:4321 npm run build && npm run preview
 * Uso: npm run lighthouse
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const base = process.env.PREVIEW_URL ?? 'http://localhost:4321';
const targets = [
  ['es-inicio', '/'],
  ['en-inicio', '/en/'],
  ['de-inicio', '/de/'],
  ['es-ruta-colegiata', '/rutas/colegiata-sepulcro-ducal/'],
  ['es-ruta-cine', '/rutas/juego-de-tronos-escenarios-rodaje/'],
  ['en-ruta-colegiata', '/en/tours/collegiate-church-ducal-tomb/'],
  ['en-ruta-cine', '/en/tours/game-of-thrones-filming-locations/'],
  ['de-ruta-colegiata', '/de/fuehrungen/stiftskirche-herzogsgruft/'],
  ['de-ruta-cine', '/de/fuehrungen/game-of-thrones-drehorte/'],
];
const only = process.argv[2];
const out = 'reports/v2/lighthouse';
mkdirSync(out, { recursive: true });
const rows = [];
for (const [name, path] of targets) {
  if (only && !name.includes(only)) continue;
  for (const form of ['mobile', 'desktop']) {
    const file = `${out}/${name}-${form}`;
    const args = [
      'lighthouse',
      base + path,
      '--quiet',
      '--output=html',
      '--output=json',
      `--output-path=${file}`,
      '--only-categories=performance,accessibility,best-practices,seo',
      '--chrome-flags=--headless=new --no-sandbox',
      ...(form === 'desktop' ? ['--preset=desktop'] : []),
    ];
    execFileSync(process.platform === 'win32' ? 'npx.cmd' : 'npx', args, { stdio: 'inherit', shell: process.platform === 'win32' });
    const report = JSON.parse(readFileSync(`${file}.report.json`, 'utf8'));
    const s = Object.fromEntries(Object.entries(report.categories).map(([k, v]) => [k, Math.round(v.score * 100)]));
    rows.push({ page: path, form, ...s });
    console.log(name, form, s);
  }
}
const md =
  '| Página | Dispositivo | Rendimiento | Accesibilidad | Buenas prácticas | SEO |\n|---|---|---|---|---|---|\n' +
  rows.map((r) => `| ${r.page} | ${r.form} | ${r.performance} | ${r.accessibility} | ${r['best-practices']} | ${r.seo} |`).join('\n') +
  '\n';
if (!only)
  writeFileSync(
    `${out}/RESUMEN.md`,
    `# Lighthouse v2 — resumen\n\nServidor: \`astro preview\` (build de producción compilado con \`SITE_URL=${base}\`, es decir, en modo indexable, como quedará con el dominio definitivo).\nLighthouse ${JSON.parse(readFileSync(`${out}/${targets[0][0]}-mobile.report.json`, 'utf8')).lighthouseVersion}, ${new Date().toISOString().slice(0, 10)}.\n\n${md}`,
  );
console.log(md);
