# Visitas guiadas en Osuna — web (v2)

Web de **Osuna Paso a Paso**, las visitas guiadas por Osuna (Sevilla) de una guía oficial de turismo de Andalucía (n.º GT/00975). Su objetivo es que el visitante **reserve por WhatsApp o por teléfono** y que la web gane en Google a la competencia directa (ver `SEO-PLAN.md`).

- Astro, salida 100 % estática, en español (`/`), inglés (`/en/`) y alemán (`/de/`).
- **14 páginas indexables por idioma** (42 en total): inicio, 7 rutas, visitas a medida, preguntas frecuentes, aviso legal, privacidad, cookies y créditos de las fotos. Más una 404 por idioma.
- Sin cookies, sin formularios, sin redes sociales y sin servicios de Google incrustados (mapa con OpenStreetMap).
- Todos los datos son ya los reales (ver `RESPUESTAS-CLIENTE.md`). Lo único pendiente es el **dominio**.

Documentos del proyecto:

| Archivo | Para qué |
|---|---|
| `PROMPT-V1.md`, `PROMPT-V2.md` | Encargos de cada versión (no se modifican) |
| `RESPUESTAS-CLIENTE.md` | Respuestas de la clienta con los datos reales (no se modifica) |
| `PREGUNTAS-CLIENTE.md` | Cuestionario de la v1 (histórico) |
| `REVISAR-TEXTOS.md` | Textos ampliados de las rutas, para que la clienta los valide |
| `SEO-PLAN.md` | Plan de SEO fuera de la web y elección del dominio |
| `DESIGN.md` | Dirección visual y cambios de la v1 y la v2 |
| `reports/v2/` | Informes de Lighthouse y capturas de la v2 (`reports/lighthouse` y `reports/screenshots` son de la v1) |

---

## 1. Requisitos e instalación

- **Node.js 22.22 o superior** (recomendado Node 24 LTS) y npm.
- Google Chrome instalado, solo para los scripts de capturas, Lighthouse e imágenes Open Graph.

```bash
npm install
cp .env.example .env      # y edita los valores si hace falta
npm run dev               # http://localhost:4321
```

### Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo. |
| `npm run build` | Genera la web estática en `dist/`. |
| `npm run preview` | Sirve `dist/` en local para probar el build. |
| `npm run check` | Comprobación de tipos de Astro/TypeScript (detecta, por ejemplo, un texto que falta en un idioma). |
| `npm run verify` | Verifica el build entero (ver §7). |
| `npm run assets` | Regenera favicons PNG, `logo.svg`, `site.webmanifest` y las imágenes Open Graph del inicio (`public/og/`). |
| `npm run screenshots` | Capturas del inicio y de una ruta (375/768/1280/1920 px × 3 idiomas) en `reports/v2/screenshots/`, alto del inicio en pantallas de móvil y búsqueda de texto cortado o pegado al borde en **todas** las páginas. Requiere `npm run preview` en marcha. |
| `npm run lighthouse` | Lighthouse móvil y escritorio del inicio y de dos rutas por idioma en `reports/v2/lighthouse/`. Requiere `npm run preview` en marcha (ver §7). |

### Variables de entorno (`.env` o panel de Cloudflare)

| Variable | Ejemplo | Uso |
|---|---|---|
| `SITE_URL` | `https://osunapasoapaso.es` | URL pública, sin barra final. Se usa en canonical, hreflang, sitemap, `robots.txt`, Open Graph y JSON-LD. **Es el único sitio donde se cambia el dominio.** |
| `PUBLIC_CF_ANALYTICS_TOKEN` | *(vacío)* | Token de Cloudflare Web Analytics. Vacío = analítica desactivada. Solo se carga en producción. |

Si `SITE_URL` no se define, se usa la URL de demostración de `astro.config.mjs` (`https://turismo-osuna-web.pedritosc2000.workers.dev`). Con una URL `*.workers.dev` o `*.pages.dev`, **todas las páginas llevan `noindex`**.

