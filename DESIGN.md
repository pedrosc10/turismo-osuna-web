# DESIGN.md — Dirección visual

> Proyecto: web de visitas guiadas en Osuna. Las secciones 1–10 son la dirección visual de la v1 (escrita **antes** de maquetar) y su registro de cambios; siguen vigentes. La sección 11 recoge los cambios de la v2 (web multipágina e inicio corto).

## 1. Concepto: «Cuaderno de piedra»

La web se plantea como **una guía impresa de patrimonio**, de las que se compran en la librería de un museo: papel color piedra, tipografía serif grande, fotos con pie numerado («fig. 3»), fichas técnicas con filetes finos y un índice de itinerarios numerado en romanos. Encima de esa base editorial va una capa contemporánea: mucho aire, composición asimétrica, color plano y una sola llamada a la acción que se repite con disciplina (WhatsApp).

La piedra de Osuna —una calcarenita dorada que se extrae desde época antigua en Las Canteras y con la que se levantó buena parte de la villa— da la paleta. La arquitectura renacentista (arcos de medio punto de la Colegiata y del patio de la Universidad) da la única forma curva que se permite el diseño. Los azulejos de la Encarnación aportan un único motivo ornamental, usado con mesura.

Lo que **no** es: una landing de SaaS con hero centrado, tarjetas clónicas, iconos de librería, sombras difusas ni esquinas redondeadas por defecto.

## 2. Retícula

- **Móvil (base, < 48rem):** 4 columnas, margen lateral de 20 px, medianil 16 px. Las fotos importantes van a sangre (de borde a borde).
- **Tableta (≥ 48rem):** 8 columnas, margen 32 px.
- **Escritorio (≥ 64rem):** 12 columnas, ancho máximo 1320 px, medianil 24 px. Se reserva una **columna de margen** (cols. 1–2) para las etiquetas de sección y las cartelas, como el margen de una guía impresa. El texto corrido nunca supera ~62 caracteres.
- La composición es **asimétrica**: los bloques de texto arrancan en la col. 2, 3 o 7 según la sección, nunca centrados. Las fotos rompen la retícula hacia el borde de la página.

## 3. Escala tipográfica

- **Titulares:** *Fraunces* (variable, autoalojada con `@fontsource-variable`). Serif «old style» con contraste suave y algo de rareza; se usa en pesos 300–500, con eje óptico. La **cursiva** se reserva para una sola palabra o frase por titular («Osuna, *piedra a piedra*»).
- **Texto:** *Source Sans 3* (variable). Legible en móvil, con versalitas simuladas mediante `letter-spacing` + mayúsculas en tamaño pequeño para etiquetas.
- Escala modular fluida (`clamp`), razón ~1,25 en móvil y ~1,333 en escritorio:

| Token | Uso | Móvil → Escritorio |
|---|---|---|
| `--step--1` | etiquetas, pies de foto | 0,82 → 0,875 rem |
| `--step-0` | texto | 1,0625 → 1,125 rem |
| `--step-1` | entradilla | 1,25 → 1,4 rem |
| `--step-2` | h3 | 1,5 → 1,9 rem |
| `--step-3` | h2 | 1,9 → 2,9 rem |
| `--step-4` | numerales de ruta | 3 → 5,5 rem |
| `--step-5` | h1 del hero | 2,7 → 6,4 rem |

Interlineado: 1,55 en texto, 1,02–1,1 en titulares grandes. Titulares con `text-wrap: balance`, párrafos con `text-wrap: pretty` y `hyphens: auto` (importante para el alemán).

## 4. Color

Definido como variables CSS en `src/styles/global.css`. Contrastes medidos (WCAG 2.1):

| Variable | Valor | Uso | Contraste |
|---|---|---|---|
| `--stone` | `#F2EADB` | fondo general (piedra clara) | — |
| `--stone-2` | `#E6D9C0` | bloques de apoyo (FAQ, ficha) | — |
| `--paper` | `#FAF6EE` | texto sobre botón, cartelas | — |
| `--ink` | `#211B15` | texto principal, casi negro cálido | 14,3 : 1 sobre piedra |
| `--ink-2` | `#5B4D3F` | texto secundario | 6,8 : 1 sobre piedra |
| `--terra` | `#A3401F` | **acción** (botones, enlaces activos) | 5,9 : 1 texto papel sobre terracota |
| `--terra-dark` | `#8A3418` | hover/active del botón | 7,5 : 1 |
| `--olive` | `#4E5631` | secundario muy puntual (cenefa, numerales finos) | 6,5 : 1 sobre piedra |
| `--night` | `#16233A` | fondo de la ruta nocturna y del pie | — |
| `--night-ink` | `#EDE3D0` | texto sobre noche | 12,4 : 1 |
| `--ochre` | `#B8862F` | acento sobre fondo noche y filetes | 4,9 : 1 sobre noche (no se usa para texto sobre piedra) |

