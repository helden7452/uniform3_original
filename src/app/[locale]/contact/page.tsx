import { Locale, getDictionary } from '@/utils/i18n';

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);

  return (
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
  );
} 