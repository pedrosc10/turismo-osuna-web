/**
 * DATOS DE NEGOCIO — único archivo que hay que tocar para cambiar teléfono, precios, horarios,
 * punto de encuentro, etc. Los textos (nombres y descripciones de rutas, FAQ…) están en
 * src/i18n/{es,en,de}.ts.
 *
 * Todo lo marcado con «TODO-V2: dato provisional» es inventado y debe confirmarse con la guía
 * (ver PREGUNTAS-CLIENTE.md). Al sustituirlo, borra también el comentario.
 */

export type Locale = 'es' | 'en' | 'de';
export type TourLanguage = 'es' | 'en' | 'de' | 'it';

export const site = {
  /** Nombre comercial. */
  brand: 'Osuna Paso a Paso', // TODO-V2: dato provisional
  /** Segunda línea del logotipo. */
  brandTagline: 'Visitas guiadas', // TODO-V2: dato provisional

  /** Teléfono en formato internacional E.164 (para tel: y JSON-LD). */
  phone: '+34600000000', // TODO-V2: dato provisional
  /** Teléfono tal como se muestra en pantalla. */
  phoneDisplay: '+34 600 000 000', // TODO-V2: dato provisional
  /** Número de WhatsApp, solo dígitos con prefijo de país (para wa.me). */
  whatsapp: '34600000000', // TODO-V2: dato provisional

  /** Número de registro de guía oficial de turismo de Andalucía. */
  guideLicense: 'GT-0000-SE', // TODO-V2: dato provisional

  /** Idiomas en los que se hacen las visitas (dato real). */
  tourLanguages: ['es', 'en', 'de', 'it'] as TourLanguage[],

  /** Duración aproximada de las visitas, en horas (dato real). */
  durationHours: 3,

  /** Horario de atención telefónica y por WhatsApp. Las etiquetas se traducen en i18n. */
  contactHours: [
    { days: 'monSat', hours: '9:00–14:00 · 17:00–20:30' }, // TODO-V2: dato provisional
    { days: 'sun', hours: '9:00–13:00' }, // TODO-V2: dato provisional
  ],

  /** Horario de atención en formato schema.org (JSON-LD). Debe coincidir con contactHours. */
  openingHoursSchema: ['Mo-Sa 09:00-14:00', 'Mo-Sa 17:00-20:30', 'Su 09:00-13:00'], // TODO-V2: dato provisional

  /** Punto de encuentro general (Plaza Mayor, puerta del Ayuntamiento). */
  meetingPoint: {
    name: 'Plaza Mayor de Osuna', // TODO-V2: dato provisional
    streetAddress: 'Plaza Mayor, 1', // TODO-V2: dato provisional
    postalCode: '41640',
    locality: 'Osuna',
    region: 'Sevilla',
    country: 'ES',
    lat: 37.23738, // TODO-V2: dato provisional
    lng: -5.10318, // TODO-V2: dato provisional
  },

  /** Precios orientativos (euros por persona). */
  pricing: {
    currency: 'EUR',
    childrenFreeUnder: 12, // TODO-V2: dato provisional
    reducedDiscountPercent: 20, // TODO-V2: dato provisional (estudiantes, mayores de 65)
  },

  /** Plazo de cancelación sin coste, en horas. */
  cancellation: {
    individualHours: 24, // TODO-V2: dato provisional
    groupHours: 72, // TODO-V2: dato provisional
  },

  /** Titular de la web para el aviso legal. */
  owner: {
    name: '[Nombre y apellidos de la guía]', // TODO-V2: dato provisional
    taxId: '[NIF]', // TODO-V2: dato provisional
    address: '[Dirección fiscal], 41640 Osuna (Sevilla)', // TODO-V2: dato provisional
    email: 'info@ejemplo.com', // TODO-V2: dato provisional
  },

  /** Cloudflare Web Analytics: el token se define en .env (PUBLIC_CF_ANALYTICS_TOKEN). */
  analyticsToken: (import.meta.env?.PUBLIC_CF_ANALYTICS_TOKEN as string | undefined) ?? '',
} as const;

/**
 * Rutas. El texto (nombre, descripción, pie de foto) está en i18n con la misma clave `id`.
 * - `layout`: composición en la página (ver DESIGN.md §6.2).
 * - `priceFrom`: precio orientativo por persona; `null` = «a consultar».
 * - `schedule`: clave de horario (se traduce en i18n → schedules).
 */
export type RouteLayout = 'feature' | 'pair' | 'index' | 'night';

export interface Route {
  id: string;
  numeral: string;
  image: string;
  layout: RouteLayout;
  priceFrom: number | null;
  schedule: 'day' | 'morning' | 'weekend' | 'night';
  arch?: boolean;
}

export const routes: Route[] = [
  { id: 'colegiata', numeral: 'I', image: 'colegiata-portada', layout: 'feature', priceFrom: 15, schedule: 'day', arch: true }, // TODO-V2: dato provisional (precio, horario)
  { id: 'universidad', numeral: 'II', image: 'universidad-fachada', layout: 'pair', priceFrom: 12, schedule: 'day' }, // TODO-V2: dato provisional (precio, horario)
  { id: 'encarnacion', numeral: 'III', image: 'encarnacion-claustro', layout: 'pair', priceFrom: 12, schedule: 'morning' }, // TODO-V2: dato provisional (precio, horario)
  { id: 'sanpedro', numeral: 'IV', image: 'san-pedro-gomera', layout: 'feature', priceFrom: 12, schedule: 'day', arch: true }, // TODO-V2: dato provisional (precio, horario)
  { id: 'canteras', numeral: 'V', image: 'canteras-relieves', layout: 'index', priceFrom: 15, schedule: 'morning' }, // TODO-V2: dato provisional (precio, horario)
  { id: 'cine', numeral: 'VI', image: 'plaza-toros-gradas', layout: 'index', priceFrom: 15, schedule: 'weekend' }, // TODO-V2: dato provisional (precio, horario)
  { id: 'nocturna', numeral: 'VII', image: 'nocturna-duotono', layout: 'night', priceFrom: 15, schedule: 'night' }, // TODO-V2: dato provisional (precio, horario)
];

/** Horarios de salida por tipo. Los días se traducen en i18n → days. */
export const schedules = {
  day: { days: 'tueSun', times: ['10:00', '17:30'] }, // TODO-V2: dato provisional
  morning: { days: 'tueSat', times: ['10:30'] }, // TODO-V2: dato provisional
  weekend: { days: 'friSun', times: ['11:00'] }, // TODO-V2: dato provisional
  night: { days: 'friSat', times: ['21:30'] }, // TODO-V2: dato provisional (22:00 en verano)
} as const;

/** Fotos de la galería, en orden. Los textos alternativos están en i18n → alt. */
export const gallery = [
  'colegiata-iglesia',
  'encarnacion-azulejo',
  'colegiata-panteon',
  'aldaba',
  'universidad-patio',
  'san-pedro-calle',
  'colegiata-techumbre',
  'canteras-interior',
  'casa-de-los-torres',
  'tumbas-romanas',
  'tejados',
  'plaza-toros-panoramica',
];

/** Enlace de WhatsApp con mensaje prerrellenado. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Enlace tel:. */
export const telUrl = `tel:${site.phone}`;

/** Enlace «Cómo llegar» a Google Maps (se abre en pestaña nueva; no se incrusta nada de Google). */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.meetingPoint.lat},${site.meetingPoint.lng}`;

/** Precio orientativo más bajo entre las rutas (para la FAQ y el JSON-LD). */
export const minPrice = Math.min(...routes.map((r) => r.priceFrom ?? Infinity));
