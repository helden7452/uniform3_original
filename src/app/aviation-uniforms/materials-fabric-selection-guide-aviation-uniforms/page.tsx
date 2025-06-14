import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'دليل اختيار المواد والأقمشة لأزياء الطيران: معايير الجودة والأداء | خبراء الزي الموحد',
  description: 'دليل شامل لاختيار أفضل الأقمشة والمواد لتصنيع أزياء الطيران، مع مراعاة متطلبات السلامة والراحة والمتانة والمناخ في المملكة العربية السعودية',
};

export default function MaterialsFabricSelectionGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الطيران', href: '/aviation-uniforms' },
          { label: 'دليل اختيار المواد والأقمشة', href: '/aviation-uniforms/materials-fabric-selection-guide-aviation-uniforms', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation-uniforms/materials-fabric-guide.jpg"
            alt="دليل اختيار المواد والأقمشة لأزياء الطيران"
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
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">دليل اختيار المواد والأقمشة لأزياء الطيران: معايير الجودة والأداء</h1>
          
          <div className="prose prose-lg max-w-none rtl">
            <p>
              يُعتبر اختيار المواد والأقمشة المناسبة لأزياء الطيران من أهم العوامل التي تحدد جودة المنتج النهائي وأداءه في بيئة العمل المتطلبة. هذا الاختيار لا يؤثر فقط على مظهر الزي وراحة مرتديه، بل يلعب دوراً حاسماً في السلامة والحماية والكفاءة التشغيلية. في هذا الدليل الشامل، نستعرض أهم المعايير والاعتبارات التي يجب مراعاتها عند اختيار الأقمشة والمواد لأزياء الطيران، مع التركيز على المتطلبات الخاصة بالمناخ السعودي والمعايير الدولية.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المعايير الأساسية لاختيار أقمشة الطيران</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. معايير السلامة والحماية</h3>
            <p>
              السلامة هي الأولوية القصوى في اختيار أقمشة أزياء الطيران:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة الحريق:</strong> يجب أن تكون الأقمشة مقاومة للاشتعال وفقاً لمعيار FAR 25.853</li>
              <li><strong>الانطفاء الذاتي:</strong> قدرة القماش على إطفاء نفسه خلال 15 ثانية من إزالة مصدر اللهب</li>
              <li><strong>عدم السمية:</strong> عدم إطلاق غازات سامة عند التعرض للحرارة العالية</li>
              <li><strong>مقاومة الانصهار:</strong> عدم الالتصاق بالجلد عند التعرض للحرارة</li>
              <li><strong>كثافة دخان منخفضة:</strong> إنتاج الحد الأدنى من الدخان عند الاحتراق</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2. الراحة والأداء الوظيفي</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التهوية:</strong> نفاذية الهواء لضمان الراحة أثناء العمل</li>
              <li><strong>إدارة الرطوبة:</strong> قدرة على امتصاص وتبخير العرق بسرعة</li>
              <li><strong>المرونة:</strong> حرية الحركة دون قيود أو تمزق</li>
              <li><strong>خفة الوزن:</strong> تقليل الإجهاد على الطاقم أثناء العمل الطويل</li>
              <li><strong>مقاومة التجعد:</strong> الحفاظ على المظهر الأنيق طوال اليوم</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3. المتانة وطول العمر</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة التآكل:</strong> تحمل الاستخدام المكثف والاحتكاك</li>
              <li><strong>ثبات الألوان:</strong> مقاومة البهتان والتغير اللوني</li>
              <li><strong>مقاومة التمزق:</strong> قوة شد عالية تمنع التمزق</li>
              <li><strong>استقرار الأبعاد:</strong> عدم الانكماش أو التمدد بعد الغسيل</li>
              <li><strong>مقاومة الكيماويات:</strong> تحمل المواد المنظفة والمطهرة</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">اختبارات الجودة الأساسية</h3>
              <p className="mb-0">
                تخضع جميع الأقمشة المستخدمة في أزياء الطيران لسلسلة من الاختبارات الصارمة تشمل: اختبار الاحتراق العمودي (FAR 25.853)، اختبار قوة الشد (ISO 13934-1)، اختبار ثبات الألوان (ISO 105-C06)، واختبار مقاومة التآكل (ISO 12947-2). هذه الاختبارات تضمن أن الأقمشة تلبي أعلى معايير الجودة والسلامة المطلوبة في صناعة الطيران.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">أنواع الأقمشة المستخدمة في أزياء الطيران</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الأقمشة الطبيعية المعالجة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">القطن المعالج</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المزايا:</strong> راحة طبيعية، تهوية جيدة، سهولة العناية</li>
              <li><strong>المعالجات:</strong> مقاومة الحريق، مقاومة التجعد، مقاومة البقع</li>
              <li><strong>الاستخدامات:</strong> القمصان الداخلية، الجوارب، بعض قطع الزي الصيفي</li>
              <li><strong>النسب المثلى:</strong> 60-80% قطن مع ألياف صناعية للتقوية</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الصوف المعالج</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المزايا:</strong> عزل حراري ممتاز، مقاومة طبيعية للحريق، أناقة</li>
              <li><strong>المعالجات:</strong> مقاومة الانكماش، مقاومة العث، سهولة العناية</li>
              <li><strong>الاستخدامات:</strong> البدلات الرسمية، المعاطف، الزي الشتوي</li>
              <li><strong>النسب المثلى:</strong> 70-90% صوف مع ألياف مرنة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الأقمشة الصناعية المتطورة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">البوليستر عالي الأداء</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المزايا:</strong> مقاومة التجعد، سرعة الجفاف، ثبات الألوان</li>
              <li><strong>التقنيات:</strong> ألياف مجوفة للتهوية، معالجة مضادة للبكتيريا</li>
              <li><strong>الاستخدامات:</strong> القمصان، البناطيل، الجاكيتات الخفيفة</li>
              <li><strong>المواصفات:</strong> وزن 150-250 جم/م²، نفاذية هواء عالية</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">النايلون المقوى</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المزايا:</strong> قوة شد عالية، مقاومة التآكل، مرونة ممتازة</li>
              <li><strong>التطبيقات:</strong> المناطق عالية الإجهاد، الجيوب، التعزيزات</li>
              <li><strong>المعالجات:</strong> طلاء مقاوم للماء، معالجة مضادة للكهرباء الساكنة</li>
              <li><strong>النسب:</strong> 10-30% في المخاليط لتحسين المتانة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الأقمشة التقنية المتخصصة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">أقمشة Nomex®</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الخصائص:</strong> مقاومة حريق فائقة، خفة الوزن، متانة عالية</li>
              <li><strong>الاستخدامات:</strong> أزياء الطيارين، معدات السلامة، البطانات الواقية</li>
              <li><strong>المعايير:</strong> يلبي ويتجاوز معايير FAR 25.853</li>
              <li><strong>التكلفة:</strong> أعلى تكلفة لكن أداء متفوق</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">أقمشة Kevlar® المدمجة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الخصائص:</strong> مقاومة قطع استثنائية، خفة وزن، مرونة</li>
              <li><strong>الاستخدامات:</strong> مناطق التعرض للخطر، الجيوب الأمنية</li>
              <li><strong>التطبيق:</strong> نسب صغيرة في المخاليط للحماية الإضافية</li>
              <li><strong>الاعتبارات:</strong> تتطلب معالجة خاصة في التصنيع</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">مقارنة أنواع الأقمشة</h4>
              <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">نوع القماش</th>
                      <th className="border border-gray-300 p-2 text-right">مقاومة الحريق</th>
                      <th className="border border-gray-300 p-2 text-right">الراحة</th>
                      <th className="border border-gray-300 p-2 text-right">المتانة</th>
                      <th className="border border-gray-300 p-2 text-right">التكلفة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-300 p-2">قطن معالج</td>
                      <td className="border border-gray-300 p-2">جيدة</td>
                      <td className="border border-gray-300 p-2">ممتازة</td>
                      <td className="border border-gray-300 p-2">متوسطة</td>
                      <td className="border border-gray-300 p-2">منخفضة</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">صوف معالج</td>
                      <td className="border border-gray-300 p-2">ممتازة</td>
                      <td className="border border-gray-300 p-2">جيدة</td>
                      <td className="border border-gray-300 p-2">عالية</td>
                      <td className="border border-gray-300 p-2">متوسطة</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">بوليستر تقني</td>
                      <td className="border border-gray-300 p-2">جيدة</td>
                      <td className="border border-gray-300 p-2">جيدة</td>
                      <td className="border border-gray-300 p-2">عالية</td>
                      <td className="border border-gray-300 p-2">متوسطة</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">Nomex®</td>
                      <td className="border border-gray-300 p-2">فائقة</td>
                      <td className="border border-gray-300 p-2">جيدة</td>
                      <td className="border border-gray-300 p-2">فائقة</td>
                      <td className="border border-gray-300 p-2">عالية</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">اعتبارات المناخ السعودي</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التكيف مع الحرارة العالية</h3>
            <p>
              يتطلب المناخ الحار في المملكة اعتبارات خاصة في اختيار الأقمشة:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التهوية المحسنة:</strong> أقمشة بنسيج مفتوح يسمح بتدفق الهواء</li>
              <li><strong>الألوان الفاتحة:</strong> تقليل امتصاص الحرارة من أشعة الشمس</li>
              <li><strong>الألياف المجوفة:</strong> تحسين العزل الحراري والتهوية</li>
              <li><strong>المعالجة المضادة للأشعة فوق البنفسجية:</strong> حماية من أضرار الشمس</li>
              <li><strong>تقنيات التبريد:</strong> أقمشة تساعد في تبديد الحرارة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">إدارة الرطوبة والعرق</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الامتصاص السريع:</strong> نقل الرطوبة بعيداً عن الجلد</li>
              <li><strong>التبخر السريع:</strong> تجفيف سريع للحفاظ على الراحة</li>
              <li><strong>المعالجة المضادة للبكتيريا:</strong> منع نمو البكتيريا والروائح</li>
              <li><strong>التوزيع المتساوي:</strong> انتشار الرطوبة على سطح القماش</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">مقاومة العوامل البيئية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة الغبار:</strong> أقمشة لا تجذب أو تحتفظ بالغبار</li>
              <li><strong>مقاومة الملوحة:</strong> تحمل الرطوبة المالحة في المناطق الساحلية</li>
              <li><strong>ثبات الألوان:</strong> مقاومة البهتان تحت أشعة الشمس القوية</li>
              <li><strong>المرونة الحرارية:</strong> عدم فقدان الخصائص في درجات الحرارة العالية</li>
            </ul>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">حلول مبتكرة للمناخ السعودي</h3>
              <p className="mb-0">
                طورت شركات النسيج المتخصصة أقمشة خاصة للمناخ الحار تجمع بين تقنيات متعددة: ألياف مجوفة للتهوية، معالجة بالفضة النانوية لمقاومة البكتيريا، وتقنيات التبريد التبخيري. هذه الأقمشة تحقق انخفاضاً في درجة الحرارة المحسوسة بمقدار 3-5 درجات مئوية مقارنة بالأقمشة التقليدية، مما يعزز بشكل كبير من راحة الطاقم في البيئة الحارة.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">معايير الاختيار حسب نوع الزي</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">أزياء الطيارين</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المتطلبات الخاصة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة الكهرباء الساكنة:</strong> منع التداخل مع الأجهزة الإلكترونية</li>
              <li><strong>المتانة الفائقة:</strong> تحمل الاستخدام المكثف والجلوس الطويل</li>
              <li><strong>المظهر الرسمي:</strong> أقمشة تحافظ على الشكل الأنيق</li>
              <li><strong>الراحة في الجلوس:</strong> مرونة في المناطق الحرجة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الأقمشة المفضلة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مخاليط الصوف والبوليستر:</strong> 70% صوف، 30% بوليستر</li>
              <li><strong>أقمشة Nomex® للمناطق الحساسة:</strong> حماية إضافية</li>
              <li><strong>بطانات تقنية:</strong> لتحسين الراحة والأداء</li>
              <li><strong>تعزيزات في المناطق عالية الإجهاد:</strong> الركب والأكواع</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">أزياء طاقم الضيافة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المتطلبات الخاصة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>حرية الحركة:</strong> مرونة للحركة المستمرة في الممرات</li>
              <li><strong>مقاومة البقع:</strong> حماية من انسكاب المشروبات والطعام</li>
              <li><strong>سهولة العناية:</strong> غسيل وكي سريع ومتكرر</li>
              <li><strong>المظهر الأنيق:</strong> الحفاظ على الشكل طوال الرحلة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الأقمشة المفضلة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مخاليط البوليستر والقطن:</strong> 65% بوليستر، 35% قطن</li>
              <li><strong>أقمشة مقاومة للبقع:</strong> معالجة تيفلون أو مشابهة</li>
              <li><strong>ألياف مرنة:</strong> 2-5% إيلاستين للمرونة</li>
              <li><strong>أقمشة سريعة الجفاف:</strong> لسهولة العناية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الزي الأرضي والصيانة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المتطلبات الخاصة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مقاومة الزيوت والوقود:</strong> حماية من المواد الكيميائية</li>
              <li><strong>المتانة الفائقة:</strong> تحمل البيئة الصناعية القاسية</li>
              <li><strong>الرؤية العالية:</strong> ألوان زاهية أو شرائط عاكسة</li>
              <li><strong>الحماية من الطقس:</strong> مقاومة الرياح والمطر</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الأقمشة المفضلة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>أقمشة مقاومة للكيماويات:</strong> معالجة خاصة للحماية</li>
              <li><strong>نايلون مقوى:</strong> للمتانة الفائقة</li>
              <li><strong>أقمشة عاكسة:</strong> لتحسين الرؤية والسلامة</li>
              <li><strong>طبقات متعددة:</strong> للحماية والراحة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">عملية الاختيار والتقييم</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">مراحل التقييم</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التقييم الأولي</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>مراجعة المواصفات:</strong> التأكد من مطابقة المعايير الأساسية</li>
              <li><strong>فحص الشهادات:</strong> التحقق من شهادات الجودة والسلامة</li>
              <li><strong>تقييم العينات:</strong> فحص بصري ولمسي للأقمشة</li>
              <li><strong>مقارنة الخيارات:</strong> تقييم البدائل المتاحة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الاختبارات المعملية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>اختبارات السلامة:</strong> مقاومة الحريق والسمية</li>
              <li><strong>اختبارات الأداء:</strong> المتانة والراحة والوظائف</li>
              <li><strong>اختبارات البيئة:</strong> التأثر بالحرارة والرطوبة</li>
              <li><strong>اختبارات العناية:</strong> الغسيل والكي والتخزين</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التجربة العملية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>اختبار الطاقم:</strong> تجربة الأقمشة في ظروف العمل الفعلية</li>
              <li><strong>تقييم الراحة:</strong> ملاحظات الطاقم حول الراحة والأداء</li>
              <li><strong>اختبار المتانة:</strong> مراقبة الأداء على مدى فترة زمنية</li>
              <li><strong>التقييم النهائي:</strong> جمع جميع البيانات واتخاذ القرار</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">معايير اتخاذ القرار</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الأولويات الأساسية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>السلامة (40%):</strong> الأولوية القصوى في جميع الاختيارات</li>
              <li><strong>الراحة (25%):</strong> تأثير مباشر على أداء الطاقم</li>
              <li><strong>المتانة (20%):</strong> التكلفة الإجمالية للملكية</li>
              <li><strong>المظهر (10%):</strong> الصورة المهنية للشركة</li>
              <li><strong>التكلفة (5%):</strong> الموازنة بين الجودة والسعر</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">العوامل المساعدة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>توفر المورد:</strong> استقرار التوريد وسرعة التسليم</li>
              <li><strong>الدعم التقني:</strong> خدمات ما بعد البيع والاستشارات</li>
              <li><strong>الابتكار:</strong> قدرة المورد على التطوير والتحسين</li>
              <li><strong>الاستدامة:</strong> الأثر البيئي وإعادة التدوير</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الاتجاهات المستقبلية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التقنيات الناشئة</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الأقمشة الذكية:</strong> تفاعل مع البيئة والجسم</li>
              <li><strong>النانو تكنولوجي:</strong> تحسين الخصائص على المستوى الجزيئي</li>
              <li><strong>الألياف الحيوية:</strong> مواد مستدامة من مصادر طبيعية</li>
              <li><strong>التقنيات الرقمية:</strong> مراقبة الأداء والصحة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الاستدامة البيئية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المواد المعاد تدويرها:</strong> تقليل الأثر البيئي</li>
              <li><strong>الإنتاج الأخضر:</strong> عمليات صديقة للبيئة</li>
              <li><strong>دورة الحياة الكاملة:</strong> من الإنتاج إلى التخلص</li>
              <li><strong>الاقتصاد الدائري:</strong> إعادة استخدام وتدوير المواد</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p>
              إن اختيار المواد والأقمشة المناسبة لأزياء الطيران عملية معقدة تتطلب خبرة عميقة وفهماً شاملاً للمتطلبات المتنوعة. هذا الاختيار يؤثر بشكل مباشر على سلامة الطاقم وراحتهم وأدائهم، وبالتالي على جودة الخدمة المقدمة للركاب.
            </p>
            <p>
              في خبراء الزي الموحد، نعتمد على خبرتنا الواسعة ومعرفتنا العميقة بأحدث التقنيات والمواد لنقدم لعملائنا أفضل الحلول. نعمل مع أفضل موردي الأقمشة عالمياً ونجري اختبارات صارمة لضمان أن جميع المواد المستخدمة تلبي أعلى معايير الجودة والسلامة.
            </p>
            <p>
              نؤمن بأن الاستثمار في أقمشة عالية الجودة هو استثمار في مستقبل الشركة وسلامة موظفيها، ونسعى دائماً لتقديم منتجات تجمع بين أفضل ما تقدمه التكنولوجيا الحديثة والحرفية التقليدية.
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