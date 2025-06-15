import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'المساواة والمهنية';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'contact',
  generateSafeMetadata({
    title: 'تواصل معنا - المساواة والمهنية | خبراء الزي الموحد',
    description: 'تواصل مع فريق المساواة والمهنية للحصول على استشارات متخصصة في تعزيز بيئة العمل الشاملة والمتكافئة',
    keywords: 'تواصل، استشارة، المساواة، المهنية، بيئة العمل، الشمولية، تكافؤ الفرص',
    openGraph: {
      title: 'تواصل معنا - المساواة والمهنية | خبراء الزي الموحد',
      description: 'تواصل مع فريق المساواة والمهنية للحصول على استشارات متخصصة',
      images: ['/images/equality-contact.jpg'],
    },
  })
);

export default function ContactEqualityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المساواة والمهنية', href: '/المساواة والمهنية' },
          { label: 'تواصل معنا', href: '/المساواة والمهنية/contact', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">تواصل مع فريق المساواة والمهنية</h1>
          <p className="text-xl opacity-90">
            نحن هنا لمساعدتك في بناء بيئة عمل أكثر عدالة وشمولية
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">استشارة المساواة والمهنية</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="مدير الموارد البشرية، مدير عام، إلخ"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="اسم الشركة أو المؤسسة"
                  />
                </div>

                <div>
                  <label htmlFor="company-size" className="block text-sm font-medium text-gray-700 mb-2">
                    حجم الشركة
                  </label>
                  <select
                    id="company-size"
                    name="company-size"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">اختر حجم الشركة</option>
                    <option value="small">صغيرة (أقل من 50 موظف)</option>
                    <option value="medium">متوسطة (50-200 موظف)</option>
                    <option value="large">كبيرة (200-1000 موظف)</option>
                    <option value="enterprise">مؤسسة كبرى (أكثر من 1000 موظف)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="consultation-type" className="block text-sm font-medium text-gray-700 mb-2">
                    نوع الاستشارة المطلوبة
                  </label>
                  <select
                    id="consultation-type"
                    name="consultation-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">اختر نوع الاستشارة</option>
                    <option value="equality-assessment">تقييم المساواة في بيئة العمل</option>
                    <option value="inclusive-design">تصميم شامل للأزياء الموحدة</option>
                    <option value="diversity-program">برنامج التنوع والشمولية</option>
                    <option value="professional-standards">معايير المهنية</option>
                    <option value="policy-development">تطوير السياسات</option>
                    <option value="training-workshop">ورش تدريبية</option>
                    <option value="comprehensive">استشارة شاملة</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="current-challenges" className="block text-sm font-medium text-gray-700 mb-2">
                    التحديات الحالية
                  </label>
                  <textarea
                    id="current-challenges"
                    name="current-challenges"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="صف التحديات التي تواجهها في مجال المساواة والمهنية في بيئة العمل..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                    الأهداف المرجوة
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="ما هي أهدافك من تحسين المساواة والمهنية في مؤسستك؟"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all"
                >
                  احجز استشارة المساواة والمهنية
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="text-lg font-semibold mb-3 text-emerald-800">فريق المساواة والمهنية</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-emerald-600">📧</span>
                      <span className="mr-3 text-gray-700">equality@a5fi.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-emerald-600">📱</span>
                      <span className="mr-3 text-gray-700">+966 11 XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-emerald-600">⏰</span>
                      <span className="mr-3 text-gray-700">الأحد - الخميس: 8:00 ص - 5:00 م</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500">
                  <h3 className="text-blue-800 font-bold mb-3">خدماتنا المتخصصة</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• تقييم وتحليل بيئة العمل الحالية</li>
                    <li>• تطوير سياسات المساواة والشمولية</li>
                    <li>• تصميم أزياء موحدة شاملة</li>
                    <li>• برامج التدريب والتوعية</li>
                    <li>• استشارات المعايير المهنية</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                  <h3 className="text-green-800 font-bold mb-3">منهجيتنا</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                      <span>تقييم الوضع الحالي</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                      <span>تحديد الفجوات والتحديات</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                      <span>وضع خطة التحسين</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                      <span>التنفيذ والمتابعة</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-r-4 border-purple-500">
                  <h3 className="text-purple-800 font-bold mb-3">مبادراتنا الخاصة</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• برنامج التصميم الشامل</li>
                    <li>• مبادرة المرأة في العمل</li>
                    <li>• برنامج دعم ذوي الإعاقة</li>
                    <li>• مبادرة التنوع الثقافي</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-lg">
                  <h3 className="text-emerald-800 font-bold mb-3">تقييم مجاني</h3>
                  <p className="text-gray-700 mb-4">
                    احصل على تقييم مجاني لمستوى المساواة والمهنية في مؤسستك
                  </p>
                  <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all">
                    احجز التقييم المجاني
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    انضم إلى مجتمعنا المهني
                  </p>
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    <a href="#" className="text-emerald-600 hover:text-emerald-800">🌐 الموقع الإلكتروني</a>
                    <a href="#" className="text-emerald-600 hover:text-emerald-800">💼 لينكد إن</a>
                    <a href="#" className="text-emerald-600 hover:text-emerald-800">📱 تويتر</a>
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