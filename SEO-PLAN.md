# Plan de SEO fuera de la web

Guía práctica para Pedro y Elena: lo que hay que hacer **fuera del código** para adelantar a visitasguiadasosuna.es en Google. Las acciones están ordenadas por impacto. La web ya está preparada (ver el final del documento); a partir de aquí, lo que más mueve la aguja es el Perfil de Empresa de Google, las reseñas y los enlaces.

> **Paso 0, imprescindible: poner el dominio.** Mientras la web esté en la dirección de pruebas (`*.workers.dev`), **todas las páginas llevan `noindex`** a propósito y Google no las mostrará. El SEO empieza a contar el día que se publique con el dominio definitivo. Ver el apartado 8.

---

## 0. Punto de partida: qué hace la competencia

Revisé visitasguiadasosuna.es el 23/10/2026 y se confirma el análisis del encargo:

| | visitasguiadasosuna.es | Nuestra web (v2) |
|---|---|---|
| Páginas indexables | 1 | 14 por idioma (42 en total) |
| Idiomas | Solo español | Español, inglés y alemán, con `hreflang` |
| `h1` | 3 en la misma página | 1 por página |
| Imágenes sin `alt` | 8 de 12 | Ninguna (salvo miniaturas decorativas con el nombre al lado) |
| Nombre del sitio en metadatos | «Visitas guiadas en Pompeya» | «Osuna Paso a Paso» |
| Email | info@visitarsevilla.com (otro dominio) | El de la titular |
| Enlaces | Mezcla `http` y `https` | Todo `https` |
| Guía | «Ignacio», sin número oficial | Guía oficial de turismo de Andalucía GT/00975, visible en todas las páginas |
| Páginas por ruta o monumento | Ninguna | Una por ruta, con recorrido, fotos, ficha y preguntas |
| Precio | «Desde 150 €» | A consultar (dato real de la clienta) |

Su ventaja es la antigüedad del dominio y que **ya está indexada**. Las nuestras son la calidad técnica, el contenido por ruta y los idiomas. La parte técnica ya está hecha; ahora toca la autoridad local (Perfil de Empresa, reseñas y enlaces), que es justo lo que ellos tampoco tienen trabajado.

---

## 1. Perfil de Empresa de Google (Google Business Profile) — impacto máximo

Para una búsqueda como «visitas guiadas Osuna», lo primero que ve la gente en el móvil es el **mapa con tres negocios** (el *local pack*). Ese bloque no depende de la web, sino del Perfil de Empresa. Es la palanca más importante del plan.

### 1.1. Crearlo como negocio con área de servicio

Elena no tiene un local abierto al público: las visitas empiezan en la Plaza Mayor. Por eso el perfil se crea como **negocio de área de servicio** (sin dirección visible):

1. Entra en <https://business.google.com> con la cuenta de Google que vaya a gestionar el negocio (mejor una cuenta del negocio que la personal; se pueden añadir más administradores después).
2. **Nombre de la empresa:** `Osuna Paso a Paso`. Exactamente el nombre comercial, **sin añadir palabras clave** («Osuna Paso a Paso – Visitas guiadas Osuna» va contra las normas de Google y puede suspender el perfil).
3. **Categoría:** ver 1.2.
4. Cuando pregunte si quieres añadir una ubicación que los clientes puedan visitar: **No**. Así Google no muestra el domicilio de la titular.
5. **Zona de servicio:** Osuna. Puedes añadir también localidades cercanas de las que vengan grupos (Écija, Estepa, Marchena, Morón de la Frontera…), sin pasarte: unas pocas y reales.
6. **Teléfono:** +34 652 845 159. **Sitio web:** la página de inicio del dominio definitivo (ver 1.5).
7. **Verificación:** Google elegirá el método (normalmente un vídeo corto grabado con el móvil mostrando que el negocio es real —por ejemplo, la credencial de guía y la Plaza Mayor—, o una llamada/SMS). Hasta que esté verificado, el perfil no aparece.

### 1.2. Categoría

