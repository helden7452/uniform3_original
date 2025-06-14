import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'اللوائح الدولية لأزياء الطيران والامتثال السعودي: دليل شامل | خبراء الزي الموحد',
  description: 'دليل شامل للوائح والمعايير الدولية لأزياء الطيران ومتطلبات الامتثال في المملكة العربية السعودية، من ICAO إلى GACA',
};

export default function InternationalAviationUniformRegulationsSaudiCompliancePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الطيران', href: '/aviation-uniforms' },
          { label: 'اللوائح الدولية والامتثال السعودي', href: '/aviation-uniforms/international-aviation-uniform-regulations-saudi-compliance', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation-uniforms/international-regulations.jpg"
            alt="اللوائح الدولية لأزياء الطيران والامتثال السعودي"
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
              <span>18 دقيقة للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">اللوائح الدولية لأزياء الطيران والامتثال السعودي: دليل شامل</h1>
          
          <div className="prose prose-lg max-w-none rtl">
            <p>
              تُعتبر اللوائح والمعايير الدولية لأزياء الطيران من أهم الركائز التي تضمن سلامة الطاقم وكفاءة العمليات الجوية. هذه اللوائح، التي وضعتها منظمات دولية متخصصة، تحدد المتطلبات الدقيقة للمواد والتصميم والأداء لضمان أعلى مستويات السلامة. في المملكة العربية السعودية، تلتزم شركات الطيران بهذه المعايير الدولية مع إضافة متطلبات محلية تعكس الخصوصية الثقافية والمناخية للمنطقة. هذا المقال الشامل يستعرض أهم هذه اللوائح وكيفية تطبيقها في السياق السعودي.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المنظمات الدولية المنظمة</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">منظمة الطيران المدني الدولي (ICAO)</h3>
            <p>
              تُعتبر ICAO المرجع الأساسي للمعايير الدولية في الطيران:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الملحق 6:</strong> تشغيل الطائرات التجارية الدولية</li>
              <li><strong>الملحق 8:</strong> صلاحية الطائرات للطيران</li>
              <li><strong>الوثيقة 9760:</strong> دليل صلاحية الطائرات للطيران</li>
              <li><strong>المعايير والممارسات الموصى بها (SARPs):</strong> إرشادات شاملة للامتثال</li>
              <li><strong>التعاميم الاستشارية:</strong> توجيهات تفصيلية للتطبيق</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">إدارة الطيران الفيدرالية الأمريكية (FAA)</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>FAR Part 25:</strong> معايير صلاحية الطائرات للطيران</li>
              <li><strong>FAR 25.853:</strong> معيار مقاومة الحريق للمواد الداخلية</li>
              <li><strong>AC 25.853-1:</strong> التعميم الاستشاري لاختبار المواد</li>
              <li><strong>TSO (Technical Standard Orders):</strong> أوامر المعايير التقنية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">وكالة سلامة الطيران الأوروبية (EASA)</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>CS-25:</strong> مواصفات الشهادة للطائرات الكبيرة</li>
              <li><strong>AMC (Acceptable Means of Compliance):</strong> وسائل الامتثال المقبولة</li>
              <li><strong>GM (Guidance Material):</strong> المواد الإرشادية</li>
              <li><strong>Part-21:</strong> شهادة المنتجات والقطع والأجهزة</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">التنسيق بين المنظمات الدولية</h3>
              <p className="mb-0">
                تعمل المنظمات الدولية الثلاث الرئيسية (ICAO، FAA، EASA) بتنسيق وثيق لضمان توحيد المعايير عالمياً. يتم تبادل المعلومات والخبرات من خلال اتفاقيات ثنائية ومتعددة الأطراف، مما يضمن أن المعايير المطبقة في منطقة ما معترف بها دولياً. هذا التنسيق يسهل على شركات الطيران العاملة دولياً الامتثال لمعايير موحدة.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المعايير التقنية الأساسية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير مقاومة الحريق</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">اختبار الاحتراق العمودي (FAR 25.853)</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>إجراء الاختبار:</strong> تطبيق لهب بارتفاع 1.5 بوصة لمدة 12 ثانية</li>
              <li><strong>معدل الاحتراق:</strong> يجب ألا يتجاوز 2.5 بوصة/دقيقة</li>
              <li><strong>وقت الانطفاء:</strong> يجب أن ينطفئ خلال 15 ثانية من إزالة اللهب</li>
              <li><strong>طول الاحتراق:</strong> يجب ألا يتجاوز 6 بوصات</li>
              <li><strong>عدد العينات:</strong> اختبار 3 عينات على الأقل لكل مادة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">اختبار كثافة الدخان</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المعيار المطلوب:</strong> كثافة دخان أقصاها 200 (Ds)</li>
              <li><strong>ظروف الاختبار:</strong> درجة حرارة 25°م ورطوبة نسبية 60%</li>
              <li><strong>مدة الاختبار:</strong> 4 دقائق من التعرض للحرارة</li>
              <li><strong>طريقة القياس:</strong> استخدام مقياس الضوء لقياس الكثافة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">اختبار السمية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الغازات المحظورة:</strong> أول أكسيد الكربون، سيانيد الهيدروجين</li>
              <li><strong>الحد الأقصى المسموح:</strong> تركيزات محددة لكل غاز</li>
              <li><strong>ظروف الاختبار:</strong> درجات حرارة مختلفة (25°م و 190°م)</li>
              <li><strong>مدة التعرض:</strong> 30 دقيقة لكل ظرف</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير الأداء الميكانيكي</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">قوة الشد والتمزق</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>قوة الشد الدنيا:</strong> 300 نيوتن للأقمشة الأساسية</li>
              <li><strong>مقاومة التمزق:</strong> 25 نيوتن كحد أدنى</li>
              <li><strong>الاستطالة عند الكسر:</strong> 15-25% حسب نوع القماش</li>
              <li><strong>معايير الاختبار:</strong> ISO 13934-1 و ASTM D5034</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">مقاومة التآكل</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>عدد الدورات المطلوب:</strong> 25,000 دورة كحد أدنى</li>
              <li><strong>طريقة الاختبار:</strong> Martindale أو Taber</li>
              <li><strong>معايير القبول:</strong> عدم ظهور ثقوب أو تآكل مفرط</li>
              <li><strong>ظروف الاختبار:</strong> ضغط محدد وسرعة ثابتة</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">جدول المعايير التقنية الأساسية</h4>
              <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">المعيار</th>
                      <th className="border border-gray-300 p-2 text-right">القيمة المطلوبة</th>
                      <th className="border border-gray-300 p-2 text-right">طريقة الاختبار</th>
                      <th className="border border-gray-300 p-2 text-right">المرجع</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-300 p-2">معدل الاحتراق</td>
                      <td className="border border-gray-300 p-2">≤ 2.5 بوصة/دقيقة</td>
                      <td className="border border-gray-300 p-2">الاحتراق العمودي</td>
                      <td className="border border-gray-300 p-2">FAR 25.853</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">كثافة الدخان</td>
                      <td className="border border-gray-300 p-2">≤ 200 Ds</td>
                      <td className="border border-gray-300 p-2">ASTM E662</td>
                      <td className="border border-gray-300 p-2">FAR 25.853</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">قوة الشد</td>
                      <td className="border border-gray-300 p-2">≥ 300 نيوتن</td>
                      <td className="border border-gray-300 p-2">ISO 13934-1</td>
                      <td className="border border-gray-300 p-2">معايير الجودة</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">مقاومة التآكل</td>
                      <td className="border border-gray-300 p-2">≥ 25,000 دورة</td>
                      <td className="border border-gray-300 p-2">ISO 12947-2</td>
                      <td className="border border-gray-300 p-2">معايير المتانة</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الإطار التنظيمي السعودي</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الهيئة العامة للطيران المدني (GACA)</h3>
            <p>
              تُعتبر GACA الجهة المنظمة الرئيسية للطيران في المملكة:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>اللوائح التنفيذية:</strong> تطبيق المعايير الدولية محلياً</li>
              <li><strong>شهادات الاعتماد:</strong> إصدار تراخيص التشغيل والصيانة</li>
              <li><strong>التفتيش والمراقبة:</strong> فحص دوري للامتثال</li>
              <li><strong>التدريب والتأهيل:</strong> برامج تدريبية للكوادر المحلية</li>
              <li><strong>التطوير المستمر:</strong> تحديث اللوائح وفقاً للمعايير الدولية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">متطلبات GACA لأزياء الطيران</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المعايير الأساسية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الامتثال للمعايير الدولية:</strong> تطبيق معايير ICAO و FAA</li>
              <li><strong>الشهادات المطلوبة:</strong> شهادات اختبار من مختبرات معتمدة</li>
              <li><strong>التوثيق:</strong> الاحتفاظ بسجلات الاختبارات والشهادات</li>
              <li><strong>التحديث الدوري:</strong> مراجعة المعايير كل 3 سنوات</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">إجراءات الاعتماد</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>تقديم الطلب:</strong> تقديم طلب اعتماد مع الوثائق المطلوبة</li>
              <li><strong>الفحص الأولي:</strong> مراجعة الوثائق والمواصفات</li>
              <li><strong>الاختبارات المعملية:</strong> إجراء اختبارات في مختبرات معتمدة</li>
              <li><strong>التقييم النهائي:</strong> مراجعة شاملة للنتائج</li>
              <li><strong>إصدار الشهادة:</strong> منح شهادة الاعتماد عند الامتثال</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الهيئة السعودية للمواصفات والمقاييس (SASO)</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المواصفات السعودية ذات الصلة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>SASO 1429:</strong> متطلبات المنسوجات والملابس</li>
              <li><strong>SASO 1847:</strong> اختبارات السلامة للمنسوجات</li>
              <li><strong>SASO 2156:</strong> وسم المنتجات النسيجية</li>
              <li><strong>SASO 2847:</strong> معايير الجودة للملابس المهنية</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">متطلبات شهادة المطابقة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>للمنتجات المحلية:</strong> شهادة مطابقة من SASO</li>
              <li><strong>للمنتجات المستوردة:</strong> شهادة مطابقة أو إعلان مورد</li>
              <li><strong>الاختبارات المطلوبة:</strong> اختبارات السلامة والجودة</li>
              <li><strong>التجديد:</strong> تجديد الشهادات كل سنتين</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المتطلبات الثقافية والدينية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الامتثال للقيم الإسلامية</h3>
            <p>
              تراعي اللوائح السعودية القيم الإسلامية في تصميم الأزياء:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الاحتشام:</strong> تصاميم تغطي الجسم بشكل مناسب</li>
              <li><strong>المواد الحلال:</strong> استخدام مواد مسموحة شرعياً</li>
              <li><strong>عدم الإسراف:</strong> تجنب الإفراط في الزخرفة والألوان</li>
              <li><strong>الوظيفية:</strong> التركيز على الوظيفة أكثر من الزينة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التكيف مع التنوع الثقافي</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>خيارات متعددة:</strong> تصاميم تناسب خلفيات ثقافية مختلفة</li>
              <li><strong>المرونة الدينية:</strong> إمكانية التكيف مع متطلبات دينية مختلفة</li>
              <li><strong>الأحجام الشاملة:</strong> مقاسات تناسب جميع أشكال الجسم</li>
              <li><strong>الألوان المحايدة:</strong> استخدام ألوان مقبولة ثقافياً</li>
            </ul>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">نموذج التطبيق: الخطوط السعودية</h3>
              <p className="mb-0">
                نجحت الخطوط الجوية العربية السعودية في تطوير نموذج متميز للامتثال يجمع بين المعايير الدولية والمتطلبات المحلية. يتضمن هذا النموذج: تصاميم تحترم القيم الإسلامية مع الحفاظ على الأناقة المهنية، استخدام أقمشة تتكيف مع المناخ المحلي وتلبي معايير السلامة الدولية، وبرنامج تدريب شامل للطاقم على أهمية الامتثال للوائح. هذا النموذج أصبح مرجعاً لشركات الطيران الأخرى في المنطقة.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">عملية ضمان الامتثال</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">مراحل التقييم والاعتماد</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المرحلة الأولى: التقييم الأولي</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مراجعة التصميم:</strong> فحص التصاميم للتأكد من الامتثال</li>
              <li><strong>اختيار المواد:</strong> التحقق من مطابقة المواد للمعايير</li>
              <li><strong>التخطيط للاختبارات:</strong> وضع خطة شاملة للاختبارات</li>
              <li><strong>تحديد المختبرات:</strong> اختيار مختبرات معتمدة للاختبار</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المرحلة الثانية: الاختبارات المعملية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>اختبارات السلامة:</strong> مقاومة الحريق والسمية</li>
              <li><strong>اختبارات الأداء:</strong> المتانة والراحة</li>
              <li><strong>اختبارات البيئة:</strong> التأثر بالظروف المناخية</li>
              <li><strong>اختبارات الجودة:</strong> ثبات الألوان والأبعاد</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المرحلة الثالثة: التقييم النهائي</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مراجعة النتائج:</strong> تحليل شامل لنتائج الاختبارات</li>
              <li><strong>التقييم الفني:</strong> مراجعة من قبل خبراء متخصصين</li>
              <li><strong>التوثيق:</strong> إعداد تقرير شامل للامتثال</li>
              <li><strong>إصدار الشهادة:</strong> منح شهادة الاعتماد عند النجاح</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">المراقبة المستمرة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التفتيش الدوري</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التفتيش السنوي:</strong> فحص دوري للامتثال المستمر</li>
              <li><strong>التفتيش المفاجئ:</strong> فحوصات غير مجدولة للتحقق</li>
              <li><strong>تقييم الشكاوى:</strong> التحقيق في أي مخالفات مبلغ عنها</li>
              <li><strong>المراجعة الشاملة:</strong> تقييم شامل كل 3 سنوات</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الإجراءات التصحيحية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الإنذار الأولي:</strong> تنبيه في حالة المخالفات البسيطة</li>
              <li><strong>خطة التصحيح:</strong> وضع خطة لمعالجة المخالفات</li>
              <li><strong>المتابعة:</strong> مراقبة تنفيذ الإجراءات التصحيحية</li>
              <li><strong>العقوبات:</strong> فرض عقوبات في حالة عدم الامتثال</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">التحديات والحلول</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التحديات الرئيسية</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التحديات التقنية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>تعقيد المعايير:</strong> صعوبة في فهم وتطبيق المعايير المتعددة</li>
              <li><strong>التكلفة العالية:</strong> تكلفة الاختبارات والشهادات</li>
              <li><strong>التطوير المستمر:</strong> تحديث المعايير باستمرار</li>
              <li><strong>نقص الخبرة:</strong> قلة الخبراء المحليين المتخصصين</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التحديات الثقافية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التوازن الثقافي:</strong> الموازنة بين المعايير الدولية والمحلية</li>
              <li><strong>التنوع في الطاقم:</strong> تلبية احتياجات طاقم متنوع ثقافياً</li>
              <li><strong>التغيير التدريجي:</strong> مقاومة التغيير من بعض الأطراف</li>
              <li><strong>التوعية:</strong> نشر الوعي بأهمية الامتثال</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الحلول المبتكرة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الحلول التقنية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المختبرات المحلية:</strong> إنشاء مختبرات معتمدة محلياً</li>
              <li><strong>التدريب المتخصص:</strong> برامج تدريبية للكوادر المحلية</li>
              <li><strong>الشراكات الدولية:</strong> تعاون مع خبراء عالميين</li>
              <li><strong>التقنيات الحديثة:</strong> استخدام تقنيات متطورة في الاختبار</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الحلول الإدارية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التبسيط الإجرائي:</strong> تبسيط إجراءات الاعتماد</li>
              <li><strong>الرقمنة:</strong> استخدام الأنظمة الرقمية للمتابعة</li>
              <li><strong>الشفافية:</strong> نشر المعايير والإجراءات بوضوح</li>
              <li><strong>الدعم الفني:</strong> تقديم الدعم للشركات الصغيرة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المستقبل والتطوير</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الاتجاهات المستقبلية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المعايير الذكية:</strong> معايير تتكيف مع التقنيات الجديدة</li>
              <li><strong>الاختبار الافتراضي:</strong> استخدام المحاكاة في الاختبارات</li>
              <li><strong>الذكاء الاصطناعي:</strong> استخدام AI في التقييم والمراقبة</li>
              <li><strong>البلوك تشين:</strong> تتبع دورة حياة المنتجات</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">رؤية 2030 والطيران السعودي</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التوطين:</strong> تطوير صناعة محلية للأزياء</li>
              <li><strong>الابتكار:</strong> الاستثمار في البحث والتطوير</li>
              <li><strong>الجودة العالمية:</strong> تطبيق أعلى المعايير الدولية</li>
              <li><strong>الاستدامة:</strong> التركيز على الحلول المستدامة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p>
              إن الامتثال للوائح الدولية لأزياء الطيران ليس مجرد متطلب قانوني، بل استثمار في السلامة والجودة والسمعة. المملكة العربية السعودية، من خلال GACA و SASO، وضعت إطاراً تنظيمياً متقدماً يجمع بين أفضل الممارسات الدولية والخصوصية المحلية.
            </p>
            <p>
              في خبراء الزي الموحد، نلتزم بأعلى معايير الامتثال ونعمل بشكل وثيق مع الجهات التنظيمية لضمان أن جميع منتجاتنا تلبي وتتجاوز المتطلبات المحلية والدولية. نؤمن بأن الامتثال الحقيقي يتجاوز مجرد اجتياز الاختبارات ليشمل الالتزام بروح المعايير وأهدافها.
            </p>
            <p>
              نسعى دائماً لنكون شركاء موثوقين لعملائنا في رحلة الامتثال، ونقدم الدعم والاستشارة اللازمة لضمان تحقيق أعلى مستويات السلامة والجودة في أزياء الطيران.
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