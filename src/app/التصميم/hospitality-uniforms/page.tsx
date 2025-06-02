import { Metadata } from 'next';
import CategoryPage from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'تصميم زي الضيافة والفنادق | خبراء الزي الموحد',
  description: 'دليل شامل لتصميم زي الضيافة والفنادق مع التركيز على الأناقة والراحة والعملية للعاملين في قطاع الضيافة والسياحة',
  keywords: ['تصميم زي فنادق', 'يونيفورم ضيافة', 'زي مطاعم', 'تصميم زي سياحة', 'ملابس ضيافة أنيقة'],
};

const hospitalityDesignArticles = [
  {
    id: 1,
    title: 'أساسيات تصميم زي الاستقبال في الفنادق الفاخرة',
    slug: 'fundamentals-designing-reception-uniforms-luxury-hotels',
    excerpt: 'دليل تصميم زي الاستقبال في الفنادق الفاخرة مع التركيز على الأناقة والمهنية والراحة لتعزيز تجربة الضيوف.',
    imageSrc: '/images/hospitality_uniforms/luxury_hotel_reception.jpg',
    category: 'التصميم',
  },
  {
    id: 2,
    title: 'تصميم زي الطهاة: الموازنة بين الأناقة والعملية',
    slug: 'chef-uniform-design-balancing-elegance-functionality',
    excerpt: 'استراتيجيات تصميم زي الطهاة الذي يجمع بين المظهر الأنيق والوظائف العملية مع مراعاة معايير السلامة والنظافة.',
    imageSrc: '/images/hospitality_uniforms/chef_uniform_design.jpg',
    category: 'التصميم',
  },
  {
    id: 3,
    title: 'ألوان وتصاميم زي خدمة الغرف في الفنادق',
    slug: 'colors-designs-housekeeping-uniforms-hotels',
    excerpt: 'دليل اختيار الألوان والتصاميم المناسبة لزي خدمة الغرف في الفنادق مع مراعاة الراحة والمظهر المهني.',
    imageSrc: '/images/hospitality_uniforms/housekeeping_uniform_colors.jpg',
    category: 'التصميم',
  },
  {
    id: 4,
    title: 'تصميم زي النادلين: أناقة تعكس مستوى المطعم',
    slug: 'waiter-uniform-design-elegance-reflecting-restaurant-level',
    excerpt: 'كيفية تصميم زي النادلين بطريقة تعكس مستوى وطابع المطعم، من المطاعم الراقية إلى المقاهي العصرية.',
    imageSrc: '/images/hospitality_uniforms/waiter_uniform_elegance.jpg',
    category: 'التصميم',
  },
  {
    id: 5,
    title: 'دمج الهوية التراثية في تصميم زي الضيافة السعودية',
    slug: 'incorporating-heritage-identity-saudi-hospitality-uniform-design',
    excerpt: 'استراتيجيات دمج العناصر التراثية السعودية في تصميم زي الضيافة مع الحفاظ على الطابع العصري والمهني.',
    imageSrc: '/images/hospitality_uniforms/saudi_heritage_design.jpg',
    category: 'التصميم',
  },
  {
    id: 6,
    title: 'تصميم زي موسمي للمنتجعات السياحية',
    slug: 'seasonal-uniform-design-tourist-resorts',
    excerpt: 'تطوير تصاميم زي موسمية للمنتجعات السياحية تتناسب مع الفصول المختلفة والأنشطة المتنوعة.',
    imageSrc: '/images/hospitality_uniforms/seasonal_resort_uniforms.jpg',
    category: 'التصميم',
  },
  {
    id: 7,
    title: 'اختيار الأقمشة المناسبة لزي الضيافة في المناخ الحار',
    slug: 'choosing-appropriate-fabrics-hospitality-uniforms-hot-climate',
    excerpt: 'دليل اختيار الأقمشة المناسبة لزي الضيافة في المناخ الحار مع التركيز على التهوية والراحة والمظهر الأنيق.',
    imageSrc: '/images/hospitality_uniforms/hot_climate_fabrics.jpg',
    category: 'التصميم',
  },
  {
    id: 8,
    title: 'تصميم إكسسوارات مكملة لزي الضيافة',
    slug: 'designing-complementary-accessories-hospitality-uniforms',
    excerpt: 'تطوير إكسسوارات مكملة لزي الضيافة مثل الأوشحة والأحزمة والشارات لإضافة لمسة أنيقة ومميزة.',
    imageSrc: '/images/hospitality_uniforms/uniform_accessories.jpg',
    category: 'التصميم',
  },
];

export default function DesignHospitalityUniformsPage() {
  return (
    <CategoryPage
      title="تصميم زي الضيافة والفنادق"
      description="اكتشف أحدث اتجاهات وأساليب تصميم زي الضيافة والفنادق التي تجمع بين الأناقة والعملية، مع مراعاة متطلبات الراحة والمهنية في قطاع الضيافة"
      categoryArabic="التصميم"
      categorySlug="التصميم/hospitality-uniforms"
      headerImage="/images/hospitality_uniforms/hospitality_design_header.jpg"
      articles={hospitalityDesignArticles}
    />
  );
}
