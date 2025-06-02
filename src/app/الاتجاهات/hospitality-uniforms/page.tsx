import { Metadata } from 'next';
import CategoryPage from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'اتجاهات زي الضيافة والفنادق | خبراء الزي الموحد',
  description: 'اكتشف أحدث اتجاهات وصيحات زي الضيافة والفنادق في المملكة العربية السعودية، من التصاميم العصرية إلى الأقمشة المبتكرة',
  keywords: ['اتجاهات زي ضيافة', 'موضة فنادق', 'تصاميم عصرية', 'زي مطاعم حديث', 'يونيفورم ضيافة'],
};

const hospitalityTrendsArticles = [
  {
    id: 1,
    title: 'أحدث صيحات زي الضيافة في الفنادق الفاخرة لعام 2024',
    slug: 'latest-hospitality-uniform-trends-luxury-hotels-2024',
    excerpt: 'استعراض لأحدث اتجاهات وصيحات زي الضيافة في الفنادق الفاخرة لعام 2024، من الألوان إلى القصّات والتصاميم العصرية.',
    imageSrc: '/images/hospitality_uniforms/2024_luxury_trends.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 2,
    title: 'الألوان العصرية في زي المطاعم والمقاهي',
    slug: 'modern-colors-restaurant-cafe-uniforms',
    excerpt: 'دليل الألوان العصرية المستخدمة في زي المطاعم والمقاهي وكيفية توظيفها لخلق أجواء مميزة وجذابة للعملاء.',
    imageSrc: '/images/hospitality_uniforms/modern_restaurant_colors.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 3,
    title: 'تصاميم مبتكرة لزي الاستقبال في الفنادق البوتيك',
    slug: 'innovative-designs-reception-uniforms-boutique-hotels',
    excerpt: 'أحدث التصاميم المبتكرة لزي الاستقبال في الفنادق البوتيك، مع التركيز على التفرد والشخصية المميزة.',
    imageSrc: '/images/hospitality_uniforms/boutique_reception_designs.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 4,
    title: 'اتجاهات الأقمشة المستدامة في قطاع الضيافة',
    slug: 'sustainable-fabric-trends-hospitality-sector',
    excerpt: 'استعراض أحدث اتجاهات الأقمشة المستدامة في قطاع الضيافة، مع التركيز على الجودة والمسؤولية البيئية.',
    imageSrc: '/images/hospitality_uniforms/sustainable_hospitality_fabrics.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 5,
    title: 'تصاميم عصرية لزي الطهاة في المطاعم الراقية',
    slug: 'modern-chef-uniform-designs-fine-dining-restaurants',
    excerpt: 'أحدث التصاميم العصرية لزي الطهاة في المطاعم الراقية، مع موازنة الأناقة والعملية والسلامة.',
    imageSrc: '/images/hospitality_uniforms/modern_chef_designs.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 6,
    title: 'اتجاهات زي خدمة الغرف في الفنادق العصرية',
    slug: 'housekeeping-uniform-trends-modern-hotels',
    excerpt: 'أحدث اتجاهات تصميم زي خدمة الغرف في الفنادق العصرية، مع التركيز على الراحة والمظهر المهني.',
    imageSrc: '/images/hospitality_uniforms/modern_housekeeping_trends.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 7,
    title: 'دمج التقنيات الذكية في زي الضيافة',
    slug: 'smart-technology-integration-hospitality-uniforms',
    excerpt: 'كيفية دمج التقنيات الذكية في زي الضيافة، من الأقمشة التفاعلية إلى الإكسسوارات التقنية المتطورة.',
    imageSrc: '/images/hospitality_uniforms/smart_hospitality_tech.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 8,
    title: 'اتجاهات زي المنتجعات الصحراوية في السعودية',
    slug: 'desert-resort-uniform-trends-saudi-arabia',
    excerpt: 'أحدث اتجاهات تصميم زي المنتجعات الصحراوية في السعودية، مع مراعاة الطابع المحلي والراحة في المناخ الصحراوي.',
    imageSrc: '/images/hospitality_uniforms/desert_resort_trends.jpg',
    category: 'الاتجاهات',
  },
];

export default function HospitalityUniformTrendsPage() {
  return (
    <CategoryPage
      title="اتجاهات زي الضيافة والفنادق"
      description="اكتشف أحدث اتجاهات وابتكارات زي الضيافة والفنادق، من التصاميم العصرية إلى الأقمشة المتطورة والتقنيات الحديثة في قطاع الضيافة"
      categoryArabic="الاتجاهات"
      categorySlug="الاتجاهات/hospitality-uniforms"
      headerImage="/images/hospitality_uniforms/hospitality_trends_header.jpg"
      articles={hospitalityTrendsArticles}
    />
  );
}
