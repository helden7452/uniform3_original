import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'التصميم';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'about',
  generateSafeMetadata({
    title: 'عن التصميم | خبراء الزي الموحد',
    description: 'تعرف على فلسفتنا في التصميم ومنهجيتنا المبتكرة في إبداع أزياء موحدة تجمع بين الجمال والوظيفية',
    keywords: 'التصميم، فلسفة التصميم، الإبداع، الأزياء الموحدة، التصميم الوظيفي',
    openGraph: {
      title: 'عن التصميم | خبراء الزي الموحد',
      description: 'تعرف على فلسفتنا في التصميم ومنهجيتنا المبتكرة',
      images: ['/images/design-philosophy.jpg'],
    },
  })
);

export default function AboutDesignPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'التصميم', href: '/التصميم' },
          { label: 'عن القسم', href: '/التصميم/about', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">التصميم</h1>
          <p className="text-xl opacity-90">
            حيث يلتقي الإبداع بالوظيفية لنصنع أزياء تحكي قصة
          </p>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none rtl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">فلسفة التصميم</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نؤمن في خبراء الزي الموحد بأن التصميم الحقيقي يتجاوز المظهر الخارجي ليصل إلى جوهر الوظيفة والغرض. 
              كل خط نرسمه وكل لون نختاره يحمل معنى ويخدم هدفاً، فالتصميم عندنا ليس مجرد زينة، بل حل متكامل 
              يعكس هوية المؤسسة ويلبي احتياجات مستخدميه.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">مبادئنا الأساسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">الجمال الوظيفي</h3>
                <p className="text-gray-600">
                  نصمم بحيث يكون الجمال خادماً للوظيفة، فكل عنصر جمالي له دور عملي يساهم في تحسين تجربة المستخدم.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl font-semibold mb-3 text-green-800">التوازن المثالي</h3>
                <p className="text-gray-600">
                  نحقق التوازن بين الأناقة والراحة، بين التميز والعملية، بين الحداثة والكلاسيكية.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-xl font-semibold mb-3 text-purple-800">الابتكار المستمر</h3>
                <p className="text-gray-600">
                  نبحث دائماً عن حلول مبتكرة ونطور أساليب جديدة لنقدم تصاميم تتفوق على التوقعات.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">منهجية التصميم</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">البحث والتحليل</h3>
                  <p className="text-gray-600">
                    نبدأ بدراسة عميقة لطبيعة العمل، ثقافة المؤسسة، والجمهور المستهدف لنفهم الاحتياجات الحقيقية.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">العصف الذهني والإبداع</h3>
                  <p className="text-gray-600">
                    نطلق العنان للإبداع من خلال جلسات عصف ذهني مكثفة نستكشف فيها كل الاحتمالات والحلول الممكنة.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">التطوير والتحسين</h3>
                  <p className="text-gray-600">
                    نطور النماذج الأولية ونختبرها ونحسنها باستمرار حتى نصل إلى التصميم المثالي.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">التنفيذ والمتابعة</h3>
                  <p className="text-gray-600">
                    ننفذ التصميم بأعلى معايير الجودة ونتابع الأداء لضمان تحقيق الأهداف المرجوة.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">تخصصاتنا في التصميم</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">التصميم المؤسسي</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• أزياء الإدارة العليا والمديرين</li>
                  <li>• أزياء الموظفين والعاملين</li>
                  <li>• تصاميم خاصة للمناسبات الرسمية</li>
                  <li>• حلول للبيئات المكتبية المختلفة</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">التصميم التخصصي</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• أزياء القطاع الطبي والصحي</li>
                  <li>• أزياء قطاع الضيافة والفنادق</li>
                  <li>• أزياء الطيران والنقل</li>
                  <li>• أزياء القطاع التعليمي</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">أدواتنا وتقنياتنا</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نستخدم أحدث برامج التصميم والتقنيات المتطورة مثل التصميم ثلاثي الأبعاد والواقع الافتراضي 
              لنقدم تجربة تصميم تفاعلية ودقيقة. كما نعتمد على تقنيات الذكاء الاصطناعي لتحليل الاتجاهات 
              وتوقع احتياجات المستقبل.
            </p>

            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-lg border-r-4 border-indigo-500">
              <h3 className="text-indigo-800 font-bold mb-3">رؤيتنا</h3>
              <p className="text-gray-700 italic text-lg">
                "نصمم ليس فقط ما تراه العين، بل ما تشعر به الروح"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 