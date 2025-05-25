import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogImage from '@/components/BlogImage';

export const metadata = {
  title: 'زي الطيران الصيفي والشتوي: اختلافات التصميم والمواد | خبراء الزي الموحد',
  description: 'دليل شامل حول اختلافات التصميم والمواد في زي الطيران الصيفي والشتوي، ومميزات كل منهما ومعايير الاختيار الأنسب لمختلف الشركات',
};

export default function ArticlePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المدونة', href: '/blog' },
          { label: 'قطاع الطيران', href: '/blog/flight-crew' },
          { label: 'زي الطيران الصيفي والشتوي', href: '/aviation-uniforms/summer-winter-aviation-uniforms-design-material-differences', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative w-full">
          <BlogImage
            src="/images/aviation_uniforms/summer_winter_aviation_wear.jpg"
            alt="زي الطيران الصيفي والشتوي: اختلافات التصميم والمواد"
            width={1200}
            height={630}
            priority
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <Link href="/blog/flight-crew" className="text-accent hover:underline font-medium">
              قطاع الطيران
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <span>15 مايو، 2025</span>
              <span className="mx-2">•</span>
              <span>12 دقيقة للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">زي الطيران الصيفي والشتوي: اختلافات التصميم والمواد</h1>
          
          <div className="prose prose-lg max-w-none">            <p className="mb-4 text-lg leading-relaxed">              يتعرض طاقم الطيران لمختلف الظروف المناخية خلال عملهم، سواء داخل الطائرة أو في المطارات بمختلف المناطق الجغرافية. ولذا، يُعد تصميم زي طيران يلائم التغيرات الموسمية من الصيف إلى الشتاء تحدياً كبيراً أمام شركات الطيران. في هذا المقال، نستعرض الاختلافات الجوهرية بين الزي الصيفي والشتوي من حيث التصميم، المواد، الراحة، والأداء الوظيفي، مع تقديم أفضل الممارسات التي تتبعها كبرى شركات الطيران العالمية والإقليمية.            </p>                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">تحديات تصميم زي الطيران الموسمي</h2>                        <h3 className="text-xl font-bold mt-6 mb-3 text-gray-700">متطلبات متعددة ومتغيرة</h3>            <p className="mb-4">              يواجه مصممو زي الطيران تحديات فريدة عند تطوير زي موسمي:            </p>            <ul className="list-disc pr-6 mb-4">              <li className="mb-2"><strong>اختلاف درجات الحرارة:</strong> التفاوت الكبير بين درجات الحرارة داخل مقصورة الطائرة وخارجها</li>              <li className="mb-2"><strong>التنقل بين المناخات:</strong> رحلات تنطلق من أجواء باردة وتهبط في مناطق حارة والعكس</li>              <li className="mb-2"><strong>ساعات العمل الطويلة:</strong> ارتداء الزي لفترات طويلة في ظروف متغيرة</li>              <li className="mb-2"><strong>الالتزام بالهوية المؤسسية:</strong> الحفاظ على تناسق المظهر الموحد رغم اختلاف القطع الموسمية</li>              <li className="mb-2"><strong>محدودية مساحة التخزين:</strong> التحكم في حجم ووزن ملابس الطاقم خلال الرحلات</li>            </ul>                        <h3 className="text-xl font-bold mt-6 mb-3 text-gray-700">الموازنة بين الاعتبارات المتعددة</h3>            <p className="mb-4">              يتطلب تصميم الزي الموسمي الناجح تحقيق توازن دقيق بين:            </p>            <ul className="list-disc pr-6 mb-4">              <li className="mb-2"><strong>الراحة والأداء الوظيفي:</strong> ضمان راحة الطاقم دون التضحية بالأداء العملي</li>              <li className="mb-2"><strong>الأناقة والعملية:</strong> الحفاظ على المظهر الأنيق مع تلبية الاحتياجات العملية</li>              <li className="mb-2"><strong>التكلفة والجودة:</strong> توفير زي عالي الجودة بتكلفة معقولة للشركة</li>              <li className="mb-2"><strong>الهوية والتنوع:</strong> الحفاظ على هوية الشركة الموحدة مع توفير خيارات متنوعة</li>              <li className="mb-2"><strong>الامتثال للمعايير والابتكار:</strong> مراعاة معايير السلامة مع تقديم تصاميم مبتكرة</li>            </ul>                        <BlogImage              src="/images/aviation_uniforms/flight_school_uniforms.jpg"              alt="مكونات زي الطيران الموسمي وقطع التبديل"              width={800}              height={500}            />                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">الاختلافات الرئيسية بين زي الطيران الصيفي والشتوي</h2>                        <h3 className="text-xl font-bold mt-6 mb-3 text-gray-700">خصائص المواد والأقمشة</h3>            <div className="bg-gray-50 rounded-lg p-4 mb-4">              <table className="min-w-full border-collapse">                <thead>                  <tr className="border-b border-gray-300">                    <th className="px-4 py-2 text-right">خصائص الأقمشة</th>                    <th className="px-4 py-2 text-right">الزي الصيفي</th>                    <th className="px-4 py-2 text-right">الزي الشتوي</th>                  </tr>                </thead>                <tbody>                  <tr className="border-b border-gray-200">                    <td className="px-4 py-2 font-semibold">الوزن والسماكة</td>                    <td className="px-4 py-2">خفيف (150-200 جم/م²)</td>                    <td className="px-4 py-2">ثقيل (250-350 جم/م²)</td>                  </tr>                  <tr className="border-b border-gray-200">                    <td className="px-4 py-2 font-semibold">قابلية امتصاص العرق</td>                    <td className="px-4 py-2">عالية جداً</td>                    <td className="px-4 py-2">متوسطة مع عزل حراري</td>                  </tr>                  <tr className="border-b border-gray-200">                    <td className="px-4 py-2 font-semibold">مرونة النسيج</td>                    <td className="px-4 py-2">مرونة عالية للحركة</td>                    <td className="px-4 py-2">مرونة مع دعم إضافي</td>                  </tr>                  <tr className="border-b border-gray-200">                    <td className="px-4 py-2 font-semibold">التركيب النسيجي</td>                    <td className="px-4 py-2">نسج مفتوح ومسامي</td>                    <td className="px-4 py-2">نسج متراص للعزل الحراري</td>                  </tr>                  <tr>                    <td className="px-4 py-2 font-semibold">تقنيات معالجة خاصة</td>                    <td className="px-4 py-2">مقاومة الأشعة UV، مضادة للبكتيريا</td>                    <td className="px-4 py-2">طبقات عازلة، مقاومة للماء</td>                  </tr>                </tbody>              </table>            </div>                        <h3 className="text-xl font-bold mt-6 mb-3 text-gray-700">المواد الشائعة في زي الطيران الموسمي</h3>            <p className="mb-4">              تُستخدم مواد مختلفة حسب الموسم لتحقيق أقصى قدر من الراحة والأداء:            </p>            <ul className="list-disc pr-6 mb-4">              <li className="mb-2"><strong>الزي الصيفي:</strong>                <ul className="list-circle pr-6 my-2">                  <li>القطن المصري عالي الجودة (مع خلطات للمرونة)</li>                  <li>ألياف تنشيل (Tencel) المستدامة والمنظمة للحرارة</li>                  <li>البوليستر الخفيف المعالج بتقنيات التجفيف السريع</li>                  <li>خلطات الحرير الطبيعي للقطع الرسمية</li>                  <li>أقمشة الميكروفايبر المعالجة لامتصاص الرطوبة</li>                </ul>              </li>              <li className="mb-2"><strong>الزي الشتوي:</strong>                <ul className="list-circle pr-6 my-2">                  <li>الصوف المعالج الخفيف الوزن المقاوم للتجعد</li>                  <li>طبقات الفليس الرقيقة للتدفئة دون زيادة الوزن</li>                  <li>النايلون المقاوم للماء والرياح للطبقات الخارجية</li>                  <li>أقمشة الكشمير والميرينو للقطع الفاخرة</li>                  <li>خلطات البوليستر المعالجة حرارياً للعزل المثالي</li>                </ul>              </li>            </ul>                        <BlogImage              src="/images/embedded/aviation_uniforms/differences-between-pilot-and-cabin-crew-uniforms-1.jpg"              alt="مقارنة تقنيات الأقمشة في زي الطيران الصيفي والشتوي"              width={800}              height={500}            />          </div>
        </div>
      </article>
    </main>
  );
} 