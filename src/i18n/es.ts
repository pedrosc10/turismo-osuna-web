import { site } from '../data/site';

const s = site;

/**
 * Textos en español (idioma por defecto).
 * Los otros idiomas (en.ts, de.ts) tienen exactamente la misma estructura (TypeScript lo comprueba).
 *
 * Textos de ruta: `desc` es el texto corto validado por la clienta; `body`, `stops`, `family` y
 * `faq` son la ampliación de la v2, pendiente de su revisión en REVISAR-TEXTOS.md.
 */
const es = {
  locale: 'es-ES',
  brandSuffix: ' | Osuna Paso a Paso',
  meta: {
    title: 'Visitas guiadas en Osuna, guía oficial',
    description:
      'Visitas guiadas por Osuna con guía oficial: Colegiata, Universidad, Las Canteras y Juego de Tronos. Entradas incluidas. Reserva por WhatsApp.',
    ogAlt: 'Colegiata de Osuna en piedra dorada bajo un cielo azul, con el texto «Visitas guiadas en Osuna».',
    ogTitle: 'Visitas guiadas en Osuna',
    ogLine: 'Colegiata · Universidad · Calle San Pedro · Las Canteras',
  },
  nav: {
    skip: 'Saltar al contenido',
    routes: 'Rutas',
    custom: 'A medida',
    faq: 'Preguntas',
    contact: 'Contacto',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    home: 'Inicio',
    mainNav: 'Navegación principal',
    breadcrumb: 'Estás en',
  },
  langNames: { es: 'Español', en: 'English', de: 'Deutsch' },
  tourLangs: { es: 'español', en: 'inglés', de: 'alemán', it: 'italiano' },
  list: (items: string[]) => items.slice(0, -1).join(', ') + ' e ' + items[items.length - 1],

  hero: {
    kicker: 'Visitas guiadas · Osuna, Sevilla',
    titleA: 'Osuna,',
    titleB: 'piedra a piedra.',
    lead: 'La Colegiata, la Antigua Universidad, los palacios barrocos de la calle San Pedro y las canteras de donde salió todo, contados por una guía oficial que vive aquí.',
    badges: ['ES · EN · DE · IT', `Guía oficial ${s.guideLicense}`, 'Entradas incluidas'],
    badgesLabel: 'Idiomas de las visitas: español, inglés, alemán e italiano',
    caption: 'fig. 1 — Cabecera de la Colegiata de Santa María de la Asunción, en lo alto de la villa.',
  },
  cta: {
    whatsapp: 'Reservar por WhatsApp',
    call: 'Llamar',
    bookRoute: 'Reservar esta ruta',
    floating: 'Reservar por WhatsApp',
    newTab: '(se abre en una pestaña nueva)',
    seeRoute: 'Ver la ruta',
    allFaq: 'Todas las preguntas',
    customPage: 'Cómo funcionan las visitas a medida',
  },
  wa: {
    general: 'Hola, me gustaría reservar una visita guiada por Osuna. ¿Qué disponibilidad tenéis?',
    route: (name: string) =>
      `Hola, me gustaría reservar la ruta «${name}». ¿Qué días tenéis disponibles? Somos __ personas.`,
    custom: 'Hola, me interesa una visita a medida por Osuna (grupo / colegio / empresa). ¿Podemos hablarlo?',
  },

  /** Ficha rápida: etiquetas y valores comunes a todas las rutas. */
  facts: {
    duration: 'Duración',
    durationValue: `Unas ${s.durationHours} horas, adaptable`,
    languages: 'Idiomas',
    meeting: 'Encuentro',
    meetingValue: 'Plaza Mayor, puerta del Ayuntamiento',
    meetingOwnTransport: 'Esta ruta requiere vehículo propio. Te indicamos el punto de encuentro al reservar.',
    tickets: 'Entradas',
    ticketsValue: 'Entradas a monumentos incluidas',
    price: 'Precio',
    priceValue: 'Precio a consultar según grupo y ruta. Descuentos para niños.',
    group: 'Grupo',
    groupValue: `Hasta ${s.maxGroup} personas`,
    booking: 'Días',
    bookingValue: 'Con reserva previa · tú eliges el día',
    guide: 'Guía oficial de turismo de Andalucía',
    guideValue: `N.º ${s.guideLicense}`,
    title: 'Ficha de la visita',
  },

  home: {
    routesKicker: 'Itinerarios',
    routesTitle: 'Siete maneras de recorrer Osuna',
    routesIntro: 'Unas tres horas cada una, con reserva previa.',
    customKicker: 'Visitas a medida',
    customTitle: 'Para grupos, colegios y empresas',
    customText: `Combinamos rutas y adaptamos duración y contenido a vuestro grupo, hasta ${s.maxGroup} personas.`,
    keyKicker: 'Lo esencial',
    keyFacts: [
      { big: '3 h', small: 'aproximadas, adaptables' },
      { big: `${s.maxGroup}`, small: 'personas como máximo' },
      { big: `${s.freeCancellationHours} h`, small: 'de antelación para cancelar gratis' },
      { big: 'Entradas', small: 'a monumentos incluidas' },
      { big: 'Reserva', small: 'previa y pago por adelantado' },
    ],
    faqKicker: 'Preguntas frecuentes',
    faqTitle: 'Antes de reservar',
    visitKicker: 'Contacto y punto de encuentro',
    visitTitle: 'Reserva tu visita',
    visitText: 'Dinos ruta, fecha y cuántas personas sois.',
  },

  routes: {
    colegiata: {
      name: 'Colegiata de Santa María de la Asunción y Sepulcro Ducal',
      shortName: 'Colegiata y Sepulcro Ducal',
      h1: 'Visita guiada a la Colegiata de Osuna',
      metaTitle: 'Visita guiada a la Colegiata de Osuna',
      metaDesc:
        'Visita guiada a la Colegiata de Osuna y al Sepulcro Ducal con guía oficial: arte sacro, obras de Ribera y vistas de la campiña. Entradas incluidas.',
      teaser: 'Templo renacentista, museo de arte sacro y panteón ducal.',
      desc: 'El gran templo renacentista que el conde de Ureña levantó en el siglo XVI en lo alto del cerro. Dentro, un museo de arte sacro con obras de José de Ribera; bajo la iglesia, el Sepulcro Ducal, panteón de los Téllez-Girón.',
      body: [
        {
          h: 'Qué vas a ver',
          p: [
            'Subimos desde la Plaza Mayor hasta lo alto del cerro, donde la Colegiata domina la villa y la campiña. Es la obra con la que la casa de los Téllez-Girón quiso dejar su sello en Osuna: un templo renacentista de piedra dorada, levantado por iniciativa del conde de Ureña en el siglo XVI.',
            'Dentro recorremos la iglesia y su museo de arte sacro, donde se guardan obras de José de Ribera junto a pintura, escultura y orfebrería. Después bajamos al Sepulcro Ducal, el panteón de la familia, una capilla subterránea de bóveda de piedra que sorprende a casi todo el mundo por su recogimiento.',
          ],
        },
        {
          h: 'Por qué merece la pena',
          p: [
            'Porque aquí se entiende Osuna entera: el poder de los condes de Ureña y de los duques de Osuna, el arte que encargaron y el paisaje que gobernaban. Desde el cerro se ve la villa a tus pies y, al fondo, la campiña hasta el horizonte. Con guía, además, cada capilla y cada cuadro tiene su porqué.',
          ],
        },
        {
          h: 'Cómo es la visita',
          p: [
            'Dura unas tres horas, con paradas, y se adapta a vuestro ritmo. Las entradas a los monumentos están incluidas en el precio. La subida al cerro es en cuesta: si alguien del grupo va en silla de ruedas o con carrito, avísanos al reservar y adaptamos el recorrido.',
          ],
        },
      ],
      family:
        'Es una buena ruta para familias: el panteón bajo la iglesia y las vistas desde el cerro suelen encantar a los niños. Dinos sus edades al reservar y contamos la historia a su medida.',
      stops: ['Plaza Mayor', 'Subida al cerro', 'Colegiata de Santa María de la Asunción', 'Museo de arte sacro', 'Sepulcro Ducal', 'Vistas sobre la campiña'],
      faq: [
        {
          q: '¿La visita a la Colegiata incluye el Sepulcro Ducal?',
          a: 'Sí. El Sepulcro Ducal está bajo la iglesia y forma parte de la ruta, igual que el museo de arte sacro. Las entradas están incluidas en el precio.',
        },
        {
          q: '¿Se puede combinar la Colegiata con la Antigua Universidad?',
          a: 'Sí. Las dos están en lo alto del mismo cerro y combinan muy bien. Pídela como visita a medida y ajustamos el recorrido y la duración.',
        },
      ],
      caption: 'fig. 2 — Portada principal de la Colegiata, en piedra labrada.',
    },
    universidad: {
      name: 'Antigua Universidad',
      shortName: 'Antigua Universidad',
      h1: 'Visita guiada a la Antigua Universidad de Osuna',
      metaTitle: 'Visita guiada a la Universidad de Osuna',
      metaDesc:
        'Visita guiada a la Antigua Universidad de Osuna, fundada en 1548: torres de esquina, patio porticado de dos pisos y casi tres siglos de historia.',
      teaser: 'Fundada en 1548: torres y patio porticado de dos pisos.',
      desc: 'Fundada en 1548 por el mismo conde de Ureña, fue universidad durante casi tres siglos. Un edificio de planta cuadrada, con torres en las esquinas y un elegante patio porticado de dos pisos.',
      body: [
        {
          h: 'Qué vas a ver',
          p: [
            'La Antigua Universidad se alza en el mismo cerro que la Colegiata y se reconoce de lejos: un gran edificio de planta cuadrada, con torres cilíndricas en las esquinas rematadas en chapiteles. La fundó en 1548 el conde de Ureña, el mismo que levantó la Colegiata, y funcionó como universidad durante casi tres siglos.',
            'Por dentro, el corazón del edificio es su patio porticado de dos pisos, uno de los rincones más elegantes de Osuna. Cuando el uso del edificio lo permite, entramos también en la antigua capilla, que conserva su retablo.',
          ],
        },
        {
          h: 'Por qué merece la pena',
          p: [
            'Que una villa de la campiña tuviera universidad propia dice mucho de lo que fue Osuna. En la visita hablamos de quién estudiaba aquí, qué se enseñaba y por qué un noble decidió fundar una universidad junto a su iglesia. Es una ruta muy agradecida para estudiantes y para cualquiera que disfrute de la arquitectura del Renacimiento.',
          ],
        },
        {
          h: 'Cómo es la visita',
          p: [
            'Dura unas tres horas y se adapta a vuestro ritmo; incluye el entorno del cerro y sus vistas sobre la villa. Las entradas a los monumentos están incluidas en el precio. Hay cuesta para subir: si alguien del grupo va en silla de ruedas o con carrito, avísanos al reservar y adaptamos el recorrido.',
          ],
        },
      ],
      family:
        'Funciona bien con familias y, sobre todo, con grupos escolares: el patio y las torres dan mucho juego para contar cómo era la vida de un estudiante hace siglos.',
      stops: ['Plaza Mayor', 'Subida al cerro', 'Fachada y torres de la Antigua Universidad', 'Patio porticado', 'Antigua capilla (según disponibilidad)', 'Mirador sobre la villa'],
      faq: [
        {
          q: '¿Se entra en el edificio de la Antigua Universidad?',
          a: 'Sí, visitamos el patio y, cuando el uso del edificio lo permite, la antigua capilla. Te confirmamos los espacios abiertos al reservar.',
        },
        {
          q: '¿Es una buena ruta para un grupo de estudiantes?',
          a: 'Sí, es una de las más pedidas por colegios e institutos. Adaptamos el contenido a la edad y al temario; consúltalo en las visitas a medida.',
        },
      ],
      caption: 'fig. 3 — La Universidad, con sus torres de esquina.',
    },
    encarnacion: {
      name: 'Monasterio de la Encarnación',
      shortName: 'Monasterio de la Encarnación',
      h1: 'Visita guiada al Monasterio de la Encarnación de Osuna',
      metaTitle: 'Visita guiada a la Encarnación de Osuna',
      metaDesc:
        'Visita guiada al Monasterio de la Encarnación de Osuna: claustro con azulejería sevillana del siglo XVIII y museo de arte sacro. Entradas incluidas.',
      teaser: 'Claustro de azulejería sevillana del XVIII y museo sacro.',
      desc: 'Un monasterio de clausura del siglo XVII cuyo claustro está revestido de azulejería sevillana del XVIII. Su museo de arte sacro guarda piezas que rara vez salen en las guías.',
      body: [
        {
          h: 'Qué vas a ver',
          p: [
            'Desde la Plaza Mayor llegamos al Monasterio de la Encarnación, un convento de clausura del siglo XVII que sigue vivo. Su portada de piedra da paso a la iglesia, con su retablo dorado, y al claustro, que es la gran sorpresa: sus paredes están revestidas de azulejería sevillana del siglo XVIII, con escenas pintadas en azul y ocre.',
            'El monasterio tiene también un museo de arte sacro con piezas que rara vez aparecen en las guías. Lo recorremos con calma, deteniéndonos en los detalles que se escapan a simple vista.',
          ],
        },
        {
          h: 'Por qué merece la pena',
          p: [
            'Es uno de los rincones más desconocidos de Osuna y de los que más impresionan a quien llega sin saber qué esperar. Los azulejos del claustro se leen casi como un libro ilustrado, y con guía cada escena cobra sentido.',
          ],
        },
        {
          h: 'Cómo es la visita',
          p: [
            'Dura unas tres horas y se adapta a vuestro ritmo. Las entradas a los monumentos están incluidas en el precio. Al ser un monasterio con comunidad, la visita se ajusta a sus horarios de apertura: te los confirmamos al reservar. Si alguien del grupo va en silla de ruedas o con carrito, avísanos y adaptamos el recorrido.',
          ],
        },
      ],
      family:
        'Con niños funciona mejor si se plantea como un juego de buscar detalles en los azulejos. Cuéntanos sus edades al reservar y lo preparamos.',
      stops: ['Plaza Mayor', 'Portada del Monasterio de la Encarnación', 'Iglesia', 'Claustro de azulejería sevillana', 'Museo de arte sacro'],
      faq: [
        {
          q: '¿Se puede visitar el monasterio cualquier día?',
          a: 'El monasterio tiene comunidad y sus propios horarios de apertura. Tú eliges el día y nosotros te confirmamos al reservar que esa fecha encaja.',
        },
        {
          q: '¿Qué tienen de especial los azulejos del claustro?',
          a: 'Son azulejería sevillana del siglo XVIII que reviste el claustro con escenas pintadas. En la visita te contamos cómo se hacían y qué representan.',
        },
      ],
      caption: 'fig. 4 — El claustro de la Encarnación.',
    },
    sanpedro: {
      name: 'Calle San Pedro y palacios barrocos',
      shortName: 'Calle San Pedro y palacios barrocos',
      h1: 'Visita guiada por la calle San Pedro y los palacios barrocos de Osuna',
      metaTitle: 'Calle San Pedro de Osuna: visita guiada',
      metaDesc:
        'Paseo guiado por la calle San Pedro de Osuna, una de las más bonitas de Europa: casas señoriales y palacios barrocos del XVIII, como el de la Gomera.',
      teaser: 'Una de las calles más bonitas de Europa, palacio a palacio.',
      desc: 'Recorremos la calle San Pedro, considerada una de las más bonitas de Europa, donde destacan sus casas señoriales y palacios barrocos del siglo XVIII, como el Palacio del Marqués de la Gomera, con su impresionante fachada barroca.',
      body: [
        {
          h: 'Qué vas a ver',
          p: [
            'La calle San Pedro es el gran escaparate del barroco de Osuna. A lo largo de pocos cientos de metros se suceden casas señoriales y palacios del siglo XVIII, con portadas de piedra labrada, escudos y balcones de forja.',
            'La parada principal es el Palacio del Marqués de la Gomera, con su impresionante fachada barroca: columnas salomónicas, balcón de piedra y una cornisa ondulada que parece moverse. Desde ahí seguimos por los alrededores leyendo fachadas y descubriendo otras casas señoriales de la villa.',
          ],
        },
        {
          h: 'Por qué merece la pena',
          p: [
            'Porque es la calle por la que muchos visitantes se enamoran de Osuna, y porque sin guía es fácil pasar de largo ante lo mejor: quién vivía en cada casa, qué cuenta cada escudo y por qué en el siglo XVIII se construyó con tanto lujo en un pueblo de la campiña.',
          ],
        },
        {
          h: 'Cómo es la visita',
          p: [
            'Es un paseo a pie de unas tres horas, adaptable, que empieza en la Plaza Mayor. Muchos de los palacios son casas particulares, así que la ruta se centra en sus fachadas; si algún espacio está abierto al público ese día, lo incluimos, con la entrada en el precio. Si alguien del grupo va en silla de ruedas o con carrito, avísanos al reservar y adaptamos el recorrido.',
          ],
        },
      ],
      family:
        'Es una ruta cómoda para hacer en familia: es un paseo por calles del centro, con paradas cortas y mucho que mirar.',
      stops: ['Plaza Mayor', 'Calle San Pedro', 'Palacio del Marqués de la Gomera', 'Casas señoriales de los alrededores'],
      faq: [
        {
          q: '¿Se entra en los palacios de la calle San Pedro?',
          a: 'Muchos son casas particulares y se disfrutan desde la calle, que es donde está su fachada barroca. Si algún espacio está abierto ese día, lo incluimos.',
        },
        {
          q: '¿Por qué se dice que es una de las calles más bonitas de Europa?',
          a: 'Por la concentración de casas señoriales y palacios barrocos del siglo XVIII en tan poco espacio. En la visita te explicamos su historia casa a casa.',
        },
      ],
      caption: 'fig. 5 — Portada barroca del Palacio del Marqués de la Gomera, en la calle San Pedro.',
    },
    canteras: {
      name: 'Las Canteras, necrópolis y zona arqueológica',
      shortName: 'Las Canteras y zona arqueológica',
      h1: 'Visita guiada a Las Canteras y la zona arqueológica de Osuna',
      metaTitle: 'Las Canteras de Osuna: visita guiada',
      metaDesc:
        'Visita guiada al Coto de las Canteras de Osuna, la necrópolis excavada en la roca y los restos de Urso, la ciudad iberorromana, con su teatro.',
      teaser: 'Canteras, necrópolis en la roca y la Urso iberorromana.',
      desc: 'Las canteras de donde salió la piedra de Osuna desde la Antigüedad, la necrópolis excavada en la roca y los restos de Urso, la ciudad iberorromana, con su teatro. La Osuna de antes de Osuna.',
      body: [
        {
          h: 'Qué vas a ver',
          p: [
            'Empezamos en el Coto de las Canteras, el lugar del que se ha sacado la piedra de Osuna desde la Antigüedad. Siglos de trabajo han dejado paredes talladas y grandes huecos en la roca que hoy se recorren como si fueran salas abiertas al cielo.',
            'Muy cerca están la necrópolis, con tumbas excavadas en la roca, y la zona arqueológica de Urso, la ciudad iberorromana sobre la que creció Osuna, con los restos de su teatro. Te contamos qué se sabe de Urso y qué ha aparecido aquí, como la ley de la colonia romana grabada en bronce que hoy se conserva en el Museo Arqueológico Nacional.',
          ],
        },
        {
          h: 'Por qué merece la pena',
          p: [
            'Es la Osuna de antes de Osuna. Muchos visitantes conocen la Colegiata y la calle San Pedro, pero pocos saben que todo eso se construyó con la piedra de estas canteras ni que bajo sus pies hubo una ciudad romana. Es la ruta perfecta para quien disfruta de la arqueología y de los paisajes poco conocidos.',
          ],
        },
        {
          h: 'Cómo es la visita',
          p: [
            'Esta ruta requiere vehículo propio. Te indicamos el punto de encuentro al reservar. Dura unas tres horas, adaptable, y las entradas están incluidas en el precio. El terreno es irregular, así que conviene llevar calzado cómodo; si alguien del grupo va en silla de ruedas o con carrito, avísanos al reservar y adaptamos el recorrido.',
          ],
        },
      ],
      family:
        'A los niños les suele encantar: las canteras parecen un decorado y las tumbas en la roca despiertan muchas preguntas. Calzado cómodo y agua, sobre todo en verano.',
      stops: ['Coto de las Canteras', 'Necrópolis excavada en la roca', 'Zona arqueológica de Urso', 'Teatro'],
      faq: [
        {
          q: '¿Cómo llego a Las Canteras?',
          a: 'Esta ruta requiere vehículo propio. Te indicamos el punto de encuentro al reservar, junto con las indicaciones para llegar y aparcar.',
        },
        {
          q: '¿Qué conviene llevar?',
          a: 'Calzado cómodo, porque el terreno es irregular, y agua. En verano, gorra y protección solar: salimos temprano o al atardecer para evitar el calor.',
        },
      ],
      caption: 'fig. 6 — Paredes talladas en el Coto de las Canteras.',
    },
    cine: {
      name: 'Osuna de cine: escenarios de rodaje de Juego de Tronos',
      shortName: 'Osuna de cine (Juego de Tronos)',
      h1: 'Ruta guiada por los escenarios de rodaje de Juego de Tronos en Osuna',
      metaTitle: 'Juego de Tronos en Osuna: ruta guiada',
      metaDesc:
        'Ruta guiada por los escenarios de rodaje de Juego de Tronos en Osuna: la plaza de toros que fue plató de la quinta temporada y cómo lo vivió el pueblo.',
      teaser: 'La plaza de toros que fue plató de la quinta temporada.',
      desc: 'En 2014 la plaza de toros de Osuna se convirtió en plató para la quinta temporada de Juego de Tronos. Recorremos los escenarios de rodaje y contamos cómo vivió el pueblo aquellas semanas.',
      body: [
        {
          h: 'Qué vas a ver',
          p: [
            'En 2014 Osuna se convirtió en escenario de rodaje de la quinta temporada de Juego de Tronos. El gran protagonista fue la plaza de toros, que se transformó en la arena de combates de una de las ciudades de la serie.',
            'Recorremos la plaza, sus gradas y sus galerías de piedra, y el resto de escenarios de rodaje del pueblo. Por el camino te contamos cómo se preparó el rodaje y cómo vivió Osuna aquellas semanas, cuando muchos vecinos participaron como figurantes.',
          ],
        },
        {
          h: 'Por qué merece la pena',
          p: [
            'Si has visto la serie, reconocerás el lugar al instante; si no, descubrirás una plaza de toros singular y la historia de cómo un pueblo de la campiña sevillana acabó en una de las series más vistas del mundo. Es una ruta ligera, divertida y muy fotogénica.',
          ],
        },
        {
          h: 'Cómo es la visita',
          p: [
            'Dura unas tres horas, adaptable, y empieza en la Plaza Mayor. Las entradas están incluidas en el precio. Se hace todo el año, con reserva previa. Si alguien del grupo va en silla de ruedas o con carrito, avísanos al reservar y adaptamos el recorrido.',
          ],
        },
      ],
      family:
        'Muy recomendable en familia, sobre todo con adolescentes que conocen la serie. No hace falta haberla visto para disfrutarla.',
      stops: ['Plaza Mayor', 'Plaza de toros', 'Gradas y galerías', 'Otros escenarios de rodaje del pueblo'],
      faq: [
        {
          q: '¿Hace falta haber visto Juego de Tronos?',
          a: 'No. La ruta cuenta el rodaje y la historia de los lugares, así que se disfruta igual si no has visto la serie. Si la has visto, te sentirás dentro.',
        },
        {
          q: '¿La ruta de Juego de Tronos es solo en temporada?',
          a: 'No, se hace todo el año, con reserva previa. Tú eliges el día dentro de la disponibilidad de la guía.',
        },
      ],
      caption: 'fig. 7 — Gradas de la plaza de toros, escenario de rodaje.',
    },
    nocturna: {
      name: 'Osuna nocturna',
      shortName: 'Osuna nocturna',
      h1: 'Visita guiada nocturna por Osuna',
      metaTitle: 'Visita guiada nocturna por Osuna',
      metaDesc:
        'Visita guiada nocturna por Osuna: calles en penumbra, fachadas de piedra a la luz de las farolas e historias de la villa. Todo el año, con reserva.',
      teaser: 'Piedra a la luz de las farolas e historias de la villa.',
      desc: 'Cuando baja el calor, la villa cambia de piel. Calles en penumbra, fachadas de piedra a la luz de las farolas e historias de Osuna contadas a la hora en que mejor se escuchan.',
      body: [
        {
          h: 'Qué vas a ver',
          p: [
            'Al caer la noche, Osuna se vuelve otra. Salimos de la Plaza Mayor y recorremos calles en penumbra, la calle San Pedro con sus fachadas barrocas iluminadas por las farolas y la subida hacia el cerro, desde donde la villa se ve como un mapa de luces.',
            'Es una ruta de historias: de los duques y de quienes vivieron en estas casas, de la villa y de su gente, contadas a la hora en que mejor se escuchan.',
          ],
        },
        {
          h: 'Por qué merece la pena',
          p: [
            'Porque es otra manera de ver Osuna, más tranquila y más cercana, y porque en verano es la mejor hora para pasear. Si ya hiciste otra ruta de día, la nocturna la completa; si solo tienes una noche, es la mejor presentación de la villa.',
          ],
        },
        {
          h: 'Cómo es la visita',
          p: [
            'Se hace todo el año, con reserva previa. Dura unas tres horas, adaptable, y la hora de salida la acordamos al reservar según la época del año. El precio incluye las entradas si el recorrido pasa por algún espacio con taquilla. Si alguien del grupo va en silla de ruedas o con carrito, avísanos al reservar y adaptamos el recorrido.',
          ],
        },
      ],
      family:
        'A los niños les suele gustar mucho pasear de noche y escuchar historias; si son pequeños, podemos acortar la ruta.',
      stops: ['Plaza Mayor', 'Calle San Pedro iluminada', 'Subida al cerro', 'Vista nocturna de la villa'],
      faq: [
        {
          q: '¿A qué hora empieza la visita nocturna?',
          a: 'No hay hora fija: la acordamos al reservar según la época del año y la hora a la que anochece, para que el paseo empiece con las luces encendidas.',
        },
        {
          q: '¿La ruta nocturna se hace todo el año?',
          a: 'Sí, todo el año, con reserva previa. En verano es la mejor opción para evitar el calor del día.',
        },
      ],
      caption: 'fig. 8 — Osuna desde lo alto, en duotono.',
    },
  },

  routePage: {
    kicker: (n: string) => `Ruta ${n}`,
    stops: 'Recorrido',
    family: 'En familia',
    faq: 'Preguntas sobre esta ruta',
    endTitle: '¿Reservamos?',
    endText: 'Escríbenos por WhatsApp con la fecha y cuántas personas sois. Te respondemos con la disponibilidad y el precio.',
    related: 'Otras rutas por Osuna',
    customLink: 'O combina varias en una visita a medida',
    guidedBy: `Con una guía oficial de turismo de Andalucía (n.º ${s.guideLicense})`,
  },

  customPage: {
    metaTitle: 'Visitas para grupos y colegios en Osuna',
    metaDesc: `Visitas guiadas a medida en Osuna para grupos, colegios, institutos y empresas: hasta ${s.maxGroup} personas, entradas incluidas y contenido adaptado a cada grupo.`,
    kicker: 'Visitas a medida',
    h1: 'Visitas guiadas a medida en Osuna para grupos, colegios y empresas',
    lead: 'Combinamos rutas, ajustamos la duración y adaptamos el contenido a quien viene: una familia con niños, un viaje de jubilados, una clase de 4.º de ESO o un equipo de empresa. Cuéntanos qué buscáis y preparamos la visita.',
    audiencesTitle: 'Para quién',
    audiences: [
      { t: 'Particulares y familias', d: 'Visitas privadas en el idioma que prefieras.' },
      { t: 'Grupos', d: 'Asociaciones, viajes organizados y grupos de amigos.' },
      { t: 'Colegios e institutos', d: 'Contenidos adaptados a cada etapa y al currículo.' },
      { t: 'Empresas', d: 'Actividades para equipos, congresos y visitas institucionales.' },
    ],
    howTitle: 'Cómo funciona',
    how: [
      { t: 'Nos escribes', d: 'Por WhatsApp o por teléfono: qué grupo sois, cuántas personas, qué fecha os interesa y qué os gustaría ver.' },
      { t: 'Te proponemos la visita', d: 'Un recorrido a vuestra medida, con su duración y el precio, que depende del grupo y de la ruta.' },
      { t: 'Confirmas y pagas', d: 'El pago se realiza por adelantado al confirmar la reserva; el medio de pago lo concretamos entonces.' },
      { t: 'Nos vemos en Osuna', d: 'En la Plaza Mayor, en la puerta del Ayuntamiento, salvo que acordemos otro punto.' },
    ],
    schoolsTitle: 'Colegios e institutos',
    schools: [
      'Una salida a Osuna toca historia, arte, arqueología y patrimonio en una sola mañana. Adaptamos el contenido a cada etapa y al currículo, y preparamos la visita con el profesorado para que encaje con lo que se está trabajando en clase.',
      `Los grupos son de hasta ${s.maxGroup} personas. Las entradas a los monumentos están incluidas en el precio.`,
    ],
    combineTitle: 'Rutas que puedes combinar',
    faq: [
      {
        q: '¿Podemos combinar varias rutas en una sola visita?',
        a: 'Sí, es lo más habitual en las visitas a medida. Por ejemplo, la Colegiata y la Antigua Universidad, que están en el mismo cerro. Ajustamos la duración a vuestro plan.',
      },
      {
        q: '¿Adaptáis la visita a la edad del alumnado?',
        a: 'Sí. El contenido se adapta a cada etapa, de primaria a bachillerato, y al currículo. Cuéntanos el curso y qué estáis trabajando en clase.',
      },
      {
        q: '¿Con cuánta antelación hay que reservar una visita de grupo?',
        a: 'Con la mayor antelación posible: así es más fácil encontrar la fecha que os encaja. Escríbenos y te decimos la disponibilidad.',
      },
    ],
    caption: 'fig. 9 — Osuna desde el mirador de la Colegiata, con la campiña al fondo.',
  },

  faqPage: {
    metaTitle: 'Preguntas frecuentes: visitas en Osuna',
    metaDesc:
      'Cómo reservar, precios, entradas, idiomas, punto de encuentro, cancelaciones y calor: respuestas a las dudas sobre las visitas guiadas en Osuna.',
    kicker: 'Preguntas frecuentes',
    h1: 'Preguntas frecuentes sobre las visitas guiadas en Osuna',
    lead: 'Todo lo que suele preguntarse antes de reservar. Si tu duda no está aquí, escríbenos por WhatsApp.',
    groups: { booking: 'Reserva y precio', visit: 'La visita', conditions: 'Condiciones' },
    more: 'Las preguntas sobre cada ruta están en su página.',
  },

  /**
   * Preguntas generales. `home: true` = aparecen en el inicio (y su JSON-LD FAQPage va en el inicio);
   * el resto llevan su JSON-LD en la página de preguntas frecuentes, para no duplicar preguntas.
   */
  faq: [
    {
      group: 'booking',
      home: true,
      q: '¿Cómo reservo una visita?',
      a: 'Escríbenos por WhatsApp o llámanos. Dinos qué ruta te interesa, la fecha y cuántas personas sois, y te confirmamos la disponibilidad. Todas las visitas son con reserva previa: tú eliges el día.',
    },
    {
      group: 'booking',
      home: true,
      q: '¿Cuánto cuesta? ¿Hay descuentos?',
      a: 'Precio a consultar según grupo y ruta. Las entradas a los monumentos están incluidas en el precio. Hay descuentos para niños.',
    },
    {
      group: 'booking',
      q: '¿Cómo y cuándo se paga?',
      a: 'El pago se realiza por adelantado al confirmar la reserva, con las entradas a los monumentos incluidas. El medio de pago lo concretamos contigo en ese momento.',
    },
    {
      group: 'booking',
      q: '¿Están incluidas las entradas a los monumentos?',
      a: 'Sí. El precio de la visita incluye las entradas a los monumentos del recorrido, así que no tienes que pagar nada aparte en taquilla.',
    },
    {
      group: 'booking',
      q: '¿Hay salidas fijas o puedo elegir el día?',
      a: 'No hay salidas fijas. Todas las visitas son con reserva previa y tú eliges el día dentro de la disponibilidad de la guía.',
    },
    {
      group: 'visit',
      home: true,
      q: '¿En qué idiomas son las visitas?',
      a: 'En español, inglés, alemán e italiano. Indícanos el idioma al reservar.',
    },
    {
      group: 'visit',
      home: true,
      q: '¿Dónde empieza la visita?',
      a: 'En la Plaza Mayor de Osuna, en la puerta del Ayuntamiento, en todas las rutas salvo la de Las Canteras: esa ruta requiere vehículo propio y te indicamos el punto de encuentro al reservar.',
    },
    {
      group: 'visit',
      q: '¿Cuánto dura una visita?',
      a: 'Unas tres horas, a pie y con paradas. La duración es adaptable: si necesitas algo más corto o más largo, lo ajustamos.',
    },
    {
      group: 'visit',
      q: '¿Cuántas personas puede tener un grupo?',
      a: `Hasta ${s.maxGroup} personas por grupo.`,
    },
    {
      group: 'visit',
      q: '¿Es accesible para personas con movilidad reducida?',
      a: 'Si alguien del grupo va en silla de ruedas o con carrito, avísanos al reservar y adaptamos el recorrido.',
    },
    {
      group: 'visit',
      q: '¿Qué pasa si hace mucho calor?',
      a: 'En verano Osuna puede superar los 40 °C, así que de junio a septiembre las salidas son a primera hora de la mañana y al caer la tarde, con paradas a la sombra y en interiores. Si hay aviso naranja o rojo por calor, te proponemos otra fecha o anulamos sin coste.',
    },
    {
      group: 'conditions',
      home: true,
      q: '¿Puedo cancelar?',
      a: 'Sí. La cancelación es gratuita hasta 24 horas antes. Con menos de 24 horas de antelación no se devuelve el importe.',
    },
    {
      group: 'conditions',
      q: '¿Quién hace la visita?',
      a: `Una guía oficial de turismo de Andalucía, con el n.º de registro ${s.guideLicense}. Si por algún motivo no pudiera hacer la visita, otro guía oficial se encargaría de llevarla a cabo.`,
    },
  ],

  contact: {
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    whatsappAction: 'Escribir por WhatsApp',
    hours: 'Horario de atención',
    guide: 'Guía oficial de turismo de Andalucía',
    meeting: 'Punto de encuentro',
    directions: 'Cómo llegar',
    mapLabel: 'Mapa con el punto de encuentro en la Plaza Mayor de Osuna',
    noscript: 'El mapa necesita JavaScript. Usa el enlace «Cómo llegar».',
    marker: 'Punto de encuentro',
  },
  days: {
    monSat: 'Lunes a sábado',
    sun: 'Domingos',
  },

  footer: {
    routes: 'Rutas',
    more: 'Más',
    council: 'Con la colaboración del Ayuntamiento de Osuna',
    councilPlaceholder: 'Espacio para el logotipo del Ayuntamiento de Osuna',
    legalNav: 'Información legal',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    credits: 'Créditos de las fotos',
    photos: 'Fotografías de Wikimedia Commons con licencias libres.',
    noCookies: 'Esta web no usa cookies.',
  },

  alt: {
    'colegiata-exterior': 'Cabecera de la Colegiata de Osuna, de piedra dorada, con su torre y tejados de teja bajo un cielo azul intenso.',
    'colegiata-portada': 'Portada renacentista de la Colegiata de Osuna, con un arco labrado en piedra sobre la puerta de madera.',
    'colegiata-iglesia': 'Nave central de la Colegiata de Osuna, con columnas de piedra clara y el retablo dorado al fondo.',
    'colegiata-panteon': 'Capilla subterránea del Sepulcro Ducal de Osuna, con bóveda de piedra, columnas, zócalo de azulejos y un cuadro en el altar.',
    'colegiata-techumbre': 'Techumbre de madera de la sala capitular de la Colegiata de Osuna, decorada con azulejos de colores entre las vigas.',
    'universidad-fachada': 'Fachada de la Antigua Universidad de Osuna, de piedra ocre, con torres cilíndricas en las esquinas rematadas en chapiteles.',
    'universidad-patio': 'Patio porticado de la Antigua Universidad de Osuna, con dos pisos de arcos sobre columnas y un pozo en el centro.',
    'universidad-torres': 'Esquina de la Antigua Universidad de Osuna con dos de sus torres de chapitel bajo un cielo azul.',
    'universidad-retablo': 'Retablo de la antigua capilla de la Universidad de Osuna, con pinturas de santos y una imagen de la Virgen en el centro.',
    'encarnacion-claustro': 'Claustro del Monasterio de la Encarnación de Osuna, con arcos blancos en dos pisos, plantas y zócalos de azulejo.',
    'encarnacion-azulejo': 'Panel de azulejo sevillano del siglo XVIII en la Encarnación de Osuna, con una escena de caza entre árboles en azul y ocre.',
    'encarnacion-iglesia': 'Interior de la iglesia del Monasterio de la Encarnación de Osuna, con bóveda decorada y retablo dorado.',
    'encarnacion-portada': 'Portada de piedra de la iglesia del Monasterio de la Encarnación de Osuna, con espadaña y calle empedrada.',
    'san-pedro-gomera': 'Portada barroca del Palacio del Marqués de la Gomera en Osuna, con balcón de piedra, columnas salomónicas, escudo y cornisa ondulada.',
    'san-pedro-calle': 'Calle San Pedro de Osuna, con fachadas encaladas, portadas de piedra y balcones de forja.',
    'casa-de-los-torres': 'Portada de piedra de la Casa de los Torres de Osuna, con balcón y remate barroco sobre una pared encalada.',
    aldaba: 'Aldaba de hierro en forma de mano sobre una puerta antigua de madera en Osuna.',
    'canteras-relieves': 'Paredes de piedra del Coto de las Canteras de Osuna, con relieves tallados y grandes huecos en la roca.',
    'canteras-interior': 'Interior del Coto de las Canteras de Osuna: muros de roca tallada que se abren al cielo como una gran sala.',
    'tumbas-romanas': 'Tumbas excavadas en la roca en la necrópolis de Osuna.',
    'plaza-toros-gradas': 'Gradas de piedra y palcos de la plaza de toros de Osuna, escenario de rodaje.',
    'plaza-toros-panoramica': 'Vista panorámica del ruedo y las gradas de la plaza de toros de Osuna.',
    'plaza-toros-galeria': 'Galería abovedada de piedra bajo las gradas de la plaza de toros de Osuna.',
    'plaza-toros-exterior': 'Fachada exterior de piedra de la plaza de toros de Osuna, con su puerta en arco.',
    'vista-panoramica': 'Panorámica de Osuna desde el mirador de la Colegiata: casas blancas y campiña hasta el horizonte.',
    'nocturna-duotono': 'Osuna desde lo alto en duotono azul noche: tejados, torres y la campiña al fondo.',
    'nocturna-san-pedro': 'Calle San Pedro de Osuna en duotono azul noche, con faroles y balcones de forja.',
    'nocturna-plaza-mayor': 'Plaza Mayor de Osuna en duotono azul noche, con el Ayuntamiento y la Colegiata al fondo.',
  } as Record<string, string>,

  credits: {
    metaTitle: 'Créditos de las fotografías de Osuna',
    metaDesc:
      'Autores, licencias y procedencia de las fotografías de Wikimedia Commons usadas en la web de visitas guiadas en Osuna (Sevilla) de Osuna Paso a Paso.',
    title: 'Créditos de las fotografías',
    intro:
      'Todas las fotografías proceden de Wikimedia Commons y se usan con licencias libres. Gracias a sus autores. Las versiones modificadas de fotos con licencia CC BY-SA se comparten bajo la misma licencia.',
    photo: 'Foto',
    author: 'Autor',
    license: 'Licencia',
    source: 'Original',
    changes: { none: 'Sin cambios', grade: 'Recorte y ajuste de color', duotone: 'Convertida a duotono' },
    publicDomain: 'Dominio público',
    logo: 'El logotipo y el diseño de la web son originales. Mapa: © colaboradores de OpenStreetMap.',
  },

  legal: {
    metaTitle: 'Aviso legal · visitas guiadas en Osuna',
    metaDesc:
      'Aviso legal de la web de visitas guiadas en Osuna de Osuna Paso a Paso: datos de la titular, condiciones de uso, propiedad intelectual y responsabilidad.',
    title: 'Aviso legal',
    sections: [
      {
        h: 'Titular de la web',
        p: [
          'En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos de la titular de esta web:',
          `Titular: ${s.owner.name}, trabajadora autónoma · NIF: ${s.owner.taxId} · Domicilio: ${s.owner.address} · Correo electrónico: ${s.owner.email} · Teléfono: ${s.phoneDisplay} · Guía oficial de turismo de Andalucía, n.º de registro ${s.guideLicense}. Nombre comercial: ${s.brand}.`,
        ],
      },
      {
        h: 'Objeto',
        p: [
          `Esta web informa sobre las visitas guiadas por Osuna que ofrece ${s.brand} y facilita el contacto para reservarlas por teléfono o WhatsApp. No se realizan ventas ni pagos a través de la web.`,
        ],
      },
      {
        h: 'Condiciones de uso',
        p: [
          'El acceso a la web es libre y gratuito. Quien la visita se compromete a hacer un uso adecuado de sus contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.',
          'Las condiciones de cada visita (fecha, recorrido y precio) se confirman al reservar.',
        ],
      },
      {
        h: 'Propiedad intelectual',
        p: [
          'Los textos, el logotipo y el diseño de la web pertenecen a su titular. Las fotografías son de sus autores y se usan con licencias libres, como se detalla en la página de créditos.',
        ],
      },
      {
        h: 'Responsabilidad y enlaces',
        p: [
          'La titular no se hace responsable de los contenidos de webs externas enlazadas (por ejemplo, WhatsApp, Google Maps u OpenStreetMap), ni de interrupciones del servicio por causas ajenas.',
        ],
      },
      {
        h: 'Legislación aplicable',
        p: ['Este aviso legal se rige por la legislación española.'],
      },
    ],
  },

  privacy: {
    metaTitle: 'Privacidad · visitas guiadas en Osuna',
    metaDesc:
      'Cómo tratamos tus datos cuando contactas por WhatsApp o por teléfono para reservar una visita guiada en Osuna: responsable, finalidad y tus derechos.',
    title: 'Política de privacidad',
    sections: [
      {
        h: 'Responsable del tratamiento',
        p: [
          `${s.owner.name}, NIF ${s.owner.taxId}, con domicilio en ${s.owner.address}. Contacto: ${s.owner.email} · ${s.phoneDisplay}.`,
        ],
      },
      {
        h: 'Qué datos tratamos y para qué',
        p: [
          'La web no tiene formularios ni cuentas de usuario. Solo tratamos los datos que tú nos facilitas al contactar por WhatsApp o por teléfono: tu nombre, tu número de teléfono, el contenido de los mensajes y los detalles de la visita (fecha, número de personas, idioma, necesidades de accesibilidad si nos las indicas).',
          'Los usamos únicamente para responder a tu consulta, gestionar la reserva y el pago, y avisarte de cualquier cambio en la visita.',
        ],
      },
      {
        h: 'Base legal',
        p: [
          'La aplicación de medidas precontractuales y la ejecución del servicio que solicitas (artículo 6.1.b del Reglamento General de Protección de Datos, RGPD), y el cumplimiento de obligaciones legales, por ejemplo fiscales (artículo 6.1.c).',
        ],
      },
      {
        h: 'WhatsApp',
        p: [
          'Si eliges WhatsApp, la comunicación pasa por los servidores de WhatsApp Ireland Limited (grupo Meta), que trata los datos según su propia política de privacidad y puede realizar transferencias internacionales de datos. Si prefieres no usarlo, puedes llamarnos por teléfono.',
        ],
      },
      {
        h: 'Cuánto tiempo los conservamos',
        p: [
          'Mientras dure la gestión de la reserva y, después, durante el tiempo necesario para cumplir obligaciones legales. Las conversaciones que no terminan en reserva se eliminan en un plazo máximo de 12 meses.',
        ],
      },
      {
        h: 'Con quién los compartimos',
        p: [
          'Con nadie, salvo obligación legal. Si la guía no pudiera hacer una visita, los datos imprescindibles de la reserva se comunicarían al guía oficial que la sustituya, solo para poder realizarla. No vendemos ni cedemos datos a terceros.',
        ],
      },
      {
        h: 'Analítica sin cookies',
        p: [
          'Para saber cuántas personas visitan la web usamos Cloudflare Web Analytics, una herramienta que no instala cookies, no usa identificadores persistentes y no rastrea a las personas entre webs. Solo ofrece estadísticas agregadas y anónimas (páginas vistas, país, tipo de dispositivo).',
        ],
      },
      {
        h: 'Alojamiento y mapa',
        p: [
          'La web está alojada en Cloudflare. Como cualquier servidor web, recibe datos técnicos de la conexión (dirección IP, navegador) para poder servir las páginas y protegerlas frente a ataques.',
          'El mapa del punto de encuentro carga sus imágenes desde los servidores de OpenStreetMap, que reciben tu dirección IP para enviarlas. OpenStreetMap no instala cookies.',
        ],
      },
      {
        h: 'Tus derechos',
        p: [
          `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${s.owner.email}. Si consideras que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`,
        ],
      },
    ],
  },

  cookies: {
    metaTitle: 'Política de cookies · visitas en Osuna',
    metaDesc:
      'La web de visitas guiadas en Osuna no usa cookies propias ni de terceros: ni de análisis ni de publicidad. Por eso no verás ningún banner de cookies.',
    title: 'Política de cookies',
    sections: [
      {
        h: 'Esta web no usa cookies',
        p: [
          'No instalamos cookies propias ni de terceros: ni de análisis, ni de publicidad, ni de redes sociales. Por eso no te mostramos ningún banner de consentimiento.',
        ],
      },
      {
        h: 'Cómo lo conseguimos',
        p: [
          'Las fuentes tipográficas están alojadas en la propia web, el mapa usa OpenStreetMap (sin cookies) en lugar de Google Maps, no hay vídeos incrustados y la analítica (Cloudflare Web Analytics) funciona sin cookies.',
          'Los enlaces a WhatsApp y a Google Maps solo te llevan a esos servicios si haces clic; a partir de ahí se aplican sus propias políticas.',
        ],
      },
      {
        h: 'Si esto cambia',
        p: ['Si algún día incorporamos cookies, actualizaremos esta política y te pediremos el consentimiento antes de instalarlas.'],
      },
    ],
  },

  notFound: {
    metaTitle: 'Página no encontrada · visitas en Osuna',
    metaDesc: 'La página que buscas no existe o ha cambiado de sitio. Vuelve al inicio de Osuna Paso a Paso y elige una de las siete rutas guiadas por Osuna.',
    kicker: 'Error 404',
    title: 'Esta calle no lleva a ninguna parte',
    text: 'La página que buscas no existe o ha cambiado de sitio. Vuelve al inicio y elige tu ruta.',
    back: 'Volver al inicio',
  },
  lastUpdated: 'Última actualización: octubre de 2026',
};

export default es;
export type Dict = typeof es;
