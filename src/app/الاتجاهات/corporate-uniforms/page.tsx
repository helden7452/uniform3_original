import { Metadata } from 'next';
import CategoryPage from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'اتجاهات الزي الموحد للشركات | خبراء الزي الموحد',
  description: 'اكتشف أحدث اتجاهات وتصاميم الزي الموحد للشركات في المملكة العربية السعودية، من الأقمشة المبتكرة إلى التصاميم العصرية',
  keywords: ['اتجاهات زي الشركات', 'موضة زي موحد', 'تصاميم عصرية', 'زي شركات حديث', 'يونيفورم شركات'],
};

const corporateTrendsArticles = [
  {
    id: 1,
    title: 'أحدث صيحات الزي الموحد للشركات في 2024',
    slug: 'latest-corporate-uniform-trends-2024',
    excerpt: 'استعراض لأحدث اتجاهات وصيحات الزي الموحد للشركات في عام 2024، من الألوان إلى القصّات والتصاميم العصرية.',
    imageSrc: '/images/corporate_uniforms/2024_trends.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 2,
    title: 'دمج التكنولوجيا في تصميم الزي الموحد للشركات',
    slug: 'technology-integration-corporate-uniform-design',
    excerpt: 'كيف تدمج الشركات التقنيات الحديثة في تصميم الزي الموحد، من الأقمشة الذكية إلى الإكسسوارات التقنية.',
    imageSrc: '/images/corporate_uniforms/tech_integration.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 3,
    title: 'الألوان العصرية في زي الشركات لعام 2024',
    slug: 'modern-colors-corporate-uniforms-2024',
    excerpt: 'دليل الألوان العصرية المستخدمة في زي الشركات لعام 2024، وكيفية توظيفها لتعزيز الهوية المؤسسية.',
    imageSrc: '/images/corporate_uniforms/modern_colors.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 4,
    title: 'تصاميم مبتكرة للزي الموحد في القطاع المصرفي',
    slug: 'innovative-designs-banking-sector-uniforms',
    excerpt: 'أحدث التصاميم المبتكرة للزي الموحد في القطاع المصرفي، مع التركيز على الأناقة والمهنية.',
    imageSrc: '/images/corporate_uniforms/banking_uniforms.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 5,
    title: 'اتجاهات الأقمشة المستدامة في زي الشركات',
    slug: 'sustainable-fabric-trends-corporate-uniforms',
    excerpt: 'استعراض أحدث اتجاهات الأقمشة المستدامة المستخدمة في زي الشركات، مع التركيز على الجودة والمسؤولية البيئية.',
    imageSrc: '/images/corporate_uniforms/sustainable_fabrics.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 6,
    title: 'تصاميم عصرية للزي الموحد في شركات التقنية',
    slug: 'modern-designs-tech-company-uniforms',
    excerpt: 'أحدث التصاميم العصرية للزي الموحد في شركات التقنية، مع موازنة الراحة والمظهر المهني.',
    imageSrc: '/images/corporate_uniforms/tech_company_uniforms.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 7,
    title: 'اتجاهات تصميم الزي الموحد للمناصب القيادية',
    slug: 'uniform-design-trends-executive-positions',
    excerpt: 'أحدث اتجاهات تصميم الزي الموحد للمناصب القيادية في الشركات، مع التركيز على التميز والفخامة.',
    imageSrc: '/images/corporate_uniforms/executive_uniforms.jpg',
    category: 'الاتجاهات',
  },
  {
    id: 8,
    title: 'مزج الثقافة المحلية مع التصاميم العالمية',
    slug: 'blending-local-culture-global-designs',
    excerpt: 'كيفية مزج العناصر الثقافية المحلية مع التصاميم العالمية في زي الشركات لخلق هوية فريدة.',
    imageSrc: '/images/corporate_uniforms/cultural_fusion.jpg',
    category: 'الاتجاهات',
  },
];

export default function CorporateUniformTrendsPage() {
  return (
    <CategoryPage
      title="اتجاهات الزي الموحد للشركات"
      description="اكتشف أحدث اتجاهات وابتكارات الزي الموحد للشركات، من التصاميم العصرية إلى الأقمشة المتطورة والتقنيات الحديثة"
      categoryArabic="الاتجاهات"
      categorySlug="الاتجاهات/corporate-uniforms"
      headerImage="/images/corporate_uniforms/trends_header.jpg"
      articles={corporateTrendsArticles}
    />
  );
}
