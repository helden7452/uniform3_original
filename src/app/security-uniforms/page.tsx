import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي قطاع الأمن | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'كل ما تحتاج معرفته عن الزي الموحد لقطاع الأمن في المملكة العربية السعودية - شركات الأمن، الحراسات، المنشآت الخاصة والعامة مع نصائح اختيار التصميم والأقمشة المناسبة',
};

// قائمة المقالات مع عناوينها وروابطها الإنجليزية
const articles = [
  {
    id: 1,
    title: 'كيف تختار الزي الموحد المناسب لرجال الأمن في السعودية؟',
    slug: 'how-to-choose-suitable-security-uniforms-in-saudi-arabia',
    excerpt: 'دليل شامل لاختيار الزي الموحد المناسب لرجال الأمن في السعودية مع مراعاة المعايير المحلية والمتطلبات العملية.',
    imageSrc: '/images/security_uniforms/choosing-uniforms.jpg',
  },
  {
    id: 2,
    title: 'أهمية الزي الأمني في فرض الهيبة وتعزيز الشعور بالأمان',
    slug: 'importance-of-security-uniforms-in-imposing-authority',
    excerpt: 'دراسة تأثير الزي الأمني على فرض الهيبة وتعزيز الشعور بالأمان لدى الجمهور وكيف يساهم في تحقيق أهداف الأمن.',
    imageSrc: '/images/security_uniforms/imposing-authority.jpg',
  },
  {
    id: 3,
    title: 'معايير اختيار أقمشة زي الأمن: المتانة، الراحة، ومقاومة العوامل الجوية',
    slug: 'standards-for-choosing-security-uniform-fabrics',
    excerpt: 'تعرف على المعايير الرئيسية لاختيار أقمشة زي الأمن التي تجمع بين المتانة، الراحة، ومقاومة العوامل الجوية.',
    imageSrc: '/images/security_uniforms/fabric-standards.jpg',
  },
  {
    id: 4,
    title: 'الفرق بين زي حراس الأمن في المنشآت المختلفة (بنوك، مجمعات تجارية، مواقع صناعية)',
    slug: 'differences-between-security-guard-uniforms-in-various-facilities',
    excerpt: 'مقارنة تفصيلية بين أزياء حراس الأمن في المنشآت المختلفة والمعايير الخاصة بكل قطاع.',
    imageSrc: '/images/security_uniforms/different-facilities.jpg',
  },
  {
    id: 5,
    title: 'تصميم زي أمني عملي: جيوب كافية للمعدات وسهولة الحركة',
    slug: 'designing-practical-security-uniform-pockets-and-mobility',
    excerpt: 'مواصفات تصميم الزي الأمني العملي الذي يوفر جيوب كافية للمعدات ويسمح بسهولة الحركة أثناء تأدية المهام.',
    imageSrc: '/images/security_uniforms/practical-design.jpg',
  },
  {
    id: 6,
    title: 'دور الألوان الداكنة والشارات الرسمية في تصميم زي الأمن',
    slug: 'role-of-dark-colors-and-official-badges-in-security-uniform-design',
    excerpt: 'أهمية استخدام الألوان الداكنة والشارات الرسمية في تصميم زي الأمن وتأثيرها النفسي والعملي.',
    imageSrc: '/images/security_uniforms/dark-colors-badges.jpg',
  },
  {
    id: 7,
    title: 'يونيفورم الأمن النسائي: تصميمات عملية ومناسبة لطبيعة العمل',
    slug: 'female-security-uniforms-practical-designs-for-work-nature',
    excerpt: 'تصميمات زي الأمن النسائي التي تجمع بين العملية ومناسبتها لطبيعة العمل مع احترام الخصوصية الثقافية.',
    imageSrc: '/images/security_uniforms/female-uniforms.jpg',
  },
  {
    id: 8,
    title: 'تخصيص زي الأمن بشعار الشركة الأمنية أو المنشأة المحروسة',
    slug: 'customizing-security-uniforms-with-company-logo',
    excerpt: 'كيفية تخصيص زي الأمن بشعار الشركة الأمنية أو المنشأة المحروسة بطريقة احترافية تعزز الهوية البصرية.',
    imageSrc: '/images/security_uniforms/custom-logos.jpg',
  },
  {
    id: 9,
    title: 'أهمية السترات الواقية والعاكسة كجزء من زي رجال الأمن',
    slug: 'importance-of-protective-reflective-vests-for-security-personnel',
    excerpt: 'أهمية استخدام السترات الواقية والعاكسة كجزء أساسي من زي رجال الأمن وفوائدها في مختلف الظروف.',
    imageSrc: '/images/security_uniforms/reflective-vests.jpg',
  },
  {
    id: 10,
    title: 'نصائح للحفاظ على مظهر زي الأمن وزيادة عمره الافتراضي',
    slug: 'tips-for-maintaining-security-uniform-appearance',
    excerpt: 'نصائح عملية للحفاظ على مظهر زي الأمن لفترة أطول وزيادة عمره الافتراضي رغم ظروف العمل الصعبة.',
    imageSrc: '/images/security_uniforms/maintenance-tips.jpg',
  },
  {
    id: 11,
    title: 'معايير ومواصفات زي شركات الأمن المعتمدة في المملكة العربية السعودية',
    slug: 'standards-specifications-for-approved-security-companies-uniforms',
    excerpt: 'المعايير والمواصفات الرسمية لزي شركات الأمن المعتمدة في المملكة العربية السعودية وكيفية الالتزام بها.',
    imageSrc: '/images/security_uniforms/saudi-standards.jpg',
  },
  {
    id: 12,
    title: 'أفضل أنواع الأحذية التكتيكية (Tactical Boots) لرجال الأمن',
    slug: 'best-tactical-boots-for-security-personnel',
    excerpt: 'مراجعة لأفضل أنواع الأحذية التكتيكية المناسبة لرجال الأمن مع مقارنة بين الخيارات المختلفة.',
    imageSrc: '/images/security_uniforms/tactical-boots.jpg',
  },
  {
    id: 13,
    title: 'الإكسسوارات الأساسية لزي رجل الأمن (حزام، حاملات معدات، قبعة)',
    slug: 'essential-accessories-for-security-personnel-uniform',
    excerpt: 'دليل الإكسسوارات الأساسية التي يجب توفرها مع زي رجل الأمن وأهمية كل منها في أداء المهام الأمنية.',
    imageSrc: '/images/security_uniforms/essential-accessories.jpg',
  },
  {
    id: 14,
    title: 'أفضل الموردين لزي الأمن عالي الجودة والمطابق للمواصفات في السعودية',
    slug: 'best-suppliers-for-high-quality-security-uniforms-in-saudi-arabia',
    excerpt: 'دليل لأبرز موردي زي الأمن عالي الجودة والمطابق للمواصفات في المملكة العربية السعودية مع معايير الاختيار.',
    imageSrc: '/images/security_uniforms/top-suppliers.jpg',
  },
  {
    id: 15,
    title: 'زي الأمن للعمل الليلي: أهمية العناصر العاكسة والرؤية الواضحة',
    slug: 'night-shift-security-uniforms-reflective-elements-visibility',
    excerpt: 'المواصفات الخاصة بزي الأمن المخصص للعمل الليلي وأهمية العناصر العاكسة لضمان الرؤية الواضحة والسلامة.',
    imageSrc: '/images/security_uniforms/night-shift.jpg',
  },
  {
    id: 16,
    title: 'زي الأمن الصيفي والشتوي: التكيف مع الظروف المناخية في المملكة',
    slug: 'summer-winter-security-uniforms-adapting-to-climate-conditions',
    excerpt: 'مواصفات زي الأمن المناسب للمواسم المختلفة وكيفية تصميمه للتكيف مع الظروف المناخية المتغيرة في المملكة.',
    imageSrc: '/images/security_uniforms/seasonal-uniforms.jpg',
  },
  {
    id: 17,
    title: 'تأثير الزي الموحد على أداء وانضباط فريق الأمن',
    slug: 'impact-of-uniforms-on-security-team-performance-discipline',
    excerpt: 'دراسة تأثير الزي الموحد على مستوى أداء وانضباط فريق الأمن والعلاقة بين المظهر الاحترافي والأداء المهني.',
    imageSrc: '/images/security_uniforms/performance-impact.jpg',
  },
  {
    id: 18,
    title: 'هل يختلف زي الأمن الخاص عن زي الأمن في المنشآت العامة؟',
    slug: 'differences-between-private-public-security-uniforms',
    excerpt: 'مقارنة بين زي الأمن الخاص وزي الأمن في المنشآت العامة من حيث التصميم، المواصفات، والمتطلبات القانونية.',
    imageSrc: '/images/security_uniforms/private-public-differences.jpg',
  },
  {
    id: 19,
    title: 'اتجاهات حديثة في تصميم زي الأمن: دمج التكنولوجيا والمواد المتقدمة',
    slug: 'modern-trends-in-security-uniform-design-technology-integration',
    excerpt: 'استعراض أحدث الاتجاهات في تصميم زي الأمن التي تدمج التكنولوجيا والمواد المتقدمة لتعزيز الأداء والسلامة.',
    imageSrc: '/images/security_uniforms/modern-trends.jpg',
  },
  {
    id: 20,
    title: 'حلول اقتصادية لتوفير زي أمن فعال للشركات والمؤسسات',
    slug: 'economic-solutions-for-effective-security-uniforms',
    excerpt: 'حلول عملية واقتصادية لتوفير زي أمن فعال للشركات والمؤسسات مع الحفاظ على معايير الجودة والمظهر الاحترافي.',
    imageSrc: '/images/security_uniforms/economic-solutions.jpg',
  },
  {
    id: 21,
    title: 'أهمية توفير مقاسات مناسبة ومريحة لجميع أفراد طاقم الأمن',
    slug: 'importance-of-proper-sizes-for-security-personnel',
    excerpt: 'فوائد توفير مقاسات مناسبة ومريحة لزي جميع أفراد طاقم الأمن وتأثير ذلك على الأداء والرضا الوظيفي.',
    imageSrc: '/images/security_uniforms/proper-sizing.jpg',
  },
  {
    id: 22,
    title: 'التدريب على ارتداء وصيانة الزي الأمني بشكل صحيح',
    slug: 'training-on-proper-wearing-maintenance-of-security-uniforms',
    excerpt: 'أهمية تدريب أفراد الأمن على الطريقة الصحيحة لارتداء وصيانة الزي الأمني للحفاظ على المظهر الاحترافي.',
    imageSrc: '/images/security_uniforms/uniform-training.jpg',
  },
  {
    id: 23,
    title: 'دور الزي الموحد في تمييز أفراد الأمن عن الجمهور',
    slug: 'role-of-uniforms-in-distinguishing-security-personnel',
    excerpt: 'أهمية الزي الموحد في تمييز أفراد الأمن عن الجمهور وتسهيل التعرف عليهم في حالات الطوارئ والمواقف المختلفة.',
    imageSrc: '/images/security_uniforms/distinguishing-personnel.jpg',
  },
  {
    id: 24,
    title: 'الزي التكتيكي (Tactical Uniform) مقابل الزي الأمني التقليدي: متى يُستخدم كل منهما؟',
    slug: 'tactical-uniform-vs-traditional-security-uniform',
    excerpt: 'مقارنة بين الزي التكتيكي والزي الأمني التقليدي من حيث المواصفات والمزايا والعيوب ومجالات الاستخدام المناسبة.',
    imageSrc: '/images/security_uniforms/tactical-vs-traditional.jpg',
  },
  {
    id: 25,
    title: 'تجارب شركات أمنية سعودية في تطوير وتحسين زي أفرادها',
    slug: 'experiences-of-saudi-security-companies-in-developing-uniforms',
    excerpt: 'قصص نجاح واقعية لشركات أمنية سعودية في تطوير وتحسين زي أفرادها وتأثير ذلك على مستوى الخدمة وصورة الشركة.',
    imageSrc: '/images/security_uniforms/saudi-companies-experiences.jpg',
  },
];

