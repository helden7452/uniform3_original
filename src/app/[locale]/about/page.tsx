import { Locale, getDictionary } from '@/utils/i18n';

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);

  return (
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
  );
} 