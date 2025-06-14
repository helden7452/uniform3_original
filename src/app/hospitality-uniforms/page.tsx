import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي قطاع الضيافة الفاخر | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'تصاميم راقية ومتميزة للزي الموحد في قطاع الضيافة والفنادق في المملكة العربية السعودية - أزياء عملية وأنيقة للمطاعم والفنادق والمنتجعات مع التركيز على الهوية والجودة العالية',
  keywords: ['زي فنادق', 'زي مطاعم', 'زي ضيافة', 'يونيفورم فندقي', 'زي طعام وشراب', 'زي استقبال', 'زي خدمة العملاء'],
  openGraph: {
    title: 'زي قطاع الضيافة الفاخر | خبراء الزي الموحد',
    description: 'تصاميم راقية ومتميزة للزي الموحد في قطاع الضيافة والفنادق في المملكة العربية السعودية',
    images: ['/images/hospitality_uniforms/luxury_hotel_staff.jpg'],
  },
};

// قائمة المقالات المتخصصة في زي الضيافة
const hospitalityArticles = [
  {
    id: 1,
    title: 'سيكولوجية المظهر الأنيق في صناعة الضيافة وأثرها على تجربة النزلاء',
    slug: 'importance-of-elegant-appearance-for-hospitality-staff',
    excerpt: 'دراسة معمقة حول تأثير المظهر الأنيق والزي المرتب لطاقم الضيافة على التجربة الشاملة للنزلاء وانطباعاتهم عن مستوى الخدمة والجودة المقدمة.',
    imageSrc: '/images/hospitality_uniforms/luxury_hotel_staff.jpg',
    category: 'علم النفس التطبيقي',
    readTime: '8 دقائق',
    featured: true,
  },
  {
    id: 2,
    title: 'اتجاهات مستقبلية في تصميم أزياء الضيافة: رؤية 2025',
    slug: 'latest-hospitality-uniform-design-trends-2025',
    excerpt: 'استعراض شامل لأحدث صيحات وتوجهات تصميم أزياء الضيافة لعام 2025 مع التركيز على المزج المتقن بين العصرية والأناقة الخالدة والراحة العملية.',
    imageSrc: '/images/hospitality_uniforms/modern_hotel_uniform.jpg',
    category: 'تصميم وموضة',
    readTime: '10 دقائق',
    featured: true,
  },
  {
    id: 3,
    title: 'كيف تعكس أزياء الضيافة مستوى الرفاهية والخدمة في منشأتك؟',
    slug: 'how-hospitality-uniforms-reflect-service-and-luxury-level',
    excerpt: 'تحليل متخصص للعلاقة الوثيقة بين تصميم أزياء الضيافة ومستوى الخدمة والرفاهية المقدمة، وكيف تؤثر على تصور النزلاء وولائهم للعلامة التجارية.',
    imageSrc: '/images/hospitality_uniforms/five_star_service.jpg',
    category: 'استراتيجية العلامة التجارية',
    readTime: '9 دقائق',
    featured: true,
  },
  {
    id: 4,
    title: 'دليل شامل لاختيار أقمشة الضيافة: المتانة والراحة والأناقة',
    slug: 'best-fabrics-for-hospitality-uniforms',
    excerpt: 'دليل تفصيلي ومتخصص لأفضل أنواع الأقمشة المستخدمة في أزياء الضيافة والتي تجمع بشكل مثالي بين المتانة والراحة والمظهر الأنيق الراقي.',
    imageSrc: '/images/hospitality_uniforms/premium_fabrics.jpg',
    category: 'مواد وأقمشة',
    readTime: '7 دقائق',
    featured: false,
  },
  {
    id: 5,
    title: 'معايير النظافة والأناقة في زي الشيف الاحترافي الحديث',
    slug: 'chef-uniform-hygiene-standards',
    excerpt: 'المعايير الأساسية والمتقدمة لزي الشيف الذي يجمع بشكل مثالي بين متطلبات النظافة والصحة الصارمة مع الأناقة المطلوبة للمطبخ الاحترافي العصري.',
    imageSrc: '/images/hospitality_uniforms/chef_professional.jpg',
    category: 'المطابخ الاحترافية',
    readTime: '6 دقائق',
    featured: false,
  },
  {
    id: 6,
    title: 'قوة الزي الموحد في بناء وتعزيز هوية العلامة التجارية الفندقية',
    slug: 'importance-of-uniforms-in-enhancing-brand-identity',
    excerpt: 'كيف يساهم الزي الموحد المدروس في تعزيز وترسيخ هوية العلامة التجارية للفنادق والمطاعم وتمييزها بشكل فريد عن المنافسين في السوق.',
    imageSrc: '/images/hospitality_uniforms/brand_identity.jpg',
    category: 'الهوية التجارية',
    readTime: '8 دقائق',
    featured: true,
  },
  {
    id: 7,
    title: 'التراث السعودي في تصميم أزياء الضيافة: أصالة تلتقي بالحداثة',
    slug: 'saudi-heritage-inspired-hospitality-uniforms',
    excerpt: 'دمج عناصر التراث السعودي الأصيل في تصاميم أزياء الضيافة العصرية لتقديم تجربة فريدة تعكس الهوية الوطنية مع الحفاظ على الأناقة والعملية.',
    imageSrc: '/images/hospitality_uniforms/heritage_modern.jpg',
    category: 'التراث والثقافة',
    readTime: '9 دقائق',
    featured: true,
  },
  {
    id: 8,
    title: 'إدارة أزياء الضيافة: من التخطيط إلى التنفيذ والصيانة',
    slug: 'hospitality-uniform-management-system',
    excerpt: 'نظام متكامل لإدارة أزياء الضيافة يشمل التخطيط الاستراتيجي، عمليات التوريد، إدارة المخزون، برامج الصيانة، وضمان الجودة المستمرة.',
    imageSrc: '/images/hospitality_uniforms/management_system.jpg',
    category: 'الإدارة والتشغيل',
    readTime: '12 دقائق',
    featured: false,
  },
];

