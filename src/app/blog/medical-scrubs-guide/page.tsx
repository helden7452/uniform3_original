import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "الدليل الشامل لاختيار الزي الطبي المناسب | خبراء الزي الموحد",
  description: "تعرف على كيفية اختيار الزي الطبي المناسب لاحتياجاتك، مع التركيز على الجودة والراحة والوظيفية.",
  keywords: ["زي طبي", "سكراب طبي", "ملابس طبية", "يونيفورم طبي", "زي طبي موحد", "معايير الزي الطبي"]
};

export default function ArticlePage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المدونة', href: '/blog' },
          { label: 'قطاع الصحة', href: '/blog/healthcare' },
          { label: 'الدليل الشامل لاختيار الزي الطبي المناسب', href: '/blog/medical-scrubs-guide', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">الدليل الشامل لاختيار الزي الطبي المناسب</h1>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/healthcare_uniforms/medical_scrubs.jpg"
            alt="الدليل الشامل لاختيار الزي الطبي المناسب"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            يعد اختيار الزي الطبي المناسب من القرارات المهمة في القطاع الصحي، حيث يؤثر على راحة العاملين وأدائهم المهني. في هذا الدليل، سنقدم لك كل ما تحتاج معرفته لاختيار الزي الطبي المثالي.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">معايير اختيار الزي الطبي</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">الجودة والمتانة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>نوع القماش:</strong> اختيار أقمشة عالية الجودة تتحمل الغسيل المتكرر</li>
            <li><strong>المتانة:</strong> مواد قوية تتحمل الاستخدام اليومي المكثف</li>
            <li><strong>مقاومة البقع:</strong> أقمشة سهلة التنظيف ومقاومة للبقع</li>
            <li><strong>اللون:</strong> ألوان ثابتة لا تتأثر بالغسيل المتكرر</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">نصائح لاختيار الزي الطبي المناسب</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2 text-blue-800">
            <li>اختيار مقاس مناسب يسمح بالحركة المريحة</li>
            <li>الاهتمام بجودة الأزرار والسحابات</li>
            <li>اختيار ألوان تتناسق مع هوية المؤسسة</li>
            <li>مراعاة متطلبات القسم أو التخصص</li>
            <li>الاهتمام بالتفاصيل مثل الجيوب والقصات</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            اختيار الزي الطبي المناسب يتطلب مراعاة عدة عوامل مثل الجودة والراحة والوظيفية. يجب أن يكون الزي مناسباً للاستخدام اليومي في بيئة العمل الطبية مع الحفاظ على المظهر المهني.
          </p>
        </div>

        <div className="mt-12 p-5 bg-slate-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-primary-600">مقالات ذات صلة</h2>
          <ul className="mr-5 space-y-2">
            <li>
              <Link href="/blog/medical-uniform-standards" className="text-primary-500 hover:text-primary-700 transition-colors">
                معايير الزي الطبي الموحد في المملكة العربية السعودية
              </Link>
            </li>
            <li>
              <Link href="/blog/medical-scrubs-comfort" className="text-primary-500 hover:text-primary-700 transition-colors">
                أهمية الراحة في الزي الطبي للممارسين الصحيين
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
} 