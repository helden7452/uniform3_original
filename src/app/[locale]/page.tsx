import { Locale, getDictionary, locales } from '@/utils/i18n';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { locale: Locale };
};

// Generate static params for all supported locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// إنشاء ميتاداتا ديناميكية للصفحة الرئيسية
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  
  return {
    title: dict.home.hero.title,
    description: dict.home.hero.subtitle,
    alternates: {
      canonical: 'https://a5fi.com',
      languages: {
        'ar-SA': 'https://a5fi.com',
      },
    },
    openGraph: {
      title: dict.home.hero.title,
      description: dict.home.hero.subtitle,
      url: 'https://a5fi.com',
      type: 'website',
    },
  };
}

export default async function Home({
  params: { locale },
}: Props) {
  const dict = await getDictionary(locale);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold text-center mb-8">
            {dict.home.hero.title}
          </h1>
          <p className="text-xl text-center mb-8">
            {dict.home.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <Link 
              href={`/${locale}/contact`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {dict.home.hero.cta}
            </Link>
          </div>

          {/* إضافة صورة بديلة للصورة الحالية لتحسين سرعة التحميل */}
          <div className="my-12 text-center">
            <div className="relative h-64 w-full max-w-3xl mx-auto">
              <Image
                src="/images/uniform-showcase.jpg"
                alt="خبراء الزي الموحد - عرض المنتجات"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              {dict.home.features.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-xl mb-2">
                  {dict.home.features.quality.title}
                </h3>
                <p>{dict.home.features.quality.description}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-xl mb-2">
                  {dict.home.features.customization.title}
                </h3>
                <p>{dict.home.features.customization.description}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-xl mb-2">
                  {dict.home.features.delivery.title}
                </h3>
                <p>{dict.home.features.delivery.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* إضافة بيانات منظمة للصفحة لتحسين السيو */}
      <Script id="homepage-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${dict.home.hero.title}",
            "description": "${dict.home.hero.subtitle}",
            "url": "https://a5fi.com",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "خبراء الزي الموحد",
              "image": "https://a5fi.com/images/uniform-showcase.jpg",
              "telephone": "+966-50-000-0000",
              "email": "info@a5fi.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الرياض",
                "addressRegion": "الرياض",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "24.7136",
                "longitude": "46.6753"
              },
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://facebook.com/a5fi",
                "https://twitter.com/a5fi",
                "https://instagram.com/a5fi"
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", "p"]
            }
          }
        `}
      </Script>
    </>
  );
} 