Reglas: la terracota es **solo** para acciones; nada decorativo la usa, para que el ojo aprenda que «terracota = reservar». El ocre nunca va como texto sobre piedra (2,7 : 1). Sin degradados.

## 5. Tratamiento de las fotos

- Todas las fotos (Wikimedia Commons, licencias CC BY / CC BY-SA / dominio público) pasan por el mismo **etalonado cálido**: saturación −12 % y ligero desplazamiento hacia el ocre, para que fotos de autores distintos parezcan de la misma serie.
- **Nunca se oscurecen para poner texto encima.** El texto va al lado o debajo de la foto, como en una revista. La única excepción es la ruta nocturna, donde la foto es un **duotono azul noche / luz de farola** (tratamiento evidente, no una falsa foto nocturna) y el texto va sobre la zona de cielo.
- Pies de foto en cursiva, numerados («fig. 1 — Colegiata de Santa María de la Asunción»), como en una guía.
- Encuadres variados: vertical en arco, panorámica a sangre, cuadrado, detalle recortado. Nunca todas con la misma proporción.

## 6. Decisiones distintivas (lo que hace la web reconocible)

1. **El arco de medio punto como único gesto curvo.** La foto del hero y dos fotos de rutas se recortan con remate en arco (como las arquerías del patio de la Universidad). Todo lo demás —botones, fotos, bloques— es **de esquina viva**. Así el arco se convierte en firma, no en tic.
2. **Índice de itinerarios numerado en romanos (I–VII)** con numerales Fraunces enormes y finos. Cada ruta usa una de **cuatro composiciones** distintas (destacada a sangre, pareja desfasada, fila de índice compacta, nocturna invertida), de modo que las siete no parecen tarjetas clónicas.
3. **Cartelas de museo en vez de iconos.** Duración, idiomas, precio, punto de encuentro y horarios se presentan como cartelas: etiqueta en versalitas + valor, separados por filetes finos. Cero iconos decorativos; los únicos pictogramas son funcionales (WhatsApp, teléfono, cerrar/flechas en la galería) y llevan `aria-label`.
4. **Cenefa de azulejo de la Encarnación.** Un único patrón SVG geométrico (estrella de ocho puntas en retícula, inspirado en el alicatado sevillano) en terracota y oliva, que aparece exactamente **dos veces**: al abrir «Visitas a medida» y sobre el pie de página.
5. (Extra) **La noche como ruptura.** La ruta VII rompe la página con un bloque azul noche a sangre: es el único cambio de fondo fuerte antes del pie y marca el final del índice de rutas.

## 7. Ritmo de secciones

Cada sección tiene un ritmo distinto, a propósito:

- **Hero:** denso y alto; titular enorme alineado a la izquierda que se monta ligeramente sobre la foto en arco (a la derecha en escritorio, encima a sangre en móvil). CTA principal como bloque terracota rectangular; «Llamar» como enlace subrayado, no como segundo botón gemelo.
- **Rutas:** la sección más larga; espaciado generoso, composiciones alternas.
- **Visitas a medida:** banda panorámica a sangre + bloque con cenefa, texto en dos columnas desiguales.
- **Galería:** mosaico irregular (celdas de distintos tamaños), casi sin margen.
- **FAQ:** columna estrecha desplazada a la derecha, con el título en la columna de margen; acordeón `<details>` con filetes, sin cajas.
- **Mapa + contacto:** división 7/5 con el mapa a sangre a un lado y la ficha de contacto como cartela grande al otro.
- **Pie:** azul noche, con cenefa encima.

## 8. Movimiento

Mínimo: aparición suave (opacidad + 12 px) de las fotos al entrar en pantalla y transición de color en botones. Todo se anula con `prefers-reduced-motion: reduce`. Sin parallax ni carruseles.

