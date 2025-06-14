import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي القطاع الصحي المتخصص | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'حلول متكاملة للزي الطبي الموحد في المملكة العربية السعودية - أزياء طبية عالية الجودة للمستشفيات والعيادات مع الالتزام بمعايير وزارة الصحة السعودية وأفضل المواصفات العالمية',
  keywords: ['زي طبي', 'زي مستشفيات', 'سكرب طبي', 'معطف طبي', 'زي ممرضات', 'زي أطباء', 'زي طبي سعودي'],
  openGraph: {
    title: 'زي القطاع الصحي المتخصص | خبراء الزي الموحد',
    description: 'حلول متكاملة للزي الطبي الموحد في المملكة العربية السعودية',
    images: ['/images/healthcare_uniforms/medical-uniform-fabric-selection-criteria-content-3.jpg'],
  },
};

// قائمة المقالات المتخصصة في الزي الطبي
const healthcareArticles = [
  {
    id: 1,
    title: 'معايير اختيار أقمشة الزي الطبي: الراحة والمتانة ومقاومة البكتيريا',
    slug: 'medical-uniform-fabric-selection-criteria',
    excerpt: 'دليل شامل لمعايير اختيار أقمشة الزي الطبي التي توازن بين الراحة، المتانة، ومقاومة البكتيريا لبيئة العمل الصحية المتطلبة في المملكة.',
    imageSrc: '/images/healthcare_uniforms/medical-uniform-fabric-selection-criteria-content-3.jpg',
    category: 'معايير الجودة',
    readTime: '8 دقائق',
    featured: true,
  },
  {
    id: 2,
    title: 'أهمية الزي الطبي في الوقاية من العدوى وانتقال الأمراض',
    slug: 'importance-of-medical-uniforms-in-infection-prevention',
    excerpt: 'نظرة متعمقة حول دور الزي الطبي في الحد من انتشار العدوى وحماية الكوادر الصحية والمرضى مع التركيز على المعايير الدولية.',
    imageSrc: '/images/healthcare_uniforms/infection-prevention-main.jpg',
    category: 'السلامة المهنية',
    readTime: '6 دقائق',
    featured: true,
  },
  {
    id: 3,
    title: 'دليل شامل لاختيار السكرب الطبي المناسب للتخصصات المختلفة',
    slug: 'comprehensive-guide-to-choosing-medical-scrubs',
    excerpt: 'معايير اختيار السكرب الطبي المناسب لكل تخصص من حيث التصميم، المقاس، الأقمشة، والألوان مع التركيز على الراحة والمظهر المهني.',
    imageSrc: '/images/healthcare_uniforms/choosing-medical-scrubs.jpg',
    category: 'السكرب الطبي',
    readTime: '10 دقائق',
    featured: true,
  },
  {
    id: 4,
    title: 'الفروق بين أزياء الأطباء، الممرضين، الفنيين، والإداريين في القطاع الصحي',
    slug: 'differences-between-medical-staff-uniforms',
    excerpt: 'دليل توضيحي شامل للفروقات بين أزياء مختلف العاملين في القطاع الصحي ودور هذه الفروقات في تنظيم العمل وتسهيل التعرف على الطاقم.',
    imageSrc: '/images/healthcare_uniforms/medical-staff.jpg',
    category: 'تنظيم القطاع الصحي',
    readTime: '7 دقائق',
    featured: false,
  },
  {
    id: 5,
    title: 'علم نفس الألوان في الزي الطبي وتأثيرها على المرضى والعاملين',
    slug: 'choosing-appropriate-colors-for-medical-uniforms',
    excerpt: 'دراسة علمية حول تأثير ألوان الزي الطبي على الحالة النفسية للمرضى وأداء الموظفين مع إرشادات لاختيار الألوان المناسبة.',
    imageSrc: '/images/healthcare_uniforms/uniform-colors.jpg',
    category: 'علم النفس التطبيقي',
    readTime: '9 دقائق',
    featured: true,
  },
  {
    id: 6,
    title: 'تصميم زي طبي عملي: جيوب وظيفية وراحة للمناوبات الطويلة',
    slug: 'practical-medical-uniform-design',
    excerpt: 'مواصفات تفصيلية للزي الطبي العملي الذي يوفر الراحة القصوى والمرونة أثناء المناوبات الطويلة مع توفير جيوب مُحسّنة للأدوات الطبية.',
    imageSrc: '/images/healthcare_uniforms/practical-design.jpg',
    category: 'التصميم الوظيفي',
    readTime: '8 دقائق',
    featured: false,
  },
  {
    id: 7,
    title: 'الزي الطبي النسائي في المملكة: تصميمات محتشمة وعملية',
    slug: 'womens-medical-uniforms-in-saudi-arabia',
    excerpt: 'تصميمات مبتكرة للزي الطبي النسائي تراعي الاحتشام والقيم الإسلامية مع الحفاظ على العملية والراحة في بيئة العمل الطبي.',
    imageSrc: '/images/healthcare_uniforms/women-uniforms.jpg',
    category: 'الزي النسائي',
    readTime: '6 دقائق',
    featured: false,
  },
  {
    id: 8,
    title: 'تخصيص الزي الطبي بالشعارات: تعزيز الهوية المؤسسية والاحترافية',
    slug: 'customizing-medical-uniforms-with-logos',
    excerpt: 'أهمية تخصيص الزي الطبي بشعارات المؤسسات الصحية وأثره في تعزيز الهوية المؤسسية وبناء الثقة مع المرضى.',
    imageSrc: '/images/healthcare_uniforms/branded-uniforms.jpg',
    category: 'الهوية المؤسسية',
    readTime: '5 دقائق',
    featured: false,
  },
  {
    id: 9,
    title: 'دليل شامل للعناية بالزي الطبي وتعقيمه وفقاً لمعايير الصحة العالمية',
    slug: 'tips-for-proper-medical-uniform-care',
    excerpt: 'إرشادات تفصيلية ومعتمدة للعناية بالزي الطبي وطرق التعقيم الصحيحة لضمان السلامة والاستدامة وإطالة عمر الزي.',
    imageSrc: '/images/healthcare_uniforms/uniform-care.jpg',
    category: 'العناية والصيانة',
    readTime: '7 دقائق',
    featured: false,
  },
  {
    id: 10,
    title: 'التقنيات المتطورة في أقمشة الزي الطبي: مقاومة السوائل والمضادات الحيوية',
    slug: 'latest-technologies-in-medical-uniform-fabrics',
    excerpt: 'استعراض شامل لأحدث التقنيات والابتكارات في أقمشة الزي الطبي مع التركيز على الخصائص المضادة للبكتيريا والفيروسات.',
    imageSrc: '/images/healthcare_uniforms/fabric-tech.jpg',
    category: 'التقنيات الحديثة',
    readTime: '9 دقائق',
    featured: true,
  },
];

