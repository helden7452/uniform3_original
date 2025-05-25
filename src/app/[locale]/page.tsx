import { Locale, getDictionary } from '@/utils/i18n';
import Link from 'next/link';

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);

  return (
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
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {dict.home.hero.cta}
          </Link>
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
  );
} 