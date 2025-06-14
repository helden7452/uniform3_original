import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'الفرق بين زي الطيارين وزي طاقم الضيافة الجوية: دليل تفصيلي | خبراء الزي الموحد',
  description: 'دليل شامل يوضح الفروق الرئيسية بين زي الطيارين وزي طاقم الضيافة الجوية من حيث التصميم والرموز والألوان والوظائف العملية في شركات الطيران السعودية والخليجية',
};

export default function DifferencesBetweenPilotAndCabinCrewUniformsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الطيران', href: '/aviation-uniforms' },
          { label: 'الفرق بين زي الطيارين وزي طاقم الضيافة الجوية', href: '/aviation-uniforms/differences-between-pilot-and-cabin-crew-uniforms', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation-uniforms/pilot-vs-cabin-crew-uniforms.jpg"
            alt="مقارنة بين زي الطيارين وزي طاقم الضيافة الجوية"
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
              <span>16 دقيقة للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">الفرق بين زي الطيارين وزي طاقم الضيافة الجوية: دليل تفصيلي</h1>
          
          <div className="prose prose-lg max-w-none rtl">
            <p>
              يمثل الزي الموحد لطاقم الطائرة جزءاً أساسياً من هوية شركات الطيران وصورتها العامة. ورغم أن جميع العاملين على متن الطائرة يمثلون نفس الشركة، إلا أن هناك اختلافات جوهرية بين زي الطيارين (قائد الطائرة والطاقم الفني) وزي طاقم الضيافة الجوية (المضيفين والمضيفات). تعكس هذه الاختلافات ليس فقط التمايز في الأدوار الوظيفية، بل أيضاً الترتيبية المهنية والتقاليد العريقة في عالم الطيران. في هذا المقال، نستعرض تفاصيل الفروق بين هذين النوعين من الزي، خاصة في شركات الطيران السعودية والخليجية، والأسباب وراء هذه الاختلافات.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الأصول التاريخية: لماذا يختلف الزي؟</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الجذور التاريخية المختلفة</h3>
            <p>
              لفهم الاختلافات بين الزيين، يجب أولاً استيعاب جذورهما التاريخية المختلفة:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>زي الطيارين:</strong> مستوحى من الزي العسكري، حيث بدأ الطيران المدني على يد طيارين عسكريين سابقين</li>
              <li><strong>زي طاقم الضيافة:</strong> تطور من مفهوم الضيافة والخدمة في القطاع التجاري والفندقي</li>
              <li><strong>الترتيبية الهرمية:</strong> عكس الزي مبكراً التسلسل القيادي على متن الطائرة، مع تميز واضح لقائد الطائرة</li>
              <li><strong>الوظائف المختلفة:</strong> تم تصميم كل زي ليتناسب مع طبيعة المهام المنوطة بمرتديه</li>
              <li><strong>التقاليد والرمزية:</strong> ترسخت عناصر معينة في كل زي مع مرور الوقت لتصبح رموزاً عالمية للمهنة</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">تطور المفاهيم عبر التاريخ</h3>
              <p className="mb-0">
                في بدايات الطيران التجاري في الثلاثينيات، كان الطيارون يرتدون أزياء عسكرية تقريباً، بينما كانت المضيفات (اللواتي كن ممرضات في الأصل) يرتدين أزياء تشبه الزي الطبي. مع تطور الصناعة، تمايزت الأزياء لتعكس الأدوار المختلفة: القيادة والسلطة للطيارين، والضيافة والخدمة لطاقم المقصورة.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الفروق في التصميم والمظهر العام</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">زي الطيارين: الرسمية والسلطة</h3>
            <p>
              يتميز زي الطيارين بخصائص تعكس طبيعة دورهم القيادي:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الخصائص الأساسية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الألوان الداكنة:</strong> غالباً ما يكون أزرق داكن أو أسود، يعكس الجدية والاحترافية</li>
              <li><strong>القصة العسكرية:</strong> تصميم مستوحى من الزي العسكري مع ياقة مستقيمة وأزرار معدنية</li>
              <li><strong>الأكتاف المقواة:</strong> أكتاف بارزة تعطي مظهراً قوياً ومهيباً</li>
              <li><strong>الجيوب المتعددة:</strong> جيوب وظيفية لحمل الأدوات والوثائق الضرورية</li>
              <li><strong>الحزام الجلدي:</strong> حزام جلدي أسود أو بني داكن يكمل المظهر الرسمي</li>
              <li><strong>الأحذية الجلدية:</strong> أحذية جلدية سوداء لامعة بتصميم رسمي</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الإكسسوارات المميزة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>القبعة الرسمية:</strong> قبعة بحافة صلبة مع شعار الشركة</li>
              <li><strong>النظارات الطيران:</strong> نظارات شمسية بتصميم كلاسيكي</li>
              <li><strong>الساعة الاحترافية:</strong> ساعة يد بتصميم رياضي أو كلاسيكي</li>
              <li><strong>شارة الاسم:</strong> لوحة معدنية أو بلاستيكية بالاسم والرتبة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">زي طاقم الضيافة: الأناقة والود</h3>
            <p>
              يركز زي طاقم الضيافة على الأناقة والمظهر الودود:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الخصائص المميزة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الألوان المتنوعة:</strong> ألوان أكثر تنوعاً تعكس هوية الشركة (أزرق، أخضر، أحمر، بيج)</li>
              <li><strong>التصميم الأنيق:</strong> قصات عصرية تجمع بين الأناقة والعملية</li>
              <li><strong>الأقمشة المريحة:</strong> مواد أكثر مرونة تسمح بحرية الحركة</li>
              <li><strong>التفاصيل الأنثوية:</strong> للمضيفات، تصاميم تبرز الأنوثة مع الحفاظ على الاحترافية</li>
              <li><strong>الإكسسوارات المتنوعة:</strong> أوشحة، بروشات، وإكسسوارات تعكس ثقافة الشركة</li>
              <li><strong>الأحذية المريحة:</strong> أحذية مريحة مناسبة للوقوف والمشي لفترات طويلة</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">مقارنة سريعة بين الزيين</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">العنصر</th>
                      <th className="border border-gray-300 p-2 text-right">زي الطيارين</th>
                      <th className="border border-gray-300 p-2 text-right">زي طاقم الضيافة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">الألوان</td>
                      <td className="border border-gray-300 p-2">أزرق داكن، أسود، رمادي</td>
                      <td className="border border-gray-300 p-2">متنوعة حسب هوية الشركة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">التصميم</td>
                      <td className="border border-gray-300 p-2">عسكري، رسمي، مهيب</td>
                      <td className="border border-gray-300 p-2">أنيق، عصري، ودود</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">الأقمشة</td>
                      <td className="border border-gray-300 p-2">صوف، قطن مقوى</td>
                      <td className="border border-gray-300 p-2">مخاليط مرنة، أقمشة تقنية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">الإكسسوارات</td>
                      <td className="border border-gray-300 p-2">قبعة، نظارات، ساعة</td>
                      <td className="border border-gray-300 p-2">وشاح، بروش، حقيبة يد</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الرموز والشارات: لغة الرتب والتخصصات</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">نظام الرتب في زي الطيارين</h3>
            <p>
              يتبع زي الطيارين نظاماً هرمياً واضحاً في الرتب والشارات:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">شارات الأكتاف (الأجنحة)</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>قائد الطائرة (Captain):</strong> 4 خطوط ذهبية على الأكتاف وشارة أجنحة ذهبية</li>
              <li><strong>الطيار المساعد (First Officer):</strong> 3 خطوط ذهبية وشارة أجنحة فضية</li>
              <li><strong>طيار مساعد ثاني:</strong> خطان ذهبيان وشارة أجنحة أساسية</li>
              <li><strong>مهندس الطيران:</strong> شارات خاصة تميز التخصص الهندسي</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الرموز الإضافية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>شعار الشركة:</strong> على الصدر والقبعة والأزرار</li>
              <li><strong>علم الدولة:</strong> على الكم الأيمن في معظم الشركات</li>
              <li><strong>شارات الخبرة:</strong> رموز تشير لسنوات الخدمة أو التخصصات</li>
              <li><strong>أرقام الترخيص:</strong> في بعض الشركات، أرقام تشير لرخصة الطيران</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">نظام التمييز في زي طاقم الضيافة</h3>
            <p>
              رغم أن نظام الرتب أقل تعقيداً، إلا أن هناك تمييزات واضحة:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المناصب والتمييز</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>كبير المضيفين (Purser):</strong> شارات خاصة أو ألوان مميزة في الزي</li>
              <li><strong>مضيف أول:</strong> تفاصيل إضافية في التصميم أو الإكسسوارات</li>
              <li><strong>مضيف:</strong> الزي الأساسي للطاقم</li>
              <li><strong>متدرب:</strong> شارات أو ألوان تشير للوضع التدريبي</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">العناصر المميزة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الأوشحة:</strong> ألوان أو أنماط مختلفة حسب المنصب</li>
              <li><strong>البروشات:</strong> رموز تعكس الثقافة المحلية أو هوية الشركة</li>
              <li><strong>شارات الاسم:</strong> تصاميم مختلفة حسب المستوى الوظيفي</li>
              <li><strong>الإكسسوارات:</strong> حقائب يد، قفازات، أو قبعات خاصة</li>
            </ul>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">نظام الرتب في الخطوط السعودية</h3>
              <p className="mb-0">
                تتبع الخطوط الجوية العربية السعودية نظاماً متطوراً للرتب يعكس التراث العسكري والثقافة السعودية. قائد الطائرة يحمل 4 خطوط ذهبية مع شارة أجنحة ذهبية تحمل شعار النخلة والسيفين، بينما يتميز طاقم الضيافة بأوشحة خضراء وذهبية تعكس ألوان العلم السعودي. هذا النظام يجمع بين المعايير الدولية والهوية الوطنية بطريقة متناغمة.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الوظائف العملية والتصميم الوظيفي</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">متطلبات العمل لكل فئة</h3>
            <p>
              تختلف متطلبات العمل بين الطيارين وطاقم الضيافة، مما ينعكس على تصميم الزي:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">احتياجات الطيارين</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الجلوس لفترات طويلة:</strong> أقمشة مريحة لا تتجعد بسهولة</li>
              <li><strong>التحكم في الأدوات:</strong> أكمام لا تعيق حركة اليدين</li>
              <li><strong>حمل المعدات:</strong> جيوب متعددة للخرائط والأدوات</li>
              <li><strong>الظهور بمظهر قيادي:</strong> تصميم يعكس السلطة والثقة</li>
              <li><strong>التكيف مع درجات الحرارة:</strong> طبقات قابلة للإزالة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">احتياجات طاقم الضيافة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الحركة المستمرة:</strong> أقمشة مرنة تسمح بحرية الحركة</li>
              <li><strong>التفاعل مع الركاب:</strong> مظهر ودود ومرحب</li>
              <li><strong>حمل الأدوات الصغيرة:</strong> جيوب صغيرة للأقلام والأدوات</li>
              <li><strong>سهولة التنظيف:</strong> أقمشة مقاومة للبقع</li>
              <li><strong>الراحة في الوقوف:</strong> أحذية مريحة ومناسبة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التقنيات المستخدمة في كل زي</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">تقنيات زي الطيارين</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>أقمشة مقاومة للتجعد:</strong> للحفاظ على المظهر الرسمي</li>
              <li><strong>طبقات عازلة:</strong> للتكيف مع تغيرات درجة الحرارة</li>
              <li><strong>مواد مقاومة للحريق:</strong> للسلامة في حالات الطوارئ</li>
              <li><strong>تصميم مريح للجلوس:</strong> قصات خاصة للراحة أثناء الطيران</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">تقنيات زي طاقم الضيافة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>أقمشة مضادة للبكتيريا:</strong> للنظافة والصحة</li>
              <li><strong>مواد سريعة الجفاف:</strong> لسهولة العناية والتنظيف</li>
              <li><strong>تصميم مرن:</strong> للحركة السهلة في الممرات الضيقة</li>
              <li><strong>ألوان مقاومة للبهتان:</strong> للحفاظ على المظهر الجميل</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الاختلافات الثقافية والإقليمية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التكيف مع الثقافة المحلية</h3>
            <p>
              في منطقة الخليج العربي، تتكيف أزياء الطيران مع القيم الثقافية المحلية:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">في شركات الطيران السعودية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الألوان التراثية:</strong> استخدام الأخضر والذهبي المستوحى من العلم السعودي</li>
              <li><strong>العناصر الإسلامية:</strong> تصاميم تحترم القيم الإسلامية</li>
              <li><strong>التوازن بين الحداثة والتراث:</strong> دمج العناصر التقليدية بطريقة عصرية</li>
              <li><strong>الاحتشام:</strong> تصاميم محتشمة تناسب الثقافة المحلية</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">في شركات الطيران الخليجية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الفخامة والأناقة:</strong> تصاميم تعكس الثراء والرفاهية</li>
              <li><strong>الألوان الملكية:</strong> استخدام الذهبي والأزرق الملكي</li>
              <li><strong>التفاصيل الدقيقة:</strong> اهتمام بالتفاصيل الصغيرة والتشطيبات</li>
              <li><strong>الهوية الوطنية:</strong> عناصر تعكس هوية كل دولة خليجية</li>
            </ul>
            
            <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
              <h3 className="text-primary mb-3">مثال: طيران الإمارات</h3>
              <p className="mb-0">
                يُعتبر زي طيران الإمارات مثالاً ممتازاً على التوازن بين الأناقة العالمية والهوية المحلية. زي الطيارين يتميز بالأزرق الداكن مع تفاصيل ذهبية، بينما يبرز زي المضيفات باللون البيج مع الوشاح الأحمر والقبعة المميزة التي تعكس التراث العربي. هذا التصميم أصبح رمزاً معترفاً به عالمياً للضيافة العربية الفاخرة.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">معايير السلامة والأمان</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">متطلبات السلامة المشتركة</h3>
            <p>
              رغم الاختلافات، يجب أن يلتزم كلا الزيين بمعايير السلامة الصارمة:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة الحريق:</strong> جميع الأقمشة يجب أن تكون مقاومة للاشتعال</li>
              <li><strong>عدم وجود أجزاء حادة:</strong> تجنب الإكسسوارات التي قد تسبب إصابات</li>
              <li><strong>سهولة الحركة:</strong> تصاميم لا تعيق الحركة في حالات الطوارئ</li>
              <li><strong>الرؤية الواضحة:</strong> ألوان وتصاميم تسهل التعرف على الطاقم</li>
              <li><strong>المتانة:</strong> مواد قوية تتحمل الاستخدام المكثف</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">متطلبات خاصة لكل فئة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">متطلبات إضافية لزي الطيارين</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة الكهرباء الساكنة:</strong> لتجنب التداخل مع الأجهزة الإلكترونية</li>
              <li><strong>جيوب آمنة:</strong> لحفظ الوثائق المهمة والأدوات</li>
              <li><strong>أحذية مضادة للانزلاق:</strong> للأمان في قمرة القيادة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">متطلبات إضافية لزي طاقم الضيافة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة السوائل:</strong> لحماية من انسكاب المشروبات</li>
              <li><strong>أحذية مريحة وآمنة:</strong> للوقوف والمشي لفترات طويلة</li>
              <li><strong>إكسسوارات قابلة للإزالة:</strong> يمكن إزالتها بسرعة عند الحاجة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">التطورات المستقبلية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الاتجاهات الحديثة في التصميم</h3>
            <p>
              تشهد أزياء الطيران تطورات مستمرة تواكب التقدم التكنولوجي:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التقنيات الذكية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الأقمشة الذكية:</strong> مواد تتفاعل مع درجة الحرارة والرطوبة</li>
              <li><strong>أجهزة الاستشعار:</strong> دمج تقنيات مراقبة الصحة في الزي</li>
              <li><strong>الاتصالات المدمجة:</strong> تقنيات اتصال مدمجة في الزي</li>
              <li><strong>الطاقة المتجددة:</strong> أقمشة تولد الطاقة من الحركة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الاستدامة البيئية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المواد المعاد تدويرها:</strong> استخدام أقمشة من مواد معاد تدويرها</li>
              <li><strong>الإنتاج المستدام:</strong> عمليات تصنيع صديقة للبيئة</li>
              <li><strong>طول العمر:</strong> تصاميم تدوم لفترات أطول</li>
              <li><strong>القابلية للتدوير:</strong> أزياء قابلة للتدوير بالكامل</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التوقعات للمستقبل</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التخصيص الشخصي:</strong> أزياء قابلة للتخصيص حسب الاحتياجات الفردية</li>
              <li><strong>التكيف التلقائي:</strong> أزياء تتكيف تلقائياً مع الظروف البيئية</li>
              <li><strong>الواقع المعزز:</strong> دمج تقنيات الواقع المعزز في التدريب</li>
              <li><strong>الذكاء الاصطناعي:</strong> استخدام الذكاء الاصطناعي في تحسين التصاميم</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p>
              إن الفروق بين زي الطيارين وزي طاقم الضيافة الجوية تعكس التطور التاريخي لصناعة الطيران والأدوار المختلفة لكل فئة من الطاقم. هذه الاختلافات ليست مجرد تفاصيل جمالية، بل تحمل معاني عميقة تتعلق بالمسؤولية والسلطة والوظيفة.
            </p>
            <p>
              في المستقبل، نتوقع أن نشهد مزيداً من التطوير والابتكار في تصميم أزياء الطيران، مع الحفاظ على التمييز الأساسي بين الفئتين. التحدي الأكبر سيكون في الموازنة بين التقاليد العريقة والابتكارات التكنولوجية الحديثة.
            </p>
            <p>
              في خبراء الزي الموحد، نفهم أهمية هذه الفروق ونعمل على تصميم أزياء تحترم التقاليد وتلبي الاحتياجات العملية، مع دمج أحدث التقنيات والمواد لضمان الراحة والأمان والأناقة لجميع أفراد طاقم الطيران.
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