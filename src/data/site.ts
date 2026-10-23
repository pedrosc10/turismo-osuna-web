/**
 * DATOS DE NEGOCIO — único archivo que hay que tocar para cambiar teléfono, horario, punto de
 * encuentro, fotos de cada ruta, etc. Los textos (nombres, descripciones, FAQ…) están en
 * src/i18n/{es,en,de}.ts y las URL de cada página en src/i18n/pages.mjs.
 *
 * Datos confirmados por la clienta el 23/10/2026 (ver RESPUESTAS-CLIENTE.md).
 * Lo único pendiente es el dominio, que se configura en astro.config.mjs / SITE_URL.
 */

export type Locale = 'es' | 'en' | 'de';
export type TourLanguage = 'es' | 'en' | 'de' | 'it';

export const site = {
  /** Nombre comercial. */
  brand: 'Osuna Paso a Paso',
  /** Segunda línea del logotipo. */
  brandTagline: 'Visitas guiadas',

  /** Teléfono en formato internacional E.164 (para tel: y JSON-LD). */
  phone: '+34652845159',
  /** Teléfono tal como se muestra en pantalla. */
  phoneDisplay: '+34 652 845 159',
  /** Número de WhatsApp, solo dígitos con prefijo de país (para wa.me). */
  whatsapp: '34652845159',

  /** Número de registro de guía oficial de turismo de Andalucía. */
  guideLicense: 'GT/00975',

  /** Idiomas en los que se hacen las visitas (las de italiano las da la propia guía). */
  tourLanguages: ['es', 'en', 'de', 'it'] as TourLanguage[],

  /** Duración aproximada de las visitas, en horas (adaptable). */
  durationHours: 3,
  /** Tamaño máximo de grupo. */
  maxGroup: 30,
  /** Cancelación gratuita hasta estas horas antes; con menos no se devuelve el importe. */
  freeCancellationHours: 24,

  /** Horario de atención telefónica y por WhatsApp. Las etiquetas de los días se traducen en i18n. */
  contactHours: [
    { days: 'monSat', hours: '9:00–14:00 · 17:00–20:30' },
    { days: 'sun', hours: '9:00–13:00' },
  ],

  /** Horario de atención en formato schema.org (JSON-LD). Debe coincidir con contactHours. */
  openingHoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '14:00' },
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '17:00', closes: '20:30' },
    { days: ['Sunday'], opens: '09:00', closes: '13:00' },
  ],

  /**
   * Punto de encuentro de todas las rutas (salvo Las Canteras, que se indica al reservar).
   * Coordenadas: puerta del Ayuntamiento en la Plaza Mayor, según OpenStreetMap.
   */
  meetingPoint: {
    name: 'Plaza Mayor de Osuna',
    streetAddress: 'Plaza Mayor (puerta del Ayuntamiento)',
    postalCode: '41640',
    locality: 'Osuna',
    region: 'Sevilla',
    country: 'ES',
    lat: 37.2372,
    lng: -5.1031,
  },

  /** Titular de la web (aviso legal y privacidad). Persona física autónoma. */
  owner: {
    name: 'Elena Gallardo Camuñez',
    taxId: '52561899-E',
    address: 'Calle Cruz 167, 41640 Osuna (Sevilla)',
    email: 'elenagallardo1971@gmail.com',
  },

  /**
   * Recuadro «Con la colaboración del Ayuntamiento de Osuna» en el pie.
   * Desactivado a petición de la clienta (23/10/2026). Ponlo a true si el Ayuntamiento lo pide;
   * el componente está en src/components/CouncilCredit.astro.
   */
  showCouncilCredit: false,

  /** Cloudflare Web Analytics: el token se define en .env (PUBLIC_CF_ANALYTICS_TOKEN). */
  analyticsToken: (import.meta.env?.PUBLIC_CF_ANALYTICS_TOKEN as string | undefined) ?? '',
} as const;

