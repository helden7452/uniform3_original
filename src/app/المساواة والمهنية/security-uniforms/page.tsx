import { Metadata } from 'next';
import CategoryPage from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'المساواة والمهنية في زي الأمن | خبراء الزي الموحد',
  description: 'تعزيز مبادئ المساواة والمهنية في تصميم وتوزيع زي الأمن والحراسة، مع ضمان العدالة والاحترام لجميع العاملين في القطاع الأمني',
  keywords: ['مساواة زي الأمن', 'مهنية الحراسة', 'عدالة الزي الموحد', 'احترام العاملين', 'زي أمن عادل'],
};

const equalitySecurityArticles = [
  {
    id: 1,
    title: 'ضمان المساواة في توزيع زي الأمن بين جميع العاملين',
    slug: 'ensuring-equality-security-uniform-distribution-all-workers',
    excerpt: 'استراتيجيات وسياسات ضمان المساواة في توزيع زي الأمن بين جميع العاملين بغض النظر عن المستوى الوظيفي أو الخلفية الاجتماعية.',
    imageSrc: '/images/security_uniforms/equality_distribution.jpg',
    category: 'المساواة والمهنية',
  },
  {
    id: 2,
    title: 'تصميم زي أمن يراعي احتياجات الجنسين بمهنية',
    slug: 'designing-security-uniforms-gender-inclusive-professional',
    excerpt: 'دليل تصميم زي الأمن الذي يراعي احتياجات الرجال والنساء في القطاع الأمني مع الحفاظ على المهنية والراحة للجميع.',
    imageSrc: '/images/security_uniforms/gender_inclusive_design.jpg',
    category: 'المساواة والمهنية',
  },
  {
    id: 3,
    title: 'احترام التنوع الثقافي في تصميم زي الحراسة',
    slug: 'respecting-cultural-diversity-security-uniform-design',
    excerpt: 'كيفية تصميم زي الحراسة بطريقة تحترم التنوع الثقافي والديني للعاملين مع الحفاظ على الوحدة والمهنية.',
    imageSrc: '/images/security_uniforms/cultural_diversity.jpg',
    category: 'المساواة والمهنية',
  },
  {
    id: 4,
    title: 'معايير المهنية في اختيار وتوزيع زي الأمن',
    slug: 'professionalism-standards-security-uniform-selection-distribution',
    excerpt: 'المعايير المهنية الأساسية التي يجب مراعاتها في عملية اختيار وتوزيع زي الأمن لضمان العدالة والشفافية.',
    imageSrc: '/images/security_uniforms/professional_standards.jpg',
    category: 'المساواة والمهنية',
  },
  {
    id: 5,
    title: 'حقوق العاملين في الحصول على زي أمن مناسب',
    slug: 'worker-rights-appropriate-security-uniform',
    excerpt: 'دليل حقوق العاملين في القطاع الأمني للحصول على زي مناسب وعالي الجودة، والإجراءات القانونية لضمان هذه الحقوق.',
    imageSrc: '/images/security_uniforms/worker_rights.jpg',
    category: 'المساواة والمهنية',
  },
  {
    id: 6,
    title: 'تطبيق مبادئ العدالة في سياسات الزي الأمني',
    slug: 'applying-justice-principles-security-uniform-policies',
    excerpt: 'كيفية تطبيق مبادئ العدالة والإنصاف في وضع وتنفيذ سياسات الزي الأمني داخل المؤسسات والشركات.',
    imageSrc: '/images/security_uniforms/justice_principles.jpg',
    category: 'المساواة والمهنية',
  },
  {
    id: 7,
    title: 'التدريب على أهمية المظهر المهني للحراس',
    slug: 'training-importance-professional-appearance-security-guards',
    excerpt: 'برامج تدريبية متخصصة لتوعية الحراس بأهمية المظهر المهني وكيفية الحفاظ على زيهم الموحد بطريقة تعكس الاحترافية.',
    imageSrc: '/images/security_uniforms/professional_training.jpg',
    category: 'المساواة والمهنية',
  },
  {
    id: 8,
    title: 'مكافحة التمييز في بيئة العمل الأمني من خلال الزي الموحد',
    slug: 'combating-discrimination-security-workplace-through-uniforms',
    excerpt: 'دور الزي الموحد في مكافحة التمييز وتعزيز المساواة في بيئة العمل الأمني، مع استراتيجيات التطبيق العملي.',
    imageSrc: '/images/security_uniforms/anti_discrimination.jpg',
    category: 'المساواة والمهنية',
  },
];

export default function EqualitySecurityUniformsPage() {
  return (
    <CategoryPage
      title="المساواة والمهنية في زي الأمن"
      description="تعزيز مبادئ المساواة والمهنية في تصميم وتوزيع زي الأمن والحراسة، مع ضمان العدالة والاحترام لجميع العاملين في القطاع الأمني"
      categoryArabic="المساواة والمهنية"
      categorySlug="المساواة والمهنية/security-uniforms"
      headerImage="/images/security_uniforms/equality_professionalism.jpg"
      articles={equalitySecurityArticles}
    />
  );
}
