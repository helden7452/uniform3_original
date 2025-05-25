import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي قطاع الطيران | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'كل ما تحتاج معرفته عن الزي الموحد لقطاع الطيران في المملكة العربية السعودية - للطيارين، طاقم الضيافة الجوية، والخدمات الأرضية مع نصائح اختيار التصميم والأقمشة المناسبة',
};

// قائمة المقالات مع عناوينها وروابطها الإنجليزية
const articles = [
  {
    id: 1,
    title: 'الدليل الشامل لاختيار زي الطيران الموحد في السعودية',
    slug: 'comprehensive-guide-to-choosing-aviation-uniforms-in-saudi-arabia',
    excerpt: 'دليل متكامل يساعدك على اختيار زي الطيران الموحد المناسب لشركتك في المملكة العربية السعودية مع مراعاة كافة المعايير والمتطلبات.',
    imageSrc: '/images/aviation_uniforms/aviation_uniforms.jpg',
  },
  {
    id: 2,
    title: 'أهمية الزي الموحد الاحترافي لطواقم الطيران وانعكاسه على صورة الشركة',
    slug: 'importance-of-professional-aviation-crew-uniforms-company-image',
    excerpt: 'دراسة تأثير الزي الموحد الاحترافي لطواقم الطيران على صورة الشركة وانطباع المسافرين وكيف يمكن استثماره كأداة تسويقية فعالة.',
    imageSrc: '/images/aviation_uniforms/airline_uniforms.jpg',
  },
  {
    id: 3,
    title: 'معايير الجودة والأمان في تصميم يونيفورم الطيارين ومضيفي الطيران',
    slug: 'quality-safety-standards-in-pilot-flight-attendant-uniform-design',
    excerpt: 'المعايير الأساسية للجودة والأمان الواجب توافرها في تصميم يونيفورم الطيارين ومضيفي الطيران وفق التشريعات الدولية والمحلية.',
    imageSrc: '/images/aviation_uniforms/pilot_uniforms.png',
  },
  {
    id: 4,
    title: 'أحدث اتجاهات تصميم زي الطيران لعام 2023',
    slug: 'latest-aviation-uniform-design-trends',
    excerpt: 'استعراض أحدث صيحات وتوجهات تصميم زي الطيران عالمياً لعام 2023 مع التركيز على التوازن بين العصرية والاحترافية والراحة.',
    imageSrc: '/images/aviation_uniforms/aviation_uniform_design.jpg',
  },
  {
    id: 5,
    title: 'كيف تختار الأقمشة المناسبة لزي الطيران في أجواء المملكة المختلفة؟',
    slug: 'how-to-choose-suitable-fabrics-for-aviation-uniforms-in-saudi-climate',
    excerpt: 'دليل اختيار الأقمشة المناسبة لزي الطيران التي تتكيف مع الظروف المناخية المختلفة في المملكة وتوفر الراحة والمتانة.',
    imageSrc: '/images/aviation_uniforms/aviation_uniform_fabrics.jpg',
  },
  {
    id: 6,
    title: 'الفرق بين زي الطيارين وزي طاقم الضيافة الجوية: دليل تفصيلي',
    slug: 'differences-between-pilot-and-cabin-crew-uniforms',
    excerpt: 'مقارنة تفصيلية بين متطلبات وخصائص زي الطيارين وزي طاقم الضيافة الجوية من حيث التصميم، المواد، وظائف الزي، والمعايير.',
    imageSrc: '/images/aviation_uniforms/cabin_crew_clothing.jpg',
  },
  {
    id: 7,
    title: 'تخصيص زي الطيران: إضافة شعار الشركة والمعايير المطلوبة',
    slug: 'customizing-aviation-uniforms-adding-company-logo-standards',
    excerpt: 'دليل تخصيص زي الطيران بشعار الشركة والعناصر البصرية المميزة وفق المعايير المطلوبة للحفاظ على الهوية البصرية للشركة.',
    imageSrc: '/images/aviation_uniforms/aviation_uniform_embroidery.jpg',
  },
  {
    id: 8,
    title: 'نصائح للعناية بزي الطيران للحفاظ على مظهره الاحترافي',
    slug: 'tips-for-maintaining-aviation-uniforms-professional-appearance',
    excerpt: 'نصائح عملية للعناية بزي الطيران والحفاظ على مظهره الاحترافي لفترة أطول رغم الاستخدام المتكرر وظروف العمل المختلفة.',
    imageSrc: '/images/aviation_uniforms/wrinkle_resistant_aviation_uniforms.jpg',
  },
  {
    id: 9,
    title: 'دور الزي الموحد في تعزيز هوية شركات الطيران السعودية',
    slug: 'role-of-uniforms-in-enhancing-saudi-airlines-identity',
    excerpt: 'تحليل لدور الزي الموحد في تعزيز وترسيخ هوية شركات الطيران السعودية وكيف يمكن استثماره لتعكس القيم والتراث السعودي.',
    imageSrc: '/images/aviation_uniforms/aviation_uniform_visual_identity.jpg',
  },
  {
    id: 10,
    title: 'زي طيران مريح وعملي: الموازنة بين الأناقة والأداء الوظيفي',
    slug: 'comfortable-practical-aviation-uniforms-balancing-elegance-functionality',
    excerpt: 'استراتيجيات تحقيق التوازن بين الأناقة والأداء الوظيفي في تصميم زي الطيران لضمان الراحة والعملية دون التضحية بالمظهر الاحترافي.',
    imageSrc: '/images/aviation_uniforms/comfortable_aviation_uniforms.jpg',
  },
  {
    id: 11,
    title: 'أبرز الشركات المصنعة لزي الطيران المعتمدة في المنطقة',
    slug: 'top-aviation-uniform-manufacturers-in-the-region',
    excerpt: 'دليل لأبرز الشركات المصنعة والموردة لزي الطيران المعتمدة في المنطقة مع مقارنة بين خدماتها ومعايير الجودة المقدمة.',
    imageSrc: '/images/aviation_uniforms/aviation_uniform_manufacturer.jpg',
  },
  {
    id: 12,
    title: 'هل يؤثر لون زي الطيران على انطباع المسافرين؟',
    slug: 'does-aviation-uniform-color-affect-passenger-impression',
    excerpt: 'دراسة تأثير ألوان زي الطيران على انطباع المسافرين ونفسيتهم وكيفية اختيار الألوان المناسبة لتعزيز الثقة والاحترافية.',
    imageSrc: '/images/aviation_uniforms/flight_attendant_uniforms.jpg',
  },
  {
    id: 13,
    title: 'متطلبات السلامة الأساسية في تصميم يونيفورم طواقم الطائرات',
    slug: 'essential-safety-requirements-in-aircraft-crew-uniform-design',
    excerpt: 'المتطلبات والمعايير الأساسية للسلامة التي يجب مراعاتها في تصميم يونيفورم طواقم الطائرات وفق اللوائح الدولية والمحلية.',
    imageSrc: '/images/aviation_uniforms/international_standard_aviation_wear.jpg',
  },
  {
    id: 14,
    title: 'كيف تضمن شركات الطيران التزام طواقمها بالزي الرسمي؟',
    slug: 'how-airlines-ensure-crew-compliance-with-official-uniforms',
    excerpt: 'استراتيجيات وسياسات شركات الطيران لضمان التزام طواقمها بالزي الرسمي مع الحفاظ على المعايير المطلوبة والمظهر الاحترافي.',
    imageSrc: '/images/aviation_uniforms/major_airline_uniforms.jpg',
  },
  {
    id: 15,
    title: 'تاريخ تطور زي الطيران في الخطوط السعودية',
    slug: 'history-evolution-of-saudi-airlines-uniforms',
    excerpt: 'رحلة تاريخية تستعرض تطور زي الطيران في الخطوط السعودية منذ التأسيس وحتى اليوم، وكيف عكس التغيرات الثقافية والتجارية.',
    imageSrc: '/images/aviation_uniforms/aviation_uniforms_riyadh.jpg',
  },
  {
    id: 16,
    title: 'زي الطيران الخاص: تصميمات فريدة للطائرات الخاصة ورجال الأعمال',
    slug: 'private-aviation-uniforms-unique-designs-for-business-jets',
    excerpt: 'استعراض التصميمات الفريدة والمتطلبات الخاصة بزي طواقم الطيران الخاص والطائرات التنفيذية لرجال الأعمال والشخصيات الهامة.',
    imageSrc: '/images/aviation_uniforms/private_aviation_uniforms.jpg',
  },
  {
    id: 17,
    title: 'اعتبارات اختيار زي طواقم الخدمات الأرضية في المطارات السعودية',
    slug: 'considerations-for-choosing-ground-services-uniforms-saudi-airports',
    excerpt: 'العوامل والاعتبارات الأساسية عند اختيار زي طواقم الخدمات الأرضية في المطارات السعودية لضمان الراحة والأمان والتمييز البصري.',
    imageSrc: '/images/aviation_uniforms/Ground-Handling-Alaska-Airlines-Ready-Safe-Go-Crew-Uniform-v1.0-1.jpg',
  },
  {
    id: 18,
    title: 'تأثير الزي الموحد على معنويات طاقم الطيران وأدائهم',
    slug: 'impact-of-uniforms-on-flight-crew-morale-performance',
    excerpt: 'دراسة تأثير الزي الموحد على معنويات طاقم الطيران وأدائهم الوظيفي وكيف يمكن استثماره لتعزيز الانتماء والفخر المؤسسي.',
    imageSrc: '/images/aviation_uniforms/air_crew_attire.jpg',
  },
  {
    id: 19,
    title: 'التكنولوجيا في أقمشة زي الطيران: مقاومة للتجعد وسهولة العناية',
    slug: 'technology-in-aviation-uniform-fabrics-wrinkle-resistance',
    excerpt: 'استعراض أحدث التقنيات المستخدمة في أقمشة زي الطيران التي توفر مقاومة للتجعد، سهولة العناية، والراحة في الظروف المختلفة.',
    imageSrc: '/images/aviation_uniforms/wrinkle_resistant_aviation_uniforms.jpg',
  },
  {
    id: 20,
    title: 'حلول شاملة لتوريد زي الطيران للشركات الصغيرة والمتوسطة في السعودية',
    slug: 'comprehensive-solutions-for-aviation-uniform-supply-small-medium-companies',
    excerpt: 'حلول متكاملة وخيارات اقتصادية لتوريد زي الطيران للشركات الصغيرة والمتوسطة في السعودية مع الحفاظ على معايير الجودة.',
    imageSrc: '/images/aviation_uniforms/complete_aviation_uniform_solutions.jpg',
  },
  {
    id: 21,
    title: 'زي الطيران الصيفي والشتوي: اختلافات التصميم والمواد',
    slug: 'summer-winter-aviation-uniforms-design-material-differences',
    excerpt: 'مقارنة بين متطلبات وخصائص زي الطيران الصيفي والشتوي من حيث التصميم والمواد المستخدمة للتكيف مع الظروف المناخية المختلفة.',
    imageSrc: '/images/aviation_uniforms/summer_winter_aviation_wear.jpg',
  },
  {
    id: 22,
    title: 'أفضل الممارسات عند طلب كميات كبيرة من يونيفورم الطيران',
    slug: 'best-practices-when-ordering-large-quantities-of-aviation-uniforms',
    excerpt: 'إرشادات وأفضل الممارسات عند طلب كميات كبيرة من يونيفورم الطيران لضمان الجودة والتوافق مع المتطلبات وتوفير التكاليف.',
    imageSrc: '/images/aviation_uniforms/wholesale_aviation_uniforms.jpg',
  },
  {
    id: 23,
    title: 'دور الإكسسوارات في إكمال أناقة زي طاقم الطيران',
    slug: 'role-of-accessories-in-completing-flight-crew-uniform-elegance',
    excerpt: 'استعراض أهمية الإكسسوارات (شارات، أزرار، ربطات عنق، أوشحة) في إكمال أناقة زي طاقم الطيران وتعزيز المظهر الاحترافي.',
    imageSrc: '/images/aviation_uniforms/aviation_uniform_accessories.jpg',
  },
  {
    id: 24,
    title: 'معايير الاستدامة في صناعة زي الطيران الحديث',
    slug: 'sustainability-standards-in-modern-aviation-uniform-manufacturing',
    excerpt: 'المعايير والممارسات المستدامة في صناعة زي الطيران الحديث وكيف يمكن للشركات المساهمة في تقليل الأثر البيئي لزي الطواقم.',
    imageSrc: '/images/aviation_uniforms/certified_aviation_wear_supplier.jpg',
  },
  {
    id: 25,
    title: 'قصص نجاح: كيف ساهم الزي الموحد في تعزيز علامة تجارية لشركة طيران',
    slug: 'success-stories-how-uniforms-enhanced-airline-brand',
    excerpt: 'دراسات حالة وقصص نجاح لشركات طيران عالمية وإقليمية استطاعت تعزيز علامتها التجارية من خلال تصميم زي موحد مميز وفريد.',
    imageSrc: '/images/aviation_uniforms/aviation_clothing_jeddah.jpg',
  },
];

