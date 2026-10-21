import { site, minPrice } from '../data/site';
import type { Dict } from './es';

const c = site.cancellation;
const p = site.pricing;

/** Deutsche Texte. Gleiche Struktur wie es.ts. */
const de: Dict = {
  locale: 'de-DE',
  meta: {
    title: 'Führungen in Osuna · Stiftskirche, Alte Universität & Game of Thrones',
    description:
      'Stadtführungen in Osuna bei Sevilla mit offizieller Gästeführerin: Stiftskirche, Alte Universität, Calle San Pedro, die antiken Steinbrüche und Drehorte von Game of Thrones. Auf Deutsch, Englisch, Spanisch und Italienisch. Buchung per WhatsApp.',
    ogAlt: 'Die Stiftskirche von Osuna aus goldenem Stein vor blauem Himmel, mit dem Text „Führungen in Osuna“.',
    ogTitle: 'Führungen in Osuna',
    ogLine: 'Stiftskirche · Alte Universität · Calle San Pedro · Steinbrüche',
  },
  nav: {
    skip: 'Zum Inhalt springen',
    routes: 'Touren',
    custom: 'Privat',
    gallery: 'Galerie',
    faq: 'Fragen',
    map: 'Treffpunkt',
    contact: 'Kontakt',
    menu: 'Menü',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
    home: 'Startseite',
    mainNav: 'Hauptnavigation',
  },
  langNames: { es: 'Español', en: 'English', de: 'Deutsch' },
  tourLangs: { es: 'Spanisch', en: 'Englisch', de: 'Deutsch', it: 'Italienisch' },
  list: (items: string[]) => items.slice(0, -1).join(', ') + ' und ' + items[items.length - 1],

  hero: {
    kicker: 'Führungen · Osuna, Sevilla',
    titleA: 'Osuna,',
    titleB: 'Stein für Stein.',
    lead: 'Die Stiftskirche, die Alte Universität, die Barockpaläste der Calle San Pedro und die Steinbrüche, aus denen alles entstand – erzählt von einer offiziellen Gästeführerin, die hier zu Hause ist. Rund drei Stunden zu Fuß durch die alte Herzogsstadt.',
    languages: 'Führungen auf Deutsch, Englisch, Spanisch und Italienisch',
    caption: 'Abb. 1 — Chorhaupt der Stiftskirche Santa María de la Asunción hoch über der Stadt.',
  },
  cta: {
    whatsapp: 'Per WhatsApp buchen',
    call: 'Anrufen',
    callNumber: (n: string) => `oder anrufen: ${n}`,
    bookRoute: 'Diese Tour buchen',
    floating: 'Per WhatsApp buchen',
    newTab: '(öffnet in einem neuen Tab)',
  },
  wa: {
    general: 'Hallo! Ich würde gern eine Führung durch Osuna buchen. Welche Termine sind noch frei?',
    route: (name: string) =>
      `Hallo! Ich würde gern die Tour „${name}“ buchen. An welchen Tagen ist sie möglich? Wir sind __ Personen.`,
    custom: 'Hallo! Ich interessiere mich für eine individuelle Führung durch Osuna (Gruppe / Schule / Firma). Können wir darüber sprechen?',
  },

  routesSection: {
    kicker: 'Rundgänge',
    title: 'Sieben Wege, Osuna zu entdecken',
    intro:
      'Jede Tour dauert rund drei Stunden und findet zu Fuß statt. Sie können sie einzeln buchen oder mehrere zu einer individuellen Führung kombinieren.',
    labels: {
      duration: 'Dauer',
      languages: 'Sprachen',
      price: 'Preis',
      schedule: 'Termine',
    },
    durationValue: (h: number) => `ca. ${h} Stunden`,
    priceFrom: (n: number) => `ab ${n} € pro Person`,
    priceOnRequest: 'auf Anfrage',
    groups: 'Gruppen und Schulklassen: auf Anfrage',
  },
  days: {
    tueSun: 'Dienstag bis Sonntag',
    tueSat: 'Dienstag bis Samstag',
    friSun: 'Freitag bis Sonntag',
    friSat: 'Freitag und Samstag',
    monSat: 'Montag bis Samstag',
    sun: 'Sonntag',
  },
  scheduleValue: (days: string, times: readonly string[]) => `${days}, ${times.join(' und ')} Uhr`,

  routes: {
    colegiata: {
      name: 'Stiftskirche Santa María de la Asunción und Herzogliche Grablege',
      shortName: 'Stiftskirche und Herzogliche Grablege',
      desc: 'Die große Renaissancekirche, die der Graf von Ureña im 16. Jahrhundert auf dem Hügel errichten ließ. Innen ein Museum sakraler Kunst mit Werken von José de Ribera, darunter die Herzogliche Grablege der Familie Téllez-Girón.',
      caption: 'Abb. 2 — Das Hauptportal der Stiftskirche aus behauenem Stein.',
    },
    universidad: {
      name: 'Alte Universität',
      shortName: 'Alte Universität',
      desc: 'Gegründet 1548 vom selben Grafen von Ureña, war sie fast drei Jahrhunderte lang Universität. Ein quadratischer Bau mit Ecktürmen und einem eleganten, zweistöckigen Arkadenhof.',
      caption: 'Abb. 3 — Die Universität mit ihren Ecktürmen.',
    },
    encarnacion: {
      name: 'Kloster La Encarnación',
      shortName: 'Kloster La Encarnación',
      desc: 'Ein Klausurkloster aus dem 17. Jahrhundert, dessen Kreuzgang mit Sevillaner Fliesen aus dem 18. Jahrhundert verkleidet ist. Das Museum sakraler Kunst zeigt Stücke, die in kaum einem Reiseführer stehen.',
      caption: 'Abb. 4 — Der Kreuzgang von La Encarnación.',
    },
    sanpedro: {
      name: 'Calle San Pedro und die Barockpaläste',
      shortName: 'Calle San Pedro und Barockpaläste',
      desc: 'Herrenhäuser und Paläste aus dem 18. Jahrhundert mit Steinportalen, so fein, als wären sie aus Wachs geschnitzt. Wir schlendern durch die Calle San Pedro und lesen Fassaden, Wappen und Balkone.',
      caption: 'Abb. 5 — Barockportal des Gomera-Palasts in der Calle San Pedro.',
    },
    canteras: {
      name: 'Steinbrüche, Nekropole und archäologische Stätte',
      shortName: 'Steinbrüche und archäologische Stätte',
      desc: 'Die Steinbrüche, aus denen seit der Antike der Stein von Osuna stammt, die in den Fels gehauene Nekropole und die Reste von Urso, der iberisch-römischen Stadt, mit ihrem Theater. Osuna vor Osuna.',
      caption: 'Abb. 6 — Behauene Felswände im Coto de las Canteras.',
    },
    cine: {
      name: 'Osuna im Film: Drehorte von Game of Thrones',
      shortName: 'Osuna im Film (Game of Thrones)',
      desc: '2014 wurde die Stierkampfarena von Osuna zum Filmset für die fünfte Staffel von Game of Thrones. Wir besuchen die Drehorte und erzählen, wie die Stadt diese Wochen erlebt hat.',
      caption: 'Abb. 7 — Die Ränge der Stierkampfarena, ein Drehort.',
    },
    nocturna: {
      name: 'Osuna bei Nacht',
      shortName: 'Osuna bei Nacht',
      desc: 'Wenn die Hitze nachlässt, verwandelt sich die Stadt. Halbdunkle Gassen, Steinfassaden im Laternenlicht und Geschichten aus Osuna – erzählt zu der Stunde, in der sie am besten klingen.',
      caption: 'Abb. 8 — Osuna von oben, als Duoton.',
    },
  },

  custom: {
    kicker: 'Individuelle Führungen',
    title: 'Ihre Gruppe, Ihr Tempo, Ihr Osuna',
    text: 'Wir kombinieren Rundgänge, passen die Dauer an und stimmen die Inhalte auf Ihre Gruppe ab: eine Familie mit Kindern, eine Seniorenreise, eine Schulklasse oder ein Firmenteam. Erzählen Sie uns, was Sie suchen – wir planen die Führung.',
    audiences: [
      { t: 'Privatpersonen und Familien', d: 'Private Führungen in Ihrer Wunschsprache.' },
      { t: 'Gruppen', d: 'Vereine, Reisegruppen und Freundeskreise.' },
      { t: 'Schulen', d: 'Inhalte passend zu Altersstufe und Lehrplan.' },
      { t: 'Firmen', d: 'Teamevents, Kongresse und offizielle Besuche.' },
    ],
    cta: 'Individuelle Führung anfragen',
    caption: 'Abb. 9 — Osuna vom Aussichtspunkt der Stiftskirche, dahinter die Campiña.',
  },

  gallery: {
    kicker: 'Galerie',
    title: 'Was Sie erwartet',
    open: (alt: string) => `Foto vergrößern: ${alt}`,
    dialog: 'Fotogalerie',
    close: 'Schließen',
    prev: 'Vorheriges Foto',
    next: 'Nächstes Foto',
    counter: (i: number, n: number) => `${i} von ${n}`,
  },

  faq: {
    kicker: 'Häufige Fragen',
    title: 'Vor der Buchung',
    items: [
      {
        q: 'Wie buche ich eine Führung?',
        a: 'Schreiben Sie uns per WhatsApp oder rufen Sie an. Nennen Sie uns die gewünschte Tour, das Datum und die Personenzahl – wir bestätigen Ihnen sofort, ob es passt. Eine Vorauszahlung ist nicht nötig.',
        todo: true, // TODO-V2: dato provisional (pago)
      },
      {
        q: 'In welchen Sprachen finden die Führungen statt?',
        a: 'Auf Deutsch, Englisch, Spanisch und Italienisch. Geben Sie die Sprache einfach bei der Buchung an.',
      },
      {
        q: 'Wie lange dauert eine Führung?',
        a: 'Rund drei Stunden, zu Fuß und mit Pausen. Wenn Sie es kürzer oder länger möchten, passen wir es als individuelle Führung an.',
      },
      {
        q: 'Was kostet eine Führung? Gibt es Ermäßigungen?',
        a: `Die Touren kosten je nach Rundgang ab ${minPrice} € pro Person. Kinder unter ${p.childrenFreeUnder} Jahren sind kostenlos, Studierende und Personen über 65 erhalten ${p.reducedDiscountPercent} % Ermäßigung. Für Gruppen und Schulklassen erstellen wir ein individuelles Angebot.`,
        todo: true, // TODO-V2: dato provisional (precios y descuentos)
      },
      {
        q: 'Wo beginnt die Führung?',
        a: 'Auf der Plaza Mayor von Osuna, am Eingang des Rathauses. Bei der Tour zu den Steinbrüchen sagen wir Ihnen bei der Buchung, ob wir uns dort oder direkt an der archäologischen Stätte treffen.',
        todo: true, // TODO-V2: dato provisional (punto de encuentro)
      },
      {
        q: 'Ist die Führung für Menschen mit eingeschränkter Mobilität geeignet?',
        a: 'Osuna hat steile Straßen und Kopfsteinpflaster, und die Stiftskirche liegt oben auf dem Hügel. Manche Innenräume haben Stufen. Sagen Sie uns bei der Buchung Bescheid, dann passen wir die Route an; die Tour durch die Calle San Pedro ist die ebenste.',
        todo: true, // TODO-V2: dato provisional (accesibilidad)
      },
      {
        q: 'Was passiert bei Regen oder großer Hitze?',
        a: 'Im Sommer kann es in Osuna über 40 °C heiß werden. Von Juni bis September starten die Touren deshalb früh am Morgen und am Abend, mit Pausen im Schatten und in Innenräumen. Bei einer orangen oder roten Hitzewarnung oder starkem Regen schlagen wir einen anderen Termin vor oder sagen kostenlos ab.',
        todo: true, // TODO-V2: dato provisional (política de mal tiempo)
      },
      {
        q: 'Kann ich stornieren?',
        a: `Ja. Wenn Sie mindestens ${c.individualHours} Stunden vorher Bescheid geben, ist die Stornierung kostenlos. Für Gruppen und Schulklassen gilt eine Frist von ${c.groupHours} Stunden.`,
        todo: true, // TODO-V2: dato provisional (política de cancelación)
      },
      {
        q: 'Sind die Eintrittskarten für die Monumente inbegriffen?',
        a: 'Nein. Der Preis umfasst die Führung; Eintrittskarten für die Stiftskirche, La Encarnación und andere Orte mit Kasse zahlen Sie separat vor Ort. Den Betrag nennen wir Ihnen bei der Buchung.',
        todo: true, // TODO-V2: dato provisional (entradas)
      },
    ],
  },

  map: {
    kicker: 'Treffpunkt',
    title: 'Wir sehen uns auf der Plaza Mayor',
    text: 'Sofern nicht anders vereinbart, beginnen die Führungen auf der Plaza Mayor vor dem Eingang des Rathauses. Bitte seien Sie fünf Minuten früher da – wir warten dort auf Sie.',
    directions: 'Route planen',
    mapLabel: 'Karte mit dem Treffpunkt auf der Plaza Mayor in Osuna',
    noscript: 'Die Karte benötigt JavaScript. Bitte nutzen Sie den Link „Route planen“.',
    marker: 'Treffpunkt',
    caption: 'Abb. 10 — Die Plaza Mayor und das Rathaus.',
  },

  contact: {
    kicker: 'Kontakt',
    title: 'Führung buchen',
    text: 'Am schnellsten geht es per WhatsApp: Nennen Sie uns Tour, Datum und Personenzahl. Oder rufen Sie einfach an.',
    phone: 'Telefon',
    whatsapp: 'WhatsApp',
    whatsappAction: 'Per WhatsApp schreiben',
    hours: 'Erreichbarkeit',
    guide: 'Offizielle Gästeführerin Andalusiens',
  },

  footer: {
    council: 'Mit Unterstützung der Stadt Osuna',
    councilPlaceholder: 'Platzhalter für das Logo der Stadt Osuna',
    legalNav: 'Rechtliches',
    legal: 'Impressum',
    privacy: 'Datenschutz',
    cookies: 'Cookies',
    credits: 'Bildnachweise',
    photos: 'Fotos von Wikimedia Commons unter freien Lizenzen.',
    noCookies: 'Diese Website verwendet keine Cookies.',
  },

  alt: {
    'colegiata-exterior': 'Chorhaupt der Stiftskirche von Osuna aus goldenem Stein, mit Turm und Ziegeldächern vor tiefblauem Himmel.',
    'colegiata-portada': 'Renaissanceportal der Stiftskirche von Osuna mit einem Steinbogen über der Holztür.',
    'colegiata-iglesia': 'Hauptschiff der Stiftskirche von Osuna mit hellen Steinsäulen und dem vergoldeten Hochaltar im Hintergrund.',
    'colegiata-panteon': 'Unterirdische Kapelle der Herzoglichen Grablege mit Steingewölbe, Säulen, Fliesensockel und einem Altarbild.',
    'colegiata-techumbre': 'Holzdecke des Kapitelsaals der Stiftskirche, zwischen den Balken mit bunten Fliesen verziert.',
    'universidad-fachada': 'Fassade der Alten Universität von Osuna aus ockerfarbenem Stein, mit runden Ecktürmen und spitzen Turmhelmen.',
    'universidad-patio': 'Arkadenhof der Alten Universität mit zwei Bogengeschossen auf Säulen und einem Brunnen in der Mitte.',
    'encarnacion-claustro': 'Kreuzgang des Klosters La Encarnación mit weißen Bögen auf zwei Etagen, Pflanzen und Fliesensockeln.',
    'encarnacion-azulejo': 'Sevillaner Fliesenbild aus dem 18. Jahrhundert in La Encarnación: eine Jagdszene zwischen Bäumen in Blau und Ocker.',
    'san-pedro-gomera': 'Barockportal des Gomera-Palasts mit Steinbalkon, gedrehten Säulen, Wappen und geschwungenem Gesims.',
    'san-pedro-calle': 'Die Calle San Pedro in Osuna mit weiß gekalkten Fassaden, Steinportalen und schmiedeeisernen Balkonen.',
    'casa-de-los-torres': 'Steinportal der Casa de los Torres mit Balkon und barockem Aufsatz in einer weiß gekalkten Wand.',
    'canteras-relieves': 'Felswände im Coto de las Canteras mit eingemeißelten Reliefs und großen Öffnungen im Gestein.',
    'canteras-interior': 'Im Coto de las Canteras: behauene Felswände, die sich wie ein riesiger Saal zum Himmel öffnen.',
    'tumbas-romanas': 'In den Fels gehauene Gräber in der Nekropole von Osuna.',
    'plaza-toros-gradas': 'Steinränge und Logen der Stierkampfarena von Osuna.',
    'plaza-toros-panoramica': 'Panoramablick auf Arena und Ränge der Stierkampfarena von Osuna.',
    tejados: 'Ziegeldächer und weiße Häuser von Osuna von oben gesehen.',
    aldaba: 'Eiserner Türklopfer in Form einer Hand an einer alten Holztür.',
    'plaza-mayor': 'Die Plaza Mayor von Osuna mit dem weißen Rathaus, schmiedeeisernen Balkonen und der Stiftskirche im Hintergrund.',
    'vista-panoramica': 'Panorama von Osuna vom Aussichtspunkt der Stiftskirche: weiße Häuser und Felder bis zum Horizont.',
    'nocturna-duotono': 'Osuna von oben als nachtblauer Duoton: Dächer, Türme und die Landschaft dahinter.',
  },

  credits: {
    metaTitle: 'Bildnachweise · Führungen in Osuna',
    metaDesc: 'Urheber, Lizenzen und Quellen der Fotos auf der Website für Führungen in Osuna.',
    title: 'Bildnachweise',
    intro:
      'Alle Fotos stammen von Wikimedia Commons und werden unter freien Lizenzen verwendet. Herzlichen Dank an die Urheberinnen und Urheber. Bearbeitete Fassungen von Fotos unter CC BY-SA werden unter derselben Lizenz weitergegeben.',
    photo: 'Foto',
    author: 'Urheber',
    license: 'Lizenz',
    source: 'Original',
    changes: { none: 'Unverändert', grade: 'Zugeschnitten und farblich angepasst', duotone: 'In Duoton umgewandelt' },
    publicDomain: 'Gemeinfrei',
    logo: 'Logo und Webdesign sind eigene Werke. Karte: © OpenStreetMap-Mitwirkende.',
  },

  legal: {
    metaTitle: 'Impressum · Führungen in Osuna',
    metaDesc: 'Impressum der Website für Führungen in Osuna: Anbieter, Nutzungsbedingungen und Urheberrecht.',
    title: 'Impressum',
    sections: [
      {
        h: 'Anbieter',
        p: [
          'Gemäß Artikel 10 des spanischen Gesetzes 34/2002 über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSI-CE) ist Anbieterin dieser Website:',
          `Inhaberin: ${site.owner.name} · Steuernummer (NIF): ${site.owner.taxId} · Anschrift: ${site.owner.address} · E-Mail: ${site.owner.email} · Telefon: ${site.phoneDisplay} · Offizielle Gästeführerin Andalusiens, Registernummer ${site.guideLicense}.`,
        ],
        todo: true, // TODO-V2: dato provisional (datos del titular)
      },
      {
        h: 'Zweck',
        p: [
          `Diese Website informiert über die Führungen durch Osuna von ${site.brand} und ermöglicht die Buchung per Telefon oder WhatsApp. Über die Website werden keine Verkäufe oder Zahlungen abgewickelt.`,
        ],
      },
      {
        h: 'Nutzungsbedingungen',
        p: [
          'Der Zugang zur Website ist frei und kostenlos. Besucherinnen und Besucher verpflichten sich, die Inhalte angemessen und nicht für rechtswidrige Zwecke zu nutzen.',
          'Die angegebenen Preise und Zeiten sind Richtwerte. Die endgültigen Bedingungen jeder Führung werden bei der Buchung bestätigt.',
        ],
      },
      {
        h: 'Urheberrecht',
        p: [
          'Texte, Logo und Gestaltung der Website gehören der Anbieterin. Die Fotos gehören ihren Urhebern und werden unter freien Lizenzen verwendet, wie auf der Seite Bildnachweise angegeben.',
        ],
      },
      {
        h: 'Haftung und Links',
        p: [
          'Für die Inhalte verlinkter externer Websites (z. B. WhatsApp, Google Maps oder OpenStreetMap) sowie für Unterbrechungen, die außerhalb ihres Einflusses liegen, übernimmt die Anbieterin keine Haftung.',
        ],
      },
      {
        h: 'Institutionelle Unterstützung',
        p: ['Die Bewerbung dieser Website wird von der Stadt Osuna unterstützt.'],
      },
      {
        h: 'Anwendbares Recht',
        p: ['Es gilt spanisches Recht. Im Zweifel ist die spanische Fassung maßgeblich.'],
      },
    ],
  },

  privacy: {
    metaTitle: 'Datenschutzerklärung · Führungen in Osuna',
    metaDesc: 'Wie wir mit Ihren Daten umgehen, wenn Sie uns per WhatsApp oder Telefon für eine Führung in Osuna kontaktieren.',
    title: 'Datenschutzerklärung',
    sections: [
      {
        h: 'Verantwortliche Stelle',
        p: [
          `${site.owner.name}, NIF ${site.owner.taxId}, ${site.owner.address}. Kontakt: ${site.owner.email} · ${site.phoneDisplay}.`,
        ],
        todo: true, // TODO-V2: dato provisional (datos del responsable)
      },
      {
        h: 'Welche Daten wir verarbeiten und wozu',
        p: [
          'Die Website hat keine Formulare und keine Benutzerkonten. Wir verarbeiten nur die Daten, die Sie uns per WhatsApp oder Telefon mitteilen: Ihren Namen, Ihre Telefonnummer, den Inhalt Ihrer Nachrichten und die Details der Führung (Datum, Personenzahl, Sprache und ggf. Hinweise zur Barrierefreiheit).',
          'Wir nutzen sie ausschließlich, um Ihre Anfrage zu beantworten, die Buchung abzuwickeln und Sie über Änderungen zu informieren.',
        ],
      },
      {
        h: 'Rechtsgrundlage',
        p: [
          'Durchführung vorvertraglicher Maßnahmen und Erbringung der angefragten Leistung (Art. 6 Abs. 1 lit. b der Datenschutz-Grundverordnung, DSGVO).',
        ],
      },
      {
        h: 'WhatsApp',
        p: [
          'Wenn Sie WhatsApp nutzen, laufen Ihre Nachrichten über die Server der WhatsApp Ireland Limited (Meta-Konzern), die Daten nach ihrer eigenen Datenschutzerklärung verarbeitet und sie auch in Drittländer übermitteln kann. Wenn Sie das nicht möchten, rufen Sie uns einfach an.',
        ],
      },
      {
        h: 'Speicherdauer',
        p: [
          'So lange, wie es für die Abwicklung der Buchung nötig ist, und danach so lange, wie gesetzliche Pflichten es verlangen. Unterhaltungen ohne Buchung werden spätestens nach 12 Monaten gelöscht.',
        ],
        todo: true, // TODO-V2: dato provisional (plazo de conservación)
      },
      {
        h: 'Weitergabe',
        p: ['Wir geben keine Daten weiter, außer wenn wir gesetzlich dazu verpflichtet sind. Wir verkaufen keine Daten.'],
      },
      {
        h: 'Statistik ohne Cookies',
        p: [
          'Um zu wissen, wie viele Menschen die Website besuchen, nutzen wir Cloudflare Web Analytics. Das Tool setzt keine Cookies, verwendet keine dauerhaften Kennungen und verfolgt niemanden über Websites hinweg. Es liefert nur zusammengefasste, anonyme Statistiken (Seitenaufrufe, Land, Gerätetyp).',
        ],
      },
      {
        h: 'Hosting und Karte',
        p: [
          'Die Website wird bei Cloudflare Pages gehostet. Wie jeder Webserver erhält er technische Verbindungsdaten (IP-Adresse, Browser), um die Seiten auszuliefern und vor Angriffen zu schützen.',
          'Die Karte mit dem Treffpunkt lädt ihre Kacheln von den Servern von OpenStreetMap, die dafür Ihre IP-Adresse erhalten. OpenStreetMap setzt keine Cookies.',
        ],
      },
      {
        h: 'Ihre Rechte',
        p: [
          `Sie können Ihre Rechte auf Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Datenübertragbarkeit per E-Mail an ${site.owner.email} geltend machen. Außerdem können Sie sich bei der spanischen Datenschutzbehörde (aepd.es) beschweren.`,
        ],
      },
    ],
  },

  cookies: {
    metaTitle: 'Cookie-Richtlinie · Führungen in Osuna',
    metaDesc: 'Diese Website verwendet weder eigene Cookies noch Cookies von Drittanbietern – deshalb gibt es auch kein Cookie-Banner.',
    title: 'Cookie-Richtlinie',
    sections: [
      {
        h: 'Diese Website verwendet keine Cookies',
        p: [
          'Wir setzen weder eigene Cookies noch Cookies von Drittanbietern – keine Statistik-, Werbe- oder Social-Media-Cookies. Deshalb zeigen wir Ihnen auch kein Einwilligungsbanner.',
        ],
      },
      {
        h: 'Wie wir das erreichen',
        p: [
          'Die Schriften liegen auf unserem eigenen Server, die Karte nutzt OpenStreetMap (ohne Cookies) statt Google Maps, es gibt keine eingebetteten Videos, und unsere Statistik (Cloudflare Web Analytics) funktioniert ohne Cookies.',
          'Die Links zu WhatsApp und Google Maps führen Sie nur dann zu diesen Diensten, wenn Sie darauf klicken; ab dann gelten deren eigene Richtlinien.',
        ],
      },
      {
        h: 'Wenn sich das ändert',
        p: ['Sollten wir eines Tages Cookies einsetzen, aktualisieren wir diese Richtlinie und bitten Sie vorher um Ihre Einwilligung.'],
      },
    ],
  },

  notFound: {
    metaTitle: 'Seite nicht gefunden · Führungen in Osuna',
    kicker: 'Fehler 404',
    title: 'Diese Gasse führt nirgendwohin',
    text: 'Die gesuchte Seite gibt es nicht oder sie ist umgezogen. Zurück zur Startseite – dort finden Sie Ihre Tour.',
    back: 'Zur Startseite',
  },
  lastUpdated: 'Stand: Oktober 2026',
};

export default de;
