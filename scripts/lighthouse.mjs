/**
 * Lighthouse en /, /en/ y /de/, móvil y escritorio. Informes HTML + JSON en reports/lighthouse/.
 * Requiere `npm run preview` en marcha (PREVIEW_URL, por defecto http://localhost:4321).
 * Uso: npm run lighthouse
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const base = process.env.PREVIEW_URL ?? 'http://localhost:4321';
const targets = [
  ['es', '/'],
  ['en', '/en/'],
  ['de', '/de/'],
];
const out = 'reports/lighthouse';
mkdirSync(out, { recursive: true });
const rows = [];
for (const [lang, path] of targets) {
  for (const form of ['mobile', 'desktop']) {
    const name = `${out}/${lang}-${form}`;
    const args = [
      'lighthouse',
      base + path,
      '--quiet',
      '--output=html',
      '--output=json',
      `--output-path=${name}`,
      '--only-categories=performance,accessibility,best-practices,seo',
      '--chrome-flags=--headless=new --no-sandbox',
      ...(form === 'desktop' ? ['--preset=desktop'] : []),
    ];
    execFileSync(process.platform === 'win32' ? 'npx.cmd' : 'npx', args, { stdio: 'inherit', shell: process.platform === 'win32' });
    const report = JSON.parse(readFileSync(`${name}.report.json`, 'utf8'));
    const s = Object.fromEntries(Object.entries(report.categories).map(([k, v]) => [k, Math.round(v.score * 100)]));
    rows.push({ page: path, form, ...s });
    console.log(lang, form, s);
  }
}
const md =
  '| Página | Dispositivo | Rendimiento | Accesibilidad | Buenas prácticas | SEO |\n|---|---|---|---|---|---|\n' +
  rows.map((r) => `| ${r.page} | ${r.form} | ${r.performance} | ${r.accessibility} | ${r['best-practices']} | ${r.seo} |`).join('\n') +
  '\n';
writeFileSync(`${out}/RESUMEN.md`, `# Lighthouse — resumen\n\nServidor: \`astro preview\` (build de producción).\n\n${md}`);
console.log(md);