export default function SecurityUniformsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'المدونة', href: '/blog' },
          { label: 'زي قطاع الأمن', href: '/security-uniforms', isCurrent: true }
        ]} 
      />
    
      <section className="mb-16">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/security_uniforms/header.jpg"
            alt="زي قطاع الأمن الموحد"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-transparent to-primary/50">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">زي قطاع الأمن</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white drop-shadow-md">
              كل ما تحتاج معرفته عن الزي الموحد لشركات الأمن والحراسات في المملكة العربية السعودية
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">أهمية الزي الموحد في قطاع الأمن</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يمثل الزي الموحد في قطاع الأمن أكثر من مجرد ملابس يرتديها أفراد الأمن. إنه يمثل رمزاً للسلطة، والنظام، والثقة. فالزي الأمني المناسب يساهم في فرض الهيبة، تعزيز الشعور بالأمان لدى الجمهور، وتمييز أفراد الأمن بسهولة في حالات الطوارئ والمواقف الحرجة.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            في خبراء الزي الموحد، نفهم جيداً أن زي الأمن يجب أن يجمع بين المظهر الاحترافي والأداء العملي. لذلك، نقدم تصاميم تلبي المتطلبات الخاصة لقطاع الأمن في المملكة العربية السعودية، مع التركيز على المتانة، الراحة، وسهولة الحركة، مع الالتزام بالمعايير والمواصفات المعتمدة.
          </p>
          <p className="text-gray-700 leading-relaxed">
            استكشف مجموعة المقالات التالية للتعرف على جميع جوانب زي الأمن، من اختيار التصاميم والأقمشة المناسبة إلى أفضل الممارسات للعناية به والحفاظ على مظهره المهني والرسمي.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-8">مقالات عن زي الأمن</h2>
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
                  <Link href={`/security-uniforms/${article.slug}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link 
                  href={`/security-uniforms/${article.slug}`} 
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
              <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى زي موحد لشركتك الأمنية؟</h2>
              <p className="mb-4">
                نحن في خبراء الزي الموحد نقدم حلولاً متكاملة للزي الأمني تناسب جميع شركات الأمن والحراسات بمختلف أحجامها، مع التركيز على المتانة والمظهر الاحترافي والالتزام بالمعايير المعتمدة.
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
                  src="/images/security_uniforms/cta-icon.png"
                  alt="طلب زي أمني"
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