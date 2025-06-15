import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'التراث والتصميم';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'contact',
  generateSafeMetadata({
    title: 'تواصل معنا - التراث والتصميم | خبراء الزي الموحد',
    description: 'تواصل مع فريق التراث والتصميم للحصول على استشارات متخصصة في دمج التراث السعودي مع التصميم العصري',
    keywords: 'تواصل، استشارة، التراث السعودي، التصميم، الزي الموحد',
    openGraph: {
      title: 'تواصل معنا - التراث والتصميم | خبراء الزي الموحد',
      description: 'تواصل مع فريق التراث والتصميم للحصول على استشارات متخصصة',
      images: ['/images/heritage-contact.jpg'],
    },
  })
);

export default function ContactHeritagePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'التراث والتصميم', href: '/التراث والتصميم' },
          { label: 'تواصل معنا', href: '/التراث والتصميم/contact', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-primary to-accent text-white p-8">
          <h1 className="text-4xl font-bold mb-4">تواصل مع فريق التراث والتصميم</h1>
          <p className="text-xl opacity-90">
            نحن هنا لمساعدتك في دمج التراث السعودي مع التصميم العصري
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
                    نوع المشروع
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">اختر نوع المشروع</option>
                    <option value="heritage-corporate">أزياء مؤسسية بطابع تراثي</option>
                    <option value="cultural-events">أزياء للمناسبات الثقافية</option>
                    <option value="national-occasions">أزياء للمناسبات الوطنية</option>
                    <option value="consultation">استشارة تصميم</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    تفاصيل المشروع
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="أخبرنا عن مشروعك وكيف يمكننا مساعدتك في دمج التراث مع التصميم العصري..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-primary">فريق التراث والتصميم</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-gray-600">📧</span>
                      <span className="mr-3 text-gray-700">heritage@a5fi.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">📱</span>
                      <span className="mr-3 text-gray-700">+966 11 XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">⏰</span>
                      <span className="mr-3 text-gray-700">الأحد - الخميس: 8:00 ص - 5:00 م</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg border-r-4 border-primary">
                  <h3 className="text-primary font-bold mb-3">خدماتنا المتخصصة</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• تصميم أزياء مستوحاة من التراث السعودي</li>
                    <li>• استشارات الهوية الثقافية في التصميم</li>
                    <li>• حلول للمناسبات الوطنية والثقافية</li>
                    <li>• ورش تدريبية متخصصة</li>
                  </ul>
                </div>

                <div className="bg-accent-50 p-6 rounded-lg border-r-4 border-accent">
                  <h3 className="text-accent font-bold mb-3">لماذا تختارنا؟</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• خبرة 25+ سنة في التصميم</li>
                    <li>• فريق متخصص في التراث السعودي</li>
                    <li>• تصاميم حصرية ومبتكرة</li>
                    <li>• جودة عالية ومواد فاخرة</li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    هل تحتاج لاستشارة فورية؟
                  </p>
                  <a
                    href="https://wa.me/966XXXXXXXXX"
                    className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    <span className="ml-2">💬</span>
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 