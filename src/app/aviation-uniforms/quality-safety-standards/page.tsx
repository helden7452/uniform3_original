import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'معايير الجودة والسلامة في أزياء الطيران: دليل شامل للامتثال | خبراء الزي الموحد',
  description: 'تعرف على أهم معايير الجودة والسلامة المطلوبة في تصميم وإنتاج أزياء الطيران، من المعايير الدولية إلى المتطلبات المحلية في المملكة العربية السعودية',
};

export default function QualitySafetyStandardsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الطيران', href: '/aviation-uniforms' },
          { label: 'معايير الجودة والسلامة', href: '/aviation-uniforms/quality-safety-standards', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation-uniforms/quality-safety-standards.jpg"
            alt="معايير الجودة والسلامة في أزياء الطيران"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <Link href="/aviation-uniforms" className="text-accent hover:underline font-medium">
              زي قطاع الطيران
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{new Date().toLocaleDateString('ar-SA-u-ca-gregory', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">•</span>
              <span>14 دقيقة للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">معايير الجودة والسلامة في أزياء الطيران: دليل شامل للامتثال</h1>
          
          <div className="prose prose-lg max-w-none rtl">
            <p>
              تُعد معايير الجودة والسلامة في أزياء الطيران من أهم الركائز التي تضمن حماية طاقم الطيران وتعزز من كفاءة أدائهم في بيئة العمل المعقدة والمتطلبة. هذه المعايير ليست مجرد توصيات، بل متطلبات إلزامية تحكمها قوانين ولوائح صارمة على المستويين المحلي والدولي. في هذا المقال الشامل، نستعرض أهم هذه المعايير وكيفية تطبيقها في صناعة أزياء الطيران، مع التركيز على المتطلبات الخاصة بالمملكة العربية السعودية.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المعايير الدولية لسلامة أزياء الطيران</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير منظمة الطيران المدني الدولي (ICAO)</h3>
            <p>
              تضع منظمة الطيران المدني الدولي الإطار العام لمعايير السلامة في الطيران:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة الحريق:</strong> يجب أن تكون جميع الأقمشة مقاومة للاشتعال وفقاً لمعيار FAR 25.853</li>
              <li><strong>عدم السمية:</strong> عدم إطلاق غازات سامة عند التعرض للحرارة العالية</li>
              <li><strong>الانطفاء الذاتي:</strong> قدرة القماش على إطفاء نفسه خلال 15 ثانية</li>
              <li><strong>معدل الاحتراق:</strong> ألا يتجاوز معدل الاحتراق 2.5 سم/دقيقة</li>
              <li><strong>كثافة الدخان:</strong> إنتاج الحد الأدنى من الدخان عند الاحتراق</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير إدارة الطيران الفيدرالية الأمريكية (FAA)</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>اختبار الاحتراق العمودي:</strong> فحص مقاومة الأقمشة للهب</li>
              <li><strong>اختبار كثافة الدخان:</strong> قياس كمية الدخان المنبعثة</li>
              <li><strong>اختبار السمية:</strong> فحص الغازات المنبعثة عند الاحتراق</li>
              <li><strong>اختبار الحرارة الإشعاعية:</strong> مقاومة الحرارة المنبعثة</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">معيار FAR 25.853 بالتفصيل</h3>
              <p className="mb-0">
                يُعتبر معيار FAR 25.853 المرجع الأساسي لاختبار مقاومة الحريق في أقمشة الطيران. يتطلب هذا المعيار أن تجتاز الأقمشة اختبار الاحتراق العمودي حيث يتم تطبيق لهب بارتفاع 1.5 بوصة لمدة 12 ثانية، ويجب ألا يتجاوز معدل الاحتراق 2.5 سم/دقيقة، وأن ينطفئ القماش خلال 15 ثانية من إزالة مصدر اللهب.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">معايير الجودة في التصنيع</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير ISO للجودة</h3>
            <p>
              تطبق صناعة أزياء الطيران عدة معايير ISO مهمة:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>ISO 9001:</strong> نظام إدارة الجودة الشامل</li>
              <li><strong>ISO 14001:</strong> نظام الإدارة البيئية</li>
              <li><strong>ISO 45001:</strong> نظام إدارة الصحة والسلامة المهنية</li>
              <li><strong>ISO 3758:</strong> رموز العناية بالمنسوجات</li>
              <li><strong>ISO 12947:</strong> اختبار مقاومة التآكل</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير الأقمشة والمواد</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">خصائص الأقمشة المطلوبة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المتانة:</strong> مقاومة التمزق والتآكل لمدة لا تقل عن 18 شهر</li>
              <li><strong>ثبات الألوان:</strong> مقاومة البهتان لـ 50 غسلة على الأقل</li>
              <li><strong>مقاومة التجعد:</strong> الحفاظ على المظهر الأنيق</li>
              <li><strong>التهوية:</strong> نفاذية الهواء لراحة الطاقم</li>
              <li><strong>سهولة العناية:</strong> إمكانية الغسيل والكي بسهولة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">اختبارات الجودة الأساسية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>اختبار قوة الشد:</strong> قياس مقاومة القماش للتمزق</li>
              <li><strong>اختبار الانكماش:</strong> قياس نسبة الانكماش بعد الغسيل</li>
              <li><strong>اختبار ثبات الألوان:</strong> مقاومة البهتان والنزيف</li>
              <li><strong>اختبار المقاومة الكيميائية:</strong> مقاومة المواد الكيميائية</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">جدول معايير الاختبار</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">نوع الاختبار</th>
                      <th className="border border-gray-300 p-2 text-right">المعيار المطلوب</th>
                      <th className="border border-gray-300 p-2 text-right">طريقة الاختبار</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">مقاومة الحريق</td>
                      <td className="border border-gray-300 p-2">≤ 2.5 سم/دقيقة</td>
                      <td className="border border-gray-300 p-2">FAR 25.853</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">قوة الشد</td>
                      <td className="border border-gray-300 p-2">≥ 300 نيوتن</td>
                      <td className="border border-gray-300 p-2">ISO 13934-1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">ثبات الألوان</td>
                      <td className="border border-gray-300 p-2">درجة 4-5</td>
                      <td className="border border-gray-300 p-2">ISO 105-C06</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">مقاومة التآكل</td>
                      <td className="border border-gray-300 p-2">≥ 25,000 دورة</td>
                      <td className="border border-gray-300 p-2">ISO 12947-2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المتطلبات السعودية والامتثال المحلي</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير الهيئة العامة للطيران المدني (GACA)</h3>
            <p>
              تضع GACA متطلبات محددة لأزياء الطيران في المملكة:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الامتثال للمعايير الدولية:</strong> تطبيق معايير ICAO و FAA</li>
              <li><strong>الاعتماد المحلي:</strong> الحصول على شهادات من مختبرات معتمدة</li>
              <li><strong>التفتيش الدوري:</strong> فحص دوري لأزياء الطاقم</li>
              <li><strong>التوثيق:</strong> الاحتفاظ بسجلات الاختبارات والشهادات</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير الهيئة السعودية للمواصفات والمقاييس (SASO)</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المواصفة السعودية 1429:</strong> متطلبات المنسوجات والملابس</li>
              <li><strong>المواصفة السعودية 1847:</strong> اختبارات السلامة للمنسوجات</li>
              <li><strong>المواصفة السعودية 2156:</strong> وسم المنتجات النسيجية</li>
              <li><strong>شهادة المطابقة:</strong> إلزامية للمنتجات المستوردة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">المتطلبات الثقافية والدينية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الاحتشام:</strong> تصاميم تتوافق مع القيم الإسلامية</li>
              <li><strong>المواد الحلال:</strong> استخدام مواد مسموحة شرعياً</li>
              <li><strong>التنوع الثقافي:</strong> مراعاة احتياجات الطاقم متعدد الجنسيات</li>
              <li><strong>المرونة الدينية:</strong> إمكانية التكيف مع المتطلبات الدينية</li>
            </ul>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">قصة نجاح: الخطوط السعودية</h3>
              <p className="mb-0">
                نجحت الخطوط الجوية العربية السعودية في تطوير أزياء تلتزم بأعلى معايير السلامة العالمية مع الحفاظ على الهوية الثقافية السعودية. تم اعتماد أقمشة خاصة تجمع بين مقاومة الحريق والراحة في المناخ الحار، مع تصاميم تعكس التراث السعودي الأصيل. هذا النجاح جعل الخطوط السعودية مرجعاً في تطبيق معايير السلامة مع الحفاظ على الهوية الثقافية.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">عملية ضمان الجودة والامتثال</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">مراحل الفحص والاختبار</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الفحص الأولي للمواد</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>فحص الأقمشة الواردة:</strong> التأكد من مطابقة المواصفات</li>
              <li><strong>اختبار العينات:</strong> فحص عينات من كل دفعة</li>
              <li><strong>التوثيق:</strong> تسجيل نتائج جميع الاختبارات</li>
              <li><strong>الموافقة:</strong> اعتماد المواد المطابقة للمعايير</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">فحص المنتج النهائي</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>فحص الخياطة:</strong> التأكد من جودة التصنيع</li>
              <li><strong>اختبار الأداء:</strong> فحص الوظائف العملية</li>
              <li><strong>فحص المظهر:</strong> التأكد من المطابقة للتصميم</li>
              <li><strong>الاختبار النهائي:</strong> فحص شامل قبل التسليم</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">نظام إدارة الجودة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">العناصر الأساسية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>السياسات والإجراءات:</strong> وضع سياسات واضحة للجودة</li>
              <li><strong>التدريب:</strong> تدريب الموظفين على معايير الجودة</li>
              <li><strong>المراقبة المستمرة:</strong> متابعة دورية لعمليات الإنتاج</li>
              <li><strong>التحسين المستمر:</strong> تطوير العمليات باستمرار</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">أدوات ضمان الجودة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>قوائم الفحص:</strong> قوائم مرجعية للفحص</li>
              <li><strong>أجهزة القياس:</strong> معدات دقيقة للاختبار</li>
              <li><strong>برامج التتبع:</strong> أنظمة لتتبع المنتجات</li>
              <li><strong>تقارير الجودة:</strong> تقارير دورية عن الأداء</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">التحديات والحلول</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التحديات الرئيسية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التكلفة العالية:</strong> معايير السلامة تزيد من التكلفة</li>
              <li><strong>التعقيد التقني:</strong> صعوبة في تطبيق بعض المعايير</li>
              <li><strong>التحديث المستمر:</strong> تطور المعايير باستمرار</li>
              <li><strong>التوازن:</strong> الموازنة بين السلامة والراحة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الحلول المبتكرة</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التقنيات الحديثة:</strong> استخدام تقنيات متطورة في التصنيع</li>
              <li><strong>الشراكات الاستراتيجية:</strong> التعاون مع موردين متخصصين</li>
              <li><strong>البحث والتطوير:</strong> الاستثمار في تطوير مواد جديدة</li>
              <li><strong>التدريب المتخصص:</strong> تدريب الفرق على أحدث المعايير</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المستقبل والتطوير</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الاتجاهات المستقبلية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المواد الذكية:</strong> أقمشة تتفاعل مع البيئة</li>
              <li><strong>التقنيات النانوية:</strong> تحسين خصائص الأقمشة</li>
              <li><strong>الاستدامة:</strong> مواد صديقة للبيئة</li>
              <li><strong>الرقمنة:</strong> أنظمة رقمية لضمان الجودة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">رؤية 2030 والطيران السعودي</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التوطين:</strong> تطوير صناعة محلية للأزياء</li>
              <li><strong>الابتكار:</strong> الاستثمار في البحث والتطوير</li>
              <li><strong>المعايير العالمية:</strong> تطبيق أعلى المعايير الدولية</li>
              <li><strong>التدريب:</strong> تطوير الكوادر المتخصصة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p>
              إن الالتزام بمعايير الجودة والسلامة في أزياء الطيران ليس مجرد متطلب قانوني، بل استثمار في سلامة الطاقم وكفاءة العمليات. هذه المعايير تضمن حماية أرواح الطاقم والركاب، وتعزز من صورة شركات الطيران وثقة العملاء.
            </p>
            <p>
              في خبراء الزي الموحد، نلتزم بأعلى معايير الجودة والسلامة في جميع منتجاتنا. نعمل مع مختبرات معتمدة دولياً ومحلياً لضمان مطابقة جميع أزيائنا للمعايير المطلوبة، مع الحفاظ على الجودة والأناقة والراحة.
            </p>
            <p>
              نؤمن بأن السلامة والجودة هما أساس النجاح في صناعة الطيران، ونسعى دائماً لتقديم منتجات تفوق توقعات عملائنا وتلبي أعلى المعايير العالمية والمحلية.
            </p>
          </div>
          
          {/* Share Section */}
          <div className="mt-8 flex justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">مشاركة المقال</h3>
              <div className="flex justify-center space-x-reverse space-x-4">
                <button className="bg-[#3b5998] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                </button>
                <button className="bg-[#1da1f2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                </button>
                <button className="bg-[#0e76a8] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                </button>
                <button className="bg-[#25D366] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 