import { site } from '../data/site';
import type { Dict } from './es';

const s = site;

/** Deutsche Texte. Gleiche Struktur wie es.ts. */
const de: Dict = {
  locale: 'de-DE',
  brandSuffix: ' | Osuna Paso a Paso',
  meta: {
    title: 'Osuna Führungen & Sehenswürdigkeiten',
    description:
      'Führungen in Osuna bei Sevilla mit offizieller Gästeführerin: Stiftskirche, Alte Universität, Game-of-Thrones-Drehorte. Eintritte inklusive.',
    ogAlt: 'Die Stiftskirche von Osuna aus goldenem Stein vor blauem Himmel, mit dem Schriftzug „Führungen in Osuna“.',
    ogTitle: 'Führungen in Osuna',
    ogLine: 'Stiftskirche · Alte Universität · Calle San Pedro · Steinbrüche',
  },
  nav: {
    skip: 'Zum Inhalt springen',
    routes: 'Touren',
    custom: 'Gruppen',
    faq: 'Fragen',
    contact: 'Kontakt',
    menu: 'Menü',
    closeMenu: 'Menü schließen',
    language: 'Sprache',
    home: 'Startseite',
    mainNav: 'Hauptnavigation',
    breadcrumb: 'Sie sind hier',
  },
  langNames: { es: 'Español', en: 'English', de: 'Deutsch' },
  tourLangs: { es: 'Spanisch', en: 'Englisch', de: 'Deutsch', it: 'Italienisch' },
  list: (items: string[]) => items.slice(0, -1).join(', ') + ' und ' + items[items.length - 1],

  hero: {
    kicker: 'Führungen · Osuna, Sevilla',
    titleA: 'Osuna,',
    titleB: 'Stein für Stein.',
    lead: 'Die Stiftskirche, die Alte Universität, die Barockpaläste der Calle San Pedro und die Steinbrüche, aus denen alles kam – erzählt von einer offiziellen Gästeführerin, die hier lebt.',
    badges: ['DE · EN · ES · IT', `Offizielle Führerin ${s.guideLicense}`, 'Eintritte inklusive'],
    badgesLabel: 'Sprachen der Führungen: Deutsch, Englisch, Spanisch und Italienisch',
    caption: 'Abb. 1 — Chor der Stiftskirche Santa María de la Asunción, hoch über der Stadt.',
  },
  cta: {
    whatsapp: 'Per WhatsApp buchen',
    call: 'Anrufen',
    bookRoute: 'Diese Tour buchen',
    floating: 'Per WhatsApp buchen',
    newTab: '(öffnet in neuem Tab)',
    seeRoute: 'Zur Tour',
    allFaq: 'Alle Fragen',
    customPage: 'So funktionieren individuelle Führungen',
  },
  wa: {
    general: 'Hallo! Ich möchte gerne eine Führung durch Osuna buchen. Wann haben Sie Zeit?',
    route: (name: string) => `Hallo! Ich möchte gerne die Tour „${name}“ buchen. Welche Tage sind frei? Wir sind __ Personen.`,
    custom: 'Hallo! Ich interessiere mich für eine individuelle Führung durch Osuna (Gruppe / Schule / Firma). Können wir darüber sprechen?',
  },

  facts: {
    duration: 'Dauer',
    durationValue: `Etwa ${s.durationHours} Stunden, flexibel`,
    languages: 'Sprachen',
    meeting: 'Treffpunkt',
    meetingValue: 'Plaza Mayor, am Eingang des Rathauses',
    meetingOwnTransport: 'Für diese Tour brauchen Sie ein eigenes Fahrzeug. Den Treffpunkt nennen wir Ihnen bei der Buchung.',
    tickets: 'Eintritt',
    ticketsValue: 'Eintritte in die Monumente inklusive',
    price: 'Preis',
    priceValue: 'Preis auf Anfrage, je nach Gruppe und Tour. Ermäßigung für Kinder.',
    group: 'Gruppe',
    groupValue: `Bis zu ${s.maxGroup} Personen`,
    booking: 'Termine',
    bookingValue: 'Nur mit Voranmeldung · Sie wählen den Tag',
    guide: 'Offizielle Gästeführerin Andalusiens',
    guideValue: `Nr. ${s.guideLicense}`,
    title: 'Tour auf einen Blick',
  },

  home: {
    routesKicker: 'Rundgänge',
    routesTitle: 'Sieben Wege, Osuna zu entdecken',
    routesIntro: 'Jeweils etwa drei Stunden, mit Voranmeldung.',
    customKicker: 'Individuelle Führungen',
    customTitle: 'Für Gruppen, Schulen und Firmen',
    customText: `Wir kombinieren Touren und passen Dauer und Inhalte an Ihre Gruppe an – bis zu ${s.maxGroup} Personen.`,
    keyKicker: 'Das Wichtigste',
    keyFacts: [
      { big: '3 Std.', small: 'ungefähr, flexibel' },
      { big: `${s.maxGroup}`, small: 'Personen höchstens' },
      { big: `${s.freeCancellationHours} Std.`, small: 'vorher kostenlos stornieren' },
      { big: 'Eintritte', small: 'in die Monumente inklusive' },
      { big: 'Buchung', small: 'vorab, Zahlung im Voraus' },
    ],
    faqKicker: 'Häufige Fragen',
    faqTitle: 'Vor der Buchung',
    visitKicker: 'Kontakt und Treffpunkt',
    visitTitle: 'Führung buchen',
    visitText: 'Nennen Sie uns Tour, Datum und Personenzahl.',
  },

  routes: {
    colegiata: {
      name: 'Stiftskirche Santa María de la Asunción und Herzogsgruft',
      shortName: 'Stiftskirche und Herzogsgruft',
      h1: 'Führung durch die Stiftskirche von Osuna',
      metaTitle: 'Führung durch die Stiftskirche Osuna',
      metaDesc:
        'Führung durch die Stiftskirche von Osuna und die Herzogsgruft mit offizieller Gästeführerin: sakrale Kunst, Werke von Ribera und weiter Blick.',
      teaser: 'Renaissancekirche, Museum für sakrale Kunst und Herzogsgruft.',
      desc: 'Die große Renaissancekirche, die der Graf von Ureña im 16. Jahrhundert oben auf dem Hügel errichten ließ. Innen ein Museum für sakrale Kunst mit Werken von José de Ribera; unter der Kirche die Herzogsgruft, Grablege der Familie Téllez-Girón.',
      body: [
        {
          h: 'Was Sie sehen',
          p: [
            'Von der Plaza Mayor steigen wir hinauf auf den Hügel, von dem aus die Stiftskirche über Stadt und Campiña wacht. Mit diesem Bau setzte das Haus Téllez-Girón Osuna seinen Stempel auf: eine Renaissancekirche aus goldenem Stein, errichtet auf Initiative des Grafen von Ureña im 16. Jahrhundert.',
            'Drinnen besichtigen wir die Kirche und ihr Museum für sakrale Kunst mit Werken von José de Ribera, dazu Malerei, Skulptur und Goldschmiedekunst. Danach steigen wir in die Herzogsgruft hinab, die Grablege der Familie: eine unterirdische Kapelle unter einem Steingewölbe, deren Stille fast alle überrascht.',
          ],
        },
        {
          h: 'Warum es sich lohnt',
          p: [
            'Weil man hier ganz Osuna versteht: die Macht der Grafen von Ureña und der Herzöge von Osuna, die Kunst, die sie in Auftrag gaben, und das Land, über das sie herrschten. Vom Hügel aus liegt Ihnen die Stadt zu Füßen, dahinter die Campiña bis zum Horizont. Mit Führung erzählt jede Kapelle und jedes Bild seine Geschichte.',
          ],
        },
        {
          h: 'So läuft die Führung ab',
          p: [
            'Sie dauert etwa drei Stunden mit Pausen, in Ihrem Tempo. Die Eintritte in die Monumente sind im Preis inbegriffen. Der Weg auf den Hügel ist steil: Wenn jemand in Ihrer Gruppe im Rollstuhl sitzt oder mit Kinderwagen unterwegs ist, sagen Sie uns bei der Buchung Bescheid, dann passen wir die Route an.',
          ],
        },
      ],
      family:
        'Eine schöne Tour für Familien: Die Gruft unter der Kirche und der Blick vom Hügel begeistern Kinder meist sehr. Nennen Sie uns bei der Buchung ihr Alter, dann erzählen wir kindgerecht.',
      stops: ['Plaza Mayor', 'Aufstieg zum Hügel', 'Stiftskirche Santa María de la Asunción', 'Museum für sakrale Kunst', 'Herzogsgruft', 'Blick über die Campiña'],
      faq: [
        {
          q: 'Ist die Herzogsgruft bei der Führung durch die Stiftskirche dabei?',
          a: 'Ja. Die Herzogsgruft liegt unter der Kirche und gehört zur Tour, ebenso wie das Museum für sakrale Kunst. Die Eintritte sind im Preis inbegriffen.',
        },
        {
          q: 'Kann man die Stiftskirche mit der Alten Universität kombinieren?',
          a: 'Ja. Beide stehen auf demselben Hügel und passen sehr gut zusammen. Fragen Sie es als individuelle Führung an, dann stimmen wir Route und Dauer ab.',
        },
      ],
      caption: 'Abb. 2 — Hauptportal der Stiftskirche aus behauenem Stein.',
    },
    universidad: {
      name: 'Alte Universität',
      shortName: 'Alte Universität',
      h1: 'Führung durch die Alte Universität von Osuna',
      metaTitle: 'Alte Universität Osuna: Führung',
      metaDesc:
        'Führung durch die Alte Universität von Osuna, gegründet 1548: Ecktürme, ein eleganter zweigeschossiger Arkadenhof und fast drei Jahrhunderte Geschichte.',
      teaser: 'Gegründet 1548: Ecktürme und zweigeschossiger Arkadenhof.',
      desc: 'Gegründet 1548 vom selben Grafen von Ureña, war sie fast drei Jahrhunderte lang Universität. Ein quadratischer Bau mit Türmen an den Ecken und einem eleganten zweigeschossigen Arkadenhof.',
      body: [
        {
          h: 'Was Sie sehen',
          p: [
            'Die Alte Universität steht auf demselben Hügel wie die Stiftskirche und ist schon von Weitem zu erkennen: ein großer quadratischer Bau mit runden Ecktürmen und spitzen Turmhelmen. Gegründet wurde sie 1548 vom Grafen von Ureña, der auch die Stiftskirche bauen ließ, und sie blieb fast drei Jahrhunderte lang Universität.',
            'Ihr Herzstück ist der zweigeschossige Arkadenhof, einer der elegantesten Orte Osunas. Wenn es der Betrieb im Gebäude erlaubt, besuchen wir auch die alte Kapelle mit ihrem erhaltenen Altarbild.',
          ],
        },
        {
          h: 'Warum es sich lohnt',
          p: [
            'Dass eine Landstadt eine eigene Universität hatte, sagt viel darüber, was Osuna einmal war. Auf der Führung erfahren Sie, wer hier studierte, was gelehrt wurde und warum ein Adliger neben seiner Kirche eine Universität gründete. Eine lohnende Tour für Schulklassen und für alle, die Renaissance-Architektur lieben.',
          ],
        },
        {
          h: 'So läuft die Führung ab',
          p: [
            'Sie dauert etwa drei Stunden in Ihrem Tempo, einschließlich des Hügels und seines Blicks über die Stadt. Die Eintritte in die Monumente sind im Preis inbegriffen. Der Weg hinauf ist steil: Wenn jemand in Ihrer Gruppe im Rollstuhl sitzt oder mit Kinderwagen unterwegs ist, sagen Sie uns bei der Buchung Bescheid, dann passen wir die Route an.',
          ],
        },
      ],
      family:
        'Gut geeignet für Familien und vor allem für Schulklassen: Innenhof und Türme laden dazu ein, sich das Leben eines Studenten vor Jahrhunderten vorzustellen.',
      stops: ['Plaza Mayor', 'Aufstieg zum Hügel', 'Fassade und Türme der Alten Universität', 'Arkadenhof', 'Alte Kapelle (wenn geöffnet)', 'Aussichtspunkt über der Stadt'],
      faq: [
        {
          q: 'Geht man in das Gebäude der Alten Universität hinein?',
          a: 'Ja, wir besichtigen den Innenhof und, wenn es der Betrieb erlaubt, die alte Kapelle. Welche Räume geöffnet sind, bestätigen wir bei der Buchung.',
        },
        {
          q: 'Ist das eine gute Tour für eine Schulklasse?',
          a: 'Ja, sie gehört zu den beliebtesten bei Schulen. Wir passen die Inhalte an Alter und Lehrplan an; mehr dazu bei den Gruppen- und Schulführungen.',
        },
      ],
      caption: 'Abb. 3 — Die Universität mit ihren Ecktürmen.',
    },
    encarnacion: {
      name: 'Kloster der Encarnación',
      shortName: 'Kloster der Encarnación',
      h1: 'Führung durch das Kloster der Encarnación in Osuna',
      metaTitle: 'Kloster der Encarnación, Osuna: Führung',
      metaDesc:
        'Führung durch das Kloster der Encarnación in Osuna: ein Kreuzgang mit sevillanischen Fliesen aus dem 18. Jahrhundert und ein wenig bekanntes Museum.',
      teaser: 'Kreuzgang mit sevillanischen Fliesen und sakraler Kunst.',
      desc: 'Ein Klausurkloster aus dem 17. Jahrhundert, dessen Kreuzgang mit sevillanischen Fliesen aus dem 18. Jahrhundert verkleidet ist. Sein Museum für sakrale Kunst bewahrt Stücke, die selten in Reiseführern auftauchen.',
      body: [
        {
          h: 'Was Sie sehen',
          p: [
            'Von der Plaza Mayor gehen wir zum Kloster der Encarnación, einem Klausurkloster aus dem 17. Jahrhundert, in dem bis heute Nonnen leben. Sein Steinportal führt in die Kirche mit ihrem vergoldeten Altar und in den Kreuzgang, die eigentliche Überraschung: Seine Wände sind mit sevillanischen Fliesen aus dem 18. Jahrhundert verkleidet, bemalt mit Szenen in Blau und Ocker.',
            'Das Kloster besitzt außerdem ein Museum für sakrale Kunst mit Stücken, die selten in Reiseführern auftauchen. Wir nehmen uns Zeit und halten bei den Details an, die man leicht übersieht.',
          ],
        },
        {
          h: 'Warum es sich lohnt',
          p: [
            'Es ist einer der unbekanntesten Orte Osunas und einer der eindrucksvollsten für alle, die ohne Erwartungen kommen. Die Fliesen des Kreuzgangs lesen sich fast wie ein Bilderbuch, und mit Führung erwacht jede Szene zum Leben.',
          ],
        },
        {
          h: 'So läuft die Führung ab',
          p: [
            'Sie dauert etwa drei Stunden in Ihrem Tempo. Die Eintritte in die Monumente sind im Preis inbegriffen. Da im Kloster eine Ordensgemeinschaft lebt, richtet sich der Besuch nach ihren Öffnungszeiten: Wir bestätigen sie Ihnen bei der Buchung. Wenn jemand in Ihrer Gruppe im Rollstuhl sitzt oder mit Kinderwagen unterwegs ist, sagen Sie uns Bescheid, dann passen wir die Route an.',
          ],
        },
      ],
      family:
        'Mit Kindern klappt es am besten als Suchspiel nach Details in den Fliesen. Nennen Sie uns bei der Buchung ihr Alter, dann bereiten wir es vor.',
      stops: ['Plaza Mayor', 'Portal des Klosters der Encarnación', 'Kirche', 'Kreuzgang mit sevillanischen Fliesen', 'Museum für sakrale Kunst'],
      faq: [
        {
          q: 'Kann man das Kloster an jedem Tag besichtigen?',
          a: 'Im Kloster lebt eine Ordensgemeinschaft mit eigenen Öffnungszeiten. Sie wählen den Tag, und wir bestätigen bei der Buchung, dass der Termin passt.',
        },
        {
          q: 'Was ist das Besondere an den Fliesen im Kreuzgang?',
          a: 'Es sind sevillanische Fliesen aus dem 18. Jahrhundert, die den Kreuzgang mit gemalten Szenen verkleiden. Auf der Führung erklären wir, wie sie entstanden und was sie zeigen.',
        },
      ],
      caption: 'Abb. 4 — Der Kreuzgang der Encarnación.',
    },
    sanpedro: {
      name: 'Calle San Pedro und Barockpaläste',
      shortName: 'Calle San Pedro und Barockpaläste',
      h1: 'Führung durch die Calle San Pedro und die Barockpaläste von Osuna',
      metaTitle: 'Calle San Pedro in Osuna: Barockführung',
      metaDesc:
        'Führung durch die Calle San Pedro in Osuna, eine der schönsten Straßen Europas: Herrenhäuser und Barockpaläste des 18. Jahrhunderts wie der Gomera-Palast.',
      teaser: 'Eine der schönsten Straßen Europas, Palast für Palast.',
      desc: 'Wir gehen durch die Calle San Pedro, die als eine der schönsten Straßen Europas gilt, mit ihren Herrenhäusern und Barockpalästen aus dem 18. Jahrhundert wie dem Palast des Marqués de la Gomera und seiner beeindruckenden Barockfassade.',
      body: [
        {
          h: 'Was Sie sehen',
          p: [
            'Die Calle San Pedro ist das große Schaufenster des Barocks in Osuna. Auf wenigen hundert Metern reihen sich Herrenhäuser und Paläste aus dem 18. Jahrhundert aneinander, mit Portalen aus behauenem Stein, Wappen und schmiedeeisernen Balkonen.',
            'Höhepunkt ist der Palast des Marqués de la Gomera mit seiner beeindruckenden Barockfassade: gedrehte salomonische Säulen, ein steinerner Balkon und ein geschwungenes Gesims, das sich zu bewegen scheint. Von dort erkunden wir die Straßen ringsum, lesen Fassaden und entdecken weitere Herrenhäuser der Stadt.',
          ],
        },
        {
          h: 'Warum es sich lohnt',
          p: [
            'Weil sich in dieser Straße viele Besucher in Osuna verlieben – und weil man ohne Führung leicht am Besten vorbeigeht: wer in welchem Haus lebte, was jedes Wappen erzählt und warum im 18. Jahrhundert in einer Landstadt mit so viel Prunk gebaut wurde.',
          ],
        },
        {
          h: 'So läuft die Führung ab',
          p: [
            'Ein Spaziergang von etwa drei Stunden, flexibel, ab der Plaza Mayor. Viele Paläste sind Privathäuser, deshalb stehen ihre Fassaden im Mittelpunkt; ist an dem Tag ein Ort öffentlich zugänglich, nehmen wir ihn mit, der Eintritt ist im Preis inbegriffen. Wenn jemand in Ihrer Gruppe im Rollstuhl sitzt oder mit Kinderwagen unterwegs ist, sagen Sie uns bei der Buchung Bescheid, dann passen wir die Route an.',
          ],
        },
      ],
      family: 'Eine bequeme Tour für Familien: ein Spaziergang durch die Altstadt mit kurzen Stopps und viel zu entdecken.',
      stops: ['Plaza Mayor', 'Calle San Pedro', 'Palast des Marqués de la Gomera', 'Herrenhäuser in der Umgebung'],
      faq: [
        {
          q: 'Besichtigt man die Paläste der Calle San Pedro von innen?',
          a: 'Viele sind Privathäuser und wirken am besten von der Straße aus, wo ihre Barockfassaden sind. Ist an dem Tag ein Ort geöffnet, nehmen wir ihn mit.',
        },
        {
          q: 'Warum gilt sie als eine der schönsten Straßen Europas?',
          a: 'Wegen der vielen Herrenhäuser und Barockpaläste des 18. Jahrhunderts auf so engem Raum. Auf der Führung erzählen wir ihre Geschichte Haus für Haus.',
        },
      ],
      caption: 'Abb. 5 — Barockportal des Palasts des Marqués de la Gomera in der Calle San Pedro.',
    },
    canteras: {
      name: 'Steinbrüche, Nekropole und archäologische Stätte',
      shortName: 'Steinbrüche und archäologische Stätte',
      h1: 'Führung durch die Steinbrüche und die archäologische Stätte von Osuna',
      metaTitle: 'Steinbrüche & Nekropole Osuna: Führung',
      metaDesc:
        'Führung zum Coto de las Canteras in Osuna, die in den Fels gehauene Nekropole und die Reste von Urso, der iberisch-römischen Stadt, mit ihrem Theater.',
      teaser: 'Steinbrüche, Felsgräber und das iberisch-römische Urso.',
      desc: 'Die Steinbrüche, aus denen seit der Antike der Stein von Osuna stammt, die in den Fels gehauene Nekropole und die Reste von Urso, der iberisch-römischen Stadt, mit ihrem Theater. Osuna vor Osuna.',
      body: [
        {
          h: 'Was Sie sehen',
          p: [
            'Wir beginnen im Coto de las Canteras, wo seit der Antike der Stein von Osuna gebrochen wird. Jahrhunderte der Arbeit haben behauene Wände und riesige Hohlräume im Fels hinterlassen, durch die man heute wie durch Säle unter freiem Himmel geht.',
            'Ganz in der Nähe liegen die Nekropole mit in den Fels gehauenen Gräbern und die archäologische Stätte von Urso, der iberisch-römischen Stadt, aus der Osuna hervorging, mit den Resten ihres Theaters. Wir erzählen, was man über Urso weiß und was hier gefunden wurde – etwa das in Bronze gravierte Gesetz der römischen Kolonie, das heute im Archäologischen Nationalmuseum in Madrid liegt.',
          ],
        },
        {
          h: 'Warum es sich lohnt',
          p: [
            'Das ist Osuna vor Osuna. Viele Besucher kennen die Stiftskirche und die Calle San Pedro, aber nur wenige wissen, dass sie aus dem Stein dieser Brüche gebaut sind oder dass unter ihren Füßen eine römische Stadt lag. Die ideale Tour für Archäologie-Fans und alle, die abseits der bekannten Wege unterwegs sein möchten.',
          ],
        },
        {
          h: 'So läuft die Führung ab',
          p: [
            'Für diese Tour brauchen Sie ein eigenes Fahrzeug. Den Treffpunkt nennen wir Ihnen bei der Buchung. Sie dauert etwa drei Stunden, flexibel, und die Eintritte sind im Preis inbegriffen. Der Boden ist uneben, bequeme Schuhe sind daher ratsam; wenn jemand in Ihrer Gruppe im Rollstuhl sitzt oder mit Kinderwagen unterwegs ist, sagen Sie uns bei der Buchung Bescheid, dann passen wir die Route an.',
          ],
        },
      ],
      family:
        'Kinder sind meist begeistert: Die Steinbrüche wirken wie eine Filmkulisse, und die Felsgräber werfen viele Fragen auf. Bequeme Schuhe und Wasser mitbringen, besonders im Sommer.',
      stops: ['Coto de las Canteras', 'Felsnekropole', 'Archäologische Stätte von Urso', 'Theater'],
      faq: [
        {
          q: 'Wie komme ich zu den Steinbrüchen?',
          a: 'Für diese Tour brauchen Sie ein eigenes Fahrzeug. Den Treffpunkt nennen wir Ihnen bei der Buchung, zusammen mit Anfahrt und Parkmöglichkeit.',
        },
        {
          q: 'Was sollte ich mitnehmen?',
          a: 'Bequeme Schuhe, denn der Boden ist uneben, und Wasser. Im Sommer Kopfbedeckung und Sonnenschutz: Wir starten früh am Morgen oder am Abend, um der Hitze auszuweichen.',
        },
      ],
      caption: 'Abb. 6 — Behauene Wände im Coto de las Canteras.',
    },
    cine: {
      name: 'Osuna im Film: Drehorte von Game of Thrones',
      shortName: 'Osuna im Film (Game of Thrones)',
      h1: 'Führung zu den Game-of-Thrones-Drehorten in Osuna',
      metaTitle: 'Game of Thrones Drehorte in Osuna',
      metaDesc:
        'Führung zu den Drehorten von Game of Thrones in Osuna: die Stierkampfarena, die 2014 zur Kulisse der fünften Staffel wurde, und wie Osuna den Dreh erlebte.',
      teaser: 'Die Stierkampfarena, Kulisse der fünften Staffel.',
      desc: '2014 wurde die Stierkampfarena von Osuna zum Set der fünften Staffel von Game of Thrones. Wir besuchen die Drehorte und erzählen, wie der Ort diese Wochen erlebt hat.',
      body: [
        {
          h: 'Was Sie sehen',
          p: [
            '2014 wurde Osuna zum Drehort der fünften Staffel von Game of Thrones. Der große Star war die Stierkampfarena, die sich in die Kampfarena einer der Städte aus der Serie verwandelte.',
            'Wir besichtigen die Arena, ihre Ränge und ihre steinernen Galerien sowie die übrigen Drehorte im Ort. Unterwegs erzählen wir, wie der Dreh vorbereitet wurde und wie Osuna diese Wochen erlebte, als viele Einwohner als Statisten mitwirkten.',
          ],
        },
        {
          h: 'Warum es sich lohnt',
          p: [
            'Wer die Serie kennt, erkennt den Ort sofort wieder; wer nicht, entdeckt eine besondere Stierkampfarena und die Geschichte, wie eine Landstadt bei Sevilla in einer der meistgesehenen Serien der Welt landete. Eine leichte, unterhaltsame und sehr fotogene Tour.',
          ],
        },
        {
          h: 'So läuft die Führung ab',
          p: [
            'Sie dauert etwa drei Stunden, flexibel, und beginnt an der Plaza Mayor. Die Eintritte sind im Preis inbegriffen. Die Tour findet das ganze Jahr über statt, mit Voranmeldung. Wenn jemand in Ihrer Gruppe im Rollstuhl sitzt oder mit Kinderwagen unterwegs ist, sagen Sie uns bei der Buchung Bescheid, dann passen wir die Route an.',
          ],
        },
      ],
      family: 'Sehr zu empfehlen für Familien, besonders mit Jugendlichen, die die Serie kennen. Man muss sie aber nicht gesehen haben.',
      stops: ['Plaza Mayor', 'Stierkampfarena', 'Ränge und Galerien', 'Weitere Drehorte im Ort'],
      faq: [
        {
          q: 'Muss ich Game of Thrones gesehen haben?',
          a: 'Nein. Die Tour erzählt vom Dreh und von der Geschichte der Orte, sie macht also auch ohne Serienkenntnis Spaß. Wer sie kennt, fühlt sich mittendrin.',
        },
        {
          q: 'Gibt es die Game-of-Thrones-Tour nur in der Saison?',
          a: 'Nein, sie findet das ganze Jahr über statt, mit Voranmeldung. Sie wählen den Tag, je nach Verfügbarkeit der Gästeführerin.',
        },
      ],
      caption: 'Abb. 7 — Die Ränge der Stierkampfarena, ein Drehort.',
    },
    nocturna: {
      name: 'Osuna bei Nacht',
      shortName: 'Osuna bei Nacht',
      h1: 'Nächtliche Führung durch Osuna',
      metaTitle: 'Osuna bei Nacht: Führung am Abend',
      metaDesc:
        'Nächtliche Führung durch Osuna: Gassen im Halbdunkel, Steinfassaden im Laternenlicht und Geschichten aus der Stadt. Ganzjährig, mit Voranmeldung.',
      teaser: 'Stein im Laternenlicht und Geschichten aus der Stadt.',
      desc: 'Wenn die Hitze nachlässt, verwandelt sich die Stadt. Halbdunkle Gassen, Steinfassaden im Laternenlicht und Geschichten aus Osuna – erzählt zu der Stunde, in der sie am besten klingen.',
      body: [
        {
          h: 'Was Sie sehen',
          p: [
            'Nach Einbruch der Dunkelheit wird Osuna ein anderer Ort. Wir starten an der Plaza Mayor und gehen durch Gassen im Halbdunkel, durch die Calle San Pedro mit ihren von Laternen beleuchteten Barockfassaden und hinauf zum Hügel, von wo die Stadt wie eine Karte aus Lichtern wirkt.',
            'Es ist eine Tour der Geschichten: von den Herzögen und den Menschen, die in diesen Häusern lebten, von der Stadt und ihren Bewohnern – erzählt zu der Stunde, in der sie am besten klingen.',
          ],
        },
        {
          h: 'Warum es sich lohnt',
          p: [
            'Weil man Osuna so ruhiger und näher erlebt – und weil im Sommer der Abend die beste Zeit für einen Spaziergang ist. Wer schon eine Tour bei Tag gemacht hat, rundet sie mit der Nachtführung ab; wer nur einen Abend hat, bekommt die schönste Einführung in die Stadt.',
          ],
        },
        {
          h: 'So läuft die Führung ab',
          p: [
            'Die Tour findet das ganze Jahr über statt, mit Voranmeldung. Sie dauert etwa drei Stunden, flexibel; die Startzeit vereinbaren wir bei der Buchung je nach Jahreszeit. Führt die Route an einem Ort mit Eintritt vorbei, ist er im Preis inbegriffen. Wenn jemand in Ihrer Gruppe im Rollstuhl sitzt oder mit Kinderwagen unterwegs ist, sagen Sie uns bei der Buchung Bescheid, dann passen wir die Route an.',
          ],
        },
      ],
      family: 'Kinder lieben es meist, nachts spazieren zu gehen und Geschichten zu hören; mit kleinen Kindern kürzen wir die Route gern.',
      stops: ['Plaza Mayor', 'Calle San Pedro im Laternenlicht', 'Aufstieg zum Hügel', 'Blick auf die nächtliche Stadt'],
      faq: [
        {
          q: 'Wann beginnt die Nachtführung?',
          a: 'Es gibt keine feste Uhrzeit: Wir vereinbaren sie bei der Buchung je nach Jahreszeit und Einbruch der Dunkelheit, damit der Spaziergang bei Laternenlicht beginnt.',
        },
        {
          q: 'Findet die Nachtführung das ganze Jahr statt?',
          a: 'Ja, das ganze Jahr über, mit Voranmeldung. Im Sommer ist sie die beste Wahl, um der Tageshitze zu entgehen.',
        },
      ],
      caption: 'Abb. 8 — Osuna von oben, als Duoton.',
    },
  },

  routePage: {
    kicker: (n: string) => `Tour ${n}`,
    stops: 'Route',
    family: 'Mit Kindern',
    faq: 'Fragen zu dieser Tour',
    endTitle: 'Wollen wir buchen?',
    endText: 'Schreiben Sie uns per WhatsApp Datum und Personenzahl. Wir antworten mit freien Terminen und dem Preis.',
    related: 'Weitere Touren in Osuna',
    customLink: 'Oder kombinieren Sie mehrere als individuelle Führung',
    guidedBy: `Mit einer offiziellen Gästeführerin Andalusiens (Nr. ${s.guideLicense})`,
  },

  customPage: {
    metaTitle: 'Gruppen- und Schulführungen in Osuna',
    metaDesc: `Individuelle Führungen in Osuna für Gruppen, Schulklassen und Firmen: bis zu ${s.maxGroup} Personen, Eintritte inklusive und Inhalte nach Maß für jede Gruppe.`,
    kicker: 'Individuelle Führungen',
    h1: 'Individuelle Führungen in Osuna für Gruppen, Schulen und Firmen',
    lead: 'Wir kombinieren Rundgänge, passen die Dauer an und stimmen die Inhalte auf Ihre Gruppe ab: eine Familie mit Kindern, eine Seniorenreise, eine Schulklasse oder ein Firmenteam. Erzählen Sie uns, was Sie suchen – wir planen die Führung.',
    audiencesTitle: 'Für wen',
    audiences: [
      { t: 'Privatpersonen und Familien', d: 'Private Führungen in Ihrer Wunschsprache.' },
      { t: 'Gruppen', d: 'Vereine, Reisegruppen und Freundeskreise.' },
      { t: 'Schulen', d: 'Inhalte passend zu Altersstufe und Lehrplan.' },
      { t: 'Firmen', d: 'Teamevents, Kongresse und offizielle Besuche.' },
    ],
    howTitle: 'So funktioniert es',
    how: [
      { t: 'Sie schreiben uns', d: 'Per WhatsApp oder Telefon: wer Sie sind, wie viele Personen, welcher Termin passt und was Sie sehen möchten.' },
      { t: 'Wir schlagen eine Führung vor', d: 'Eine Route nach Maß, mit Dauer und Preis, der von Gruppe und Tour abhängt.' },
      { t: 'Sie bestätigen und zahlen', d: 'Die Zahlung erfolgt im Voraus bei der Buchungsbestätigung; die Zahlungsart vereinbaren wir dann.' },
      { t: 'Wir sehen uns in Osuna', d: 'Auf der Plaza Mayor am Eingang des Rathauses, sofern wir keinen anderen Treffpunkt vereinbaren.' },
    ],
    schoolsTitle: 'Schulen',
    schools: [
      'Ein Ausflug nach Osuna verbindet Geschichte, Kunst, Archäologie und Kulturerbe an einem einzigen Vormittag. Wir passen die Inhalte an Altersstufe und Lehrplan an und planen den Besuch mit den Lehrkräften, damit er zum Unterricht passt.',
      `Gruppen umfassen bis zu ${s.maxGroup} Personen. Die Eintritte in die Monumente sind im Preis inbegriffen.`,
    ],
    combineTitle: 'Touren zum Kombinieren',
    faq: [
      {
        q: 'Können wir mehrere Touren zu einer Führung kombinieren?',
        a: 'Ja, das ist bei individuellen Führungen der Normalfall – zum Beispiel Stiftskirche und Alte Universität, die auf demselben Hügel stehen. Die Dauer passen wir an Ihren Plan an.',
      },
      {
        q: 'Passen Sie die Führung an das Alter der Schüler an?',
        a: 'Ja. Die Inhalte werden an jede Stufe angepasst, von der Grundschule bis zur Oberstufe, und an den Lehrplan. Nennen Sie uns Klasse und aktuelles Unterrichtsthema.',
      },
      {
        q: 'Wie früh sollte eine Gruppe buchen?',
        a: 'So früh wie möglich: Dann findet sich leichter ein passender Termin. Schreiben Sie uns, und wir nennen Ihnen die freien Tage.',
      },
    ],
    caption: 'Abb. 9 — Osuna vom Aussichtspunkt der Stiftskirche, dahinter die Campiña.',
  },

  faqPage: {
    metaTitle: 'Häufige Fragen zu Führungen in Osuna',
    metaDesc:
      'Buchung, Preise, Eintritte, Sprachen, Treffpunkt, Stornierung und Sommerhitze: Antworten auf häufige Fragen zu den Führungen in Osuna bei Sevilla.',
    kicker: 'Häufige Fragen',
    h1: 'Häufige Fragen zu den Führungen in Osuna',
    lead: 'Alles, was vor der Buchung oft gefragt wird. Ist Ihre Frage nicht dabei, schreiben Sie uns per WhatsApp.',
    groups: { booking: 'Buchung und Preis', visit: 'Die Führung', conditions: 'Bedingungen' },
    more: 'Fragen zu den einzelnen Touren finden Sie auf deren Seite.',
  },

  faq: [
    {
      group: 'booking',
      home: true,
      q: 'Wie buche ich eine Führung?',
      a: 'Schreiben Sie uns per WhatsApp oder rufen Sie an. Nennen Sie uns die gewünschte Tour, das Datum und die Personenzahl, und wir bestätigen Ihnen, ob es passt. Alle Führungen sind mit Voranmeldung: Sie wählen den Tag.',
    },
    {
      group: 'booking',
      home: true,
      q: 'Was kostet eine Führung? Gibt es Ermäßigungen?',
      a: 'Preis auf Anfrage, je nach Gruppe und Tour. Die Eintritte in die Monumente sind im Preis inbegriffen. Für Kinder gibt es Ermäßigungen.',
    },
    {
      group: 'booking',
      q: 'Wie und wann bezahle ich?',
      a: 'Die Zahlung erfolgt im Voraus bei der Buchungsbestätigung, die Eintritte in die Monumente sind inbegriffen. Die Zahlungsart vereinbaren wir dann mit Ihnen.',
    },
    {
      group: 'booking',
      q: 'Sind die Eintritte in die Monumente inbegriffen?',
      a: 'Ja. Der Preis der Führung umfasst die Eintritte in die Monumente auf der Route, an der Kasse zahlen Sie also nichts extra.',
    },
    {
      group: 'booking',
      q: 'Gibt es feste Termine oder kann ich den Tag wählen?',
      a: 'Es gibt keine festen Termine. Alle Führungen sind mit Voranmeldung, und Sie wählen den Tag je nach Verfügbarkeit der Gästeführerin.',
    },
    {
      group: 'visit',
      home: true,
      q: 'In welchen Sprachen finden die Führungen statt?',
      a: 'Auf Deutsch, Englisch, Spanisch und Italienisch. Geben Sie die Sprache einfach bei der Buchung an.',
    },
    {
      group: 'visit',
      home: true,
      q: 'Wo beginnt die Führung?',
      a: 'Auf der Plaza Mayor von Osuna, am Eingang des Rathauses – bei allen Touren außer den Steinbrüchen: Dafür brauchen Sie ein eigenes Fahrzeug, und den Treffpunkt nennen wir Ihnen bei der Buchung.',
    },
    {
      group: 'visit',
      q: 'Wie lange dauert eine Führung?',
      a: 'Etwa drei Stunden, zu Fuß und mit Pausen. Die Dauer ist flexibel: Wenn Sie es kürzer oder länger möchten, passen wir sie an.',
    },
    {
      group: 'visit',
      q: 'Wie viele Personen darf eine Gruppe haben?',
      a: `Bis zu ${s.maxGroup} Personen pro Gruppe.`,
    },
    {
      group: 'visit',
      q: 'Ist die Führung für Menschen mit eingeschränkter Mobilität geeignet?',
      a: 'Wenn jemand in Ihrer Gruppe im Rollstuhl sitzt oder mit Kinderwagen unterwegs ist, sagen Sie uns bei der Buchung Bescheid, dann passen wir die Route an.',
    },
    {
      group: 'visit',
      q: 'Was passiert bei großer Hitze?',
      a: 'Im Sommer kann es in Osuna über 40 °C heiß werden. Von Juni bis September starten die Touren deshalb früh am Morgen und am Abend, mit Pausen im Schatten und in Innenräumen. Bei einer orangen oder roten Hitzewarnung schlagen wir einen anderen Termin vor oder sagen kostenlos ab.',
    },
    {
      group: 'conditions',
      home: true,
      q: 'Kann ich stornieren?',
      a: 'Ja. Die Stornierung ist bis 24 Stunden vorher kostenlos. Bei weniger als 24 Stunden wird der Betrag nicht erstattet.',
    },
    {
      group: 'conditions',
      q: 'Wer führt die Tour?',
      a: `Eine offizielle Gästeführerin Andalusiens mit der Registriernummer ${s.guideLicense}. Sollte sie die Führung einmal nicht übernehmen können, übernimmt ein anderer offizieller Gästeführer.`,
    },
  ],

  contact: {
    phone: 'Telefon',
    whatsapp: 'WhatsApp',
    whatsappAction: 'Per WhatsApp schreiben',
    hours: 'Erreichbarkeit',
    guide: 'Offizielle Gästeführerin Andalusiens',
    meeting: 'Treffpunkt',
    directions: 'Route planen',
    mapLabel: 'Karte mit dem Treffpunkt auf der Plaza Mayor von Osuna',
    noscript: 'Die Karte benötigt JavaScript. Nutzen Sie den Link „Route planen“.',
    marker: 'Treffpunkt',
  },
  days: {
    monSat: 'Montag bis Samstag',
    sun: 'Sonntags',
  },

  footer: {
    routes: 'Touren',
    more: 'Mehr',
    council: 'Mit Unterstützung der Stadtverwaltung Osuna',
    councilPlaceholder: 'Platz für das Logo der Stadtverwaltung Osuna',
    legalNav: 'Rechtliches',
    legal: 'Impressum',
    privacy: 'Datenschutz',
    cookies: 'Cookies',
    credits: 'Bildnachweise',
    photos: 'Fotos von Wikimedia Commons unter freien Lizenzen.',
    noCookies: 'Diese Website verwendet keine Cookies.',
  },

  alt: {
    'colegiata-exterior': 'Chor der Stiftskirche von Osuna aus goldenem Stein, mit Turm und Ziegeldächern unter tiefblauem Himmel.',
    'colegiata-portada': 'Renaissanceportal der Stiftskirche von Osuna mit einem gemeißelten Steinbogen über der Holztür.',
    'colegiata-iglesia': 'Mittelschiff der Stiftskirche von Osuna mit hellen Steinsäulen und dem vergoldeten Altar im Hintergrund.',
    'colegiata-panteon': 'Unterirdische Kapelle der Herzogsgruft in Osuna mit Steingewölbe, Säulen, Fliesensockel und einem Gemälde über dem Altar.',
    'colegiata-techumbre': 'Holzdecke des Kapitelsaals der Stiftskirche von Osuna, zwischen den Balken mit bunten Fliesen verziert.',
    'universidad-fachada': 'Fassade der Alten Universität von Osuna aus ockerfarbenem Stein, mit runden Ecktürmen und spitzen Turmhelmen.',
    'universidad-patio': 'Arkadenhof der Alten Universität von Osuna mit zwei Bogengeschossen auf Säulen und einem Brunnen in der Mitte.',
    'universidad-torres': 'Ecke der Alten Universität von Osuna mit zwei ihrer spitzen Türme vor blauem Himmel.',
    'universidad-retablo': 'Altarbild in der alten Kapelle der Universität von Osuna, mit Heiligenbildern und einer Marienfigur in der Mitte.',
    'encarnacion-claustro': 'Kreuzgang des Klosters der Encarnación in Osuna mit weißen Bögen auf zwei Ebenen, Pflanzen und Fliesensockeln.',
    'encarnacion-azulejo': 'Sevillanisches Fliesenbild aus dem 18. Jahrhundert in der Encarnación in Osuna: eine Jagdszene zwischen Bäumen in Blau und Ocker.',
    'encarnacion-iglesia': 'Innenraum der Kirche des Klosters der Encarnación in Osuna mit verziertem Gewölbe und vergoldetem Altar.',
    'encarnacion-portada': 'Steinportal der Kirche des Klosters der Encarnación in Osuna mit Glockengiebel und gepflasterter Straße.',
    'san-pedro-gomera': 'Barockportal des Palasts des Marqués de la Gomera in Osuna mit Steinbalkon, gedrehten Säulen, Wappen und geschwungenem Gesims.',
    'san-pedro-calle': 'Calle San Pedro in Osuna mit weiß gekalkten Fassaden, Steinportalen und schmiedeeisernen Balkonen.',
    'casa-de-los-torres': 'Steinportal der Casa de los Torres in Osuna mit Balkon und barockem Aufsatz an einer weiß gekalkten Wand.',
    aldaba: 'Eiserner Türklopfer in Form einer Hand an einer alten Holztür in Osuna.',
    'canteras-relieves': 'Steinwände im Coto de las Canteras in Osuna mit gemeißelten Reliefs und großen Hohlräumen im Fels.',
    'canteras-interior': 'Im Coto de las Canteras in Osuna: behauene Felswände, die sich wie ein großer Saal zum Himmel öffnen.',
    'tumbas-romanas': 'In den Fels gehauene Gräber in der Nekropole von Osuna.',
    'plaza-toros-gradas': 'Steinerne Ränge und Logen der Stierkampfarena von Osuna, ein Drehort.',
    'plaza-toros-panoramica': 'Panoramablick über Arena und Ränge der Stierkampfarena von Osuna.',
    'plaza-toros-galeria': 'Gewölbter Steingang unter den Rängen der Stierkampfarena von Osuna.',
    'plaza-toros-exterior': 'Äußere Steinmauer der Stierkampfarena von Osuna mit ihrem Bogeneingang.',
    'vista-panoramica': 'Panorama von Osuna vom Aussichtspunkt der Stiftskirche: weiße Häuser und Campiña bis zum Horizont.',
    'nocturna-duotono': 'Osuna von oben als nachtblauer Duoton: Dächer, Türme und die Campiña dahinter.',
    'nocturna-san-pedro': 'Calle San Pedro in Osuna als nachtblauer Duoton, mit Laternen und schmiedeeisernen Balkonen.',
    'nocturna-plaza-mayor': 'Plaza Mayor von Osuna als nachtblauer Duoton, mit dem Rathaus und der Stiftskirche im Hintergrund.',
  } as Record<string, string>,

  credits: {
    metaTitle: 'Bildnachweise · Stadtführungen Osuna',
    metaDesc:
      'Urheber, Lizenzen und Herkunft der Fotos von Wikimedia Commons, die auf der Website von Osuna Paso a Paso für Führungen in Osuna verwendet werden.',
    title: 'Bildnachweise',
    intro:
      'Alle Fotos stammen von Wikimedia Commons und werden unter freien Lizenzen verwendet. Vielen Dank an die Urheber. Bearbeitete Versionen von CC-BY-SA-Fotos werden unter derselben Lizenz weitergegeben.',
    photo: 'Foto',
    author: 'Urheber',
    license: 'Lizenz',
    source: 'Original',
    changes: { none: 'Unverändert', grade: 'Zugeschnitten und farblich angepasst', duotone: 'In Duoton umgewandelt' },
    publicDomain: 'Gemeinfrei',
    logo: 'Logo und Webdesign sind eigene Arbeiten. Karte: © OpenStreetMap-Mitwirkende.',
  },

  legal: {
    metaTitle: 'Impressum · Stadtführungen in Osuna',
    metaDesc:
      'Impressum der Website von Osuna Paso a Paso für Führungen in Osuna: Inhaberin, Nutzungsbedingungen, Urheberrecht und Haftung nach spanischem Recht.',
    title: 'Impressum',
    sections: [
      {
        h: 'Inhaberin der Website',
        p: [
          'Gemäß Artikel 10 des spanischen Gesetzes 34/2002 über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSI-CE) werden folgende Angaben zur Inhaberin dieser Website gemacht:',
          `Inhaberin: ${s.owner.name}, selbstständig · Steuernummer (NIF): ${s.owner.taxId} · Anschrift: ${s.owner.address}, Spanien · E-Mail: ${s.owner.email} · Telefon: ${s.phoneDisplay} · Offizielle Gästeführerin Andalusiens, Registriernummer ${s.guideLicense}. Handelsname: ${s.brand}.`,
        ],
      },
      {
        h: 'Zweck',
        p: [
          `Diese Website informiert über die Führungen durch Osuna von ${s.brand} und erleichtert die Buchung per Telefon oder WhatsApp. Über die Website werden keine Verkäufe oder Zahlungen abgewickelt.`,
        ],
      },
      {
        h: 'Nutzungsbedingungen',
        p: [
          'Der Zugang zur Website ist frei und kostenlos. Besucher verpflichten sich, die Inhalte angemessen zu nutzen und nicht für rechtswidrige oder treuwidrige Zwecke zu verwenden.',
          'Die Einzelheiten jeder Führung (Datum, Route und Preis) werden bei der Buchung bestätigt.',
        ],
      },
      {
        h: 'Urheberrecht',
        p: [
          'Texte, Logo und Design der Website gehören der Inhaberin. Die Fotos gehören ihren Urhebern und werden unter freien Lizenzen verwendet, wie auf der Seite Bildnachweise angegeben.',
        ],
      },
      {
        h: 'Haftung und Links',
        p: [
          'Die Inhaberin haftet nicht für die Inhalte verlinkter externer Websites (z. B. WhatsApp, Google Maps oder OpenStreetMap) und nicht für Ausfälle, die sie nicht zu vertreten hat.',
        ],
      },
      {
        h: 'Anwendbares Recht',
        p: ['Für dieses Impressum gilt spanisches Recht.'],
      },
    ],
  },

  privacy: {
    metaTitle: 'Datenschutzerklärung · Führungen Osuna',
    metaDesc:
      'Wie wir Ihre Daten verarbeiten, wenn Sie uns per WhatsApp oder Telefon kontaktieren, um eine Führung in Osuna zu buchen: Verantwortliche, Zweck, Rechte.',
    title: 'Datenschutzerklärung',
    sections: [
      {
        h: 'Verantwortliche',
        p: [`${s.owner.name}, Steuernummer ${s.owner.taxId}, ${s.owner.address}, Spanien. Kontakt: ${s.owner.email} · ${s.phoneDisplay}.`],
      },
      {
        h: 'Welche Daten wir verarbeiten und wozu',
        p: [
          'Die Website hat keine Formulare und keine Benutzerkonten. Wir verarbeiten nur die Daten, die Sie uns bei einer Kontaktaufnahme per WhatsApp oder Telefon mitteilen: Ihren Namen, Ihre Telefonnummer, den Inhalt Ihrer Nachrichten und die Details der Führung (Datum, Personenzahl, Sprache und ggf. Hinweise zur Barrierefreiheit).',
          'Wir nutzen sie ausschließlich, um Ihre Anfrage zu beantworten, die Buchung und Zahlung abzuwickeln und Sie über Änderungen zu informieren.',
        ],
      },
      {
        h: 'Rechtsgrundlage',
        p: [
          'Die Durchführung vorvertraglicher Maßnahmen und die Erbringung der von Ihnen angefragten Leistung (Art. 6 Abs. 1 lit. b DSGVO) sowie die Erfüllung gesetzlicher Pflichten, etwa steuerlicher (Art. 6 Abs. 1 lit. c DSGVO).',
        ],
      },
      {
        h: 'WhatsApp',
        p: [
          'Wenn Sie WhatsApp nutzen, laufen die Nachrichten über die Server der WhatsApp Ireland Limited (Meta-Konzern), die Daten nach ihrer eigenen Datenschutzrichtlinie verarbeitet und Daten international übermitteln kann. Wenn Sie das nicht möchten, rufen Sie uns einfach an.',
        ],
      },
      {
        h: 'Speicherdauer',
        p: [
          'Solange die Abwicklung der Buchung dauert und danach so lange, wie gesetzliche Pflichten es erfordern. Unterhaltungen, die nicht zu einer Buchung führen, werden spätestens nach 12 Monaten gelöscht.',
        ],
      },
      {
        h: 'Weitergabe',
        p: [
          'An niemanden, außer bei gesetzlicher Verpflichtung. Könnte die Gästeführerin eine Führung nicht übernehmen, würden die nötigen Buchungsdaten an den vertretenden offiziellen Gästeführer weitergegeben, nur damit die Führung stattfinden kann. Wir verkaufen keine Daten und geben sie nicht an Dritte weiter.',
        ],
      },
      {
        h: 'Statistik ohne Cookies',
        p: [
          'Um zu wissen, wie viele Menschen die Website besuchen, nutzen wir Cloudflare Web Analytics. Das Tool setzt keine Cookies, verwendet keine dauerhaften Kennungen und verfolgt niemanden über verschiedene Websites hinweg. Es liefert nur zusammengefasste, anonyme Statistiken (Seitenaufrufe, Land, Gerätetyp).',
        ],
      },
      {
        h: 'Hosting und Karte',
        p: [
          'Die Website wird bei Cloudflare gehostet. Wie jeder Webserver empfängt er technische Verbindungsdaten (IP-Adresse, Browser), um die Seiten auszuliefern und vor Angriffen zu schützen.',
          'Die Karte des Treffpunkts lädt ihre Bilder von den Servern von OpenStreetMap, die dafür Ihre IP-Adresse erhalten. OpenStreetMap setzt keine Cookies.',
        ],
      },
      {
        h: 'Ihre Rechte',
        p: [
          `Sie können Ihre Rechte auf Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung und Datenübertragbarkeit per E-Mail an ${s.owner.email} ausüben. Wenn Sie der Meinung sind, dass Ihr Anliegen nicht richtig behandelt wurde, können Sie sich bei der spanischen Datenschutzbehörde (aepd.es) beschweren.`,
        ],
      },
    ],
  },

  cookies: {
    metaTitle: 'Cookie-Richtlinie · Führungen in Osuna',
    metaDesc:
      'Die Website für Führungen in Osuna verwendet keine eigenen Cookies und keine Cookies von Drittanbietern. Deshalb sehen Sie hier auch keinen Cookie-Banner.',
    title: 'Cookie-Richtlinie',
    sections: [
      {
        h: 'Diese Website verwendet keine Cookies',
        p: [
          'Wir setzen keine eigenen Cookies und keine von Drittanbietern: keine Statistik-, Werbe- oder Social-Media-Cookies. Deshalb zeigen wir Ihnen auch keinen Einwilligungsbanner.',
        ],
      },
      {
        h: 'Wie wir das erreichen',
        p: [
          'Die Schriften liegen auf unserem eigenen Server, die Karte nutzt OpenStreetMap (ohne Cookies) statt Google Maps, es gibt keine eingebetteten Videos und die Statistik (Cloudflare Web Analytics) funktioniert ohne Cookies.',
          'Links zu WhatsApp und Google Maps führen Sie nur dann zu diesen Diensten, wenn Sie sie anklicken; ab dann gelten deren eigene Richtlinien.',
        ],
      },
      {
        h: 'Falls sich das ändert',
        p: ['Sollten wir jemals Cookies einsetzen, aktualisieren wir diese Richtlinie und bitten Sie vorher um Ihre Einwilligung.'],
      },
    ],
  },

  notFound: {
    metaTitle: 'Seite nicht gefunden · Führungen Osuna',
    metaDesc: 'Die gesuchte Seite existiert nicht oder wurde verschoben. Zurück zur Startseite von Osuna Paso a Paso – dort finden Sie unsere sieben Führungen in Osuna.',
    kicker: 'Fehler 404',
    title: 'Diese Gasse führt nirgendwohin',
    text: 'Die gesuchte Seite existiert nicht oder wurde verschoben. Zurück zur Startseite – und wählen Sie Ihre Tour.',
    back: 'Zur Startseite',
  },
  lastUpdated: 'Stand: Oktober 2026',
};

export default de;
