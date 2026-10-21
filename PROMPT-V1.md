# Encargo: web de visitas guiadas en Osuna (versión 1)

Vas a construir de principio a fin, sin pedirme aprobación intermedia, una web promocional para **visitas turísticas guiadas en Osuna (Sevilla)**. Es un proyecto real: la guía es una profesional local y la promoción está financiada por el Ayuntamiento de Osuna. Esta es la **versión 1**. Parte de la información aún no está confirmada, así que inventarás datos verosímiles **solo donde se indica** y los dejarás marcados para sustituirlos en la versión 2.

**Nota sobre la carpeta:** este archivo (`PROMPT-V1.md`) está en la raíz del proyecto. No lo borres ni lo modifiques. Si el generador de Astro protesta porque la carpeta no está vacía, crea el proyecto igualmente en la raíz (por ejemplo, generándolo en una carpeta temporal y moviendo después su contenido), sin anidarlo en una subcarpeta.

## 1. Objetivo

Una web sencilla, rápida y con personalidad propia cuyo único objetivo es que el visitante **contacte por WhatsApp o teléfono para reservar una visita**. Todo el diseño debe empujar a esa acción, sin distracciones.

## 2. Stack y despliegue (decisiones ya tomadas)

- **Astro** (última versión estable), salida 100 % estática, sin framework de UI. JavaScript mínimo, solo donde haga falta (menú móvil, galería, mapa).
- **i18n nativo de Astro** con tres idiomas: `es` (por defecto, en la raíz `/`), `en` (`/en/`) y `de` (`/de/`). Pon un selector de idioma visible en la cabecera. Todos los textos deben ir en archivos de traducción, nunca escritos a mano dentro de los componentes.
- **Todos los datos de negocio centralizados** en un único archivo, por ejemplo `src/data/site.ts`: teléfono, WhatsApp, rutas, precios, horarios, punto de encuentro e idiomas. En la v2 solo se tocará ese archivo y los textos de traducción.
- Despliegue previsto en **Cloudflare Pages** (gratuito). Aún no hay dominio, así que la URL base debe ser configurable con una variable en `astro.config` o en `.env`.
- **Analítica: Cloudflare Web Analytics**, que no usa cookies y por tanto no necesita banner. Deja el snippet preparado con un token configurable y desactivado mientras el token esté vacío.
- Fuentes autoalojadas con `@fontsource`. No uses Google Fonts por CDN, por el RGPD.
- Imágenes optimizadas con `astro:assets`: formatos AVIF/WebP, `srcset`, *lazy loading* salvo en el hero, y `width`/`height` siempre definidos.
- Inicializa un repositorio git y haz commits en los hitos principales.

## 3. Diseño

**El cliente odia los diseños con aspecto de plantilla.** Esta es la parte más importante del encargo.

### Dirección general

Estilo **moderno y minimalista, con calidez local**. Debe parecer una web cuidada de turismo patrimonial, con identidad propia. Punto de partida:

- **Paleta inspirada en la piedra de Osuna:**
  - fondo claro tono piedra o crema;
  - texto casi negro cálido;
  - un acento terracota u ocre para los botones de acción;
  - un verde oliva o azul profundo como color secundario muy puntual.
- Define los colores como variables CSS y comprueba que el contraste cumple **WCAG AA**.
- **Tipografía:** una serif con carácter para los titulares (por ejemplo Fraunces o Cormorant Garamond) y una sans limpia para el texto (por ejemplo Inter o Source Sans 3). Puedes proponer otras si encajan mejor con tu concepto.
- **La fotografía es protagonista.**
- **Mobile-first.** La mayoría de visitas llegarán desde el móvil.
- **Botón flotante de WhatsApp** siempre visible en móvil, discreto en escritorio.
- Animaciones mínimas y sutiles que respeten `prefers-reduced-motion`.
- **Logo:** propón uno tipográfico sencillo en SVG, con el nombre comercial provisional (ver sección 5) y quizá un pequeño detalle gráfico (por ejemplo un arco o una silueta de la Colegiata). Debe poder sustituirse fácilmente.
- Crea también el **favicon** (SVG + PNG) y una **imagen Open Graph** 1200×630 por idioma.