---

## 2. Estructura de páginas

| Página | Español | Inglés | Alemán |
|---|---|---|---|
| Inicio | `/` | `/en/` | `/de/` |
| Ruta I | `/rutas/colegiata-sepulcro-ducal/` | `/en/tours/collegiate-church-ducal-tomb/` | `/de/fuehrungen/stiftskirche-herzogsgruft/` |
| Ruta II | `/rutas/antigua-universidad/` | `/en/tours/old-university/` | `/de/fuehrungen/alte-universitaet/` |
| Ruta III | `/rutas/monasterio-encarnacion/` | `/en/tours/encarnacion-convent/` | `/de/fuehrungen/kloster-encarnacion/` |
| Ruta IV | `/rutas/calle-san-pedro-palacios-barrocos/` | `/en/tours/calle-san-pedro-baroque-palaces/` | `/de/fuehrungen/calle-san-pedro-barockpalaeste/` |
| Ruta V | `/rutas/canteras-necropolis-zona-arqueologica/` | `/en/tours/quarries-necropolis-roman-urso/` | `/de/fuehrungen/steinbrueche-nekropole-urso/` |
| Ruta VI | `/rutas/juego-de-tronos-escenarios-rodaje/` | `/en/tours/game-of-thrones-filming-locations/` | `/de/fuehrungen/game-of-thrones-drehorte/` |
| Ruta VII | `/rutas/osuna-nocturna/` | `/en/tours/osuna-by-night/` | `/de/fuehrungen/osuna-bei-nacht/` |
| Visitas a medida | `/visitas-a-medida/` | `/en/private-group-tours/` | `/de/gruppenfuehrungen/` |
| Preguntas frecuentes | `/preguntas-frecuentes/` | `/en/faq/` | `/de/haeufige-fragen/` |
| Legales y créditos | `/aviso-legal/`, `/privacidad/`, `/cookies/`, `/creditos/` | `/en/legal-notice/`, `/en/privacy/`, `/en/cookies/`, `/en/credits/` | `/de/impressum/`, `/de/datenschutz/`, `/de/cookies/`, `/de/bildnachweise/` |

`/rutas/`, `/en/tours/` y `/de/fuehrungen/` redirigen (301) al índice de rutas del inicio (`public/_redirects`).

### SEO técnico de cada página

- `title` de 50–60 caracteres y `description` de 140–155, únicos, en `src/i18n/*.ts` (`metaTitle`/`metaDesc`). La marca « | Osuna Paso a Paso» se añade sola al final.
- Un solo `h1`, `canonical` absoluto, `hreflang` es/en/de + `x-default` en **todas** las páginas, y sitemap con las alternativas de idioma.
- JSON-LD (un `@graph` por página, generado con `src/lib/seo.ts`):

| Página | Tipos |
|---|---|
| Inicio | `WebSite`, `WebPage`, `LocalBusiness` (teléfono, Plaza Mayor, `areaServed` Osuna, `knowsLanguage`, horario de atención, credencial de guía; **sin** valoraciones ni precios), `ItemList` de rutas, `FAQPage` (las 5 preguntas del inicio) |
| Ruta | `WebPage`, `BreadcrumbList`, `TouristTrip` (`itinerary`, `touristType`, `provider`; **sin `offers`**), `FAQPage` (las 2 de la ruta) |
| Visitas a medida | `WebPage`, `BreadcrumbList`, `Service`, `FAQPage` |
| Preguntas frecuentes | `WebPage`, `BreadcrumbList`, `FAQPage` (solo las que **no** están en el inicio, para no duplicar) |
| Legales y créditos | `WebPage`, `BreadcrumbList` |

