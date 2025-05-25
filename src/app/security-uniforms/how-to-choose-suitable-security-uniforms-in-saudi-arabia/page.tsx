import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'كيف تختار الزي الموحد المناسب لرجال الأمن في السعودية؟',
  description: 'دليل شامل لاختيار الزي الموحد المناسب لرجال الأمن في السعودية مع مراعاة المعايير المحلية، المتطلبات العملية، والظروف المناخية المختلفة',
};

export default function HowToChooseSuitableSecurityUniformsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي الأمن', href: '/security-uniforms' },
          { label: 'كيف تختار الزي الموحد المناسب لرجال الأمن في السعودية؟', href: '/security-uniforms/how-to-choose-suitable-security-uniforms-in-saudi-arabia', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image src="/images/security_uniforms/content/how-to-choose-suitable-security-uniforms-in-saudi-arabia/main.jpg" alt="كيف تختار الزي الموحد المناسب لرجال الأمن في السعودية" fill style={{ objectFit: 'cover' }} priority />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <Link href="/security-uniforms" className="text-accent hover:underline font-medium">
              زي الأمن
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{new Date().toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">•</span>
              <span>10 دقائق للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">كيف تختار الزي الموحد المناسب لرجال الأمن في السعودية؟</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              يلعب رجال الأمن دوراً حيوياً في حماية المنشآت والممتلكات والأفراد في المملكة العربية السعودية. وأحد العناصر الأساسية التي تؤثر على كفاءة وفعالية أداء رجال الأمن هو الزي الموحد الذي يرتدونه. فالزي المناسب ليس مجرد قطعة ملابس، بل هو أداة مهمة تساهم في تعزيز السلطة، الهيبة، والمهنية، كما تمكن رجال الأمن من أداء مهامهم بشكل أفضل.
            </p>
            
            <p className="mb-4">
              في هذا الدليل الشامل، سنستعرض الاعتبارات الرئيسية التي يجب مراعاتها عند اختيار الزي الموحد المناسب لرجال الأمن في السعودية، مع التركيز على المتطلبات الخاصة بالمناخ المحلي، المعايير التنظيمية، الراحة العملية، والمظهر المهني الذي يعزز الثقة والاحترام.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الاعتبارات التنظيمية والقانونية في السعودية</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. الالتزام بالمعايير المحلية</h3>
            <p className="mb-4">
              قبل اختيار زي الأمن، من الضروري فهم المتطلبات القانونية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>تصاريح وزارة الداخلية:</strong> يجب أن يتوافق الزي مع المتطلبات المحددة من الجهات المختصة بوزارة الداخلية السعودية</li>
              <li className="mb-2"><strong>التمييز عن الزي العسكري الرسمي:</strong> يجب أن يكون زي الأمن الخاص متميزاً بشكل واضح عن الزي العسكري الرسمي للجهات الأمنية الحكومية</li>
              <li className="mb-2"><strong>شعارات وشارات معتمدة:</strong> استخدام الشعارات والشارات المعتمدة فقط من الجهات المختصة</li>
              <li className="mb-2"><strong>بطاقات الهوية:</strong> توفير حاملات واضحة ومنظمة لبطاقات الهوية والتراخيص</li>
              <li className="mb-2"><strong>الالتزام بالمواصفات السعودية:</strong> اتباع المواصفات والمقاييس السعودية الخاصة بالأقمشة والملابس</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">معلومة مهمة</h3>
              <p className="mb-0">
                وفقًا للائحة التنفيذية لنظام الأمن والحماية الخاصة في المملكة العربية السعودية، يجب أن تلتزم شركات الأمن الخاصة باستخدام زي موحد معتمد من الجهات المختصة، ويمنع استخدام أزياء تشبه أزياء القوات العسكرية أو الأمنية النظامية. كما يجب أن يحمل الزي شعار الشركة بشكل واضح وأن يكون مصنوعًا من مواد ذات جودة عالية تناسب طبيعة العمل والظروف المناخية في المملكة.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. التوافق مع متطلبات المنشأة</h3>
            <p className="mb-4">
              يختلف زي الأمن حسب نوع المنشأة وطبيعة عملها:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>المنشآت الحكومية:</strong> غالبًا ما تتطلب زياً أكثر رسمية وتحفظاً</li>
              <li className="mb-2"><strong>المجمعات التجارية:</strong> تفضل زياً يجمع بين الأناقة والعملية، وقد يكون أقل صرامة</li>
              <li className="mb-2"><strong>المنشآت الصناعية:</strong> تتطلب زياً متيناً مع تركيز على عناصر السلامة المهنية</li>
              <li className="mb-2"><strong>البنوك والمؤسسات المالية:</strong> تفضل زياً رسمياً يعكس الثقة والاحترافية</li>
              <li className="mb-2"><strong>المستشفيات والمرافق الصحية:</strong> تحتاج لزي يجمع بين الهيبة والود، مع مراعاة الاعتبارات الصحية</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">اختيار المواد والأقمشة المناسبة للمناخ السعودي</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. مقاومة الحرارة المرتفعة</h3>
            <p className="mb-4">
              المناخ الحار في معظم مناطق المملكة يتطلب اعتبارات خاصة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>أقمشة خفيفة والوزن:</strong> اختيار أقمشة خفيفة تسمح بتنظيم درجة حرارة الجسم</li>
              <li className="mb-2"><strong>القطن المخلوط:</strong> مزيج من القطن (60%) والبوليستر (40%) يوفر توازناً بين الراحة والمتانة</li>
              <li className="mb-2"><strong>تقنية الأقمشة المتنفسة:</strong> الاستفادة من التقنيات الحديثة التي تسمح بتهوية أفضل</li>
              <li className="mb-2"><strong>اللون والامتصاص الحراري:</strong> الألوان الداكنة تمتص الحرارة، لكنها ضرورية لزي الأمن، لذا يجب موازنة ذلك بخفة الوزن والتهوية</li>
              <li className="mb-2"><strong>معالجة مضادة للأشعة فوق البنفسجية:</strong> حماية إضافية للعاملين في المواقع المكشوفة</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. التكيف مع التغيرات المناخية</h3>
            <p className="mb-4">
              تتنوع الظروف المناخية في المملكة بين المناطق وخلال فصول السنة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>الزي الصيفي والشتوي:</strong> توفير نسختين من الزي تناسب فصلي الصيف والشتاء</li>
              <li className="mb-2"><strong>طبقات قابلة للإضافة والإزالة:</strong> تصميم يسمح بإضافة طبقات أو إزالتها حسب درجة الحرارة</li>
              <li className="mb-2"><strong>معاطف للمناطق الباردة:</strong> معاطف إضافية للمناطق الجبلية وخلال فترات البرد</li>
              <li className="mb-2"><strong>مقاومة الرطوبة:</strong> أقمشة مقاومة للرطوبة للمناطق الساحلية مثل جدة والدمام</li>
              <li className="mb-2"><strong>الحماية من الرمال والغبار:</strong> تصميمات تحمي من العواصف الرملية في المناطق الصحراوية</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">جدول مقارنة الأقمشة المناسبة لزي الأمن في المناخ السعودي:</h4>
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2 text-right">نوع القماش</th>
                    <th className="border border-gray-300 p-2 text-right">المزايا</th>
                    <th className="border border-gray-300 p-2 text-right">العيوب</th>
                    <th className="border border-gray-300 p-2 text-right">مناسب لأي منطقة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">قطن 100%</td>
                    <td className="border border-gray-300 p-2">مريح، متنفس، امتصاص العرق</td>
                    <td className="border border-gray-300 p-2">يتجعد بسهولة، يحتاج كي متكرر</td>
                    <td className="border border-gray-300 p-2">المناطق الداخلية شديدة الحرارة</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">خليط قطن/بوليستر</td>
                    <td className="border border-gray-300 p-2">متانة أعلى، مقاومة للتجعد، سهولة العناية</td>
                    <td className="border border-gray-300 p-2">تهوية أقل من القطن النقي</td>
                    <td className="border border-gray-300 p-2">عموم المناطق السعودية</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">ريبستوب تكتيكي</td>
                    <td className="border border-gray-300 p-2">متانة عالية، مقاومة للتمزق، تجفيف سريع</td>
                    <td className="border border-gray-300 p-2">تكلفة أعلى، قد تكون أقل راحة</td>
                    <td className="border border-gray-300 p-2">المواقع الصناعية والخارجية</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">أقمشة بتقنية Coolmax</td>
                    <td className="border border-gray-300 p-2">تنظيم حرارة الجسم، تجفيف سريع</td>
                    <td className="border border-gray-300 p-2">تكلفة عالية، أقل رسمية في المظهر</td>
                    <td className="border border-gray-300 p-2">المناطق ذات الرطوبة العالية</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">تصميم وهيكلية الزي الأمني الفعال</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. العملية وحرية الحركة</h3>
            <p className="mb-4">
              يجب أن يسمح الزي بالأداء المثالي للمهام الأمنية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>قصة مريحة:</strong> فضفاضة بما يكفي للحركة دون أن تكون واسعة بشكل مفرط</li>
              <li className="mb-2"><strong>أكمام وبناطيل بقصات عملية:</strong> تسمح بالحركة السريعة والاستجابة للطوارئ</li>
              <li className="mb-2"><strong>مناطق مرنة:</strong> إضافة مناطق مرنة في الركبتين والمرفقين لسهولة الحركة</li>
              <li className="mb-2"><strong>خصر مرن أو قابل للتعديل:</strong> لضمان الراحة خلال المناوبات الطويلة</li>
              <li className="mb-2"><strong>تقليل الخياطات غير الضرورية:</strong> لتجنب الاحتكاك والضغط في مناطق الحركة</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. الجيوب الوظيفية والإكسسوارات</h3>
            <p className="mb-4">
              تعد الجيوب والإكسسوارات مهمة للغاية لفعالية أداء رجال الأمن:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>جيوب متعددة الأغراض:</strong> توفير جيوب كافية لحمل المعدات الضرورية</li>
              <li className="mb-2"><strong>حاملات معدات متخصصة:</strong> مثل حاملات الراديو، المصباح اليدوي، والمعدات الأمنية الأخرى</li>
              <li className="mb-2"><strong>حزام متين:</strong> يوفر دعماً إضافياً ويسمح بتعليق المعدات</li>
              <li className="mb-2"><strong>حامل بطاقة الهوية:</strong> موضع واضح ومناسب لبطاقة الهوية والتراخيص</li>
              <li className="mb-2"><strong>أماكن لشارات الرتبة:</strong> مواضع محددة لإظهار الرتبة والمسؤولية</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. المظهر المهيب والاحترافي</h3>
            <p className="mb-4">
              المظهر المهني يعزز السلطة والاحترام:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>ألوان داكنة تقليدية:</strong> الأزرق الداكن، الأسود، الرمادي الداكن تعزز الهيبة والسلطة</li>
              <li className="mb-2"><strong>قصة مستقيمة ومنظمة:</strong> تعكس الانضباط والمهنية</li>
              <li className="mb-2"><strong>شعار واضح:</strong> يظهر الانتماء المؤسسي والمسؤولية</li>
              <li className="mb-2"><strong>تفاصيل عسكرية محدودة:</strong> مثل جيوب مربعة وأكتاف مقواة لتعزيز المظهر الرسمي</li>
              <li className="mb-2"><strong>قابلية الحفاظ على المظهر المرتب:</strong> أقمشة تحافظ على شكلها حتى بعد ساعات طويلة من العمل</li>
            </ul>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">نصيحة من خبير</h3>
              <p className="mb-0">
                يقول العقيد متقاعد ناصر الغامدي، خبير في شؤون الأمن الخاص: "عند اختيار زي الأمن، لا تتجاهل أبداً عنصر الراحة للعاملين. فرجل الأمن الذي يعاني من عدم الراحة في زيه سيكون أقل تركيزاً وفعالية. أنصح بتجربة الزي في ظروف مشابهة لبيئة العمل قبل شراء كميات كبيرة، والاستماع لملاحظات العاملين الميدانيين الذين سيرتدونه. كما يجب الموازنة بين المظهر المهيب والوظائف العملية - فالزي المثالي هو الذي يحقق هذا التوازن بكفاءة."
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">اعتبارات تنوع الأدوار والفريق الأمني</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. الزي المناسب للمشرفين والقيادات</h3>
            <p className="mb-4">
              تمييز القيادات له دور مهم في هيكلية الفريق:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>عناصر تمييز الرتبة:</strong> شرائط، نجوم، أو شارات تدل على المستوى القيادي</li>
              <li className="mb-2"><strong>اختلافات طفيفة في التصميم:</strong> مثل لون مختلف للياقة أو الأكمام</li>
              <li className="mb-2"><strong>نوعية أعلى من الأقمشة:</strong> تعكس المستوى الوظيفي الأعلى</li>
              <li className="mb-2"><strong>قطع إضافية:</strong> مثل سترة رسمية للمناسبات الخاصة واللقاءات الرسمية</li>
              <li className="mb-2"><strong>إكسسوارات محددة:</strong> تميز المشرفين عن باقي أفراد الفريق</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. الزي المناسب للأمن النسائي</h3>
            <p className="mb-4">
              مع تزايد دور المرأة في القطاع الأمني بالمملكة، أصبح توفير زي مناسب للعنصر النسائي ضرورة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>الاحتشام مع العملية:</strong> تصميم يجمع بين الالتزام بمعايير الاحتشام والعملية</li>
              <li className="mb-2"><strong>قصات مريحة:</strong> تناسب طبيعة الجسم النسائي مع الحفاظ على حرية الحركة</li>
              <li className="mb-2"><strong>خيارات متعددة:</strong> توفير بدائل مثل بنطال أو تنورة طويلة حسب طبيعة العمل والتفضيل الشخصي</li>
              <li className="mb-2"><strong>حجاب أو غطاء رأس عملي:</strong> مصمم خصيصاً للاستخدام المهني مع ثبات جيد</li>
              <li className="mb-2"><strong>إكسسوارات مناسبة:</strong> حقائب وحاملات معدات مصممة لتناسب الاستخدام النسائي</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. التمييز بين الأدوار المختلفة</h3>
            <p className="mb-4">
              الفريق الأمني يشمل أدواراً متنوعة تتطلب تمييزاً في الزي:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>الأمن العام:</strong> زي موحد أساسي للمهام اليومية العادية</li>
              <li className="mb-2"><strong>فريق الاستجابة للطوارئ:</strong> زي تكتيكي يسمح بحركة أكبر والمزيد من المعدات</li>
              <li className="mb-2"><strong>المراقبة الإلكترونية:</strong> زي أكثر راحة للعمل المكتبي مع الحفاظ على الطابع الرسمي</li>
              <li className="mb-2"><strong>أمن الاستقبال:</strong> زي أكثر أناقة لكونهم واجهة المنشأة</li>
              <li className="mb-2"><strong>التمييز اللوني:</strong> استخدام اختلافات لونية بسيطة لتمييز الفرق المختلفة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">اعتبارات الجودة والتكلفة</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. الموازنة بين الجودة والميزانية</h3>
            <p className="mb-4">
              استثمار ذكي في زي الأمن يحقق وفورات على المدى الطويل:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>تكلفة دورة الحياة:</strong> التفكير في التكلفة الإجمالية بما يشمل التنظيف والصيانة والاستبدال</li>
              <li className="mb-2"><strong>التركيز على المناطق عالية التآكل:</strong> استثمار أكبر في المناطق الأكثر عرضة للتلف</li>
              <li className="mb-2"><strong>تنويع مستويات الجودة:</strong> جودة أعلى للقطع الأساسية المستخدمة يومياً</li>
              <li className="mb-2"><strong>الشراء بكميات كبيرة:</strong> الحصول على خصومات للطلبات الكبيرة مع المحافظة على المعايير</li>
              <li className="mb-2"><strong>التعاقد مع موردين موثوقين:</strong> بناء علاقات مع موردين يقدمون ضمانات على منتجاتهم</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. تدابير لإطالة عمر الزي</h3>
            <p className="mb-4">
              ممارسات تضمن الاستفادة القصوى من الاستثمار في الزي:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>إرشادات العناية المناسبة:</strong> تدريب الموظفين على الطرق الصحيحة للعناية بالزي</li>
              <li className="mb-2"><strong>توفير عدد كافٍ من القطع:</strong> ضمان وجود بديل لتجنب الاستخدام المفرط</li>
              <li className="mb-2"><strong>معالجات إضافية للحماية:</strong> مثل الطلاء المقاوم للماء والبقع</li>
              <li className="mb-2"><strong>خدمات غسيل متخصصة:</strong> التعاقد مع خدمات غسيل تفهم متطلبات زي الأمن</li>
              <li className="mb-2"><strong>الإصلاح السريع:</strong> معالجة التلف البسيط قبل أن يتفاقم</li>
            </ul>
            
            <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
              <h3 className="text-primary mb-3">نصائح عملية للاختيار</h3>
              <ul className="mb-0 list-disc pr-4">
                <li>اطلب عينات من الموردين واختبرها في ظروف عمل حقيقية قبل الشراء بكميات كبيرة.</li>
                <li>أشرك العاملين في عملية الاختيار - فهم من سيرتدون الزي ويعرفون احتياجاتهم العملية.</li>
                <li>ضع في اعتبارك المناخ المحلي للمنطقة المحددة التي سيعمل فيها فريق الأمن.</li>
                <li>تأكد من وجود خيارات للمقاسات المختلفة، وليس فقط المقاسات "القياسية".</li>
                <li>خصص ميزانية للتحديث الدوري للزي - عادةً كل سنتين - للحفاظ على المظهر المهني.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الخلاصة</h2>
            <p className="mb-4">
              اختيار الزي المناسب لرجال الأمن في المملكة العربية السعودية هو قرار استراتيجي يؤثر على كفاءة العمل، صورة المؤسسة، وروح الفريق. يتطلب هذا القرار موازنة دقيقة بين عدة عوامل: المتطلبات القانونية والتنظيمية، الملاءمة للمناخ السعودي، العملية وحرية الحركة، المظهر المهني، ومناسبته للأدوار المختلفة.
            </p>
            
            <p className="mb-4">
              مع التطورات المستمرة في مجال الأمن وتقنيات المنسوجات، ومع التوجهات الحديثة التي تفرضها رؤية 2030، أصبح من الممكن اليوم تصميم زي أمني يلبي جميع هذه المتطلبات دون تنازلات كبيرة، مما يسهم في تعزيز مستوى الخدمات الأمنية في المملكة.
            </p>
            
            <p className="mb-4">
              في النهاية، فإن الزي المثالي لرجال الأمن هو ذلك الذي يجعلهم فخورين بارتدائه، مرتاحين أثناء أداء واجباتهم، وقادرين على تمثيل مؤسساتهم بالشكل الأمثل، مما ينعكس إيجاباً على المنظومة الأمنية ككل.
            </p>
          </div>
          
          {/* Tags Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3">الوسوم:</h3>
            <div className="flex flex-wrap gap-2">
              {['زي الأمن', 'يونيفورم الأمن', 'شركات الأمن السعودية', 'السعودية', 'زي موحد', 'حراس الأمن'].map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tag}`}
                  className="inline-block bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Share Section */}
          <div className="mt-8 flex justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">مشاركة المقال</h3>
              <div className="flex justify-center space-x-reverse space-x-4">
                <button className="bg-[#3b5998] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                  {/* Facebook icon would go here */}
                </button>
                <button className="bg-[#1da1f2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon would go here */}
                </button>
                <button className="bg-[#0e76a8] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                  {/* LinkedIn icon would go here */}
                </button>
                <button className="bg-[#25D366] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">WhatsApp</span>
                  {/* WhatsApp icon would go here */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 