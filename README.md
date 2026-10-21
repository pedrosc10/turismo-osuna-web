# Visitas guiadas en Osuna — web (v1)

Web promocional, de una sola página por idioma, para las **visitas turísticas guiadas en Osuna (Sevilla)** de una guía oficial local, con la colaboración del Ayuntamiento de Osuna. Su único objetivo es que el visitante **reserve por WhatsApp o por teléfono**.

- Tres idiomas: español (`/`), inglés (`/en/`) y alemán (`/de/`).
- Secciones: portada, 7 rutas, visitas a medida, galería, preguntas frecuentes, punto de encuentro (mapa OpenStreetMap) y contacto.
- Páginas legales (aviso legal, privacidad, cookies), créditos de fotos y 404, todas traducidas.
- Sin cookies, sin formularios, sin redes sociales y sin servicios de Google incrustados.
- Esta es la **versión 1**: parte de los datos son provisionales (ver `PREGUNTAS-CLIENTE.md`). Están marcados en el código con `// TODO-V2: dato provisional` y, en desarrollo, se ven con un borde discontinuo rosa.

Documentos del proyecto:

| Archivo | Para qué |
|---|---|
| `DESIGN.md` | Dirección visual, retícula, color, tipografía y cambios tras la revisión |
| `PREGUNTAS-CLIENTE.md` | Cuestionario para la guía con todos los datos provisionales |
| `reports/` | Informes de Lighthouse y capturas responsive |

---

## 1. Requisitos e instalación

- **Node.js 22.22 o superior** (recomendado Node 24 LTS) y npm.
- Google Chrome instalado, solo para los scripts de capturas, Lighthouse e imágenes Open Graph.

```bash
npm install
cp .env.example .env      # y edita los valores si hace falta
npm run dev               # http://localhost:4321 (con los datos provisionales resaltados)
```

### Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo. Los datos `TODO-V2` aparecen con borde discontinuo. |
| `npm run build` | Genera la web estática en `dist/` (sin ningún marcado `TODO-V2`). |
| `npm run preview` | Sirve `dist/` en local para probar el build. |
| `npm run check` | Comprobación de tipos de Astro/TypeScript. |
| `npm run verify` | Verifica el build: enlaces, `wa.me`/`tel:`, JSON-LD, hreflang, sitemap, h1, `lang`, recursos externos y ausencia de `TODO-V2`. |
| `npm run assets` | Regenera favicons PNG, `logo.svg`, `site.webmanifest` y las imágenes Open Graph (`public/og/`). |
| `npm run screenshots` | Capturas de página completa (375/768/1280/1920 px × 3 idiomas) en `reports/screenshots/`. Requiere `npm run preview` en marcha. |
| `npm run lighthouse` | Lighthouse móvil y escritorio de `/`, `/en/` y `/de/` en `reports/lighthouse/`. Requiere `npm run preview` en marcha. |

### Variables de entorno (`.env` o panel de Cloudflare)

| Variable | Ejemplo | Uso |
|---|---|---|
| `SITE_URL` | `https://osuna-visitas.pages.dev` | URL pública, sin barra final. Se usa en canonical, hreflang, sitemap, `robots.txt` y Open Graph. |
| `PUBLIC_CF_ANALYTICS_TOKEN` | *(vacío)* | Token de Cloudflare Web Analytics. Vacío = analítica desactivada. Solo se carga en producción. |

---

## 2. Estructura

```
src/
  data/site.ts          ← TODOS los datos de negocio (teléfono, precios, horarios, rutas, punto de encuentro…)
  data/credits.ts       ← autor, licencia y origen de cada foto
  i18n/es.ts, en.ts, de.ts   ← TODOS los textos, uno por idioma (misma estructura)
  i18n/pages.mjs        ← rutas traducidas de cada página (/creditos, /en/credits, /de/bildnachweise…)
  assets/photos/        ← fotos originales (Astro genera AVIF/WebP y srcset al compilar)
  components/           ← cabecera, pie, logo, secciones de la portada…
  layouts/Base.astro    ← <head>: SEO, hreflang, Open Graph, analítica
  pages/                ← una página fina por idioma que solo llama al componente correspondiente
public/                 ← favicon, logo, imágenes OG, _headers de Cloudflare
scripts/                ← generación de recursos, capturas, Lighthouse y verificación
```