## 9. Accesibilidad

Foco visible propio (contorno de 3 px ocre/terracota con separación), objetivos táctiles ≥ 44 px, enlace «Saltar al contenido», `lang` por página, encabezados jerárquicos (un solo `h1`), lightbox con trampa de foco y cierre con Esc.

---

## 10. Registro de cambios tras la revisión con capturas

Revisé las capturas de `reports/screenshots/` (375, 768, 1280 y 1920 px, en los tres idiomas) con ojo de diseñador y con la lista anti-plantilla de §1 delante. Cambios hechos:

| # | Qué vi | Por qué era un problema | Qué cambié |
|---|---|---|---|
| 1 | En las rutas II–III (pareja), la cartela caía en la estrecha columna del numeral y el botón se estiraba a su lado como un bloque terracota enorme. | Rompía la retícula y el botón parecía un banner. Causa: el estilo con ámbito de Astro no alcanzaba al componente hijo `RouteFacts`. | Selector `:global()` para colocar todo lo que no es numeral en la columna de texto. |
| 2 | El orden de las rutas se lograba con `order` de CSS. | El orden de tabulación no coincidía con el visual (WCAG 2.4.3). | Reestructuré el marcado: I (destacada) → II–III (pareja) → IV (destacada en espejo) → V–VI (índice) → VII (noche), en ese orden en el DOM. La destacada pasó a su propio componente `RouteFeature`. |
| 3 | La primera cenefa era una estrella de puntas finas en terracota. | Parecía una tira de estrellas navideñas, no azulejería. Demasiado «decoración de plantilla». | Redibujada como alicatado: estrella de ocho puntas formada por dos cuadrados girados, con hueco central y cuartos de rombo en las esquinas que forman rombos al repetirse. |
| 4 | En la galería, la aldaba ocupaba la celda grande (3×2) y se veía borrosa y sin contexto. | Un detalle ampliado a tamaño protagonista parece un error, no una decisión. | Reordené la galería: la aldaba va a la celda vertical estrecha (su proporción natural) y el patio de la Universidad a la grande; la panorámica de la plaza de toros a la celda ancha. |
| 5 | En 375 px el nombre del logo se montaba sobre el selector de idioma. | Texto solapado; además el selector debía seguir visible en la cabecera. | En pantallas < 480 px el selector muestra solo los otros dos idiomas, el botón de menú queda como icono (con nombre accesible) y el logo se reduce ligeramente. |
| 6 | En móvil, el bloque de texto del hero (que se monta sobre la foto) tapaba el pie de foto «fig. 1». | Quedaban restos de texto asomando bajo el titular. | El pie de la foto del hero solo se muestra en escritorio, donde hay sitio. |
| 7 | La ruta nocturna enseñaba sobre todo cielo vacío. | Media pantalla de gris azulado sin información. | Encuadre anclado abajo (`object-position: 50% 100%`) para que dominen los tejados y las torres. |
| 8 | La foto nocturna y la panorámica de «Visitas a medida» iban pegadas. | Dos imágenes a sangre seguidas se leían como una sola franja confusa. | Aire entre ambas (56/96 px), para que la noche cierre el índice de rutas y la panorámica abra una sección nueva. |
| 9 | La cenefa del pie no tenía margen y el logo quedaba pegado a ella. | Mismo problema de ámbito CSS que el n.º 1. | Selector `:global()` en el pie. |
| 10 | «10:00 y 17:30 h» partía la «h» sola en otra línea. | Viuda tipográfica en la cartela. | Espacio irrompible antes de «h» / «Uhr». |
| 11 | En la cartela de contacto, la etiqueta larga «Guía oficial de turismo de Andalucía» ensanchaba la columna. | Valores empujados a la derecha y horario partido. | Columna de etiqueta fija (11 rem) que permite partir la etiqueta. |
| 12 | Los idiomas de cada ruta salían siempre en el orden «español, inglés, alemán…». | En la página alemana lo natural es empezar por el alemán. | El idioma de la página va primero en la cartela. |

Además, por rendimiento (Lighthouse móvil 91 → 98): CSS en línea en el HTML, la hoja de Leaflet se carga solo al llegar al mapa, Fraunces pasa del archivo con eje óptico (67 + 82 KB) al de peso (37 + 46 KB) y se ajustó la calidad AVIF. Visualmente no hay diferencia apreciable.

