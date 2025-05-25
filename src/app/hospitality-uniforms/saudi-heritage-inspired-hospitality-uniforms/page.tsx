import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'زي الضيافة المستوحى من التراث السعودي: إضافة لمسة محلية أصيلة | خبراء الزي الموحد',
  description: 'دليل شامل لتصميم وتنفيذ زي الضيافة المستوحى من التراث السعودي، مع التركيز على دمج العناصر التراثية مع التصميم العصري',
  keywords: 'زي ضيافة تراثي, أزياء سعودية, الزي الموحد التراثي, تصميم زي تراثي, أزياء ضيافة محلية',
};

export default function HeritageUniformsPage() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-right">
        زي الضيافة المستوحى من التراث السعودي: إضافة لمسة محلية أصيلة
      </h1>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/hospitality_uniforms/makkah_hotel_uniforms.jpg"
          alt="زي الضيافة المستوحى من التراث السعودي"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-right">
        <p className="lead text-xl font-semibold mb-8">
          يمثل التراث السعودي مصدراً غنياً للإلهام في تصميم زي الضيافة، حيث يمكن دمج العناصر التراثية مع التصميم العصري لخلق هوية مميزة. في هذا الدليل الشامل، نستكشف كيفية توظيف التراث السعودي في تصميم زي الضيافة.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">عناصر التراث السعودي في التصميم</h2>
        <p className="mb-6">
          تشمل العناصر التراثية الرئيسية:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التصميمات التقليدية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>الزخارف النجدية</li>
              <li>التصاميم الحجازية</li>
              <li>الخطوط العربية</li>
              <li>الرموز التراثية</li>
            </ul>
          </li>
          <li>
            <strong>الألوان التراثية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>الألوان التقليدية</li>
              <li>درجات الألوان التراثية</li>
              <li>تناسق الألوان</li>
              <li>تأثيرات لونية</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/banquet_event_staff_wear.jpg"
            alt="عناصر التراث في تصميم الزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">دمج التراث مع العصرية</h2>
        <p className="mb-6">
          تشمل استراتيجيات الدمج الفعال:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التصميم المعاصر:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>خطوط عصرية</li>
              <li>تفاصيل حديثة</li>
              <li>خامات متطورة</li>
              <li>تقنيات حديثة</li>
            </ul>
          </li>
          <li>
            <strong>العناصر التراثية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>زخارف تقليدية</li>
              <li>ألوان تراثية</li>
              <li>رموز محلية</li>
              <li>تفاصيل أصيلة</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">تطبيقات عملية</h2>
        <p className="mb-6">
          تشمل التطبيقات العملية للتصميم التراثي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>تصميمات مختلفة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>زي الاستقبال</li>
              <li>زي المطعم</li>
              <li>زي الخدمة</li>
              <li>زي الإدارة</li>
            </ul>
          </li>
          <li>
            <strong>تفاصيل التصميم:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>الأزرار والسحابات</li>
              <li>الجيوب والتطريز</li>
              <li>الشعارات والشارات</li>
              <li>الملحقات</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/ready_made_hospitality_uniforms.jpg"
            alt="تطبيقات التصميم التراثي"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">تأثير التصميم التراثي</h2>
        <p className="mb-6">
          يشمل تأثير التصميم التراثي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>تعزيز الهوية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تميز المؤسسة</li>
              <li>تعزيز الانتماء</li>
              <li>إبراز الهوية</li>
              <li>تعزيز القيم</li>
            </ul>
          </li>
          <li>
            <strong>تأثير على العملاء:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>انطباع إيجابي</li>
              <li>تعزيز التجربة</li>
              <li>زيادة الولاء</li>
              <li>تحسين الصورة</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">التحديات والحلول</h2>
        <p className="mb-6">
          من أهم التحديات التي تواجه التصميم التراثي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التحديات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>الموازنة بين التراث والعصرية</li>
              <li>تكلفة التنفيذ</li>
              <li>قبول المستخدمين</li>
              <li>الحفاظ على الأصالة</li>
            </ul>
          </li>
          <li>
            <strong>الحلول:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تصميم متوازن</li>
              <li>تخطيط مسبق</li>
              <li>تشاور مع الخبراء</li>
              <li>تقييم مستمر</li>
            </ul>
          </li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">الخلاصة</h3>
          <p className="text-lg">
            يمثل دمج التراث السعودي في تصميم زي الضيافة فرصة مميزة لتعزيز الهوية المحلية مع الحفاظ على المعايير العالمية. من خلال تبني استراتيجيات فعالة في التصميم والتنفيذ، يمكن للفنادق والمطاعم إضافة لمسة محلية أصيلة تعزز تجربة العملاء.
          </p>
        </div>
      </div>
    </article>
  );
} 