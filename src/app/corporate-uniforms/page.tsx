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
    title: 'كيف يعكس الزي الرسمي الموحد هوية وقيم شركتك في السعودية؟',
    slug: 'how-corporate-uniforms-reflect-company-identity-values',
    excerpt: 'تعرف على كيفية استخدام الزي الرسمي الموحد كأداة استراتيجية لعكس هوية وقيم شركتك في السوق السعودي وتأثيره على صورة العلامة التجارية.',
    imageSrc: '/images/corporate_uniforms/article-01.jpg',
  },
  {
    id: 2,
    title: 'الدليل الشامل لاختيار وتصميم الزي الرسمي لموظفيك',
    slug: 'comprehensive-guide-for-choosing-designing-employee-uniforms',
    excerpt: 'دليل متكامل يقدم خطوات عملية لاختيار وتصميم الزي الرسمي المناسب لموظفيك بما يضمن الراحة والأناقة والمظهر المهني.',
    imageSrc: '/images/corporate_uniforms/article-02.jpg',
  },
  {
    id: 3,
    title: 'أهمية المظهر الاحترافي: تأثير الزي الرسمي على انطباع العملاء',
    slug: 'importance-of-professional-appearance-uniform-impact-on-customers',
    excerpt: 'دراسة تأثير المظهر الاحترافي للموظفين على انطباع العملاء وكيف يساهم الزي الرسمي في تعزيز الثقة والمصداقية.',
    imageSrc: '/images/corporate_uniforms/article-03.jpg',
  },
  {
    id: 4,
    title: 'أنواع الأقمشة المثالية للزي الرسمي: أناقة وراحة طوال اليوم',
    slug: 'ideal-fabrics-for-corporate-uniforms-elegance-comfort',
    excerpt: 'استعراض أفضل أنواع الأقمشة للزي الرسمي التي توازن بين الأناقة والراحة للموظفين طوال يوم العمل مع مميزات وعيوب كل نوع.',
    imageSrc: '/images/corporate_uniforms/article-04.jpg',
  },
  {
    id: 5,
    title: 'الفرق بين الزي الرسمي للموظفين الإداريين وموظفي الخطوط الأمامية',
    slug: 'differences-between-administrative-frontline-staff-uniforms',
    excerpt: 'مقارنة بين متطلبات الزي الرسمي للموظفين الإداريين وموظفي الخطوط الأمامية من حيث التصميم، الراحة، والوظائف العملية.',
    imageSrc: '/images/corporate_uniforms/article-05.jpg',
  },
  {
    id: 6,
    title: 'أحدث اتجاهات الموضة في تصميم الزي الرسمي للشركات لعام 2023',
    slug: 'latest-fashion-trends-in-corporate-uniform-design',
    excerpt: 'نظرة على أحدث صيحات الموضة في تصميم الزي الرسمي للشركات مع التركيز على التوازن بين العصرية والاحترافية.',
    imageSrc: '/images/corporate_uniforms/article-06.jpg',
  },
  {
    id: 7,
    title: 'تخصيص الزي الرسمي: تطريز أو طباعة الشعار بأناقة واحترافية',
    slug: 'customizing-corporate-uniforms-logo-embroidery-printing',
    excerpt: 'مقارنة بين أساليب تخصيص الزي الرسمي من خلال تطريز أو طباعة الشعار وكيفية اختيار الأسلوب المناسب لنوع الزي والميزانية.',
    imageSrc: '/images/corporate_uniforms/article-07.jpg',
  },
  {
    id: 8,
    title: 'كيف تختار الألوان المناسبة للزي الرسمي لشركتك؟',
    slug: 'how-to-choose-appropriate-colors-for-company-uniforms',
    excerpt: 'دليل شامل لاختيار الألوان المناسبة للزي الرسمي بما يتماشى مع هوية العلامة التجارية وطبيعة العمل وتأثير الألوان على العملاء.',
    imageSrc: '/images/corporate_uniforms/article-08.jpg',
  },
  {
    id: 9,
    title: 'الزي الرسمي النسائي للشركات في السعودية: توازن بين الاحتشام والأناقة',
    slug: 'women-corporate-uniforms-in-saudi-arabia-modesty-elegance',
    excerpt: 'تصميمات الزي الرسمي النسائي التي تجمع بين الاحتشام والأناقة بما يتناسب مع بيئة العمل السعودية والمعايير الثقافية.',
    imageSrc: '/images/corporate_uniforms/article-09.jpg',
  },
  {
    id: 10,
    title: 'نصائح للعناية بالزي الرسمي للحفاظ على مظهره الراقي',
    slug: 'tips-for-maintaining-elegant-appearance-of-corporate-uniforms',
    excerpt: 'إرشادات عملية للعناية بالزي الرسمي والحفاظ على مظهره الراقي لفترة أطول وكيفية التعامل مع مختلف أنواع الأقمشة.',
    imageSrc: '/images/corporate_uniforms/article-10.jpg',
  },
  {
    id: 11,
    title: 'هل الزي الرسمي الموحد ضروري لجميع الشركات؟ متى يكون الاختيار الأمثل؟',
    slug: 'are-corporate-uniforms-necessary-for-all-companies',
    excerpt: 'تحليل لفوائد وتحديات تطبيق الزي الرسمي الموحد ومتى يكون الاختيار الأمثل للشركات حسب طبيعة العمل وثقافة المؤسسة.',
    imageSrc: '/images/corporate_uniforms/article-11.jpg',
  },
  {
    id: 12,
    title: 'أفضل الموردين للزي الرسمي عالي الجودة في السوق السعودي',
    slug: 'best-suppliers-for-high-quality-corporate-uniforms-in-saudi-market',
    excerpt: 'دليل لأبرز موردي الزي الرسمي عالي الجودة في المملكة العربية السعودية مع معايير اختيار المورد المناسب لاحتياجات شركتك.',
    imageSrc: '/images/corporate_uniforms/article-12.jpg',
  },
  {
    id: 13,
    title: 'الزي الرسمي لقطاع البنوك والخدمات المالية في المملكة: معايير خاصة',
    slug: 'corporate-uniforms-for-banking-financial-services-in-saudi-arabia',
    excerpt: 'المعايير الخاصة للزي الرسمي في قطاع البنوك والخدمات المالية التي تعكس الاحترافية والثقة اللازمة للتعامل مع العملاء.',
    imageSrc: '/images/corporate_uniforms/article-13.jpg',
  },
  {
    id: 14,
    title: 'كيف تشرك موظفيك في عملية اختيار أو تصميم الزي الرسمي؟',
    slug: 'how-to-involve-employees-in-choosing-designing-uniforms',
    excerpt: 'استراتيجيات فعالة لإشراك الموظفين في عملية اختيار أو تصميم الزي الرسمي لضمان رضاهم وتعزيز شعورهم بالانتماء للمؤسسة.',
    imageSrc: '/images/corporate_uniforms/article-14.jpg',
  },
  {
    id: 15,
    title: 'تأثير الزي الرسمي الموحد على بيئة العمل وروح الفريق',
    slug: 'impact-of-corporate-uniforms-on-work-environment-team-spirit',
    excerpt: 'دراسة تأثير الزي الرسمي الموحد على بيئة العمل وتعزيز روح الفريق والتعاون بين الموظفين وتأثيره على ثقافة الشركة.',
    imageSrc: '/images/corporate_uniforms/article-15.jpg',
  },
  {
    id: 16,
    title: 'الإكسسوارات المكملة للزي الرسمي (ربطات عنق، أوشحة، دبابيس)',
    slug: 'accessories-complementing-corporate-uniforms',
    excerpt: 'دليل للإكسسوارات المكملة للزي الرسمي وكيفية اختيارها بشكل يعزز المظهر الاحترافي ويضيف لمسة من التميز للزي الموحد.',
    imageSrc: '/images/corporate_uniforms/article-16.jpg',
  },
  {
    id: 17,
    title: 'الموازنة بين التكلفة والجودة عند اختيار الزي الرسمي للشركة',
    slug: 'balancing-cost-quality-when-choosing-corporate-uniforms',
    excerpt: 'استراتيجيات لتحقيق التوازن بين التكلفة والجودة عند اختيار الزي الرسمي للشركة وكيفية تحقيق أفضل قيمة للاستثمار.',
    imageSrc: '/images/corporate_uniforms/article-17.jpg',
  },
  {
    id: 18,
    title: 'الزي الرسمي الصيفي والشتوي: اختلافات التصميم والمواد',
    slug: 'summer-winter-corporate-uniforms-design-material-differences',
    excerpt: 'مقارنة بين متطلبات الزي الرسمي الصيفي والشتوي من حيث التصميم والمواد المستخدمة للتكيف مع الظروف المناخية المختلفة.',
    imageSrc: '/images/corporate_uniforms/article-18.jpg',
  },
  {
    id: 19,
    title: 'كيف تضمن توفير مقاسات مناسبة لجميع الموظفين؟',
    slug: 'how-to-ensure-appropriate-sizes-for-all-employees',
    excerpt: 'إرشادات عملية لضمان توفير مقاسات مناسبة للزي الرسمي لجميع الموظفين وأهمية ذلك في تعزيز الراحة والرضا الوظيفي.',
    imageSrc: '/images/corporate_uniforms/article-19.jpg',
  },
  {
    id: 20,
    title: 'دور الزي الرسمي في تعزيز المساواة والمهنية بين الموظفين',
    slug: 'role-of-corporate-uniforms-in-promoting-equality-professionalism',
    excerpt: 'تحليل لدور الزي الرسمي الموحد في تعزيز المساواة والمهنية بين الموظفين وتقليل الفوارق الاجتماعية في بيئة العمل.',
    imageSrc: '/images/corporate_uniforms/article-20.jpg',
  },
  {
    id: 21,
    title: 'تصميم زي رسمي يعكس ثقافة الشركة: من الشركات الناشئة إلى الكبرى',
    slug: 'designing-corporate-uniforms-reflecting-company-culture',
    excerpt: 'كيفية تصميم زي رسمي يعكس ثقافة الشركة بدءاً من الشركات الناشئة وصولاً إلى الشركات الكبرى مع أمثلة ملهمة.',
    imageSrc: '/images/corporate_uniforms/article-21.jpg',
  },
  {
    id: 22,
    title: 'زي رسمي مستدام: خيارات صديقة للبيئة للشركات الواعية',
    slug: 'sustainable-corporate-uniforms-eco-friendly-options',
    excerpt: 'استعراض خيارات الزي الرسمي المستدام والصديق للبيئة للشركات الواعية بالمسؤولية البيئية وفوائد هذا التوجه.',
    imageSrc: '/images/corporate_uniforms/article-22.jpg',
  },
  {
    id: 23,
    title: 'أخطاء شائعة يجب تجنبها عند اختيار الزي الرسمي للشركات',
    slug: 'common-mistakes-to-avoid-when-choosing-corporate-uniforms',
    excerpt: 'الأخطاء الشائعة التي تقع فيها الشركات عند اختيار الزي الرسمي وكيفية تجنبها لضمان الحصول على نتائج مثالية.',
    imageSrc: '/images/corporate_uniforms/article-23.jpg',
  },
  {
    id: 24,
    title: 'الزي الرسمي لفرق المبيعات والتسويق: الانطباع الأول مهم',
    slug: 'corporate-uniforms-for-sales-marketing-teams',
    excerpt: 'متطلبات خاصة للزي الرسمي لفرق المبيعات والتسويق وأهمية تصميمه بشكل يعزز الانطباع الأول الإيجابي لدى العملاء.',
    imageSrc: '/images/corporate_uniforms/article-24.jpg',
  },
  {
    id: 25,
    title: 'دراسات حالة: شركات سعودية عززت علامتها التجارية بزي رسمي مميز',
    slug: 'case-studies-saudi-companies-enhanced-brand-with-distinctive-uniforms',
    excerpt: 'دراسات حالة لشركات سعودية نجحت في تعزيز علامتها التجارية من خلال تصميم وتنفيذ زي رسمي مميز يعكس هويتها وقيمها.',
    imageSrc: '/images/corporate_uniforms/article-25.jpg',
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