/**
 * Rutas. Los textos están en i18n → routes.<id> y las URL en src/i18n/pages.mjs (clave `route-<id>`).
 * - `image`: foto principal (también en el inicio y en la imagen para redes sociales).
 * - `photos`: fotos secundarias de su página (2–4). Los textos alternativos están en i18n → alt.
 * - `arch`: la foto principal se recorta en arco (DESIGN.md §6.1).
 * - `night`: cabecera en azul noche (ruta nocturna).
 * - `ownTransport`: requiere vehículo propio; el punto de encuentro se indica al reservar.
 * - `related`: rutas que se enlazan al final de la página.
 * - `touristType`: público al que se dirige (schema.org TouristTrip, en inglés).
 */
export interface Route {
  id: RouteId;
  numeral: string;
  image: string;
  photos: string[];
  arch?: boolean;
  night?: boolean;
  ownTransport?: boolean;
  related: RouteId[];
  touristType: string[];
}

export type RouteId = 'colegiata' | 'universidad' | 'encarnacion' | 'sanpedro' | 'canteras' | 'cine' | 'nocturna';

export const routes: Route[] = [
  {
    id: 'colegiata',
    numeral: 'I',
    image: 'colegiata-portada',
    photos: ['colegiata-iglesia', 'colegiata-panteon', 'colegiata-techumbre', 'vista-panoramica'],
    arch: true,
    related: ['universidad', 'encarnacion', 'nocturna'],
    touristType: ['Cultural tourism', 'Heritage tourism', 'Religious art', 'Families'],
  },
  {
    id: 'universidad',
    numeral: 'II',
    image: 'universidad-fachada',
    photos: ['universidad-patio', 'universidad-torres', 'universidad-retablo'],
    related: ['colegiata', 'sanpedro', 'canteras'],
    touristType: ['Cultural tourism', 'Heritage tourism', 'School groups'],
  },
  {
    id: 'encarnacion',
    numeral: 'III',
    image: 'encarnacion-claustro',
    photos: ['encarnacion-azulejo', 'encarnacion-iglesia', 'encarnacion-portada'],
    related: ['colegiata', 'sanpedro', 'universidad'],
    touristType: ['Cultural tourism', 'Heritage tourism', 'Religious art'],
  },
  {
    id: 'sanpedro',
    numeral: 'IV',
    image: 'san-pedro-gomera',
    photos: ['san-pedro-calle', 'casa-de-los-torres', 'aldaba'],
    arch: true,
    related: ['encarnacion', 'nocturna', 'colegiata'],
    touristType: ['Cultural tourism', 'Architecture', 'Families'],
  },
  {
    id: 'canteras',
    numeral: 'V',
    image: 'canteras-relieves',
    photos: ['canteras-interior', 'tumbas-romanas'],
    ownTransport: true,
    related: ['colegiata', 'cine', 'universidad'],
    touristType: ['Archaeological tourism', 'Cultural tourism', 'Families'],
  },
  {
    id: 'cine',
    numeral: 'VI',
    image: 'plaza-toros-gradas',
    photos: ['plaza-toros-panoramica', 'plaza-toros-galeria', 'plaza-toros-exterior'],
    related: ['canteras', 'sanpedro', 'nocturna'],
    touristType: ['Film tourism', 'Game of Thrones fans', 'Families'],
  },
  {
    id: 'nocturna',
    numeral: 'VII',
    image: 'nocturna-duotono',
    photos: ['nocturna-san-pedro', 'nocturna-plaza-mayor'],
    night: true,
    related: ['sanpedro', 'colegiata', 'cine'],
    touristType: ['Cultural tourism', 'Night tour', 'Families'],
  },
];

export const routeById = (id: RouteId): Route => routes.find((r) => r.id === id)!;

/**
 * true si la web se publica en una URL de demostración de Cloudflare (*.workers.dev, *.pages.dev):
 * entonces todas las páginas llevan noindex para que los buscadores no indexen una URL provisional.
 * Al definir SITE_URL con el dominio definitivo, la web pasa a ser indexable sin tocar nada más.
 */
export function isPreviewSite(siteUrl: URL | string | undefined): boolean {
  if (!siteUrl) return true;
  return /\.(workers|pages)\.dev$/.test(new URL(siteUrl).hostname);
}

/** Enlace de WhatsApp con mensaje prerrellenado. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Enlace tel:. */
export const telUrl = `tel:${site.phone}`;

/** Enlace «Cómo llegar» a Google Maps (se abre en pestaña nueva; no se incrusta nada de Google). */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.meetingPoint.lat},${site.meetingPoint.lng}`;
