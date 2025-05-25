import { Locale, getDictionary } from '@/utils/i18n';
import { Metadata } from 'next';
import Script from 'next/script';

type Props = {
  params: { locale: Locale };
};

// إنشاء ميتاداتا ديناميكية لصفحة الاتصال
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  
  return {
    title: `${dict.contact.title} | خبراء الزي الموحد`,
    description: 'تواصل مع خبراء الزي الموحد في المملكة العربية السعودية. نحن هنا للإجابة على استفساراتك وتقديم عروض الأسعار.',
    alternates: {
      canonical: 'https://a5fi.com/contact',
      languages: {
        'ar-SA': 'https://a5fi.com/contact',
      },
    },
    openGraph: {
      title: `${dict.contact.title} | خبراء الزي الموحد`,
      description: 'تواصل مع خبراء الزي الموحد في المملكة العربية السعودية. نحن هنا للإجابة على استفساراتك وتقديم عروض الأسعار.',
      url: 'https://a5fi.com/contact',
      type: 'website',
    },
  };
}

export default async function ContactPage({
  params: { locale },
}: Props) {
  const dict = await getDictionary(locale);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold text-center mb-8">
            {dict.contact.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Contact Form */}
            <div className="p-6 border rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">{dict.contact.form.name}</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">{dict.contact.form.email}</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded" 
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">{dict.contact.form.phone}</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-2">{dict.contact.form.message}</label>
                  <textarea 
                    className="w-full p-2 border rounded" 
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {dict.contact.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {dict.contact.info.address}
              </h2>
              <p className="mb-4">الرياض، المملكة العربية السعودية</p>
              
              <h2 className="text-2xl font-bold mb-4">
                {dict.contact.info.phone}
              </h2>
              <p className="mb-4">+966 50 000 0000</p>
              
              <h2 className="text-2xl font-bold mb-4">
                {dict.contact.info.email}
              </h2>
              <p className="mb-4">info@a5fi.com</p>
            </div>
          </div>
        </div>
      </main>

      {/* إضافة بيانات منظمة للصفحة لتحسين السيو */}
      <Script id="contact-page-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "${dict.contact.title}",
            "description": "تواصل مع خبراء الزي الموحد في المملكة العربية السعودية",
            "mainEntity": {
              "@type": "Organization",
              "name": "خبراء الزي الموحد",
              "url": "https://a5fi.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-50-000-0000",
                "email": "info@a5fi.com",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الرياض",
                "addressRegion": "الرياض",
                "addressCountry": "المملكة العربية السعودية"
              }
            }
          }
        `}
      </Script>
    </>
  );
} 