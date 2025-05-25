import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "معايير الزي الطبي الموحد في المملكة العربية السعودية | خبراء الزي الموحد",
  description: "تعرف على معايير الزي الطبي الموحد المعتمدة في المملكة العربية السعودية ومتطلبات وزارة الصحة.",
  keywords: ["زي طبي", "معايير الزي الطبي", "وزارة الصحة", "يونيفورم طبي", "زي طبي موحد", "معايير سعودية"]
};

export default function ArticlePage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المدونة', href: '/blog' },
          { label: 'قطاع الصحة', href: '/blog/healthcare' },
          { label: 'معايير الزي الطبي الموحد في المملكة العربية السعودية', href: '/blog/medical-uniform-standards', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">معايير الزي الطبي الموحد في المملكة العربية السعودية</h1>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/healthcare_uniforms/medical_scrubs.jpg"
            alt="معايير الزي الطبي الموحد في المملكة العربية السعودية"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            تحرص المملكة العربية السعودية على تطبيق معايير عالية للزي الطبي الموحد في المنشآت الصحية. في هذا المقال، نستعرض المعايير المعتمدة من وزارة الصحة ومتطلبات الزي الطبي في المملكة، مع التركيز على أهمية الالتزام بهذه المعايير لضمان جودة الخدمات الصحية وسلامة المرضى والعاملين.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">معايير الزي الطبي المعتمدة</h2>
        
        <div className="mb-8">
          <p className="mb-4">
            وضعت وزارة الصحة في المملكة العربية السعودية مجموعة شاملة من المعايير والمواصفات للزي الطبي الموحد، بهدف ضمان جودة الخدمات الصحية وسلامة المرضى والعاملين. تشمل هذه المعايير جوانب متعددة من المواصفات الفنية والسلامة والنظافة.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">متطلبات وزارة الصحة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>المواصفات الفنية:</strong> معايير محددة لنوع القماش والتصميم والجودة</li>
            <li><strong>الألوان المعتمدة:</strong> ألوان موحدة لكل تخصص طبي ودرجة وظيفية</li>
            <li><strong>متطلبات النظافة:</strong> معايير الغسيل والتعقيم والتخزين</li>
            <li><strong>السلامة:</strong> متطلبات الحماية والسلامة المهنية والوقاية من العدوى</li>
            <li><strong>الراحة:</strong> معايير الراحة والحركة الحرة للممارسين الصحيين</li>
            <li><strong>المتانة:</strong> متطلبات متانة القماش وقابليته للغسيل المتكرر</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">معايير الألوان والتصميم</h2>
        
        <div className="mb-8">
          <p className="mb-4">
            تحدد وزارة الصحة ألواناً موحدة للزي الطبي حسب التخصص والدرجة الوظيفية، مع مراعاة التصميم المناسب لكل تخصص طبي. هذه المعايير تساعد في تمييز التخصصات المختلفة وتسهيل التعرف على الممارسين الصحيين.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">توزيع الألوان حسب التخصص</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الأطباء:</strong> ألوان موحدة حسب التخصص الطبي</li>
            <li><strong>الممرضين:</strong> ألوان مميزة لكل قسم</li>
            <li><strong>الفنيين:</strong> ألوان خاصة بالخدمات المساندة</li>
            <li><strong>الإداريين:</strong> ألوان موحدة للقطاع الإداري</li>
            <li><strong>طلاب الطب:</strong> ألوان مميزة للتدريب</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">معايير السلامة والنظافة</h2>
        
        <div className="mb-8">
          <p className="mb-4">
            تشدد وزارة الصحة على أهمية معايير السلامة والنظافة في الزي الطبي، حيث تعد هذه المعايير أساسية في الوقاية من العدوى وحماية المرضى والعاملين.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">متطلبات السلامة والنظافة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>مقاومة السوائل:</strong> مواد مقاومة للسوائل والدم</li>
            <li><strong>قابلية التعقيم:</strong> مواد قابلة للتعقيم والغسيل المتكرر</li>
            <li><strong>الحماية من العدوى:</strong> تصميم يمنع انتقال العدوى</li>
            <li><strong>سهولة التنظيف:</strong> مواد سهلة التنظيف والتطهير</li>
            <li><strong>الراحة الحركية:</strong> تصميم يسمح بالحركة الحرة</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">نصائح للالتزام بالمعايير</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2 text-blue-800">
            <li>اختيار موردين معتمدين من وزارة الصحة</li>
            <li>الالتزام بمواصفات الأقمشة المعتمدة</li>
            <li>توفير عدد كافٍ من الأطقم لكل موظف</li>
            <li>تطبيق برنامج صيانة دوري للزي الموحد</li>
            <li>تدريب الموظفين على معايير ارتداء الزي</li>
            <li>تطبيق برنامج غسيل وتعقيم منتظم</li>
            <li>الالتزام بمعايير التخزين والحفظ</li>
            <li>تحديث الزي الموحد حسب التوصيات</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">تأثير الالتزام بالمعايير</h2>
        
        <div className="mb-8">
          <p className="mb-4">
            يعد الالتزام بمعايير الزي الطبي الموحد أمراً ضرورياً لضمان جودة الخدمات الصحية وسلامة المرضى والعاملين. يؤثر هذا الالتزام بشكل مباشر على كفاءة العمل وجودة الخدمات المقدمة.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">الفوائد</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>تحسين جودة الخدمة:</strong> تقديم خدمة صحية أفضل للمرضى</li>
            <li><strong>تعزيز السلامة:</strong> تقليل مخاطر العدوى والحوادث</li>
            <li><strong>زيادة الكفاءة:</strong> تحسين أداء الممارسين الصحيين</li>
            <li><strong>تعزيز الهوية المؤسسية:</strong> بناء صورة مهنية للمنشأة</li>
            <li><strong>تحسين رضا المرضى:</strong> زيادة ثقة المرضى في الخدمة</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            الالتزام بمعايير الزي الطبي الموحد في المملكة العربية السعودية يعد أمراً ضرورياً لضمان جودة الخدمات الصحية وسلامة المرضى والعاملين. يجب على المنشآت الصحية اتباع هذه المعايير بدقة، مع التركيز على جوانب السلامة والنظافة والراحة. من خلال الالتزام بهذه المعايير، يمكن تحسين جودة الخدمات الصحية وتعزيز الهوية المهنية للمنشآت الصحية في المملكة.
          </p>
        </div>

        <div className="mt-12 p-5 bg-slate-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-primary-600">مقالات ذات صلة</h2>
          <ul className="mr-5 space-y-2">
            <li>
              <Link href="/blog/medical-scrubs-guide" className="text-primary-500 hover:text-primary-700 transition-colors">
                الدليل الشامل لاختيار الزي الطبي المناسب
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