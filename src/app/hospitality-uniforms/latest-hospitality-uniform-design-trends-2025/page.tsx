import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أحدث اتجاهات تصميم زي الضيافة في 2025: رؤية مستقبلية | خبراء الزي الموحد',
  description: 'دليل شامل لأحدث اتجاهات وتصاميم زي الضيافة المتوقعة في 2025، مع التركيز على الابتكار والاستدامة والذكاء الاصطناعي',
  keywords: 'تصميم زي الضيافة 2025, أزياء ضيافة مستقبلية, أزياء ذكية, أزياء مستدامة, اتجاهات الموضة في الضيافة',
};

export default function LatestTrendsPage() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-right">
        أحدث اتجاهات تصميم زي الضيافة في 2025: رؤية مستقبلية للتميز
      </h1>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/hospitality_uniforms/makkah_hotel_uniforms.jpg"
          alt="اتجاهات زي الضيافة المستقبلية"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-right">
        <p className="lead text-xl font-semibold mb-8">
          يشهد قطاع الضيافة تطوراً متسارعاً في تصميم الزي الموحد، حيث تظهر اتجاهات جديدة تجمع بين الابتكار التكنولوجي والاستدامة والراحة. في هذا الدليل الشامل، نستكشف أحدث الاتجاهات المتوقعة في 2025.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">التكنولوجيا الذكية في الزي الموحد</h2>
        <p className="mb-6">
          تشمل الابتكارات التكنولوجية في الزي الموحد:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>الأقمشة الذكية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تنظيم درجة الحرارة تلقائياً</li>
              <li>مقاومة البقع والروائح</li>
              <li>تتبع الأداء والصحة</li>
              <li>شحن الأجهزة المحمولة</li>
            </ul>
          </li>
          <li>
            <strong>التفاعل الرقمي:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>شاشات عرض مدمجة</li>
              <li>تقنيات الواقع المعزز</li>
              <li>تحديد المواقع الدقيق</li>
              <li>التواصل المباشر</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/modern_restaurant_uniforms.jpg"
            alt="الأزياء الذكية في الضيافة"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">الاستدامة والبيئة</h2>
        <p className="mb-6">
          تركز التصاميم الحديثة على:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>المواد المستدامة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>أقمشة معاد تدويرها</li>
              <li>خامات عضوية</li>
              <li>تقنيات إنتاج صديقة للبيئة</li>
              <li>قابلية إعادة التدوير</li>
            </ul>
          </li>
          <li>
            <strong>تصميم مستدام:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تقليل النفايات</li>
              <li>كفاءة استخدام الموارد</li>
              <li>تصميم متعدد الاستخدام</li>
              <li>تقليل البصمة الكربونية</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">الراحة والأداء</h2>
        <p className="mb-6">
          تطورت معايير الراحة لتشمل:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>تصميم وظيفي:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>حرية الحركة</li>
              <li>تنظيم درجة الحرارة</li>
              <li>سهولة العناية</li>
              <li>متانة عالية</li>
            </ul>
          </li>
          <li>
            <strong>تحسين الأداء:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تقليل التعب</li>
              <li>تحسين الإنتاجية</li>
              <li>تعزيز الثقة</li>
              <li>رفع مستوى الخدمة</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/banquet_event_staff_wear.jpg"
            alt="الراحة في زي الضيافة"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">التخصيص والهوية</h2>
        <p className="mb-6">
          تطورت أساليب التخصيص لتشمل:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>تصميم مخصص:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>قياسات دقيقة</li>
              <li>تفضيلات شخصية</li>
              <li>تعديلات سهلة</li>
              <li>تنوع في الخيارات</li>
            </ul>
          </li>
          <li>
            <strong>تعزيز الهوية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>دمج العناصر الثقافية</li>
              <li>تحديث مستمر</li>
              <li>تمييز الوظائف</li>
              <li>تناسق مع العلامة</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">التحديات والحلول</h2>
        <p className="mb-6">
          من أهم التحديات التي تواجه التصميم المستقبلي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التحديات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تكلفة التكنولوجيا</li>
              <li>قابلية التنفيذ</li>
              <li>قبول المستخدمين</li>
              <li>التحديث المستمر</li>
            </ul>
          </li>
          <li>
            <strong>الحلول:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>استثمار تدريجي</li>
              <li>تدريب شامل</li>
              <li>تقييم مستمر</li>
              <li>تطوير مستدام</li>
            </ul>
          </li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">الخلاصة</h3>
          <p className="text-lg">
            يشهد تصميم زي الضيافة تطوراً متسارعاً يجمع بين التكنولوجيا والاستدامة والراحة. من خلال تبني هذه الاتجاهات المستقبلية، يمكن للفنادق والمطاعم تعزيز تجربة العملاء وتحسين أداء الموظفين.
          </p>
        </div>
      </div>
    </article>
  );
} 