# Encargo: web de visitas guiadas en Osuna (versión 2)

Ya existe la **versión 1** de esta web en este repositorio: Astro, en español, inglés y alemán, construida según `PROMPT-V1.md`. Ahora vas a hacer la **versión 2**, sin pedirme aprobación intermedia. Tiene tres objetivos, por orden de importancia:

1. **Ganar en SEO a la competencia directa** (sección 2). Es lo más importante del encargo.
2. **Hacer la página de inicio mucho más corta** (sección 3). Ahora tiene demasiado scroll y el visitante se cansa antes de llegar al final.
3. **Sustituir los datos inventados por los reales** (sección 4), que están en `RESPUESTAS-CLIENTE.md`.

Antes de empezar, lee `PROMPT-V1.md`, `DESIGN.md`, `RESPUESTAS-CLIENTE.md` y el código actual. Mantén la dirección visual de `DESIGN.md` y todas las reglas de la v1 que este documento no cambie: anti-plantilla, sin cookies, sin reseñas inventadas, no inventar datos históricos, y textos en archivos de traducción. No borres ni modifiques `PROMPT-V1.md`, `PROMPT-V2.md` ni `RESPUESTAS-CLIENTE.md`. Haz commits en los hitos principales.

## 1. La competencia

Hay una web que compite directamente con la nuestra: **visitasguiadasosuna.es**. Lo que sabemos de ella:

- Es un WordPress de **una sola página**, **solo en español**.
- Tiene un `title` largo («Visitas guiadas en Osuna, Sevilla | Tours privados y experiencias culturales») y una meta description de unas 200 caracteres.
- Repite mucho las palabras clave. Tiene **varios `h1`**, imágenes **sin `alt`** e incoherencias: el nombre del sitio en los metadatos es «Visitas guiadas en Pompeya», el email es de otro dominio (`info@visitarsevilla.com`) y mezcla enlaces `http` y `https`.
- Tiene unas 1.000 palabras, pero **ninguna página dedicada** a rutas o monumentos concretos. Nombra lugares como el Coto de las Canteras o la Encarnación sin explicarlos.
- Ofrece visitas privadas, Colegiata, Universidad y palacios, historia y arte, leyendas, familias y colegios, y rutas a medida. Duran 2 h o 3,5 h, cuestan «desde 150 €» por grupo y se reservan por WhatsApp o email.
- El guía se presenta como «Ignacio», sin titular identificado ni número de guía oficial.

En los resultados de búsqueda de «visitas guiadas Osuna» también aparecen intermediarios como Civitatis, Central de Reservas o Atrápalo. No es realista adelantarlos a todos en semanas. El objetivo inmediato es **ponernos por delante de visitasguiadasosuna.es** y **dominar las búsquedas largas y las de inglés y alemán**, donde esa web ni siquiera compite.

Si tienes acceso a la web, revisa visitasguiadasosuna.es para confirmar este análisis antes de empezar. No copies nada de su contenido.

## 2. Estrategia SEO (obligatoria)

### 2.1. Arquitectura: de una página a muchas

Esta es nuestra principal ventaja. La competencia tiene una sola URL; nosotros tendremos decenas de páginas indexables y bien enfocadas:

- **Inicio** corto, por idioma: `/`, `/en/`, `/de/`.
- **Una página por ruta**, por idioma (7 rutas × 3 idiomas = 21 páginas). Usa slugs descriptivos en cada idioma:
  - `/rutas/colegiata-sepulcro-ducal/`
  - `/en/tours/collegiate-church-ducal-tomb/`
  - `/de/fuehrungen/stiftskirche-herzogsgruft/`
  - … y equivalentes para el resto de rutas.
- **Página de visitas a medida**, para grupos, colegios y empresas, por idioma. Es una búsqueda con mucha intención («visita guiada Osuna colegio», «excursión escolar Osuna»).
- **Página de preguntas frecuentes completa**, por idioma. En el inicio solo quedan las 4–5 preguntas más importantes y un enlace a esta página.
- Mantén las páginas legales, la de créditos y la 404.

### 2.2. Contenido de cada página de ruta

Cada página de ruta debe tener:

