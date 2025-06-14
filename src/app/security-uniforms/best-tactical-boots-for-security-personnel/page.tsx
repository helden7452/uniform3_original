import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'أفضل أنواع الأحذية التكتيكية (Tactical Boots) لرجال الأمن | خبراء الزي الموحد',
  description: 'دليل شامل لاختيار أفضل الأحذية التكتيكية لرجال الأمن، مع استعراض المواصفات المهمة، الأنواع المناسبة للمناخ السعودي، والعلامات التجارية الموصى بها',
};

export default function TacticalBootsSecurityPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الأمن', href: '/security-uniforms' },
          { label: 'أفضل أنواع الأحذية التكتيكية لرجال الأمن', href: '/security-uniforms/best-tactical-boots-for-security-personnel', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/security_uniforms/content/best-tactical-boots-for-security-personnel/main.jpg"
            alt="أحذية تكتيكية لرجال الأمن"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <Link href="/security-uniforms" className="text-accent hover:underline font-medium">
              زي قطاع الأمن
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{new Date().toLocaleDateString('ar-SA-u-ca-gregory', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">•</span>
              <span>10 دقائق للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">أفضل أنواع الأحذية التكتيكية (Tactical Boots) لرجال الأمن</h1>
          
          <div className="prose prose-lg max-w-none rtl">
            <p>
              تُعد الأحذية التكتيكية جزءاً أساسياً لا يُستهان به من زي رجال الأمن، حيث تؤثر بشكل مباشر على أدائهم وراحتهم وسلامتهم أثناء نوبات العمل الطويلة. في المملكة العربية السعودية، تكتسب هذه الأحذية أهمية خاصة نظراً للظروف المناخية المتنوعة والبيئات المختلفة التي يعمل فيها أفراد الأمن. في هذا المقال، نستعرض أفضل أنواع الأحذية التكتيكية لرجال الأمن، مع التركيز على المواصفات المناسبة للاستخدام في المملكة، والعلامات التجارية الموصى بها، وكيفية اختيار الحذاء المناسب لاحتياجاتك المهنية.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">أهمية الأحذية التكتيكية لرجال الأمن</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">لماذا تعتبر الأحذية التكتيكية ضرورة وليست كماليات؟</h3>
            <p>
              قبل استعراض الأنواع والخصائص، من المهم فهم الأسباب التي تجعل الاستثمار في أحذية تكتيكية عالية الجودة أمراً ضرورياً:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الوقوف والمشي لفترات طويلة:</strong> يقضي رجال الأمن ساعات طويلة واقفين أو متنقلين بين المواقع</li>
              <li><strong>الحماية من المخاطر المهنية:</strong> تقي من إصابات الأقدام الناتجة عن الصدمات والمخاطر المحتملة</li>
              <li><strong>الدعم والاستقرار:</strong> توفر دعماً إضافياً للكاحل والقدم خلال الحركات السريعة والطارئة</li>
              <li><strong>الملاءمة للظروف المناخية:</strong> حماية من الحرارة الشديدة أو البرد أو الرطوبة حسب موقع العمل</li>
              <li><strong>المتانة والاقتصادية:</strong> تدوم لفترات أطول مما يوفر في التكاليف على المدى الطويل</li>
              <li><strong>المظهر المهني:</strong> تعزز من الصورة المهنية والثقة بالنفس</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">إحصائية مهمة</h3>
              <p className="mb-0">
                تشير دراسة أجرتها الجمعية السعودية للسلامة المهنية في عام 2022 إلى أن 68% من إصابات القدم في مجال الأمن والحراسة كان يمكن تجنبها باستخدام أحذية تكتيكية مناسبة. كما أظهرت الدراسة أن رجال الأمن الذين يرتدون أحذية تكتيكية عالية الجودة يبلغون عن مستوى راحة أعلى بنسبة 45% مقارنة بمن يستخدمون أحذية عادية، مما ينعكس إيجابياً على أدائهم وتركيزهم أثناء العمل.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المواصفات الأساسية للأحذية التكتيكية المثالية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. مقاومة الانزلاق والثبات</h3>
            <p>
              تعتبر مقاومة الانزلاق من أهم المواصفات في الأحذية التكتيكية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>نعل مطاطي متخصص:</strong> مصنوع من مواد عالية الاحتكاك تمنع الانزلاق على الأسطح المختلفة</li>
              <li><strong>نمط النعل:</strong> تصميم خاص بأخاديد عميقة لتحسين الثبات على الأرضيات الرطبة والجافة</li>
              <li><strong>اختبارات المقاومة:</strong> يجب أن تحمل شهادات اختبار مقاومة الانزلاق وفقاً للمعايير الدولية</li>
              <li><strong>المرونة:</strong> نعل مرن يتكيف مع حركة القدم الطبيعية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2. الحماية والأمان</h3>
            <p>
              الحماية هي الوظيفة الأساسية للأحذية التكتيكية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقدمة معززة:</strong> حماية أصابع القدم من الصدمات والأجسام الساقطة</li>
              <li><strong>دعم الكاحل:</strong> تصميم عالي يوفر دعماً إضافياً للكاحل ويقلل من خطر الالتواء</li>
              <li><strong>مقاومة الثقب:</strong> نعل مقاوم للثقب يحمي من الأجسام الحادة</li>
              <li><strong>مقاومة المواد الكيميائية:</strong> حماية من المواد الكيميائية والزيوت</li>
              <li><strong>العزل الكهربائي:</strong> حماية من التيار الكهربائي في بيئات العمل الخطرة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3. الراحة والدعم</h3>
            <p>
              الراحة ضرورية للعمل لساعات طويلة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>نظام التبطين:</strong> بطانة داخلية مريحة تمتص الصدمات وتوفر الراحة</li>
              <li><strong>دعم القوس:</strong> دعم مدمج لقوس القدم يقلل من التعب</li>
              <li><strong>امتصاص الصدمات:</strong> تقنيات متقدمة لامتصاص الصدمات في الكعب ومقدمة القدم</li>
              <li><strong>التهوية:</strong> نظام تهوية يحافظ على جفاف القدم ويمنع تراكم الرطوبة</li>
              <li><strong>المقاس المناسب:</strong> تصميم يراعي شكل القدم الطبيعي ويوفر مساحة كافية للحركة</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">مقارنة بين أنواع الحماية في الأحذية التكتيكية</h4>
              <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">نوع الحماية</th>
                      <th className="border border-gray-300 p-2 text-right">المواد المستخدمة</th>
                      <th className="border border-gray-300 p-2 text-right">مستوى الحماية</th>
                      <th className="border border-gray-300 p-2 text-right">البيئة المناسبة</th>
                      <th className="border border-gray-300 p-2 text-right">الوزن الإضافي</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-300 p-2">مقدمة فولاذية</td>
                      <td className="border border-gray-300 p-2">فولاذ مقاوم</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">المواقع الصناعية الثقيلة</td>
                      <td className="border border-gray-300 p-2">متوسط إلى عالي</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">مقدمة مركبة</td>
                      <td className="border border-gray-300 p-2">ألياف كربونية</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                      <td className="border border-gray-300 p-2">الأمن العام والخاص</td>
                      <td className="border border-gray-300 p-2">منخفض</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">حماية أساسية</td>
                      <td className="border border-gray-300 p-2">جلد مقوى</td>
                      <td className="border border-gray-300 p-2">متوسط</td>
                      <td className="border border-gray-300 p-2">المكاتب والمراكز التجارية</td>
                      <td className="border border-gray-300 p-2">منخفض جداً</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">أفضل أنواع الأحذية التكتيكية للمناخ السعودي</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. الأحذية المقاومة للحرارة</h3>
            <p>
              في المناخ الحار السائد في معظم أنحاء المملكة، تصبح مقاومة الحرارة أولوية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>نعل عازل للحرارة:</strong> يمنع انتقال الحرارة من الأسطح الساخنة إلى القدم</li>
              <li><strong>مواد قابلة للتنفس:</strong> جلد مثقب أو أقمشة تقنية تسمح بتدوير الهواء</li>
              <li><strong>بطانة ماصة للرطوبة:</strong> تحافظ على جفاف القدم وتمنع تكون البكتيريا</li>
              <li><strong>ألوان فاتحة:</strong> تعكس أشعة الشمس وتقلل من امتصاص الحرارة</li>
              <li><strong>تصميم مفتوح نسبياً:</strong> يسمح بتدفق الهواء مع الحفاظ على الحماية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2. الأحذية المقاومة للماء والرطوبة</h3>
            <p>
              للمناطق التي تشهد هطول أمطار أو رطوبة عالية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>غشاء مقاوم للماء:</strong> تقنيات مثل Gore-Tex تمنع دخول الماء مع السماح بالتهوية</li>
              <li><strong>خياطة محكمة:</strong> خياطة مقاومة للماء في جميع الوصلات</li>
              <li><strong>مواد سريعة الجفاف:</strong> تجف بسرعة بعد التعرض للرطوبة</li>
              <li><strong>نعل مقاوم للانزلاق:</strong> أداء ممتاز على الأسطح الرطبة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3. الأحذية الصحراوية المتخصصة</h3>
            <p>
              مصممة خصيصاً للبيئات الصحراوية والرملية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>حماية من الرمال:</strong> تصميم يمنع دخول الرمال والغبار</li>
              <li><strong>مقاومة التآكل:</strong> مواد تقاوم التآكل الناتج عن الرمال الخشنة</li>
              <li><strong>تصريف سريع:</strong> نظام تصريف للرمال التي قد تدخل الحذاء</li>
              <li><strong>ثبات على الرمال:</strong> نعل مصمم خصيصاً للثبات على الأسطح الرملية</li>
            </ul>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">تجربة عملية: أمن الحرمين الشريفين</h3>
              <p className="mb-0">
                تستخدم قوات أمن الحرمين الشريفين أحذية تكتيكية مطورة خصيصاً للتعامل مع التحديات الفريدة لهذه البيئة المقدسة. تتميز هذه الأحذية بنعل صامت يقلل من الضوضاء أثناء الحركة احتراماً لقدسية المكان، ومواد مقاومة للحرارة للتعامل مع الأرضيات الساخنة، ونظام تهوية متقدم للراحة أثناء الوقوف لساعات طويلة. كما تتضمن تقنيات مضادة للبكتيريا والروائح، وتصميماً يسهل الوضوء والصلاة. هذا المثال يوضح أهمية تخصيص الأحذية التكتيكية لتناسب البيئة والثقافة المحلية.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">أفضل العلامات التجارية للأحذية التكتيكية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">العلامات التجارية العالمية الرائدة</h3>
            <p>
              هناك عدة علامات تجارية معترف بها عالمياً في مجال الأحذية التكتيكية:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">1. Bates</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التخصص:</strong> أحذية عسكرية وأمنية منذ أكثر من 130 عاماً</li>
              <li><strong>المميزات:</strong> متانة عالية، راحة استثنائية، تقنيات متقدمة للتهوية</li>
              <li><strong>الموديلات المناسبة للسعودية:</strong> Ultra-Lites للمناخ الحار، GX-8 للاستخدام العام</li>
              <li><strong>النطاق السعري:</strong> 400-800 ريال سعودي</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">2. 5.11 Tactical</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التخصص:</strong> معدات تكتيكية شاملة بما في ذلك الأحذية</li>
              <li><strong>المميزات:</strong> تصميم عصري، تقنيات حديثة، مقاومة ممتازة للتآكل</li>
              <li><strong>الموديلات المناسبة:</strong> A.T.A.C. 2.0 للاستخدام الشامل، Speed 3.0 للحركة السريعة</li>
              <li><strong>النطاق السعري:</strong> 350-700 ريال سعودي</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">3. Magnum</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التخصص:</strong> أحذية أمنية وعسكرية بريطانية الأصل</li>
              <li><strong>المميزات:</strong> خفة الوزن، مقاومة الماء، تصميم أنيق</li>
              <li><strong>الموديلات المناسبة:</strong> Viper Pro للمناخ الحار، Elite Spider للاستخدام المتعدد</li>
              <li><strong>النطاق السعري:</strong> 300-600 ريال سعودي</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">4. Danner</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التخصص:</strong> أحذية عالية الجودة مصنوعة يدوياً</li>
              <li><strong>المميزات:</strong> جودة صناعة استثنائية، متانة طويلة المدى، راحة فائقة</li>
              <li><strong>الموديلات المناسبة:</strong> Tachyon للخفة والسرعة، Kinetic للراحة القصوى</li>
              <li><strong>النطاق السعري:</strong> 600-1200 ريال سعودي</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">العلامات التجارية المحلية والإقليمية</h3>
            <p>
              هناك أيضاً خيارات محلية وإقليمية تقدم قيمة جيدة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>Safety Jogger:</strong> علامة تجارية بلجيكية متوفرة محلياً، تركز على السلامة المهنية</li>
              <li><strong>Honeywell:</strong> أحذية أمان صناعية مناسبة للاستخدام الأمني</li>
              <li><strong>Delta Plus:</strong> علامة فرنسية تقدم حلول أمان شاملة</li>
              <li><strong>الخيارات المحلية:</strong> عدة مصانع محلية تنتج أحذية أمان بمواصفات جيدة وأسعار تنافسية</li>
            </ul>
            
            <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
              <h3 className="text-primary mb-3">نصائح لاختيار العلامة التجارية المناسبة</h3>
              <ul className="mb-0">
                <li className="mb-2">✓ ابحث عن العلامات التي تقدم ضمان طويل المدى</li>
                <li className="mb-2">✓ تأكد من توفر قطع الغيار والصيانة محلياً</li>
                <li className="mb-2">✓ اقرأ تقييمات المستخدمين في ظروف مشابهة لظروف عملك</li>
                <li className="mb-2">✓ جرب الحذاء قبل الشراء إن أمكن</li>
                <li className="mb-2">✓ تأكد من حصول العلامة على شهادات الجودة والسلامة</li>
                <li className="mb-0">✓ قارن بين الأسعار والمواصفات لتحقيق أفضل قيمة</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">كيفية اختيار الحذاء التكتيكي المناسب</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. تحديد احتياجاتك المهنية</h3>
            <p>
              قبل الشراء، حدد بوضوح طبيعة عملك ومتطلباته:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>نوع البيئة:</strong> داخلية، خارجية، صناعية، تجارية، صحراوية</li>
              <li><strong>مدة الاستخدام:</strong> ساعات العمل اليومية ومدى تكرار الاستخدام</li>
              <li><strong>نوع النشاط:</strong> وقوف ثابت، مشي كثير، جري، تسلق</li>
              <li><strong>المخاطر المحتملة:</strong> أجسام ساقطة، مواد كيميائية، أسطح زلقة</li>
              <li><strong>متطلبات خاصة:</strong> مقاومة المعادن، عزل كهربائي، صمت في الحركة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2. أخذ المقاسات بدقة</h3>
            <p>
              المقاس الصحيح أساسي للراحة والأداء:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>القياس في المساء:</strong> القدم تتمدد خلال اليوم، فالقياس المسائي أدق</li>
              <li><strong>ارتداء الجوارب المناسبة:</strong> استخدم نفس نوع الجوارب التي ستستخدمها في العمل</li>
              <li><strong>قياس كلا القدمين:</strong> غالباً ما تختلف القدمان في الحجم قليلاً</li>
              <li><strong>ترك مساحة للحركة:</strong> يجب أن تكون هناك مساحة صغيرة (حوالي 1 سم) أمام أطول إصبع</li>
              <li><strong>التأكد من العرض:</strong> الحذاء يجب أن يكون مريحاً من ناحية العرض أيضاً</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3. اختبار الراحة والملاءمة</h3>
            <p>
              لا تعتمد على المقاس فقط، بل اختبر الحذاء عملياً:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المشي لمسافة قصيرة:</strong> امش في المتجر لعدة دقائق</li>
              <li><strong>اختبار الدعم:</strong> تأكد من دعم الكاحل والقوس</li>
              <li><strong>فحص نقاط الضغط:</strong> لا يجب أن تشعر بضغط مؤلم في أي منطقة</li>
              <li><strong>اختبار المرونة:</strong> تأكد من مرونة النعل وسهولة الحركة</li>
              <li><strong>التجربة بالجوارب المناسبة:</strong> جرب الحذاء مع الجوارب التي ستستخدمها</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">العناية والصيانة للأحذية التكتيكية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الصيانة اليومية</h3>
            <p>
              للحفاظ على الأحذية في أفضل حالة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التنظيف اليومي:</strong> إزالة الأوساخ والغبار بفرشاة ناعمة</li>
              <li><strong>التجفيف الطبيعي:</strong> ترك الأحذية تجف طبيعياً بعيداً عن الحرارة المباشرة</li>
              <li><strong>استخدام حشوات ماصة:</strong> لامتصاص الرطوبة والروائح</li>
              <li><strong>التناوب:</strong> استخدام أكثر من زوج للسماح بالتجفيف الكامل</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الصيانة الدورية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التلميع والترطيب:</strong> استخدام منتجات مناسبة لنوع الجلد</li>
              <li><strong>فحص النعل:</strong> مراقبة التآكل واستبدال النعل عند الحاجة</li>
              <li><strong>فحص الخياطة:</strong> التأكد من سلامة الخياطة وإصلاح أي تلف فوراً</li>
              <li><strong>استبدال الحشوات:</strong> تغيير الحشوات الداخلية دورياً</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p>
              اختيار الأحذية التكتيكية المناسبة استثمار مهم في راحة وسلامة وأداء رجال الأمن. في المملكة العربية السعودية، حيث تتنوع البيئات والظروف المناخية، يصبح هذا الاختيار أكثر أهمية. من خلال فهم المواصفات المطلوبة، ومعرفة أفضل العلامات التجارية، واتباع إرشادات الاختيار والصيانة الصحيحة، يمكن لرجال الأمن الحصول على أحذية تدعم أداءهم المهني وتحافظ على صحة أقدامهم.
            </p>
            <p>
              تذكر أن الحذاء التكتيكي الجيد ليس مجرد معدة حماية، بل شريك في العمل يرافقك لساعات طويلة ويؤثر على قدرتك على أداء مهامك بكفاءة. لذا، استثمر في جودة عالية واختر بعناية لتحصل على أفضل عائد من استثمارك.
            </p>
            <p>
              في خبراء الزي الموحد، نقدم مجموعة متنوعة من أفضل الأحذية التكتيكية من العلامات التجارية الرائدة عالمياً، مع خدمات استشارية متخصصة لمساعدتك في اختيار الحذاء المثالي لاحتياجاتك المهنية في المملكة العربية السعودية.
            </p>
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