import { Locale, getDictionary, locales } from '@/utils/i18n';
import { Metadata } from 'next';
import Script from 'next/script';

type Props = {
  params: { locale: Locale };
};

// Generate static params for all supported locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// إنشاء ميتاداتا ديناميكية لصفحة من نحن
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  
  return {
    title: `${dict.about.title} | خبراء الزي الموحد`,
    description: dict.about.description,
    alternates: {
      canonical: 'https://a5fi.com/about',
      languages: {
        'ar-SA': 'https://a5fi.com/about',
      },
    },
    openGraph: {
      title: `${dict.about.title} | خبراء الزي الموحد`,
      description: dict.about.description,
      url: 'https://a5fi.com/about',
      type: 'website',
    },
  };
}

export default async function AboutPage({
  params: { locale },
}: Props) {
  const dict = await getDictionary(locale);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold text-center mb-8">
            {dict.about.title}
          </h1>
          <p className="text-lg text-center mb-12">
            {dict.about.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {dict.about.mission.title}
              </h2>
              <p>{dict.about.mission.description}</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {dict.about.vision.title}
              </h2>
              <p>{dict.about.vision.description}</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* إضافة بيانات منظمة للصفحة لتحسين السيو */}
      <Script id="about-page-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainContentOfPage": {
              "@type": "WebPageElement",
              "isPartOf": {
                "@id": "https://a5fi.com"
              },
              "headline": "${dict.about.title}",
              "description": "${dict.about.description}",
              "text": "${dict.about.description} ${dict.about.mission.description} ${dict.about.vision.description}"
            },
            "about": {
              "@type": "Organization",
              "name": "خبراء الزي الموحد",
              "url": "https://a5fi.com",
              "logo": "https://a5fi.com/images/logo.png"
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