- **`h1`** con la palabra clave natural en cada idioma: «Visita guiada a la Colegiata de Osuna», «Guided tour of the Collegiate Church of Osuna», «Führung durch die Stiftskirche von Osuna».
- **Foto principal** de la ruta y 2–4 fotos más. Así la galería se reparte entre las rutas en lugar de ocupar el inicio.
- **350–600 palabras útiles**:
  - qué se ve y por qué merece la pena;
  - qué incluye: entradas a monumentos incluidas;
  - duración aproximada, unas 3 horas, adaptable;
  - idiomas;
  - punto de encuentro;
  - si es una ruta para familias.
- **Ficha rápida** visible: duración, idiomas, punto de encuentro, «entradas incluidas», «precio a consultar» y grupo de hasta 30 personas.
- **CTA de WhatsApp** con el mensaje prerrellenado de esa ruta, en el idioma de la página. Colócalo arriba y al final.
- **2–3 preguntas frecuentes** propias de la ruta, con su JSON-LD `FAQPage`.
- **Enlaces internos** a 2–3 rutas relacionadas y a «Visitas a medida». No dejes páginas huérfanas.
- **Migas de pan** (*breadcrumbs*) con JSON-LD `BreadcrumbList`.

Reglas para el contenido:

- **No inventes datos históricos.** Usa solo datos que puedas sostener: fechas, autores, estilos, personajes. Los textos cortos de la v1 ya están validados por la clienta y deben servir de base, incluido el texto nuevo de la ruta IV que está en `RESPUESTAS-CLIENTE.md`.
- Todo el texto nuevo que amplíe lo validado debe pasar por la revisión de la clienta. Crea **`REVISAR-TEXTOS.md`** con el texto ampliado en español de cada ruta, para que ella lo revise. Las traducciones se harán a partir de su versión.
- Escribe para personas, no para buscadores. Nada de repetir la palabra clave ni de párrafos de relleno: es justo el error de la competencia.
- La ruta de *Juego de Tronos* sigue hablando de «escenarios de rodaje», sin logos ni imágenes de la serie.
- Traducciones al inglés y al alemán naturales, no literales, pensando en cómo busca un turista de esos países («Osuna Game of Thrones filming locations», «Osuna Sehenswürdigkeiten Führung»…).

### 2.3. SEO técnico

- `title` de **50–60 caracteres** y `meta description` de **140–155 caracteres**, únicos en cada página e idioma. Pon la palabra clave al principio y la marca al final (por ejemplo «Visita guiada a la Colegiata de Osuna | Osuna Paso a Paso»).
- **Un solo `h1` por página** y una jerarquía de encabezados correcta.
- `alt` descriptivo en todas las imágenes, en cada idioma. Las imágenes son una vía de entrada desde Google Imágenes.
- `hreflang` completo entre las versiones de **cada** página (no solo del inicio) más `x-default`, `canonical` absoluto en https y sitemap con todas las URLs y sus alternativas de idioma.
- Datos estructurados JSON-LD:
  - **`LocalBusiness`** (o `TouristInformationCenter`, el que encaje mejor) en el inicio, con:
    - nombre;
    - teléfono;
    - dirección de la Plaza Mayor como punto de encuentro, con `areaServed` Osuna;
    - idiomas (`knowsLanguage`: es, en, de, it);
    - horario de atención.

    No incluyas `aggregateRating` ni reseñas, porque no hay.
  - **`TouristTrip`** en cada página de ruta, con `itinerary`, `touristType` y `provider`. **Sin `offers` con precio**, porque los precios son a consultar.
  - `FAQPage` en el inicio, en la página de FAQ y en cada ruta, sin duplicar preguntas entre páginas.
  - `BreadcrumbList` en las páginas interiores.
- Muestra visiblemente la **credencial de guía oficial de turismo de Andalucía nº GT/00975** en el pie, en contacto y en cada página de ruta. Es una señal de confianza (E-E-A-T) que la competencia no tiene.
- La URL base del sitio sigue siendo **configurable en un solo sitio**. El dominio todavía no está decidido (ver la sección 5).
- Rendimiento: mantén el **Lighthouse ≥ 95** en las cuatro categorías también en las páginas nuevas.

### 2.4. Plan de SEO fuera de la web

Crea **`SEO-PLAN.md`** en español: una guía práctica, para Pedro y la clienta, de lo que hay que hacer fuera del código para adelantar a la competencia. Ordena las acciones por impacto. Como mínimo, debe incluir:

