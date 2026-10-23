/**
 * Piezas de datos estructurados (JSON-LD, schema.org) compartidas por las páginas.
 * Ver README §SEO para qué tipo va en cada página.
 */
import { site, type Locale } from '../data/site';
import { pagePath, type PageKey } from '../i18n';
import type { Dict } from '../i18n/es';

export const businessId = (siteUrl: string) => `${siteUrl}/#business`;

/** Negocio local completo (solo en el inicio). Sin aggregateRating ni precios: no hay reseñas y los precios son a consultar. */
export function businessNode(siteUrl: string, locale: Locale, tr: Dict) {
  const mp = site.meetingPoint;
  return {
    '@type': 'LocalBusiness',
    '@id': businessId(siteUrl),
    name: site.brand,
    description: tr.meta.description,
    url: `${siteUrl}${pagePath('home', locale)}`,
    image: `${siteUrl}/og/og-${locale}.jpg`,
    logo: `${siteUrl}/logo.svg`,
    telephone: site.phone,
    knowsLanguage: site.tourLanguages,
    address: {
      '@type': 'PostalAddress',
      streetAddress: mp.streetAddress,
      postalCode: mp.postalCode,
      addressLocality: mp.locality,
      addressRegion: mp.region,
      addressCountry: mp.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: mp.lat, longitude: mp.lng },
    areaServed: {
      '@type': 'City',
      name: 'Osuna',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Provincia de Sevilla, Andalucía, España' },
    },
    openingHoursSpecification: site.openingHoursSchema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: `${tr.facts.guide} ${site.guideLicense}`,
      credentialCategory: 'license',
      recognizedBy: { '@type': 'GovernmentOrganization', name: 'Junta de Andalucía' },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      contactType: 'reservations',
      availableLanguage: ['Spanish', 'English', 'German', 'Italian'],
    },
  };
}

/** Referencia al negocio desde las páginas interiores (con lo mínimo para que se entienda sola). */
export function providerRef(siteUrl: string, locale: Locale) {
  return {
    '@type': 'LocalBusiness',
    '@id': businessId(siteUrl),
    name: site.brand,
    telephone: site.phone,
    url: `${siteUrl}${pagePath('home', locale)}`,
  };
}

export interface Crumb {
  name: string;
  key: PageKey;
}

export function breadcrumbNode(siteUrl: string, locale: Locale, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${siteUrl}${pagePath(c.key, locale)}`,
    })),
  };
}

export function faqNode(id: string, items: { q: string; a: string }[], inLanguage: string) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    inLanguage,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function webPageNode(siteUrl: string, url: string, name: string, description: string, inLanguage: string) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage,
    isPartOf: { '@id': `${siteUrl}/#website` },
  };
}
