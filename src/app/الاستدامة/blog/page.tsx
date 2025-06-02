import { Metadata } from 'next';
import CategoryPage from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'مدونة الاستدامة في الزي الموحد | خبراء الزي الموحد',
  description: 'مقالات ونصائح حول تطبيق مبادئ الاستدامة في صناعة الزي الموحد، والممارسات الصديقة للبيئة في التصنيع والتوريد',
  keywords: ['استدامة الزي الموحد', 'زي صديق للبيئة', 'تصنيع مستدام', 'إعادة تدوير الزي', 'مسؤولية بيئية'],
};

const sustainabilityBlogArticles = [
  {
    id: 1,
    title: 'مستقبل الاستدامة في صناعة الزي الموحد',
    slug: 'future-sustainability-uniform-industry',
    excerpt: 'نظرة على مستقبل الاستدامة في صناعة الزي الموحد والتقنيات الناشئة التي ستشكل هذا المجال في السنوات القادمة.',
    imageSrc: '/images/blog/sustainability_future.jpg',
    category: 'الاستدامة',
  },
  {
    id: 2,
    title: 'دليل الشركات للتحول نحو الزي الموحد المستدام',
    slug: 'company-guide-sustainable-uniform-transition',
    excerpt: 'دليل عملي للشركات التي تسعى للتحول نحو استخدام الزي الموحد المستدام، مع خطوات التطبيق والفوائد المتوقعة.',
    imageSrc: '/images/blog/sustainable_transition.jpg',
    category: 'الاستدامة',
  },
  {
    id: 3,
    title: 'تقييم الأثر البيئي لدورة حياة الزي الموحد',
    slug: 'environmental-impact-assessment-uniform-lifecycle',
    excerpt: 'منهجية تقييم الأثر البيئي لدورة حياة الزي الموحد من التصنيع إلى التخلص النهائي، مع أدوات القياس والتحليل.',
    imageSrc: '/images/blog/environmental_impact.jpg',
    category: 'الاستدامة',
  },
  {
    id: 4,
    title: 'الشهادات البيئية للزي الموحد: دليل المشتري',
    slug: 'environmental-certifications-uniform-buyer-guide',
    excerpt: 'دليل شامل للشهادات البيئية المعتمدة للزي الموحد وكيفية اختيار المنتجات المعتمدة والموثوقة.',
    imageSrc: '/images/blog/environmental_certifications.jpg',
    category: 'الاستدامة',
  },
  {
    id: 5,
    title: 'ابتكارات في المواد المستدامة للزي الموحد',
    slug: 'innovations-sustainable-materials-uniforms',
    excerpt: 'أحدث الابتكارات في المواد المستدامة المستخدمة في صناعة الزي الموحد، من الألياف الطبيعية إلى المواد المعاد تدويرها.',
    imageSrc: '/images/blog/sustainable_materials.jpg',
    category: 'الاستدامة',
  },
  {
    id: 6,
    title: 'برامج إعادة التدوير للزي الموحد في الشركات',
    slug: 'uniform-recycling-programs-companies',
    excerpt: 'كيفية تطبيق برامج إعادة التدوير للزي الموحد في الشركات، مع نماذج ناجحة وأفضل الممارسات.',
    imageSrc: '/images/blog/recycling_programs.jpg',
    category: 'الاستدامة',
  },
  {
    id: 7,
    title: 'التوازن بين التكلفة والاستدامة في الزي الموحد',
    slug: 'balancing-cost-sustainability-uniforms',
    excerpt: 'استراتيجيات تحقيق التوازن بين التكلفة والاستدامة في اختيار الزي الموحد، مع تحليل العائد على الاستثمار طويل المدى.',
    imageSrc: '/images/blog/cost_sustainability_balance.jpg',
    category: 'الاستدامة',
  },
  {
    id: 8,
    title: 'دور المستهلك في تعزيز الاستدامة في صناعة الزي الموحد',
    slug: 'consumer-role-promoting-sustainability-uniform-industry',
    excerpt: 'كيف يمكن للمستهلكين والشركات المساهمة في تعزيز الاستدامة في صناعة الزي الموحد من خلال خياراتهم الشرائية.',
    imageSrc: '/images/blog/consumer_sustainability.jpg',
    category: 'الاستدامة',
  },
];

export default function SustainabilityBlogPage() {
  return (
    <CategoryPage
      title="مدونة الاستدامة في الزي الموحد"
      description="اكتشف أحدث المقالات والنصائح حول تطبيق مبادئ الاستدامة في صناعة الزي الموحد، والممارسات الصديقة للبيئة في التصنيع والتوريد"
      categoryArabic="الاستدامة"
      categorySlug="الاستدامة/blog"
      headerImage="/images/blog/sustainability_header.jpg"
      articles={sustainabilityBlogArticles}
    />
  );
}
