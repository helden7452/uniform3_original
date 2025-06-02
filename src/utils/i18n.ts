// Define available locales
export const locales = ['ar-SA', 'en-US'] as const;
export type Locale = typeof locales[number];

// Default locale
export const defaultLocale: Locale = 'ar-SA';

// Define dictionaries for translations
const dictionaries = {
  'ar-SA': () => import('../data/dictionaries/ar-SA.json').then(module => module.default),
  'en-US': () => import('../data/dictionaries/en-US.json').then(module => module.default),
};

// Get dictionary for a specific locale
export const getDictionary = async (locale: Locale) => {
  try {
    const dictionary = await dictionaries[locale]();
    return dictionary;
  } catch (error) {
    console.error(`Failed to load dictionary for locale "${locale}":`, error);
    // Fallback to default locale
    if (locale !== defaultLocale) {
      console.log(`Falling back to default locale: ${defaultLocale}`);
      return await dictionaries[defaultLocale]();
    }
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }
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