- **Categoría principal:** la más cercana a «guía turístico». En el buscador de categorías escribe *visitas*, *tour* o *guía* y elige la que describa un servicio de visitas guiadas (por ejemplo, «Agencia de visitas turísticas» u «Operador turístico», según las que ofrezca Google en ese momento; la lista cambia y no la puedo fijar de antemano).
- **Categorías secundarias** (opcionales, solo si existen y son ciertas): servicio de visitas a pie, servicio de excursiones escolares, etc.
- No elijas «Oficina de información turística»: es para oficinas públicas y puede confundir.

### 1.3. Descripción (propuesta, 750 caracteres como máximo)

> Visitas guiadas por Osuna (Sevilla) con Elena Gallardo, guía oficial de turismo de Andalucía (n.º GT/00975), que vive en la villa. Siete rutas de unas tres horas: la Colegiata y el Sepulcro Ducal, la Antigua Universidad, el Monasterio de la Encarnación, la calle San Pedro y sus palacios barrocos, Las Canteras y la zona arqueológica, los escenarios de rodaje de Juego de Tronos y Osuna nocturna. También visitas a medida para grupos, colegios y empresas, de hasta 30 personas. En español, inglés, alemán e italiano. Entradas a monumentos incluidas. Con reserva previa por WhatsApp o teléfono: tú eliges el día.

(Unos 610 caracteres. Si Elena prefiere no poner su nombre, se quita la frase «con Elena Gallardo». La descripción no debe incluir enlaces ni precios.)

### 1.4. Fotos y horario

- **Fotos:** mínimo 10 al principio y luego alguna cada mes. Mejor **fotos propias** (de la guía con un grupo en la Plaza Mayor, de los monumentos, del patio de la Universidad, de la calle San Pedro al atardecer) que las de Wikimedia. Si se usan fotos de Wikimedia, hay que respetar la licencia, así que mejor propias. Logotipo: `public/icon-512.png`; portada: una foto horizontal de la Colegiata.
- **Horario:** el de atención: lunes a sábado 9:00–14:00 y 17:00–20:30; domingos 9:00–13:00. Añade «Horario especial» en festivos si cambia.
- **Servicios:** crea un servicio por ruta (los 7 nombres de la web) y «Visitas a medida», con una frase cada uno y **sin precio** (o «precio a consultar» si el formulario lo exige).

### 1.5. Enlace a la web

Pon como sitio web el inicio con un parámetro para medir las visitas que llegan desde el perfil:

`https://DOMINIO/?utm_source=google&utm_medium=organic&utm_campaign=gbp`

Si el perfil permite enlace de reserva o de WhatsApp, usa `https://wa.me/34652845159`.

### 1.6. Publicaciones periódicas

Una publicación **cada 1–2 semanas** mantiene el perfil vivo:

- una ruta concreta con una foto («Esta semana, la calle San Pedro al atardecer»);
- fechas útiles (Semana Santa, puentes, verano: «en julio y agosto salimos temprano o al atardecer»);
- novedades (visitas en alemán, grupos escolares en primavera…);
- con botón «Llamar» o «Más información» hacia la página de la ruta.

---

## 2. Reseñas reales — impacto muy alto

El número, la frecuencia y la nota media de las reseñas son de lo que más pesa en el mapa. **Nada de reseñas falsas, compradas, ni a cambio de descuentos**: lo prohíben las normas de Google y la normativa de consumo, y Google las detecta y borra (y puede penalizar el perfil). Tampoco se pueden copiar reseñas de otras plataformas a la web.

### 2.1. El enlace corto

En el Perfil de Empresa: **Pedir reseñas** → copia el enlace corto (`g.page/r/…`). Guárdalo en WhatsApp como respuesta rápida (si se pasa a WhatsApp Business, se puede guardar como mensaje predefinido).

### 2.2. Cuándo y cómo pedirla

- El mismo día de la visita, por la tarde o noche, cuando el recuerdo está fresco.
- A **todos** los clientes, no solo a los que parecen más contentos (pedirlas selectivamente también va contra las normas).
- Contestar **todas** las reseñas, buenas y malas, en el idioma en que estén escritas.

### 2.3. Mensajes modelo para enviar por WhatsApp

**Español**

