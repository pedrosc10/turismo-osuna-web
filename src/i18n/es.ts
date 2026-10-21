import { site, minPrice } from '../data/site';

const c = site.cancellation;
const p = site.pricing;

/**
 * Textos en español (idioma por defecto).
 * Los otros idiomas (en.ts, de.ts) tienen exactamente la misma estructura.
 * Las entradas con `todo: true` contienen información provisional y se resaltan en `astro dev`.
 */
const es = {
  locale: 'es-ES',
  meta: {
    title: 'Visitas guiadas en Osuna · Colegiata, Universidad y Juego de Tronos',
    description:
      'Visitas guiadas en Osuna (Sevilla) con guía oficial: Colegiata, Antigua Universidad, calle San Pedro, Las Canteras y escenarios de rodaje de Juego de Tronos. En español, inglés, alemán e italiano. Reserva por WhatsApp.',
    ogAlt: 'Colegiata de Osuna en piedra dorada bajo un cielo azul, con el texto «Visitas guiadas en Osuna».',
    ogTitle: 'Visitas guiadas en Osuna',
    ogLine: 'Colegiata · Universidad · Calle San Pedro · Las Canteras',
  },
  nav: {
    skip: 'Saltar al contenido',
    routes: 'Rutas',
    custom: 'A medida',
    gallery: 'Galería',
    faq: 'Preguntas',
    map: 'Encuentro',
    contact: 'Contacto',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    home: 'Inicio',
    mainNav: 'Navegación principal',
  },
  langNames: { es: 'Español', en: 'English', de: 'Deutsch' },
  tourLangs: { es: 'español', en: 'inglés', de: 'alemán', it: 'italiano' },
  list: (items: string[]) => items.slice(0, -1).join(', ') + ' e ' + items[items.length - 1],

  hero: {
    kicker: 'Visitas guiadas · Osuna, Sevilla',
    titleA: 'Osuna,',
    titleB: 'piedra a piedra.',
    lead: 'La Colegiata, la Antigua Universidad, los palacios barrocos de la calle San Pedro y las canteras de donde salió todo, contados por una guía oficial que vive aquí. Unas tres horas a pie por la villa ducal.',
    languages: 'Visitas en español, inglés, alemán e italiano',
    caption: 'fig. 1 — Cabecera de la Colegiata de Santa María de la Asunción, en lo alto de la villa.',
  },
  cta: {
    whatsapp: 'Reservar por WhatsApp',
    call: 'Llamar',
    callNumber: (n: string) => `o llama al ${n}`,
    bookRoute: 'Reservar esta ruta',
    floating: 'Reservar por WhatsApp',
    newTab: '(se abre en una pestaña nueva)',
  },
  wa: {
    general: 'Hola, me gustaría reservar una visita guiada por Osuna. ¿Qué disponibilidad tenéis?',
    route: (name: string) =>
      `Hola, me gustaría reservar la ruta «${name}». ¿Qué días tenéis disponibles? Somos __ personas.`,
    custom: 'Hola, me interesa una visita a medida por Osuna (grupo / colegio / empresa). ¿Podemos hablarlo?',
  },

  routesSection: {
    kicker: 'Itinerarios',
    title: 'Siete maneras de recorrer Osuna',
    intro:
      'Cada ruta dura unas tres horas y se hace a pie. Puedes reservarlas sueltas o combinar varias en una visita a medida.',
    labels: {
      duration: 'Duración',
      languages: 'Idiomas',
      price: 'Precio',
      schedule: 'Salidas',
    },
    durationValue: (h: number) => `≈ ${h} horas`,
    priceFrom: (n: number) => `desde ${n} €/persona`,
    priceOnRequest: 'a consultar',
    groups: 'Grupos y colegios: a consultar',
  },
  days: {
    tueSun: 'de martes a domingo',
    tueSat: 'de martes a sábado',
    friSun: 'de viernes a domingo',
    friSat: 'viernes y sábados',
    monSat: 'Lunes a sábado',
    sun: 'Domingos',
  },
  scheduleValue: (days: string, times: readonly string[]) =>
    `${days.charAt(0).toUpperCase() + days.slice(1)}, ${times.join(' y ')} h`,

  routes: {
    colegiata: {
      name: 'Colegiata de Santa María de la Asunción y Sepulcro Ducal',
      shortName: 'Colegiata y Sepulcro Ducal',
      desc: 'El gran templo renacentista que el conde de Ureña levantó en el siglo XVI en lo alto del cerro. Dentro, un museo de arte sacro con obras de José de Ribera; bajo la iglesia, el Sepulcro Ducal, panteón de los Téllez-Girón.',
      caption: 'fig. 2 — Portada principal de la Colegiata, en piedra labrada.',
    },
    universidad: {
      name: 'Antigua Universidad',
      shortName: 'Antigua Universidad',
      desc: 'Fundada en 1548 por el mismo conde de Ureña, fue universidad durante casi tres siglos. Un edificio de planta cuadrada, con torres en las esquinas y un elegante patio porticado de dos pisos.',
      caption: 'fig. 3 — La Universidad, con sus torres de esquina.',
    },
    encarnacion: {
      name: 'Monasterio de la Encarnación',
      shortName: 'Monasterio de la Encarnación',
      desc: 'Un monasterio de clausura del siglo XVII cuyo claustro está revestido de azulejería sevillana del XVIII. Su museo de arte sacro guarda piezas que rara vez salen en las guías.',
      caption: 'fig. 4 — El claustro de la Encarnación.',
    },
    sanpedro: {
      name: 'Calle San Pedro y palacios barrocos',
      shortName: 'Calle San Pedro y palacios barrocos',
      desc: 'Casas señoriales y palacios del siglo XVIII con portadas de piedra que parecen talladas en cera. Paseamos la calle San Pedro y sus alrededores leyendo fachadas, escudos y balcones.',
      caption: 'fig. 5 — Portada barroca del palacio de los Gomera, en la calle San Pedro.',
    },
    canteras: {
      name: 'Las Canteras, necrópolis y zona arqueológica',
      shortName: 'Las Canteras y zona arqueológica',
      desc: 'Las canteras de donde salió la piedra de Osuna desde la Antigüedad, la necrópolis excavada en la roca y los restos de Urso, la ciudad iberorromana, con su teatro. La Osuna de antes de Osuna.',
      caption: 'fig. 6 — Paredes talladas en el Coto de las Canteras.',
    },
    cine: {
      name: 'Osuna de cine: escenarios de rodaje de Juego de Tronos',
      shortName: 'Osuna de cine (Juego de Tronos)',
      desc: 'En 2014 la plaza de toros de Osuna se convirtió en plató para la quinta temporada de Juego de Tronos. Recorremos los escenarios de rodaje y contamos cómo vivió el pueblo aquellas semanas.',
      caption: 'fig. 7 — Gradas de la plaza de toros, escenario de rodaje.',
    },
    nocturna: {
      name: 'Osuna nocturna',
      shortName: 'Osuna nocturna',
      desc: 'Cuando baja el calor, la villa cambia de piel. Calles en penumbra, fachadas de piedra a la luz de las farolas e historias de Osuna contadas a la hora en que mejor se escuchan.',
      caption: 'fig. 8 — Osuna desde lo alto, en duotono.',
    },
  },

  custom: {
    kicker: 'Visitas a medida',
    title: 'Tu grupo, tu ritmo, tu Osuna',
    text: 'Combinamos rutas, ajustamos la duración y adaptamos el contenido a quien viene: una familia con niños, un viaje de jubilados, una clase de 4.º de ESO o un equipo de empresa. Cuéntanos qué buscáis y preparamos la visita.',
    audiences: [
      { t: 'Particulares y familias', d: 'Visitas privadas en el idioma que prefieras.' },
      { t: 'Grupos', d: 'Asociaciones, viajes organizados y grupos de amigos.' },
      { t: 'Colegios e institutos', d: 'Contenidos adaptados a cada etapa y al currículo.' },
      { t: 'Empresas', d: 'Actividades para equipos, congresos y visitas institucionales.' },
    ],
    cta: 'Pedir una visita a medida',
    caption: 'fig. 9 — Osuna desde el mirador de la Colegiata, con la campiña al fondo.',
  },

  gallery: {
    kicker: 'Galería',
    title: 'Lo que vas a ver',
    open: (alt: string) => `Ampliar foto: ${alt}`,
    dialog: 'Galería de fotos',
    close: 'Cerrar',
    prev: 'Foto anterior',
    next: 'Foto siguiente',
    counter: (i: number, n: number) => `${i} de ${n}`,
  },

  faq: {
    kicker: 'Preguntas frecuentes',
    title: 'Antes de reservar',
    items: [
      {
        q: '¿Cómo reservo una visita?',
        a: 'Escríbenos por WhatsApp o llámanos. Dinos qué ruta te interesa, la fecha y cuántas personas sois, y te confirmamos la disponibilidad en el momento. No hace falta pagar por adelantado.',
        todo: true, // TODO-V2: dato provisional (pago)
      },
      {
        q: '¿En qué idiomas son las visitas?',
        a: 'En español, inglés, alemán e italiano. Indícanos el idioma al reservar.',
      },
      {
        q: '¿Cuánto dura una visita?',
        a: 'Unas tres horas, a pie y con paradas. Si necesitas algo más corto o más largo, lo adaptamos en una visita a medida.',
      },
      {
        q: '¿Cuánto cuesta? ¿Hay descuentos?',
        a: `Las rutas cuestan desde ${minPrice} € por persona según el itinerario. Los menores de ${p.childrenFreeUnder} años no pagan, y estudiantes y mayores de 65 tienen un ${p.reducedDiscountPercent} % de descuento. Para grupos y colegios te hacemos un precio a medida.`,
        todo: true, // TODO-V2: dato provisional (precios y descuentos)
      },
      {
        q: '¿Dónde empieza la visita?',
        a: 'En la Plaza Mayor de Osuna, en la puerta del Ayuntamiento. En la ruta de Las Canteras te indicaremos al reservar si quedamos allí o directamente en la zona arqueológica.',
        todo: true, // TODO-V2: dato provisional (punto de encuentro)
      },
      {
        q: '¿Es accesible para personas con movilidad reducida?',
        a: 'Osuna tiene cuestas y calles empedradas, y la Colegiata está en lo alto del cerro. Algunos interiores tienen escalones. Avísanos al reservar y adaptamos el recorrido; la ruta por la calle San Pedro es la más llana.',
        todo: true, // TODO-V2: dato provisional (accesibilidad)
      },
      {
        q: '¿Qué pasa si llueve o hace mucho calor?',
        a: 'En verano Osuna puede superar los 40 °C, así que de junio a septiembre las salidas son a primera hora de la mañana y al caer la tarde, con paradas a la sombra y en interiores. Si hay aviso naranja o rojo por calor, o lluvia fuerte, te proponemos otra fecha o anulamos sin coste.',
        todo: true, // TODO-V2: dato provisional (política de mal tiempo)
      },
      {
        q: '¿Puedo cancelar?',
        a: `Sí. Si avisas con al menos ${c.individualHours} horas de antelación, la cancelación no tiene coste. Para grupos y colegios el plazo es de ${c.groupHours} horas.`,
        todo: true, // TODO-V2: dato provisional (política de cancelación)
      },
      {
        q: '¿Están incluidas las entradas a los monumentos?',
        a: 'No. El precio incluye la visita guiada; las entradas a la Colegiata, la Encarnación y otros espacios con taquilla se pagan aparte, en el propio monumento. Te avisamos del importe al reservar.',
        todo: true, // TODO-V2: dato provisional (entradas)
      },
    ],
  },

  map: {
    kicker: 'Punto de encuentro',
    title: 'Nos vemos en la Plaza Mayor',
    text: 'Salvo que acordemos otro sitio, las visitas empiezan en la Plaza Mayor, frente a la puerta del Ayuntamiento. Llega cinco minutos antes: te esperamos allí.',
    directions: 'Cómo llegar',
    mapLabel: 'Mapa con el punto de encuentro en la Plaza Mayor de Osuna',
    noscript: 'El mapa necesita JavaScript. Usa el enlace «Cómo llegar».',
    marker: 'Punto de encuentro',
    caption: 'fig. 10 — La Plaza Mayor y el Ayuntamiento.',
  },

  contact: {
    kicker: 'Contacto',
    title: 'Reserva tu visita',
    text: 'La forma más rápida es WhatsApp: cuéntanos ruta, fecha y número de personas. Si lo prefieres, llámanos.',
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    whatsappAction: 'Escribir por WhatsApp',
    hours: 'Horario de atención',
    guide: 'Guía oficial de turismo de Andalucía',
  },

  footer: {
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
    'colegiata-panteon': 'Capilla subterránea del Sepulcro Ducal, con bóveda de piedra, columnas, zócalo de azulejos y un cuadro en el altar.',
    'colegiata-techumbre': 'Techumbre de madera de la sala capitular de la Colegiata, decorada con azulejos de colores entre las vigas.',
    'universidad-fachada': 'Fachada de la Antigua Universidad de Osuna, de piedra ocre, con torres cilíndricas en las esquinas rematadas en chapiteles.',
    'universidad-patio': 'Patio porticado de la Antigua Universidad, con dos pisos de arcos sobre columnas y un pozo en el centro.',
    'encarnacion-claustro': 'Claustro del Monasterio de la Encarnación, con arcos blancos en dos pisos, plantas y zócalos de azulejo.',
    'encarnacion-azulejo': 'Panel de azulejo sevillano del siglo XVIII en la Encarnación, con una escena de caza entre árboles en azul y ocre.',
    'san-pedro-gomera': 'Portada barroca del palacio de los Gomera, con balcón de piedra, columnas salomónicas, escudo y cornisa ondulada.',
    'san-pedro-calle': 'Calle San Pedro de Osuna, con fachadas encaladas, portadas de piedra y balcones de forja.',
    'casa-de-los-torres': 'Portada de piedra de la Casa de los Torres, con balcón y remate barroco sobre una pared encalada.',
    'canteras-relieves': 'Paredes de piedra del Coto de las Canteras, con relieves tallados y grandes huecos en la roca.',
    'canteras-interior': 'Interior del Coto de las Canteras: muros de roca tallada que se abren al cielo como una gran sala.',
    'tumbas-romanas': 'Tumbas excavadas en la roca en la necrópolis de Osuna.',
    'plaza-toros-gradas': 'Gradas de piedra y palcos de la plaza de toros de Osuna.',
    'plaza-toros-panoramica': 'Vista panorámica del ruedo y las gradas de la plaza de toros de Osuna.',
    'tejados': 'Tejados de teja y casas blancas de Osuna vistos desde lo alto.',
    aldaba: 'Aldaba de hierro en forma de mano sobre una puerta antigua de madera.',
    'plaza-mayor': 'Plaza Mayor de Osuna, con el Ayuntamiento encalado, balcones de forja y la Colegiata al fondo.',
    'vista-panoramica': 'Panorámica de Osuna desde el mirador de la Colegiata: casas blancas y campiña hasta el horizonte.',
    'nocturna-duotono': 'Osuna desde lo alto en duotono azul noche: tejados, torres y la campiña al fondo.',
  } as Record<string, string>,

  credits: {
    metaTitle: 'Créditos de las fotografías · Visitas guiadas en Osuna',
    metaDesc: 'Autores, licencias y procedencia de las fotografías usadas en la web de visitas guiadas en Osuna.',
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
    metaTitle: 'Aviso legal · Visitas guiadas en Osuna',
    metaDesc: 'Aviso legal de la web de visitas guiadas en Osuna: titular, condiciones de uso y propiedad intelectual.',
    title: 'Aviso legal',
    sections: [
      {
        h: 'Titular de la web',
        p: [
          'En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular de esta web:',
          `Titular: ${site.owner.name} · NIF: ${site.owner.taxId} · Domicilio: ${site.owner.address} · Correo electrónico: ${site.owner.email} · Teléfono: ${site.phoneDisplay} · Guía oficial de turismo de Andalucía, n.º de registro ${site.guideLicense}.`,
        ],
        todo: true, // TODO-V2: dato provisional (datos del titular)
      },
      {
        h: 'Objeto',
        p: [
          `Esta web informa sobre las visitas guiadas por Osuna que ofrece ${site.brand} y facilita el contacto para reservarlas por teléfono o WhatsApp. No se realizan ventas ni pagos a través de la web.`,
        ],
      },
      {
        h: 'Condiciones de uso',
        p: [
          'El acceso a la web es libre y gratuito. Quien la visita se compromete a hacer un uso adecuado de sus contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.',
          'Los precios y horarios publicados son orientativos. Las condiciones definitivas de cada visita se confirman al reservar.',
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
          'El titular no se hace responsable de los contenidos de webs externas enlazadas (por ejemplo, WhatsApp, Google Maps u OpenStreetMap), ni de interrupciones del servicio por causas ajenas.',
        ],
      },
      {
        h: 'Colaboración institucional',
        p: ['La promoción de esta web cuenta con la colaboración del Ayuntamiento de Osuna.'],
      },
      {
        h: 'Legislación aplicable',
        p: ['Este aviso legal se rige por la legislación española.'],
      },
    ],
  },

  privacy: {
    metaTitle: 'Política de privacidad · Visitas guiadas en Osuna',
    metaDesc: 'Cómo tratamos tus datos cuando contactas por WhatsApp o por teléfono para reservar una visita guiada en Osuna.',
    title: 'Política de privacidad',
    sections: [
      {
        h: 'Responsable del tratamiento',
        p: [
          `${site.owner.name}, NIF ${site.owner.taxId}, con domicilio en ${site.owner.address}. Contacto: ${site.owner.email} · ${site.phoneDisplay}.`,
        ],
        todo: true, // TODO-V2: dato provisional (datos del responsable)
      },
      {
        h: 'Qué datos tratamos y para qué',
        p: [
          'La web no tiene formularios ni cuentas de usuario. Solo tratamos los datos que tú nos facilitas al contactar por WhatsApp o por teléfono: tu nombre, tu número de teléfono, el contenido de los mensajes y los detalles de la visita (fecha, número de personas, idioma, necesidades de accesibilidad si nos las indicas).',
          'Los usamos únicamente para responder a tu consulta, gestionar la reserva y avisarte de cualquier cambio en la visita.',
        ],
      },
      {
        h: 'Base legal',
        p: [
          'La aplicación de medidas precontractuales y la ejecución del servicio que solicitas (artículo 6.1.b del Reglamento General de Protección de Datos, RGPD).',
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
        todo: true, // TODO-V2: dato provisional (plazo de conservación)
      },
      {
        h: 'Con quién los compartimos',
        p: ['Con nadie, salvo obligación legal. No vendemos ni cedemos datos a terceros.'],
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
          'La web está alojada en Cloudflare Pages. Como cualquier servidor web, recibe datos técnicos de la conexión (dirección IP, navegador) para poder servir las páginas y protegerlas frente a ataques.',
          'El mapa del punto de encuentro carga sus imágenes desde los servidores de OpenStreetMap, que reciben tu dirección IP para enviarlas. OpenStreetMap no instala cookies.',
        ],
      },
      {
        h: 'Tus derechos',
        p: [
          `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${site.owner.email}. Si consideras que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`,
        ],
      },
    ],
  },

  cookies: {
    metaTitle: 'Política de cookies · Visitas guiadas en Osuna',
    metaDesc: 'Esta web no usa cookies propias ni de terceros. Por eso no verás ningún banner de cookies.',
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
    metaTitle: 'Página no encontrada · Visitas guiadas en Osuna',
    kicker: 'Error 404',
    title: 'Esta calle no lleva a ninguna parte',
    text: 'La página que buscas no existe o ha cambiado de sitio. Vuelve al inicio y elige tu ruta.',
    back: 'Volver al inicio',
  },
  lastUpdated: 'Última actualización: octubre de 2026',
};

export default es;
export type Dict = typeof es;
