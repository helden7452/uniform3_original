import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'المساواة والمهنية';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'about',
  generateSafeMetadata({
    title: 'عن المساواة والمهنية | خبراء الزي الموحد',
    description: 'تعرف على التزامنا بالمساواة والمهنية في تصميم الأزياء الموحدة وتعزيز بيئة العمل الشاملة والمتكافئة',
    keywords: 'المساواة، المهنية، تكافؤ الفرص، بيئة العمل، الأزياء الموحدة، الشمولية',
    openGraph: {
      title: 'عن المساواة والمهنية | خبراء الزي الموحد',
      description: 'تعرف على التزامنا بالمساواة والمهنية في تصميم الأزياء الموحدة',
      images: ['/images/equality-professionalism.jpg'],
    },
  })
);

export default function AboutEqualityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المساواة والمهنية', href: '/المساواة والمهنية' },
          { label: 'عن القسم', href: '/المساواة والمهنية/about', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">المساواة والمهنية</h1>
          <p className="text-xl opacity-90">
            نبني مستقبلاً أكثر عدالة ومهنية من خلال الأزياء الموحدة
          </p>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none rtl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">رؤيتنا في المساواة</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نؤمن في خبراء الزي الموحد بأن المساواة والمهنية ليستا مجرد مفاهيم نظرية، بل قيم أساسية يجب أن تنعكس 
              في كل تصميم نقدمه. نسعى لخلق بيئة عمل شاملة ومتكافئة من خلال أزياء موحدة تحترم التنوع وتعزز الكرامة المهنية 
              لجميع الموظفين بغض النظر عن الجنس أو العرق أو الخلفية الثقافية.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">مبادئنا الأساسية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-800">المساواة في التصميم</h3>
                <p className="text-gray-600">
                  نصمم أزياء تحترم احتياجات جميع الموظفين وتوفر خيارات متنوعة تناسب الجميع دون تمييز أو تفضيل.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">المهنية العالية</h3>
                <p className="text-gray-600">
                  نحافظ على أعلى معايير المهنية في التصميم والتنفيذ، مما يعزز الثقة والاحترام في بيئة العمل.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-purple-800">الشمولية والتنوع</h3>
                <p className="text-gray-600">
                  نحتفي بالتنوع ونصمم حلولاً شاملة تراعي الاختلافات الثقافية والجسدية والشخصية.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="text-xl font-semibold mb-3 text-orange-800">الكرامة المهنية</h3>
                <p className="text-gray-600">
                  نضمن أن كل تصميم يعزز الكرامة المهنية ويساهم في بناء هوية إيجابية للموظف والمؤسسة.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">التزاماتنا العملية</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-emerald-600">تكافؤ الفرص في التصميم</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• توفير خيارات متنوعة للرجال والنساء بنفس مستوى الجودة والأناقة</li>
                  <li>• مراعاة الاحتياجات الخاصة والمتطلبات الدينية والثقافية</li>
                  <li>• ضمان الراحة والوظيفية لجميع أنواع الأجسام والأعمار</li>
                  <li>• توفير حلول مرنة تناسب ظروف العمل المختلفة</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">المعايير المهنية</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• الالتزام بأعلى معايير الجودة في الخامات والتصنيع</li>
                  <li>• الشفافية في التعامل والتسعير</li>
                  <li>• الالتزام بالمواعيد والوعود المقطوعة</li>
                  <li>• التطوير المستمر والتحسين القائم على التغذية الراجعة</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">بيئة العمل الشاملة</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• تصاميم تعزز الانتماء والفخر بالعمل</li>
                  <li>• حلول تراعي التنوع الثقافي والديني</li>
                  <li>• دعم الهوية المهنية الإيجابية</li>
                  <li>• تعزيز روح الفريق والتعاون</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">مبادراتنا الخاصة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">برنامج التصميم الشامل</h3>
                <p className="text-gray-600 mb-3">
                  برنامج متخصص لتطوير تصاميم تراعي احتياجات ذوي الإعاقة والظروف الخاصة.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• تصاميم سهلة الارتداء</li>
                  <li>• خامات مريحة وآمنة</li>
                  <li>• حلول تقنية مبتكرة</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">مبادرة المرأة في العمل</h3>
                <p className="text-gray-600 mb-3">
                  تصاميم خاصة تدعم المرأة العاملة وتعزز مشاركتها الفعالة في سوق العمل.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• تصاميم عملية وأنيقة</li>
                  <li>• مراعاة الاحتياجات الخاصة</li>
                  <li>• دعم الثقة والمهنية</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">قصص نجاح</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">شركة التقنية المتقدمة</h3>
              <p className="text-gray-600 mb-3">
                نجحنا في تطوير نظام أزياء موحدة شامل لشركة تقنية كبرى، حيث وفرنا خيارات متنوعة تناسب 
                جميع الموظفين من خلفيات ثقافية مختلفة، مما أدى إلى زيادة الرضا الوظيفي بنسبة 40%.
              </p>
              <div className="flex items-center text-sm text-emerald-600">
                <span className="mr-2">✅</span>
                <span>تحسن الرضا الوظيفي • تعزيز الانتماء • زيادة الإنتاجية</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">التزامنا المستقبلي</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نتعهد بالاستمرار في تطوير حلول مبتكرة تعزز المساواة والمهنية في بيئة العمل. نستثمر في البحث والتطوير 
              لنقدم تصاميم تواكب التطورات الاجتماعية والثقافية، ونساهم في بناء مجتمع أكثر عدالة وشمولية.
            </p>

            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-lg border-r-4 border-emerald-500">
              <h3 className="text-emerald-800 font-bold mb-3">التزامنا</h3>
              <p className="text-gray-700 italic text-lg">
                "نصمم للجميع... نبني للمستقبل"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 