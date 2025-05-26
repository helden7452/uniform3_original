import { Inter, Tajawal } from 'next/font/google';
import { Locale, locales, getDictionary, defaultLocale } from '@/utils/i18n';
import { Metadata } from 'next';
import AOSInitializer from '@/components/AOSInitializer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import '../globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);
  const isRTL = params.locale === 'ar-SA';
  
  return {
    title: dictionary.common?.meta?.defaultTitle || 'Uniform Experts',
    description: dictionary.common?.meta?.defaultDescription || 'Professional uniform solutions in Saudi Arabia',
    keywords: isRTL 
      ? 'زي موحد, زي طبي, زي أمن, زي فنادق, زي شركات, السعودية'
      : 'uniforms, medical uniforms, security uniforms, hotel uniforms, corporate uniforms, Saudi Arabia',
    authors: [{ name: 'Uniform Experts' }],
    creator: 'Uniform Experts',
    publisher: 'Uniform Experts',
    robots: 'index, follow',
    openGraph: {
      title: dictionary.common?.meta?.defaultTitle || 'Uniform Experts',
      description: dictionary.common?.meta?.defaultDescription || 'Professional uniform solutions in Saudi Arabia',
      type: 'website',
      locale: params.locale,
      alternateLocale: locales.filter(l => l !== params.locale),
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.common?.meta?.defaultTitle || 'Uniform Experts',
      description: dictionary.common?.meta?.defaultDescription || 'Professional uniform solutions in Saudi Arabia',
    },
    alternates: {
      languages: {
        'ar-SA': '/',
        'en-US': '/en-US',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const dictionary = await getDictionary(params.locale);
  const isRTL = params.locale === 'ar-SA';
  
  return (
    <html 
      lang={params.locale} 
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${tajawal.variable}`}
    >
      <body className={`${isRTL ? 'font-tajawal' : 'font-inter'} antialiased`}>
        <AOSInitializer />
        
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-primary">
                  Uniform Experts
                </h1>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                <a href={params.locale === defaultLocale ? '/' : `/${params.locale}`} className="text-gray-700 hover:text-primary transition-colors">
                  {dictionary.common?.navigation?.home}
                </a>
                <a href={params.locale === defaultLocale ? '/about' : `/${params.locale}/about`} className="text-gray-700 hover:text-primary transition-colors">
                  {dictionary.common?.navigation?.about}
                </a>
                <a href={params.locale === defaultLocale ? '/blog' : `/${params.locale}/blog`} className="text-gray-700 hover:text-primary transition-colors">
                  {dictionary.common?.navigation?.blog}
                </a>
                <a href={params.locale === defaultLocale ? '/contact' : `/${params.locale}/contact`} className="text-gray-700 hover:text-primary transition-colors">
                  {dictionary.common?.navigation?.contact}
                </a>
              </nav>
              
              {/* Language Switcher */}
              <LanguageSwitcher currentLocale={params.locale} dictionary={dictionary} />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Uniform Experts</h3>
                <p className="text-gray-300 mb-4">
                  {isRTL 
                    ? 'نحن شركة متخصصة في توفير الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية بأعلى معايير الجودة والاحترافية'
                    : 'We are a company specialized in providing uniforms for companies and institutions in Saudi Arabia with the highest standards of quality and professionalism'
                  }
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{dictionary.common?.footer?.quickLinks || 'Quick Links'}</h4>
                <ul className="space-y-2">
                  <li>
                    <a href={params.locale === defaultLocale ? '/' : `/${params.locale}`} className="text-gray-300 hover:text-white transition-colors">
                      {dictionary.common?.navigation?.home}
                    </a>
                  </li>
                  <li>
                    <a href={params.locale === defaultLocale ? '/about' : `/${params.locale}/about`} className="text-gray-300 hover:text-white transition-colors">
                      {dictionary.common?.navigation?.about}
                    </a>
                  </li>
                  <li>
                    <a href={params.locale === defaultLocale ? '/contact' : `/${params.locale}/contact`} className="text-gray-300 hover:text-white transition-colors">
                      {dictionary.common?.navigation?.contact}
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{dictionary.common?.footer?.contactInfo || 'Contact Info'}</h4>
                <div className="space-y-2 text-gray-300">
                  <p>{dictionary.contact?.info?.phone || 'Phone'}: +966 XX XXX XXXX</p>
                  <p>{dictionary.contact?.info?.email || 'Email'}: info@uniformexperts.sa</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Uniform Experts. {dictionary.common?.footer?.rights}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
