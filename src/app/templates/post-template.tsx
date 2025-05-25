import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogImage from '@/components/BlogImage';

export const metadata: Metadata = {
  title: "عنوان المقال | خبراء الزي الموحد",
  description: "وصف مختصر للمقال يشرح محتواه الرئيسي وأهميته.",
  keywords: ["كلمة مفتاحية 1", "كلمة مفتاحية 2", "كلمة مفتاحية 3", "كلمة مفتاحية 4"]
};

const PostTemplate = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'اسم القسم', href: '/section-name' },
          { label: 'عنوان المقال', href: '/section-name/post-name', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">عنوان المقال الرئيسي</h1>
        
        <BlogImage 
            src="/images/section_name/image_name.jpg"
            alt="وصف الصورة - عنوان المقال"
          category="section_name"
          priority={true}
          />

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            مقدمة المقال التي تشرح الفكرة الرئيسية وأهمية الموضوع. يجب أن تكون جذابة وتوضح القيمة التي سيحصل عليها القارئ من المقال.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">العنوان الرئيسي الأول</h2>
        
        <div className="mb-8">
          <p>
            فقرة تمهيدية للقسم الأول تشرح النقاط الرئيسية التي سيتم تناولها.
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>نقطة رئيسية 1:</strong> شرح تفصيلي للنقطة الأولى</li>
            <li><strong>نقطة رئيسية 2:</strong> شرح تفصيلي للنقطة الثانية</li>
            <li><strong>نقطة رئيسية 3:</strong> شرح تفصيلي للنقطة الثالثة</li>
            <li><strong>نقطة رئيسية 4:</strong> شرح تفصيلي للنقطة الرابعة</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">العنوان الرئيسي الثاني</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">عنوان فرعي 1</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الميزة 1:</strong> وصف الميزة الأولى</li>
            <li><strong>الميزة 2:</strong> وصف الميزة الثانية</li>
            <li><strong>الميزة 3:</strong> وصف الميزة الثالثة</li>
            <li><strong>الميزة 4:</strong> وصف الميزة الرابعة</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">عنوان فرعي 2</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الميزة 1:</strong> وصف الميزة الأولى</li>
            <li><strong>الميزة 2:</strong> وصف الميزة الثانية</li>
            <li><strong>الميزة 3:</strong> وصف الميزة الثالثة</li>
            <li><strong>الميزة 4:</strong> وصف الميزة الرابعة</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">نصائح وإرشادات</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2 text-blue-800">
            <li>نصيحة أو إرشاد مهم 1</li>
            <li>نصيحة أو إرشاد مهم 2</li>
            <li>نصيحة أو إرشاد مهم 3</li>
            <li>نصيحة أو إرشاد مهم 4</li>
            <li>نصيحة أو إرشاد مهم 5</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            ملخص للمقال يلخص النقاط الرئيسية والاستنتاجات. يجب أن يكون واضحاً ومختصراً مع التأكيد على القيمة الرئيسية التي يقدمها المقال.
          </p>
        </div>

        <div className="mt-12 p-5 bg-slate-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-primary-600">مقالات ذات صلة</h2>
          <ul className="mr-5 space-y-2">
            <li>
              <Link href="/section-name/related-post-1" className="text-primary-500 hover:text-primary-700 transition-colors">
                عنوان المقال المرتبط الأول
              </Link>
            </li>
            <li>
              <Link href="/section-name/related-post-2" className="text-primary-500 hover:text-primary-700 transition-colors">
                عنوان المقال المرتبط الثاني
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default PostTemplate; 