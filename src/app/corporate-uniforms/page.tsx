import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي الشركات الرسمي | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'كل ما تحتاج معرفته عن الزي الرسمي الموحد للشركات في المملكة العربية السعودية - تصميم، اختيار الأقمشة، العناية، وكيفية عكس هوية وقيم الشركة من خلال الزي الرسمي',
};

// قائمة المقالات مع عناوينها وروابطها الإنجليزية
const articles = [
  {
    id: 1,
    title: 'أهمية الزي الموحد في تعزيز الهوية المؤسسية للشركات',
    slug: 'importance-of-uniforms-in-corporate-identity',
    excerpt: 'استكشف كيف يعزز الزي الموحد هوية الشركة وثقافتها ويخلق صورة موحدة وقوية أمام العملاء والشركاء التجاريين.',
    imageSrc: '/images/corporate_uniforms/corporate-identity.jpg',
  },
  {
    id: 5,
    title: 'كيف تعكس أزياء الشركات الموحدة ثقافة وقيم المؤسسة؟',
    slug: 'how-corporate-uniforms-reflect-company-identity-values',
    excerpt: 'توضيح العلاقة بين تصميم الزي الموحد والقيم الأساسية للشركة وكيفية انعكاس رؤية المؤسسة في تصميم أزياء موظفيها.',
    imageSrc: '/images/corporate_uniforms/reflecting-values.jpg',
  },
  {
    id: 7,
    title: 'تصميم أزياء موحدة للشركات تعكس ثقافة المؤسسة وهويتها',
    slug: 'designing-corporate-uniforms-reflecting-company-culture',
    excerpt: 'دليل شامل لتصميم أزياء موحدة تعبر عن ثقافة الشركة وقيمها مع الحفاظ على الجانب العملي والمريح للموظفين.',
    imageSrc: '/images/corporate_uniforms/reflecting-culture.jpg',
  },
];

export default function CorporateUniformsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'المدونة', href: '/blog' },
          { label: 'زي الشركات الرسمي', href: '/corporate-uniforms', isCurrent: true }
        ]} 
      />

      <section className="mb-16">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/corporate_uniforms/category-header.jpg"
            alt="زي الشركات الرسمي الموحد"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-transparent to-primary/50">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">زي الشركات الرسمي</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white drop-shadow-md">
              كل ما تحتاج معرفته عن الزي الرسمي الموحد للشركات في المملكة العربية السعودية
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">أهمية الزي الرسمي الموحد للشركات</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يعد الزي الرسمي الموحد للشركات أكثر من مجرد ملابس يرتديها الموظفون؛ إنه يمثل امتداداً لهوية العلامة التجارية وقيمها. فالزي الرسمي المصمم بعناية يساهم في خلق انطباع أول إيجابي، تعزيز التماسك والهوية المؤسسية، وتوحيد الموظفين تحت رؤية مشتركة.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            في خبراء الزي الموحد، نفهم أن الزي الرسمي الناجح يجب أن يجمع بين الأناقة، الراحة، والعملية. لذلك، نقدم تصاميم مبتكرة تعكس القيم الأساسية لشركتك وتلبي احتياجات مختلف المستويات والأدوار الوظيفية، مع مراعاة الخصوصية الثقافية في المملكة العربية السعودية.
          </p>
          <p className="text-gray-700 leading-relaxed">
            استكشف مجموعة المقالات التالية للتعرف على كافة جوانب اختيار وتصميم الزي الرسمي المناسب لشركتك، بدءاً من تحليل احتياجاتك وصولاً إلى تنفيذ استراتيجية زي رسمي متكاملة تعزز صورة علامتك التجارية.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-8">مقالات عن زي الشركات الرسمي</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56 w-full">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  <Link href={`/corporate-uniforms/${article.slug}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link 
                  href={`/corporate-uniforms/${article.slug}`} 
                  className="inline-block bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">هل تبحث عن زي رسمي مميز لشركتك؟</h2>
              <p className="mb-4">
                نحن في خبراء الزي الموحد نقدم حلولاً متكاملة للزي الرسمي تناسب جميع أنواع الشركات والمؤسسات، من الشركات الناشئة إلى الشركات الكبرى، مع التركيز على التصميم المبتكر والجودة العالية.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-primary rounded-lg px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                طلب استشارة مجانية
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative h-40 w-40">
                <Image
                  src="/images/corporate_uniforms/cta-icon.png"
                  alt="طلب زي رسمي للشركات"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 