'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Locale, locales } from '@/utils/i18n';
import { useCallback } from 'react';

export default function LocaleSwitcher({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: {
    selectLanguage: string;
  };
}) {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = useCallback(
    (newLocale: Locale) => {
      if (!pathName) return '/';
      
      const segments = pathName.split('/');
      
      // If the first segment is the current locale, replace it
      if (segments[1] === locale) {
        segments[1] = newLocale;
      } else {
        // Otherwise add the locale as the first segment
        segments.splice(1, 0, newLocale);
      }

      return segments.join('/');
    },
    [pathName, locale]
  );

  return (
    <div className="flex items-center">
      <label htmlFor="locale-select" className="sr-only">
        {dictionary.selectLanguage}
      </label>
      <select
        id="locale-select"
        value={locale}
        onChange={(e) => {
          const newLocale = e.target.value as Locale;
          router.push(redirectedPathName(newLocale));
        }}
        className="appearance-none rounded border bg-transparent py-2 px-4"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === 'ar-SA' ? 'العربية' : loc}
          </option>
        ))}
      </select>
    </div>
  );
} 