**Crítica anti-plantilla, resultado final:** el hero no está centrado ni oscurecido, y la foto en arco es la firma; las siete rutas usan cuatro composiciones distintas; no hay iconos decorativos (solo WhatsApp, teléfono y los controles de la galería); no hay sombras difusas, degradados ni esquinas redondeadas salvo el arco; y cada sección tiene su propio ritmo y su propio fondo (piedra, piedra oscura, papel, noche). La sección más «estándar» sigue siendo la FAQ, que he dejado sobria a propósito: título fijo en la columna de margen y filetes numerados, sin cajas.

---

## 11. Versión 2: de una página a muchas, y un inicio corto

La v2 cambia la arquitectura (ver `PROMPT-V2.md`): el inicio pasa de ser la web entera a ser un **resumen que lleva a las páginas de ruta**. La dirección visual («Cuaderno de piedra») no cambia; lo que cambia es dónde vive cada cosa.

### 11.1. Longitud del inicio

Medido con `npm run screenshots` (Playwright, 375 px de ancho; «pantalla» = 812 px, el alto útil de un iPhone de tamaño medio). Ver `reports/v2/screenshots/ALTURAS.md`.

| | v1 | v2 |
|---|---|---|
| Español | 15.329 px (18,9 pantallas) | 4.014 px (4,9 pantallas) |
| Inglés | 15.298 px (18,8) | 3.962 px (4,9) |
| Alemán | 15.684 px (19,3) | 4.068 px (5,0) |

En las dos primeras pantallas se ve qué se ofrece (titular, hero, idiomas, credencial, «entradas incluidas» y el arranque del índice de rutas) y cómo reservar (WhatsApp y «Llamar»; además, el botón flotante).

### 11.2. Qué cambió en el inicio y por qué

| Antes (v1) | Ahora (v2) | Por qué |
|---|---|---|
| 7 rutas con cuatro composiciones grandes (destacada, pareja, índice, noche), cada una con ficha y botón | **Índice de itinerarios** compacto: numeral romano, nombre, una frase y una miniatura, todo un enlace a su página. La VII sigue rompiendo en azul noche | La ficha completa vive ahora en la página de cada ruta. El índice conserva la firma de la v1 (numerales romanos, filetes, la noche como ruptura) sin ser una rejilla de tarjetas |
| Banda panorámica + panel con cuatro públicos | Bloque de **dos líneas** con la cenefa, CTA de WhatsApp y enlace a «Visitas a medida» | El detalle está en su página |
| Galería de 12 fotos con lightbox | **Fuera del inicio.** Las fotos se reparten por las páginas de ruta (3–5 por ruta, con encuadres variados) | Era la sección que más alargaba la página y no llevaba a reservar. En las rutas las fotos ilustran lo que se cuenta y son entrada desde Google Imágenes |
| FAQ de 9 preguntas | **5 preguntas** + «Todas las preguntas» | La página de FAQ tiene las 13 generales |
| Mapa (7/12) y contacto en dos secciones | **Una sola sección** «Contacto y punto de encuentro», con el mapa debajo en móvil y al lado en escritorio | Menos scroll; el mapa en móvil baja a 176 px |
| — | **Franja «Lo esencial»**: 3 h · 30 personas · 24 h · entradas · reserva | Las cifras que más se preguntan, como cartela de museo (serif grande + filete), sin iconos |
| Línea de idiomas en el hero | Línea de distintivos: **ES · EN · DE · IT**, «Guía oficial GT/00975», «Entradas incluidas» | Pedido en el encargo; la credencial es una señal de confianza que la competencia no tiene |
| Pie con recuadro del Ayuntamiento | Pie con la credencial, **las 7 rutas** enlazadas y los enlaces legales. El recuadro del Ayuntamiento queda en `CouncilCredit.astro`, desactivado | Decisión de la clienta; las rutas en el pie evitan páginas huérfanas. En el inicio no se repiten (están justo encima) |

### 11.3. Páginas nuevas

