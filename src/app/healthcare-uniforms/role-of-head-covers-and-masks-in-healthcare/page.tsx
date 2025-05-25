import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "دور غطاء الرأس والكمامات كجزء أساسي من زي الوقاية في القطاع الصحي | خبراء الزي الموحد",
  description: "دليل شامل حول أهمية غطاء الرأس والكمامات في القطاع الصحي، وكيف تساهم في الوقاية من العدوى وحماية العاملين والمرضى.",
  keywords: ["غطاء الرأس الطبي", "كمامات طبية", "زي الوقاية", "معدات الحماية الشخصية", "الوقاية من العدوى", "معايير السلامة الطبية"]
};

const HeadCoversAndMasks = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي القطاع الصحي', href: '/healthcare-uniforms' },
          { label: 'دور غطاء الرأس والكمامات', href: '/healthcare-uniforms/role-of-head-covers-and-masks-in-healthcare', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">دور غطاء الرأس والكمامات كجزء أساسي من زي الوقاية في القطاع الصحي</h1>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/healthcare_uniforms/scrub_caps_surgical_hats.jpg"
            alt="صورة غطاء الرأس الطبي - دور غطاء الرأس والكمامات في القطاع الصحي"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            يعد غطاء الرأس والكمامات من العناصر الأساسية في زي الوقاية في القطاع الصحي، حيث تلعب دوراً حيوياً في الوقاية من العدوى وحماية العاملين والمرضى. في هذا المقال، نستعرض أهمية هذه العناصر وكيفية استخدامها بشكل صحيح.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">أهمية غطاء الرأس في القطاع الصحي</h2>
        
        <div className="mb-8">
          <p>
            يعد غطاء الرأس عنصراً أساسياً في زي الوقاية في القطاع الصحي لعدة أسباب:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>الوقاية من العدوى:</strong> يمنع تساقط الشعر في بيئة العمل المعقمة</li>
            <li><strong>حماية العاملين:</strong> يحمي الشعر من التعرض للمواد الكيميائية والملوثات</li>
            <li><strong>تعزيز النظافة:</strong> يساهم في الحفاظ على بيئة عمل نظيفة ومعقمة</li>
            <li><strong>تحسين المظهر المهني:</strong> يعزز المظهر المهني للعاملين في القطاع الصحي</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">أنواع غطاء الرأس المستخدمة في القطاع الصحي</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">غطاء الرأس الجراحي</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الاستخدام:</strong> في غرف العمليات والبيئات المعقمة</li>
            <li><strong>المواصفات:</strong> مصنوع من مواد معقمة ومقاومة للماء</li>
            <li><strong>التصميم:</strong> يغطي الشعر بالكامل مع إمكانية تغطية الأذنين</li>
            <li><strong>الألوان:</strong> متوفر بألوان مختلفة حسب سياسة المنشأة الصحية</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">غطاء الرأس للعناية بالمرضى</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الاستخدام:</strong> في أقسام العناية بالمرضى والعيادات الخارجية</li>
            <li><strong>المواصفات:</strong> مصنوع من مواد مريحة وسهلة التنظيف</li>
            <li><strong>التصميم:</strong> بسيط ومريح مع إمكانية التعديل حسب حجم الرأس</li>
            <li><strong>الألوان:</strong> عادة ما يكون باللون الأزرق الفاتح أو الأخضر</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">أهمية الكمامات في القطاع الصحي</h2>
        
        <div className="mb-8">
          <p>
            تعد الكمامات من العناصر الأساسية في زي الوقاية في القطاع الصحي لعدة أسباب:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>الوقاية من العدوى:</strong> تمنع انتقال الميكروبات والجراثيم</li>
            <li><strong>حماية العاملين:</strong> تحمي العاملين من التعرض للمواد الضارة</li>
            <li><strong>حماية المرضى:</strong> تمنع انتقال العدوى من العاملين إلى المرضى</li>
            <li><strong>تعزيز السلامة:</strong> تساهم في الحفاظ على بيئة عمل آمنة</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">نصائح لاستخدام غطاء الرأس والكمامات بشكل صحيح</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2 text-blue-800">
            <li>تغيير غطاء الرأس والكمامات بشكل دوري</li>
            <li>التأكد من تغطية الشعر بالكامل عند ارتداء غطاء الرأس</li>
            <li>تغطية الأنف والفم بشكل صحيح عند ارتداء الكمامة</li>
            <li>التخلص من الكمامات المستخدمة في المكان المخصص</li>
            <li>غسل اليدين قبل وبعد ارتداء غطاء الرأس والكمامات</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            يعد غطاء الرأس والكمامات من العناصر الأساسية في زي الوقاية في القطاع الصحي، حيث تلعب دوراً حيوياً في الوقاية من العدوى وحماية العاملين والمرضى. يجب على العاملين في القطاع الصحي الاهتمام بارتداء هذه العناصر بشكل صحيح، مع مراعاة معايير السلامة والنظافة.
          </p>
        </div>

        <div className="mt-12 p-5 bg-slate-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-primary-600">مقالات ذات صلة</h2>
          <ul className="mr-5 space-y-2">
            <li>
              <Link href="/healthcare-uniforms/importance-of-different-uniforms-for-each-department" className="text-primary-500 hover:text-primary-700 transition-colors">
                أهمية توفير زي طبي منفصل لكل قسم داخل المنشأة الصحية
              </Link>
            </li>
            <li>
              <Link href="/healthcare-uniforms/success-stories-saudi-hospitals-with-exemplary-uniform-standards" className="text-primary-500 hover:text-primary-700 transition-colors">
                قصص نجاح: مستشفيات سعودية رائدة في تطبيق أفضل معايير الزي الطبي
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default HeadCoversAndMasks; 