// احصائيات قطاع الزي الطبي
const healthcareStats = [
  { number: '500+', label: 'مؤسسة صحية', icon: '🏥' },
  { number: '25,000+', label: 'زي طبي تم توريده', icon: '👩‍⚕️' },
  { number: '100%', label: 'توافق مع معايير وزارة الصحة', icon: '✅' },
  { number: '15+', label: 'سنة خبرة متخصصة', icon: '🏆' },
];

// خدماتنا المتخصصة
const specializedServices = [
  {
    title: 'استشارات متخصصة',
    description: 'استشارات مجانية لاختيار أنسب أنواع الزي الطبي حسب التخصص والبيئة',
    icon: '💡',
  },
  {
    title: 'تصميم مخصص',
    description: 'تصميم أزياء طبية مخصصة تعكس هوية المؤسسة مع الالتزام بالمعايير',
    icon: '🎨',
  },
  {
    title: 'جودة مضمونة',
    description: 'ضمان الجودة والتوافق مع معايير وزارة الصحة السعودية',
    icon: '🔒',
  },
  {
    title: 'خدمة ما بعد البيع',
    description: 'خدمة متابعة وصيانة مستمرة لضمان رضا العملاء',
    icon: '🤝',
  },
];

export default function HealthcareUniformsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'القطاعات', href: '/#categories' },
          { label: 'زي القطاع الصحي', href: '/healthcare-uniforms', isCurrent: true }
        ]} 
      />
    
      {/* القسم الرئيسي */}
      <section className="mb-16">
        <div className="relative w-full h-72 md:h-[500px] mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/healthcare_uniforms/medical-uniform-fabric-selection-criteria-content-3.jpg"
            alt="زي القطاع الصحي المتخصص - خبراء الزي الموحد"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75 hover:brightness-90 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent flex flex-col justify-center items-start text-right p-8 md:p-16">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
                زي القطاع الصحي
                <span className="block text-xl md:text-3xl font-medium text-accent mt-2">
                  المتخصص والمعتمد
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white drop-shadow-md mb-8 leading-relaxed">
                حلول متكاملة للزي الطبي الموحد في المملكة العربية السعودية مع الالتزام الكامل بمعايير وزارة الصحة وأفضل المواصفات العالمية
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#articles" className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span>استكشف المقالات</span>
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                  <span>طلب استشارة مجانية</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* احصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {healthcareStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* نظرة عامة على أهمية الزي الطبي */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                لماذا يُعتبر الزي الطبي أساسياً في القطاع الصحي؟
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">الحماية والسلامة</h3>
                    <p className="text-gray-700 leading-relaxed">
                      يوفر الزي الطبي حماية أساسية للعاملين في القطاع الصحي من التعرض للملوثات والعدوى، مع توفير بيئة عمل آمنة للجميع.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM9 9a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">الهوية والاحترافية</h3>
                    <p className="text-gray-700 leading-relaxed">
                      يساعد الزي الموحد في تحديد هوية الطاقم الطبي ويعزز الثقة لدى المرضى من خلال المظهر الاحترافي المنظم.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">الراحة والأداء</h3>
                    <p className="text-gray-700 leading-relaxed">
                      التصميم المدروس يوفر راحة قصوى للعاملين خلال المناوبات الطويلة، مما يحسن من أدائهم وتركيزهم في العمل.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/healthcare_uniforms/infection-prevention-main.jpg"
                alt="أهمية الزي الطبي في القطاع الصحي"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* خدماتنا المتخصصة */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">خدماتنا المتخصصة في الزي الطبي</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المقالات المتخصصة */}
      <section id="articles" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">مكتبتنا المتخصصة في الزي الطبي</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            استكشف مجموعتنا الشاملة من المقالات المتخصصة التي تغطي كافة جوانب الزي الطبي، من المعايير العلمية إلى أفضل الممارسات العملية
          </p>
        </div>

        {/* المقالات المميزة */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-2 h-8 bg-accent rounded-full ml-3"></span>
            المقالات المميزة
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareArticles.filter(article => article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/healthcare-uniforms/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  <Link 
                    href={`/healthcare-uniforms/${article.slug}`} 
                    className="inline-flex items-center bg-primary text-white rounded-lg px-6 py-3 font-medium hover:bg-primary/90 transition-all duration-300 group"
                  >
                    <span>اقرأ المقال كاملاً</span>
                    <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* باقي المقالات */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-2 h-8 bg-primary rounded-full ml-3"></span>
            مقالات أخرى متخصصة
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-primary text-xs font-bold px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/healthcare-uniforms/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <Link 
                      href={`/healthcare-uniforms/${article.slug}`} 
                      className="text-primary font-medium text-sm hover:text-accent transition-colors"
                    >
                      اقرأ المزيد ←
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الحث على اتخاذ إجراء */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-primary via-primary/90 to-accent text-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                هل تحتاج إلى زي طبي متخصص لمؤسستك الصحية؟
              </h2>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                نحن في خبراء الزي الموحد نقدم حلولاً متكاملة ومبتكرة للزي الطبي تناسب احتياجات منشأتك الصحية مع الالتزام الكامل بأعلى معايير الجودة والسلامة المعتمدة من وزارة الصحة السعودية.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>استشارة مجانية مع خبرائنا المتخصصين</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>تصميمات مخصصة تعكس هوية مؤسستك</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ضمان الجودة والتوافق مع المعايير السعودية</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center bg-white text-primary rounded-full px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>احصل على استشارة مجانية</span>
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="tel:+966123456789" 
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white rounded-full px-8 py-4 font-bold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/30"
                >
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>اتصل بنا مباشرة</span>
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <Image
                src="/images/healthcare_uniforms/choosing-medical-scrubs.jpg"
                alt="خدمات الزي الطبي المتخصصة"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 