> ¡Hola, [nombre]! Muchas gracias por venir hoy a conocer Osuna conmigo. Ha sido un placer enseñaros la villa. Si os ha gustado la visita, me ayudaría muchísimo que dejarais una reseña en Google; solo lleva un minuto: [enlace]. ¡Un abrazo y hasta pronto! Elena

**English**

> Hi [name]! Thank you so much for exploring Osuna with me today — it was a pleasure showing you around. If you enjoyed the tour, a short Google review would really help a small local guide like me: [link]. It only takes a minute. Safe travels! Elena

**Deutsch**

> Hallo [Name]! Vielen Dank, dass Sie heute Osuna mit mir entdeckt haben – es hat mir große Freude gemacht. Wenn Ihnen die Führung gefallen hat, würde mir eine kurze Google-Bewertung sehr helfen: [Link]. Das dauert nur eine Minute. Gute Weiterreise! Elena

---

## 3. Enlaces entrantes de calidad — impacto alto

Un enlace desde una web oficial o local con autoridad vale más que decenas de directorios. Pide **un enlace a la página que corresponda**, no siempre al inicio.

### 3.1. Web de turismo del Ayuntamiento de Osuna — el más valioso

El Ayuntamiento promociona las visitas, así que es el enlace más natural y con más autoridad. Pide que en su sección de visitas guiadas o de guías locales aparezca el nombre, el teléfono y el enlace a la web.

> Asunto: Enlace a las visitas guiadas Osuna Paso a Paso en la web municipal de turismo
>
> Buenos días:
>
> Soy Elena Gallardo Camuñez, guía oficial de turismo de Andalucía (n.º GT/00975) y vecina de Osuna. Con la colaboración del Ayuntamiento hemos puesto en marcha la web de mis visitas guiadas, en español, inglés y alemán: [DOMINIO].
>
> Os escribo para pediros que, en la sección de visitas guiadas o guías locales de la web de turismo municipal, se incluya un enlace a la web, junto con el teléfono de reservas (+34 652 845 159). Si os resulta útil, os puedo enviar un texto breve y fotos propias.
>
> Muchas gracias por vuestro apoyo.
> Un saludo,
> Elena Gallardo Camuñez · Osuna Paso a Paso

### 3.2. Oficina de Turismo de Osuna

Además del enlace en su web (si la tiene propia), pide que tengan **folletos o una tarjeta con un código QR** a la web. El mismo mensaje sirve, añadiendo: «Si os parece bien, os llevo unas tarjetas con el código QR para quien pregunte por visitas guiadas».

### 3.3. Turismo de la Provincia de Sevilla (Diputación / Prodetur)

La Diputación tiene un portal de turismo provincial con información por municipio. Pide aparecer en la ficha de Osuna como empresa de servicios turísticos o de guías.

> Asunto: Alta de servicio de visitas guiadas en Osuna
>
> Buenos días:
>
> Soy guía oficial de turismo de Andalucía (n.º GT/00975) y ofrezco visitas guiadas en Osuna en español, inglés, alemán e italiano: siete rutas por el patrimonio de la villa y visitas a medida para grupos y colegios. ¿Sería posible incluir mi servicio, con un enlace a [DOMINIO], en la información turística de Osuna del portal provincial? Puedo enviaros los datos y fotos que necesitéis.
>
> Muchas gracias. Un saludo,
> Elena Gallardo Camuñez · Osuna Paso a Paso · +34 652 845 159

### 3.4. Alojamientos y restaurantes de Osuna

Hoteles, casas rurales, apartamentos turísticos y restaurantes reciben a los mismos turistas que buscan visitas. Muchos tienen una sección «Qué ver» o «Experiencias» en su web, y casi todos un perfil de Booking o Airbnb donde recomiendan actividades. Es un intercambio natural: ellos dan un servicio más a sus clientes y la guía les manda clientes a ellos.

