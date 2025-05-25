import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'معايير النظافة والصحة في زي موظفي إعداد الطعام | خبراء الزي الموحد',
  description: 'دليل شامل لمعايير النظافة والصحة في زي موظفي إعداد الطعام، مع التركيز على متطلبات السلامة والجودة',
  keywords: 'زي موظفي مطبخ, معايير نظافة, زي إعداد طعام, معايير صحية, زي مطبخ',
};

export default function FoodPreparationUniformsPage() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-right">
        معايير النظافة والصحة في زي موظفي إعداد الطعام
      </h1>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/hospitality_uniforms/modern_restaurant_uniforms.jpg"
          alt="زي موظفي إعداد الطعام"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-right">
        <p className="lead text-xl font-semibold mb-8">
          يعد الالتزام بمعايير النظافة والصحة في زي موظفي إعداد الطعام أمراً بالغ الأهمية لضمان سلامة الغذاء وجودة الخدمة. في هذا الدليل الشامل، نستكشف المعايير الأساسية والمتطلبات الضرورية لتصميم وتنفيذ زي موحد يلبي أعلى معايير النظافة والصحة.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">المعايير الأساسية</h2>
        <p className="mb-6">
          تشمل المعايير الأساسية لزي موظفي إعداد الطعام:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>متطلبات النظافة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>خامات مقاومة للبقع</li>
              <li>سهولة الغسيل</li>
              <li>مقاومة البكتيريا</li>
              <li>قابلية التعقيم</li>
            </ul>
          </li>
          <li>
            <strong>متطلبات السلامة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>مقاومة الحريق</li>
              <li>حماية من الحرارة</li>
              <li>راحة في الحركة</li>
              <li>أمان في الاستخدام</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/banquet_event_staff_wear.jpg"
            alt="المعايير الأساسية للزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">تصميم وظيفي</h2>
        <p className="mb-6">
          يشمل التصميم الوظيفي للزي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>القطع الأساسية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>قميص طويل الأكمام</li>
              <li>بنطلون مريح</li>
              <li>مريلة واقية</li>
              <li>غطاء رأس</li>
            </ul>
          </li>
          <li>
            <strong>التفاصيل الوظيفية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>جيوب محكمة</li>
              <li>أزرار آمنة</li>
              <li>تفاصيل مقاومة</li>
              <li>قطع عملية</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">معايير الصيانة</h2>
        <p className="mb-6">
          تشمل معايير صيانة الزي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>الغسيل والتعقيم:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>درجة حرارة مناسبة</li>
              <li>مواد تنظيف آمنة</li>
              <li>تعقيم دوري</li>
              <li>تجفيف صحيح</li>
            </ul>
          </li>
          <li>
            <strong>التخزين:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>مكان نظيف</li>
              <li>تهوية جيدة</li>
              <li>حماية من التلوث</li>
              <li>تنظيم مناسب</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/valet_parking_uniforms.jpg"
            alt="معايير صيانة الزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">متطلبات إضافية</h2>
        <p className="mb-6">
          تشمل المتطلبات الإضافية:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>معدات الحماية:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>قفازات</li>
              <li>أحذية واقية</li>
              <li>أغطية إضافية</li>
              <li>معدات سلامة</li>
            </ul>
          </li>
          <li>
            <strong>الملحقات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>مناشف نظيفة</li>
              <li>أدوات شخصية</li>
              <li>معدات إضافية</li>
              <li>أدوات تنظيف</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">التحديات والحلول</h2>
        <p className="mb-6">
          من أهم التحديات التي تواجه تنفيذ معايير النظافة:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التحديات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تكلفة الخامات</li>
              <li>صعوبة التنفيذ</li>
              <li>التزام الموظفين</li>
              <li>تكاليف الصيانة</li>
            </ul>
          </li>
          <li>
            <strong>الحلول:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>تدريب مستمر</li>
              <li>رقابة دورية</li>
              <li>توعية الموظفين</li>
              <li>تطوير مستمر</li>
            </ul>
          </li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">الخلاصة</h3>
          <p className="text-lg">
            يعد الالتزام بمعايير النظافة والصحة في زي موظفي إعداد الطعام أمراً ضرورياً لضمان سلامة الغذاء وجودة الخدمة. من خلال تبني استراتيجيات فعالة في التصميم والتنفيذ والصيانة، يمكن تحقيق أعلى معايير النظافة والصحة في بيئة العمل.
          </p>
        </div>
      </div>
    </article>
  );
} 