---

## 3. Cómo editar datos y textos

### Teléfono, WhatsApp, horario, punto de encuentro, precios

Todo está en **`src/data/site.ts`**:

- `phone` (formato `+34…` sin espacios, para `tel:` y JSON-LD), `phoneDisplay` (como se ve en pantalla) y `whatsapp` (solo dígitos con prefijo, para `wa.me`).
- `contactHours` (lo que se muestra) y `openingHoursSchema` (lo mismo en formato schema.org).
- `meetingPoint`: nombre, dirección y coordenadas del mapa.
- `pricing`, `cancellation`, `guideLicense`, `owner` (datos del aviso legal).
- `routes`: precio orientativo (`priceFrom`, o `null` para «a consultar»), horario (`schedule`), foto y composición.
- `schedules`: días y horas de salida de cada tipo de ruta.

Al sustituir un dato provisional, **borra también su comentario `// TODO-V2`** y, si se muestra en pantalla, quita el envoltorio `<Todo>` del componente correspondiente (búscalo con `grep -rn "<Todo" src`).

Si cambias el **nombre comercial**, ejecuta después `npm run assets` para regenerar `logo.svg`, el manifest y las imágenes Open Graph.

### Textos (nombres y descripciones de rutas, FAQ, legales…)

En **`src/i18n/es.ts`**, **`en.ts`** y **`de.ts`**. Los tres tienen exactamente la misma estructura; TypeScript avisa si falta una clave en algún idioma. Los mensajes prerrellenados de WhatsApp están en la clave `wa`.

### Rutas

- Cambiar texto: `routes.<id>` en cada archivo de idioma.
- Cambiar precio/horario/foto: el elemento correspondiente de `routes` en `site.ts`.
- Añadir o quitar una ruta: hay que tocar también `src/components/sections/Routes.astro`, porque cada ruta tiene su composición (destacada, pareja, índice, nocturna). Ver `DESIGN.md` §6.

### Imágenes y créditos

1. Copia la foto (JPEG, ~2400 px de lado mayor) a `src/assets/photos/nombre.jpg`. Solo fotos con licencia libre (Wikimedia Commons CC BY/CC BY-SA/CC0/dominio público, Unsplash, Pexels) o **fotos propias de la guía**.
2. Añade su entrada en `src/data/credits.ts` (archivo, autor, licencia, URL de la licencia y URL de origen). Si la foto es propia, pon como autora a la guía y licencia «Todos los derechos reservados».
3. Escribe su texto alternativo en la clave `alt` de los tres archivos de idioma.
4. Para usarla en la galería, añade su nombre al array `gallery` de `site.ts`; para una ruta, cambia `image` en `routes`.

La página `/creditos` se genera sola a partir de `credits.ts`.

---

## 4. Cómo añadir un idioma (ejemplo: italiano)

1. **Configuración**: en `astro.config.mjs`, añade `'it'` a `i18n.locales`.
2. **Rutas traducidas**: en `src/i18n/pages.mjs`, añade `'it'` a `locales` y a `hreflang`, y una ruta `it` a cada página de `pages` (p. ej. `home: { …, it: 'it/' }`, `credits: { …, it: 'it/crediti/' }`, `legal: { …, it: 'it/note-legali/' }`, `privacy: { …, it: 'it/privacy/' }`, `cookies: { …, it: 'it/cookie/' }`). Actualiza también los tipos de `src/i18n/pages.d.mts`.
3. **Textos**: copia `src/i18n/en.ts` a `src/i18n/it.ts` y tradúcelo (incluidos `wa`, `alt` y las páginas legales). Cambia `locale` a `'it-IT'`.
4. **Registro**: en `src/i18n/index.ts`, importa `it` y añádelo a `dictionaries` y a `asLocale`; en `src/data/site.ts`, añade `'it'` al tipo `Locale`; en `Base.astro`, añade `it: 'it_IT'` a `ogLocales`.
5. **Páginas**: crea `src/pages/it/` con los mismos archivos que `src/pages/en/` renombrados según las rutas del paso 2 (cada uno tiene 4 líneas).
6. **Recursos**: en `scripts/generate-assets.ts` añade `['it', it]` al bucle de imágenes OG y ejecuta `npm run assets`. En `scripts/verify.mjs` añade el saludo esperado en `waExpect` (`it: /Ciao/`) y la detección de `/it/`. En `src/integrations/copy-locale-404.mjs` añade `'it'`.
7. `npm run build && npm run verify`. El selector de idioma, el sitemap y los `hreflang` se actualizan solos.

