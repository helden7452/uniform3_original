// Define available locales
export const locales = ['ar-SA'] as const;
export type Locale = typeof locales[number];

// Define dictionaries for translations
const dictionaries = {
  'ar-SA': () => import('../data/dictionaries/ar-SA.json').then(module => module.default),
};

// Get dictionary for a specific locale
export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

// Function to determine if a pathname includes a locale
export function pathnameHasLocale(pathname: string) {
  return locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
}

// Helper function to get locale from pathname
export function getLocaleFromPathname(pathname: string): Locale | undefined {
  const segments = pathname.split('/');
  const localeCandidate = segments[1];
  
  if (locales.includes(localeCandidate as Locale)) {
    return localeCandidate as Locale;
  }
  
  return undefined;
} 