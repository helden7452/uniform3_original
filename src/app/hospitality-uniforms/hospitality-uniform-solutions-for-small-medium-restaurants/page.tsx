import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'حلول زي الضيافة للمطاعم والمقاهي الصغيرة والمتوسطة | خبراء الزي الموحد',
  description: 'دليل شامل لحلول زي الضيافة المناسبة للمطاعم والمقاهي الصغيرة والمتوسطة، مع التركيز على التكلفة والجودة والوظيفية',
  keywords: 'زي مطاعم صغيرة, زي مقاهي, أزياء ضيافة اقتصادية, حلول زي موحد, أزياء مطاعم متوسطة',
};

export default function SmallRestaurantUniformsPage() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-right">
        حلول زي الضيافة للمطاعم والمقاهي الصغيرة والمتوسطة
      </h1>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/hospitality_uniforms/modern_restaurant_uniforms.jpg"
          alt="حلول زي الضيافة للمطاعم الصغيرة"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-right">
        <p className="lead text-xl font-semibold mb-8">
          تواجه المطاعم والمقاهي الصغيرة والمتوسطة تحديات خاصة في اختيار وتنفيذ الزي الموحد. في هذا الدليل الشامل، نقدم حلولاً عملية ومجدية من حيث التكلفة لتنفيذ الزي الموحد في هذه المؤسسات.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">حلول اقتصادية</h2>
        <p className="mb-6">
          تشمل الحلول الاقتصادية الرئيسية:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>خيارات التكلفة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تصميمات بسيطة وفعالة</li>
              <li>خامات متوسطة الجودة</li>
              <li>حلول متعددة الاستخدام</li>
              <li>تكلفة صيانة منخفضة</li>
            </ul>
          </li>
          <li>
            <strong>استراتيجيات التوفير:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>شراء بالجملة</li>
              <li>استخدام خامات محلية</li>
              <li>تصميمات قابلة للتعديل</li>
              <li>صيانة دورية</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/banquet_event_staff_wear.jpg"
            alt="حلول اقتصادية للزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">تصميمات عملية</h2>
        <p className="mb-6">
          تشمل التصميمات العملية المناسبة:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>تصميمات وظيفية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>سهولة الحركة</li>
              <li>راحة في الاستخدام</li>
              <li>مقاومة البقع</li>
              <li>سهولة الغسيل</li>
            </ul>
          </li>
          <li>
            <strong>تفاصيل عملية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>جيوب وظيفية</li>
              <li>أزرار وسحابات متينة</li>
              <li>خامات سهلة العناية</li>
              <li>تصميمات متعددة الاستخدام</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">تنفيذ فعال</h2>
        <p className="mb-6">
          تشمل استراتيجيات التنفيذ الفعال:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التخطيط المسبق:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>دراسة الاحتياجات</li>
              <li>تحديد الميزانية</li>
              <li>اختيار الموردين</li>
              <li>وضع الجدول الزمني</li>
            </ul>
          </li>
          <li>
            <strong>التنفيذ المنظم:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>توزيع منظم</li>
              <li>تدريب الموظفين</li>
              <li>متابعة الجودة</li>
              <li>تقييم النتائج</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/ready_made_hospitality_uniforms.jpg"
            alt="تنفيذ الزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">حلول مبتكرة</h2>
        <p className="mb-6">
          تشمل الحلول المبتكرة:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>تصميمات متعددة الاستخدام:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>قطع قابلة للتبديل</li>
              <li>تصميمات مرنة</li>
              <li>حلول موسمية</li>
              <li>تحديثات سهلة</li>
            </ul>
          </li>
          <li>
            <strong>تقنيات حديثة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>خامات متطورة</li>
              <li>تقنيات مقاومة البقع</li>
              <li>حلول سهلة العناية</li>
              <li>تصميمات ذكية</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">التحديات والحلول</h2>
        <p className="mb-6">
          من أهم التحديات التي تواجه المطاعم الصغيرة:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التحديات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>محدودية الميزانية</li>
              <li>تنوع الاحتياجات</li>
              <li>إدارة المخزون</li>
              <li>تحديثات دورية</li>
            </ul>
          </li>
          <li>
            <strong>الحلول:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تصميمات مرنة</li>
              <li>حلول اقتصادية</li>
              <li>إدارة فعالة</li>
              <li>تخطيط استراتيجي</li>
            </ul>
          </li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">الخلاصة</h3>
          <p className="text-lg">
            يمكن للمطاعم والمقاهي الصغيرة والمتوسطة تحقيق مظهر احترافي من خلال تبني حلول ذكية ومجدية من حيث التكلفة لتنفيذ الزي الموحد. من خلال التركيز على التصميمات العملية والتنفيذ الفعال، يمكن تحقيق توازن مثالي بين الجودة والتكلفة.
          </p>
        </div>
      </div>
    </article>
  );
} 