export default function AviationUniformsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'المدونة', href: '/blog' },
          { label: 'زي قطاع الطيران', href: '/aviation-uniforms', isCurrent: true }
        ]} 
      />
    
      <section className="mb-16">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/aviation_uniforms/air_crew_attire.jpg"
            alt="زي قطاع الطيران الموحد"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-transparent to-primary/50">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">زي قطاع الطيران</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white drop-shadow-md">
              كل ما تحتاج معرفته عن الزي الموحد لقطاع الطيران في المملكة العربية السعودية
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">أهمية الزي الموحد في قطاع الطيران</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يمثل الزي الموحد في قطاع الطيران أكثر من مجرد ملابس رسمية؛ إنه يجسد هوية شركة الطيران، ويعكس مستوى الخدمة والاحترافية التي تقدمها. فطواقم الطيران هم السفراء الحقيقيون للشركة، وزيهم الموحد هو أول ما يلفت انتباه المسافرين ويترك انطباعاً دائماً عن تجربة السفر.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            في خبراء الزي الموحد، نفهم العلاقة الوثيقة بين زي الطيران المتميز وتعزيز صورة العلامة التجارية. لذلك، نقدم تصاميم تجمع بين الأناقة والراحة والوظائف العملية، مع الالتزام بمعايير السلامة الصارمة في صناعة الطيران، والحفاظ على الخصوصية الثقافية في المملكة العربية السعودية.
          </p>
          <p className="text-gray-700 leading-relaxed">
            استكشف مجموعة المقالات التالية للتعرف على جميع جوانب زي الطيران، من اختيار التصاميم والأقمشة المناسبة إلى أفضل الممارسات للعناية به وتوريده بكميات كبيرة، مع رؤى حول كيفية استثمار الزي الموحد لتعزيز هوية شركتك في هذا القطاع التنافسي.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-8">مقالات عن زي الطيران</h2>
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
                  <Link href={`/aviation-uniforms/${article.slug}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link 
                  href={`/aviation-uniforms/${article.slug}`} 
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
              <h2 className="text-2xl font-bold mb-4">هل تبحث عن زي طيران احترافي لشركتك؟</h2>
              <p className="mb-4">
                نحن في خبراء الزي الموحد نقدم حلولاً متكاملة لزي الطيران يناسب مختلف الشركات والطواقم، من شركات الطيران الكبرى إلى خدمات الطيران الخاص، مع الالتزام بأعلى معايير الجودة والسلامة.
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
                  src="/images/aviation_uniforms/cta-icon.png"
                  alt="طلب زي طيران"
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