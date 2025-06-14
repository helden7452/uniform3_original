import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'الدليل الشامل لاختيار أزياء الطيران في المملكة العربية السعودية | خبراء الزي الموحد',
  description: 'دليل متكامل لاختيار أفضل أزياء الطيران في السعودية، يشمل المعايير والمواصفات والموردين المعتمدين والأسعار والجودة',
};

export default function ComprehensiveGuideToChoosingAviationUniformsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الطيران', href: '/aviation-uniforms' },
          { label: 'دليل اختيار أزياء الطيران', href: '/aviation-uniforms/comprehensive-guide-to-choosing-aviation-uniforms-in-saudi-arabia', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation-uniforms/choosing-guide.jpg"
            alt="دليل اختيار أزياء الطيران في السعودية"
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
              <span>12 دقيقة للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">الدليل الشامل لاختيار أزياء الطيران في المملكة العربية السعودية</h1>
          
          <div className="prose prose-lg max-w-none rtl">
            <p>
              يُعد اختيار أزياء الطيران المناسبة قراراً استراتيجياً مهماً لشركات الطيران في المملكة العربية السعودية. هذا الدليل الشامل يقدم إرشادات عملية ومفصلة لمساعدة صناع القرار في اختيار أفضل الحلول التي تلبي احتياجاتهم وتعكس هويتهم المؤسسية.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">معايير الاختيار الأساسية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. الجودة والمتانة</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>جودة الأقمشة:</strong> اختيار أقمشة عالية الجودة مقاومة للتجعد والبقع</li>
              <li><strong>قوة الخياطة:</strong> خياطة متينة تتحمل الاستخدام المكثف</li>
              <li><strong>ثبات الألوان:</strong> ألوان مقاومة للبهتان والغسيل المتكرر</li>
              <li><strong>مقاومة التآكل:</strong> مواد تحافظ على شكلها مع الوقت</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2. الامتثال للمعايير</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>معايير GACA:</strong> الالتزام بمتطلبات الهيئة العامة للطيران المدني</li>
              <li><strong>معايير السلامة:</strong> مقاومة الحريق والمواد الآمنة</li>
              <li><strong>المعايير الدولية:</strong> الامتثال لمعايير IATA و ICAO</li>
              <li><strong>المعايير الثقافية:</strong> احترام القيم والتقاليد السعودية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3. الراحة والعملية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>حرية الحركة:</strong> تصاميم تسمح بالحركة الطبيعية</li>
              <li><strong>التهوية:</strong> أقمشة تسمح بتدفق الهواء</li>
              <li><strong>سهولة العناية:</strong> أزياء سهلة الغسيل والكي</li>
              <li><strong>المقاسات المتنوعة:</strong> توفر مقاسات تناسب جميع أعضاء الطاقم</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">نصائح الخبراء</h3>
              <p className="mb-0">
                عند اختيار أزياء الطيران، يُنصح بطلب عينات من الموردين المختلفين واختبارها في ظروف العمل الفعلية لمدة أسبوعين على الأقل. هذا يساعد في تقييم الراحة والمتانة والمظهر العام قبل اتخاذ القرار النهائي.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">أنواع أزياء الطيران المتاحة</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">أزياء الطيارين</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الزي الرسمي:</strong> للمناسبات الرسمية والاجتماعات</li>
              <li><strong>زي العمل اليومي:</strong> للاستخدام العادي في الرحلات</li>
              <li><strong>الزي الصيفي:</strong> أقمشة خفيفة للمناخ الحار</li>
              <li><strong>الزي الشتوي:</strong> طبقات إضافية للطقس البارد</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">أزياء طاقم الضيافة</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الزي الأساسي:</strong> للاستخدام اليومي في الرحلات</li>
              <li><strong>الزي الرسمي:</strong> للرحلات الخاصة والمناسبات</li>
              <li><strong>الإكسسوارات:</strong> أوشحة وبروشات وحقائب</li>
              <li><strong>الأحذية المتخصصة:</strong> أحذية مريحة وآمنة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">عملية الاختيار خطوة بخطوة</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">المرحلة الأولى: التخطيط</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>تحديد الاحتياجات:</strong> عدد الموظفين وأنواع الأزياء المطلوبة</li>
              <li><strong>وضع الميزانية:</strong> تحديد الميزانية المتاحة للمشروع</li>
              <li><strong>تشكيل فريق الاختيار:</strong> ممثلين من مختلف الأقسام</li>
              <li><strong>وضع الجدول الزمني:</strong> تحديد مواعيد التسليم المطلوبة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">المرحلة الثانية: البحث والمقارنة</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>البحث عن الموردين:</strong> قائمة بالموردين المعتمدين</li>
              <li><strong>طلب العروض:</strong> الحصول على عروض أسعار مفصلة</li>
              <li><strong>مقارنة الخيارات:</strong> تقييم الجودة والسعر والخدمة</li>
              <li><strong>فحص المراجع:</strong> التحقق من تجارب العملاء السابقين</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">معايير تقييم الموردين</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">المعيار</th>
                      <th className="border border-gray-300 p-2 text-right">الوزن</th>
                      <th className="border border-gray-300 p-2 text-right">التفاصيل</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">الجودة</td>
                      <td className="border border-gray-300 p-2">30%</td>
                      <td className="border border-gray-300 p-2">جودة المواد والتصنيع</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">السعر</td>
                      <td className="border border-gray-300 p-2">25%</td>
                      <td className="border border-gray-300 p-2">التنافسية والقيمة مقابل المال</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الخدمة</td>
                      <td className="border border-gray-300 p-2">20%</td>
                      <td className="border border-gray-300 p-2">خدمة العملاء والدعم</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">التسليم</td>
                      <td className="border border-gray-300 p-2">15%</td>
                      <td className="border border-gray-300 p-2">الالتزام بالمواعيد</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الخبرة</td>
                      <td className="border border-gray-300 p-2">10%</td>
                      <td className="border border-gray-300 p-2">سنوات الخبرة والمشاريع السابقة</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الاعتبارات المالية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">تكلفة الملكية الإجمالية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التكلفة الأولية:</strong> سعر الشراء والتسليم</li>
              <li><strong>تكلفة الصيانة:</strong> الغسيل والكي والإصلاحات</li>
              <li><strong>تكلفة الاستبدال:</strong> معدل استبدال القطع التالفة</li>
              <li><strong>التكاليف الإضافية:</strong> التدريب والتخزين</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">خيارات التمويل</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الدفع النقدي:</strong> خصومات للدفع المقدم</li>
              <li><strong>التقسيط:</strong> دفعات شهرية أو ربع سنوية</li>
              <li><strong>الإيجار التشغيلي:</strong> استئجار الأزياء مع الصيانة</li>
              <li><strong>الشراء بالجملة:</strong> خصومات للكميات الكبيرة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">إدارة المشروع والتنفيذ</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">مراحل التنفيذ</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التوقيع على العقد:</strong> تحديد الشروط والأحكام</li>
              <li><strong>مرحلة التصميم:</strong> وضع التصاميم النهائية</li>
              <li><strong>الإنتاج التجريبي:</strong> إنتاج عينات للاختبار</li>
              <li><strong>الإنتاج الكامل:</strong> تصنيع الكميات المطلوبة</li>
              <li><strong>التسليم والتدريب:</strong> تسليم الأزياء وتدريب الطاقم</li>
            </ul>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">قصة نجاح</h3>
              <p className="mb-0">
                نجحت إحدى شركات الطيران السعودية في تقليل تكاليف الأزياء بنسبة 25% من خلال اختيار مورد محلي يقدم جودة عالية بأسعار تنافسية. كما حققت رضا الطاقم بنسبة 90% من خلال إشراكهم في عملية الاختيار منذ البداية.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p>
              اختيار أزياء الطيران المناسبة استثمار طويل الأمد يؤثر على صورة الشركة ورضا الموظفين. باتباع هذا الدليل الشامل، يمكن لشركات الطيران السعودية اتخاذ قرارات مدروسة تحقق أفضل النتائج.
            </p>
            <p>
              في خبراء الزي الموحد، نقدم استشارات مجانية لمساعدة شركات الطيران في اختيار الحلول المثلى التي تناسب احتياجاتها وميزانيتها، مع ضمان أعلى معايير الجودة والخدمة.
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