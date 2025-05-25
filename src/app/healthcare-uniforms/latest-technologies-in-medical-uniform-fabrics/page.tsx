import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "أحدث التقنيات في أقمشة الزي الطبي: مقاومة للسوائل والتجعد | خبراء الزي الموحد",
  description: "استعراض لأحدث التقنيات المستخدمة في أقمشة الزي الطبي، من الأقمشة المقاومة للسوائل والبقع إلى تقنيات مضادة للميكروبات ومانعة للتجعد، وفوائدها للكوادر الصحية في المملكة.",
  keywords: ["تقنيات أقمشة طبية", "زي طبي مقاوم للسوائل", "أقمشة مضادة للميكروبات", "زي طبي مقاوم للتجعد", "أقمشة طبية ذكية", "نسيج طبي متطور"]
};

const MedicalUniformFabricTechnologies = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي القطاع الصحي', href: '/healthcare-uniforms' },
          { label: 'أحدث التقنيات في أقمشة الزي الطبي', href: '/healthcare-uniforms/latest-technologies-in-medical-uniform-fabrics', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">أحدث التقنيات في أقمشة الزي الطبي: مقاومة للسوائل والتجعد</h1>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/healthcare_uniforms.jpg"
            alt="صورة تقنيات الأقمشة - الزي الطبي المتطور مقاوم للسوائل والتجعد"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            تشهد صناعة الزي الطبي ثورة تكنولوجية حقيقية في مجال تطوير الأقمشة والأنسجة. فلم تعد أقمشة الزي الطبي مجرد قطع قماش عادية، بل أصبحت منظومة متكاملة من التقنيات المتطورة التي تجمع بين المتانة والراحة والأمان والوظائف المتعددة. في هذا المقال، نستعرض أحدث الابتكارات في مجال أقمشة الزي الطبي وتأثيرها على أداء الطواقم الصحية وحماية المرضى في المنشآت الصحية السعودية.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">التطور التاريخي لأقمشة الزي الطبي</h2>
        
        <div className="mb-8">
          <p>
            لفهم أهمية التقنيات الحديثة، من المفيد استعراض التطور التاريخي لأقمشة الزي الطبي:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>البدايات (قبل 1950):</strong> استخدام القطن الخالص الثقيل، صعب الغسيل، بطيء الجفاف، سريع التجعد</li>
            <li><strong>الجيل الأول (1950-1980):</strong> إدخال خلطات البوليستر/القطن لتحسين المتانة وتقليل التجعد</li>
            <li><strong>الجيل الثاني (1980-2000):</strong> ظهور المعالجات الأولية المقاومة للسوائل والبقع</li>
            <li><strong>الجيل الثالث (2000-2015):</strong> تطوير أقمشة مضادة للميكروبات وأقمشة مقاومة للاشتعال</li>
            <li><strong>الجيل الرابع (2015-الحاضر):</strong> الأقمشة الذكية متعددة الوظائف والمستدامة بيئياً</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">تقنيات مقاومة السوائل والبقع</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">كيف تعمل تقنية مقاومة السوائل؟</h3>
          <p>
            تُعد مقاومة السوائل من أهم خصائص الزي الطبي الحديث، وتتحقق من خلال:
          </p>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>معالجة الألياف بمواد كارهة للماء:</strong> طبقة من مركبات الفلوروكربون أو السيليكون تجعل سطح القماش طارداً للسوائل</li>
            <li><strong>تقنية النانو هيدروفوبيك:</strong> معالجة النسيج بجزيئات نانوية تخلق سطحاً فائق الكراهية للماء، تتدحرج عليه قطرات السوائل دون اختراق النسيج</li>
            <li><strong>الحواجز المتقدمة متعددة الطبقات:</strong> طبقات متعددة من الأقمشة تسمح بمرور الهواء وتمنع مرور السوائل</li>
            <li><strong>معالجة PFOA/PFOS-Free:</strong> تقنيات صديقة للبيئة خالية من المواد الكيميائية الضارة تمنح خاصية مقاومة السوائل</li>
            <li><strong>الحماية الديناميكية:</strong> أقمشة تزداد مقاومتها للسوائل عند ملامستها للرطوبة</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">مزايا الأقمشة المقاومة للسوائل في بيئة العمل الطبي</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>حماية محسنة:</strong> تقليل خطر انتقال العدوى من سوائل المرضى للكوادر الطبية</li>
            <li><strong>سهولة التنظيف:</strong> البقع لا تخترق النسيج مما يسهل تنظيفها</li>
            <li><strong>زيادة عمر الزي:</strong> تقليل تلف القماش الناتج عن التبقع المتكرر</li>
            <li><strong>مظهر احترافي:</strong> الحفاظ على المظهر النظيف طوال المناوبة</li>
            <li><strong>تقليل الأمراض المهنية:</strong> حماية الجلد من التعرض المتكرر للمطهرات والمواد الكيميائية</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">الفرق بين مقاومة السوائل وصد السوائل بالكامل</h3>
          <p className="text-blue-800">
            مهم التمييز بين الأقمشة "المقاومة للسوائل" و"صادة السوائل بالكامل". الأقمشة المقاومة للسوائل تجعل السوائل تتدحرج على السطح وتمنحك وقتاً للتنظيف، لكنها ستتشرب السائل بعد فترة. أما الأقمشة صادة السوائل بالكامل فتحتوي على حاجز كامل يمنع مرور السوائل نهائياً، لكنها عادة أقل راحة وأقل سماحية بمرور الهواء. في العمل اليومي، الأزياء المقاومة للسوائل مناسبة، بينما يُفضل استخدام الأزياء صادة السوائل تماماً في إجراءات عالية الخطورة مثل العمليات الجراحية والتعامل مع الحالات المعدية.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">تقنيات مقاومة التجعد والانكماش</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">كيف تعمل تقنيات مقاومة التجعد؟</h3>
          <p>
            تستخدم العديد من التقنيات المبتكرة لمقاومة التجعد والانكماش:
          </p>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>معالجة الراتنج:</strong> تطبيق مركبات الراتنج على الألياف لتثبيتها ومنعها من التجعد</li>
            <li><strong>الألياف عالية المرونة:</strong> دمج ألياف مرنة مثل الإسباندكس والإيلاستين بنسب دقيقة (2-5%) للحفاظ على الشكل</li>
            <li><strong>نسج متقدم:</strong> تقنيات نسج خاصة تزيد من مقاومة القماش للتجعد والالتواء</li>
            <li><strong>معالجة ثلاثية الأبعاد للألياف:</strong> تشكيل الألياف لتكون أكثر مقاومة للتجعد عند مستوى المجهري</li>
            <li><strong>معالجات النانو:</strong> جزيئات نانوية تضاف إلى الأقمشة تساعد على استعادة شكلها الأصلي</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">فوائد مقاومة التجعد في الزي الطبي</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>المظهر المهني:</strong> الحفاظ على المظهر الأنيق طوال المناوبة حتى بعد ساعات من العمل</li>
            <li><strong>توفير الوقت:</strong> تقليل الحاجة للكي المتكرر</li>
            <li><strong>المتانة:</strong> زيادة عمر الزي نتيجة تقليل الإجهاد على الألياف</li>
            <li><strong>سهولة التخزين:</strong> أقمشة يمكن طيها وتبقى محتفظة بمظهرها الجيد</li>
            <li><strong>توفير الطاقة:</strong> انخفاض الحاجة للكي يقلل استهلاك الطاقة</li>
          </ul>
        </div>

        <div className="my-10 overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4 text-primary-600">مقارنة بين تقنيات مقاومة التجعد في الزي الطبي</h3>
          <table className="min-w-full bg-white border border-gray-300 shadow-sm">
            <thead className="bg-primary-50">
              <tr>
                <th className="border border-gray-300 py-3 px-4 text-right">التقنية</th>
                <th className="border border-gray-300 py-3 px-4 text-right">آلية العمل</th>
                <th className="border border-gray-300 py-3 px-4 text-right">الميزات</th>
                <th className="border border-gray-300 py-3 px-4 text-right">العيوب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 py-2 px-4">معالجة الراتنج التقليدية</td>
                <td className="border border-gray-300 py-2 px-4">تثبيت الروابط بين الألياف</td>
                <td className="border border-gray-300 py-2 px-4">فعالة، تكلفة معقولة</td>
                <td className="border border-gray-300 py-2 px-4">قد تقلل من متانة القماش مع الوقت</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 py-2 px-4">ألياف مرنة مدمجة</td>
                <td className="border border-gray-300 py-2 px-4">استعادة الشكل عبر المرونة الذاتية</td>
                <td className="border border-gray-300 py-2 px-4">راحة أكبر، متانة عالية</td>
                <td className="border border-gray-300 py-2 px-4">تكلفة أعلى، قد تفقد فعاليتها مع كثرة الغسيل</td>
              </tr>
              <tr>
                <td className="border border-gray-300 py-2 px-4">تقنية النانو</td>
                <td className="border border-gray-300 py-2 px-4">جزيئات نانوية تحافظ على بنية النسيج</td>
                <td className="border border-gray-300 py-2 px-4">تأثير طويل الأمد، لا تؤثر على تنفس القماش</td>
                <td className="border border-gray-300 py-2 px-4">مرتفعة التكلفة، تقنية حديثة نسبياً</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 py-2 px-4">معالجة DMDHEU</td>
                <td className="border border-gray-300 py-2 px-4">تكوين روابط تساهمية بين جزيئات السليلوز</td>
                <td className="border border-gray-300 py-2 px-4">فعالية عالية، تدوم مع الغسيل المتكرر</td>
                <td className="border border-gray-300 py-2 px-4">تحرر القليل من الفورمالدهيد، أقل مرونة</td>
              </tr>
              <tr>
                <td className="border border-gray-300 py-2 px-4">نسج متقدم</td>
                <td className="border border-gray-300 py-2 px-4">بنية نسيجية خاصة تقاوم التجعد</td>
                <td className="border border-gray-300 py-2 px-4">لا تتطلب معالجات كيميائية، متانة عالية</td>
                <td className="border border-gray-300 py-2 px-4">قد تكون أقل راحة، محدودية في الخيارات</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">تقنيات مضادة للميكروبات</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">كيف تعمل الأقمشة المضادة للميكروبات؟</h3>
          <p>
            تستخدم تقنيات متعددة لمنح الأقمشة خصائص مضادة للميكروبات:
          </p>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>جزيئات الفضة النانوية:</strong> تطلق أيونات فضة تتداخل مع عمليات الأيض في البكتيريا والفطريات</li>
            <li><strong>مركبات الأمونيوم الرباعية:</strong> تخترق الغشاء الخلوي للميكروبات وتعطل وظائفها</li>
            <li><strong>أكاسيد المعادن:</strong> مثل أكسيد الزنك وأكسيد النحاس تمنع نمو الميكروبات</li>
            <li><strong>الكيتوسان:</strong> مستخلص طبيعي من قشور الروبيان والسلطعون له خصائص مضادة للبكتيريا</li>
            <li><strong>المعالجة بالسيليكون:</strong> تكون طبقة واقية تمنع البكتيريا من الالتصاق بالقماش</li>
            <li><strong>الأقمشة المعدلة جينياً:</strong> ألياف معدلة لتنتج ببتيدات مضادة للميكروبات</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">فوائد الأقمشة المضادة للميكروبات في بيئة المستشفيات</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>تقليل انتقال العدوى:</strong> خفض معدلات انتقال الميكروبات من وإلى الزي الطبي</li>
            <li><strong>تقليل الروائح:</strong> منع نمو البكتيريا المسببة للروائح الكريهة</li>
            <li><strong>إطالة فترات الاستخدام:</strong> الحفاظ على نظافة الزي لفترات أطول</li>
            <li><strong>تقليل الحاجة للغسيل المتكرر:</strong> توفير الماء والطاقة والمنظفات</li>
            <li><strong>حماية ذاتية:</strong> خاصة في حالات النقص في معدات الحماية الشخصية</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">دراسة حالة: فعالية الأقمشة المضادة للميكروبات</h3>
          <p className="text-amber-800">
            أجريت دراسة في مستشفى الملك فيصل التخصصي بالرياض عام 2021 لتقييم فعالية الزي الطبي المعالج بتقنية النانو فضة. أظهرت النتائج انخفاضاً بنسبة 64% في الحمل البكتيري على الزي بعد 12 ساعة من الاستخدام مقارنةً بالزي التقليدي. كما لوحظ انخفاض بنسبة 27% في معدلات العدوى المرتبطة بالرعاية الصحية في الأقسام التي استخدمت هذا النوع من الزي. احتفظ الزي بخصائصه المضادة للميكروبات بعد 50 دورة غسيل، مما يعزز جدواه الاقتصادية على المدى البعيد.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">تقنيات التنظيم الحراري والراحة المتقدمة</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">كيف تعمل تقنيات التنظيم الحراري؟</h3>
          <p>
            تقدم التقنيات الحديثة حلولاً مبتكرة للتحكم في درجة حرارة الجسم:
          </p>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>أقمشة PCM (مواد متغيرة الطور):</strong> تمتص الحرارة الزائدة عند ارتفاع حرارة الجسم وتطلقها عند انخفاضها</li>
            <li><strong>ألياف النانو عالية التهوية:</strong> تسمح بمرور الهواء مع منع مرور السوائل</li>
            <li><strong>أقمشة الفتائل المتقدمة:</strong> تنقل الرطوبة بعيداً عن الجسم بسرعة فائقة للحفاظ على جفاف البشرة</li>
            <li><strong>النسيج الهجيني:</strong> دمج ألياف مختلفة لتعزيز التهوية في المناطق عالية التعرق</li>
            <li><strong>تقنية 37.5°:</strong> جزيئات نشطة تستجيب لبخار الجسم وتعزز التبخر للحفاظ على درجة حرارة الجسم المثالية (37.5 درجة مئوية)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">فوائد تقنيات التنظيم الحراري في الزي الطبي</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>زيادة التركيز:</strong> تقليل الانشغال بعدم الراحة الحرارية يحسن التركيز أثناء العمل</li>
            <li><strong>تقليل الإجهاد الحراري:</strong> خاصة في المنشآت الصحية في المناطق الحارة بالمملكة</li>
            <li><strong>تقليل التعرق المفرط:</strong> يقلل من تلوث الزي وتكرار التغيير</li>
            <li><strong>تحسين الأداء:</strong> راحة أكبر أثناء المناوبات الطويلة</li>
            <li><strong>مناسبة للانتقال بين البيئات:</strong> أداء متوازن بين مناطق التكييف العالي والمناطق الأكثر دفئاً</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">تقنيات صديقة للبيئة ومستدامة</h2>
        
        <div className="mb-8">
          <p>
            تشهد صناعة الزي الطبي توجهاً متزايداً نحو الاستدامة:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>أقمشة قابلة للتحلل الحيوي:</strong> مصنوعة من ألياف طبيعية أو اصطناعية تتحلل بشكل آمن في البيئة</li>
            <li><strong>أقمشة معاد تدويرها:</strong> مصنوعة من زجاجات البلاستيك أو مخلفات النسيج المعاد تدويرها</li>
            <li><strong>معالجات خالية من الكيماويات الضارة:</strong> تقنيات صديقة للبيئة خالية من مركبات PFOA/PFOS</li>
            <li><strong>أقمشة موفرة للمياه:</strong> تتطلب ماء أقل في عمليات الغسيل والتنظيف</li>
            <li><strong>ألياف عضوية:</strong> قطن عضوي، حرير السوي، وألياف طبيعية أخرى مزروعة وفق معايير الاستدامة</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-xl font-semibold mb-4 text-green-700">التوازن بين البيئة والأداء</h3>
          <p className="text-green-700 mb-4">
            أصبحت الاستدامة البيئية معياراً أساسياً في اختيار الزي الطبي في المنشآت الصحية المتقدمة. تسعى المستشفيات السعودية، تماشياً مع رؤية 2030، إلى اعتماد منتجات صديقة للبيئة مع الحفاظ على معايير الأداء والسلامة. تشير الدراسات إلى أن الأقمشة المستدامة يمكن أن تحقق:
          </p>
          <ul className="list-disc mr-8 space-y-2 text-green-700">
            <li>انخفاضاً بنسبة 30% في استهلاك المياه عبر دورة حياة المنتج</li>
            <li>تقليل انبعاثات الكربون بنسبة تصل إلى 25% مقارنة بالأقمشة التقليدية</li>
            <li>تقليل النفايات الطبية غير القابلة للتحلل</li>
            <li>تأثيراً إيجابياً على صحة العاملين عبر تقليل التعرض للمواد الكيميائية الضارة</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الملابس الطبية الذكية والمستقبلية</h2>
        
        <div className="mb-8">
          <p>
            تتجه صناعة الزي الطبي نحو مستقبل مثير:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>أقمشة مع مستشعرات حيوية:</strong> تراقب الإشارات الحيوية للكادر الطبي مثل درجة الحرارة ومعدل التنفس</li>
            <li><strong>زي ذكي يراقب التعرض للمواد الضارة:</strong> يغير لونه للتحذير من التعرض للأشعة أو المواد الكيميائية</li>
            <li><strong>أقمشة تفاعلية:</strong> تتكيف مع البيئة المحيطة للتدفئة والتبريد الذاتي</li>
            <li><strong>شحن لاسلكي مدمج:</strong> نسيج يشحن الأجهزة الطبية والهواتف لاسلكياً</li>
            <li><strong>خاصية التعقيم الذاتي:</strong> أقمشة تستخدم تقنية الضوء المرئي لتعقيم نفسها باستمرار</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">اختيار الزي الطبي المناسب بناءً على التقنيات</h2>
        
        <div className="mb-8">
          <p>
            نصائح للمنشآت الصحية لاختيار الزي الطبي عالي التقنية:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>تحليل بيئة العمل:</strong> تحديد المخاطر والتحديات الرئيسية (تناثر السوائل، ارتفاع درجات الحرارة، التلوث الميكروبي)</li>
            <li><strong>الموازنة بين التقنيات:</strong> تحديد أولوية التقنيات بناءً على الاحتياجات الأكثر إلحاحاً</li>
            <li><strong>فحص المعايير والشهادات:</strong> التأكد من تلبية المنتج للمعايير العالمية (AATCC, ISO, ASTM)</li>
            <li><strong>مراعاة دورة الحياة:</strong> تقييم متانة التقنيات مع الغسيل المتكرر</li>
            <li><strong>اختبار ميداني:</strong> تجربة الزي على نطاق محدود قبل اعتماده بشكل واسع</li>
            <li><strong>تدريب العاملين:</strong> توعية الكوادر بالاستخدام الأمثل للزي عالي التقنية</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            تمثل التقنيات الحديثة في أقمشة الزي الطبي نقلة نوعية في مجال الرعاية الصحية، حيث تجمع بين الأمان والراحة والأداء العالي. في المملكة العربية السعودية، يمكن لهذه التقنيات أن تسهم بشكل كبير في تحسين بيئة العمل الصحي، خاصة مع التحديات المناخية والضغط المتزايد على القطاع الصحي.
          </p>
          <p className="mt-4">
            مع توجه المملكة نحو التحول الرقمي وتطبيق أحدث التقنيات في القطاع الصحي ضمن رؤية 2030، يمثل الاستثمار في الزي الطبي عالي التقنية خطوة منطقية نحو تعزيز كفاءة وسلامة الكوادر الصحية وتحسين تجربة المرضى. إن الجمع بين التقنيات المختلفة في تصميم متكامل للزي الطبي سيكون له تأثير إيجابي على جودة الخدمات الصحية ورفاهية العاملين في هذا القطاع الحيوي.
          </p>
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-bold mb-3">مقالات ذات صلة</h3>
          <ul className="list-disc pr-6">
            <li className="mb-2">
              <Link href="/healthcare-uniforms/tips-for-proper-medical-uniform-care" className="text-primary hover:underline">
                نصائح هامة للعناية بالزي الطبي وتعقيمه بشكل صحيح
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/healthcare-uniforms/quality-standards-for-medical-uniforms-in-saudi-ministry-of-health" className="text-primary hover:underline">
                معايير الجودة المعتمدة للزي الطبي في وزارة الصحة السعودية
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/healthcare-uniforms/practical-medical-uniform-design" className="text-primary hover:underline">
                تصميم زي طبي عملي: جيوب كافية وراحة للحركة أثناء المناوبات الطويلة
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default MedicalUniformFabricTechnologies; 