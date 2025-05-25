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
    title: 'أهمية المظهر الأنيق لموظفي الضيافة وانعكاسه على تجربة الضيوف',
    slug: 'importance-of-elegant-appearance-for-hospitality-staff',
    excerpt: 'دراسة تأثير المظهر الأنيق والزي المرتب لطاقم الضيافة على تجربة النزلاء وانطباعهم عن مستوى الخدمة.',
    imageSrc: '/images/hospitality_uniforms/elegant-appearance.jpg',
  },
  {
    id: 2,
    title: 'أحدث اتجاهات تصميم أزياء الضيافة لعام 2025',
    slug: 'latest-hospitality-uniform-design-trends-2025',
    excerpt: 'استعراض لأحدث صيحات وتوجهات تصميم أزياء الضيافة لعام 2025 مع التركيز على المزج بين العصرية والأناقة والراحة.',
    imageSrc: '/images/hospitality_uniforms/design-trends-2025.jpg',
  },
  {
    id: 3,
    title: 'كيف تعكس أزياء الضيافة مستوى الخدمة والرفاهية في المنشأة؟',
    slug: 'how-hospitality-uniforms-reflect-service-and-luxury-level',
    excerpt: 'العلاقة بين تصميم أزياء الضيافة ومستوى الخدمة والرفاهية المقدمة، وكيف تؤثر على تصور النزلاء للمنشأة.',
    imageSrc: '/images/hospitality_uniforms/luxury-reflection.jpg',
  },
  {
    id: 4,
    title: 'أفضل أنواع الأقمشة لأزياء الضيافة: المتانة والراحة والأناقة',
    slug: 'best-fabrics-for-hospitality-uniforms',
    excerpt: 'دليل شامل لأفضل أنواع الأقمشة المستخدمة في أزياء الضيافة والتي تجمع بين المتانة والراحة والمظهر الأنيق.',
    imageSrc: '/images/hospitality_uniforms/quality-fabrics.jpg',
  },
  {
    id: 5,
    title: 'زي الشيف: معايير النظافة والأناقة للمطبخ الاحترافي',
    slug: 'chef-uniform-hygiene-standards',
    excerpt: 'المعايير الأساسية لزي الشيف الذي يجمع بين متطلبات النظافة والصحة مع الأناقة المطلوبة للمطبخ الاحترافي.',
    imageSrc: '/images/hospitality_uniforms/chef-hygiene.jpg',
  },
  {
    id: 8,
    title: 'أهمية الزي الموحد في تعزيز هوية العلامة التجارية للفنادق والمطاعم',
    slug: 'importance-of-uniforms-in-enhancing-brand-identity',
    excerpt: 'كيف يساهم الزي الموحد في تعزيز وترسيخ هوية العلامة التجارية للفنادق والمطاعم وتمييزها عن المنافسين.',
    imageSrc: '/images/hospitality_uniforms/brand-identity.jpg',
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