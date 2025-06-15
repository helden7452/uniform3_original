import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'الهوية المؤسسية';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'contact',
  generateSafeMetadata({
    title: 'تواصل معنا - الهوية المؤسسية | خبراء الزي الموحد',
    description: 'تواصل مع فريق الهوية المؤسسية للحصول على استشارات متخصصة في بناء وتطوير الهوية المؤسسية والعلامة التجارية',
    keywords: 'تواصل، استشارة، الهوية المؤسسية، العلامة التجارية، الصورة المؤسسية، الهوية البصرية',
    openGraph: {
      title: 'تواصل معنا - الهوية المؤسسية | خبراء الزي الموحد',
      description: 'تواصل مع فريق الهوية المؤسسية للحصول على استشارات متخصصة',
      images: ['/images/corporate-identity-contact.jpg'],
    },
  })
);

export default function ContactCorporateIdentityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'الهوية المؤسسية', href: '/الهوية المؤسسية' },
          { label: 'تواصل معنا', href: '/الهوية المؤسسية/contact', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">تواصل مع فريق الهوية المؤسسية</h1>
          <p className="text-xl opacity-90">
            نحن هنا لبناء هوية مؤسسية قوية تميز علامتك التجارية
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">استشارة الهوية المؤسسية</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="الرئيس التنفيذي، مدير التسويق، إلخ"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="اسم الشركة أو المؤسسة"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    القطاع/الصناعة
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  >
                    <option value="">اختر القطاع</option>
                    <option value="finance">المالي والمصرفي</option>
                    <option value="healthcare">الصحة والطب</option>
                    <option value="education">التعليم</option>
                    <option value="hospitality">الضيافة والفنادق</option>
                    <option value="retail">التجارة والبيع بالتجزئة</option>
                    <option value="technology">التقنية والتكنولوجيا</option>
                    <option value="manufacturing">التصنيع</option>
                    <option value="government">الحكومي</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project-scope" className="block text-sm font-medium text-gray-700 mb-2">
                    نطاق المشروع
                  </label>
                  <select
                    id="project-scope"
                    name="project-scope"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  >
                    <option value="">اختر نطاق المشروع</option>
                    <option value="complete-identity">هوية مؤسسية كاملة</option>
                    <option value="logo-design">تصميم الشعار</option>
                    <option value="uniform-design">تصميم الزي الموحد</option>
                    <option value="brand-refresh">تحديث العلامة التجارية</option>
                    <option value="visual-identity">الهوية البصرية</option>
                    <option value="brand-guidelines">دليل العلامة التجارية</option>
                    <option value="consultation">استشارة استراتيجية</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    الإطار الزمني المطلوب
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  >
                    <option value="">اختر الإطار الزمني</option>
                    <option value="urgent">عاجل (أقل من شهر)</option>
                    <option value="fast">سريع (1-3 أشهر)</option>
                    <option value="standard">عادي (3-6 أشهر)</option>
                    <option value="flexible">مرن (أكثر من 6 أشهر)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="current-situation" className="block text-sm font-medium text-gray-700 mb-2">
                    الوضع الحالي للهوية
                  </label>
                  <textarea
                    id="current-situation"
                    name="current-situation"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="صف الوضع الحالي لهوية مؤسستك والتحديات التي تواجهها..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                    الأهداف والرؤية
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="ما هي أهدافك من تطوير الهوية المؤسسية؟ ما الرسالة التي تريد إيصالها؟"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-700 to-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:from-slate-800 hover:to-gray-900 transition-all"
                >
                  احجز استشارة الهوية المؤسسية
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-semibold mb-3 text-slate-800">فريق الهوية المؤسسية</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-slate-600">📧</span>
                      <span className="mr-3 text-gray-700">identity@a5fi.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-slate-600">📱</span>
                      <span className="mr-3 text-gray-700">+966 11 XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-slate-600">⏰</span>
                      <span className="mr-3 text-gray-700">الأحد - الخميس: 9:00 ص - 6:00 م</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-500">
                  <h3 className="text-blue-800 font-bold mb-3">خدماتنا الشاملة</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• تطوير الهوية البصرية الكاملة</li>
                    <li>• تصميم الشعار والرموز المؤسسية</li>
                    <li>• تصميم الأزياء الموحدة</li>
                    <li>• إنشاء دليل العلامة التجارية</li>
                    <li>• المواد التسويقية والإعلانية</li>
                    <li>• الاستشارات الاستراتيجية</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                  <h3 className="text-green-800 font-bold mb-3">عملية التطوير</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                      <span>البحث والتحليل الاستراتيجي</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                      <span>تطوير المفاهيم الإبداعية</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                      <span>التصميم والتطوير</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                      <span>التطبيق والتنفيذ</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-r-4 border-purple-500">
                  <h3 className="text-purple-800 font-bold mb-3">خبراؤنا المتخصصون</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• مصممون استراتيجيون</li>
                    <li>• خبراء علم النفس التسويقي</li>
                    <li>• مستشارون في العلامات التجارية</li>
                    <li>• متخصصون في الهوية البصرية</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-slate-100 to-gray-100 p-6 rounded-lg">
                  <h3 className="text-slate-800 font-bold mb-3">تحليل مجاني للهوية</h3>
                  <p className="text-gray-700 mb-4">
                    احصل على تحليل مجاني شامل لهويتك المؤسسية الحالية مع توصيات التحسين
                  </p>
                  <button className="bg-gradient-to-r from-slate-700 to-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:from-slate-800 hover:to-gray-900 transition-all">
                    احجز التحليل المجاني
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    شاهد معرض أعمالنا
                  </p>
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    <a href="#" className="text-slate-600 hover:text-slate-800">🎨 معرض الأعمال</a>
                    <a href="#" className="text-slate-600 hover:text-slate-800">📱 إنستغرام</a>
                    <a href="#" className="text-slate-600 hover:text-slate-800">💼 لينكد إن</a>
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