1. **Perfil de Empresa de Google (Google Business Profile).** Es la palanca más importante para búsquedas locales como «visitas guiadas Osuna», porque es lo que sale en el mapa. Explica paso a paso:
   - cómo crearlo como negocio con área de servicio;
   - qué categoría elegir;
   - qué descripción poner (propón el texto);
   - fotos y horario;
   - enlace a la web;
   - publicaciones periódicas.
2. **Reseñas reales**: cómo pedírselas a los clientes después de cada visita. Por ejemplo, con un enlace corto de reseña de Google para enviar por WhatsApp y un mensaje modelo en los tres idiomas para que lo envíe la guía. Nada de reseñas falsas.
3. **Enlaces entrantes de calidad**, con un mensaje modelo para pedir cada uno:
   - **web de turismo del Ayuntamiento de Osuna**: es el enlace más valioso, y el Ayuntamiento promociona las visitas;
   - Oficina de Turismo;
   - Turismo de la Provincia de Sevilla;
   - alojamientos y restaurantes de Osuna;
   - asociaciones de guías oficiales.
4. **Directorios y plataformas**: TripAdvisor, y opcionalmente GetYourGuide o Civitatis como canal adicional, con sus pros y contras (comisiones).
5. **Google Search Console y Bing Webmaster Tools**: alta, verificación del dominio, envío del sitemap y qué métricas mirar cada mes.
6. **Seguimiento**: cómo comprobar cada mes la posición frente a visitasguiadasosuna.es en «visitas guiadas Osuna», «guía turístico Osuna», «visita Colegiata Osuna», «Osuna guided tour» y «Führung Osuna».
7. **Expectativas realistas**: cuánto tarda normalmente en notarse.

## 3. Página de inicio más corta (obligatorio)

El inicio actual es demasiado largo. Objetivo: que en móvil se recorra entero en **unos 4–5 pantallazos como máximo**, y que el visitante vea en los dos primeros qué se ofrece y cómo reservar. El detalle vive ahora en las páginas de ruta, así que el inicio solo tiene que resumir y llevar hacia ellas.

Estructura nueva del inicio:

1. **Hero**: titular, subtítulo y CTA de WhatsApp, más el secundario «Llamar». En una línea: idiomas (ES · EN · DE · IT), «Guía oficial GT/00975» y «Entradas incluidas».
2. **Rutas, en formato compacto**: las 7 rutas en una lista o tira editorial, cada una con nombre, una frase, una imagen pequeña o recortada y un enlace a su página. Fuera las fichas largas de la v1. Debe seguir sin parecer una rejilla de tarjetas clónicas (ver `DESIGN.md`).
3. **Bloque «Visitas a medida»**: dos líneas, CTA de WhatsApp y enlace a su página.
4. **Datos clave** en una franja breve: unas 3 horas, hasta 30 personas, entradas incluidas, reserva previa y pago por adelantado, y cancelación gratuita hasta 24 h antes.
5. **FAQ corta**: 4–5 preguntas y un enlace a «Todas las preguntas».
6. **Contacto + mapa** en una sola sección compacta.

**La galería sale del inicio**: sus fotos se reparten por las páginas de ruta. Revisa el resultado con las capturas y, si aún parece largo, recorta más. Documenta en `DESIGN.md` qué has cambiado y por qué.

## 4. Datos reales

Toma todos los datos de `RESPUESTAS-CLIENTE.md`. Las secciones 0, 1 y 10 tienen las decisiones finales y la lista de cambios. Lo más importante:

- **Teléfono y WhatsApp**: +34 652 845 159 (`tel:+34652845159`, `https://wa.me/34652845159`).
- **Nº de guía oficial**: GT/00975.
- **Titular** (aviso legal y privacidad): Elena Gallardo Camuñez, **autónoma**, NIF 52561899-E, Calle Cruz 167, 41640 Osuna (Sevilla), elenagallardo1971@gmail.com.
- **Horario de atención**: se mantiene el provisional.
- **Precios**: todo **a consultar**. Ninguna cifra en la web ni en el JSON-LD. Usa «Precio a consultar según grupo y ruta» y «Descuentos para niños».
- **Entradas a monumentos incluidas.**
- **Pago por adelantado** al confirmar la reserva; el medio de pago se concreta entonces.
- **Sin salidas fijas**: todo con reserva previa, el cliente elige el día dentro de la disponibilidad de la guía. Quita todos los horarios fijos de las rutas y del JSON-LD.
- **Duración**: unas 3 horas, adaptable. **Grupo máximo**: 30 personas.
- **Punto de encuentro**: Plaza Mayor, puerta del Ayuntamiento, para todas las rutas. **Las Canteras**: «Esta ruta requiere vehículo propio. Te indicamos el punto de encuentro al reservar».
- **Cancelación**: gratis hasta 24 h antes, para todos. Con menos de 24 h no se devuelve el importe.
- **Calor en verano**: se mantiene el texto provisional.
- **Lluvia: no se menciona en ningún sitio.** Quítala de las FAQ y de cualquier texto, en los tres idiomas.
- **Si la guía no puede hacer la visita**, la hace otro guía oficial.
- **Accesibilidad**: «Si alguien del grupo va en silla de ruedas o con carrito, avísanos al reservar y adaptamos el recorrido».
- **Las visitas en italiano** las da la propia guía. No se añade la web en italiano.
- **Ayuntamiento**: quita el recuadro del logo del pie, pero deja el componente preparado y desactivado por si más adelante hay que ponerlo.
- **Fotos**: se siguen usando las de Wikimedia.
- **Ruta IV**: nuevo texto, el que está en `RESPUESTAS-CLIENTE.md`, sección 9.

Después busca en todo el proyecto que no quede ningún `TODO-V2` ni ningún dato ficticio: `600 000 000`, `GT-0000-SE`, `info@ejemplo.com`, cifras en euros, horarios fijos o «lluvia». Lo único que puede quedar pendiente es el dominio.

## 5. Dominio

`visitasguiadasosuna.es` **está cogido**: es el de la competencia. El dominio nuevo está pendiente de decidir, así que deja la URL base configurable y usa provisionalmente la de Cloudflare Pages. En `SEO-PLAN.md` incluye un apartado corto sobre el dominio:

- propón 4–5 opciones y recomienda una;
- explica que un dominio con la palabra clave exacta ya aporta poco al SEO, y que un dominio de marca corto y fácil de dictar por teléfono suele funcionar mejor;
- indica que hay que comprobar que esté libre en un registrador antes de decidir.

## 6. Verificación final (obligatoria)

1. `npm run build` sin errores ni warnings relevantes.
2. **Lighthouse** en móvil y escritorio para el inicio de los tres idiomas y para al menos **dos páginas de ruta** por idioma. Objetivo ≥ 95 en las cuatro categorías. Guarda los informes en `/reports/v2`.
3. **Capturas con Playwright** a 375, 768, 1280 y 1920 px del inicio y de una página de ruta, en los tres idiomas. Guárdalas en `/reports/v2/screenshots`.
   - Revísalas tú mismo.
   - Confirma que el inicio en móvil cabe en unos 4–5 pantallazos.
   - Comprueba que no hay desbordamientos, sobre todo en alemán.
   - Haz la crítica anti-plantilla.
4. Comprueba en todas las páginas:
   - que no hay enlaces internos rotos ni páginas huérfanas;
   - que los enlaces `wa.me` y `tel:` están bien formados en los tres idiomas;
   - que cada página tiene un único `h1`, `title` y `description` únicos y dentro de la longitud indicada, y `canonical` y `hreflang` correctos.
5. Valida el JSON-LD de cada tipo de página (JSON válido y campos requeridos) y revisa el sitemap.
6. Busca los datos ficticios del apartado 4 y confirma que no queda ninguno.

## 7. Entregables

1. La web v2 completa, con su historial de git.
2. **`REVISAR-TEXTOS.md`**: los textos ampliados de cada ruta en español, para que la clienta los valide.
3. **`SEO-PLAN.md`**: el plan de SEO fuera de la web y el apartado del dominio.
4. **`README.md`** actualizado: estructura de páginas, cómo añadir una ruta nueva y cómo cambiar el dominio.
5. **`DESIGN.md`** actualizado.
6. **`/reports/v2`** con los informes de Lighthouse y las capturas.
7. Un **resumen final** en la conversación:
   - qué ha cambiado;
   - número de páginas indexables por idioma;
   - longitud del inicio antes y después;
   - puntuaciones de Lighthouse;
   - lo que queda pendiente (dominio, validación de textos, acciones de `SEO-PLAN.md`).

Empieza ya y trabaja de forma autónoma hasta completar todo, incluida la verificación.
