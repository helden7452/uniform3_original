import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'الاتجاهات';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'contact',
  generateSafeMetadata({
    title: 'تواصل معنا - الاتجاهات | خبراء الزي الموحد',
    description: 'تواصل مع فريق الاتجاهات للحصول على استشارات متخصصة في أحدث اتجاهات الموضة والأزياء الموحدة',
    keywords: 'تواصل، استشارة، اتجاهات الموضة، الأزياء الموحدة، التصميم المعاصر',
    openGraph: {
      title: 'تواصل معنا - الاتجاهات | خبراء الزي الموحد',
      description: 'تواصل مع فريق الاتجاهات للحصول على استشارات متخصصة',
      images: ['/images/trends-contact.jpg'],
    },
  })
);

export default function ContactTrendsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'الاتجاهات', href: '/الاتجاهات' },
          { label: 'تواصل معنا', href: '/الاتجاهات/contact', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">تواصل مع فريق الاتجاهات</h1>
          <p className="text-xl opacity-90">
            نحن هنا لمساعدتك في مواكبة أحدث اتجاهات الموضة المهنية
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">استشارة الاتجاهات</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    اسم الشركة/المؤسسة
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="اسم الشركة أو المؤسسة"
                  />
                </div>

                <div>
                  <label htmlFor="trend-interest" className="block text-sm font-medium text-gray-700 mb-2">
                    الاتجاه المهتم به
                  </label>
                  <select
                    id="trend-interest"
                    name="trend-interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">اختر الاتجاه</option>
                    <option value="sustainability">الاستدامة والبيئة</option>
                    <option value="smart-tech">التقنيات الذكية</option>
                    <option value="flexibility">المرونة والراحة</option>
                    <option value="customization">التخصيص الشخصي</option>
                    <option value="colors-patterns">الألوان والأنماط</option>
                    <option value="future-trends">اتجاهات المستقبل</option>
                    <option value="consultation">استشارة شاملة</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="current-uniform" className="block text-sm font-medium text-gray-700 mb-2">
                    وصف الزي الحالي
                  </label>
                  <textarea
                    id="current-uniform"
                    name="current-uniform"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="صف الزي الموحد الحالي لشركتك (إن وجد)..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                    أهدافك من التطوير
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="ما هي أهدافك من تطوير أو تحديث الزي الموحد؟ ما الاتجاهات التي تريد تطبيقها؟"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  احجز استشارة الاتجاهات
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-purple-800">فريق الاتجاهات</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-purple-600">📧</span>
                      <span className="mr-3 text-gray-700">trends@a5fi.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600">📱</span>
                      <span className="mr-3 text-gray-700">+966 11 XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-600">⏰</span>
                      <span className="mr-3 text-gray-700">الأحد - الخميس: 9:00 ص - 6:00 م</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500">
                  <h3 className="text-blue-800 font-bold mb-3">خدماتنا المتخصصة</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• تحليل الاتجاهات العالمية والمحلية</li>
                    <li>• استشارات التطوير والتحديث</li>
                    <li>• تقارير دورية عن الاتجاهات</li>
                    <li>• ورش عمل متخصصة</li>
                    <li>• حلول مبتكرة للتحديات المعاصرة</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                  <h3 className="text-green-800 font-bold mb-3">مميزاتنا</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• متابعة مستمرة للاتجاهات العالمية</li>
                    <li>• فريق متخصص في أبحاث الموضة</li>
                    <li>• شراكات مع بيوت الأزياء العالمية</li>
                    <li>• تطبيق عملي للاتجاهات النظرية</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-purple-800 font-bold mb-3">استشارة مجانية</h3>
                  <p className="text-gray-700 mb-4">
                    احصل على استشارة مجانية لمدة 30 دقيقة حول أحدث الاتجاهات المناسبة لمؤسستك
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
                    احجز الآن
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    تابعنا للحصول على آخر الاتجاهات
                  </p>
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    <a href="#" className="text-purple-600 hover:text-purple-800">📱 تويتر</a>
                    <a href="#" className="text-purple-600 hover:text-purple-800">📷 إنستغرام</a>
                    <a href="#" className="text-purple-600 hover:text-purple-800">💼 لينكد إن</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 