```
src/
  data/site.ts          ← datos de negocio (teléfono, horario, punto de encuentro, titular, rutas y sus fotos)
  data/credits.ts       ← autor, licencia y origen de cada foto
  i18n/es.ts, en.ts, de.ts   ← TODOS los textos, uno por idioma (misma estructura; TypeScript avisa si falta algo)
  i18n/pages.mjs        ← URL de cada página en cada idioma (slugs de las rutas incluidos)
  lib/seo.ts            ← piezas de JSON-LD
  components/pages/     ← plantillas: Home, RoutePage, CustomPage, FaqPage, Prose (legales), Credits, NotFound
  components/sections/  ← secciones del inicio
  components/           ← cabecera, pie, migas de pan, ficha de ruta, índice de rutas, FAQ…
  pages/                ← páginas finas por idioma; las rutas son dinámicas: rutas/[slug].astro, en/tours/[slug].astro, de/fuehrungen/[slug].astro
public/                 ← favicon, logo, imágenes OG, _headers y _redirects de Cloudflare
scripts/                ← generación de recursos, capturas, Lighthouse y verificación
```

---

## 3. Cómo editar datos y textos

- **Teléfono, WhatsApp, horario, punto de encuentro, titular, grupo máximo, cancelación:** `src/data/site.ts`. El horario de atención está dos veces: `contactHours` (lo que se ve) y `openingHoursSchema` (JSON-LD); deben coincidir.
- **Textos:** `src/i18n/es.ts`, `en.ts` y `de.ts`. Los mensajes prerrellenados de WhatsApp están en `wa`; las preguntas generales en `faq` (`home: true` = salen en el inicio); los textos de la ficha en `facts`.
- **Textos de una ruta:** `routes.<id>` en cada idioma: `name`, `shortName`, `h1`, `metaTitle`/`metaDesc` (ver longitudes arriba), `teaser` (frase del índice, ≤ 60 caracteres para que quepa en dos líneas en móvil), `desc` (texto corto validado), `body`, `stops` (recorrido; también va al JSON-LD), `family`, `faq` (no repetir preguntas de otras páginas) y `caption`.
- **Logotipo del Ayuntamiento:** desactivado. Para activarlo, `showCouncilCredit: true` en `site.ts` y el logo oficial en `src/components/CouncilCredit.astro`.

### Imágenes y créditos

1. Copia la foto (JPEG, ~2400 px de lado mayor) a `src/assets/photos/nombre.jpg`. Solo fotos con licencia libre o **fotos propias de la guía**.
2. Añade su entrada en `src/data/credits.ts` (si es propia: autora la guía y «Todos los derechos reservados»).
3. Escribe su `alt` descriptivo en la clave `alt` de los tres idiomas (es la vía de entrada desde Google Imágenes).
4. Para una ruta, cámbiala en `image` (principal) o `photos` (2–4 secundarias) de `routes` en `site.ts`.

---

## 4. Cómo añadir una ruta nueva

Ejemplo: una ruta «Semana Santa» con id `semanasanta`.

1. **Datos** — en `src/data/site.ts`, añade `'semanasanta'` al tipo `RouteId` y un elemento a `routes` con `numeral` (`'VIII'`), `image`, `photos` (2–4), `related` (2–3 ids), `touristType` y, si hace falta, `arch`, `night` u `ownTransport`. Añade también su id al `related` de alguna ruta existente.
2. **URL** — en `src/i18n/pages.mjs`, añade sus slugs a `routeSlugs` (`{ es: 'semana-santa', en: 'holy-week', de: 'karwoche' }`) y el id al tipo `RouteId` de `src/i18n/pages.d.mts`.
3. **Textos** — en `es.ts`, `en.ts` y `de.ts`, añade `routes.semanasanta` con todas las claves de las demás rutas. Comprueba las longitudes de `metaTitle` (+ marca = 50–60) y `metaDesc` (140–155).
4. **Fotos** — como en §3, con sus créditos y `alt`.
5. `npm run check && npm run build && npm run verify`. Las páginas, el sitemap, los `hreflang`, el índice del inicio, el pie y el JSON-LD se generan solos. Pasa el texto nuevo a `REVISAR-TEXTOS.md` para que lo valide la clienta.

---

## 5. Cómo cambiar el dominio

