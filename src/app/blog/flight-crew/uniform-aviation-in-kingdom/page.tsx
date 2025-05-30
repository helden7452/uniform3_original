import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'أزياء الطيران في المملكة العربية السعودية: تاريخ وتطور وهوية | خبراء الزي الموحد',
  description: 'تعرف على تاريخ وتطور أزياء الطيران في المملكة العربية السعودية وكيف تعكس هوية المملكة والتراث الثقافي السعودي الأصيل',
};

export default function ArticlePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المدونة', href: '/blog' },
          { label: 'أزياء الطيران', href: '/blog/flight-crew' },
          { label: 'أزياء الطيران في المملكة العربية السعودية', href: '/blog/flight-crew/uniform-aviation-in-kingdom', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation_uniforms/aviation_uniforms_riyadh.jpg"
            alt="أزياء الطيران في المملكة العربية السعودية"
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
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">أزياء الطيران في المملكة العربية السعودية: تاريخ وتطور وهوية</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              تعد أزياء الطيران واحدة من أهم العناصر البصرية التي تعكس هوية شركات الطيران وثقافة البلد التي تنتمي إليها. وفي المملكة العربية السعودية، شهدت أزياء الطيران تطوراً ملحوظاً على مر السنين، حيث جمعت بين الأصالة والمعاصرة، وعكست القيم الثقافية والهوية الوطنية السعودية.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">بدايات أزياء الطيران في المملكة</h2>
            <p className="mb-4">
              بدأت قصة أزياء الطيران في المملكة العربية السعودية مع تأسيس الخطوط الجوية السعودية في عام 1945. في تلك الفترة، كانت التصاميم متأثرة بالطراز الغربي السائد في قطاع الطيران العالمي، مع إضافة بعض اللمسات المحلية التي تعكس الثقافة السعودية الأصيلة.
            </p>
            <p className="mb-4">
              اتسمت الأزياء في تلك الفترة بالبساطة والوظيفية، حيث كان التركيز الأساسي على توفير زي رسمي يمنح الطيارين وأفراد الطاقم مظهراً مهنياً يليق بمكانة المملكة الناشئة في عالم الطيران.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">مرحلة التطور والتحديث</h2>
            <p className="mb-4">
              مع نمو قطاع الطيران السعودي وتطوره خلال العقود اللاحقة، شهدت أزياء الطيران تطوراً ملحوظاً من حيث التصميم والأقمشة والألوان. وقد تميزت هذه المرحلة بإدخال عناصر أكثر تعبيراً عن الهوية السعودية، مثل استخدام الألوان الوطنية (الأخضر) واعتماد نقوش مستوحاة من التراث السعودي.
            </p>
            <p className="mb-4">
              في سبعينيات وثمانينيات القرن الماضي، بدأت أزياء الطيران السعودية في اكتساب طابع خاص يميزها عن غيرها من شركات الطيران العالمية، مع الحفاظ على المعايير العالمية للأناقة والاحترافية.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">الهوية البصرية في أزياء الطيران السعودية</h2>
            <p className="mb-4">
              تلعب الهوية البصرية دوراً محورياً في تصميم أزياء الطيران. وفي المملكة العربية السعودية، حرصت شركات الطيران الوطنية على تطوير هوية بصرية تعكس قيم المملكة وتراثها الثقافي الغني.
            </p>
            <p className="mb-4">
              من أبرز العناصر التي تميز أزياء الطيران السعودية:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">استخدام الألوان الوطنية (الأخضر والأبيض) بشكل متناغم في التصاميم</li>
              <li className="mb-2">دمج عناصر من التراث السعودي في الإكسسوارات، مثل الأوشحة والدبابيس</li>
              <li className="mb-2">الالتزام بالاحتشام والأناقة في تصميم الزي النسائي</li>
              <li className="mb-2">استخدام أقمشة عالية الجودة تتناسب مع مناخ المنطقة</li>
              <li className="mb-2">تطبيق شعار الشركة والرموز الوطنية بطريقة أنيقة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">العصر الحديث وتحولات رؤية 2030</h2>
            <p className="mb-4">
              مع إطلاق رؤية المملكة 2030، شهدت أزياء الطيران السعودية تحولاً كبيراً يعكس التوجه نحو الانفتاح والحداثة مع الحفاظ على القيم الأصيلة. وقد تجلى ذلك في تصاميم جديدة تمزج بين الأصالة والمعاصرة، وتعكس صورة المملكة المتجددة.
            </p>
            <p className="mb-4">
              ومن أبرز التحولات في تصميم أزياء الطيران السعودية في العصر الحديث:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li className="mb-2">تطوير تصاميم عصرية تواكب أحدث اتجاهات الموضة العالمية</li>
              <li className="mb-2">الاهتمام بالراحة والوظيفية دون التضحية بالأناقة</li>
              <li className="mb-2">توظيف تقنيات متطورة في صناعة الأقمشة لضمان المتانة ومقاومة التجعد</li>
              <li className="mb-2">تنويع التصاميم لتناسب مختلف الوظائف والمهام ضمن طاقم الطيران</li>
              <li className="mb-2">دمج عناصر من الفن السعودي المعاصر في التصاميم</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">مستقبل أزياء الطيران في المملكة</h2>
            <p className="mb-4">
              يبدو مستقبل أزياء الطيران في المملكة العربية السعودية واعداً ومفعماً بالابتكار، خاصة مع التوسع الكبير في قطاع الطيران السعودي وإطلاق شركات طيران جديدة مثل "طيران الخليج السعودي" و"فلاي ناس".
            </p>
            <p className="mb-4">
              ومن المتوقع أن تشهد السنوات القادمة مزيداً من التطور في تصميم أزياء الطيران السعودية، مع التركيز على الاستدامة، والتكنولوجيا الذكية، والهوية البصرية المميزة التي تعكس مكانة المملكة كوجهة عالمية في قطاع الطيران.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p className="mb-4">
              تمثل أزياء الطيران في المملكة العربية السعودية قصة نجاح حقيقية في مزج الأصالة بالمعاصرة، وتعكس التطور الكبير الذي شهدته المملكة في مختلف المجالات. وتبقى هذه الأزياء سفيراً للثقافة السعودية في سماء العالم، تنقل صورة مشرقة عن المملكة وشعبها وتراثها العريق.
            </p>
            <p className="mb-4">
              في خبراء الزي الموحد، نفخر بتقديم تصاميم عصرية لأزياء الطيران تلبي احتياجات شركات الطيران السعودية، وتعكس هويتها الفريدة، مع الالتزام بأعلى معايير الجودة والأناقة والراحة.
            </p>
          </div>
            {/* Tags section removed */}
          
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