### Reglas anti-plantilla (obligatorias)

- **Evita los patrones genéricos de landing:**
  - hero con título centrado y dos botones sobre una foto oscurecida;
  - rejilla uniforme de tarjetas iguales;
  - secciones apiladas todas con el mismo ritmo y espaciado;
  - iconos decorativos de librería;
  - degradados morados;
  - sombras suaves en todo;
  - esquinas redondeadas por defecto en cada elemento.
- **Antes de escribir código de la interfaz, crea `DESIGN.md`** con una dirección visual propia:
  - el concepto (por ejemplo, editorial de revista de viajes o guía impresa de patrimonio);
  - la retícula y la escala tipográfica;
  - el uso del color y el tratamiento de las fotos;
  - **3–4 decisiones distintivas** que hagan la web reconocible.

  Después síguela con disciplina.
- **Composición editorial:**
  - maquetación asimétrica y tipografía serif grande con carácter;
  - fotos a sangre o con encuadres variados;
  - rutas presentadas con ritmo variado, no siete tarjetas clónicas;
  - detalles gráficos inspirados en Osuna (arcos, piedra, azulejería del Monasterio de la Encarnación) usados con mesura.
- Cuando tengas las capturas de Playwright (sección 9), **critícalas con ojo de diseñador**. Si alguna sección parece de plantilla, rehazla antes de terminar. Documenta en `DESIGN.md` qué cambiaste y por qué.

## 4. Estructura: una sola página (*one-page*) por idioma

Una landing por idioma con estas secciones, en este orden, y navegación con anclas:

1. **Hero:** titular potente, subtítulo, CTA principal "Reservar por WhatsApp" y CTA secundario "Llamar". Añade una línea con los idiomas de las visitas (español, inglés, alemán e italiano).

2. **Rutas:** cada visita con imagen, nombre, descripción breve de 2–3 líneas, duración, idiomas, precio orientativo y un botón "Reservar esta ruta". Ese botón abre WhatsApp con un mensaje prerrellenado que incluye el nombre de la ruta y está escrito en el idioma de la página. Las rutas son:
   - Colegiata de Santa María de la Asunción y Sepulcro Ducal
   - Antigua Universidad
   - Monasterio de la Encarnación
   - Calle San Pedro y palacios barrocos
   - Las Canteras, necrópolis y zona arqueológica (teatro romano)
   - Osuna de cine: escenarios de rodaje de *Juego de Tronos*
   - Osuna nocturna

   Debajo, un bloque destacado: **"Visitas a medida"**, para particulares, grupos, colegios y empresas, que se adaptan en itinerario y duración. Lleva su propio CTA a WhatsApp.

3. **Galería:** 8–12 fotos con *lightbox* ligero y accesible (teclado y Esc), hecho a mano o con una librería muy pequeña.

4. **FAQ:** acordeón con `<details>`/`<summary>`. Unas 8 preguntas: cómo reservar, idiomas, duración, precios y descuentos, punto de encuentro, accesibilidad, qué pasa si llueve o hace mucho calor (en verano, muy importante en Osuna), cancelaciones, y entradas a monumentos (si están incluidas o no).

5. **Mapa:** muestra el punto de encuentro con **Leaflet + teselas de OpenStreetMap**, que no usan cookies. No uses el embed de Google Maps. Añade un enlace "Cómo llegar" que abra Google Maps en una pestaña nueva.

6. **Contacto:** teléfono (`tel:`), WhatsApp (`wa.me` con mensaje prerrellenado) y horario de atención.
   - **No hay formulario, redes sociales ni reseñas.** No inventes testimonios ni valoraciones bajo ningún concepto.
   - **No hay sección "Sobre la guía".**

