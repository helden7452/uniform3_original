import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogImage from '@/components/BlogImage';

export const metadata: Metadata = {
  title: 'طلب الزي الطبي بالجملة مع ضمان الجودة | خبراء الزي الموحد',
  description: 'دليل شامل لطلب الزي الطبي بكميات كبيرة مع ضمان أعلى معايير الجودة، نصائح للمؤسسات الصحية لاختيار الموردين المناسبين وضمان الجودة',
  keywords: 'طلب الزي الطبي بالجملة, ضمان جودة الزي الطبي, موردين الزي الطبي, شراء بكميات كبيرة, جودة الزي الطبي',
};

export default function BulkMedicalUniformsPage() {
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
              { label: 'طلب الزي الطبي بالجملة مع ضمان الجودة', href: '/healthcare-uniforms/ordering-bulk-medical-uniforms-with-quality-assurance', isCurrent: true }
            ]}
          />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              طلب الزي الطبي بالجملة مع ضمان الجودة
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              دليلك الشامل للحصول على أفضل جودة بأسعار تنافسية للمؤسسات الصحية
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <BlogImage
              src="/images/healthcare_uniforms/bulk-medical-uniforms-quality.jpg"
              alt="طلب الزي الطبي بالجملة مع ضمان الجودة"
              category="healthcare_uniforms"
            />

            <div className="prose prose-lg max-w-none mt-8">
              
              <p className="lead text-xl font-semibold mb-8 text-gray-700 border-r-4 border-primary pr-4 py-2 bg-gray-50 rounded-lg">
                يُعد طلب الزي الطبي بكميات كبيرة قراراً استراتيجياً مهماً للمؤسسات الصحية، حيث يتطلب توازناً دقيقاً بين الجودة العالية والتكلفة المناسبة. في هذا الدليل الشامل، نستكشف أفضل الممارسات لضمان الحصول على زي طبي عالي الجودة بأسعار تنافسية، مع التركيز على معايير الجودة وإجراءات ضمان الجودة التي تضمن رضا الكادر الطبي وسلامة المرضى.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">أهمية الشراء بالجملة للمؤسسات الصحية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. المزايا الاقتصادية</h3>

              <p className="mb-4">
                الشراء بالجملة يوفر مزايا اقتصادية كبيرة للمؤسسات الصحية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">توفير التكاليف:</strong> خصومات كبيرة على الكميات الكبيرة تصل إلى 40%</li>
                <li><strong className="text-gray-800">تقليل تكاليف الشحن:</strong> توزيع تكلفة الشحن على كمية أكبر</li>
                <li><strong className="text-gray-800">استقرار الأسعار:</strong> حماية من تقلبات الأسعار المستقبلية</li>
                <li><strong className="text-gray-800">تحسين التدفق النقدي:</strong> تخطيط أفضل للميزانية السنوية</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. المزايا التشغيلية</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">فوائد تشغيلية للشراء بالجملة</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>ضمان التوفر:</strong> مخزون كافٍ لتلبية الاحتياجات طوال العام</li>
                  <li>• <strong>توحيد المعايير:</strong> ضمان جودة موحدة لجميع الأقسام</li>
                  <li>• <strong>تقليل وقت الطلب:</strong> عدد أقل من عمليات الشراء والمتابعة</li>
                  <li>• <strong>تحسين العلاقات:</strong> بناء شراكات طويلة الأمد مع الموردين</li>
                  <li>• <strong>خدمة أفضل:</strong> أولوية في الخدمة والدعم الفني</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">معايير ضمان الجودة الأساسية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. معايير الأقمشة والمواد</h3>

              <p className="mb-4">
                جودة الأقمشة هي الأساس في الزي الطبي عالي الجودة:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">مواصفات الأقمشة المطلوبة</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">المعيار</th>
                      <th className="border border-gray-300 p-2 text-right">المتطلب الأدنى</th>
                      <th className="border border-gray-300 p-2 text-right">الجودة المثلى</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">وزن القماش</td>
                      <td className="border border-gray-300 p-2">180 جم/م²</td>
                      <td className="border border-gray-300 p-2">220 جم/م²</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">مقاومة التمزق</td>
                      <td className="border border-gray-300 p-2">40 نيوتن</td>
                      <td className="border border-gray-300 p-2">60 نيوتن</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">ثبات اللون</td>
                      <td className="border border-gray-300 p-2">درجة 4</td>
                      <td className="border border-gray-300 p-2">درجة 5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">مقاومة الانكماش</td>
                      <td className="border border-gray-300 p-2">أقل من 3%</td>
                      <td className="border border-gray-300 p-2">أقل من 2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. معايير التصنيع والخياطة</h3>

              <p className="mb-4">
                جودة التصنيع تحدد عمر الزي الطبي ومتانته:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">نوع الخيوط:</strong> خيوط بوليستر عالية الجودة مقاومة للبكتيريا</li>
                <li><strong className="text-gray-800">كثافة الغرز:</strong> 12-14 غرزة لكل بوصة للمتانة القصوى</li>
                <li><strong className="text-gray-800">تقوية النقاط الحرجة:</strong> تعزيز الجيوب والأكمام ونقاط الضغط</li>
                <li><strong className="text-gray-800">اللحامات المسطحة:</strong> تقليل الاحتكاك والتهيج</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الشهادات والمعايير الدولية</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">الشهادات المطلوبة</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>ISO 9001:</strong> نظام إدارة الجودة</li>
                  <li>• <strong>ISO 14001:</strong> نظام الإدارة البيئية</li>
                  <li>• <strong>OEKO-TEX Standard 100:</strong> سلامة المنسوجات</li>
                  <li>• <strong>FDA Approval:</strong> موافقة إدارة الغذاء والدواء</li>
                  <li>• <strong>CE Marking:</strong> المطابقة الأوروبية</li>
                </ul>
              </div>

              <BlogImage
                src="/images/healthcare_uniforms/quality-control-medical-uniforms.jpg"
                alt="مراقبة جودة الزي الطبي"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">عملية اختيار المورد المناسب</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. معايير تقييم الموردين</h3>

              <p className="mb-4">
                اختيار المورد المناسب يتطلب تقييماً شاملاً لعدة معايير:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">نظام تقييم الموردين</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">المعيار</th>
                      <th className="border border-gray-300 p-2 text-right">الوزن النسبي</th>
                      <th className="border border-gray-300 p-2 text-right">طريقة التقييم</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">جودة المنتج</td>
                      <td className="border border-gray-300 p-2">35%</td>
                      <td className="border border-gray-300 p-2">اختبار عينات + شهادات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">السعر التنافسي</td>
                      <td className="border border-gray-300 p-2">25%</td>
                      <td className="border border-gray-300 p-2">مقارنة الأسعار</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الموثوقية والالتزام</td>
                      <td className="border border-gray-300 p-2">20%</td>
                      <td className="border border-gray-300 p-2">سجل الأداء السابق</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الدعم الفني</td>
                      <td className="border border-gray-300 p-2">10%</td>
                      <td className="border border-gray-300 p-2">تقييم الخدمات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">القدرة الإنتاجية</td>
                      <td className="border border-gray-300 p-2">10%</td>
                      <td className="border border-gray-300 p-2">زيارة المصنع</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. إجراءات التأهيل المسبق</h3>

              <p className="mb-4">
                قبل التعاقد، يجب إجراء تأهيل شامل للمورد:
              </p>

              <ol className="list-decimal pr-8 space-y-3 mb-6">
                <li><strong className="text-gray-800">طلب العينات:</strong> الحصول على عينات متنوعة لاختبار الجودة</li>
                <li><strong className="text-gray-800">زيارة المصنع:</strong> تقييم مرافق الإنتاج ونظم الجودة</li>
                <li><strong className="text-gray-800">مراجعة الشهادات:</strong> التحقق من صحة جميع الشهادات</li>
                <li><strong className="text-gray-800">التحقق من المراجع:</strong> التواصل مع عملاء سابقين</li>
                <li><strong className="text-gray-800">تقييم الاستقرار المالي:</strong> ضمان استمرارية المورد</li>
              </ol>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. التفاوض وشروط التعاقد</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">نقاط التفاوض الرئيسية</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>السعر والخصومات:</strong> تدرج الخصومات حسب الكمية</li>
                  <li>• <strong>شروط الدفع:</strong> مرونة في جدولة المدفوعات</li>
                  <li>• <strong>مواعيد التسليم:</strong> ضمانات زمنية واضحة</li>
                  <li>• <strong>ضمان الجودة:</strong> آليات الاستبدال والإرجاع</li>
                  <li>• <strong>الدعم الفني:</strong> خدمات ما بعد البيع</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">إجراءات ضمان الجودة أثناء الإنتاج</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. مراقبة الجودة في المراحل المختلفة</h3>

              <p className="mb-4">
                ضمان الجودة يتطلب مراقبة مستمرة في جميع مراحل الإنتاج:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">فحص المواد الخام:</strong> اختبار الأقمشة والخيوط قبل الإنتاج</li>
                <li><strong className="text-gray-800">مراقبة القطع:</strong> دقة القياسات والأشكال</li>
                <li><strong className="text-gray-800">فحص الخياطة:</strong> جودة الغرز والتشطيبات</li>
                <li><strong className="text-gray-800">الفحص النهائي:</strong> تقييم شامل للمنتج المكتمل</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. نظام نقاط التفتيش الحرجة</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">نقاط التفتيش الأساسية</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">المرحلة</th>
                      <th className="border border-gray-300 p-2 text-right">نقاط التفتيش</th>
                      <th className="border border-gray-300 p-2 text-right">معايير القبول</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">المواد الخام</td>
                      <td className="border border-gray-300 p-2">وزن القماش، ثبات اللون</td>
                      <td className="border border-gray-300 p-2">100% مطابقة للمواصفات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">القطع</td>
                      <td className="border border-gray-300 p-2">دقة القياسات</td>
                      <td className="border border-gray-300 p-2">انحراف أقل من ±2مم</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الخياطة</td>
                      <td className="border border-gray-300 p-2">قوة الغرز، استقامة الخطوط</td>
                      <td className="border border-gray-300 p-2">معدل عيوب أقل من 2%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">التشطيب</td>
                      <td className="border border-gray-300 p-2">نظافة، كي، تغليف</td>
                      <td className="border border-gray-300 p-2">مظهر احترافي 100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. اختبارات الجودة المتقدمة</h3>

              <p className="mb-4">
                اختبارات متخصصة لضمان أعلى معايير الجودة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">اختبار مقاومة السوائل:</strong> قياس قدرة القماش على صد السوائل</li>
                <li><strong className="text-gray-800">اختبار مقاومة البكتيريا:</strong> فعالية المعالجات المضادة للميكروبات</li>
                <li><strong className="text-gray-800">اختبار التحمل:</strong> محاكاة الاستخدام المكثف</li>
                <li><strong className="text-gray-800">اختبار الراحة:</strong> قياس نفاذية الهواء والرطوبة</li>
              </ul>

              <BlogImage
                src="/images/healthcare_uniforms/bulk-order-delivery-process.jpg"
                alt="عملية تسليم الطلبات بالجملة"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">إدارة الطلبات الكبيرة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. تخطيط الاحتياجات</h3>

              <p className="mb-4">
                التخطيط الدقيق للاحتياجات يضمن الحصول على الكمية المناسبة:
              </p>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">خطوات تخطيط الاحتياجات</h4>
                <ol className="space-y-2 mb-0">
                  <li>1. <strong>حصر الكادر الحالي:</strong> عدد الموظفين في كل قسم</li>
                  <li>2. <strong>تحليل معدل الاستهلاك:</strong> عدد القطع المطلوبة سنوياً لكل موظف</li>
                  <li>3. <strong>توقع النمو:</strong> التوسعات المخططة والتوظيف الجديد</li>
                  <li>4. <strong>المخزون الاحتياطي:</strong> 15-20% إضافية للطوارئ</li>
                  <li>5. <strong>التنويع في المقاسات:</strong> توزيع المقاسات حسب الإحصائيات</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. جدولة التسليم</h3>

              <p className="mb-4">
                تنظيم عمليات التسليم لضمان التدفق السلس:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">التسليم المرحلي:</strong> تقسيم الطلبة على دفعات حسب الأولوية</li>
                <li><strong className="text-gray-800">التنسيق مع الأقسام:</strong> جدولة التسليم حسب احتياجات كل قسم</li>
                <li><strong className="text-gray-800">مرونة التوقيت:</strong> إمكانية تعديل مواعيد التسليم</li>
                <li><strong className="text-gray-800">التخزين المؤقت:</strong> ترتيبات التخزين قبل التوزيع</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. إدارة المخزون</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">نظام إدارة المخزون الفعال</h4>
                <ul className="list-disc pr-6 space-y-2 mb-0">
                  <li>نظام تتبع إلكتروني لجميع القطع</li>
                  <li>تصنيف حسب النوع والمقاس واللون</li>
                  <li>نظام FIFO (الأول داخل، الأول خارج)</li>
                  <li>مراقبة مستويات المخزون الأدنى</li>
                  <li>تقارير دورية عن حالة المخزون</li>
                  <li>نظام إنذار مبكر لنفاد المخزون</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">ضمان الجودة بعد التسليم</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. إجراءات الفحص والاستلام</h3>

              <p className="mb-4">
                فحص دقيق للطلبية عند الاستلام لضمان المطابقة:
              </p>

              <ol className="list-decimal pr-8 space-y-3 mb-6">
                <li><strong className="text-gray-800">فحص الكمية:</strong> التأكد من مطابقة الكمية المستلمة للمطلوبة</li>
                <li><strong className="text-gray-800">فحص الجودة:</strong> اختبار عينات عشوائية من كل دفعة</li>
                <li><strong className="text-gray-800">فحص المقاسات:</strong> التحقق من دقة المقاسات المختلفة</li>
                <li><strong className="text-gray-800">فحص التشطيبات:</strong> تقييم جودة الخياطة والتشطيب</li>
                <li><strong className="text-gray-800">توثيق النتائج:</strong> تسجيل نتائج الفحص في تقرير مفصل</li>
              </ol>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. آليات الضمان والاستبدال</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">سياسة الضمان الشاملة</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>ضمان الجودة:</strong> 12 شهر ضد عيوب التصنيع</li>
                  <li>• <strong>ضمان المقاسات:</strong> استبدال مجاني للمقاسات غير المناسبة</li>
                  <li>• <strong>ضمان الألوان:</strong> ثبات اللون لمدة 6 أشهر</li>
                  <li>• <strong>الاستبدال السريع:</strong> خلال 48 ساعة للعيوب الواضحة</li>
                  <li>• <strong>الدعم الفني:</strong> متابعة مستمرة لمدة عام كامل</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. تقييم الأداء المستمر</h3>

              <p className="mb-4">
                متابعة أداء الزي الطبي في الاستخدام الفعلي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">استطلاعات الرضا:</strong> تقييم دوري من الكادر الطبي</li>
                <li><strong className="text-gray-800">مراقبة التآكل:</strong> تتبع معدل تلف الزي مع الاستخدام</li>
                <li><strong className="text-gray-800">تحليل الشكاوى:</strong> دراسة أي مشاكل أو ملاحظات</li>
                <li><strong className="text-gray-800">تقييم التكلفة الإجمالية:</strong> حساب التكلفة الفعلية للملكية</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التطبيق في المؤسسات السعودية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. دراسة حالة: مجمع الملك فهد الطبي</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">مشروع التجديد الشامل للزي الطبي</h4>
                <p className="mb-3">
                  نفذ مجمع الملك فهد الطبي مشروعاً شاملاً لتجديد الزي الطبي لـ 3000 موظف:
                </p>
                
                <h5 className="font-semibold mb-2">التحديات:</h5>
                <ul className="space-y-1 mb-4">
                  <li>• تنوع الاحتياجات بين 15 قسماً مختلفاً</li>
                  <li>• ضرورة الحفاظ على الخدمة أثناء التغيير</li>
                  <li>• ميزانية محدودة مع متطلبات جودة عالية</li>
                  <li>• ضرورة التسليم في وقت قياسي</li>
                </ul>
                
                <h5 className="font-semibold mb-2">الحلول المطبقة:</h5>
                <ul className="space-y-1 mb-4">
                  <li>• تقسيم الطلبة على 4 مراحل زمنية</li>
                  <li>• اختبار مكثف للعينات قبل الإنتاج</li>
                  <li>• نظام مراقبة جودة صارم</li>
                  <li>• تدريب فرق الاستلام والتوزيع</li>
                </ul>
                
                <h5 className="font-semibold mb-2">النتائج:</h5>
                <ul className="space-y-1 mb-0">
                  <li>• توفير 35% في التكلفة الإجمالية</li>
                  <li>• تحسن رضا الموظفين بنسبة 89%</li>
                  <li>• تقليل شكاوى الجودة بنسبة 92%</li>
                  <li>• تسليم جميع المراحل في الوقت المحدد</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. أفضل الممارسات في السوق السعودي</h3>

              <p className="mb-4">
                تجارب ناجحة من مؤسسات صحية رائدة في المملكة:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">نصائح من الخبراء المحليين</h4>
                <ul className="list-disc pr-6 space-y-2 mb-0">
                  <li>التعاقد مع موردين محليين لضمان سرعة الخدمة</li>
                  <li>إشراك الكادر الطبي في اختيار التصاميم والألوان</li>
                  <li>التركيز على الأقمشة المناسبة للمناخ السعودي</li>
                  <li>وضع خطة طوارئ للتعامل مع النقص المفاجئ</li>
                  <li>الاستفادة من التقنيات الحديثة في إدارة المخزون</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التوجهات المستقبلية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. التقنيات الذكية في إدارة الطلبات</h3>

              <p className="mb-4">
                استخدام التقنيات الحديثة لتحسين عمليات الطلب والمتابعة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الذكاء الاصطناعي:</strong> توقع الاحتياجات وتحسين التخطيط</li>
                <li><strong className="text-gray-800">إنترنت الأشياء:</strong> تتبع المخزون في الوقت الفعلي</li>
                <li><strong className="text-gray-800">البلوك تشين:</strong> ضمان شفافية سلسلة التوريد</li>
                <li><strong className="text-gray-800">الواقع المعزز:</strong> تجربة افتراضية للزي قبل الطلب</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. الاستدامة والمسؤولية البيئية</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">مبادرات الاستدامة</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>المواد المستدامة:</strong> أقمشة من مصادر متجددة</li>
                  <li>• <strong>التصنيع الأخضر:</strong> عمليات إنتاج صديقة للبيئة</li>
                  <li>• <strong>إعادة التدوير:</strong> برامج لإعادة تدوير الزي المستعمل</li>
                  <li>• <strong>التغليف البيئي:</strong> مواد تغليف قابلة للتحلل</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-primary mb-3 font-semibold">نصائح الخبراء</h3>
                <p className="mb-0 italic">
                  "الشراء بالجملة للزي الطبي ليس مجرد قرار اقتصادي، بل استراتيجية شاملة تؤثر على جودة الرعاية الصحية. من خلال خبرتي في إدارة المشتريات لأكثر من 20 مستشفى في المملكة، أؤكد أن النجاح يكمن في التوازن بين الجودة والتكلفة، مع التركيز على بناء شراكات طويلة الأمد مع موردين موثوقين. المفتاح هو وضع معايير واضحة للجودة والالتزام بها، مع الاستثمار في أنظمة مراقبة الجودة المتقدمة."
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  م. سارة الزهراني، خبيرة إدارة المشتريات الطبية
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الخلاصة والتوصيات</h2>

              <p className="mb-4">
                طلب الزي الطبي بالجملة مع ضمان الجودة يتطلب نهجاً منهجياً ومتكاملاً يبدأ من التخطيط الدقيق للاحتياجات وينتهي بالمتابعة المستمرة للأداء. النجاح في هذه العملية يحقق وفورات كبيرة في التكلفة مع ضمان أعلى معايير الجودة.
              </p>

              <p className="mb-4">
                المؤسسات الصحية التي تطبق أفضل الممارسات في الشراء بالجملة تحقق نتائج متميزة في رضا الموظفين وجودة الخدمة. الاستثمار في أنظمة ضمان الجودة وبناء شراكات استراتيجية مع الموردين يضمن استدامة هذا النجاح.
              </p>

              <p className="mb-0">
                في خبراء الزي الموحد، نقدم حلولاً متكاملة للمؤسسات الصحية السعودية، تجمع بين الجودة العالية والأسعار التنافسية. نلتزم بأعلى معايير الجودة ونوفر ضمانات شاملة، مع دعم فني متخصص يضمن نجاح مشاريع الشراء بالجملة وتحقيق أهداف المؤسسة في التميز والكفاءة.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}