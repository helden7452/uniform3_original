import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'نصائح للعناية بزي الضيافة: دليل شامل للحفاظ على المظهر الاحترافي | خبراء الزي الموحد',
  description: 'دليل احترافي شامل للعناية بالزي الموحد في قطاع الضيافة، مع التركيز على أفضل الممارسات للحفاظ على المظهر الاحترافي وجودة الزي',
  keywords: 'العناية بالزي الموحد, غسيل الزي الموحد, كي الزي الموحد, تخزين الزي الموحد, صيانة الزي الموحد, الزي الموحد للضيافة',
};

export default function MaintainingUniformsPage() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-right">
        نصائح للعناية بزي الضيافة: دليل شامل للحفاظ على المظهر الاحترافي
      </h1>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/hospitality_uniforms/makkah_hotel_uniforms.jpg"
          alt="العناية بزي الضيافة"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-right">
        <p className="lead text-xl font-semibold mb-8">
          يعد الحفاظ على مظهر الزي الموحد في قطاع الضيافة عنصراً أساسياً في تقديم خدمة احترافية. في هذا الدليل الشامل، نقدم أحدث النصائح وأفضل الممارسات للعناية بالزي الموحد والحفاظ على جودته.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">أساسيات العناية بالزي الموحد</h2>
        <p className="mb-6">
          يجب اتباع الممارسات التالية للحفاظ على جودة الزي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>الغسيل المنتظم:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>غسيل الزي بعد كل استخدام</li>
              <li>استخدام منظفات مناسبة</li>
              <li>مراعاة درجة حرارة الماء</li>
              <li>فصل الألوان</li>
            </ul>
          </li>
          <li>
            <strong>الكي الصحيح:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>ضبط درجة حرارة المكواة</li>
              <li>الكي من الداخل للخارج</li>
              <li>استخدام قطعة قماش رقيقة</li>
              <li>الاهتمام بالتفاصيل</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/hospitality_uniform_fabrics.jpg"
            alt="أنواع الأقمشة المستخدمة في الزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">إرشادات الغسيل المتقدمة</h2>
        <p className="mb-6">
          للحصول على أفضل نتائج في الغسيل:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>قبل الغسيل:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>قراءة تعليمات العناية</li>
              <li>إزالة البقع فوراً</li>
              <li>إغلاق السحابات</li>
              <li>قلب الزي للداخل</li>
            </ul>
          </li>
          <li>
            <strong>أثناء الغسيل:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>استخدام منظف مناسب</li>
              <li>ضبط درجة الحرارة المناسبة</li>
              <li>تجنب الغسيل المفرط</li>
              <li>استخدام برنامج غسيل لطيف</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">تقنيات الكي المتطورة</h2>
        <p className="mb-6">
          للحصول على مظهر احترافي:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>إعداد المكواة:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>ضبط درجة الحرارة حسب نوع القماش</li>
              <li>تنظيف سطح المكواة</li>
              <li>استخدام ماء مقطر</li>
              <li>التحقق من نظافة المكواة</li>
            </ul>
          </li>
          <li>
            <strong>تقنيات الكي:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>الكي من الداخل للخارج</li>
              <li>استخدام قطعة قماش واقية</li>
              <li>الاهتمام بالتفاصيل</li>
              <li>تجنب الكي المفرط</li>
            </ul>
          </li>
        </ul>

        <div className="relative w-full h-[400px] my-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/valet_parking_uniforms.jpg"
            alt="غسيل وكي الزي الموحد"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">طرق التخزين الصحيحة</h2>
        <p className="mb-6">
          للحفاظ على الزي أثناء التخزين:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>التخزين قصير المدى:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>استخدام شماعات مناسبة</li>
              <li>تغطية الزي بكيس واقي</li>
              <li>تجنب التعرض المباشر للشمس</li>
              <li>التهوية الجيدة</li>
            </ul>
          </li>
          <li>
            <strong>التخزين طويل المدى:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>غسيل وتنظيف الزي قبل التخزين</li>
              <li>استخدام أكياس محكمة</li>
              <li>إضافة مواد مانعة للرطوبة</li>
              <li>تخزين في مكان جاف</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">معالجة البقع المتخصصة</h2>
        <p className="mb-6">
          للتعامل مع مختلف أنواع البقع:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>بقع الطعام:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>إزالة البقعة فوراً</li>
              <li>استخدام منظف مناسب</li>
              <li>غسيل المنطقة المصابة</li>
              <li>التحقق من إزالة البقعة</li>
            </ul>
          </li>
          <li>
            <strong>بقع المشروبات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>امتصاص السائل فوراً</li>
              <li>استخدام محلول تنظيف مناسب</li>
              <li>غسيل المنطقة المصابة</li>
              <li>التأكد من إزالة البقعة</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">الصيانة الدورية</h2>
        <p className="mb-6">
          للحفاظ على جودة الزي على المدى الطويل:
        </p>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <strong>الفحص الدوري:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>فحص الأزرار والسحابات</li>
              <li>التأكد من سلامة الخياطة</li>
              <li>فحص الشعارات والشارات</li>
              <li>تقييم حالة القماش</li>
            </ul>
          </li>
          <li>
            <strong>الإصلاحات:</strong>
            <ul className="list-disc pr-6 mt-2">
              <li>إصلاح الأزرار المفقودة</li>
              <li>إصلاح الخياطة المتفككة</li>
              <li>تنظيف الشعارات</li>
              <li>تحديث الزي عند الحاجة</li>
            </ul>
          </li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">الخلاصة</h3>
          <p className="text-lg">
            يعد الحفاظ على مظهر الزي الموحد في قطاع الضيافة عنصراً أساسياً في تقديم خدمة احترافية. من خلال اتباع أفضل الممارسات في الغسيل والكي والتخزين، يمكن الحفاظ على جودة الزي وتعزيز المظهر الاحترافي للمؤسسة.
          </p>
        </div>
      </div>
    </article>
  );
} 