> Hola, [nombre]:
>
> Soy Elena, guía oficial de turismo en Osuna (n.º GT/00975). Hago visitas guiadas por la Colegiata, la Universidad, la calle San Pedro, Las Canteras y los escenarios de Juego de Tronos, en español, inglés, alemán e italiano. Como muchos de vuestros clientes preguntarán qué ver en Osuna, ¿os parecería bien recomendar mis visitas en vuestra web con un enlace a [DOMINIO]? Encantada de recomendaros también a vosotros a los grupos que me pidan dónde dormir o comer. Os puedo dejar tarjetas con código QR para recepción.
>
> Un saludo,
> Elena · +34 652 845 159

### 3.5. Asociaciones de guías oficiales

Las asociaciones profesionales de guías de Sevilla y de Andalucía suelen tener un **directorio de socios** con enlace. Si Elena es socia (o se asocia), pedir el alta en el directorio con enlace a la web y los idiomas. Mensaje breve: nombre, n.º de guía, idiomas, zona (Osuna y comarca) y enlace.

### 3.6. Otros enlaces naturales

- Prensa local y comarcal (una nota sobre la nueva web o sobre las visitas de Juego de Tronos).
- Centros educativos de la comarca, para las visitas escolares (enlace a la página de visitas a medida).
- Blogs de viaje que ya hablan de Osuna: ofrecer una visita a cambio de que, **si les gusta**, la mencionen con enlace (sin pagar por el enlace).

---

## 4. Directorios y plataformas — impacto medio

| Plataforma | Coste | Pros | Contras |
|---|---|---|---|
| **TripAdvisor** (ficha gratuita de atracción/actividad) | Gratis | Muy usada por turistas extranjeros; las reseñas aparecen también en Google; da un enlace a la web | Hay que cuidarla y contestar reseñas; insiste en vender servicios de pago, que no hacen falta |
| **GetYourGuide** | Comisión por reserva | Mucha visibilidad internacional (sobre todo alemanes e ingleses); gestiona pagos y reseñas | Comisión alta; el cliente es de la plataforma; obliga a precios y disponibilidad publicados, cuando ahora todo es «a consultar» |
| **Civitatis** | Comisión por reserva | Muy fuerte en el público hispanohablante; es uno de los intermediarios que ya salen en «visitas guiadas Osuna» | Igual: comisión, precio fijo publicado y condiciones de cancelación de la plataforma |

Las comisiones de estas plataformas suelen ser una parte importante del precio (del orden de un 20–30 %, según contrato); **hay que confirmarlas en su contrato antes de darse de alta**. Recomendación: empezar por **TripAdvisor (gratis)** y valorar GetYourGuide o Civitatis más adelante como canal extra, solo para las rutas con más demanda y con un precio que absorba la comisión.

Otros directorios útiles y gratuitos: Bing Places (se importa desde Google), Apple Business Connect (mapas de iPhone) y el directorio de empresas turísticas de la Junta de Andalucía si procede.

**Coherencia de datos (NAP):** en todas partes, exactamente el mismo nombre («Osuna Paso a Paso»), teléfono (+34 652 845 159) y web. Las incoherencias, como las de la competencia, restan confianza.

---

## 5. Google Search Console y Bing Webmaster Tools

Hacerlo **el mismo día que se publique el dominio**.

### 5.1. Google Search Console

1. <https://search.google.com/search-console> → **Añadir propiedad** → tipo **Dominio** (cubre `https`, `www` y sin `www`).
2. Verificación por DNS: Google da un registro `TXT`. Como el dominio estará en Cloudflare, se añade en *DNS → Records → Add record → TXT*. Tarda minutos.
3. **Sitemaps** → envía `https://DOMINIO/sitemap-index.xml`.
4. **Inspección de URL** → pide la indexación del inicio en los tres idiomas y de dos o tres rutas (el resto lo descubrirá por el sitemap).

### 5.2. Bing Webmaster Tools

<https://www.bing.com/webmasters> → **Importar desde Google Search Console** (copia propiedad y sitemap en un clic). Bing alimenta también a otros buscadores y asistentes.

### 5.3. Qué mirar cada mes (15 minutos)

