import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي الشركات الرسمي المتميز | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'حلول متطورة للزي الرسمي الموحد للشركات في المملكة العربية السعودية - تصاميم احترافية تعكس هوية وقيم المؤسسة مع ضمان الأناقة والراحة والجودة العالية للموظفين',
  keywords: ['زي شركات', 'زي رسمي', 'يونيفورم مكتبي', 'زي موظفين', 'هوية مؤسسية', 'زي إداري', 'ملابس عمل رسمية'],
  openGraph: {
    title: 'زي الشركات الرسمي المتميز | خبراء الزي الموحد',
    description: 'حلول متطورة للزي الرسمي الموحد للشركات في المملكة العربية السعودية',
    images: ['/images/corporate_uniforms/executive_team.jpg'],
  },
};

// قائمة المقالات المتخصصة في زي الشركات
const corporateArticles = [
  {
    id: 1,
    title: 'قوة الزي الموحد في بناء الهوية المؤسسية وتعزيز ثقافة الشركة',
    slug: 'importance-of-uniforms-in-corporate-identity',
    excerpt: 'دراسة شاملة لدور الزي الموحد في تعزيز الهوية المؤسسية وبناء ثقافة شركة قوية وموحدة، وكيف يساهم في خلق صورة احترافية أمام العملاء والشركاء.',
    imageSrc: '/images/corporate_uniforms/corporate_identity.jpg',
    category: 'الهوية المؤسسية',
    readTime: '10 دقائق',
    featured: true,
  },
  {
    id: 2,
    title: 'كيف تعكس أزياء الشركات قيم ورؤية المؤسسة في عصر التحول الرقمي؟',
    slug: 'how-corporate-uniforms-reflect-company-identity-values',
    excerpt: 'تحليل متعمق للعلاقة بين تصميم الزي الموحد والقيم الأساسية للشركة، وكيفية انعكاس رؤية ورسالة المؤسسة في تصميم أزياء موظفيها في عالم الأعمال الحديث.',
    imageSrc: '/images/corporate_uniforms/company_values.jpg',
    category: 'القيم المؤسسية',
    readTime: '8 دقائق',
    featured: true,
  },
  {
    id: 3,
    title: 'دليل شامل لتصميم أزياء موحدة تعبر عن ثقافة وهوية الشركة',
    slug: 'designing-corporate-uniforms-reflecting-company-culture',
    excerpt: 'دليل تفصيلي ومتخصص لتصميم أزياء موحدة تعبر بدقة عن ثقافة الشركة وقيمها مع الحفاظ على الجانب العملي والمريح للموظفين في بيئة العمل المعاصرة.',
    imageSrc: '/images/corporate_uniforms/design_process.jpg',
    category: 'التصميم والتطوير',
    readTime: '12 دقائق',
    featured: true,
  },
  {
    id: 4,
    title: 'سيكولوجية الألوان في زي الشركات وتأثيرها على الأداء والإنتاجية',
    slug: 'psychology-of-colors-in-corporate-uniforms',
    excerpt: 'دراسة علمية حول تأثير ألوان الزي الموحد على نفسية الموظفين وأدائهم، وكيفية اختيار الألوان المناسبة لتعزيز الإنتاجية والثقة بالنفس.',
    imageSrc: '/images/corporate_uniforms/color_psychology.jpg',
    category: 'علم النفس التطبيقي',
    readTime: '9 دقائق',
    featured: false,
  },
  {
    id: 5,
    title: 'مستقبل الزي الرسمي: الاستدامة والتقنيات الذكية في أزياء الشركات',
    slug: 'future-of-corporate-uniforms-sustainability-smart-tech',
    excerpt: 'نظرة مستقبلية على تطور أزياء الشركات مع دمج تقنيات الاستدامة والذكاء الاصطناعي، والمواد الصديقة للبيئة في تصميم الزي المؤسسي.',
    imageSrc: '/images/corporate_uniforms/future_uniforms.jpg',
    category: 'الابتكار والتقنية',
    readTime: '11 دقائق',
    featured: true,
  },
  {
    id: 6,
    title: 'إدارة وصيانة الزي الموحد في الشركات الكبرى: أفضل الممارسات',
    slug: 'corporate-uniform-management-best-practices',
    excerpt: 'نظام متكامل لإدارة وصيانة الزي الموحد في الشركات الكبرى يشمل التخطيط والتوريد والتوزيع والصيانة والتقييم المستمر.',
    imageSrc: '/images/corporate_uniforms/uniform_management.jpg',
    category: 'الإدارة والتشغيل',
    readTime: '15 دقائق',
    featured: false,
  },
];