- **Ruta** (`RoutePage.astro`): cabecera con migas de pan, foto principal (en arco para I y IV, como en la v1), numeral, `h1`, texto validado, CTA de WhatsApp con el mensaje de esa ruta y «Llamar», y la credencial. Debajo, la **ficha rápida** como cartela de museo (en escritorio, fija en la columna de margen, como las etiquetas de una guía impresa) y el texto en la columna ancha, con las fotos intercaladas: una apaisada tras el primer apartado y una pareja desfasada (vertical + cuadrada, y una panorámica si hay tercera). Recorrido numerado con filetes, recuadro «En familia» con filete oliva, preguntas, cierre «¿Reservamos?» y «Otras rutas» con el mismo índice del inicio. La ruta nocturna invierte la cabecera y el cierre en azul noche.
- **Visitas a medida**: banda panorámica a sangre con la cenefa (segunda y última aparición en esa página, junto con la del pie), públicos y pasos como listas con filetes, ficha y las 7 rutas para combinar.
- **Preguntas frecuentes**: título fijo en la columna de margen (como la FAQ de la v1) y las preguntas agrupadas en tres bloques con numeración continua.

### 11.4. Revisión con capturas (v2) y cambios

| # | Qué vi | Qué cambié |
|---|---|---|
| 1 | El inicio en móvil medía 5.065 px (6,2 pantallas). Las frases de cada ruta ocupaban 3–4 líneas | Frases de ≤ 60 caracteres en los 3 idiomas, miniaturas de 64 px y espaciados más ajustados |
| 2 | Seguía en 5,5 pantallas | «A medida» reducido a las dos líneas del encargo; sin la lista de rutas en el pie del inicio; datos clave en 3 + 2 columnas; ficha de contacto en dos columnas |
| 3 | La línea de distintivos del hero partía con un «·» al principio de renglón | En móvil, idiomas a la izquierda y los dos distintivos apilados a la derecha; separadores solo desde 768 px |
| 4 | El horario partía «17:00–20:30» por el guion | Horas sin salto de línea |
| 5 | En la ficha alemana, «GÄSTEFÜHRERIN» se partía letra a letra | Columna de etiquetas al 40 % y guionado en vez de corte arbitrario |
| 6 | En «Visitas a medida», la cabecera no tenía margen lateral (un `padding` anulaba el del `.wrap`) | Corregido; además, `npm run screenshots` revisa ahora **todas** las páginas buscando texto a menos de 12 px del borde, porque la comprobación de desbordamiento no lo detectaba |
| 7 | Esa nueva comprobación encontró que «Datenschutzerklärung» se cortaba en móvil (lo ocultaba `overflow-x: clip`) | Título de las páginas legales más pequeño en móvil y con corte de palabra |
| 8 | En móvil, la foto en arco de la ruta empujaba el `h1` y el botón fuera de la primera pantalla | Arco más bajo en móvil (4:3,4) |
| 9 | La panorámica de la Colegiata enseñaba sobre todo cielo | Encuadre desplazado hacia la villa |
| 10 | Lighthouse móvil de la Colegiata: 93 (LCP 3,3 s, foto de la portada de 163 KB) | Calidad 40 y tamaños más ajustados para la foto principal de las rutas: 98. La diferencia visual no se aprecia a doble densidad |

### 11.5. Crítica anti-plantilla (v2)

- **Inicio:** el riesgo era que el índice de rutas acabara pareciendo una lista de tarjetas. No lo parece porque no hay cajas: son filas de un índice impreso, con numerales romanos finos, filetes y miniaturas de encuadres distintos (arco en I y IV, apaisadas en el resto, en escritorio). La VII sigue rompiendo en azul noche. La franja de datos clave es tipográfica (serif grande sobre filete), sin iconos.
- **Página de ruta:** la plantilla es la misma para las siete rutas, lo que es inevitable y deseable en SEO, pero cada página varía en lo que más pesa visualmente: la foto (arco o recta, encuadres distintos de las fotos interiores) y, en la nocturna, todo el color de la cabecera y del cierre. Se mantiene la asimetría: columna de margen con la ficha y texto en la columna ancha.
- **Lo más «estándar»:** el bloque de cierre «¿Reservamos?» es un patrón de llamada a la acción reconocible. Lo he dejado así a propósito, porque es el momento de reservar, pero sin degradados, sombras ni centrado: titular en cursiva a la izquierda y el teléfono grande a la derecha.
- Siguen sin aparecer sombras difusas, degradados, iconos decorativos ni esquinas redondeadas (salvo el arco).
