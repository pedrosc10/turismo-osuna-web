export declare const locales: readonly ['es', 'en', 'de'];
export declare const defaultLocale: 'es';
export declare const hreflang: Record<'es' | 'en' | 'de', string>;
export declare const pages: Record<'home' | 'credits' | 'legal' | 'privacy' | 'cookies', Record<'es' | 'en' | 'de', string>>;
export declare function pagePath(key: keyof typeof pages, locale: 'es' | 'en' | 'de'): string;
export declare function pageKeyFromPath(path: string): keyof typeof pages | undefined;
export declare function sitemapLinks(url: string, site: string): { lang: string; url: string }[];
