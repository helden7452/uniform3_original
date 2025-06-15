import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'التصميم';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'contact',
  generateSafeMetadata({
    title: 'تواصل معنا - التصميم | خبراء الزي الموحد',
    description: 'تواصل مع فريق التصميم للحصول على استشارات متخصصة في تصميم الأزياء الموحدة والحلول الإبداعية',
    keywords: 'تواصل، استشارة، التصميم، الأزياء الموحدة، الحلول الإبداعية',
    openGraph: {
      title: 'تواصل معنا - التصميم | خبراء الزي الموحد',
      description: 'تواصل مع فريق التصميم للحصول على استشارات متخصصة',
      images: ['/images/design-contact.jpg'],
    },
  })
);

export default function ContactDesignPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'التصميم', href: '/التصميم' },
          { label: 'تواصل معنا', href: '/التصميم/contact', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">تواصل مع فريق التصميم</h1>
          <p className="text-xl opacity-90">
            نحن هنا لتحويل أفكارك إلى تصاميم استثنائية
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">استشارة التصميم</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="اسم الشركة أو المؤسسة"
                  />
                </div>

                <div>
                  <label htmlFor="design-type" className="block text-sm font-medium text-gray-700 mb-2">
                    نوع التصميم المطلوب
                  </label>
                  <select
                    id="design-type"
                    name="design-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">اختر نوع التصميم</option>
                    <option value="corporate">تصميم مؤسسي</option>
                    <option value="medical">تصميم طبي</option>
                    <option value="hospitality">تصميم ضيافة</option>
                    <option value="aviation">تصميم طيران</option>
                    <option value="education">تصميم تعليمي</option>
                    <option value="custom">تصميم مخصص</option>
                    <option value="redesign">إعادة تصميم</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="style-preference" className="block text-sm font-medium text-gray-700 mb-2">
                    التفضيل الأسلوبي
                  </label>
                  <select
                    id="style-preference"
                    name="style-preference"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">اختر الأسلوب المفضل</option>
                    <option value="classic">كلاسيكي</option>
                    <option value="modern">عصري</option>
                    <option value="minimalist">بساطة</option>
                    <option value="luxury">فاخر</option>
                    <option value="casual">غير رسمي</option>
                    <option value="mixed">مختلط</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    الميزانية المتوقعة
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">اختر النطاق السعري</option>
                    <option value="basic">أساسي (أقل من 50,000 ريال)</option>
                    <option value="standard">متوسط (50,000 - 150,000 ريال)</option>
                    <option value="premium">متقدم (150,000 - 300,000 ريال)</option>
                    <option value="luxury">فاخر (أكثر من 300,000 ريال)</option>
                    <option value="consultation">استشارة أولاً</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project-details" className="block text-sm font-medium text-gray-700 mb-2">
                    تفاصيل المشروع
                  </label>
                  <textarea
                    id="project-details"
                    name="project-details"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="صف مشروعك بالتفصيل: الأهداف، المتطلبات، التحديات، والرؤية المطلوبة..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all"
                >
                  احجز استشارة التصميم
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-800">فريق التصميم</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-indigo-600">📧</span>
                      <span className="mr-3 text-gray-700">design@a5fi.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-indigo-600">📱</span>
                      <span className="mr-3 text-gray-700">+966 11 XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-indigo-600">⏰</span>
                      <span className="mr-3 text-gray-700">الأحد - الخميس: 8:30 ص - 5:30 م</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500">
                  <h3 className="text-blue-800 font-bold mb-3">خدماتنا التصميمية</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• تصميم الأزياء الموحدة من الصفر</li>
                    <li>• إعادة تصميم وتطوير الأزياء الحالية</li>
                    <li>• استشارات الألوان والخامات</li>
                    <li>• تصميم الإكسسوارات المكملة</li>
                    <li>• حلول التصميم المستدام</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                  <h3 className="text-green-800 font-bold mb-3">عملية التصميم</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                      <span>استشارة أولية مجانية</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                      <span>تطوير المفاهيم والأفكار</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                      <span>عرض التصاميم والمراجعة</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                      <span>التنفيذ والإنتاج</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-indigo-800 font-bold mb-3">عرض خاص</h3>
                  <p className="text-gray-700 mb-4">
                    احصل على استشارة تصميم مجانية لمدة ساعة كاملة مع كبير مصممينا
                  </p>
                  <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all">
                    احجز الاستشارة المجانية
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    شاهد أعمالنا السابقة
                  </p>
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">🎨 معرض الأعمال</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">📱 إنستغرام</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800">💼 لينكد إن</a>
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