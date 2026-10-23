import { site } from '../data/site';
import type { Dict } from './es';

const s = site;

/** English texts. Same structure as es.ts. */
const en: Dict = {
  locale: 'en-GB',
  brandSuffix: ' | Osuna Paso a Paso',
  meta: {
    title: 'Guided Tours of Osuna, Official Guide',
    description:
      'Guided tours of Osuna, near Seville, with an official guide: Collegiate Church, Old University, Game of Thrones locations. Entry tickets included.',
    ogAlt: 'The golden-stone Collegiate Church of Osuna against a blue sky, with the words "Guided tours in Osuna".',
    ogTitle: 'Guided tours in Osuna',
    ogLine: 'Collegiate Church · Old University · Calle San Pedro · Quarries',
  },
  nav: {
    skip: 'Skip to content',
    routes: 'Tours',
    custom: 'Groups',
    faq: 'FAQ',
    contact: 'Contact',
    menu: 'Menu',
    closeMenu: 'Close menu',
    language: 'Language',
    home: 'Home',
    mainNav: 'Main navigation',
    breadcrumb: 'You are here',
  },
  langNames: { es: 'Español', en: 'English', de: 'Deutsch' },
  tourLangs: { es: 'Spanish', en: 'English', de: 'German', it: 'Italian' },
  list: (items: string[]) => items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1],

  hero: {
    kicker: 'Guided tours · Osuna, Seville',
    titleA: 'Osuna,',
    titleB: 'stone by stone.',
    lead: 'The Collegiate Church, the Old University, the Baroque palaces of Calle San Pedro and the quarries where it all began — told by an official guide who lives here.',
    badges: ['EN · ES · DE · IT', `Official guide ${s.guideLicense}`, 'Entry tickets included'],
    badgesLabel: 'Tour languages: English, Spanish, German and Italian',
    caption: 'fig. 1 — The east end of the Collegiate Church of Santa María de la Asunción, high above the town.',
  },
  cta: {
    whatsapp: 'Book on WhatsApp',
    call: 'Call',
    bookRoute: 'Book this tour',
    floating: 'Book on WhatsApp',
    newTab: '(opens in a new tab)',
    seeRoute: 'See the tour',
    allFaq: 'All questions',
    customPage: 'How private and group tours work',
  },
  wa: {
    general: "Hello! I'd like to book a guided tour of Osuna. What availability do you have?",
    route: (name: string) => `Hello! I'd like to book the "${name}" tour. Which days are available? We are __ people.`,
    custom: "Hello! I'm interested in a private tour of Osuna (group / school / company). Could we talk about it?",
  },

  facts: {
    duration: 'Duration',
    durationValue: `About ${s.durationHours} hours, flexible`,
    languages: 'Languages',
    meeting: 'Meeting point',
    meetingValue: 'Plaza Mayor, at the Town Hall door',
    meetingOwnTransport: 'You will need your own car for this tour. We will tell you where to meet when you book.',
    tickets: 'Tickets',
    ticketsValue: 'Entry to the monuments included',
    price: 'Price',
    priceValue: 'Price on request, depending on group and tour. Discounts for children.',
    group: 'Group',
    groupValue: `Up to ${s.maxGroup} people`,
    booking: 'Dates',
    bookingValue: 'By advance booking · you choose the day',
    guide: 'Official tourist guide of Andalusia',
    guideValue: `No. ${s.guideLicense}`,
    title: 'Tour details',
  },

  home: {
    routesKicker: 'Itineraries',
    routesTitle: 'Seven ways to discover Osuna',
    routesIntro: 'About three hours each, by advance booking.',
    customKicker: 'Private tours',
    customTitle: 'For groups, schools and companies',
    customText: `We combine tours and tailor the length and content to your group, up to ${s.maxGroup} people.`,
    keyKicker: 'The essentials',
    keyFacts: [
      { big: '3 h', small: 'approximately, flexible' },
      { big: `${s.maxGroup}`, small: 'people at most' },
      { big: `${s.freeCancellationHours} h`, small: 'notice to cancel for free' },
      { big: 'Tickets', small: 'to the monuments included' },
      { big: 'Booking', small: 'in advance, paid upfront' },
    ],
    faqKicker: 'Frequently asked questions',
    faqTitle: 'Before you book',
    visitKicker: 'Contact and meeting point',
    visitTitle: 'Book your tour',
    visitText: 'Tell us the tour, the date and your group size.',
  },

  routes: {
    colegiata: {
      name: 'Collegiate Church of Santa María de la Asunción and Ducal Tomb',
      shortName: 'Collegiate Church and Ducal Tomb',
      h1: 'Guided tour of the Collegiate Church of Osuna',
      metaTitle: 'Osuna Collegiate Church Guided Tour',
      metaDesc:
        'Guided tour of the Collegiate Church of Osuna and its Ducal Tomb with an official guide: sacred art, works by Ribera and wide views. Tickets included.',
      teaser: 'Renaissance church, sacred art museum and the dukes’ vault.',
      desc: 'The great Renaissance church that the Count of Ureña built on top of the hill in the 16th century. Inside, a museum of sacred art with works by José de Ribera; beneath the church, the Ducal Tomb, burial vault of the Téllez-Girón family.',
      body: [
        {
          h: 'What you will see',
          p: [
            'We walk up from the Plaza Mayor to the top of the hill, where the Collegiate Church looks out over the town and the countryside. It is the building with which the Téllez-Girón family set their seal on Osuna: a Renaissance church of golden stone, raised on the initiative of the Count of Ureña in the 16th century.',
            'Inside, we explore the church and its museum of sacred art, home to works by José de Ribera alongside painting, sculpture and silverwork. Then we go down to the Ducal Tomb, the family’s burial vault: an underground chapel under a stone vault whose stillness takes almost everyone by surprise.',
          ],
        },
        {
          h: 'Why it is worth it',
          p: [
            'Because this is where the whole of Osuna makes sense: the power of the Counts of Ureña and the Dukes of Osuna, the art they commissioned and the land they ruled. From the hill, the town lies at your feet with the countryside stretching to the horizon. With a guide, every chapel and every painting has its story.',
          ],
        },
        {
          h: 'What the tour is like',
          p: [
            'It lasts about three hours with stops and goes at your pace. Entry to the monuments is included in the price. The walk up the hill is steep: if anyone in your group uses a wheelchair or a pushchair, let us know when you book and we will adapt the route.',
          ],
        },
      ],
      family:
        'A great tour for families: children usually love the burial vault beneath the church and the views from the hill. Tell us their ages when you book and we will pitch the story to them.',
      stops: ['Plaza Mayor', 'Walk up the hill', 'Collegiate Church of Santa María de la Asunción', 'Museum of sacred art', 'Ducal Tomb', 'Views over the countryside'],
      faq: [
        {
          q: 'Does the Collegiate Church tour include the Ducal Tomb?',
          a: 'Yes. The Ducal Tomb lies beneath the church and is part of the tour, as is the museum of sacred art. Entry tickets are included in the price.',
        },
        {
          q: 'Can I combine the Collegiate Church with the Old University?',
          a: 'Yes. Both stand on the same hill and work very well together. Ask for it as a private tour and we will adjust the route and length.',
        },
      ],
      caption: 'fig. 2 — The main doorway of the Collegiate Church, in carved stone.',
    },
    universidad: {
      name: 'Old University',
      shortName: 'Old University',
      h1: 'Guided tour of the Old University of Osuna',
      metaTitle: 'Old University of Osuna Guided Tour',
      metaDesc:
        'Guided tour of the Old University of Osuna, founded in 1548: corner towers, a graceful two-storey arcaded courtyard and nearly three centuries of history.',
      teaser: 'Founded in 1548: corner towers and a two-storey courtyard.',
      desc: 'Founded in 1548 by the same Count of Ureña, it was a university for almost three centuries. A square building with towers at its corners and a graceful two-storey arcaded courtyard.',
      body: [
        {
          h: 'What you will see',
          p: [
            'The Old University stands on the same hill as the Collegiate Church and is easy to spot from afar: a large square building with round towers at its corners, topped with spires. It was founded in 1548 by the Count of Ureña, who also built the Collegiate Church, and it remained a university for almost three centuries.',
            'At its heart is the two-storey arcaded courtyard, one of the most elegant corners of Osuna. When the building’s use allows it, we also step into the old chapel, which still keeps its altarpiece.',
          ],
        },
        {
          h: 'Why it is worth it',
          p: [
            'That a country town had a university of its own says a great deal about what Osuna once was. On the tour we talk about who studied here, what was taught and why a nobleman chose to found a university next to his church. It is a rewarding tour for students and for anyone who enjoys Renaissance architecture.',
          ],
        },
        {
          h: 'What the tour is like',
          p: [
            'It lasts about three hours and goes at your pace, including the hilltop and its views over the town. Entry to the monuments is included in the price. The walk up is steep: if anyone in your group uses a wheelchair or a pushchair, let us know when you book and we will adapt the route.',
          ],
        },
      ],
      family:
        'It works well for families and especially for school groups: the courtyard and the towers are perfect for imagining a student’s life centuries ago.',
      stops: ['Plaza Mayor', 'Walk up the hill', 'Façade and towers of the Old University', 'Arcaded courtyard', 'Old chapel (when open)', 'Viewpoint over the town'],
      faq: [
        {
          q: 'Do we go inside the Old University building?',
          a: 'Yes, we visit the courtyard and, when the building’s use allows it, the old chapel. We will confirm which spaces are open when you book.',
        },
        {
          q: 'Is this a good tour for a group of students?',
          a: 'Yes, it is one of the most popular with schools. We adapt the content to the students’ age and syllabus; see our group and school tours.',
        },
      ],
      caption: 'fig. 3 — The University, with its corner towers.',
    },
    encarnacion: {
      name: 'Encarnación Convent',
      shortName: 'Encarnación Convent',
      h1: 'Guided tour of the Encarnación Convent in Osuna',
      metaTitle: 'Encarnación Convent, Osuna: Guided Tour',
      metaDesc:
        'Guided tour of the Encarnación Convent in Osuna: a cloister lined with 18th-century Seville tiles and a museum of sacred art. Tickets included.',
      teaser: 'A cloister of 18th-century Seville tiles and sacred art.',
      desc: 'A 17th-century enclosed convent whose cloister is lined with 18th-century Seville tilework. Its museum of sacred art holds pieces that seldom make it into the guidebooks.',
      body: [
        {
          h: 'What you will see',
          p: [
            'From the Plaza Mayor we walk to the Encarnación Convent, a 17th-century enclosed convent that is still home to a community of nuns. Its stone doorway leads into the church, with its gilded altarpiece, and to the cloister, which is the real surprise: its walls are lined with 18th-century Seville tiles, painted with scenes in blue and ochre.',
            'The convent also has a museum of sacred art with pieces that seldom appear in guidebooks. We take our time there, pausing on the details that are easy to miss.',
          ],
        },
        {
          h: 'Why it is worth it',
          p: [
            'It is one of the least-known corners of Osuna and one of the most striking for anyone who arrives without knowing what to expect. The cloister tiles read almost like a picture book, and with a guide every scene comes to life.',
          ],
        },
        {
          h: 'What the tour is like',
          p: [
            'It lasts about three hours and goes at your pace. Entry to the monuments is included in the price. As the convent is home to a religious community, the visit follows its opening hours: we will confirm them when you book. If anyone in your group uses a wheelchair or a pushchair, let us know and we will adapt the route.',
          ],
        },
      ],
      family:
        'With children it works best as a game of spotting details in the tiles. Tell us their ages when you book and we will prepare it.',
      stops: ['Plaza Mayor', 'Doorway of the Encarnación Convent', 'Church', 'Cloister with Seville tiles', 'Museum of sacred art'],
      faq: [
        {
          q: 'Can the convent be visited on any day?',
          a: 'The convent is home to a community and keeps its own opening hours. You choose the day and we confirm when you book that the date works.',
        },
        {
          q: 'What is special about the cloister tiles?',
          a: 'They are 18th-century Seville tiles that line the cloister with painted scenes. On the tour we explain how they were made and what they show.',
        },
      ],
      caption: 'fig. 4 — The cloister of the Encarnación.',
    },
    sanpedro: {
      name: 'Calle San Pedro and Baroque palaces',
      shortName: 'Calle San Pedro and Baroque palaces',
      h1: 'Guided walk along Calle San Pedro and the Baroque palaces of Osuna',
      metaTitle: 'Calle San Pedro, Osuna: Baroque Walk',
      metaDesc:
        'Guided walk along Calle San Pedro in Osuna, one of the most beautiful streets in Europe: 18th-century Baroque palaces such as the Marqués de la Gomera’s.',
      teaser: 'One of Europe’s most beautiful streets, palace by palace.',
      desc: 'We walk along Calle San Pedro, considered one of the most beautiful streets in Europe, with its stately homes and 18th-century Baroque palaces, such as the Palace of the Marqués de la Gomera and its stunning Baroque façade.',
      body: [
        {
          h: 'What you will see',
          p: [
            'Calle San Pedro is the great showcase of Osuna’s Baroque. Within a few hundred metres, stately homes and 18th-century palaces follow one another, with carved stone doorways, coats of arms and wrought-iron balconies.',
            'The highlight is the Palace of the Marqués de la Gomera and its stunning Baroque façade: twisted Solomonic columns, a stone balcony and a wavy cornice that seems to move. From there we explore the surrounding streets, reading façades and discovering other stately homes in the town.',
          ],
        },
        {
          h: 'Why it is worth it',
          p: [
            'Because this is the street where many visitors fall in love with Osuna, and because without a guide it is easy to walk straight past the best of it: who lived in each house, what each coat of arms says, and why such luxury was built in a country town in the 18th century.',
          ],
        },
        {
          h: 'What the tour is like',
          p: [
            'It is a walk of about three hours, flexible, starting at the Plaza Mayor. Many of the palaces are private homes, so the tour focuses on their façades; if any space is open to the public that day, we include it, with entry in the price. If anyone in your group uses a wheelchair or a pushchair, let us know when you book and we will adapt the route.',
          ],
        },
      ],
      family: 'An easy tour for families: a walk through the town centre with short stops and plenty to look at.',
      stops: ['Plaza Mayor', 'Calle San Pedro', 'Palace of the Marqués de la Gomera', 'Stately homes nearby'],
      faq: [
        {
          q: 'Do we go inside the palaces on Calle San Pedro?',
          a: 'Many are private homes and are best enjoyed from the street, where their Baroque façades are. If any space is open that day, we include it.',
        },
        {
          q: 'Why is it called one of the most beautiful streets in Europe?',
          a: 'Because of the number of stately homes and 18th-century Baroque palaces packed into such a short street. On the tour we tell their story house by house.',
        },
      ],
      caption: 'fig. 5 — The Baroque doorway of the Palace of the Marqués de la Gomera, on Calle San Pedro.',
    },
    canteras: {
      name: 'The Quarries, necropolis and archaeological site',
      shortName: 'Quarries and archaeological site',
      h1: 'Guided tour of the ancient quarries and archaeological site of Osuna',
      metaTitle: 'Osuna Quarries & Roman Urso Guided Tour',
      metaDesc:
        'Guided tour of the Coto de las Canteras in Osuna, the rock-cut necropolis and the remains of Urso, the Iberian and Roman town, with its theatre.',
      teaser: 'Ancient quarries, rock-cut tombs and Iberian-Roman Urso.',
      desc: 'The quarries that have supplied Osuna’s stone since ancient times, the necropolis carved into the rock and the remains of Urso, the Iberian and Roman town, with its theatre. Osuna before Osuna.',
      body: [
        {
          h: 'What you will see',
          p: [
            'We start at the Coto de las Canteras, the place where Osuna’s stone has been quarried since ancient times. Centuries of work have left carved walls and huge hollows in the rock, which you now walk through like rooms open to the sky.',
            'Close by are the necropolis, with tombs cut into the rock, and the archaeological site of Urso, the Iberian and Roman town on which Osuna grew, with the remains of its theatre. We tell you what is known about Urso and what has been found here, such as the law of the Roman colony engraved in bronze, now kept at the National Archaeological Museum in Madrid.',
          ],
        },
        {
          h: 'Why it is worth it',
          p: [
            'This is Osuna before Osuna. Many visitors know the Collegiate Church and Calle San Pedro, but few realise that they were built with stone from these quarries, or that a Roman town lies beneath their feet. It is the perfect tour for lovers of archaeology and off-the-beaten-track landscapes.',
          ],
        },
        {
          h: 'What the tour is like',
          p: [
            'You will need your own car for this tour. We will tell you where to meet when you book. It lasts about three hours, flexible, and entry tickets are included in the price. The ground is uneven, so wear comfortable shoes; if anyone in your group uses a wheelchair or a pushchair, let us know when you book and we will adapt the route.',
          ],
        },
      ],
      family:
        'Children usually love it: the quarries look like a film set and the rock-cut tombs spark lots of questions. Bring comfortable shoes and water, especially in summer.',
      stops: ['Coto de las Canteras', 'Rock-cut necropolis', 'Archaeological site of Urso', 'Theatre'],
      faq: [
        {
          q: 'How do I get to the quarries?',
          a: 'You will need your own car for this tour. We will tell you where to meet when you book, along with directions and where to park.',
        },
        {
          q: 'What should I bring?',
          a: 'Comfortable shoes, as the ground is uneven, and water. In summer, a hat and sun cream: we go early in the morning or at dusk to avoid the heat.',
        },
      ],
      caption: 'fig. 6 — Carved walls at the Coto de las Canteras.',
    },
    cine: {
      name: 'Osuna on screen: Game of Thrones filming locations',
      shortName: 'Osuna on screen (Game of Thrones)',
      h1: 'Guided tour of the Game of Thrones filming locations in Osuna',
      metaTitle: 'Osuna Game of Thrones Filming Locations',
      metaDesc:
        'Guided tour of the Game of Thrones filming locations in Osuna: the bullring used as a set for season five, and how the town lived through the shoot.',
      teaser: 'The bullring that became a set for season five.',
      desc: 'In 2014 Osuna’s bullring became a set for the fifth season of Game of Thrones. We visit the filming locations and tell you how the town lived through those weeks.',
      body: [
        {
          h: 'What you will see',
          p: [
            'In 2014 Osuna became a filming location for the fifth season of Game of Thrones. The star was the bullring, which was transformed into the fighting arena of one of the cities in the series.',
            'We explore the bullring, its stands and its stone galleries, and the other filming locations in town. Along the way we tell you how the shoot was prepared and how Osuna lived through those weeks, when many locals took part as extras.',
          ],
        },
        {
          h: 'Why it is worth it',
          p: [
            'If you have watched the series you will recognise the place at once; if not, you will discover a remarkable bullring and the story of how a country town near Seville ended up in one of the most-watched series in the world. It is a light, fun and very photogenic tour.',
          ],
        },
        {
          h: 'What the tour is like',
          p: [
            'It lasts about three hours, flexible, and starts at the Plaza Mayor. Entry tickets are included in the price. It runs all year round, by advance booking. If anyone in your group uses a wheelchair or a pushchair, let us know when you book and we will adapt the route.',
          ],
        },
      ],
      family: 'Highly recommended for families, especially with teenagers who know the series. You do not need to have seen it to enjoy it.',
      stops: ['Plaza Mayor', 'Bullring', 'Stands and galleries', 'Other filming locations in town'],
      faq: [
        {
          q: 'Do I need to have watched Game of Thrones?',
          a: 'No. The tour covers the filming and the history of the places, so you will enjoy it just as much if you have not seen the series. If you have, you will feel part of it.',
        },
        {
          q: 'Is the Game of Thrones tour seasonal?',
          a: 'No, it runs all year round by advance booking. You choose the day, subject to the guide’s availability.',
        },
      ],
      caption: 'fig. 7 — The stands of the bullring, a filming location.',
    },
    nocturna: {
      name: 'Osuna by night',
      shortName: 'Osuna by night',
      h1: 'Guided night tour of Osuna',
      metaTitle: 'Osuna by Night: Evening Walking Tour',
      metaDesc:
        'Guided night tour of Osuna: shadowy streets, stone façades under the street lamps and stories of the town. All year round, by advance booking.',
      teaser: 'Stone under the street lamps and stories of the town.',
      desc: 'When the heat fades, the town changes its skin. Shadowy streets, stone façades under the street lamps, and stories of Osuna told at the hour they sound best.',
      body: [
        {
          h: 'What you will see',
          p: [
            'After dark, Osuna becomes another place. We set off from the Plaza Mayor through shadowy streets, along Calle San Pedro with its Baroque façades lit by street lamps, and up towards the hill, from where the town looks like a map of lights.',
            'This is a tour of stories: of the dukes and of the people who lived in these houses, of the town and its people, told at the hour they sound best.',
          ],
        },
        {
          h: 'Why it is worth it',
          p: [
            'Because it is another way of seeing Osuna, calmer and closer, and because in summer it is the best time for a walk. If you have already done a daytime tour, the night tour rounds it off; if you only have one evening, it is the best introduction to the town.',
          ],
        },
        {
          h: 'What the tour is like',
          p: [
            'It runs all year round, by advance booking. It lasts about three hours, flexible, and we agree the start time when you book, depending on the time of year. The price includes entry if the route passes any ticketed site. If anyone in your group uses a wheelchair or a pushchair, let us know when you book and we will adapt the route.',
          ],
        },
      ],
      family: 'Children usually love walking at night and listening to stories; if they are small, we can shorten the route.',
      stops: ['Plaza Mayor', 'Calle San Pedro by lamplight', 'Walk up the hill', 'Night view over the town'],
      faq: [
        {
          q: 'What time does the night tour start?',
          a: 'There is no fixed time: we agree it when you book, depending on the season and when it gets dark, so that the walk begins with the lights on.',
        },
        {
          q: 'Does the night tour run all year?',
          a: 'Yes, all year round, by advance booking. In summer it is the best way to avoid the daytime heat.',
        },
      ],
      caption: 'fig. 8 — Osuna from above, in duotone.',
    },
  },

  routePage: {
    kicker: (n: string) => `Tour ${n}`,
    stops: 'Route',
    family: 'With children',
    faq: 'Questions about this tour',
    endTitle: 'Shall we book?',
    endText: 'Send us a WhatsApp message with the date and the size of your group. We will reply with availability and the price.',
    related: 'More tours in Osuna',
    customLink: 'Or combine several in a private tour',
    guidedBy: `With an official tourist guide of Andalusia (No. ${s.guideLicense})`,
  },

  customPage: {
    metaTitle: 'Private Group & School Tours in Osuna',
    metaDesc: `Private guided tours of Osuna for groups, schools and companies: up to ${s.maxGroup} people, entry tickets included and content tailored to your group.`,
    kicker: 'Private tours',
    h1: 'Private guided tours of Osuna for groups, schools and companies',
    lead: 'We combine tours, adjust the length and tailor the content to your group: a family with children, a retirement trip, a secondary-school class or a company team. Tell us what you are looking for and we will plan the visit.',
    audiencesTitle: 'Who it is for',
    audiences: [
      { t: 'Individuals and families', d: 'Private tours in the language of your choice.' },
      { t: 'Groups', d: 'Associations, organised trips and groups of friends.' },
      { t: 'Schools', d: 'Content adapted to each age group and to the curriculum.' },
      { t: 'Companies', d: 'Team activities, conferences and official visits.' },
    ],
    howTitle: 'How it works',
    how: [
      { t: 'You get in touch', d: 'By WhatsApp or phone: who you are, how many people, which date suits you and what you would like to see.' },
      { t: 'We suggest a tour', d: 'A route made for you, with its length and price, which depends on the group and the tour.' },
      { t: 'You confirm and pay', d: 'Payment is made in advance when you confirm the booking; we agree the payment method at that point.' },
      { t: 'See you in Osuna', d: 'In the Plaza Mayor, at the Town Hall door, unless we agree another meeting point.' },
    ],
    schoolsTitle: 'Schools',
    schools: [
      'A trip to Osuna covers history, art, archaeology and heritage in a single morning. We adapt the content to each age group and to the curriculum, and plan the visit with the teachers so it fits what the class is studying.',
      `Groups are of up to ${s.maxGroup} people. Entry to the monuments is included in the price.`,
    ],
    combineTitle: 'Tours you can combine',
    faq: [
      {
        q: 'Can we combine several tours into one visit?',
        a: 'Yes, that is what most private tours do. For example, the Collegiate Church and the Old University, which stand on the same hill. We fit the length to your plans.',
      },
      {
        q: 'Do you adapt the tour to the students’ age?',
        a: 'Yes. The content is adapted to each stage, from primary to sixth form, and to the curriculum. Tell us the year group and what you are studying in class.',
      },
      {
        q: 'How far in advance should a group book?',
        a: 'As early as possible: that makes it easier to find a date that suits you. Message us and we will tell you what is available.',
      },
    ],
    caption: 'fig. 9 — Osuna from the Collegiate Church viewpoint, with the countryside beyond.',
  },

  faqPage: {
    metaTitle: 'Osuna Guided Tours: Questions & Answers',
    metaDesc:
      'How to book, prices, tickets, languages, meeting point, cancellations and summer heat: answers to common questions about guided tours in Osuna.',
    kicker: 'Frequently asked questions',
    h1: 'Frequently asked questions about guided tours in Osuna',
    lead: 'Everything people usually ask before booking. If your question is not here, send us a WhatsApp message.',
    groups: { booking: 'Booking and price', visit: 'The tour', conditions: 'Terms' },
    more: 'Questions about each tour are on its own page.',
  },

  faq: [
    {
      group: 'booking',
      home: true,
      q: 'How do I book a tour?',
      a: 'Send us a WhatsApp message or give us a call. Tell us which tour you would like, the date and how many of you there are, and we will confirm availability. All tours are by advance booking: you choose the day.',
    },
    {
      group: 'booking',
      home: true,
      q: 'How much does it cost? Are there discounts?',
      a: 'Price on request, depending on group and tour. Entry to the monuments is included in the price. There are discounts for children.',
    },
    {
      group: 'booking',
      q: 'How and when do I pay?',
      a: 'Payment is made in advance when you confirm the booking, with entry to the monuments included. We agree the payment method with you at that point.',
    },
    {
      group: 'booking',
      q: 'Is entry to the monuments included?',
      a: 'Yes. The tour price includes entry to the monuments on the route, so there is nothing extra to pay at the ticket office.',
    },
    {
      group: 'booking',
      q: 'Are there fixed departures, or can I choose the day?',
      a: 'There are no fixed departures. All tours are by advance booking and you choose the day, subject to the guide’s availability.',
    },
    {
      group: 'visit',
      home: true,
      q: 'Which languages are the tours in?',
      a: 'English, Spanish, German and Italian. Just tell us your language when you book.',
    },
    {
      group: 'visit',
      home: true,
      q: 'Where does the tour start?',
      a: 'In Osuna’s Plaza Mayor, at the Town Hall door, for every tour except the quarries: for that one you need your own car, and we will tell you where to meet when you book.',
    },
    {
      group: 'visit',
      q: 'How long does a tour last?',
      a: 'About three hours, on foot and with stops. The length is flexible: if you need something shorter or longer, we will adjust it.',
    },
    {
      group: 'visit',
      q: 'How many people can a group have?',
      a: `Up to ${s.maxGroup} people per group.`,
    },
    {
      group: 'visit',
      q: 'Is the tour suitable for people with reduced mobility?',
      a: 'If anyone in your group uses a wheelchair or a pushchair, let us know when you book and we will adapt the route.',
    },
    {
      group: 'visit',
      q: 'What if it is very hot?',
      a: 'In summer Osuna can go above 40 °C, so from June to September tours start early in the morning or in the evening, with stops in the shade and indoors. If there is an orange or red heat warning, we will suggest another date or cancel at no cost.',
    },
    {
      group: 'conditions',
      home: true,
      q: 'Can I cancel?',
      a: 'Yes. Cancellation is free up to 24 hours before the tour. With less than 24 hours’ notice, the amount paid is not refunded.',
    },
    {
      group: 'conditions',
      q: 'Who leads the tour?',
      a: `An official tourist guide of Andalusia, registration No. ${s.guideLicense}. If for any reason she could not lead the tour, another official guide would take it.`,
    },
  ],

  contact: {
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    whatsappAction: 'Message us on WhatsApp',
    hours: 'Opening hours',
    guide: 'Official tourist guide of Andalusia',
    meeting: 'Meeting point',
    directions: 'Get directions',
    mapLabel: 'Map showing the meeting point in the Plaza Mayor of Osuna',
    noscript: 'The map needs JavaScript. Use the "Get directions" link.',
    marker: 'Meeting point',
  },
  days: {
    monSat: 'Monday to Saturday',
    sun: 'Sundays',
  },

  footer: {
    routes: 'Tours',
    more: 'More',
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
    'colegiata-portada': 'Renaissance doorway of the Collegiate Church of Osuna, with a carved stone arch above the wooden door.',
    'colegiata-iglesia': 'Nave of the Collegiate Church of Osuna, with pale stone columns and the gilded altarpiece at the end.',
    'colegiata-panteon': 'Underground chapel of the Ducal Tomb in Osuna, with a stone vault, columns, a tiled dado and a painting above the altar.',
    'colegiata-techumbre': 'Wooden ceiling of the chapter house of the Collegiate Church of Osuna, decorated with colourful tiles between the beams.',
    'universidad-fachada': 'Façade of the Old University of Osuna in ochre stone, with round corner towers topped by spires.',
    'universidad-patio': 'Arcaded courtyard of the Old University of Osuna, with two storeys of arches on columns and a well in the centre.',
    'universidad-torres': 'Corner of the Old University of Osuna with two of its spired towers against a blue sky.',
    'universidad-retablo': 'Altarpiece in the old chapel of the University of Osuna, with paintings of saints and a statue of the Virgin in the centre.',
    'encarnacion-claustro': 'Cloister of the Encarnación Convent in Osuna, with white arches on two levels, plants and tiled dados.',
    'encarnacion-azulejo': '18th-century Seville tile panel at the Encarnación in Osuna, showing a hunting scene among trees in blue and ochre.',
    'encarnacion-iglesia': 'Inside the church of the Encarnación Convent in Osuna, with a decorated vault and a gilded altarpiece.',
    'encarnacion-portada': 'Stone doorway of the church of the Encarnación Convent in Osuna, with its bell gable and a cobbled street.',
    'san-pedro-gomera': 'Baroque doorway of the Palace of the Marqués de la Gomera in Osuna, with a stone balcony, twisted columns, coat of arms and wavy cornice.',
    'san-pedro-calle': 'Calle San Pedro in Osuna, with whitewashed façades, stone doorways and wrought-iron balconies.',
    'casa-de-los-torres': 'Stone doorway of the Casa de los Torres in Osuna, with a balcony and Baroque crest on a whitewashed wall.',
    aldaba: 'Hand-shaped iron door knocker on an old wooden door in Osuna.',
    'canteras-relieves': 'Stone walls of the Coto de las Canteras in Osuna, with carved reliefs and large hollows in the rock.',
    'canteras-interior': 'Inside the Coto de las Canteras in Osuna: carved rock walls opening to the sky like a vast hall.',
    'tumbas-romanas': 'Tombs cut into the rock at the necropolis of Osuna.',
    'plaza-toros-gradas': 'Stone stands and boxes of the bullring in Osuna, a filming location.',
    'plaza-toros-panoramica': 'Panoramic view of the ring and stands of the bullring in Osuna.',
    'plaza-toros-galeria': 'Vaulted stone gallery beneath the stands of the bullring in Osuna.',
    'plaza-toros-exterior': 'Stone outer wall of the bullring in Osuna, with its arched entrance.',
    'vista-panoramica': 'Panorama of Osuna from the Collegiate Church viewpoint: white houses and countryside to the horizon.',
    'nocturna-duotono': 'Osuna from above in a night-blue duotone: rooftops, towers and the countryside beyond.',
    'nocturna-san-pedro': 'Calle San Pedro in Osuna in a night-blue duotone, with street lamps and wrought-iron balconies.',
    'nocturna-plaza-mayor': 'Plaza Mayor in Osuna in a night-blue duotone, with the Town Hall and the Collegiate Church behind.',
  } as Record<string, string>,

  credits: {
    metaTitle: 'Photo Credits · Guided Tours in Osuna',
    metaDesc:
      'Authors, licences and sources of the Wikimedia Commons photographs used on the Osuna Paso a Paso website for guided tours in Osuna, near Seville.',
    title: 'Photo credits',
    intro:
      'All photographs come from Wikimedia Commons and are used under free licences. Many thanks to their authors. Modified versions of CC BY-SA photos are shared under the same licence.',
    photo: 'Photo',
    author: 'Author',
    license: 'Licence',
    source: 'Original',
    changes: { none: 'No changes', grade: 'Cropped and colour-graded', duotone: 'Converted to duotone' },
    publicDomain: 'Public domain',
    logo: 'The logo and website design are original. Map: © OpenStreetMap contributors.',
  },

  legal: {
    metaTitle: 'Legal Notice · Guided Tours in Osuna',
    metaDesc:
      'Legal notice for the Osuna Paso a Paso guided tours website: owner details, terms of use, intellectual property and liability, under Spanish law.',
    title: 'Legal notice',
    sections: [
      {
        h: 'Website owner',
        p: [
          'In accordance with Article 10 of Spanish Law 34/2002 on information society services and electronic commerce (LSSI-CE), the details of the owner of this website are as follows:',
          `Owner: ${s.owner.name}, self-employed · Tax ID (NIF): ${s.owner.taxId} · Address: ${s.owner.address}, Spain · Email: ${s.owner.email} · Phone: ${s.phoneDisplay} · Official tourist guide of Andalusia, registration No. ${s.guideLicense}. Trading name: ${s.brand}.`,
        ],
      },
      {
        h: 'Purpose',
        p: [
          `This website provides information about the guided tours of Osuna offered by ${s.brand} and makes it easy to book them by phone or WhatsApp. No sales or payments are made through the website.`,
        ],
      },
      {
        h: 'Terms of use',
        p: [
          'Access to the website is free. Visitors agree to make appropriate use of its content and not to use it for unlawful purposes or in bad faith.',
          'The details of each tour (date, route and price) are confirmed when you book.',
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
          'The owner is not responsible for the content of linked external websites (such as WhatsApp, Google Maps or OpenStreetMap), nor for service interruptions beyond her control.',
        ],
      },
      {
        h: 'Applicable law',
        p: ['This legal notice is governed by Spanish law.'],
      },
    ],
  },

  privacy: {
    metaTitle: 'Privacy Policy · Guided Tours in Osuna',
    metaDesc:
      'How we handle your data when you contact us by WhatsApp or phone to book a guided tour in Osuna: data controller, purposes, retention and your rights.',
    title: 'Privacy policy',
    sections: [
      {
        h: 'Data controller',
        p: [`${s.owner.name}, Tax ID ${s.owner.taxId}, ${s.owner.address}, Spain. Contact: ${s.owner.email} · ${s.phoneDisplay}.`],
      },
      {
        h: 'What data we process and why',
        p: [
          'The website has no forms or user accounts. We only process the data you give us when you contact us by WhatsApp or phone: your name, phone number, the content of your messages and the details of the tour (date, group size, language and any accessibility needs you tell us about).',
          'We use them solely to answer your enquiry, manage your booking and payment, and let you know about any changes to the tour.',
        ],
      },
      {
        h: 'Legal basis',
        p: [
          'Taking steps at your request prior to entering into a contract and performing the service you request (Article 6(1)(b) of the General Data Protection Regulation, GDPR), and compliance with legal obligations, such as tax obligations (Article 6(1)(c)).',
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
          'For as long as needed to manage the booking and then for as long as required to meet legal obligations. Conversations that do not lead to a booking are deleted within 12 months at most.',
        ],
      },
      {
        h: 'Who we share it with',
        p: [
          'No one, unless required by law. If the guide were unable to lead a tour, the essential booking details would be passed to the official guide replacing her, solely so that the tour can go ahead. We never sell or pass on data to third parties.',
        ],
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
          'The website is hosted by Cloudflare. Like any web server, it receives technical connection data (IP address, browser) in order to serve the pages and protect them from attacks.',
          'The meeting-point map loads its images from OpenStreetMap servers, which receive your IP address to send them. OpenStreetMap does not set cookies.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          `You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${s.owner.email}. If you feel your request has not been properly handled, you can complain to the Spanish Data Protection Agency (aepd.es).`,
        ],
      },
    ],
  },

  cookies: {
    metaTitle: 'Cookie Policy · Guided Tours in Osuna',
    metaDesc:
      'The Osuna guided tours website does not use first-party or third-party cookies, for analytics or advertising. That is why you will not see a cookie banner.',
    title: 'Cookie policy',
    sections: [
      {
        h: 'This website does not use cookies',
        p: [
          'We do not set any first-party or third-party cookies: no analytics, advertising or social media cookies. That is why we do not show you a consent banner.',
        ],
      },
      {
        h: 'How we do it',
        p: [
          'The fonts are hosted on this website, the map uses OpenStreetMap (no cookies) instead of Google Maps, there are no embedded videos, and the analytics (Cloudflare Web Analytics) work without cookies.',
          'Links to WhatsApp and Google Maps only take you to those services if you click them; from then on, their own policies apply.',
        ],
      },
      {
        h: 'If this changes',
        p: ['If we ever add cookies, we will update this policy and ask for your consent before setting them.'],
      },
    ],
  },

  notFound: {
    metaTitle: 'Page Not Found · Guided Tours in Osuna',
    metaDesc: 'The page you are looking for does not exist or has moved. Go back to the Osuna Paso a Paso home page and choose one of our seven guided tours of Osuna.',
    kicker: 'Error 404',
    title: 'This street leads nowhere',
    text: 'The page you are looking for does not exist or has moved. Head back to the home page and choose your tour.',
    back: 'Back to home',
  },
  lastUpdated: 'Last updated: October 2026',
};

export default en;