// احصائيات قطاع الضيافة
const hospitalityStats = [
  { number: '300+', label: 'فندق ومطعم', icon: '🏨' },
  { number: '15,000+', label: 'زي ضيافة تم تصميمه', icon: '👔' },
  { number: '98%', label: 'رضا العملاء', icon: '⭐' },
  { number: '20+', label: 'سنة خبرة في الضيافة', icon: '🏆' },
];

// خدماتنا المتميزة
const premiumServices = [
  {
    title: 'تصميم حصري',
    description: 'تصميم أزياء ضيافة حصرية وفريدة تعكس شخصية وهوية منشأتك',
    icon: '🎨',
  },
  {
    title: 'استشارات متخصصة',
    description: 'استشارات من خبراء متخصصين في صناعة الضيافة والأزياء الفندقية',
    icon: '💼',
  },
  {
    title: 'جودة فائقة',
    description: 'مواد وأقمشة فاخرة مع ضمان الجودة والمتانة لسنوات طويلة',
    icon: '💎',
  },
  {
    title: 'خدمة شاملة',
    description: 'خدمة متكاملة تشمل التصميم والتصنيع والتوريد والصيانة',
    icon: '🔄',
  },
];

// قطاعات الضيافة التي نخدمها
const hospitalitySectors = [
  {
    title: 'الفنادق الفاخرة',
    description: 'أزياء راقية تناسب أعلى معايير الفنادق خمس نجوم',
    image: '/images/hospitality_uniforms/luxury_hotel_staff.jpg',
    features: ['تصميم فاخر', 'مواد عالية الجودة', 'تخصيص كامل'],
  },
  {
    title: 'المطاعم الراقية',
    description: 'تصاميم أنيقة لطاقم المطاعم والمقاهي المميزة',
    image: '/images/hospitality_uniforms/restaurant_staff.jpg',
    features: ['أقمشة مقاومة للبقع', 'سهولة العناية', 'مظهر احترافي'],
  },
  {
    title: 'المنتجعات السياحية',
    description: 'أزياء مريحة وأنيقة تناسب البيئة السياحية',
    image: '/images/hospitality_uniforms/resort_staff.jpg',
    features: ['مقاومة للمناخ', 'ألوان جذابة', 'راحة قصوى'],
  },
  {
    title: 'قاعات المؤتمرات',
    description: 'زي رسمي أنيق لطاقم قاعات الأحداث والمؤتمرات',
    image: '/images/hospitality_uniforms/conference_staff.jpg',
    features: ['مظهر رسمي', 'حرية الحركة', 'ألوان محايدة'],
  },
];

