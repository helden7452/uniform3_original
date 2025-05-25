import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "أهمية توفير زي طبي منفصل لكل قسم داخل المنشأة الصحية | خبراء الزي الموحد",
  description: "دليل شامل حول أهمية تخصيص زي موحد مختلف لكل قسم في المنشأة الصحية، وكيف يساهم ذلك في تحسين الكفاءة التشغيلية وتعزيز السلامة وتسهيل التعرف على المهام.",
  keywords: ["زي طبي", "زي المستشفى", "زي الأقسام الطبية", "يونيفورم طبي", "زي القطاع الصحي", "معايير الزي الطبي"]
};

const DepartmentUniforms = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي القطاع الصحي', href: '/healthcare-uniforms' },
          { label: 'أهمية توفير زي طبي منفصل لكل قسم', href: '/healthcare-uniforms/importance-of-different-uniforms-for-each-department', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">أهمية توفير زي طبي منفصل لكل قسم داخل المنشأة الصحية</h1>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/healthcare_uniforms/hospital_uniforms.jpg"
            alt="صورة أقسام المستشفى - أهمية توفير زي طبي منفصل لكل قسم"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            يمثل تخصيص زي موحد مختلف لكل قسم في المنشأة الصحية استراتيجية مهمة لتحسين الكفاءة التشغيلية وتعزيز السلامة وتسهيل التعرف على المهام. في هذا المقال، نستعرض أهمية توفير زي طبي منفصل لكل قسم داخل المنشأة الصحية، وكيف يساهم ذلك في رفع مستوى الخدمة وتحسين تجربة المرضى.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">أهمية تخصيص زي موحد مختلف لكل قسم</h2>
        
        <div className="mb-8">
          <p>
            يعد تخصيص زي موحد مختلف لكل قسم في المنشأة الصحية أمراً بالغ الأهمية لعدة أسباب:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>التعرف السريع:</strong> يساعد المرضى والزوار على التعرف بسهولة على العاملين في كل قسم</li>
            <li><strong>تحسين الكفاءة:</strong> يسهل على الموظفين التعرف على زملائهم في الأقسام المختلفة</li>
            <li><strong>تعزيز السلامة:</strong> يضمن ارتداء الزي المناسب لكل بيئة عمل</li>
            <li><strong>رفع الروح المعنوية:</strong> يعزز الشعور بالانتماء للقسم والهوية المهنية</li>
            <li><strong>تحسين تجربة المرضى:</strong> يسهل على المرضى التعرف على المسؤولين عن رعايتهم</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">تصميم الزي الموحد حسب الأقسام</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">قسم الطوارئ</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>اللون:</strong> عادة ما يكون اللون الأحمر أو البرتقالي لسهولة التعرف</li>
            <li><strong>التصميم:</strong> زي عملي يسمح بالحركة السريعة والراحة</li>
            <li><strong>المميزات:</strong> جيوب متعددة لحمل المعدات الطبية الأساسية</li>
            <li><strong>المواد:</strong> أقمشة مقاومة للبقع وسهلة التنظيف</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">قسم العمليات</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>اللون:</strong> اللون الأخضر أو الأزرق الفاتح</li>
            <li><strong>التصميم:</strong> زي معقم ومقاوم للماء</li>
            <li><strong>المميزات:</strong> تصميم يغطي الجسم بالكامل مع غطاء للرأس</li>
            <li><strong>المواد:</strong> أقمشة معقمة ومقاومة للبكتيريا</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">قسم العناية المركزة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>اللون:</strong> اللون الأزرق الداكن أو الرمادي</li>
            <li><strong>التصميم:</strong> زي مريح يسمح بالحركة لفترات طويلة</li>
            <li><strong>المميزات:</strong> جيوب لحمل المعدات الطبية والأدوية</li>
            <li><strong>المواد:</strong> أقمشة تسمح بالتهوية الجيدة</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">نصائح لاختيار الزي المناسب لكل قسم</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2 text-blue-800">
            <li>مراعاة طبيعة العمل في كل قسم عند اختيار الزي</li>
            <li>اختيار ألوان مميزة وسهلة التعرف عليها</li>
            <li>توفير عدد كافٍ من الأطقم لكل موظف</li>
            <li>الاهتمام بجودة المواد المستخدمة في تصنيع الزي</li>
            <li>توفير خيارات مختلفة للموظفين حسب احتياجاتهم</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            يعد تخصيص زي موحد مختلف لكل قسم في المنشأة الصحية استراتيجية مهمة لتحسين الكفاءة التشغيلية وتعزيز السلامة وتسهيل التعرف على المهام. يجب على إدارة المنشأة الصحية الاهتمام باختيار الزي المناسب لكل قسم، مع مراعاة طبيعة العمل والاحتياجات الخاصة لكل قسم.
          </p>
        </div>

        <div className="mt-12 p-5 bg-slate-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-primary-600">مقالات ذات صلة</h2>
          <ul className="mr-5 space-y-2">
            <li>
              <Link href="/healthcare-uniforms/role-of-head-covers-and-masks-in-healthcare" className="text-primary-500 hover:text-primary-700 transition-colors">
                دور غطاء الرأس والكمامات كجزء أساسي من زي الوقاية في القطاع الصحي
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

export default DepartmentUniforms; 