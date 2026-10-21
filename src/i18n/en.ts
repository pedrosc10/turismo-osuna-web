import { site, minPrice } from '../data/site';
import type { Dict } from './es';

const c = site.cancellation;
const p = site.pricing;

/** English texts. Same structure as es.ts. */
const en: Dict = {
  locale: 'en-GB',
  meta: {
    title: 'Guided Tours in Osuna · Collegiate Church, Old University & Game of Thrones',
    description:
      'Guided tours of Osuna, near Seville, with an official local guide: the Collegiate Church, the Old University, Calle San Pedro, the ancient quarries and Game of Thrones filming locations. Tours in English, Spanish, German and Italian. Book on WhatsApp.',
    ogAlt: 'The golden-stone Collegiate Church of Osuna against a blue sky, with the words "Guided tours in Osuna".',
    ogTitle: 'Guided tours in Osuna',
    ogLine: 'Collegiate Church · Old University · Calle San Pedro · Quarries',
  },
  nav: {
    skip: 'Skip to content',
    routes: 'Tours',
    custom: 'Private',
    gallery: 'Gallery',
    faq: 'FAQ',
    map: 'Meeting point',
    contact: 'Contact',
    menu: 'Menu',
    closeMenu: 'Close menu',
    language: 'Language',
    home: 'Home',
    mainNav: 'Main navigation',
  },
  langNames: { es: 'Español', en: 'English', de: 'Deutsch' },
  tourLangs: { es: 'Spanish', en: 'English', de: 'German', it: 'Italian' },
  list: (items: string[]) => items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1],

  hero: {
    kicker: 'Guided tours · Osuna, Seville',
    titleA: 'Osuna,',
    titleB: 'stone by stone.',
    lead: 'The Collegiate Church, the Old University, the Baroque palaces of Calle San Pedro and the quarries where it all began — told by an official guide who lives here. About three hours on foot through the old ducal town.',
    languages: 'Tours in English, Spanish, German and Italian',
    caption: 'fig. 1 — The east end of the Collegiate Church of Santa María de la Asunción, high above the town.',
  },
  cta: {
    whatsapp: 'Book on WhatsApp',
    call: 'Call',
    callNumber: (n: string) => `or call ${n}`,
    bookRoute: 'Book this tour',
    floating: 'Book on WhatsApp',
    newTab: '(opens in a new tab)',
  },
  wa: {
    general: "Hello! I'd like to book a guided tour of Osuna. What availability do you have?",
    route: (name: string) =>
      `Hello! I'd like to book the "${name}" tour. Which days are available? We are __ people.`,
    custom: "Hello! I'm interested in a private tour of Osuna (group / school / company). Could we talk about it?",
  },

  routesSection: {
    kicker: 'Itineraries',
    title: 'Seven ways to discover Osuna',
    intro:
      'Each tour lasts about three hours and is done on foot. Book them one at a time or combine several into a private tour.',
    labels: {
      duration: 'Duration',
      languages: 'Languages',
      price: 'Price',
      schedule: 'Departures',
    },
    durationValue: (h: number) => `approx. ${h} hours`,
    priceFrom: (n: number) => `from €${n} per person`,
    priceOnRequest: 'on request',
    groups: 'Groups and schools: on request',
  },
  days: {
    tueSun: 'Tuesday to Sunday',
    tueSat: 'Tuesday to Saturday',
    friSun: 'Friday to Sunday',
    friSat: 'Fridays and Saturdays',
    monSat: 'Monday to Saturday',
    sun: 'Sundays',
  },
  scheduleValue: (days: string, times: readonly string[]) => `${days}, ${times.join(' and ')}`,

  routes: {
    colegiata: {
      name: 'Collegiate Church of Santa María de la Asunción and the Ducal Crypt',
      shortName: 'Collegiate Church and Ducal Crypt',
      desc: 'The great Renaissance church built on the hilltop in the 16th century by the Count of Ureña. Inside, a museum of sacred art with works by José de Ribera; beneath it, the Ducal Crypt, burial place of the Téllez-Girón family.',
      caption: 'fig. 2 — The main doorway of the Collegiate Church, in carved stone.',
    },
    universidad: {
      name: 'Old University',
      shortName: 'Old University',
      desc: 'Founded in 1548 by the same Count of Ureña, it served as a university for almost three centuries. A square building with towers at each corner and a graceful two-storey arcaded courtyard.',
      caption: 'fig. 3 — The University and its corner towers.',
    },
    encarnacion: {
      name: 'Convent of La Encarnación',
      shortName: 'Convent of La Encarnación',
      desc: 'A 17th-century enclosed convent whose cloister is lined with 18th-century Seville tiles. Its museum of sacred art holds pieces that rarely make it into the guidebooks.',
      caption: 'fig. 4 — The cloister of La Encarnación.',
    },
    sanpedro: {
      name: 'Calle San Pedro and the Baroque palaces',
      shortName: 'Calle San Pedro and Baroque palaces',
      desc: 'Stately homes and 18th-century palaces with stone doorways so intricate they look carved from wax. We stroll along Calle San Pedro and nearby streets, reading façades, coats of arms and balconies.',
      caption: 'fig. 5 — The Baroque doorway of the Gomera palace on Calle San Pedro.',
    },
    canteras: {
      name: 'The quarries, necropolis and archaeological site',
      shortName: 'Quarries and archaeological site',
      desc: 'The quarries that have supplied Osuna stone since antiquity, the rock-cut necropolis and the remains of Urso, the Ibero-Roman city, with its theatre. Osuna before Osuna.',
      caption: 'fig. 6 — Carved walls at the Coto de las Canteras.',
    },
    cine: {
      name: 'Osuna on screen: Game of Thrones filming locations',
      shortName: 'Osuna on screen (Game of Thrones)',
      desc: "In 2014 Osuna's bullring became a film set for the fifth season of Game of Thrones. We visit the filming locations and share how the town lived through those weeks.",
      caption: 'fig. 7 — The bullring stands, a filming location.',
    },
    nocturna: {
      name: 'Osuna by night',
      shortName: 'Osuna by night',
      desc: 'When the heat fades, the town changes its skin. Half-lit streets, stone façades under the street lamps and stories of Osuna told at the hour they sound best.',
      caption: 'fig. 8 — Osuna from above, in duotone.',
    },
  },

  custom: {
    kicker: 'Private tours',
    title: 'Your group, your pace, your Osuna',
    text: "We combine itineraries, adjust the length and tailor the content to whoever is coming: a family with children, a retirees' trip, a secondary-school class or a company team. Tell us what you have in mind and we'll plan the tour.",
    audiences: [
      { t: 'Individuals and families', d: 'Private tours in the language of your choice.' },
      { t: 'Groups', d: 'Associations, organised trips and groups of friends.' },
      { t: 'Schools', d: 'Content adapted to each age group and curriculum.' },
      { t: 'Companies', d: 'Team activities, conferences and institutional visits.' },
    ],
    cta: 'Request a private tour',
    caption: 'fig. 9 — Osuna from the Collegiate Church viewpoint, with the countryside beyond.',
  },

  gallery: {
    kicker: 'Gallery',
    title: "What you'll see",
    open: (alt: string) => `Enlarge photo: ${alt}`,
    dialog: 'Photo gallery',
    close: 'Close',
    prev: 'Previous photo',
    next: 'Next photo',
    counter: (i: number, n: number) => `${i} of ${n}`,
  },

  faq: {
    kicker: 'Frequently asked questions',
    title: 'Before you book',
    items: [
      {
        q: 'How do I book a tour?',
        a: "Send us a WhatsApp message or give us a call. Tell us which tour you'd like, the date and how many people, and we'll confirm availability straight away. No advance payment is needed.",
        todo: true, // TODO-V2: dato provisional (pago)
      },
      {
        q: 'Which languages are the tours in?',
        a: 'English, Spanish, German and Italian. Just let us know your language when you book.',
      },
      {
        q: 'How long does a tour last?',
        a: 'About three hours, on foot, with stops along the way. If you need something shorter or longer, we can adapt it as a private tour.',
      },
      {
        q: 'How much does it cost? Are there discounts?',
        a: `Tours start at €${minPrice} per person, depending on the itinerary. Children under ${p.childrenFreeUnder} go free, and students and over-65s get ${p.reducedDiscountPercent}% off. Groups and schools receive a tailored quote.`,
        todo: true, // TODO-V2: dato provisional (precios y descuentos)
      },
      {
        q: 'Where does the tour start?',
        a: "In Osuna's Plaza Mayor, at the door of the Town Hall. For the quarries tour we'll tell you when you book whether we meet there or at the archaeological site itself.",
        todo: true, // TODO-V2: dato provisional (punto de encuentro)
      },
      {
        q: 'Is it suitable for people with reduced mobility?',
        a: 'Osuna has slopes and cobbled streets, and the Collegiate Church sits at the top of the hill. Some interiors have steps. Let us know when you book and we will adapt the route; the Calle San Pedro tour is the flattest.',
        todo: true, // TODO-V2: dato provisional (accesibilidad)
      },
      {
        q: 'What if it rains or is very hot?',
        a: "Summer temperatures in Osuna can top 40 °C, so from June to September tours run early in the morning and in the evening, with stops in the shade and indoors. If there is an orange or red heat warning, or heavy rain, we'll offer you another date or cancel free of charge.",
        todo: true, // TODO-V2: dato provisional (política de mal tiempo)
      },
      {
        q: 'Can I cancel?',
        a: `Yes. Cancellation is free if you let us know at least ${c.individualHours} hours in advance. For groups and schools the notice period is ${c.groupHours} hours.`,
        todo: true, // TODO-V2: dato provisional (política de cancelación)
      },
      {
        q: 'Are monument tickets included?',
        a: "No. The price covers the guided tour; tickets for the Collegiate Church, La Encarnación and other sites with an entrance fee are paid separately on the spot. We'll tell you the amount when you book.",
        todo: true, // TODO-V2: dato provisional (entradas)
      },
    ],
  },

  map: {
    kicker: 'Meeting point',
    title: 'See you in the Plaza Mayor',
    text: "Unless we agree otherwise, tours start in the Plaza Mayor, in front of the Town Hall door. Please arrive five minutes early — we'll be waiting for you there.",
    directions: 'Get directions',
    mapLabel: 'Map showing the meeting point in the Plaza Mayor, Osuna',
    noscript: 'The map needs JavaScript. Please use the "Get directions" link.',
    marker: 'Meeting point',
    caption: 'fig. 10 — The Plaza Mayor and the Town Hall.',
  },

  contact: {
    kicker: 'Contact',
    title: 'Book your tour',
    text: 'WhatsApp is the quickest way: tell us the tour, the date and how many of you there are. Or give us a call if you prefer.',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    whatsappAction: 'Message us on WhatsApp',
    hours: 'Opening hours',
    guide: 'Official tourist guide of Andalusia',
  },

  footer: {
    council: 'With the support of Osuna Town Council',
    councilPlaceholder: 'Space for the Osuna Town Council logo',
    legalNav: 'Legal information',
    legal: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies',
    credits: 'Photo credits',
    photos: 'Photographs from Wikimedia Commons under free licences.',
    noCookies: 'This website does not use cookies.',
  },

  alt: {
    'colegiata-exterior': 'The east end of the Collegiate Church of Osuna in golden stone, with its tower and tiled roofs under a deep blue sky.',
    'colegiata-portada': 'The Renaissance doorway of the Collegiate Church of Osuna, with a carved stone arch above the wooden door.',
    'colegiata-iglesia': 'The nave of the Collegiate Church of Osuna, with pale stone columns and the gilded altarpiece at the end.',
    'colegiata-panteon': 'The underground chapel of the Ducal Crypt, with a stone vault, columns, a tiled dado and a painting above the altar.',
    'colegiata-techumbre': 'The wooden ceiling of the chapter house in the Collegiate Church, decorated with coloured tiles between the beams.',
    'universidad-fachada': 'The façade of the Old University of Osuna in ochre stone, with round corner towers topped by spires.',
    'universidad-patio': 'The arcaded courtyard of the Old University, with two storeys of arches on columns and a well in the centre.',
    'encarnacion-claustro': 'The cloister of the Convent of La Encarnación, with two storeys of white arches, plants and tiled dados.',
    'encarnacion-azulejo': 'An 18th-century Seville tile panel at La Encarnación, showing a hunting scene among trees in blue and ochre.',
    'san-pedro-gomera': 'The Baroque doorway of the Gomera palace, with a stone balcony, twisted columns, a coat of arms and a wavy cornice.',
    'san-pedro-calle': 'Calle San Pedro in Osuna, with whitewashed façades, stone doorways and wrought-iron balconies.',
    'casa-de-los-torres': 'The stone doorway of the Casa de los Torres, with a balcony and Baroque crest set into a whitewashed wall.',
    'canteras-relieves': 'Stone walls at the Coto de las Canteras, with carved reliefs and large openings cut into the rock.',
    'canteras-interior': 'Inside the Coto de las Canteras: walls of carved rock opening to the sky like a vast hall.',
    'tumbas-romanas': 'Tombs cut into the rock at the necropolis of Osuna.',
    'plaza-toros-gradas': 'Stone stands and boxes at the bullring of Osuna.',
    'plaza-toros-panoramica': 'A panoramic view of the ring and stands of the Osuna bullring.',
    tejados: 'Tiled roofs and white houses of Osuna seen from above.',
    aldaba: 'An iron door knocker shaped like a hand on an old wooden door.',
    'plaza-mayor': "Osuna's Plaza Mayor, with the whitewashed Town Hall, wrought-iron balconies and the Collegiate Church behind.",
    'vista-panoramica': 'A panorama of Osuna from the Collegiate Church viewpoint: white houses and farmland stretching to the horizon.',
    'nocturna-duotono': 'Osuna from above in a night-blue duotone: roofs, towers and the countryside beyond.',
  },

  credits: {
    metaTitle: 'Photo credits · Guided tours in Osuna',
    metaDesc: 'Authors, licences and sources of the photographs used on the Osuna guided tours website.',
    title: 'Photo credits',
    intro:
      'All photographs come from Wikimedia Commons and are used under free licences. Many thanks to their authors. Modified versions of CC BY-SA photos are shared under the same licence.',
    photo: 'Photo',
    author: 'Author',
    license: 'Licence',
    source: 'Original',
    changes: { none: 'Unchanged', grade: 'Cropped and colour-adjusted', duotone: 'Converted to duotone' },
    publicDomain: 'Public domain',
    logo: 'The logo and website design are original. Map: © OpenStreetMap contributors.',
  },

  legal: {
    metaTitle: 'Legal notice · Guided tours in Osuna',
    metaDesc: 'Legal notice for the Osuna guided tours website: owner details, terms of use and intellectual property.',
    title: 'Legal notice',
    sections: [
      {
        h: 'Website owner',
        p: [
          'In accordance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the owner of this website is:',
          `Owner: ${site.owner.name} · Tax ID (NIF): ${site.owner.taxId} · Address: ${site.owner.address} · Email: ${site.owner.email} · Phone: ${site.phoneDisplay} · Official tourist guide of Andalusia, registration no. ${site.guideLicense}.`,
        ],
        todo: true, // TODO-V2: dato provisional (datos del titular)
      },
      {
        h: 'Purpose',
        p: [
          `This website provides information about the guided tours of Osuna offered by ${site.brand} and makes it easy to book them by phone or WhatsApp. No sales or payments are made through the website.`,
        ],
      },
      {
        h: 'Terms of use',
        p: [
          'Access to the website is free. Visitors agree to use its content appropriately and not for unlawful purposes or in bad faith.',
          'Published prices and times are for guidance only. The final conditions of each tour are confirmed at the time of booking.',
        ],
      },
      {
        h: 'Intellectual property',
        p: [
          'The texts, logo and design of the website belong to its owner. The photographs belong to their authors and are used under free licences, as detailed on the credits page.',
        ],
      },
      {
        h: 'Liability and links',
        p: [
          'The owner is not responsible for the content of linked external websites (such as WhatsApp, Google Maps or OpenStreetMap), nor for service interruptions beyond their control.',
        ],
      },
      {
        h: 'Institutional support',
        p: ['The promotion of this website is supported by Osuna Town Council.'],
      },
      {
        h: 'Applicable law',
        p: ['This legal notice is governed by Spanish law. In case of discrepancy, the Spanish version prevails.'],
      },
    ],
  },

  privacy: {
    metaTitle: 'Privacy policy · Guided tours in Osuna',
    metaDesc: 'How we handle your data when you contact us by WhatsApp or phone to book a guided tour in Osuna.',
    title: 'Privacy policy',
    sections: [
      {
        h: 'Data controller',
        p: [
          `${site.owner.name}, Tax ID ${site.owner.taxId}, ${site.owner.address}. Contact: ${site.owner.email} · ${site.phoneDisplay}.`,
        ],
        todo: true, // TODO-V2: dato provisional (datos del responsable)
      },
      {
        h: 'What data we process and why',
        p: [
          'The website has no forms or user accounts. We only process the data you give us when you contact us by WhatsApp or phone: your name, phone number, the content of your messages and the details of the tour (date, number of people, language and any accessibility needs you tell us about).',
          'We use it solely to answer your enquiry, manage your booking and let you know about any changes to the tour.',
        ],
      },
      {
        h: 'Legal basis',
        p: [
          'Taking steps prior to entering into a contract and providing the service you request (Article 6(1)(b) of the General Data Protection Regulation, GDPR).',
        ],
      },
      {
        h: 'WhatsApp',
        p: [
          'If you choose WhatsApp, your messages pass through the servers of WhatsApp Ireland Limited (Meta group), which processes data under its own privacy policy and may transfer data internationally. If you prefer not to use it, you can phone us instead.',
        ],
      },
      {
        h: 'How long we keep it',
        p: [
          'For as long as needed to manage your booking and, afterwards, for the time required to meet legal obligations. Conversations that do not lead to a booking are deleted within 12 months at the latest.',
        ],
        todo: true, // TODO-V2: dato provisional (plazo de conservación)
      },
      {
        h: 'Who we share it with',
        p: ['No one, unless required by law. We never sell or pass on data to third parties.'],
      },
      {
        h: 'Cookie-free analytics',
        p: [
          'To know how many people visit the website we use Cloudflare Web Analytics, a tool that sets no cookies, uses no persistent identifiers and does not track people across websites. It only provides aggregated, anonymous statistics (page views, country, device type).',
        ],
      },
      {
        h: 'Hosting and map',
        p: [
          'The website is hosted on Cloudflare Pages. Like any web server, it receives technical connection data (IP address, browser) in order to deliver the pages and protect them from attacks.',
          'The meeting-point map loads its images from OpenStreetMap servers, which receive your IP address in order to send them. OpenStreetMap sets no cookies.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          `You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${site.owner.email}. If you feel your request has not been properly handled, you may lodge a complaint with the Spanish Data Protection Agency (aepd.es).`,
        ],
      },
    ],
  },

  cookies: {
    metaTitle: 'Cookie policy · Guided tours in Osuna',
    metaDesc: 'This website uses no first-party or third-party cookies, which is why you will not see a cookie banner.',
    title: 'Cookie policy',
    sections: [
      {
        h: 'This website does not use cookies',
        p: [
          'We set no first-party or third-party cookies: no analytics, advertising or social media cookies. That is why we do not show a consent banner.',
        ],
      },
      {
        h: 'How we do it',
        p: [
          'The fonts are hosted on the website itself, the map uses OpenStreetMap (no cookies) instead of Google Maps, there are no embedded videos and our analytics (Cloudflare Web Analytics) work without cookies.',
          'The links to WhatsApp and Google Maps only take you to those services if you click them; from then on, their own policies apply.',
        ],
      },
      {
        h: 'If this changes',
        p: ['If we ever add cookies, we will update this policy and ask for your consent before setting them.'],
      },
    ],
  },

  notFound: {
    metaTitle: 'Page not found · Guided tours in Osuna',
    kicker: 'Error 404',
    title: 'This street leads nowhere',
    text: 'The page you are looking for does not exist or has moved. Head back to the start and choose your tour.',
    back: 'Back to the home page',
  },
  lastUpdated: 'Last updated: October 2026',
};

export default en;
