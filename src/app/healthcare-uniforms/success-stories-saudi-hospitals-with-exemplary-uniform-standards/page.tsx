import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "قصص نجاح: مستشفيات سعودية رائدة في تطبيق أفضل معايير الزي الطبي | خبراء الزي الموحد",
  description: "تعرف على قصص نجاح المستشفيات السعودية الرائدة في تطبيق معايير الزي الطبي، وكيف ساهمت في تحسين جودة الخدمة وتعزيز الهوية المؤسسية.",
  keywords: ["مستشفيات سعودية", "معايير الزي الطبي", "قصص نجاح", "الهوية المؤسسية", "جودة الخدمة الصحية", "التميز في القطاع الصحي"]
};

const SuccessStories = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي القطاع الصحي', href: '/healthcare-uniforms' },
          { label: 'قصص نجاح المستشفيات السعودية', href: '/healthcare-uniforms/success-stories-saudi-hospitals-with-exemplary-uniform-standards', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">قصص نجاح: مستشفيات سعودية رائدة في تطبيق أفضل معايير الزي الطبي</h1>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/healthcare_uniforms/medical_uniforms_saudi_arabia.jpg"
            alt="صورة مستشفيات سعودية - قصص نجاح في تطبيق معايير الزي الطبي"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            تشكل المستشفيات السعودية نموذجاً رائداً في تطبيق معايير الزي الطبي، حيث ساهمت في تحسين جودة الخدمة وتعزيز الهوية المؤسسية. في هذا المقال، نستعرض قصص نجاح بعض المستشفيات السعودية في تطبيق أفضل معايير الزي الطبي.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">مستشفى الملك فيصل التخصصي ومركز الأبحاث</h2>
        
        <div className="mb-8">
          <p>
            يعد مستشفى الملك فيصل التخصصي ومركز الأبحاث من أبرز المستشفيات التي طبقت معايير الزي الطبي بشكل مميز:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>تصميم موحد:</strong> تم تصميم زي موحد لكل قسم مع الحفاظ على الهوية المؤسسية</li>
            <li><strong>جودة عالية:</strong> استخدام مواد عالية الجودة تتحمل الغسيل المتكرر</li>
            <li><strong>تمييز الأقسام:</strong> استخدام ألوان مختلفة لكل قسم مع الحفاظ على التناسق</li>
            <li><strong>راحة الموظفين:</strong> تصميم مريح يلبي احتياجات العاملين في مختلف الأقسام</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">مستشفى الملك عبدالعزيز الجامعي</h2>
        
        <div className="mb-8">
          <p>
            تميز مستشفى الملك عبدالعزيز الجامعي بتطبيق معايير الزي الطبي بشكل احترافي:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>هوية مميزة:</strong> تصميم خاص يعكس هوية المستشفى الجامعي</li>
            <li><strong>معايير عالمية:</strong> تطبيق معايير عالمية في اختيار المواد والتصميم</li>
            <li><strong>تطوير مستمر:</strong> تحديث دوري للتصميم بناءً على ملاحظات الموظفين</li>
            <li><strong>استدامة:</strong> استخدام مواد صديقة للبيئة في تصنيع الزي</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">مستشفى الملك خالد التخصصي للعيون</h2>
        
        <div className="mb-8">
          <p>
            تميز مستشفى الملك خالد التخصصي للعيون بتطبيق معايير الزي الطبي بشكل متميز:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>تصميم خاص:</strong> زي موحد يعكس تخصص المستشفى في طب العيون</li>
            <li><strong>راحة المرضى:</strong> تصميم يبعث على الراحة والاطمئنان للمرضى</li>
            <li><strong>تمييز الكادر:</strong> تصميم يميز بين الكادر الطبي والإداري</li>
            <li><strong>جودة عالية:</strong> استخدام مواد عالية الجودة تتحمل الاستخدام اليومي</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">دروس مستفادة من قصص النجاح</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2 text-blue-800">
            <li>أهمية تصميم زي موحد يعكس هوية المؤسسة</li>
            <li>ضرورة استخدام مواد عالية الجودة تتحمل الاستخدام اليومي</li>
            <li>أهمية تمييز الأقسام مع الحفاظ على التناسق</li>
            <li>ضرورة مراعاة راحة الموظفين عند تصميم الزي</li>
            <li>أهمية التطوير المستمر للتصميم بناءً على الملاحظات</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            تشكل قصص نجاح المستشفيات السعودية في تطبيق معايير الزي الطبي نموذجاً يحتذى به في القطاع الصحي. يجب على المستشفيات الأخرى الاستفادة من هذه التجارب في تطوير معايير الزي الطبي الخاصة بها، مع مراعاة الهوية المؤسسية واحتياجات الموظفين والمرضى.
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
              <Link href="/healthcare-uniforms/role-of-head-covers-and-masks-in-healthcare" className="text-primary-500 hover:text-primary-700 transition-colors">
                دور غطاء الرأس والكمامات كجزء أساسي من زي الوقاية في القطاع الصحي
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default SuccessStories; 