import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي قطاع الضيافة | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'كل ما تحتاج معرفته عن الزي الموحد لقطاع الضيافة في المملكة العربية السعودية - الفنادق، المطاعم، المقاهي، والمنتجعات مع نصائح اختيار التصميم والأقمشة المناسبة',
};

// قائمة المقالات مع عناوينها وروابطها الإنجليزية
const articles = [
  {
    id: 1,
    title: 'كيف يعكس زي الضيافة مستوى الخدمة والفخامة في فندقك أو مطعمك بالسعودية؟',
    slug: 'how-hospitality-uniforms-reflect-service-and-luxury-level',
    excerpt: 'تعرف على كيفية استخدام زي الضيافة كأداة استراتيجية لعكس مستوى الخدمة والفخامة في مؤسستك، وأثره على انطباع العملاء وتجربتهم.',
    imageSrc: '/images/hospitality_uniforms/luxury-service.jpg',
  },
  {
    id: 2,
    title: 'الدليل الشامل لاختيار زي موحد لجميع أقسام الضيافة (استقبال، مطاعم، خدمة غرف)',
    slug: 'comprehensive-guide-to-choosing-uniforms-for-all-hospitality-departments',
    excerpt: 'دليل متكامل يساعدك على اختيار الزي المناسب لكل قسم من أقسام الضيافة، بما يضمن التناسق والتميز بين مختلف الأدوار.',
    imageSrc: '/images/hospitality_uniforms/departments-guide.jpg',
  },
  {
    id: 3,
    title: 'أهمية المظهر الأنيق والمهني لموظفي الضيافة في استقبال النزلاء',
    slug: 'importance-of-elegant-appearance-for-hospitality-staff',
    excerpt: 'دراسة تأثير المظهر الأنيق والمهني لموظفي الضيافة على انطباع النزلاء الأول وعلى تجربتهم الكلية.',
    imageSrc: '/images/hospitality_uniforms/professional-appearance.jpg',
  },
  {
    id: 4,
    title: 'أنواع الأقمشة المثالية لزي الضيافة: متانة، راحة، ومقاومة للتجعد',
    slug: 'ideal-fabrics-for-hospitality-uniforms',
    excerpt: 'تعرف على أفضل أنواع الأقمشة المناسبة لزي الضيافة التي توازن بين المتانة، الراحة، ومقاومة التجعد لضمان مظهر احترافي دائم.',
    imageSrc: '/images/hospitality_uniforms/ideal-fabrics.jpg',
  },
  {
    id: 5,
    title: 'تصميم زي الاستقبال: الانطباع الأول الذي يدوم',
    slug: 'reception-uniform-design-lasting-first-impression',
    excerpt: 'كيفية تصميم زي موظفي الاستقبال بشكل يترك انطباعاً إيجابياً ودائماً لدى النزلاء منذ لحظة وصولهم.',
    imageSrc: '/images/hospitality_uniforms/reception-uniform.jpg',
  },
  {
    id: 6,
    title: 'يونيفورم موظفي المطاعم والنادلين: بين الأناقة والعملية',
    slug: 'restaurant-and-waiter-uniforms-elegance-and-practicality',
    excerpt: 'كيفية تحقيق التوازن بين الأناقة والعملية في تصميم زي موظفي المطاعم والنادلين لضمان أداء ممتاز ومظهر جذاب.',
    imageSrc: '/images/hospitality_uniforms/restaurant-uniforms.jpg',
  },
  {
    id: 7,
    title: 'زي الشيف (Chef Uniform): معايير النظافة والاحترافية في المطبخ',
    slug: 'chef-uniform-standards-for-hygiene-and-professionalism',
    excerpt: 'المعايير المطلوبة في زي الشيف من حيث النظافة، الاحترافية، والسلامة داخل المطبخ مع أحدث التطورات في هذا المجال.',
    imageSrc: '/images/hospitality_uniforms/chef-uniform.jpg',
  },
  {
    id: 8,
    title: 'زي خدمة الغرف (Housekeeping): تصميم مريح وعملي',
    slug: 'housekeeping-uniform-comfortable-and-practical-design',
    excerpt: 'مواصفات الزي المريح والعملي لفريق خدمة الغرف الذي يضمن الحركة بحرية مع الحفاظ على المظهر المهني.',
    imageSrc: '/images/hospitality_uniforms/housekeeping-uniform.jpg',
  },
  {
    id: 9,
    title: 'تخصيص زي الضيافة بشعار الفندق أو المطعم: لمسة احترافية',
    slug: 'customizing-hospitality-uniforms-with-hotel-restaurant-logo',
    excerpt: 'كيفية تخصيص زي الضيافة بشعار مؤسستك بطريقة احترافية وأنيقة تعزز الهوية البصرية وتزيد من التميز.',
    imageSrc: '/images/hospitality_uniforms/branded-uniforms.jpg',
  },
  {
    id: 10,
    title: 'كيف تختار الألوان والتصميمات التي تعكس هوية علامتك التجارية؟',
    slug: 'how-to-choose-colors-and-designs-reflecting-brand-identity',
    excerpt: 'دليل اختيار الألوان والتصميمات المناسبة لزي الضيافة بما يتناسب مع هوية علامتك التجارية وقيمها.',
    imageSrc: '/images/hospitality_uniforms/brand-colors.jpg',
  },
  {
    id: 11,
    title: 'الزي الموحد النسائي في قطاع الضيافة السعودي: أناقة واحترام للثقافة المحلية',
    slug: 'women-uniforms-in-saudi-hospitality-sector',
    excerpt: 'تصميمات الزي النسائي في قطاع الضيافة السعودي التي تجمع بين الأناقة واحترام الثقافة والتقاليد المحلية.',
    imageSrc: '/images/hospitality_uniforms/women-uniforms.jpg',
  },
  {
    id: 12,
    title: 'نصائح للعناية بزي الضيافة للحفاظ على مظهره impecable',
    slug: 'tips-for-maintaining-impeccable-hospitality-uniforms',
    excerpt: 'نصائح عملية للعناية بزي الضيافة والحفاظ على مظهره المثالي لأطول فترة ممكنة رغم الاستخدام المتكرر.',
    imageSrc: '/images/hospitality_uniforms/uniform-maintenance.jpg',
  },
  {
    id: 13,
    title: 'دور الإكسسوارات (شارات الاسم، ربطات العنق، المآزر) في إكمال الزي',
    slug: 'role-of-accessories-in-completing-hospitality-uniforms',
    excerpt: 'أهمية الإكسسوارات مثل شارات الاسم، ربطات العنق، والمآزر في إكمال مظهر زي الضيافة وتعزيز الاحترافية.',
    imageSrc: '/images/hospitality_uniforms/uniform-accessories.jpg',
  },
  {
    id: 14,
    title: 'أفضل الموردين لزي الضيافة الفاخر وعالي الجودة في المملكة',
    slug: 'best-suppliers-for-luxury-hospitality-uniforms-in-saudi-arabia',
    excerpt: 'دليل لأبرز موردي زي الضيافة الفاخر وعالي الجودة في المملكة العربية السعودية مع معايير اختيار المورد المناسب.',
    imageSrc: '/images/hospitality_uniforms/luxury-suppliers.jpg',
  },
  {
    id: 15,
    title: 'الموازنة بين التكلفة والجودة عند اختيار زي الضيافة لمؤسستك',
    slug: 'balancing-cost-and-quality-when-choosing-hospitality-uniforms',
    excerpt: 'استراتيجيات تحقيق التوازن بين التكلفة والجودة عند اختيار زي الضيافة لضمان الحصول على أفضل قيمة للاستثمار.',
    imageSrc: '/images/hospitality_uniforms/cost-quality-balance.jpg',
  },
  {
    id: 16,
    title: 'زي الضيافة الصيفي والشتوي: التكيف مع الأجواء السعودية',
    slug: 'summer-winter-hospitality-uniforms-adapting-to-saudi-climate',
    excerpt: 'كيفية تصميم زي ضيافة صيفي وشتوي يتكيف مع الظروف المناخية المختلفة في المملكة العربية السعودية.',
    imageSrc: '/images/hospitality_uniforms/seasonal-uniforms.jpg',
  },
  {
    id: 17,
    title: 'تأثير الزي الموحد على تجربة النزيل ورضاه',
    slug: 'impact-of-uniforms-on-guest-experience-and-satisfaction',
    excerpt: 'دراسة تأثير الزي الموحد للعاملين في قطاع الضيافة على تجربة النزيل ومستوى رضاه عن الخدمة المقدمة.',
    imageSrc: '/images/hospitality_uniforms/guest-satisfaction.jpg',
  },
  {
    id: 18,
    title: 'زي موظفي الفعاليات والمؤتمرات: مظهر احترافي ومنظم',
    slug: 'events-and-conferences-staff-uniforms',
    excerpt: 'مواصفات الزي المناسب لموظفي الفعاليات والمؤتمرات الذي يعكس الاحترافية والتنظيم ويسهل التعرف عليهم.',
    imageSrc: '/images/hospitality_uniforms/events-uniforms.jpg',
  },
  {
    id: 19,
    title: 'اتجاهات حديثة في تصميم زي الضيافة: لمسات عصرية وأنيقة',
    slug: 'modern-trends-in-hospitality-uniform-design',
    excerpt: 'استعراض أحدث الاتجاهات في تصميم زي الضيافة التي تجمع بين اللمسات العصرية والأناقة التقليدية.',
    imageSrc: '/images/hospitality_uniforms/modern-designs.jpg',
  },
  {
    id: 20,
    title: 'أهمية توفير مقاسات متنوعة ومريحة لجميع موظفي الضيافة',
    slug: 'importance-of-providing-diverse-comfortable-sizes',
    excerpt: 'فوائد توفير مقاسات متنوعة ومريحة لزي الضيافة تناسب جميع الموظفين وتأثير ذلك على الأداء والرضا الوظيفي.',
    imageSrc: '/images/hospitality_uniforms/diverse-sizes.jpg',
  },
  {
    id: 21,
    title: 'زي الضيافة المستوحى من التراث السعودي: إضافة لمسة محلية أصيلة',
    slug: 'saudi-heritage-inspired-hospitality-uniforms',
    excerpt: 'كيفية تصميم زي ضيافة مستوحى من التراث السعودي يضيف لمسة محلية أصيلة تميز مؤسستك وتعزز الهوية الثقافية.',
    imageSrc: '/images/hospitality_uniforms/heritage-inspired.jpg',
  },
  {
    id: 22,
    title: 'حلول زي الضيافة للمطاعم والمقاهي الصغيرة والمتوسطة',
    slug: 'hospitality-uniform-solutions-for-small-medium-restaurants',
    excerpt: 'حلول عملية واقتصادية لتوفير زي ضيافة مميز للمطاعم والمقاهي الصغيرة والمتوسطة مع الحفاظ على الجودة.',
    imageSrc: '/images/hospitality_uniforms/small-restaurants.jpg',
  },
  {
    id: 23,
    title: 'زي الضيافة في المنتجعات الصحية (Spa): الراحة والاسترخاء في التصميم',
    slug: 'spa-hospitality-uniforms-comfort-and-relaxation',
    excerpt: 'مواصفات زي الضيافة المناسب للمنتجعات الصحية (Spa) الذي يعكس أجواء الراحة والاسترخاء مع الحفاظ على الاحترافية.',
    imageSrc: '/images/hospitality_uniforms/spa-uniforms.jpg',
  },
  {
    id: 24,
    title: 'معايير النظافة والصحة المتعلقة بزي العاملين في تحضير وتقديم الطعام',
    slug: 'hygiene-health-standards-for-food-preparation-staff-uniforms',
    excerpt: 'المعايير الصحية والنظافة الواجب توافرها في زي العاملين في تحضير وتقديم الطعام وفق الاشتراطات المحلية والعالمية.',
    imageSrc: '/images/hospitality_uniforms/food-hygiene.jpg',
  },
  {
    id: 25,
    title: 'قصص نجاح: فنادق ومطاعم سعودية تميزت بزي ضيافة فريد وجذاب',
    slug: 'success-stories-saudi-hotels-restaurants-with-unique-uniforms',
    excerpt: 'قصص نجاح واقعية لفنادق ومطاعم سعودية استطاعت تعزيز هويتها وتجربة عملائها من خلال زي ضيافة فريد وجذاب.',
    imageSrc: '/images/hospitality_uniforms/success-stories.jpg',
  },
];

