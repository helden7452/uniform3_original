import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'الاتجاهات';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'about',
  generateSafeMetadata({
    title: 'عن الاتجاهات | خبراء الزي الموحد',
    description: 'اكتشف أحدث اتجاهات الموضة في عالم الأزياء الموحدة والتطورات المعاصرة في تصميم أزياء الشركات',
    keywords: 'اتجاهات الموضة، الأزياء الموحدة، التصميم المعاصر، موضة الشركات',
    openGraph: {
      title: 'عن الاتجاهات | خبراء الزي الموحد',
      description: 'اكتشف أحدث اتجاهات الموضة في عالم الأزياء الموحدة',
      images: ['/images/trends-fashion.jpg'],
    },
  })
);

export default function AboutTrendsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'الاتجاهات', href: '/الاتجاهات' },
          { label: 'عن القسم', href: '/الاتجاهات/about', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">الاتجاهات</h1>
          <p className="text-xl opacity-90">
            نواكب أحدث اتجاهات الموضة في عالم الأزياء الموحدة
          </p>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none rtl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">رؤيتنا في الاتجاهات</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              في عالم متسارع التطور، نحرص في خبراء الزي الموحد على مواكبة أحدث الاتجاهات العالمية في تصميم الأزياء الموحدة. 
              نؤمن بأن الموضة ليست مجرد مظهر خارجي، بل انعكاس لثقافة المؤسسة وقيمها، ووسيلة لتعزيز الهوية المهنية والثقة بالنفس.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">الاتجاهات الحالية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">الاستدامة والبيئة</h3>
                <p className="text-gray-600">
                  التوجه نحو الخامات المستدامة والصديقة للبيئة، مع التركيز على الجودة طويلة المدى 
                  والتصاميم الخالدة التي تقاوم تقلبات الموضة.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-800">التقنيات الذكية</h3>
                <p className="text-gray-600">
                  دمج التقنيات الحديثة مثل الأقمشة المضادة للبكتيريا، والخامات المنظمة لدرجة الحرارة، 
                  والتصاميم المقاومة للتجاعيد.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">المرونة والراحة</h3>
                <p className="text-gray-600">
                  التركيز على التصاميم المرنة التي تناسب بيئات العمل المختلفة، من المكاتب التقليدية 
                  إلى المساحات المفتوحة والعمل الهجين.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold mb-3 text-orange-800">التخصيص الشخصي</h3>
                <p className="text-gray-600">
                  إمكانية تخصيص التصاميم لتناسب الأذواق الشخصية مع الحفاظ على الهوية الموحدة للمؤسسة، 
                  مما يعزز الرضا الوظيفي.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">اتجاهات الألوان والأنماط</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">ألوان العام</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm text-gray-600">الأزرق الكلاسيكي</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm text-gray-600">الأخضر الطبيعي</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm text-gray-600">الرمادي الأنيق</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm text-gray-600">البرونزي الدافئ</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">خدماتنا في مجال الاتجاهات</h2>
            <ul className="list-disc pr-6 mb-6 text-gray-600">
              <li className="mb-2">تحليل الاتجاهات العالمية وتطبيقها محلياً</li>
              <li className="mb-2">استشارات التطوير والتحديث للأزياء الموجودة</li>
              <li className="mb-2">ورش عمل حول اتجاهات الموضة المهنية</li>
              <li className="mb-2">تقارير دورية عن أحدث التطورات في المجال</li>
              <li className="mb-2">حلول مبتكرة للتحديات المعاصرة في بيئة العمل</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">نظرة على المستقبل</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نتطلع إلى مستقبل يجمع بين الأناقة والوظيفية، حيث تصبح الأزياء الموحدة أكثر ذكاءً وتفاعلاً مع احتياجات المستخدم. 
              نستثمر في البحث والتطوير لنقدم حلولاً مبتكرة تواكب التطورات التقنية والاجتماعية، 
              مع الحفاظ على الجودة والأناقة التي نشتهر بها.
            </p>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-r-4 border-purple-500">
              <h3 className="text-purple-800 font-bold mb-3">رسالتنا</h3>
              <p className="text-gray-700 italic text-lg">
                "نصنع المستقبل... نصمم الاتجاه"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 