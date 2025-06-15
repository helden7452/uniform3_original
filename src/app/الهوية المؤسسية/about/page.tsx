import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'الهوية المؤسسية';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'about',
  generateSafeMetadata({
    title: 'عن الهوية المؤسسية | خبراء الزي الموحد',
    description: 'تعرف على خبرتنا في بناء وتعزيز الهوية المؤسسية من خلال تصميم الأزياء الموحدة التي تعكس قيم وثقافة المؤسسة',
    keywords: 'الهوية المؤسسية، العلامة التجارية، الصورة المؤسسية، الأزياء الموحدة، الهوية البصرية',
    openGraph: {
      title: 'عن الهوية المؤسسية | خبراء الزي الموحد',
      description: 'تعرف على خبرتنا في بناء وتعزيز الهوية المؤسسية',
      images: ['/images/corporate-identity.jpg'],
    },
  })
);

export default function AboutCorporateIdentityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'الهوية المؤسسية', href: '/الهوية المؤسسية' },
          { label: 'عن القسم', href: '/الهوية المؤسسية/about', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">الهوية المؤسسية</h1>
          <p className="text-xl opacity-90">
            نبني هويات مؤسسية قوية تترك انطباعاً لا يُنسى
          </p>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none rtl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">فلسفة الهوية المؤسسية</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نؤمن في خبراء الزي الموحد بأن الهوية المؤسسية ليست مجرد شعار أو ألوان، بل منظومة متكاملة تعكس روح المؤسسة 
              وقيمها وطموحاتها. الزي الموحد هو السفير الصامت للمؤسسة، يحمل رسالتها ويعبر عن شخصيتها في كل مكان. 
              نحن نصمم هويات بصرية قوية تترك انطباعاً إيجابياً دائماً وتعزز الثقة في العلامة التجارية.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">عناصر الهوية المؤسسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-lg border border-slate-200">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">الهوية البصرية</h3>
                <p className="text-gray-600">
                  نطور نظاماً بصرياً متكاملاً يشمل الألوان، الخطوط، والأنماط التي تعكس شخصية المؤسسة وتميزها عن المنافسين.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">القيم المؤسسية</h3>
                <p className="text-gray-600">
                  نترجم قيم المؤسسة ومبادئها إلى عناصر تصميمية ملموسة تظهر في كل تفصيلة من تفاصيل الزي الموحد.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">التميز والتفرد</h3>
                <p className="text-gray-600">
                  نضمن أن تكون هوية مؤسستك فريدة ومميزة، تبرز في السوق وتترك انطباعاً قوياً لدى العملاء والشركاء.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <div className="text-3xl mb-3">🔗</div>
                <h3 className="text-xl font-semibold mb-3 text-purple-800">التماسك والوحدة</h3>
                <p className="text-gray-600">
                  نحقق التماسك البصري عبر جميع نقاط التلاقي مع العملاء، من الزي الموحد إلى المواد التسويقية.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">منهجيتنا في بناء الهوية</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-slate-100 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">البحث والاستكشاف</h3>
                  <p className="text-gray-600">
                    نبدأ بدراسة عميقة للمؤسسة، تاريخها، قيمها، رؤيتها، والجمهور المستهدف لفهم الشخصية الحقيقية للعلامة التجارية.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-slate-100 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">تحليل السوق والمنافسين</h3>
                  <p className="text-gray-600">
                    ندرس السوق والمنافسين لنضمن أن الهوية التي نطورها تميز المؤسسة وتضعها في موقع قوي ومتفرد.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-slate-100 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">تطوير المفهوم الإبداعي</h3>
                  <p className="text-gray-600">
                    نطور مفاهيم إبداعية متعددة تعكس شخصية المؤسسة، ونختبرها مع الجمهور المستهدف لضمان الفعالية.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-slate-100 text-slate-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">التطبيق والتنفيذ</h3>
                  <p className="text-gray-600">
                    نطبق الهوية المطورة على جميع عناصر الزي الموحد والمواد المؤسسية مع ضمان الاتساق والجودة العالية.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">خدماتنا المتخصصة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-slate-600">تطوير الهوية البصرية</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تصميم الشعار والرموز المؤسسية</li>
                  <li>• تطوير لوحة الألوان المؤسسية</li>
                  <li>• اختيار الخطوط والأنماط</li>
                  <li>• إنشاء دليل الهوية البصرية</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">تصميم الزي المؤسسي</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• أزياء الإدارة العليا</li>
                  <li>• أزياء الموظفين والعاملين</li>
                  <li>• أزياء خدمة العملاء</li>
                  <li>• الإكسسوارات المكملة</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-600">المواد التسويقية</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تصميم البطاقات والمطبوعات</li>
                  <li>• اللافتات والإعلانات</li>
                  <li>• المواد الرقمية والإلكترونية</li>
                  <li>• تصميم المعارض والفعاليات</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">الاستشارات الاستراتيجية</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تحليل الهوية الحالية</li>
                  <li>• استراتيجية العلامة التجارية</li>
                  <li>• خطط التطوير والتحسين</li>
                  <li>• قياس الأثر والفعالية</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">قصص نجاح</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg border-l-4 border-slate-500">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">مجموعة الخليج للاستثمار</h3>
                <p className="text-gray-600 mb-3">
                  طورنا هوية مؤسسية شاملة لمجموعة استثمارية كبرى، شملت إعادة تصميم الزي الموحد لجميع المستويات الإدارية. 
                  النتيجة كانت زيادة في الثقة بالعلامة التجارية بنسبة 60% وتحسن في الصورة المؤسسية.
                </p>
                <div className="flex items-center text-sm text-slate-600">
                  <span className="mr-2">✅</span>
                  <span>زيادة الثقة • تحسن الصورة • تعزيز الانتماء</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">شبكة مستشفيات الرعاية</h3>
                <p className="text-gray-600 mb-3">
                  أنشأنا هوية بصرية موحدة لشبكة مستشفيات تضم 15 فرعاً، مع تصميم أزياء طبية تعكس الاحترافية والثقة. 
                  حققت الهوية الجديدة تميزاً واضحاً في السوق وزيادة في رضا المرضى.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="mr-2">✅</span>
                  <span>تميز في السوق • رضا المرضى • وحدة الهوية</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">التزامنا بالتميز</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نلتزم بتقديم هويات مؤسسية استثنائية تصمد أمام اختبار الزمن وتنمو مع نمو المؤسسة. نستخدم أحدث الأدوات 
              والتقنيات في التصميم والبحث، ونعمل مع فريق من الخبراء المتخصصين في علم النفس التسويقي والتصميم الاستراتيجي.
            </p>

            <div className="bg-gradient-to-r from-slate-100 to-gray-100 p-6 rounded-lg border-r-4 border-slate-500">
              <h3 className="text-slate-800 font-bold mb-3">رسالتنا</h3>
              <p className="text-gray-700 italic text-lg">
                "نبني هويات لا تُنسى... نصنع انطباعات تدوم"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 