| Informe | Qué mirar | Señal de alarma |
|---|---|---|
| **Rendimiento → Consultas** | Impresiones, clics, CTR y posición media de las búsquedas clave (apartado 6) | Una consulta importante que cae varias posiciones |
| **Rendimiento → Páginas** | Qué rutas reciben tráfico y en qué país | Una ruta con impresiones pero sin clics: mejorar su `title`/`description` |
| **Rendimiento → Países** | España, Reino Unido, Alemania… | — |
| **Indexación → Páginas** | Que las 42 páginas estén indexadas | Páginas «Rastreada: actualmente sin indexar» |
| **Experiencia → Métricas web principales** | Todo en «Buenas» | Cualquier URL en «Mejorable» o «Mala» |
| **Mejoras / datos estructurados** | Rutas de navegación sin errores | Errores nuevos |
| **Perfil de Empresa → Rendimiento** | Llamadas, clics a la web, búsquedas que muestran el perfil | Caída de llamadas |

Nota honesta sobre las preguntas frecuentes: desde 2023 Google solo muestra el desplegable de FAQ en los resultados para webs oficiales o sanitarias. El marcado `FAQPage` sigue siendo correcto y útil (ayuda a que Google y los asistentes entiendan las respuestas), pero no esperéis verlo como desplegable en los resultados.

---

## 6. Seguimiento mensual frente a visitasguiadasosuna.es

Una hoja de cálculo sencilla, una fila por mes:

| Búsqueda | Nuestra posición (GSC) | Posición de visitasguiadasosuna.es | ¿Salimos en el mapa? | Notas |
|---|---|---|---|---|
| visitas guiadas Osuna | | | | |
| guía turístico Osuna | | | | |
| visita Colegiata Osuna | | | | |
| Osuna guided tour | | | | |
| Führung Osuna | | | | |
| (opcional) Osuna Game of Thrones filming locations | | | | |
| (opcional) visita guiada Osuna colegio | | | | |

**Cómo medirlo:**

1. **Nuestra posición:** Search Console → Rendimiento → filtra por consulta → posición media del mes. Es el dato fiable.
2. **La de la competencia:** Search Console no la da. Búscala a mano el mismo día cada mes, en una ventana de incógnito, sin sesión iniciada y con la ubicación en Osuna o Sevilla (la posición cambia según desde dónde se busca). Para el inglés y el alemán, cambia el idioma: añade `&hl=en` o `&hl=de` a la URL de Google. Anota la posición del primer resultado de cada web (sin contar anuncios) y si aparece en el mapa.
3. Si se quiere automatizar, herramientas como Semrush, Ahrefs o SE Ranking tienen versiones de prueba o planes básicos con seguimiento de posiciones; no son necesarias al principio.

**Objetivo inmediato:** estar por encima de visitasguiadasosuna.es en «visitas guiadas Osuna» y «guía turístico Osuna», y dominar las búsquedas en inglés y alemán, donde ellos no tienen página. Adelantar a Civitatis, Central de Reservas o Atrápalo en la búsqueda principal en español no es realista a corto plazo; en el mapa, en cambio, sí se puede competir porque ellos no son negocios locales.

---

## 7. Expectativas realistas

| Plazo (desde que se publica el dominio) | Qué es normal |
|---|---|
| 1–2 semanas | Google indexa el inicio y las primeras rutas. Aparecen las primeras impresiones en Search Console, sobre todo por el nombre de la marca. |
| 2–8 semanas | El Perfil de Empresa, una vez verificado y con las primeras reseñas, empieza a salir en el mapa para búsquedas en Osuna. |
| 1–3 meses | Posiciones en búsquedas largas y en inglés y alemán («Osuna Game of Thrones filming locations», «Führung Stiftskirche Osuna»), donde hay poca competencia. |
| 3–6 meses | Con reseñas constantes y algunos enlaces locales (Ayuntamiento, alojamientos), competir de verdad con visitasguiadasosuna.es en «visitas guiadas Osuna». |
| 6–12 meses | Posiciones estables. A partir de aquí se gana sobre todo con reseñas y contenido nuevo (por ejemplo, una página de temporada o de Semana Santa si Elena hace rutas especiales). |

Son plazos habituales, no garantizados: dependen de la constancia con las reseñas y de lo que haga la competencia. Lo que **no** acelera nada: repetir palabras clave, comprar enlaces o reseñas, o crear muchas páginas casi iguales.

