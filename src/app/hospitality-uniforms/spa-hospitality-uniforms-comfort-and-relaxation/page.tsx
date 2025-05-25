import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'زي الضيافة في المنتجعات الصحية: الراحة والاسترخاء في التصميم | خبراء الزي الموحد',
  description: 'دليل شامل لتصميم وتنفيذ زي الضيافة في المنتجعات الصحية، مع التركيز على الراحة والاسترخاء في التصميم',
  keywords: 'زي سبا, أزياء منتجعات صحية, زي ضيافة مريح, أزياء استرخاء, زي منتجعات صحية',
};

export default function SpaUniformsPage() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-right">
        زي الضيافة في المنتجعات الصحية: الراحة والاسترخاء في التصميم
      </h1>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/hospitality_uniforms/valet_parking_uniforms.jpg"
          alt="زي الضيافة في المنتجعات الصحية"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-right">
        <p className="lead text-xl font-semibold mb-8">
          يعد تصميم زي الضيافة في المنتجعات الصحية تحدياً خاصاً يتطلب موازنة دقيقة بين الراحة والأناقة. في هذا الدليل الشامل، نستكشف كيفية تصميم زي موحد يجمع بين الراحة والاسترخاء مع الحفاظ على المظهر الاحترافي.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">تصميم مريح</h2>
        <p className="mb-6">
          تشمل عناصر التصميم المريح:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>الخامات المريحة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>أقمشة ناعمة</li>
              <li>خامات خفيفة</li>
              <li>تهوية جيدة</li>
              <li>راحة في الحركة</li>
            </ul>
          </li>
          <li>
            <strong>التصميم الوظيفي:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>قطع فضفاضة</li>
              <li>تفاصيل مريحة</li>
              <li>سهولة الحركة</li>
              <li>راحة في الاستخدام</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/ready_made_hospitality_uniforms.jpg"
            alt="تصميم مريح للزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">عناصر الاسترخاء</h2>
        <p className="mb-6">
          تشمل عناصر الاسترخاء في التصميم:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>الألوان الهادئة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>درجات هادئة</li>
              <li>تناسق لوني</li>
              <li>ألوان مريحة</li>
              <li>تأثيرات لونية</li>
            </ul>
          </li>
          <li>
            <strong>التفاصيل المهدئة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>خطوط ناعمة</li>
              <li>تفاصيل بسيطة</li>
              <li>زخارف هادئة</li>
              <li>تناسق بصري</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">وظائف متخصصة</h2>
        <p className="mb-6">
          تشمل الوظائف المتخصصة في التصميم:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>تصميمات وظيفية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>جيوب عملية</li>
              <li>تفاصيل خدمية</li>
              <li>سهولة الحركة</li>
              <li>راحة في العمل</li>
            </ul>
          </li>
          <li>
            <strong>ميزات خاصة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>مقاومة الرطوبة</li>
              <li>سهولة الغسيل</li>
              <li>متانة عالية</li>
              <li>راحة في العناية</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/makkah_hotel_uniforms.jpg"
            alt="وظائف متخصصة في الزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">تناسق مع البيئة</h2>
        <p className="mb-6">
          يشمل التناسق مع بيئة المنتجع الصحي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التصميم البيئي:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تناسق مع الديكور</li>
              <li>ألوان متناسقة</li>
              <li>تفاصيل متناغمة</li>
              <li>تكامل بصري</li>
            </ul>
          </li>
          <li>
            <strong>الراحة البيئية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تكيف مع المناخ</li>
              <li>راحة في البيئة</li>
              <li>تناسق مع المكان</li>
              <li>تكامل وظيفي</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">التحديات والحلول</h2>
        <p className="mb-6">
          من أهم التحديات التي تواجه تصميم زي المنتجعات الصحية:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التحديات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>الموازنة بين الراحة والأناقة</li>
              <li>تكلفة الخامات</li>
              <li>متطلبات النظافة</li>
              <li>تحديثات دورية</li>
            </ul>
          </li>
          <li>
            <strong>الحلول:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تصميم متوازن</li>
              <li>خامات عالية الجودة</li>
              <li>صيانة دورية</li>
              <li>تطوير مستمر</li>
            </ul>
          </li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">الخلاصة</h3>
          <p className="text-lg">
            يعد تصميم زي الضيافة في المنتجعات الصحية تحدياً يتطلب فهماً عميقاً لمتطلبات الراحة والاسترخاء. من خلال تبني استراتيجيات فعالة في التصميم والتنفيذ، يمكن تحقيق توازن مثالي بين الراحة والأناقة في بيئة المنتجع الصحي.
          </p>
        </div>
      </div>
    </article>
  );
} 