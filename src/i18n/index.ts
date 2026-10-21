import es from './es';
import en from './en';
import de from './de';
import type { Dict } from './es';
import type { Locale } from '../data/site';
export { locales, defaultLocale, pages, pagePath, hreflang } from './pages.mjs';

const dictionaries: Record<Locale, Dict> = { es, en, de };

/** Diccionario de textos de un idioma. */
export function t(locale: string | undefined): Dict {
  return dictionaries[(locale as Locale) ?? 'es'] ?? es;
}

export function asLocale(locale: string | undefined): Locale {
  return locale === 'en' || locale === 'de' ? locale : 'es';
}

export type PageKey = 'home' | 'credits' | 'legal' | 'privacy' | 'cookies';