---

## 5. Despliegue en Cloudflare

La web es 100 % estática: el resultado de `npm run build` es la carpeta `dist/`. Cloudflare la sirve como **Worker con archivos estáticos** (el sucesor de Cloudflare Pages), según `wrangler.jsonc`.

### Opción A — conectando el repositorio de GitHub (recomendada)

1. En el panel de Cloudflare: **Workers & Pages → Create → Import a repository** y elige `pedrosc10/turismo-osuna-web`.
2. Configuración:
   - *Project name*: `turismo-osuna-web` (debe coincidir con `name` en `wrangler.jsonc`)
   - *Build command*: `npm run build`
   - *Deploy command*: `npx wrangler deploy`
   - *Non-production branch deploy command*: `npx wrangler versions upload`
   - *Path*: `/`
3. **Variables de build** (*Settings → Build → Variables and secrets*; son de **build**, no de runtime):
   - `NODE_VERSION` = `24`
   - `SITE_URL` = la URL pública (al principio, la `https://turismo-osuna-web.<tu-subdominio>.workers.dev` que te asigne Cloudflare; luego, el dominio)
   - `PUBLIC_CF_ANALYTICS_TOKEN` = *(opcional, ver analítica)*
4. Cada `git push` a `main` publica en producción; las demás ramas suben una versión de vista previa con su propia URL.

### Opción B — desde la terminal con Wrangler

```bash
npm run build
npx wrangler login
npx wrangler deploy
```

Antes del `build`, define `SITE_URL` en `.env`.

### Cabeceras y 404

- `public/_headers` añade cabeceras de seguridad y caché larga para `/_astro/*`.
- Con `not_found_handling: "404-page"` (en `wrangler.jsonc`), Cloudflare sirve el `404.html` más cercano a la URL pedida: `/en/…` y `/de/…` muestran su 404 traducido.

### Configurar el dominio cuando lo haya

1. En el proyecto: **Settings → Domains & Routes → Add → Custom domain** e introduce, por ejemplo, `visitasosuna.es` y `www.visitasosuna.es`.
2. El dominio tiene que estar gestionado por Cloudflare (cambia los DNS del registrador a los que te indique Cloudflare); los registros se crean solos.
3. Cambia la variable `SITE_URL` al dominio definitivo (con `https://`, sin barra final) y vuelve a desplegar (*Deployments → Retry deployment* o un nuevo `git push`). Así se actualizan canonical, hreflang, sitemap, `robots.txt` y Open Graph.
4. Opcional: en *Rules → Redirect Rules* redirige `www` al dominio principal, y desactiva la URL `workers.dev` en *Settings → Domains & Routes*.
5. Da de alta el sitemap (`https://dominio/sitemap-index.xml`) en Google Search Console y Bing Webmaster Tools.

### Activar Cloudflare Web Analytics (sin cookies)

Hay dos formas; usa **solo una** para no contar doble:

- **Automática** (solo con dominio propio en Cloudflare): en *Analytics & Logs → Web Analytics → Add a site*, elige el dominio y activa la inyección automática. Deja `PUBLIC_CF_ANALYTICS_TOKEN` vacío.
- **Con token**: en el panel de Cloudflare, *Analytics & Logs → Web Analytics → Add a site*, introduce el dominio y copia el **token** del fragmento que te muestra (`"token": "…"`). Ponlo en la variable `PUBLIC_CF_ANALYTICS_TOKEN` y vuelve a desplegar. La web solo carga el script si el token no está vacío y en producción.

Cloudflare Web Analytics no usa cookies ni identificadores persistentes, por eso no hace falta banner (ver la política de cookies).

---

## 6. Verificación

Antes de cada publicación importante:

```bash
npm run check && npm run build && npm run verify
npm run preview            # en otra terminal
npm run lighthouse && npm run screenshots
```

Resultados de la v1: ver `reports/lighthouse/RESUMEN.md` y `reports/screenshots/`.