export default function HospitalityUniformsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'القطاعات', href: '/#categories' },
          { label: 'زي قطاع الضيافة', href: '/hospitality-uniforms', isCurrent: true }
        ]} 
      />
    
      {/* القسم الرئيسي */}
      <section className="mb-16">
        <div className="relative w-full h-72 md:h-[500px] mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hospitality_uniforms/luxury_hotel_staff.jpg"
            alt="زي قطاع الضيافة الفاخر - خبراء الزي الموحد"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75 hover:brightness-90 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent flex flex-col justify-center items-start text-right p-8 md:p-16">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
                زي قطاع الضيافة
                <span className="block text-xl md:text-3xl font-medium text-accent mt-2">
                  الفاخر والمتميز
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white drop-shadow-md mb-8 leading-relaxed">
                تصاميم راقية ومتميزة للزي الموحد في قطاع الضيافة تعكس أعلى معايير الأناقة والاحترافية في خدمة الضيوف
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#sectors" className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span>استكشف القطاعات</span>
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                  <span>طلب تصميم حصري</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* احصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {hospitalityStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* نظرة عامة على أهمية زي الضيافة */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                لماذا يُعتبر الزي الموحد قلب صناعة الضيافة؟
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">الانطباع الأول المميز</h3>
                    <p className="text-gray-700 leading-relaxed">
                      الزي الموحد الأنيق يخلق الانطباع الأول الإيجابي لدى الضيوف ويضع توقعات عالية لمستوى الخدمة المقدمة.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">هوية العلامة التجارية</h3>
                    <p className="text-gray-700 leading-relaxed">
                      يجسد الزي قيم ومستوى المؤسسة ويساهم في بناء هوية قوية ومميزة تبقى في ذاكرة الضيوف.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM9 9a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">التماسك والاحترافية</h3>
          <p className="text-gray-700 leading-relaxed">
                      يعزز روح الفريق بين الموظفين ويخلق بيئة عمل احترافية تنعكس إيجابياً على جودة الخدمة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/hospitality_uniforms/five_star_service.jpg"
                alt="أهمية الزي الموحد في قطاع الضيافة"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* خدماتنا المتميزة */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">خدماتنا المتميزة في زي الضيافة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قطاعات الضيافة */}
      <section id="sectors" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">قطاعات الضيافة التي نخدمها</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نقدم حلولاً متخصصة ومبتكرة لجميع قطاعات الضيافة مع التركيز على التميز والجودة الفائقة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {hospitalitySectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">{sector.description}</p>
                <div className="space-y-3">
                  {sector.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم المقالات المتخصصة */}
      <section id="articles" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">مكتبتنا المتخصصة في زي الضيافة</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            استكشف مقالاتنا المتخصصة التي تغطي كافة جوانب أزياء الضيافة من التصميم إلى الإدارة والتشغيل
          </p>
        </div>

        {/* المقالات المميزة */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-2 h-8 bg-accent rounded-full ml-3"></span>
            المقالات المميزة
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalityArticles.filter(article => article.featured).map((article) => (
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
                    <Link href={`/hospitality-uniforms/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  <Link 
                    href={`/hospitality-uniforms/${article.slug}`} 
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
            {hospitalityArticles.filter(article => !article.featured).map((article) => (
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
                    <Link href={`/hospitality-uniforms/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <Link 
                      href={`/hospitality-uniforms/${article.slug}`} 
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
                هل تريد تصميماً حصرياً لمؤسستك في قطاع الضيافة؟
              </h2>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                نحن في خبراء الزي الموحد نقدم تصاميم حصرية ومبتكرة تعكس أعلى معايير الأناقة والرفاهية مع ضمان الراحة والعملية لطاقم العمل.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>تصميم حصري يعكس هوية علامتك التجارية</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>مواد فاخرة وأقمشة عالية الجودة</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>خدمة متكاملة من التصميم إلى التسليم</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                  className="inline-flex items-center bg-white text-primary rounded-full px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>طلب تصميم حصري</span>
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
                src="/images/hospitality_uniforms/luxury_hotel_staff.jpg"
                alt="خدمات زي الضيافة المتخصصة"
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