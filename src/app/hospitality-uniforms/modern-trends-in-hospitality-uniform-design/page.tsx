import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'اتجاهات حديثة في تصميم زي الضيافة: لمسات عصرية وأنيقة | خبراء الزي الموحد',
  description: 'دليل شامل لأحدث اتجاهات تصميم زي الضيافة في 2025، مع التركيز على التصاميم العصرية والأنيقة التي تجمع بين الجمال والوظيفية',
  keywords: 'تصميم زي الضيافة, أزياء ضيافة عصرية, أزياء فنادق حديثة, أزياء مطاعم أنيقة, اتجاهات الموضة في الضيافة',
};

export default function ModernTrendsPage() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-right">
        اتجاهات حديثة في تصميم زي الضيافة: لمسات عصرية وأنيقة
      </h1>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/hospitality_uniforms/modern_restaurant_uniforms.jpg"
          alt="اتجاهات حديثة في تصميم زي الضيافة"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-right">
        <p className="lead text-xl font-semibold mb-8">
          يشهد قطاع الضيافة تطوراً متسارعاً في مجال تصميم الزي الموحد، حيث تظهر اتجاهات جديدة تجمع بين الأناقة العصرية والوظيفية العملية. في هذا الدليل الشامل، نستكشف أحدث الاتجاهات في تصميم زي الضيافة لعام 2025.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">التصميم المعاصر والأنيق</h2>
        <p className="mb-6">
          تتميز التصاميم الحديثة بالخصائص التالية:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>الخطوط النظيفة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تصميمات بسيطة وعصرية</li>
              <li>تفاصيل دقيقة ومميزة</li>
              <li>تناسق في القص والتفصيل</li>
              <li>أسلوب عصري في التصميم</li>
            </ul>
          </li>
          <li>
            <strong>الألوان والنسيج:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>ألوان هادئة وعصرية</li>
              <li>خامات عالية الجودة</li>
              <li>تناسق في الألوان</li>
              <li>مزيج من الأقمشة</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/makkah_hotel_uniforms.jpg"
            alt="التصميم المعاصر للزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">الابتكار في التصميم</h2>
        <p className="mb-6">
          تشمل الابتكارات الحديثة في التصميم:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التقنيات الحديثة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>أقمشة ذكية متطورة</li>
              <li>تقنيات مقاومة البقع</li>
              <li>خامات صديقة للبيئة</li>
              <li>تصميمات متعددة الاستخدام</li>
            </ul>
          </li>
          <li>
            <strong>الوظائف الذكية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>جيوب وظيفية متطورة</li>
              <li>تصميمات سهلة الحركة</li>
              <li>ميزات تكنولوجية مدمجة</li>
              <li>حلول مبتكرة للراحة</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">التناسق مع هوية العلامة</h2>
        <p className="mb-6">
          يجب أن يعكس التصميم هوية المؤسسة من خلال:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>العناصر البصرية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>دمج الشعار بشكل احترافي</li>
              <li>استخدام ألوان العلامة</li>
              <li>تفاصيل تعكس الهوية</li>
              <li>تناسق مع المواد التسويقية</li>
            </ul>
          </li>
          <li>
            <strong>القيم المؤسسية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تعزيز القيم الأساسية</li>
              <li>إظهار الاحترافية</li>
              <li>تعزيز الثقة</li>
              <li>تحسين تجربة العملاء</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/banquet_event_staff_wear.jpg"
            alt="تناسق الزي الموحد مع هوية العلامة"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">الراحة والوظيفية</h2>
        <p className="mb-6">
          تركز التصاميم الحديثة على:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>تصميم وظيفي:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>حرية الحركة</li>
              <li>راحة في الاستخدام</li>
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

        <h2 className="text-2xl font-bold mt-12 mb-6">الاستدامة والبيئة</h2>
        <p className="mb-6">
          تشمل الاتجاهات الحديثة في الاستدامة:
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

        <h2 className="text-2xl font-bold mt-12 mb-6">التحديات والحلول</h2>
        <p className="mb-6">
          من أهم التحديات التي تواجه التصميم الحديث:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التحديات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تكلفة المواد المتطورة</li>
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
            يشهد تصميم زي الضيافة تطوراً متسارعاً يجمع بين الأناقة العصرية والوظيفية العملية. من خلال تبني أحدث الاتجاهات في التصميم، يمكن للفنادق والمطاعم تعزيز هويتها التجارية وتحسين تجربة العملاء.
          </p>
        </div>
      </div>
    </article>
  );
} 