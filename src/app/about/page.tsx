import Image from 'next/image';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'من نحن | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'تعرف على خبراء الزي الموحد - رواد صناعة وتوريد الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية منذ أكثر من 15 عامًا',
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'من نحن', href: '/about', isCurrent: true }
        ]} 
      />
      
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">من نحن</h1>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-primary mb-4">خبراء الزي الموحد</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                نحن شركة متخصصة في تصميم وتصنيع وتوريد الزي الموحد لمختلف القطاعات في المملكة العربية السعودية منذ أكثر من 15 عامًا، حيث نلتزم بتقديم منتجات عالية الجودة تلبي احتياجات عملائنا.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                تأسست شركتنا في عام 2008 على يد مجموعة من الخبراء في مجال المنسوجات والتصميم، بهدف تقديم حلول متكاملة للزي الموحد تجمع بين الجودة والراحة والمظهر الاحترافي.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 w-full md:h-80">
              <Image
                src="/images/about/company.jpg"
                alt="مقر شركة خبراء الزي الموحد"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">رؤيتنا وقيمنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-accent mb-3">رؤيتنا</h3>
            <p className="text-gray-700 leading-relaxed">
              نسعى لأن نكون الاختيار الأول في مجال توريد الزي الموحد في المملكة العربية السعودية، من خلال تقديم منتجات ذات جودة عالية وخدمة متميزة تلبي احتياجات عملائنا.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-accent mb-3">رسالتنا</h3>
            <p className="text-gray-700 leading-relaxed">
              توفير زي موحد عالي الجودة يجمع بين الراحة والأناقة، وتقديم خدمة متميزة تضمن رضا العملاء، مع الالتزام بالمعايير العالمية في التصنيع والاستدامة.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-xl font-bold text-accent mb-3">قيمنا</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">الجودة</h4>
              <p className="text-gray-700">نلتزم بتقديم منتجات عالية الجودة تدوم طويلاً وتعكس الصورة المهنية لعملائنا.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">الابتكار</h4>
              <p className="text-gray-700">نسعى دائماً إلى تطوير تصاميمنا ومواكبة أحدث التقنيات في مجال صناعة الأزياء الموحدة.</p>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">خدمة العملاء</h4>
              <p className="text-gray-700">نضع رضا العملاء في مقدمة أولوياتنا، ونعمل على توفير تجربة متميزة من البداية وحتى ما بعد البيع.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">فريقنا</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="mb-6 text-gray-700 leading-relaxed">
            يضم فريقنا نخبة من المصممين والخبراء في مجال النسيج والخياطة، يجمعهم شغف وخبرة تزيد عن 50 عامًا مجتمعة في مجال صناعة الأزياء والزي الموحد.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'أحمد الشمري', position: 'المدير التنفيذي', image: '/images/author/ahmed-abdullah.jpg' },
              { name: 'سارة العتيبي', position: 'مديرة التصميم', image: '/images/author/sarah-abdullah.jpg' },
              { name: 'محمد الغامدي', position: 'مدير المبيعات', image: '/images/author/khalid-saeed.jpg' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">لماذا تختارنا؟</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-reverse space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">خبرة واسعة</h3>
                <p className="text-gray-700">أكثر من 15 عامًا من الخبرة في مجال تصميم وتصنيع الزي الموحد لمختلف القطاعات.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-reverse space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">جودة عالية</h3>
                <p className="text-gray-700">نستخدم أفضل الخامات ونطبق معايير جودة صارمة في كل مرحلة من مراحل الإنتاج.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-reverse space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">سرعة في التنفيذ</h3>
                <p className="text-gray-700">قدرة إنتاجية كبيرة تضمن تسليم الطلبات في الموعد المحدد مهما كان حجمها.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-reverse space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">تصاميم مخصصة</h3>
                <p className="text-gray-700">نقدم خدمات تصميم مخصصة تناسب هوية شركتك واحتياجاتك الخاصة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 