import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'أزياء الطيران';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'contact',
  generateSafeMetadata({
    title: 'تواصل معنا - أزياء الطيران | خبراء الزي الموحد',
    description: 'تواصل مع فريق أزياء الطيران للحصول على استشارات متخصصة في تصميم أزياء الخطوط الجوية وطاقم الطيران',
    keywords: 'تواصل، استشارة، أزياء الطيران، الخطوط الجوية، طاقم الطيران، مضيفات الطيران',
    openGraph: {
      title: 'تواصل معنا - أزياء الطيران | خبراء الزي الموحد',
      description: 'تواصل مع فريق أزياء الطيران للحصول على استشارات متخصصة',
      images: ['/images/aviation-contact.jpg'],
    },
  })
);

export default function ContactAviationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'أزياء الطيران', href: '/أزياء الطيران' },
          { label: 'تواصل معنا', href: '/أزياء الطيران/contact', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">تواصل مع فريق أزياء الطيران</h1>
          <p className="text-xl opacity-90">
            نحن هنا لنحلق بعلامتك التجارية إلى آفاق جديدة من الأناقة
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">استشارة أزياء الطيران</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    المنصب/الوظيفة
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="مدير العمليات، مدير الموارد البشرية، إلخ"
                  />
                </div>

                <div>
                  <label htmlFor="airline" className="block text-sm font-medium text-gray-700 mb-2">
                    اسم الخطوط الجوية/الشركة
                  </label>
                  <input
                    type="text"
                    id="airline"
                    name="airline"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="اسم الخطوط الجوية أو شركة الطيران"
                  />
                </div>

                <div>
                  <label htmlFor="fleet-size" className="block text-sm font-medium text-gray-700 mb-2">
                    حجم الأسطول/الطاقم
                  </label>
                  <select
                    id="fleet-size"
                    name="fleet-size"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">اختر حجم الأسطول</option>
                    <option value="small">صغير (أقل من 10 طائرات)</option>
                    <option value="medium">متوسط (10-50 طائرة)</option>
                    <option value="large">كبير (50-100 طائرة)</option>
                    <option value="major">كبرى (أكثر من 100 طائرة)</option>
                    <option value="startup">شركة ناشئة</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="uniform-type" className="block text-sm font-medium text-gray-700 mb-2">
                    نوع الزي المطلوب
                  </label>
                  <select
                    id="uniform-type"
                    name="uniform-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">اختر نوع الزي</option>
                    <option value="pilots">أزياء الطيارين</option>
                    <option value="cabin-crew">أزياء طاقم الضيافة</option>
                    <option value="ground-staff">أزياء الطاقم الأرضي</option>
                    <option value="maintenance">أزياء طاقم الصيانة</option>
                    <option value="complete-set">مجموعة كاملة</option>
                    <option value="redesign">إعادة تصميم</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="routes" className="block text-sm font-medium text-gray-700 mb-2">
                    نوع الرحلات
                  </label>
                  <select
                    id="routes"
                    name="routes"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">اختر نوع الرحلات</option>
                    <option value="domestic">رحلات داخلية</option>
                    <option value="regional">رحلات إقليمية</option>
                    <option value="international">رحلات دولية</option>
                    <option value="long-haul">رحلات طويلة المدى</option>
                    <option value="charter">رحلات مستأجرة</option>
                    <option value="cargo">شحن جوي</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    الإطار الزمني المطلوب
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">اختر الإطار الزمني</option>
                    <option value="urgent">عاجل (أقل من 3 أشهر)</option>
                    <option value="standard">عادي (3-6 أشهر)</option>
                    <option value="planned">مخطط (6-12 شهر)</option>
                    <option value="future">مستقبلي (أكثر من سنة)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                    المتطلبات الخاصة
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="صف متطلباتك الخاصة: معايير السلامة، الهوية المؤسسية، التحديات الحالية، إلخ..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-sky-700 hover:to-blue-800 transition-all"
                >
                  احجز استشارة أزياء الطيران
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-lg border border-sky-200">
                  <h3 className="text-lg font-semibold mb-3 text-sky-800">فريق أزياء الطيران</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-sky-600">📧</span>
                      <span className="mr-3 text-gray-700">aviation@a5fi.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sky-600">📱</span>
                      <span className="mr-3 text-gray-700">+966 11 XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sky-600">⏰</span>
                      <span className="mr-3 text-gray-700">الأحد - الخميس: 8:00 ص - 6:00 م</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500">
                  <h3 className="text-blue-800 font-bold mb-3">خدماتنا المتخصصة</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• تصميم أزياء طاقم الطيران</li>
                    <li>• أزياء طاقم الضيافة والمضيفين</li>
                    <li>• ملابس عمل طاقم الصيانة</li>
                    <li>• أزياء الطاقم الأرضي</li>
                    <li>• الإكسسوارات والشارات</li>
                    <li>• استشارات السلامة والمعايير</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                  <h3 className="text-green-800 font-bold mb-3">معايير الطيران</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• مواد مقاومة للحريق معتمدة</li>
                    <li>• تصاميم تراعي السلامة</li>
                    <li>• راحة لساعات الطيران الطويلة</li>
                    <li>• مقاومة التجاعيد والبقع</li>
                    <li>• سهولة الحركة والوظيفية</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-r-4 border-purple-500">
                  <h3 className="text-purple-800 font-bold mb-3">خبراؤنا</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• مصممون متخصصون في الطيران</li>
                    <li>• خبراء معايير السلامة الجوية</li>
                    <li>• مستشارون في الهوية المؤسسية</li>
                    <li>• فريق ضمان الجودة</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-sky-100 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-sky-800 font-bold mb-3">استشارة مجانية</h3>
                  <p className="text-gray-700 mb-4">
                    احصل على استشارة مجانية شاملة لتطوير أزياء طاقم الطيران مع خبرائنا المتخصصين
                  </p>
                  <button className="bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-sky-700 hover:to-blue-800 transition-all">
                    احجز الاستشارة المجانية
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    تابع أحدث تصاميمنا
                  </p>
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    <a href="#" className="text-sky-600 hover:text-sky-800">✈️ معرض الطيران</a>
                    <a href="#" className="text-sky-600 hover:text-sky-800">📱 إنستغرام</a>
                    <a href="#" className="text-sky-600 hover:text-sky-800">💼 لينكد إن</a>
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