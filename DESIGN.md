# DESIGN.md — Dirección visual

> Proyecto: web de visitas guiadas en Osuna (v1). Este documento se escribió **antes** de maquetar la interfaz y se ha seguido como guía. Al final está el registro de cambios tras la revisión con capturas.

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

_(Se completa después de la verificación con Playwright; ver más abajo.)_