// احصائيات قطاع الشركات
const corporateStats = [
  { number: '800+', label: 'شركة ومؤسسة', icon: '🏢' },
  { number: '50,000+', label: 'موظف يرتدي أزياءنا', icon: '👔' },
  { number: '95%', label: 'رضا المؤسسات', icon: '⭐' },
  { number: '25+', label: 'سنة خبرة مؤسسية', icon: '🏆' },
];

// خدماتنا المتخصصة للشركات
const corporateServices = [
  {
    title: 'استراتيجية الهوية البصرية',
    description: 'تطوير استراتيجية شاملة للزي الموحد تعكس هوية وقيم الشركة',
    icon: '🎯',
  },
  {
    title: 'التصميم المخصص',
    description: 'تصميم أزياء حصرية وفريدة تميز شركتك عن المنافسين',
    icon: '✨',
  },
  {
    title: 'حلول متكاملة',
    description: 'خدمة شاملة من التخطيط والتصميم إلى التصنيع والتوريد',
    icon: '🔄',
  },
  {
    title: 'الإدارة والصيانة',
    description: 'نظام متطور لإدارة وصيانة الزي الموحد على مستوى المؤسسة',
    icon: '⚙️',
  },
];

// أنواع الشركات التي نخدمها
const corporateSegments = [
  {
    title: 'الشركات التقنية',
    description: 'أزياء عصرية ومريحة تناسب بيئة العمل التقني المبتكر',
    image: '/images/corporate_uniforms/tech_company.jpg',
    features: ['تصميم عصري', 'راحة قصوى', 'مواد تقنية متطورة'],
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'البنوك والمؤسسات المالية',
    description: 'زي رسمي أنيق يعكس الثقة والاحترافية في القطاع المالي',
    image: '/images/corporate_uniforms/banking_sector.jpg',
    features: ['أناقة كلاسيكية', 'جودة فائقة', 'تفاصيل دقيقة'],
    color: 'from-gray-700 to-gray-900',
  },
  {
    title: 'الشركات الصناعية',
    description: 'أزياء متينة وآمنة تلبي متطلبات السلامة المهنية',
    image: '/images/corporate_uniforms/industrial_sector.jpg',
    features: ['متانة عالية', 'معايير السلامة', 'مقاومة للتآكل'],
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'شركات الاستشارات',
    description: 'زي احترافي متطور يعكس الخبرة والكفاءة المهنية',
    image: '/images/corporate_uniforms/consulting_firm.jpg',
    features: ['مظهر احترافي', 'مرونة في التصميم', 'جودة استثنائية'],
    color: 'from-green-500 to-teal-600',
  },
];

// مراحل عملية التصميم
const designProcess = [
  {
    step: '01',
    title: 'التحليل والاستشارة',
    description: 'دراسة شاملة لاحتياجات الشركة وهويتها المؤسسية',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'التصميم والتطوير',
    description: 'إنشاء تصاميم مبتكرة تعكس قيم ورؤية الشركة',
    icon: '🎨',
  },
  {
    step: '03',
    title: 'النماذج الأولية',
    description: 'تطوير واختبار النماذج الأولية لضمان الجودة والراحة',
    icon: '🧪',
  },
  {
    step: '04',
    title: 'التصنيع والتسليم',
    description: 'إنتاج الكميات المطلوبة وفقاً لأعلى معايير الجودة',
    icon: '🏭',
  },
];