El dominio se configura **en un solo sitio**: la variable `SITE_URL`.

1. Registra el dominio (recomendación en `SEO-PLAN.md` §8) y gestiónalo en Cloudflare (cambia los DNS del registrador a los de Cloudflare).
2. En el proyecto de Cloudflare: **Settings → Domains & Routes → Add → Custom domain** con el dominio y su `www`.
3. En **Settings → Build → Variables and secrets**, pon `SITE_URL=https://dominio` (con `https://`, sin barra final) y vuelve a desplegar (*Retry deployment* o un `git push`).
4. Al dejar de ser `*.workers.dev`, **el `noindex` desaparece solo** y se actualizan canonical, hreflang, sitemap, `robots.txt`, Open Graph y JSON-LD. `npm run verify` comprueba las dos situaciones.
5. Opcional: redirige `www` al dominio principal (*Rules → Redirect Rules*) y desactiva la URL `workers.dev`.
6. Da de alta el dominio en Google Search Console y Bing con el sitemap `https://dominio/sitemap-index.xml` (ver `SEO-PLAN.md` §5).

Si en el futuro se cambiara de un dominio a otro, habría que añadir redirecciones 301 del antiguo al nuevo para no perder posiciones.

---

## 6. Despliegue en Cloudflare

La web es 100 % estática: el resultado de `npm run build` es la carpeta `dist/`, que Cloudflare sirve como **Worker con archivos estáticos** según `wrangler.jsonc`.

### Opción A — conectando el repositorio de GitHub (recomendada)

1. **Workers & Pages → Create → Import a repository** → `pedrosc10/turismo-osuna-web`.
2. *Project name* `turismo-osuna-web` · *Build command* `npm run build` · *Deploy command* `npx wrangler deploy` · *Non-production branch deploy command* `npx wrangler versions upload` · *Path* `/`.
3. Variables de **build**: `NODE_VERSION=24`, `SITE_URL` (al tener dominio) y, si se quiere, `PUBLIC_CF_ANALYTICS_TOKEN`.
4. Cada `git push` a `main` publica en producción.

### Opción B — desde la terminal

```bash
npm run build
npx wrangler login
npx wrangler deploy
```

### Cabeceras, redirecciones y 404

- `public/_headers`: cabeceras de seguridad y caché larga para `/_astro/*`.
- `public/_redirects`: las carpetas de rutas sin índice redirigen al inicio (probado con `npx wrangler dev`).
- Con `not_found_handling: "404-page"`, `/en/…` y `/de/…` muestran su 404 traducida.

### Cloudflare Web Analytics (sin cookies)

Usa **solo una** forma: la inyección automática del panel (con dominio propio en Cloudflare) o el token en `PUBLIC_CF_ANALYTICS_TOKEN`. No usa cookies, por eso no hay banner.

---

## 7. Verificación

```bash
npm run check && npm run build && npm run verify
```

`npm run verify` revisa todas las páginas de `dist/`: un `h1`, `lang`, longitud y unicidad de `title`/`description`, `canonical`, `hreflang` recíprocos, sitemap, enlaces rotos y anclas, **páginas huérfanas**, `wa.me` y `tel:` (número y idioma del mensaje), JSON-LD por tipo de página (sin precios ni valoraciones, sin preguntas duplicadas entre páginas, preguntas visibles), credencial GT/00975 visible, `alt` de las imágenes, recursos externos, enlaces `http://` y ausencia de datos ficticios de la v1 y de menciones a la lluvia.

Para Lighthouse y capturas hay que medir la web **como quedará indexable** (con la URL de demostración, el `noindex` intencionado baja la nota de SEO):

```bash
SITE_URL=http://localhost:4321 npm run build
npm run preview            # en otra terminal
npm run lighthouse && npm run screenshots
npm run build              # vuelve a compilar con la URL real antes de desplegar
```

Resultados de la v2: `reports/v2/lighthouse/RESUMEN.md` y `reports/v2/screenshots/` (con `ALTURAS.md`).
