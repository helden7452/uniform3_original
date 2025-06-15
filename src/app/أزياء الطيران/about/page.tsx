import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'أزياء الطيران';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'about',
  generateSafeMetadata({
    title: 'عن أزياء الطيران | خبراء الزي الموحد',
    description: 'تعرف على خبرتنا المتخصصة في تصميم أزياء الطيران والخطوط الجوية التي تجمع بين الأناقة والوظيفية والسلامة',
    keywords: 'أزياء الطيران، الخطوط الجوية، زي الطيران، طاقم الطيران، مضيفات الطيران، الطيارين',
    openGraph: {
      title: 'عن أزياء الطيران | خبراء الزي الموحد',
      description: 'تعرف على خبرتنا المتخصصة في تصميم أزياء الطيران والخطوط الجوية',
      images: ['/images/aviation-fashion.jpg'],
    },
  })
);

export default function AboutAviationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'أزياء الطيران', href: '/أزياء الطيران' },
          { label: 'عن القسم', href: '/أزياء الطيران/about', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">أزياء الطيران</h1>
          <p className="text-xl opacity-90">
            نحلق بالأناقة في عالم الطيران المدني والتجاري
          </p>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none rtl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">خبرتنا في عالم الطيران</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              منذ أكثر من عقدين، نحن رواد في تصميم أزياء الطيران في المنطقة. نفهم التحديات الفريدة لصناعة الطيران 
              ونقدر أهمية الجمع بين الأناقة والوظيفية والسلامة في تصميم واحد متكامل. أزياؤنا لا تعكس فقط الهوية المؤسسية 
              للخطوط الجوية، بل تعزز أيضاً الثقة والاحترافية التي يتوقعها المسافرون من طاقم الطيران.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">تخصصاتنا في الطيران</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-lg border border-sky-200">
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="text-xl font-semibold mb-3 text-sky-800">طاقم الطيران</h3>
                <p className="text-gray-600">
                  تصاميم متخصصة للطيارين ومساعدي الطيارين تراعي متطلبات السلامة والراحة أثناء الطيران الطويل.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                <div className="text-3xl mb-3">👩‍✈️</div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-800">طاقم الضيافة</h3>
                <p className="text-gray-600">
                  أزياء أنيقة ومريحة لمضيفي ومضيفات الطيران تعكس ضيافة الخطوط الجوية وتسهل الحركة في الطائرة.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                <div className="text-3xl mb-3">🛠️</div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-800">طاقم الصيانة</h3>
                <p className="text-gray-600">
                  ملابس عمل متخصصة لفرق الصيانة والدعم الفني تضمن السلامة والحماية في بيئة العمل التقنية.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-xl font-semibold mb-3 text-orange-800">الطاقم الأرضي</h3>
                <p className="text-gray-600">
                  تصاميم للعاملين في المطارات وخدمة العملاء تعكس الاحترافية وتسهل التعرف على موظفي الخطوط الجوية.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">معايير التصميم في الطيران</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-sky-600">السلامة أولاً</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• استخدام مواد مقاومة للحريق ومعتمدة من هيئات الطيران</li>
                  <li>• تصاميم تسمح بالحركة السريعة في حالات الطوارئ</li>
                  <li>• ألوان وعلامات تعزز الرؤية والتعرف السريع</li>
                  <li>• جيوب ومساحات مخصصة لمعدات السلامة</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-indigo-600">الراحة والوظيفية</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• أقمشة تسمح بالتهوية وتقاوم التجاعيد</li>
                  <li>• قصات تسمح بالحركة المريحة لساعات طويلة</li>
                  <li>• تصاميم تناسب مختلف أشكال الجسم</li>
                  <li>• سهولة الارتداء والخلع</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-emerald-600">الهوية والأناقة</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تصاميم تعكس هوية وثقافة الخطوط الجوية</li>
                  <li>• ألوان وأنماط تميز العلامة التجارية</li>
                  <li>• لمسات أنيقة تعكس مستوى الخدمة المقدمة</li>
                  <li>• تفاصيل تراثية أو ثقافية حسب الطلب</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">عملية التصميم المتخصصة</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-sky-100 text-sky-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">دراسة متطلبات الطيران</h3>
                  <p className="text-gray-600">
                    نبدأ بدراسة شاملة لمتطلبات السلامة والتشغيل الخاصة بكل نوع من أنواع الطائرات والرحلات.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-sky-100 text-sky-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">تحليل الهوية المؤسسية</h3>
                  <p className="text-gray-600">
                    ندرس هوية الخطوط الجوية وقيمها لنضمن أن التصميم يعكس شخصيتها ويعزز علامتها التجارية.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-sky-100 text-sky-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">التطوير والاختبار</h3>
                  <p className="text-gray-600">
                    نطور النماذج الأولية ونختبرها مع طاقم الطيران الفعلي لضمان الراحة والوظيفية.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-sky-100 text-sky-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">الإنتاج والتسليم</h3>
                  <p className="text-gray-600">
                    ننتج الأزياء وفقاً لأعلى معايير الجودة مع ضمان التسليم في المواعيد المحددة.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">شراكاتنا المميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-lg border-l-4 border-sky-500">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">الخطوط الجوية الوطنية</h3>
                <p className="text-gray-600 mb-3">
                  شراكة استراتيجية مع الناقل الوطني لتطوير هوية بصرية متكاملة تعكس التراث السعودي العريق.
                </p>
                <div className="flex items-center text-sm text-sky-600">
                  <span className="mr-2">✅</span>
                  <span>تصميم مبتكر • هوية وطنية • جودة عالمية</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">خطوط الشرق الأوسط</h3>
                <p className="text-gray-600 mb-3">
                  تطوير مجموعة أزياء عصرية لخطوط جوية إقليمية تجمع بين الحداثة والأصالة العربية.
                </p>
                <div className="flex items-center text-sm text-indigo-600">
                  <span className="mr-2">✅</span>
                  <span>تصميم عصري • راحة فائقة • هوية إقليمية</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">الابتكار في أزياء الطيران</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نستثمر في البحث والتطوير لنقدم حلولاً مبتكرة في عالم أزياء الطيران. نتابع أحدث التقنيات في الأقمشة 
              والتصميم، ونعمل مع خبراء الطيران لضمان أن تصاميمنا تواكب تطورات الصناعة وتلبي احتياجات المستقبل.
            </p>

            <div className="bg-gradient-to-r from-sky-100 to-blue-100 p-6 rounded-lg border-r-4 border-sky-500">
              <h3 className="text-sky-800 font-bold mb-3">رؤيتنا</h3>
              <p className="text-gray-700 italic text-lg">
                "نحلق بالأناقة... نصمم للسماء"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 