**Pie de página:** espacio reservado para el logo del Ayuntamiento de Osuna, con el texto "Con la colaboración del Ayuntamiento de Osuna" (usa un placeholder, no descargues ni imites su escudo), enlaces legales, créditos de las fotos y selector de idioma.

## 5. Contenido: qué es real y qué se inventa

**Datos reales confirmados:**
- Rutas listadas arriba.
- Visitas en español, inglés, alemán e italiano.
- Duración aproximada de 3 horas.
- Visitas para particulares, grupos y colegios, adaptables.
- Reserva por WhatsApp o llamada.
- No hay redes sociales.

**Datos que debes inventar de forma verosímil y marcar:** nombre comercial, teléfono (usa un número claramente ficticio, por ejemplo `+34 600 000 000`), precios (por ejemplo "desde X €/persona", con precio de grupo y de colegio "a consultar"), horarios y días, punto de encuentro (pon uno lógico, como la Oficina de Turismo o la Plaza Mayor de Osuna), número de guía oficial y política de cancelación.

Reglas obligatorias para el contenido inventado:
- Cada dato inventado lleva al lado, en el código, el comentario `// TODO-V2: dato provisional`.
- En desarrollo (`astro dev`), muéstralo con un subrayado o borde discontinuo para identificarlo de un vistazo. Ese marcado visual **no debe aparecer en el build de producción**.

**Contenido histórico y patrimonial: no inventes datos.** Usa solo datos que puedas sostener (fechas, autores, estilos) y redacta de forma general cuando no estés seguro.
- La ruta de *Juego de Tronos* debe hablar de "escenarios de rodaje" sin usar logos, imágenes ni marcas de la serie.

**Traducciones:**
- Inglés y alemán naturales, de nivel profesional y orientados a turistas, no literales.
- Los mensajes prerrellenados de WhatsApp también van traducidos.

## 6. Imágenes

- Usa **solo imágenes con licencia libre**: Wikimedia Commons (CC BY, CC BY-SA, CC0 o dominio público) o Unsplash/Pexels.
- Descárgalas a `src/assets/` y no las enlaces en caliente.
- Mantén un archivo `src/data/credits.ts` con, para cada imagen: archivo, autor, licencia y URL de origen.
- Muestra los créditos en una página `/creditos` (traducida) enlazada desde el pie.
- Escribe textos `alt` descriptivos en los tres idiomas.
- Busca al menos una imagen de cada ruta y elige fotos de calidad que encajen con la dirección visual de `DESIGN.md`. Si hace falta, recórtalas o trátalas para que el conjunto se vea coherente.
- Si no encuentras una imagen libre adecuada para algo, usa un placeholder elegante y anótalo en el archivo de preguntas.

## 7. SEO (completo)

- `title` y `meta description` únicos y optimizados por idioma, con búsquedas como "visitas guiadas Osuna", "guided tours Osuna" y "Führungen Osuna".
- `hreflang` entre los tres idiomas más `x-default`, `canonical` y Open Graph + Twitter Cards.
- `@astrojs/sitemap` con soporte i18n y un `robots.txt`.
- Datos estructurados JSON-LD:
  - `LocalBusiness` (o `TouristInformationCenter`/`TravelAgency`, el que encaje mejor) con área de servicio en Osuna;
  - un `TouristTrip` por ruta, con `offers` cuando haya precio;
  - `FAQPage` para las preguntas frecuentes.
- HTML semántico, un solo `h1` por página y jerarquía de encabezados correcta.
- Páginas `404` personalizadas y traducidas.

## 8. Legal (España / UE)

Páginas traducidas y enlazadas desde el pie:
- **Aviso legal** (LSSI-CE), con los datos del titular como placeholders `TODO-V2`.
- **Política de privacidad** (RGPD). Debe cubrir el contacto por WhatsApp y teléfono, y la analítica sin cookies.
- **Política de cookies**, breve, indicando que la web **no usa cookies** propias ni de terceros. Por eso no hay banner.

