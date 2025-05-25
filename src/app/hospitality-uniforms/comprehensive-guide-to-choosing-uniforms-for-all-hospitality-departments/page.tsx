import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "الدليل الشامل لاختيار زي موحد لجميع أقسام الضيافة | خبراء الزي الموحد",
  description: "دليل شامل حول كيفية اختيار زي موحد مناسب لجميع أقسام الضيافة، مع التركيز على المظهر الأنيق والراحة والوظيفية.",
  keywords: ["زي الضيافة", "زي المطاعم", "زي الاستقبال", "زي خدمة الغرف", "يونيفورم ضيافة", "معايير زي الضيافة"]
};

const HospitalityUniforms = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الضيافة', href: '/hospitality-uniforms' },
          { label: 'الدليل الشامل لاختيار زي موحد', href: '/hospitality-uniforms/comprehensive-guide-to-choosing-uniforms-for-all-hospitality-departments', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">الدليل الشامل لاختيار زي موحد لجميع أقسام الضيافة</h1>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/hospitality_uniforms/ready_made_hospitality_uniforms.jpg"
            alt="صورة زي الضيافة الشامل - الدليل الشامل لاختيار زي موحد لجميع أقسام الضيافة"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            يعد اختيار زي موحد مناسب لجميع أقسام الضيافة من أهم القرارات التي تتخذها إدارة المنشأة، حيث يساهم في تعزيز الهوية المؤسسية وتحسين تجربة العملاء. في هذا المقال، نقدم دليلاً شاملاً لاختيار زي موحد مناسب لجميع أقسام الضيافة.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">أهمية الزي الموحد في قطاع الضيافة</h2>
        
        <div className="mb-8">
          <p>
            يعد الزي الموحد عنصراً أساسياً في قطاع الضيافة لعدة أسباب:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>تعزيز الهوية المؤسسية:</strong> يساهم في تعزيز هوية المنشأة وتمييزها عن المنافسين</li>
            <li><strong>تحسين تجربة العملاء:</strong> يسهل على العملاء التعرف على الموظفين</li>
            <li><strong>رفع مستوى الاحترافية:</strong> يعزز المظهر المهني للموظفين</li>
            <li><strong>تعزيز الانتماء:</strong> يعزز شعور الموظفين بالانتماء للمؤسسة</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">اختيار الزي الموحد حسب الأقسام</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">قسم الاستقبال</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>التصميم:</strong> زي رسمي أنيق يعكس هوية المنشأة</li>
            <li><strong>الألوان:</strong> ألوان هادئة ومتناسقة مع هوية المنشأة</li>
            <li><strong>المواد:</strong> أقمشة عالية الجودة تتحمل الاستخدام اليومي</li>
            <li><strong>المميزات:</strong> تصميم مريح يسمح بالحركة بسهولة</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">قسم المطاعم</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>التصميم:</strong> زي عملي يسمح بالحركة بسهولة</li>
            <li><strong>الألوان:</strong> ألوان تتناسق مع ديكور المطعم</li>
            <li><strong>المواد:</strong> أقمشة مقاومة للبقع وسهلة التنظيف</li>
            <li><strong>المميزات:</strong> جيوب متعددة لحمل الأدوات اللازمة</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">قسم خدمة الغرف</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>التصميم:</strong> زي مريح يسمح بالحركة لفترات طويلة</li>
            <li><strong>الألوان:</strong> ألوان هادئة تتناسق مع هوية المنشأة</li>
            <li><strong>المواد:</strong> أقمشة تتحمل الغسيل المتكرر</li>
            <li><strong>المميزات:</strong> تصميم عملي مع جيوب لحمل الأدوات</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">نصائح لاختيار الزي الموحد المناسب</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2 text-blue-800">
            <li>مراعاة هوية المنشأة عند اختيار التصميم والألوان</li>
            <li>اختيار مواد عالية الجودة تتحمل الاستخدام اليومي</li>
            <li>توفير خيارات مختلفة للموظفين حسب احتياجاتهم</li>
            <li>الاهتمام براحة الموظفين عند تصميم الزي</li>
            <li>توفير عدد كافٍ من الأطقم لكل موظف</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            يعد اختيار زي موحد مناسب لجميع أقسام الضيافة من أهم القرارات التي تتخذها إدارة المنشأة. يجب على الإدارة الاهتمام باختيار الزي المناسب لكل قسم، مع مراعاة هوية المنشأة واحتياجات الموظفين.
          </p>
        </div>

        <div className="mt-12 p-5 bg-slate-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-primary-600">مقالات ذات صلة</h2>
          <ul className="mr-5 space-y-2">
            <li>
              <Link href="/hospitality-uniforms/importance-of-elegant-appearance-for-hospitality-staff" className="text-primary-500 hover:text-primary-700 transition-colors">
                أهمية المظهر الأنيق والمهني لموظفي الضيافة في استقبال النزلاء
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default HospitalityUniforms; 