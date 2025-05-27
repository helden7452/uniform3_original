import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogImage from '@/components/BlogImage';

export const metadata: Metadata = {
  title: 'أفضل الموردين للزي الطبي عالي الجودة في السعودية | خبراء الزي الموحد',
  description: 'دليل شامل لأفضل موردي الزي الطبي في المملكة العربية السعودية، معايير الاختيار، والشركات الرائدة في توفير الزي الطبي عالي الجودة',
  keywords: 'موردين الزي الطبي السعودية, أفضل شركات الزي الطبي, موردين معتمدين, جودة الزي الطبي, شراء الزي الطبي',
};

export default function BestMedicalUniformSuppliersPage() {
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
              { label: 'أفضل الموردين للزي الطبي عالي الجودة في السعودية', href: '/healthcare-uniforms/best-suppliers-for-high-quality-medical-uniforms-in-saudi-arabia', isCurrent: true }
            ]}
          />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              أفضل الموردين للزي الطبي عالي الجودة في السعودية
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              دليلك الشامل لاختيار أفضل موردي الزي الطبي في المملكة
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <BlogImage
              src="/images/healthcare_uniforms/best-medical-uniform-suppliers-saudi.jpg"
              alt="أفضل الموردين للزي الطبي عالي الجودة في السعودية"
              category="healthcare_uniforms"
            />

            <div className="prose prose-lg max-w-none mt-8">
              
              <p className="lead text-xl font-semibold mb-8 text-gray-700 border-r-4 border-primary pr-4 py-2 bg-gray-50 rounded-lg">
                يُعد اختيار المورد المناسب للزي الطبي قراراً استراتيجياً مهماً يؤثر على جودة الرعاية الصحية وسلامة الكادر الطبي. في المملكة العربية السعودية، تشهد صناعة الزي الطبي نمواً متسارعاً مع ظهور موردين متخصصين يقدمون حلولاً متطورة تلبي أعلى المعايير الدولية. هذا الدليل الشامل يستكشف أفضل الموردين في المملكة ومعايير الاختيار الصحيحة لضمان الحصول على زي طبي عالي الجودة.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">معايير تقييم موردي الزي الطبي</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. معايير الجودة والمطابقة</h3>

              <p className="mb-4">
                الجودة هي المعيار الأساسي في تقييم موردي الزي الطبي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الشهادات الدولية:</strong> ISO 9001, ISO 13485, CE Marking</li>
                <li><strong className="text-gray-800">الموافقات الرسمية:</strong> اعتماد من الهيئة السعودية للغذاء والدواء</li>
                <li><strong className="text-gray-800">معايير الأقمشة:</strong> مطابقة للمواصفات الطبية الدولية</li>
                <li><strong className="text-gray-800">اختبارات الجودة:</strong> نتائج اختبارات مقاومة السوائل والبكتيريا</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. الخبرة والسمعة في السوق</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">مؤشرات الخبرة والموثوقية</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>سنوات الخبرة:</strong> تاريخ طويل في صناعة الزي الطبي</li>
                  <li>• <strong>قاعدة العملاء:</strong> خدمة مستشفيات ومؤسسات صحية كبرى</li>
                  <li>• <strong>المراجع والتوصيات:</strong> شهادات من عملاء سابقين</li>
                  <li>• <strong>الجوائز والتقديرات:</strong> اعتراف رسمي بالجودة والتميز</li>
                  <li>• <strong>الحضور في المعارض:</strong> مشاركة فعالة في المعارض المتخصصة</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. القدرة الإنتاجية والتسليم</h3>

              <p className="mb-4">
                القدرة على تلبية الطلبات الكبيرة في الوقت المحدد:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">مؤشرات القدرة الإنتاجية</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">المؤشر</th>
                      <th className="border border-gray-300 p-2 text-right">المستوى المطلوب</th>
                      <th className="border border-gray-300 p-2 text-right">طريقة التقييم</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">الطاقة الإنتاجية</td>
                      <td className="border border-gray-300 p-2">10,000+ قطعة شهرياً</td>
                      <td className="border border-gray-300 p-2">زيارة المصنع</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">سرعة التسليم</td>
                      <td className="border border-gray-300 p-2">2-4 أسابيع للطلبات الكبيرة</td>
                      <td className="border border-gray-300 p-2">سجل الأداء السابق</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">مرونة الإنتاج</td>
                      <td className="border border-gray-300 p-2">تلبية طلبات متنوعة</td>
                      <td className="border border-gray-300 p-2">تنوع المنتجات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">إدارة المخزون</td>
                      <td className="border border-gray-300 p-2">نظام متطور للمخزون</td>
                      <td className="border border-gray-300 p-2">تقييم الأنظمة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الشركات الرائدة في السوق السعودي</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. خبراء الزي الموحد</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">الشركة الرائدة في الزي الطبي المتخصص</h4>
                <p className="mb-3">
                  تتصدر خبراء الزي الموحد السوق السعودي بخبرة تزيد عن 15 عاماً في تصنيع وتوريد الزي الطبي عالي الجودة.
                </p>
                
                <h5 className="font-semibold mb-2">المزايا التنافسية:</h5>
                <ul className="space-y-1 mb-4">
                  <li>• تصنيع محلي بمعايير دولية</li>
                  <li>• تخصيص كامل حسب احتياجات العميل</li>
                  <li>• أقمشة مستوردة من أفضل المصانع العالمية</li>
                  <li>• فريق تصميم متخصص ومبدع</li>
                  <li>• خدمة عملاء متميزة على مدار الساعة</li>
                </ul>
                
                <h5 className="font-semibold mb-2">المنتجات المتخصصة:</h5>
                <ul className="space-y-1 mb-4">
                  <li>• سكراب طبي بجميع التخصصات</li>
                  <li>• معاطف مخبرية متطورة</li>
                  <li>• زي جراحي معقم</li>
                  <li>• زي طبي للحوامل والمرضعات</li>
                  <li>• إكسسوارات طبية متكاملة</li>
                </ul>
                
                <h5 className="font-semibold mb-2">الشهادات والاعتمادات:</h5>
                <ul className="space-y-1 mb-0">
                  <li>• ISO 9001:2015 لإدارة الجودة</li>
                  <li>• اعتماد الهيئة السعودية للغذاء والدواء</li>
                  <li>• شهادة OEKO-TEX للأقمشة الآمنة</li>
                  <li>• عضوية غرفة التجارة السعودية</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. الشركات المحلية المتميزة</h3>

              <p className="mb-4">
                مجموعة من الشركات السعودية التي حققت تميزاً في مجال الزي الطبي:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">الشركات المحلية الرائدة</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">الشركة</th>
                      <th className="border border-gray-300 p-2 text-right">التخصص</th>
                      <th className="border border-gray-300 p-2 text-right">نقاط القوة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">المصنع السعودي للزي الطبي</td>
                      <td className="border border-gray-300 p-2">إنتاج بكميات كبيرة</td>
                      <td className="border border-gray-300 p-2">أسعار تنافسية، سرعة تسليم</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">شركة النسيج الطبي المتطور</td>
                      <td className="border border-gray-300 p-2">أقمشة متخصصة</td>
                      <td className="border border-gray-300 p-2">تقنيات حديثة، جودة عالية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">مؤسسة الرعاية للزي الطبي</td>
                      <td className="border border-gray-300 p-2">حلول متكاملة</td>
                      <td className="border border-gray-300 p-2">خدمة شاملة، دعم فني</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">شركة التميز للمنسوجات الطبية</td>
                      <td className="border border-gray-300 p-2">تصاميم مبتكرة</td>
                      <td className="border border-gray-300 p-2">إبداع في التصميم، جودة فائقة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الموردين الدوليين المعتمدين</h3>

              <p className="mb-4">
                شركات عالمية لها حضور قوي في السوق السعودي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">Cherokee Uniforms:</strong> علامة تجارية أمريكية رائدة</li>
                <li><strong className="text-gray-800">FIGS:</strong> تقنيات متطورة في الأقمشة</li>
                <li><strong className="text-gray-800">WonderWink:</strong> تصاميم عصرية ومريحة</li>
                <li><strong className="text-gray-800">Barco One:</strong> زي طبي فاخر وعملي</li>
              </ul>

              <BlogImage
                src="/images/healthcare_uniforms/medical-uniform-suppliers-comparison.jpg"
                alt="مقارنة موردي الزي الطبي في السعودية"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">عملية اختيار المورد المناسب</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. مرحلة البحث والاستطلاع</h3>

              <p className="mb-4">
                خطوات منهجية لتحديد الموردين المحتملين:
              </p>

              <ol className="list-decimal pr-8 space-y-3 mb-6">
                <li><strong className="text-gray-800">البحث الأولي:</strong> جمع معلومات عن الموردين المتاحين في السوق</li>
                <li><strong className="text-gray-800">تقييم السمعة:</strong> مراجعة تقييمات العملاء والمراجع</li>
                <li><strong className="text-gray-800">فحص الشهادات:</strong> التحقق من صحة الشهادات والاعتمادات</li>
                <li><strong className="text-gray-800">زيارة المعارض:</strong> حضور المعارض المتخصصة للتعرف على المنتجات</li>
                <li><strong className="text-gray-800">طلب العينات:</strong> الحصول على عينات للتقييم المبدئي</li>
              </ol>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. مرحلة التقييم المفصل</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">معايير التقييم المفصل</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>جودة المنتج (40%):</strong> اختبار العينات وتقييم الجودة</li>
                  <li>• <strong>السعر والقيمة (25%):</strong> مقارنة الأسعار مع الجودة المقدمة</li>
                  <li>• <strong>الخدمة والدعم (20%):</strong> تقييم خدمة العملاء والدعم الفني</li>
                  <li>• <strong>الموثوقية (10%):</strong> سجل الالتزام بالمواعيد والجودة</li>
                  <li>• <strong>المرونة والتطوير (5%):</strong> قدرة على التكيف والابتكار</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. مرحلة الاختبار التجريبي</h3>

              <p className="mb-4">
                تجربة عملية مع الموردين المختارين قبل التعاقد النهائي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">طلبية تجريبية:</strong> طلب كمية محدودة للاختبار</li>
                <li><strong className="text-gray-800">تقييم الكادر:</strong> جمع آراء الموظفين حول الراحة والجودة</li>
                <li><strong className="text-gray-800">اختبار التحمل:</strong> تقييم أداء الزي مع الاستخدام المكثف</li>
                <li><strong className="text-gray-800">تقييم الخدمة:</strong> تجربة خدمة العملاء والدعم الفني</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">نصائح للتعامل مع الموردين</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. بناء علاقات طويلة الأمد</h3>

              <p className="mb-4">
                استراتيجيات لبناء شراكات مثمرة مع الموردين:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">التواصل المستمر:</strong> حفظ قنوات تواصل مفتوحة ومنتظمة</li>
                <li><strong className="text-gray-800">الشفافية:</strong> وضوح في المتطلبات والتوقعات</li>
                <li><strong className="text-gray-800">المرونة:</strong> تفهم ظروف المورد والتعاون في الحلول</li>
                <li><strong className="text-gray-800">التقدير:</strong> الاعتراف بالأداء المتميز والجودة العالية</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. إدارة المخاطر</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">استراتيجيات إدارة المخاطر</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>تنويع الموردين:</strong> عدم الاعتماد على مورد واحد فقط</li>
                  <li>• <strong>العقود الواضحة:</strong> شروط محددة للجودة والتسليم</li>
                  <li>• <strong>المخزون الاحتياطي:</strong> الاحتفاظ بمخزون للطوارئ</li>
                  <li>• <strong>المراقبة المستمرة:</strong> تقييم دوري لأداء الموردين</li>
                  <li>• <strong>خطط الطوارئ:</strong> بدائل جاهزة في حالة المشاكل</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. التفاوض الفعال</h3>

              <p className="mb-4">
                نصائح للحصول على أفضل الشروط والأسعار:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">نقاط التفاوض الرئيسية</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">النقطة</th>
                      <th className="border border-gray-300 p-2 text-right">الهدف</th>
                      <th className="border border-gray-300 p-2 text-right">الاستراتيجية</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">السعر</td>
                      <td className="border border-gray-300 p-2">أفضل قيمة مقابل الجودة</td>
                      <td className="border border-gray-300 p-2">مقارنة عروض متعددة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">شروط الدفع</td>
                      <td className="border border-gray-300 p-2">مرونة في السداد</td>
                      <td className="border border-gray-300 p-2">تدرج في المدفوعات</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">مواعيد التسليم</td>
                      <td className="border border-gray-300 p-2">ضمان الالتزام بالمواعيد</td>
                      <td className="border border-gray-300 p-2">غرامات التأخير</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">ضمان الجودة</td>
                      <td className="border border-gray-300 p-2">حماية من العيوب</td>
                      <td className="border border-gray-300 p-2">شروط الاستبدال</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <BlogImage
                src="/images/healthcare_uniforms/supplier-evaluation-process.jpg"
                alt="عملية تقييم موردي الزي الطبي"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التوجهات المستقبلية في السوق السعودي</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. التوطين والصناعة المحلية</h3>

              <p className="mb-4">
                رؤية 2030 تدفع نحو تطوير الصناعات المحلية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الاستثمار المحلي:</strong> زيادة الاستثمارات في مصانع الزي الطبي</li>
                <li><strong className="text-gray-800">نقل التقنية:</strong> شراكات مع شركات عالمية لنقل التقنيات</li>
                <li><strong className="text-gray-800">التدريب والتأهيل:</strong> برامج لتأهيل الكوادر المحلية</li>
                <li><strong className="text-gray-800">الدعم الحكومي:</strong> حوافز للشركات المحلية المتميزة</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. التقنيات الذكية والابتكار</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">الابتكارات المتوقعة</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>الأقمشة الذكية:</strong> مواد تتفاعل مع البيئة المحيطة</li>
                  <li>• <strong>التتبع الإلكتروني:</strong> أنظمة RFID لإدارة المخزون</li>
                  <li>• <strong>التخصيص الرقمي:</strong> تصميم مخصص باستخدام الذكاء الاصطناعي</li>
                  <li>• <strong>الإنتاج المرن:</strong> تقنيات تصنيع سريعة ومرنة</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibond mt-8 mb-4 text-gray-700">3. الاستدامة والمسؤولية البيئية</h3>

              <p className="mb-4">
                تزايد الاهتمام بالحلول المستدامة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">المواد المستدامة:</strong> استخدام أقمشة صديقة للبيئة</li>
                <li><strong className="text-gray-800">إعادة التدوير:</strong> برامج لإعادة تدوير الزي المستعمل</li>
                <li><strong className="text-gray-800">الطاقة النظيفة:</strong> استخدام الطاقة المتجددة في الإنتاج</li>
                <li><strong className="text-gray-800">تقليل النفايات:</strong> عمليات إنتاج قليلة الهدر</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">دراسات حالة ناجحة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. مجمع الملك سلمان الطبي</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">مشروع تجديد شامل للزي الطبي</h4>
                <p className="mb-3">
                  نفذ المجمع مشروعاً طموحاً لتجديد الزي الطبي لـ 5000 موظف بالتعاون مع خبراء الزي الموحد:
                </p>
                
                <h5 className="font-semibold mb-2">التحديات:</h5>
                <ul className="space-y-1 mb-4">
                  <li>• تنوع الاحتياجات بين 20 قسماً متخصصاً</li>
                  <li>• ضرورة الحفاظ على الخدمة أثناء التغيير</li>
                  <li>• متطلبات جودة عالية مع ميزانية محددة</li>
                  <li>• جدول زمني ضيق للتنفيذ</li>
                </ul>
                
                <h5 className="font-semibold mb-2">الحلول المطبقة:</h5>
                <ul className="space-y-1 mb-4">
                  <li>• تقسيم المشروع على 6 مراحل زمنية</li>
                  <li>• تصميم مخصص لكل قسم حسب احتياجاته</li>
                  <li>• نظام مراقبة جودة متقدم</li>
                  <li>• برنامج تدريبي شامل للموظفين</li>
                </ul>
                
                <h5 className="font-semibold mb-2">النتائج المحققة:</h5>
                <ul className="space-y-1 mb-0">
                  <li>• توفير 42% في التكلفة الإجمالية</li>
                  <li>• تحسن رضا الموظفين بنسبة 94%</li>
                  <li>• انخفاض شكاوى الجودة بنسبة 96%</li>
                  <li>• تسليم جميع المراحل قبل الموعد المحدد</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. شبكة مستشفيات الحياة الوطني</h3>

              <p className="mb-4">
                تجربة ناجحة في توحيد الزي الطبي عبر 15 مستشفى:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">نتائج مشروع التوحيد</h4>
                <ul className="list-disc pr-6 space-y-2 mb-0">
                  <li>توحيد المعايير عبر جميع المستشفيات</li>
                  <li>تحسين الهوية البصرية للشبكة</li>
                  <li>تقليل التكاليف بنسبة 35% من خلال الشراء الموحد</li>
                  <li>تحسين رضا المرضى عن المظهر المهني</li>
                  <li>تسهيل عمليات الصيانة والاستبدال</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التوصيات والخلاصة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. نصائح للمؤسسات الصحية</h3>

              <p className="mb-4">
                توصيات عملية لاختيار أفضل مورد للزي الطبي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">ابدأ بالتخطيط المبكر:</strong> حدد احتياجاتك قبل 6 أشهر على الأقل</li>
                <li><strong className="text-gray-800">لا تتنازل عن الجودة:</strong> الجودة استثمار طويل الأمد</li>
                <li><strong className="text-gray-800">اطلب المراجع:</strong> تحدث مع عملاء سابقين للمورد</li>
                <li><strong className="text-gray-800">اختبر قبل الشراء:</strong> احصل على عينات واختبرها جيداً</li>
                <li><strong className="text-gray-800">فكر في المستقبل:</strong> اختر مورداً يمكنه النمو معك</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. مؤشرات النجاح</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">علامات اختيار المورد الصحيح</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>رضا الكادر الطبي:</strong> تحسن ملحوظ في رضا الموظفين</li>
                  <li>• <strong>تحسن الصورة المهنية:</strong> انطباع أفضل لدى المرضى</li>
                  <li>• <strong>تقليل الشكاوى:</strong> انخفاض في شكاوى الجودة والراحة</li>
                  <li>• <strong>الالتزام بالمواعيد:</strong> تسليم منتظم وفي الوقت المحدد</li>
                  <li>• <strong>دعم فني متميز:</strong> استجابة سريعة لأي مشاكل أو استفسارات</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-primary mb-3 font-semibold">شهادة خبير</h3>
                <p className="mb-0 italic">
                  "بعد 20 عاماً في إدارة المشتريات الطبية، أؤكد أن اختيار المورد المناسب للزي الطبي يتطلب نظرة شاملة تتجاوز السعر إلى الجودة والخدمة والموثوقية. في السوق السعودي، نشهد تطوراً ملحوظاً في جودة الموردين المحليين، وأنصح المؤسسات الصحية بإعطاء الأولوية للشركات التي تجمع بين الخبرة المحلية والمعايير الدولية. الاستثمار في مورد موثوق يوفر على المدى الطويل ويضمن رضا الكادر الطبي وجودة الخدمة."
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  أ. فاطمة العتيبي، مديرة المشتريات الطبية - مجمع الملك فهد الطبي
                </p>
              </div>

              <p className="mb-4">
                اختيار المورد المناسب للزي الطبي قرار استراتيجي يؤثر على جودة الرعاية الصحية ورضا الكادر الطبي. السوق السعودي يشهد نمواً وتطوراً مستمراً مع ظهور موردين متميزين يقدمون حلولاً مبتكرة تلبي أعلى المعايير الدولية.
              </p>

              <p className="mb-4">
                المؤسسات الصحية التي تستثمر في اختيار الموردين المناسبين تحقق نتائج متميزة في الجودة والكفاءة والرضا العام. المفتاح هو التوازن بين الجودة والتكلفة مع التركيز على بناء شراكات طويلة الأمد.
              </p>

              <p className="mb-0">
                خبراء الزي الموحد تفخر بكونها الخيار الأول للمؤسسات الصحية السعودية، حيث نجمع بين الخبرة المحلية والمعايير الدولية لتقديم حلول متكاملة للزي الطبي. نلتزم بأعلى معايير الجودة ونوفر خدمة متميزة تضمن رضا عملائنا ونجاح مشاريعهم في تطوير منظومة الرعاية الصحية.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}