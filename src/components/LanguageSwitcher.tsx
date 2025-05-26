'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale, locales, defaultLocale } from '@/utils/i18n';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  dictionary: any;
}

const LanguageSwitcher = ({ currentLocale, dictionary }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: Locale) => {
    // Set locale cookie
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year
    
    let newPath = pathname;
    
    // Remove current locale from path if it exists
    const currentLocaleInPath = locales.find(locale => 
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    
    if (currentLocaleInPath) {
      newPath = pathname.replace(`/${currentLocaleInPath}`, '') || '/';
    }
    
    // Add new locale to path (except for default locale)
    if (newLocale !== defaultLocale) {
      newPath = `/${newLocale}${newPath}`;
    }
    
    setIsOpen(false);
    router.push(newPath);
  };

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case 'ar-SA':
        return 'العربية';
      case 'en-US':
        return 'English';
      default:
        return locale;
    }
  };

  const getLanguageFlag = (locale: Locale) => {
    switch (locale) {
      case 'ar-SA':
        return '🇸🇦';
      case 'en-US':
        return '🇺🇸';
      default:
        return '🌐';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
        aria-label={dictionary?.language?.switch || 'Switch Language'}
      >
        <span className="text-lg">{getLanguageFlag(currentLocale)}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {getLanguageLabel(currentLocale)}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => switchLanguage(locale)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3 rtl:space-x-reverse ${
                    currentLocale === locale 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{getLanguageFlag(locale)}</span>
                  <span>{getLanguageLabel(locale)}</span>
                  {currentLocale === locale && (
                    <svg className="w-4 h-4 mr-auto rtl:ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