---

## 8. Dominio

`visitasguiadasosuna.es` está ocupado por la competencia. Hay que elegir otro.

### 8.1. Qué aporta (y qué no) la palabra clave en el dominio

Un dominio con la palabra clave exacta («visitasguiadas…», «toursosuna…») **ya aporta poco al SEO**: Google dejó de premiarlo hace años y lo que cuenta es el contenido, las reseñas y los enlaces. En cambio, para un negocio que se reserva **por teléfono y WhatsApp**, importa mucho que el dominio sea:

- **de marca:** el mismo nombre que el Perfil de Empresa, el logo y las reseñas («Osuna Paso a Paso»), lo que refuerza la coherencia;
- **corto y fácil de dictar** por teléfono o de decir en una visita, sin guiones ni números;
- **difícil de confundir** con la competencia. Un nombre del tipo «visitasosuna» se confundiría con visitasguiadasosuna.es.

### 8.2. Opciones

| Opción | Pros | Contras |
|---|---|---|
| **osunapasoapaso.es** | Igual que la marca, el logo y el futuro Perfil de Empresa; fácil de dictar («osuna paso a paso punto es») | Algo largo (15 letras) |
| osunapasoapaso.com | Igual que el anterior; `.com` resulta familiar a extranjeros | Algo largo; `.com` no aporta ventaja de SEO frente a `.es` |
| pasoapasoosuna.es | De marca | Orden distinto al nombre comercial: lleva a errores al dictarlo |
| guiaosuna.es | Corto y claro | Genérico, se parece a la competencia y a cualquier otro guía; no es la marca |
| visitasosuna.es | Corto, con palabra clave | Se confunde con visitasguiadasosuna.es; no es la marca |

**Recomendación: `osunapasoapaso.es`.** Coincide con el nombre comercial, que es el que aparecerá en Google Maps y en las reseñas; se dicta sin dudas; y el `.es` encaja con un negocio local de España (los idiomas ya los resuelve `hreflang`). Si el `.com` está libre y es barato, conviene **registrarlo también** y redirigirlo al `.es`, para que nadie lo use.

Antes de decidir, **comprobar que está libre** en un registrador (por ejemplo, en el propio Cloudflare Registrar, Dondominio o el registro oficial de `.es`) y registrarlo cuanto antes, porque los dominios libres se pueden registrar en cualquier momento. El precio de un `.es` suele ser de unos pocos euros al año.

### 8.3. Al tener el dominio

1. Registrarlo y gestionarlo en Cloudflare (README §5, «Configurar el dominio»).
2. Poner `SITE_URL=https://osunapasoapaso.es` en las variables de build y volver a desplegar. **El `noindex` desaparece solo** y se actualizan `canonical`, `hreflang`, sitemap, `robots.txt` y Open Graph.
3. Correo con el dominio (pendiente N de la clienta): un reenvío gratuito (Cloudflare Email Routing) de `info@osunapasoapaso.es` al Gmail de Elena es suficiente para empezar.
4. Search Console y Bing (apartado 5), y el enlace en el Perfil de Empresa.

---

## Resumen: lista de tareas por orden

1. [ ] Elegir y registrar el dominio (recomendado `osunapasoapaso.es`) y publicar la web con él.
2. [ ] Search Console + Bing Webmaster Tools + sitemap, el mismo día.
3. [ ] Crear y verificar el Perfil de Empresa de Google (área de servicio, sin dirección).
4. [ ] Enlace corto de reseñas guardado en WhatsApp; pedir reseña después de **cada** visita.
5. [ ] Escribir al Ayuntamiento (web de turismo) y a la Oficina de Turismo.
6. [ ] Escribir a Turismo de la Provincia y a la asociación de guías.
7. [ ] Ficha gratuita en TripAdvisor.
8. [ ] Ronda de alojamientos y restaurantes (con tarjetas QR).
9. [ ] Cada mes: hoja de seguimiento y una o dos publicaciones en el Perfil de Empresa.
10. [ ] A los 3 meses: revisar resultados y decidir sobre GetYourGuide/Civitatis.
