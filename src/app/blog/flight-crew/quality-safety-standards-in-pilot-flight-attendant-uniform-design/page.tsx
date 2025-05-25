import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'معايير الجودة والأمان في تصميم يونيفورم الطيارين ومضيفي الطيران | خبراء الزي الموحد',
  description: 'دليل شامل حول معايير الجودة والأمان الضرورية في تصميم وتصنيع زي الطيارين ومضيفي الطيران، لضمان السلامة والراحة والمتانة',
};

export default function ArticlePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المدونة', href: '/blog' },
          { label: 'أزياء الطيران', href: '/blog/flight-crew' },
          { label: 'معايير الجودة والأمان في تصميم يونيفورم الطيارين', href: '/blog/flight-crew/quality-safety-standards-in-pilot-flight-attendant-uniform-design', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation_uniforms/safety_quality_uniforms.jpg"
            alt="معايير الجودة والأمان في تصميم يونيفورم الطيارين ومضيفي الطيران"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <Link href="/blog/flight-crew" className="text-accent hover:underline font-medium">
              أزياء الطيران
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{new Date().toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">•</span>
              <span>10 دقائق للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">معايير الجودة والأمان في تصميم يونيفورم الطيارين ومضيفي الطيران</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              تتجاوز أزياء الطيارين ومضيفي الطيران كونها مجرد تصاميم أنيقة تعكس هوية شركة الطيران؛ فهي في الأساس ملابس وظيفية تخضع لمعايير صارمة من الجودة والأمان. في بيئة الطيران التي تتميز بظروف خاصة وتحديات متنوعة، يجب أن تلبي هذه الأزياء احتياجات عملية ومتطلبات سلامة محددة. في هذا المقال، نستعرض أهم معايير الجودة والأمان التي يجب مراعاتها في تصميم وتصنيع يونيفورم الطيارين ومضيفي الطيران.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المعايير العالمية للسلامة في أزياء الطيران</h2>
            <p className="mb-4">
              تخضع أزياء الطيران لمجموعة من المعايير العالمية التي تُنظم جوانب السلامة المختلفة:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. مقاومة الاشتعال والحريق</h3>
            <p className="mb-4">
              من أهم معايير السلامة في أزياء الطيران:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">معيار ASTM F1506 الذي يحدد متطلبات مقاومة الأقمشة للاشتعال</li>
              <li className="mb-2">الالتزام بلوائح هيئة الطيران الفيدرالية (FAA) المتعلقة بمقاومة الحريق</li>
              <li className="mb-2">تطبيق اختبار معدل الاحتراق العمودي (Vertical Burn Rate Test)</li>
              <li className="mb-2">استخدام أقمشة ذاتية الإطفاء (Self-extinguishing fabrics) في قطع معينة</li>
              <li className="mb-2">تجنب الأقمشة التي تذوب عند التعرض للحرارة العالية</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. المتانة والمقاومة للتمزق</h3>
            <p className="mb-4">
              تتضمن معايير المتانة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">معيار ISO 13934 لاختبار قوة شد الأقمشة</li>
              <li className="mb-2">اختبارات مقاومة التمزق وفق معيار ASTM D5587</li>
              <li className="mb-2">مقاومة التآكل والاحتكاك (Abrasion Resistance) حسب معيار ISO 12947</li>
              <li className="mb-2">قوة الخياطة والتقاطعات وفق معايير ISO 13935</li>
              <li className="mb-2">اختبارات تحمل دورات الغسيل المتكررة</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. الرؤية والتمييز</h3>
            <p className="mb-4">
              تشمل معايير الرؤية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">استخدام ألوان محددة للتمييز السريع لأفراد الطاقم في حالات الطوارئ</li>
              <li className="mb-2">الالتزام بمعايير ISO 20471 للألوان عالية الرؤية في بعض أجزاء الزي</li>
              <li className="mb-2">توافق الألوان مع إرشادات IATA لتسهيل التعرف على أفراد الطاقم</li>
              <li className="mb-2">تضمين عناصر عاكسة في التصميم للرؤية في ظروف الإضاءة المنخفضة</li>
              <li className="mb-2">وضوح الشارات والرتب لتمييز الرتب والأدوار المختلفة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">معايير الجودة والمواصفات الفنية للأقمشة</h2>
            <p className="mb-4">
              تخضع الأقمشة المستخدمة في تصنيع أزياء الطيران لمواصفات فنية صارمة:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. خصائص الأقمشة الأساسية</h3>
            <p className="mb-4">
              تتضمن المواصفات التقنية للأقمشة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>تركيب النسيج:</strong> عادة ما يكون بوزن 150-240 جرام/متر مربع للتوازن بين المتانة والراحة</li>
              <li className="mb-2"><strong>تركيبة الألياف:</strong> مزيج من الألياف الطبيعية والصناعية (مثل 65% بوليستر، 35% قطن)</li>
              <li className="mb-2"><strong>متانة اللون:</strong> مقاومة للبهتان بمعدل 4-5 على مقياس الثبات اللوني العالمي</li>
              <li className="mb-2"><strong>كثافة النسيج:</strong> عادة بين 180-300 خيط في البوصة المربعة للمتانة المثلى</li>
              <li className="mb-2"><strong>مقاومة التجعد:</strong> معالجة خاصة للحفاظ على المظهر الأنيق طوال فترة الرحلة</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. خصائص الراحة والأداء</h3>
            <p className="mb-4">
              تتضمن معايير الراحة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>نفاذية الهواء:</strong> معدل تدفق هواء 100-400 ملم/ثانية وفق معيار ISO 9237</li>
              <li className="mb-2"><strong>امتصاص الرطوبة:</strong> قدرة على امتصاص 15-20% من وزنها للأقمشة المخلوطة</li>
              <li className="mb-2"><strong>مرونة القماش:</strong> قابلية للتمدد بنسبة 10-15% على الأقل في اتجاهين</li>
              <li className="mb-2"><strong>قدرة التبريد:</strong> معالجات خاصة لتسريع تبخر العرق وتنظيم درجة حرارة الجسم</li>
              <li className="mb-2"><strong>ثبات الأبعاد:</strong> نسبة انكماش لا تتجاوز 2% بعد الغسيل وفق معيار ISO 5077</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. المعالجات والتقنيات الخاصة</h3>
            <p className="mb-4">
              تتضمن المعالجات المتقدمة للأقمشة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>معالجة مضادة للبكتيريا:</strong> لمنع نمو البكتيريا وتقليل الروائح</li>
              <li className="mb-2"><strong>معالجة مقاومة البقع:</strong> طبقة حماية تمنع امتصاص السوائل والبقع</li>
              <li className="mb-2"><strong>معالجة مضادة للاستاتيكية:</strong> لتجنب تراكم الشحنات الكهربائية</li>
              <li className="mb-2"><strong>تقنية الحماية من الأشعة فوق البنفسجية:</strong> بمعامل حماية UPF 30+ على الأقل</li>
              <li className="mb-2"><strong>تقنيات النسيج المتقدمة:</strong> مثل نسيج التريسيتا (Tricista) لمزيد من المتانة والراحة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">متطلبات خاصة بزي الطيارين</h2>
            <p className="mb-4">
              يخضع زي الطيارين لمتطلبات إضافية نظراً لطبيعة عملهم:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. متطلبات وظيفية</h3>
            <p className="mb-4">
              يجب أن يلبي زي الطيارين المتطلبات التالية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">توفير راحة مثالية أثناء الجلوس لفترات طويلة في قمرة القيادة</li>
              <li className="mb-2">جيوب متعددة وعملية لحمل الوثائق واللوازم الضرورية</li>
              <li className="mb-2">أكمام مصممة بشكل خاص لتسهيل حركة الذراعين أثناء التحكم بالطائرة</li>
              <li className="mb-2">قماش خفيف الوزن لمنع الإرهاق خلال الرحلات الطويلة</li>
              <li className="mb-2">تصميم يسمح بتهوية جيدة في بيئة قمرة القيادة المغلقة</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. شارات الرتب والتمييز</h3>
            <p className="mb-4">
              تخضع شارات رتب الطيارين لمعايير محددة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">مطابقة للمعايير الدولية للطيران المدني (ICAO) في تمييز الرتب</li>
              <li className="mb-2">استخدام مواد عالية الجودة للشرائط (عادة خيوط ذهبية أو فضية)</li>
              <li className="mb-2">وضوح ومتانة الشارات لتحمل الاستخدام اليومي</li>
              <li className="mb-2">تثبيت آمن على الأكتاف والأكمام يضمن عدم سقوطها أو تلفها</li>
              <li className="mb-2">قابلية الإزالة في بعض التصاميم لتسهيل غسل وصيانة الزي</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. ملحقات الزي الأساسية</h3>
            <p className="mb-4">
              تتضمن ملحقات زي الطيارين مواصفات خاصة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>القبعة (Pilot Cap):</strong> تصنع من مواد متينة مع حافة صلبة مقاومة للانحناء</li>
              <li className="mb-2"><strong>ربطة العنق:</strong> غالباً ما تكون من مواد مقاومة للاشتعال وسهلة الفك في حالات الطوارئ</li>
              <li className="mb-2"><strong>حزام:</strong> متين مع إبزيم غير معدني في بعض التصاميم لتجنب الإنذارات في نقاط التفتيش</li>
              <li className="mb-2"><strong>شارة الاسم:</strong> مصنوعة من مواد متينة ومثبتة بشكل آمن</li>
              <li className="mb-2"><strong>سترة الطيار:</strong> مصممة بتفاصيل عملية تناسب احتياجات الطيران</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">متطلبات خاصة بزي مضيفي الطيران</h2>
            <p className="mb-4">
              يخضع زي مضيفي الطيران لمعايير خاصة نظراً لطبيعة عملهم المختلفة:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. متطلبات السلامة والوظيفة</h3>
            <p className="mb-4">
              يجب أن يلبي زي المضيفين المتطلبات التالية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">تصميم يسمح بحرية الحركة للتعامل مع حالات الطوارئ</li>
              <li className="mb-2">أقمشة مرنة تسمح بالانحناء والوصول للأماكن الضيقة</li>
              <li className="mb-2">تجنب العناصر المتدلية التي قد تعلق بالمعدات أثناء الإخلاء</li>
              <li className="mb-2">أحذية مريحة ذات كعب منخفض مضادة للانزلاق</li>
              <li className="mb-2">جيوب عملية لحمل المعدات الضرورية مثل قفازات اللاتكس والمصباح اليدوي</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. راحة وعملية لساعات العمل الطويلة</h3>
            <p className="mb-4">
              نظراً لطبيعة العمل لساعات طويلة، يجب أن يوفر الزي:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">راحة مثالية عند الوقوف والجلوس والحركة المتكررة</li>
              <li className="mb-2">أقمشة ذات قدرة عالية على التنفس لتجنب ارتفاع درجة حرارة الجسم</li>
              <li className="mb-2">مرونة في مناطق معينة مثل الخصر والكتف لتسهيل الحركة</li>
              <li className="mb-2">خفة الوزن لتجنب الإرهاق خلال المناوبات الطويلة</li>
              <li className="mb-2">تصميم قابل للتعديل للتكيف مع تغيرات درجات الحرارة على متن الطائرة</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. ملحقات وإكسسوارات الزي</h3>
            <p className="mb-4">
              تخضع إكسسوارات زي المضيفين لمعايير محددة:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2"><strong>الوشاح/ربطة العنق:</strong> سهلة الفك في الحالات الطارئة مع تثبيت آمن</li>
              <li className="mb-2"><strong>الحقيبة الصغيرة:</strong> متعددة الاستخدامات وآمنة الإغلاق</li>
              <li className="mb-2"><strong>الإكسسوارات:</strong> محدودة وخفيفة الوزن ولا تتسبب في إعاقة الحركة</li>
              <li className="mb-2"><strong>مشدات الملابس:</strong> غير ضاغطة وتسمح بالدورة الدموية الطبيعية</li>
              <li className="mb-2"><strong>الأحزمة:</strong> مريحة مع آلية إغلاق سريعة وآمنة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">اختبارات الجودة والاعتماد</h2>
            <p className="mb-4">
              تخضع أزياء الطيران لسلسلة من الاختبارات الصارمة قبل اعتمادها:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. اختبارات المواد</h3>
            <p className="mb-4">
              تشمل الاختبارات الأساسية للمواد:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">اختبار مقاومة الحريق وفق معايير هيئة الطيران الفيدرالية</li>
              <li className="mb-2">اختبار المتانة والتحمل (دورات الاحتكاك)</li>
              <li className="mb-2">اختبار الثبات اللوني بعد تعرضها للضوء والغسيل المتكرر</li>
              <li className="mb-2">اختبار نفاذية الهواء والتنفس</li>
              <li className="mb-2">اختبار المرونة والاستعادة (الرجوع للشكل الأصلي بعد التمدد)</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. اختبارات الأداء الوظيفي</h3>
            <p className="mb-4">
              تتضمن اختبارات الأداء الوظيفي:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">اختبارات تحركات الطوارئ مع ارتداء الزي الكامل</li>
              <li className="mb-2">محاكاة ظروف العمل لقياس الراحة والأداء على مدار ساعات طويلة</li>
              <li className="mb-2">اختبار الملائمة لمختلف أنواع الأجسام وحرية الحركة</li>
              <li className="mb-2">اختبار التوافق مع معدات الطوارئ الأخرى</li>
              <li className="mb-2">تقييم سهولة العناية والصيانة</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. الاعتماد والمطابقة</h3>
            <p className="mb-4">
              تتضمن عملية الاعتماد النهائي:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">الحصول على شهادة مطابقة من مختبرات معتمدة دولياً</li>
              <li className="mb-2">التحقق من الامتثال للوائح الهيئة العامة للطيران المدني في المملكة</li>
              <li className="mb-2">الالتزام بمعايير الاتحاد الدولي للنقل الجوي (IATA)</li>
              <li className="mb-2">الحصول على موافقة الجهات التنظيمية للصحة والسلامة المهنية</li>
              <li className="mb-2">توثيق التجارب الميدانية ونتائج الاختبارات</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">تحديات خاصة في المنطقة العربية</h2>
            <p className="mb-4">
              تواجه تصاميم أزياء الطيران في المملكة العربية السعودية والمنطقة العربية تحديات خاصة:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-3">1. الموازنة بين الاحتشام والعملية</h3>
            <p className="mb-4">
              يتطلب الأمر:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">تطوير تصاميم تراعي متطلبات الاحتشام المناسبة ثقافياً</li>
              <li className="mb-2">ضمان أن تصاميم الحجاب لا تعيق استخدام معدات الأوكسجين في حالات الطوارئ</li>
              <li className="mb-2">تصميم أزياء فضفاضة بشكل كافٍ مع الحفاظ على الأناقة</li>
              <li className="mb-2">استخدام طبقات مناسبة من الملابس دون التسبب في ارتفاع درجة حرارة الجسم</li>
              <li className="mb-2">ابتكار حلول أنيقة للعباءات والأغطية الإضافية للمضيفات</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2. التكيف مع المناخ الحار</h3>
            <p className="mb-4">
              يتطلب المناخ الصحراوي الحار:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">اختيار أقمشة خاصة تناسب درجات الحرارة العالية</li>
              <li className="mb-2">توفير مواد ذات خصائص تبريد متقدمة</li>
              <li className="mb-2">معالجات خاصة لمقاومة العرق والحفاظ على المظهر الأنيق</li>
              <li className="mb-2">تصميم طبقات يمكن إزالتها للتكيف مع الانتقال بين البيئات الحارة والمكيفة</li>
              <li className="mb-2">استخدام ألوان تعكس أشعة الشمس وتقلل من امتصاص الحرارة</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-3">3. دمج العناصر التراثية مع معايير السلامة</h3>
            <p className="mb-4">
              يتطلب دمج التراث المحلي:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">تطويع العناصر التراثية لتتوافق مع متطلبات السلامة العالمية</li>
              <li className="mb-2">استخدام الزخارف التقليدية بطريقة لا تتعارض مع الوظيفة</li>
              <li className="mb-2">تحديث القطع التقليدية بخامات حديثة تلبي معايير الجودة</li>
              <li className="mb-2">الموازنة بين التميز الثقافي والتوافق مع المعايير الدولية</li>
              <li className="mb-2">إيجاد حلول إبداعية للقطع التراثية كالغتر والبشت بما يتناسب مع بيئة العمل</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">توصيات لمصنعي وموردي أزياء الطيران</h2>
            <p className="mb-4">
              بناءً على المعايير السابقة، نقدم التوصيات التالية:
            </p>
            <ol className="list-decimal pr-6 mb-4">
              <li className="mb-2"><strong>التعاون مع الخبراء:</strong> العمل مع خبراء السلامة والجودة في قطاع الطيران</li>
              <li className="mb-2"><strong>التحديث المستمر:</strong> مواكبة أحدث التقنيات والمواد المتطورة في صناعة النسيج</li>
              <li className="mb-2"><strong>الاستثمار في الاختبارات:</strong> إجراء اختبارات شاملة ودقيقة قبل طرح المنتجات</li>
              <li className="mb-2"><strong>التوثيق الدقيق:</strong> الاحتفاظ بسجلات تفصيلية للمواد والاختبارات والشهادات</li>
              <li className="mb-2"><strong>تدريب العملاء:</strong> توفير إرشادات واضحة حول العناية والصيانة المناسبة</li>
              <li className="mb-2"><strong>الاستجابة للتغذية الراجعة:</strong> الاستماع لملاحظات أطقم الطيران وتحسين التصاميم بناءً عليها</li>
              <li className="mb-2"><strong>المرونة في التصميم:</strong> توفير خيارات متنوعة تناسب مختلف الاحتياجات والمقاسات</li>
              <li className="mb-2"><strong>الاستدامة:</strong> دمج معايير الاستدامة البيئية دون التضحية بمعايير السلامة</li>
            </ol>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p className="mb-4">
              تمثل معايير الجودة والأمان في تصميم يونيفورم الطيارين ومضيفي الطيران نقطة التقاء بين الفن والعلم، حيث تجتمع متطلبات الأناقة والهوية المؤسسية مع الاشتراطات الفنية الصارمة. إن الالتزام بهذه المعايير ليس مجرد امتثال للوائح، بل هو استثمار في سلامة الطاقم والركاب، وتعزيز لقدرة الطاقم على أداء مهامهم بفعالية وراحة.
            </p>
            <p className="mb-4">
              في خبراء الزي الموحد، نقدم استشارات متخصصة لشركات الطيران في المملكة العربية السعودية ودول الخليج، مع التركيز على تطوير يونيفورم يلبي أعلى معايير الجودة والسلامة العالمية، مع مراعاة المتطلبات الثقافية والمناخية المحلية. نساعد عملاءنا في تحقيق التوازن المثالي بين المتطلبات الوظيفية والجمالية، لإنتاج أزياء طيران تلبي احتياجات الطاقم وتعزز هوية الشركة وتضمن أعلى معايير السلامة.
            </p>
          </div>
          
          {/* Tags Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3">الوسوم:</h3>
            <div className="flex flex-wrap gap-2">
              {['معايير السلامة', 'زي الطيارين', 'زي مضيفي الطيران', 'جودة اليونيفورم', 'أقمشة مقاومة للحريق'].map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tag}`}
                  className="inline-block bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Share Section */}
          <div className="mt-8 flex justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">مشاركة المقال</h3>
              <div className="flex justify-center space-x-reverse space-x-4">
                <button className="bg-[#3b5998] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                  {/* Facebook icon would go here */}
                </button>
                <button className="bg-[#1da1f2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon would go here */}
                </button>
                <button className="bg-[#0e76a8] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                  {/* LinkedIn icon would go here */}
                </button>
                <button className="bg-[#25D366] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">WhatsApp</span>
                  {/* WhatsApp icon would go here */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 