Asegúrate de que realmente sea así: nada de embeds de Google, YouTube ni fuentes externas.

## 9. Verificación final (obligatoria, no termines sin hacerla)

**Accesibilidad:** WCAG 2.1 AA, con foco visible, navegación por teclado, `aria-label` en los botones de icono, contraste correcto y `lang` correcto en cada página.

**Pasos:**

1. Ejecuta `npm run build` y confirma que termina sin errores ni warnings relevantes.
2. Arranca `npm run preview` y pasa **Lighthouse** (por ejemplo `npx lighthouse` con Chrome headless) a `/`, `/en/` y `/de/`, en móvil y en escritorio. Guarda los informes en `/reports`. El objetivo es **≥ 95 en las cuatro categorías**. Si algo baja de 95, corrígelo y repite.
3. **Revisión responsive con Playwright:** capturas de página completa de cada idioma a 375, 768, 1280 y 1920 px de ancho, guardadas en `/reports/screenshots`.
   - Ábrelas y revísalas tú mismo.
   - Corrige desbordamientos, solapes o textos cortados. El alemán es más largo: compruébalo especialmente.
   - Haz además la **crítica anti-plantilla** de la sección 3.
4. Comprueba que no hay enlaces rotos y que los enlaces `wa.me` y `tel:` están bien formados en los tres idiomas.
5. Valida el JSON-LD (que sea JSON válido y tenga los campos requeridos) y revisa el sitemap y los `hreflang`.
6. Confirma que el marcado visual `TODO-V2` no aparece en el build de producción.

## 10. Entregables

1. **El proyecto Astro** completo y funcionando, con su historial de git.
2. **`DESIGN.md`**: la dirección visual y los ajustes tras la revisión.
3. **`README.md`** en español con:
   - qué es el proyecto;
   - requisitos e instalación;
   - cómo editar datos y textos (rutas, precios, teléfono, traducciones e imágenes con sus créditos);
   - cómo añadir un idioma (por ejemplo, italiano);
   - **despliegue paso a paso en Cloudflare Pages** (conectando un repositorio de GitHub o con Wrangler), cómo configurar el dominio cuando lo haya y cómo activar Cloudflare Web Analytics.
4. **`PREGUNTAS-CLIENTE.md`**: un documento en español, con tono cercano y listo para enviar a la guía, para conseguir los datos reales. Debe incluir:
   - Una **tabla con todo lo inventado**: dato, valor provisional y dónde aparece.
   - Preguntas agrupadas por bloques:
     - **Identidad:** nombre comercial, si quiere logo, número de guía oficial de la Junta de Andalucía y datos fiscales para el aviso legal.
     - **Contacto:** teléfono, si es el mismo número para WhatsApp, y horario de atención.
     - **Rutas:** precios por ruta, por grupo y por colegio, días y horarios, punto de encuentro de cada una, si las entradas a monumentos están incluidas, accesibilidad, y si la nocturna y la de *Juego de Tronos* son de temporada.
     - **Política de cancelación y mal tiempo.**
     - **Ayuntamiento:** si hay que incluir su logo o texto obligatorio, y si tienen un manual de imagen o requisitos de publicidad institucional.
     - **Fotos propias** que quiera aportar.
     - **Dominio deseado.**
     - **Validación de los textos** de cada ruta.
   - Escribe las preguntas de forma que se puedan responder rápido, con opciones cuando tenga sentido.
5. **`/reports`** con los informes de Lighthouse y las capturas.
6. Un **resumen final** en la conversación: qué se ha hecho, puntuaciones de Lighthouse, decisiones de diseño principales y lista de pendientes para la v2.

Empieza ya y trabaja de forma autónoma hasta completar todo, incluida la verificación.
