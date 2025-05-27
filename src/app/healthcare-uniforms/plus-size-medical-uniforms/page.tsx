import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogImage from '@/components/BlogImage';

export const metadata: Metadata = {
  title: 'الزي الطبي بالمقاسات الكبيرة - حلول مريحة وأنيقة | خبراء الزي الموحد',
  description: 'دليل شامل للزي الطبي بالمقاسات الكبيرة، تصاميم مريحة وعملية، نصائح للاختيار والتنسيق، وأفضل الحلول للكادر الطبي',
  keywords: 'الزي الطبي مقاسات كبيرة, سكراب مقاسات كبيرة, زي طبي مريح, مقاسات كبيرة للممرضات, زي طبي للجسم الممتلئ',
};

export default function PlusSizeMedicalUniformsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb
            items={[
              { label: 'الرئيسية', href: '/' },
              { label: 'الزي الطبي', href: '/healthcare-uniforms' },
              { label: 'الزي الطبي بالمقاسات الكبيرة', href: '/healthcare-uniforms/plus-size-medical-uniforms', isCurrent: true }
            ]}
          />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              الزي الطبي بالمقاسات الكبيرة
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              حلول مريحة وأنيقة لجميع أشكال الجسم في البيئة الطبية
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <BlogImage
              src="/images/healthcare_uniforms/plus-size-medical-uniforms.jpg"
              alt="الزي الطبي بالمقاسات الكبيرة - حلول مريحة وأنيقة"
              category="healthcare_uniforms"
            />

            <div className="prose prose-lg max-w-none mt-8">
              
              <p className="lead text-xl font-semibold mb-8 text-gray-700 border-r-4 border-primary pr-4 py-2 bg-gray-50 rounded-lg">
                يستحق كل فرد في الكادر الطبي زياً مريحاً وأنيقاً يعكس مهنيته ويدعم أداءه، بغض النظر عن شكل جسمه أو مقاسه. الزي الطبي بالمقاسات الكبيرة ليس مجرد تكبير للمقاسات العادية، بل تصميم مدروس يراعي احتياجات الجسم الممتلئ ويوفر الراحة والثقة والمظهر المهني المطلوب. في هذا الدليل الشامل، نستكشف أفضل الحلول والتصاميم والنصائح للحصول على زي طبي مثالي للمقاسات الكبيرة.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">فهم احتياجات المقاسات الكبيرة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. التحديات الخاصة</h3>

              <p className="mb-4">
                الكادر الطبي ذو المقاسات الكبيرة يواجه تحديات خاصة في اختيار الزي المناسب:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">صعوبة الحركة:</strong> الحاجة لحرية حركة أكبر في بيئة العمل المتطلبة</li>
                <li><strong className="text-gray-800">الراحة طوال اليوم:</strong> تجنب الضغط والاحتكاك أثناء الوردية الطويلة</li>
                <li><strong className="text-gray-800">المظهر المهني:</strong> الحفاظ على الشكل الأنيق والمهني</li>
                <li><strong className="text-gray-800">الثقة بالنفس:</strong> الشعور بالراحة والثقة أثناء العمل</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. الاحتياجات الفسيولوجية</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">متطلبات التصميم للمقاسات الكبيرة</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>توزيع الوزن:</strong> تصميم يوزع الوزن بشكل متوازن</li>
                  <li>• <strong>التهوية:</strong> أقمشة تسمح بتدفق الهواء لتجنب التعرق</li>
                  <li>• <strong>المرونة:</strong> مواد مرنة تتكيف مع حركة الجسم</li>
                  <li>• <strong>الدعم:</strong> تصميم يوفر الدعم للمناطق الحساسة</li>
                  <li>• <strong>سهولة الارتداء:</strong> فتحات وأزرار مناسبة للارتداء السهل</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الاعتبارات النفسية</h3>

              <p className="mb-4">
                الجانب النفسي مهم جداً في تصميم الزي للمقاسات الكبيرة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">تعزيز الثقة:</strong> تصميم يبرز نقاط القوة ويخفي العيوب</li>
                <li><strong className="text-gray-800">الشعور بالانتماء:</strong> عدم الشعور بالاختلاف عن الزملاء</li>
                <li><strong className="text-gray-800">الراحة النفسية:</strong> تجنب القلق حول المظهر أثناء العمل</li>
                <li><strong className="text-gray-800">الكرامة المهنية:</strong> الحفاظ على الصورة المهنية المطلوبة</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">مبادئ التصميم للمقاسات الكبيرة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. القصة والتفصيل</h3>

              <p className="mb-4">
                التصميم الصحيح يبدأ من القصة والتفصيل المناسب:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">عناصر التصميم المثالي</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">العنصر</th>
                      <th className="border border-gray-300 p-2 text-right">التصميم المناسب</th>
                      <th className="border border-gray-300 p-2 text-right">الفائدة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">خط الكتف</td>
                      <td className="border border-gray-300 p-2">واسع ومريح</td>
                      <td className="border border-gray-300 p-2">حرية حركة الذراعين</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">منطقة الصدر</td>
                      <td className="border border-gray-300 p-2">قصة مناسبة بدون ضغط</td>
                      <td className="border border-gray-300 p-2">راحة وشكل طبيعي</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">منطقة الخصر</td>
                      <td className="border border-gray-300 p-2">قصة إمبير أو مستقيمة</td>
                      <td className="border border-gray-300 p-2">إخفاء منطقة البطن</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الأكمام</td>
                      <td className="border border-gray-300 p-2">واسعة مع تضييق تدريجي</td>
                      <td className="border border-gray-300 p-2">راحة وشكل أنيق</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. اختيار الأقمشة المناسبة</h3>

              <p className="mb-4">
                نوع القماش يلعب دوراً حاسماً في راحة ومظهر الزي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">المرونة:</strong> أقمشة تحتوي على 5-10% سبانديكس للمرونة</li>
                <li><strong className="text-gray-800">التنفس:</strong> خامات تسمح بتدفق الهواء وتمتص الرطوبة</li>
                <li><strong className="text-gray-800">الوزن المناسب:</strong> ليس ثقيلاً جداً وليس خفيفاً مكشوفاً</li>
                <li><strong className="text-gray-800">مقاومة التجعد:</strong> للحفاظ على المظهر طوال اليوم</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الألوان والأنماط</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">اختيار الألوان المناسبة</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>الألوان الداكنة:</strong> الأزرق الداكن والأخضر الداكن للتنحيف البصري</li>
                  <li>• <strong>الألوان الصلبة:</strong> تجنب الأنماط الكبيرة أو المخططات العريضة</li>
                  <li>• <strong>التدرجات:</strong> استخدام تدرجات لونية لإضافة عمق</li>
                  <li>• <strong>التفاصيل الملونة:</strong> إضافة لمسات لونية في الأماكن المناسبة</li>
                </ul>
              </div>

              <BlogImage
                src="/images/healthcare_uniforms/plus-size-design-principles.jpg"
                alt="مبادئ تصميم الزي الطبي للمقاسات الكبيرة"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">أنواع الزي الطبي للمقاسات الكبيرة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. السكراب المريح</h3>

              <p className="mb-4">
                تصاميم السكراب المخصصة للمقاسات الكبيرة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">البلوزة الواسعة:</strong> قصة مريحة مع تفاصيل أنيقة</li>
                <li><strong className="text-gray-800">البنطلون المرن:</strong> خصر مطاطي مريح مع قصة مناسبة</li>
                <li><strong className="text-gray-800">الجيوب العملية:</strong> جيوب واسعة ومناسبة للأدوات</li>
                <li><strong className="text-gray-800">التفاصيل الأنيقة:</strong> خياطة متقنة وتشطيبات جميلة</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. المعاطف المخبرية</h3>

              <p className="mb-4">
                معاطف مخبرية مصممة خصيصاً للمقاسات الكبيرة:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">مواصفات المعطف المثالي</h4>
                <ul className="list-disc pr-6 space-y-2 mb-0">
                  <li>طول مناسب يغطي الجسم بشكل أنيق</li>
                  <li>أكمام واسعة مع إمكانية الطي</li>
                  <li>فتحة خلفية للراحة أثناء الجلوس</li>
                  <li>جيوب متعددة بأحجام مناسبة</li>
                  <li>إغلاق مريح بأزرار أو سحاب</li>
                  <li>قماش عالي الجودة مقاوم للبقع</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الزي الجراحي</h3>

              <p className="mb-4">
                زي جراحي مريح وعملي للمقاسات الكبيرة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">قميص واسع:</strong> يسمح بحرية الحركة الكاملة</li>
                <li><strong className="text-gray-800">بنطلون مرن:</strong> خصر قابل للتعديل</li>
                <li><strong className="text-gray-800">أقمشة متنفسة:</strong> للراحة أثناء العمليات الطويلة</li>
                <li><strong className="text-gray-800">سهولة التعقيم:</strong> مواد تتحمل التعقيم المتكرر</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">نصائح الاختيار والتنسيق</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. قياس الجسم الصحيح</h3>

              <p className="mb-4">
                الحصول على المقاس الصحيح هو الأساس:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">دليل القياس الصحيح</h4>
                <ol className="space-y-2 mb-0">
                  <li>1. <strong>محيط الصدر:</strong> قياس أوسع نقطة في الصدر</li>
                  <li>2. <strong>محيط الخصر:</strong> قياس أضيق نقطة في الخصر</li>
                  <li>3. <strong>محيط الوركين:</strong> قياس أوسع نقطة في الوركين</li>
                  <li>4. <strong>طول الذراع:</strong> من الكتف إلى المعصم</li>
                  <li>5. <strong>طول الجذع:</strong> من الكتف إلى الخصر</li>
                  <li>6. <strong>طول الساق:</strong> من الخصر إلى الكاحل</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. اختيار المقاس المناسب</h3>

              <p className="mb-4">
                نصائح لاختيار المقاس الأمثل:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">لا تختار مقاساً أكبر من اللازم:</strong> المقاس الصحيح أفضل من الواسع</li>
                <li><strong className="text-gray-800">اختبر الحركة:</strong> تأكد من حرية الحركة في جميع الاتجاهات</li>
                <li><strong className="text-gray-800">راعي الطبقات:</strong> إذا كنت ترتدي طبقات تحتية</li>
                <li><strong className="text-gray-800">فكر في الانكماش:</strong> بعض الأقمشة تنكمش بعد الغسيل</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. التنسيق والإكسسوارات</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">نصائح التنسيق</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>الأحذية المريحة:</strong> اختيار أحذية داعمة ومريحة</li>
                  <li>• <strong>الجوارب المناسبة:</strong> جوارب ضاغطة لتحسين الدورة الدموية</li>
                  <li>• <strong>الإكسسوارات البسيطة:</strong> تجنب الإكسسوارات الكبيرة أو المعقدة</li>
                  <li>• <strong>الساعة العملية:</strong> ساعة بسيطة وعملية</li>
                  <li>• <strong>الشعر المرتب:</strong> تسريحة مناسبة ومهنية</li>
                </ul>
              </div>

              <BlogImage
                src="/images/healthcare_uniforms/plus-size-styling-tips.jpg"
                alt="نصائح تنسيق الزي الطبي للمقاسات الكبيرة"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">العناية والصيانة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. الغسيل والتنظيف</h3>

              <p className="mb-4">
                العناية الصحيحة تحافظ على شكل ومتانة الزي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">اتبع تعليمات الغسيل:</strong> درجة حرارة مناسبة ونوع المنظف</li>
                <li><strong className="text-gray-800">تجنب المبيضات القوية:</strong> للحفاظ على لون ونسيج القماش</li>
                <li><strong className="text-gray-800">التجفيف المناسب:</strong> تجفيف طبيعي أو حراري منخفض</li>
                <li><strong className="text-gray-800">الكي بحذر:</strong> درجة حرارة مناسبة لنوع القماش</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. التخزين الصحيح</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">نصائح التخزين</h4>
                <ul className="list-disc pr-6 space-y-2 mb-0">
                  <li>تعليق الزي على شماعات مناسبة</li>
                  <li>تجنب الطي في نفس المكان مراراً</li>
                  <li>التهوية الجيدة لمنع الرطوبة</li>
                  <li>الفصل بين الألوان المختلفة</li>
                  <li>استخدام أكياس حماية للقطع الحساسة</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الإصلاح والتعديل</h3>

              <p className="mb-4">
                نصائح للحفاظ على الزي في أفضل حالة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الإصلاح السريع:</strong> إصلاح أي تمزق أو خلل فوراً</li>
                <li><strong className="text-gray-800">التعديل المهني:</strong> تعديل المقاس عند الحاجة</li>
                <li><strong className="text-gray-800">استبدال الأزرار:</strong> تغيير الأزرار التالفة</li>
                <li><strong className="text-gray-800">تقوية النقاط الضعيفة:</strong> تعزيز المناطق المعرضة للتآكل</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التطورات والابتكارات</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. التقنيات الحديثة</h3>

              <p className="mb-4">
                أحدث التطورات في تصميم الزي للمقاسات الكبيرة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الأقمشة الذكية:</strong> مواد تتكيف مع حرارة الجسم</li>
                <li><strong className="text-gray-800">التصميم ثلاثي الأبعاد:</strong> قصات محسوبة بدقة للجسم</li>
                <li><strong className="text-gray-800">الألياف المضادة للبكتيريا:</strong> حماية إضافية من العدوى</li>
                <li><strong className="text-gray-800">التقنيات المضادة للروائح:</strong> للراحة طوال اليوم</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. التصميم الشامل</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">مبادئ التصميم الشامل</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>التنوع في المقاسات:</strong> مجموعة واسعة من المقاسات</li>
                  <li>• <strong>خيارات متعددة:</strong> تصاميم مختلفة لأشكال الجسم المتنوعة</li>
                  <li>• <strong>المرونة في التعديل:</strong> إمكانية تعديل القطع حسب الحاجة</li>
                  <li>• <strong>الراحة للجميع:</strong> تصميم يناسب جميع الأجسام</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الاستدامة والبيئة</h3>

              <p className="mb-4">
                الاتجاه نحو الحلول المستدامة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">المواد المعاد تدويرها:</strong> استخدام ألياف مستدامة</li>
                <li><strong className="text-gray-800">الإنتاج الأخضر:</strong> عمليات تصنيع صديقة للبيئة</li>
                <li><strong className="text-gray-800">المتانة العالية:</strong> زي يدوم أطول لتقليل الهدر</li>
                <li><strong className="text-gray-800">إعادة التدوير:</strong> برامج لإعادة تدوير الزي القديم</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التطبيق في البيئة السعودية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. التحديات المحلية</h3>

              <p className="mb-4">
                التحديات الخاصة بالسوق السعودي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">المناخ الحار:</strong> الحاجة لأقمشة خفيفة ومتنفسة</li>
                <li><strong className="text-gray-800">التنوع الثقافي:</strong> احترام التفضيلات الثقافية المختلفة</li>
                <li><strong className="text-gray-800">توفر المقاسات:</strong> ضمان توفر جميع المقاسات</li>
                <li><strong className="text-gray-800">الجودة والسعر:</strong> توازن بين الجودة والتكلفة</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. الحلول المطبقة</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">مبادرات خبراء الزي الموحد</h4>
                <p className="mb-3">
                  نقدم حلولاً متخصصة للمقاسات الكبيرة في السوق السعودي:
                </p>
                
                <h5 className="font-semibold mb-2">الخدمات المتخصصة:</h5>
                <ul className="space-y-1 mb-4">
                  <li>• تصميم مخصص لكل شكل جسم</li>
                  <li>• مجموعة واسعة من المقاسات (XL إلى 6XL)</li>
                  <li>• أقمشة مناسبة للمناخ السعودي</li>
                  <li>• خدمة التعديل والتفصيل</li>
                  <li>• استشارة مجانية لاختيار المناسب</li>
                </ul>
                
                <h5 className="font-semibold mb-2">المنتجات المتاحة:</h5>
                <ul className="space-y-1 mb-0">
                  <li>• سكراب مريح بتصاميم عصرية</li>
                  <li>• معاطف مخبرية أنيقة</li>
                  <li>• زي جراحي متطور</li>
                  <li>• إكسسوارات مكملة</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. قصص نجاح</h3>

              <p className="mb-4">
                تجارب ناجحة من المؤسسات الصحية السعودية:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-3">مستشفى الملك عبدالعزيز الجامعي</h4>
                <p className="mb-3">
                  نفذ المستشفى برنامجاً شاملاً لتوفير زي مناسب لجميع أشكال الجسم:
                </p>
                <ul className="list-disc pr-6 space-y-1 mb-0">
                  <li>توفير 15 مقاساً مختلفاً للزي الطبي</li>
                  <li>تدريب فريق متخصص لمساعدة الموظفين في الاختيار</li>
                  <li>تحسن رضا الموظفين بنسبة 85%</li>
                  <li>تقليل شكاوى عدم الراحة بنسبة 90%</li>
                  <li>تحسن الصورة المهنية العامة للمستشفى</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-primary mb-3 font-semibold">شهادة موظفة</h3>
                <p className="mb-0 italic">
                  "كنت أعاني من صعوبة في العثور على زي طبي مريح ومناسب لمقاسي. بعد التعامل مع خبراء الزي الموحد، حصلت على زي مصمم خصيصاً لي يجمع بين الراحة والأناقة. الآن أشعر بثقة أكبر في عملي وراحة طوال اليوم. الفرق واضح في جودة القماش والتصميم المدروس."
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  أ. نورا السعيد، ممرضة أول - مستشفى الملك فهد
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الخلاصة والتوصيات</h2>

              <p className="mb-4">
                الزي الطبي للمقاسات الكبيرة يتطلب اهتماماً خاصاً بالتصميم والجودة لضمان الراحة والمظهر المهني. التطورات الحديثة في تقنيات النسيج والتصميم تتيح حلولاً متطورة تلبي احتياجات جميع أشكال الجسم.
              </p>

              <p className="mb-4">
                المفتاح هو اختيار المورد المناسب الذي يفهم احتياجات المقاسات الكبيرة ويقدم حلولاً مخصصة. الاستثمار في زي عالي الجودة يحقق فوائد طويلة الأمد في الراحة والثقة والأداء المهني.
              </p>

              <p className="mb-0">
                خبراء الزي الموحد تفخر بتقديم حلول شاملة للزي الطبي بالمقاسات الكبيرة، حيث نجمع بين الخبرة في التصميم والجودة في التنفيذ لنوفر زياً يلبي أعلى التوقعات. نؤمن بأن كل فرد في الكادر الطبي يستحق زياً مريحاً وأنيقاً يعكس مهنيته ويدعم ثقته في أداء مهامه النبيلة.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}