export default function HospitalityUniformsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'المدونة', href: '/blog' },
          { label: 'زي قطاع الضيافة', href: '/hospitality-uniforms', isCurrent: true }
        ]} 
      />
    
      <section className="mb-16">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/hospitality_uniforms/header.jpg"
            alt="زي قطاع الضيافة الموحد"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-transparent to-primary/50">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">زي قطاع الضيافة</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white drop-shadow-md">
              كل ما تحتاج معرفته عن الزي الموحد للفنادق والمطاعم والمنتجعات في المملكة العربية السعودية
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">أهمية الزي الموحد في قطاع الضيافة</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يمثل الزي الموحد في قطاع الضيافة العنصر البصري الأول الذي يعكس هوية المؤسسة ومستوى الخدمة المقدمة فيها. فهو ليس مجرد ملابس يرتديها الموظفون، بل هو تجسيد لقيم العلامة التجارية، الاحترافية، والالتزام بتقديم تجربة ضيافة متميزة تليق بمكانة المملكة العربية السعودية.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            في خبراء الزي الموحد، نفهم جيداً أن زي الضيافة يلعب دوراً محورياً في بناء الانطباع الأول وتعزيز الثقة لدى العملاء. لذلك، نقدم تصاميم مبتكرة وعملية تجمع بين الأناقة العصرية واحترام الخصوصية الثقافية في المملكة، مع التركيز على جودة الأقمشة، دقة التفاصيل، وراحة الارتداء.
          </p>
          <p className="text-gray-700 leading-relaxed">
            استكشف مجموعة المقالات التالية للتعرف على كل جوانب زي الضيافة، من اختيار التصاميم والأقمشة المناسبة إلى أفضل الممارسات للعناية به والحفاظ على مظهره الاحترافي.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-8">مقالات عن زي الضيافة</h2>
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
                  <Link href={`/hospitality-uniforms/${article.slug}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link 
                  href={`/hospitality-uniforms/${article.slug}`} 
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
              <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى زي موحد لمؤسستك في قطاع الضيافة؟</h2>
              <p className="mb-4">
                نحن في خبراء الزي الموحد نقدم حلولاً متكاملة للزي الموحد تناسب جميع مؤسسات قطاع الضيافة بمختلف أحجامها وأنواعها، من الفنادق الفاخرة إلى المطاعم والمقاهي الصغيرة.
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
                  src="/images/hospitality_uniforms/cta-icon.png"
                  alt="طلب زي ضيافة"
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