export default function CorporateUniformsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'القطاعات', href: '/#categories' },
          { label: 'زي الشركات الرسمي', href: '/corporate-uniforms', isCurrent: true }
        ]} 
      />

      {/* القسم الرئيسي */}
      <section className="mb-16">
        <div className="relative w-full h-72 md:h-[500px] mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/corporate_uniforms/executive_team.jpg"
            alt="زي الشركات الرسمي المتميز - خبراء الزي الموحد"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75 hover:brightness-90 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent flex flex-col justify-center items-start text-right p-8 md:p-16">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
                زي الشركات الرسمي
                <span className="block text-xl md:text-3xl font-medium text-accent mt-2">
                  المتميز والاحترافي
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white drop-shadow-md mb-8 leading-relaxed">
                حلول متطورة للزي الرسمي الموحد تعكس هوية وقيم المؤسسة مع ضمان الأناقة والاحترافية في بيئة العمل
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#segments" className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span>استكشف الحلول</span>
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
                <Link href="/contact" className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                  <span>طلب استشارة متخصصة</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* احصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {corporateStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* نظرة عامة على أهمية الزي المؤسسي */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
                لماذا يُعتبر الزي الموحد استثماراً استراتيجياً للشركات؟
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">تعزيز الهوية المؤسسية</h3>
                    <p className="text-gray-700 leading-relaxed">
                      يساهم الزي الموحد في بناء هوية مؤسسية قوية ومتماسكة تعكس قيم ورؤية الشركة أمام العملاء والشركاء.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">تحسين الأداء والإنتاجية</h3>
                    <p className="text-gray-700 leading-relaxed">
                      يعزز الانتماء للمؤسسة ويحفز الموظفين على الأداء المتميز من خلال الشعور بالفخر والانتماء المؤسسي.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">بناء الثقة والمصداقية</h3>
          <p className="text-gray-700 leading-relaxed">
                      يخلق انطباعاً إيجابياً لدى العملاء ويبني الثقة في الشركة من خلال المظهر المهني المنظم والمتسق.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/corporate_uniforms/professional_team.jpg"
                alt="أهمية الزي الموحد في الشركات"
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">خدماتنا المتخصصة للشركات</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مراحل عملية التصميم */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">رحلة تصميم الزي المؤسسي</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نتبع منهجية علمية ومدروسة لضمان الحصول على زي موحد يعكس هوية شركتك ويلبي احتياجات موظفيك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designProcess.map((phase, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 right-6 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                {phase.step}
              </div>
              <div className="text-4xl mb-6 text-center">{phase.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{phase.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* أنواع الشركات */}
      <section id="segments" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">قطاعات الشركات التي نخدمها</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نقدم حلولاً مخصصة لمختلف أنواع الشركات مع مراعاة خصوصية كل قطاع ومتطلباته الفريدة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {corporateSegments.map((segment, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent`}></div>
                <div className="absolute bottom-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{segment.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">{segment.description}</p>
                <div className="space-y-3">
                  {segment.features.map((feature, featureIndex) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">مكتبتنا المتخصصة في زي الشركات</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            استكشف مقالاتنا المتخصصة التي تغطي كافة جوانب الزي المؤسسي من الاستراتيجية إلى التنفيذ
          </p>
        </div>

        {/* المقالات المميزة */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-2 h-8 bg-accent rounded-full ml-3"></span>
            المقالات المميزة
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateArticles.filter(article => article.featured).map((article) => (
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
                    <Link href={`/corporate-uniforms/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  <Link 
                    href={`/corporate-uniforms/${article.slug}`} 
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
            {corporateArticles.filter(article => !article.featured).map((article) => (
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
                    <Link href={`/corporate-uniforms/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <Link 
                      href={`/corporate-uniforms/${article.slug}`} 
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
                هل تريد زياً موحداً يعكس تميز شركتك؟
              </h2>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                نحن في خبراء الزي الموحد نطور استراتيجيات شاملة للزي المؤسسي تعكس هوية وقيم شركتك مع ضمان الأناقة والاحترافية والراحة.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>استراتيجية شاملة للهوية البصرية المؤسسية</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>تصميم حصري يميز شركتك عن المنافسين</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>حلول متكاملة من التخطيط إلى التسليم والصيانة</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                  className="inline-flex items-center bg-white text-primary rounded-full px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>احصل على استشارة متخصصة</span>
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
                src="/images/corporate_uniforms/executive_team.jpg"
                alt="خدمات زي الشركات المتخصصة"
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