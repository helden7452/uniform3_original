import { Metadata } from 'next';
import { generateSafeMetadata } from '@/components/SafeMetadata';
import { generatePageMetadataWithHreflang } from '@/components/HreflangTags';
import Breadcrumb from '@/components/Breadcrumb';

const currentSection = 'التراث والتصميم';

export const metadata: Metadata = generatePageMetadataWithHreflang(
  currentSection,
  'about',
  generateSafeMetadata({
    title: 'عن التراث والتصميم | خبراء الزي الموحد',
    description: 'تعرف على رؤيتنا في دمج التراث السعودي الأصيل مع التصميم العصري في أزياء الشركات والمؤسسات',
    keywords: 'التراث السعودي، التصميم العصري، الزي الموحد، الهوية الثقافية',
    openGraph: {
      title: 'عن التراث والتصميم | خبراء الزي الموحد',
      description: 'تعرف على رؤيتنا في دمج التراث السعودي الأصيل مع التصميم العصري',
      images: ['/images/heritage-design.jpg'],
    },
  })
);

export default function AboutHeritagePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'التراث والتصميم', href: '/التراث والتصميم' },
          { label: 'عن القسم', href: '/التراث والتصميم/about', isCurrent: true }
        ]} 
      />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
        <div className="bg-gradient-to-r from-primary to-accent text-white p-8">
          <h1 className="text-4xl font-bold mb-4">التراث والتصميم</h1>
          <p className="text-xl opacity-90">
            حيث يلتقي التراث السعودي الأصيل بالتصميم العصري
          </p>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none rtl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">رؤيتنا</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نؤمن في خبراء الزي الموحد بأن التراث السعودي الغني يمكن أن يكون مصدر إلهام لا ينضب في عالم التصميم المعاصر. 
              نسعى لخلق توازن مثالي بين الأصالة والحداثة، حيث نحافظ على الهوية الثقافية السعودية مع مواكبة أحدث اتجاهات التصميم العالمية.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">فلسفتنا في التصميم</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">الأصالة</h3>
                <p className="text-gray-600">
                  نستلهم من العناصر التراثية السعودية مثل الأنماط الهندسية التقليدية، والألوان المستوحاة من البيئة الصحراوية، 
                  والخطوط العربية الأصيلة لنضفي طابعاً مميزاً على تصاميمنا.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-accent">المعاصرة</h3>
                <p className="text-gray-600">
                  نطبق أحدث تقنيات التصميم والخامات المبتكرة لضمان الراحة والعملية، مع الحفاظ على المظهر الأنيق 
                  الذي يناسب بيئة العمل الحديثة.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">خدماتنا المتخصصة</h2>
            <ul className="list-disc pr-6 mb-6 text-gray-600">
              <li className="mb-2">تصميم أزياء موحدة مستوحاة من التراث السعودي</li>
              <li className="mb-2">استشارات في دمج العناصر الثقافية مع المتطلبات العملية</li>
              <li className="mb-2">تطوير هوية بصرية متكاملة للمؤسسات</li>
              <li className="mb-2">ورش تدريبية حول أهمية التراث في التصميم المعاصر</li>
              <li className="mb-2">حلول مخصصة للمناسبات الوطنية والثقافية</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-gray-800">التزامنا</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نلتزم بالحفاظ على التراث السعودي وتقديمه بصورة عصرية تليق بمكانة المملكة العربية السعودية. 
              كل تصميم نقدمه يحمل قصة من التراث ورؤية للمستقبل، مما يجعل كل قطعة زي ليست مجرد ملبس، 
              بل رمزاً للهوية والانتماء.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg border-r-4 border-primary">
              <h3 className="text-primary font-bold mb-3">شعارنا</h3>
              <p className="text-gray-700 italic text-lg">
                "من عمق التراث... إلى آفاق المستقبل"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 