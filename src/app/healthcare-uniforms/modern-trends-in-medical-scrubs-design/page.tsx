import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogImage from '@/components/BlogImage';

export const metadata: Metadata = {
  title: 'الاتجاهات الحديثة في تصميم السكراب الطبي | خبراء الزي الموحد',
  description: 'استكشف أحدث الاتجاهات والابتكارات في تصميم السكراب الطبي، من الأقمشة الذكية إلى التصاميم المريحة والعملية التي تلبي احتياجات الكادر الطبي الحديث',
  keywords: 'اتجاهات السكراب الطبي, تصميم حديث للزي الطبي, ابتكارات الزي الطبي, سكراب عصري, تقنيات الأقمشة الطبية',
};

export default function ModernScrubsTrendsPage() {
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
              { label: 'الاتجاهات الحديثة في تصميم السكراب الطبي', href: '/healthcare-uniforms/modern-trends-in-medical-scrubs-design', isCurrent: true }
            ]}
          />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              الاتجاهات الحديثة في تصميم السكراب الطبي
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              ابتكارات وتقنيات متطورة تعيد تعريف مفهوم الزي الطبي العصري
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <BlogImage
              src="/images/healthcare_uniforms/modern-scrubs-trends.jpg"
              alt="الاتجاهات الحديثة في تصميم السكراب الطبي"
              category="healthcare_uniforms"
            />

            <div className="prose prose-lg max-w-none mt-8">
              
              <p className="lead text-xl font-semibold mb-8 text-gray-700 border-r-4 border-primary pr-4 py-2 bg-gray-50 rounded-lg">
                يشهد عالم السكراب الطبي ثورة حقيقية في التصميم والتقنيات، حيث تتطور الابتكارات لتلبي احتياجات الكادر الطبي المتزايدة في بيئة عمل متطورة ومتطلبة. من الأقمشة الذكية التي تتكيف مع البيئة إلى التصاميم المريحة التي تدعم الحركة الطبيعية، تعكس الاتجاهات الحديثة فهماً عميقاً لتحديات العمل الطبي وتطلعات المهنيين الصحيين.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">ثورة الأقمشة الذكية والتقنيات المتطورة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. الأقمشة المضادة للميكروبات</h3>

              <p className="mb-4">
                تمثل الأقمشة المضادة للميكروبات نقلة نوعية في مجال السكراب الطبي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">تقنية الفضة النانوية:</strong> جزيئات الفضة المدمجة في الألياف تقضي على 99.9% من البكتيريا</li>
                <li><strong className="text-gray-800">معالجة الزنك:</strong> خصائص مضادة للفطريات والبكتيريا مع الحفاظ على نعومة القماش</li>
                <li><strong className="text-gray-800">تقنية النحاس:</strong> خصائص طبيعية مضادة للميكروبات تدوم طوال عمر الزي</li>
                <li><strong className="text-gray-800">المعالجة الحيوية:</strong> استخدام مواد طبيعية مضادة للبكتيريا مثل خلاصة الخيزران</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">فوائد الأقمشة المضادة للميكروبات</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>تقليل انتقال العدوى:</strong> حماية إضافية للكادر الطبي والمرضى</li>
                  <li>• <strong>مقاومة الروائح:</strong> منع تكون البكتيريا المسببة للروائح</li>
                  <li>• <strong>طول العمر:</strong> الحفاظ على نظافة الزي لفترات أطول</li>
                  <li>• <strong>الراحة النفسية:</strong> شعور إضافي بالأمان والحماية</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. تقنيات إدارة الرطوبة والحرارة</h3>

              <p className="mb-4">
                التطورات في إدارة الرطوبة تحسن راحة الكادر الطبي بشكل كبير:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">تقنيات إدارة الرطوبة المتقدمة</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">التقنية</th>
                      <th className="border border-gray-300 p-2 text-right">الآلية</th>
                      <th className="border border-gray-300 p-2 text-right">الفائدة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Moisture-Wicking</td>
                      <td className="border border-gray-300 p-2">نقل العرق من الجلد للسطح الخارجي</td>
                      <td className="border border-gray-300 p-2">جفاف مستمر وراحة أكبر</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Quick-Dry</td>
                      <td className="border border-gray-300 p-2">تجفيف سريع للرطوبة</td>
                      <td className="border border-gray-300 p-2">عودة سريعة للجفاف</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Breathable Mesh</td>
                      <td className="border border-gray-300 p-2">مناطق تهوية مدمجة</td>
                      <td className="border border-gray-300 p-2">تدفق هواء محسن</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Temperature Regulation</td>
                      <td className="border border-gray-300 p-2">تكيف مع درجة حرارة الجسم</td>
                      <td className="border border-gray-300 p-2">راحة في جميع الظروف</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الأقمشة المقاومة للبقع والسوائل</h3>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">تقنية النانو:</strong> طبقة حماية غير مرئية تمنع امتصاص السوائل</li>
                <li><strong className="text-gray-800">المعالجة الكيميائية:</strong> مواد آمنة تطرد السوائل والبقع</li>
                <li><strong className="text-gray-800">الألياف المعدلة:</strong> تغيير بنية الألياف لمقاومة الامتصاص</li>
                <li><strong className="text-gray-800">الطلاء الواقي:</strong> طبقات رقيقة تحافظ على مرونة القماش</li>
              </ul>

              <BlogImage
                src="/images/healthcare_uniforms/smart-fabric-technology.jpg"
                alt="تقنيات الأقمشة الذكية في السكراب الطبي"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">ثورة التصميم والراحة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. التصميم المريح (Ergonomic Design)</h3>

              <p className="mb-4">
                التصميم المريح يراعي طبيعة الحركة في البيئة الطبية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">القصات المتكيفة:</strong> تصاميم تتبع شكل الجسم الطبيعي</li>
                <li><strong className="text-gray-800">مناطق المرونة:</strong> إضافة مواد مطاطة في النقاط الحرجة</li>
                <li><strong className="text-gray-800">الخياطة المسطحة:</strong> تقليل الاحتكاك والتهيج</li>
                <li><strong className="text-gray-800">التهوية الاستراتيجية:</strong> فتحات تهوية في المناطق الحساسة</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. الجيوب الذكية والوظيفية</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">ابتكارات في تصميم الجيوب</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>جيوب مقاومة للبكتيريا:</strong> بطانة خاصة تمنع نمو الميكروبات</li>
                  <li>• <strong>جيوب بسحابات مخفية:</strong> حماية المحتويات مع مظهر أنيق</li>
                  <li>• <strong>جيوب متعددة الأحجام:</strong> تناسب أدوات طبية مختلفة</li>
                  <li>• <strong>جيوب بتقسيمات داخلية:</strong> تنظيم أفضل للأدوات</li>
                  <li>• <strong>جيوب مقاومة للماء:</strong> حماية الأجهزة الإلكترونية</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. التصاميم المتخصصة حسب القسم</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">تخصيص التصميم حسب طبيعة العمل</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">القسم</th>
                      <th className="border border-gray-300 p-2 text-right">التصميم المتخصص</th>
                      <th className="border border-gray-300 p-2 text-right">الميزات الخاصة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">غرفة العمليات</td>
                      <td className="border border-gray-300 p-2">قصة ضيقة، أكمام قصيرة</td>
                      <td className="border border-gray-300 p-2">مقاومة للسوائل، سهولة التعقيم</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الطوارئ</td>
                      <td className="border border-gray-300 p-2">جيوب متعددة، مرونة عالية</td>
                      <td className="border border-gray-300 p-2">سهولة الحركة، تنظيم الأدوات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الأطفال</td>
                      <td className="border border-gray-300 p-2">ألوان مبهجة، تصاميم ودودة</td>
                      <td className="border border-gray-300 p-2">تقليل خوف الأطفال</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">العناية المركزة</td>
                      <td className="border border-gray-300 p-2">مقاومة للكهرباء الساكنة</td>
                      <td className="border border-gray-300 p-2">حماية الأجهزة الحساسة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الاتجاهات اللونية والجمالية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. ألوان العافية والهدوء</h3>

              <p className="mb-4">
                الاتجاه نحو ألوان تعزز الشفاء والراحة النفسية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الأزرق الهادئ:</strong> يقلل ضغط الدم ويبعث على الطمأنينة</li>
                <li><strong className="text-gray-800">الأخضر الطبيعي:</strong> يهدئ الأعصاب ويقلل إجهاد العين</li>
                <li><strong className="text-gray-800">البنفسجي الفاتح:</strong> يحفز الإبداع ويقلل التوتر</li>
                <li><strong className="text-gray-800">الرمادي الدافئ:</strong> يوازن بين الرسمية والراحة</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. الأنماط والطبعات العلاجية</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">الطبعات ذات التأثير الإيجابي</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>أنماط هندسية هادئة:</strong> تساعد على التركيز والهدوء</li>
                  <li>• <strong>طبعات الطبيعة:</strong> أوراق، أزهار، أمواج تبعث على الراحة</li>
                  <li>• <strong>رسوم الأطفال:</strong> شخصيات كرتونية ودودة للأقسام الطفولية</li>
                  <li>• <strong>أنماط مجردة:</strong> تصاميم فنية تحفز الإيجابية</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. التدرجات اللونية المتطورة</h3>

              <p className="mb-4">
                استخدام تقنيات التدرج اللوني لتحقيق تأثيرات بصرية مريحة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">التدرج الأفقي:</strong> انتقال لوني ناعم يوحي بالحركة الهادئة</li>
                <li><strong className="text-gray-800">التدرج الرأسي:</strong> يعطي إحساساً بالطول والأناقة</li>
                <li><strong className="text-gray-800">التدرج الدائري:</strong> تأثير مهدئ يركز الانتباه</li>
                <li><strong className="text-gray-800">الألوان المتكاملة:</strong> مزج ألوان متناغمة لتأثير متوازن</li>
              </ul>

              <BlogImage
                src="/images/healthcare_uniforms/color-trends-medical-scrubs.jpg"
                alt="الاتجاهات اللونية في السكراب الطبي"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التقنيات الذكية والمستقبلية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. الأجهزة القابلة للارتداء المدمجة</h3>

              <p className="mb-4">
                دمج التقنيات الذكية في السكراب الطبي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">أجهزة مراقبة العلامات الحيوية:</strong> مراقبة صحة الكادر الطبي</li>
                <li><strong className="text-gray-800">أجهزة تتبع الموقع:</strong> تحديد موقع الطاقم في حالات الطوارئ</li>
                <li><strong className="text-gray-800">شاشات عرض مرنة:</strong> عرض معلومات المريض أو التعليمات</li>
                <li><strong className="text-gray-800">أجهزة الاستشعار البيئي:</strong> مراقبة جودة الهواء والتلوث</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. تقنيات التطهير الذاتي</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">ابتكارات التطهير الذاتي</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>الأشعة فوق البنفسجية المدمجة:</strong> تطهير مستمر أثناء الارتداء</li>
                  <li>• <strong>المواد الحفازة الضوئية:</strong> تنشط بالضوء لقتل الميكروبات</li>
                  <li>• <strong>الأيونات المضادة للبكتيريا:</strong> إطلاق مستمر لمواد مطهرة</li>
                  <li>• <strong>التقنيات الحرارية:</strong> استخدام حرارة الجسم للتطهير</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الذكاء الاصطناعي في التصميم</h3>

              <p className="mb-4">
                استخدام الذكاء الاصطناعي لتحسين تصميم السكراب:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">التصميم المخصص:</strong> تحليل بيانات الجسم لتصميم مثالي</li>
                <li><strong className="text-gray-800">التنبؤ بالاحتياجات:</strong> توقع متطلبات الكادر الطبي</li>
                <li><strong className="text-gray-800">تحسين الأداء:</strong> تحليل أنماط الحركة لتحسين التصميم</li>
                <li><strong className="text-gray-800">الصيانة التنبؤية:</strong> توقع موعد الحاجة للاستبدال</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الاستدامة والمسؤولية البيئية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. المواد المعاد تدويرها</h3>

              <p className="mb-4">
                الاتجاه نحو استخدام مواد صديقة للبيئة:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">مصادر المواد المستدامة</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">المادة</th>
                      <th className="border border-gray-300 p-2 text-right">المصدر</th>
                      <th className="border border-gray-300 p-2 text-right">الفائدة البيئية</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">البوليستر المعاد تدويره</td>
                      <td className="border border-gray-300 p-2">زجاجات بلاستيكية مستعملة</td>
                      <td className="border border-gray-300 p-2">تقليل النفايات البلاستيكية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">ألياف الخيزران</td>
                      <td className="border border-gray-300 p-2">نبات الخيزران المتجدد</td>
                      <td className="border border-gray-300 p-2">نمو سريع، مضاد طبيعي للبكتيريا</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">القطن العضوي</td>
                      <td className="border border-gray-300 p-2">زراعة بدون مبيدات</td>
                      <td className="border border-gray-300 p-2">حماية التربة والمياه</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">ألياف القنب</td>
                      <td className="border border-gray-300 p-2">نبات القنب الصناعي</td>
                      <td className="border border-gray-300 p-2">متانة عالية، قابل للتحلل</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. تقنيات الإنتاج المستدامة</h3>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الصباغة الصديقة للبيئة:</strong> أصباغ طبيعية وعمليات قليلة الاستهلاك للماء</li>
                <li><strong className="text-gray-800">الطاقة المتجددة:</strong> استخدام الطاقة الشمسية في المصانع</li>
                <li><strong className="text-gray-800">تقليل النفايات:</strong> إعادة استخدام قصاصات القماش</li>
                <li><strong className="text-gray-800">النقل الأخضر:</strong> تقليل البصمة الكربونية للشحن</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. برامج إعادة التدوير</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">مبادرات إعادة التدوير</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>برامج الاستبدال:</strong> تبديل السكراب القديم بخصم على الجديد</li>
                  <li>• <strong>إعادة التصنيع:</strong> تحويل السكراب المستعمل لمنتجات أخرى</li>
                  <li>• <strong>التبرع للمؤسسات:</strong> إعطاء السكراب المستعمل للمؤسسات الخيرية</li>
                  <li>• <strong>البحث والتطوير:</strong> استخدام السكراب القديم لتطوير مواد جديدة</li>
                </ul>
              </div>

              <BlogImage
                src="/images/healthcare_uniforms/sustainable-scrubs-manufacturing.jpg"
                alt="الإنتاج المستدام للسكراب الطبي"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التخصيص والتفريد</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. التصميم حسب الطلب</h3>

              <p className="mb-4">
                تقنيات التخصيص الحديثة تلبي احتياجات كل مؤسسة صحية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">التطريز الرقمي:</strong> شعارات وأسماء بدقة عالية</li>
                <li><strong className="text-gray-800">الطباعة ثلاثية الأبعاد:</strong> إكسسوارات مخصصة</li>
                <li><strong className="text-gray-800">القياسات المخصصة:</strong> تفصيل حسب مقاسات الفرد</li>
                <li><strong className="text-gray-800">الألوان المؤسسية:</strong> مطابقة دقيقة لألوان المؤسسة</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. التقنيات التفاعلية</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">ابتكارات التفاعل</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>الألوان المتغيرة:</strong> تتفاعل مع درجة الحرارة أو الضوء</li>
                  <li>• <strong>الرسائل المخفية:</strong> تظهر عند التعرض لضوء معين</li>
                  <li>• <strong>المؤشرات الذكية:</strong> تغيير اللون عند التلوث</li>
                  <li>• <strong>التفاعل مع البيئة:</strong> استجابة لظروف العمل المختلفة</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التطبيق في المملكة العربية السعودية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. التكيف مع المناخ المحلي</h3>

              <p className="mb-4">
                تطوير تقنيات خاصة للتعامل مع المناخ السعودي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">مقاومة الحرارة العالية:</strong> أقمشة تعكس الحرارة وتبرد الجسم</li>
                <li><strong className="text-gray-800">مقاومة الرمال:</strong> معالجات خاصة لمنع تراكم الغبار</li>
                <li><strong className="text-gray-800">التكيف مع التكييف:</strong> مرونة للانتقال بين البيئات المختلفة</li>
                <li><strong className="text-gray-800">الحماية من الأشعة:</strong> حماية إضافية من الأشعة فوق البنفسجية</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. مراعاة الثقافة المحلية</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">التصميم المراعي للثقافة السعودية</h4>
                <ul className="list-disc pr-6 space-y-2 mb-0">
                  <li>تصاميم محتشمة تراعي القيم الإسلامية</li>
                  <li>ألوان متناغمة مع التفضيلات الثقافية</li>
                  <li>مقاسات مناسبة للأجسام المختلفة</li>
                  <li>تصاميم خاصة للنساء تراعي الحشمة والراحة</li>
                  <li>إمكانية إضافة عناصر تراثية في التصميم</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. قصص نجاح من المملكة</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">مستشفى الملك عبدالله الجامعي</h4>
                <p className="mb-3">
                  طبق المستشفى نظاماً متطوراً للسكراب الطبي يجمع بين التقنيات الحديثة والتصميم المحلي:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• استخدام أقمشة ذكية مقاومة للبكتيريا</li>
                  <li>• تصاميم مخصصة لكل قسم بألوان مميزة</li>
                  <li>• دمج تقنيات التبريد للعمل في المناخ الحار</li>
                  <li>• برنامج إعادة تدوير شامل</li>
                </ul>
                <p className="mb-0">
                  <strong>النتائج:</strong> تحسن رضا الكادر الطبي بنسبة 42% وانخفاض معدل الإصابات المهنية بنسبة 28%.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التوقعات المستقبلية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. الجيل القادم من السكراب الذكي</h3>

              <p className="mb-4">
                توقعات للتطورات المستقبلية في السكراب الطبي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الذكاء الاصطناعي المدمج:</strong> سكراب يتعلم من سلوك المستخدم</li>
                <li><strong className="text-gray-800">التطهير الذاتي الكامل:</strong> تطهير مستمر بدون تدخل خارجي</li>
                <li><strong className="text-gray-800">التكيف البيئي:</strong> تغيير الخصائص حسب البيئة المحيطة</li>
                <li><strong className="text-gray-800">الاتصال اللاسلكي:</strong> تبادل البيانات مع الأنظمة الطبية</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. التحديات والفرص</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-8 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">التحديات المستقبلية</h4>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>التكلفة:</strong> موازنة التقنيات المتطورة مع القدرة على التحمل</li>
                  <li>• <strong>التدريب:</strong> تأهيل الكادر الطبي على التقنيات الجديدة</li>
                  <li>• <strong>التنظيم:</strong> وضع معايير للتقنيات الجديدة</li>
                  <li>• <strong>الخصوصية:</strong> حماية البيانات المجمعة من الأجهزة الذكية</li>
                </ul>
                
                <h4 className="text-primary mb-3 font-semibold">الفرص المتاحة</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>تحسين الرعاية:</strong> رعاية صحية أفضل وأكثر دقة</li>
                  <li>• <strong>الكفاءة:</strong> تحسين كفاءة العمل الطبي</li>
                  <li>• <strong>الاستدامة:</strong> حلول أكثر استدامة وصداقة للبيئة</li>
                  <li>• <strong>الابتكار:</strong> فرص جديدة للابتكار والتطوير</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-primary mb-3 font-semibold">رؤية الخبراء</h3>
                <p className="mb-0 italic">
                  "نشهد اليوم ثورة حقيقية في عالم السكراب الطبي تتجاوز مجرد التحسينات التقليدية لتشمل تقنيات ذكية ومواد متطورة تعيد تعريف مفهوم الزي الطبي. في المملكة العربية السعودية، نحن في موقع فريد لنكون رواداً في تبني هذه التقنيات، خاصة مع رؤية 2030 التي تركز على الابتكار في القطاع الصحي. المستقبل يحمل إمكانيات لا محدودة لسكراب طبي يجمع بين الوظيفة والراحة والتقنية، مما سيحسن من جودة الرعاية الصحية ورضا الكادر الطبي."
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  د. محمد الشهري، خبير تقنيات النسيج الطبي
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الخلاصة والتوصيات</h2>

              <p className="mb-4">
                تشهد صناعة السكراب الطبي تطوراً متسارعاً يدفعه التقدم التقني وفهم أعمق لاحتياجات الكادر الطبي. من الأقمشة الذكية المضادة للميكروبات إلى التصاميم المريحة والمستدامة، تعكس الاتجاهات الحديثة التزاماً بتحسين بيئة العمل الطبي وجودة الرعاية الصحية.
              </p>

              <p className="mb-4">
                في المملكة العربية السعودية، تتيح هذه التطورات فرصة فريدة لتطوير حلول سكراب طبي تجمع بين أحدث التقنيات العالمية والاحتياجات المحلية الخاصة. المؤسسات الصحية التي تتبنى هذه الاتجاهات الحديثة ستحقق ميزة تنافسية في جذب أفضل الكوادر الطبية وتقديم رعاية صحية متميزة.
              </p>

              <p className="mb-0">
                في خبراء الزي الموحد، نلتزم بمواكبة أحدث الاتجاهات والتقنيات في عالم السكراب الطبي، ونعمل على تطوير حلول مبتكرة تلبي احتياجات المؤسسات الصحية السعودية. نؤمن بأن السكراب الطبي المتطور ليس مجرد زي عمل، بل أداة تساهم في تحسين الأداء الطبي وتعزز من جودة الرعاية الصحية في المملكة.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}