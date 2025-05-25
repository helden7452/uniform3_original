import Link from 'next/link';
import { Locale, getDictionary } from '@/utils/i18n';
import LocaleSwitcher from './LocaleSwitcher';

export default async function Header({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href={`/${locale === 'ar-SA' ? '' : locale}`} className="text-2xl font-bold">
            {/* You can add a logo image here */}
            خبراء الزي الموحد
          </Link>
        </div>

        <nav className="hidden md:flex space-x-4 items-center">
          <Link 
            href={`/${locale === 'ar-SA' ? '' : locale}`} 
            className="px-3 py-2 rounded hover:bg-gray-100"
          >
            {dict.common.navigation.home}
          </Link>
          <Link 
            href={`/${locale}/about`} 
            className="px-3 py-2 rounded hover:bg-gray-100"
          >
            {dict.common.navigation.about}
          </Link>
          <Link 
            href={`/${locale}/blog`} 
            className="px-3 py-2 rounded hover:bg-gray-100"
          >
            {dict.common.navigation.blog}
          </Link>
          <Link 
            href={`/${locale}/contact`} 
            className="px-3 py-2 rounded hover:bg-gray-100"
          >
            {dict.common.navigation.contact}
          </Link>
          
          <LocaleSwitcher 
            locale={locale} 
            dictionary={{ selectLanguage: "اختر اللغة" }} 
          />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="p-2 rounded hover:bg-gray-100">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 