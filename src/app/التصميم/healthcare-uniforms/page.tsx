import { Metadata } from 'next';
import CategoryPage from '@/components/CategoryPage';

export const metadata: Metadata = {
  title: 'تصميم الزي الطبي | خبراء الزي الموحد',
  description: 'دليل شامل لتصميم الزي الطبي والصحي مع مراعاة المعايير المهنية والراحة والوظائفية للعاملين في القطاع الصحي',
  keywords: ['تصميم زي طبي', 'يونيفورم طبي', 'زي مستشفيات', 'تصميم زي صحي', 'ملابس طبية'],
};

const healthcareDesignArticles = [
  {
    id: 1,
    title: 'أساسيات تصميم الزي الطبي: دليل شامل للمستشفيات',
    slug: 'comprehensive-guide-medical-uniform-design-hospitals',
    excerpt: 'دليل متكامل يغطي جميع جوانب تصميم الزي الطبي للمستشفيات، من اختيار الأقمشة إلى تحديد القصّات المناسبة وضمان الراحة والعملية.',
    imageSrc: '/images/healthcare_uniforms/medical_uniform_design.jpg',
    category: 'التصميم',
  },
  {
    id: 2,
    title: 'اختيار الألوان المناسبة للزي الطبي حسب التخصص',
    slug: 'choosing-appropriate-colors-medical-uniforms-specialization',
    excerpt: 'دليل اختيار الألوان المناسبة للزي الطبي حسب التخصص والقسم، مع مراعاة التأثير النفسي للألوان على المرضى والعاملين.',
    imageSrc: '/images/healthcare_uniforms/medical_uniform_colors.jpg',
    category: 'التصميم',
  },
  {
    id: 3,
    title: 'تصميم زي طبي يجمع بين الأناقة والعملية',
    slug: 'designing-elegant-practical-medical-uniforms',
    excerpt: 'كيفية تصميم زي طبي يوازن بين المظهر الأنيق والوظائف العملية، مع التركيز على راحة الطاقم الطبي أثناء ساعات العمل الطويلة.',
    imageSrc: '/images/healthcare_uniforms/elegant_medical_wear.jpg',
    category: 'التصميم',
  },
  {
    id: 4,
    title: 'تصميم جيوب وحلول تخزين مبتكرة للزي الطبي',
    slug: 'innovative-pocket-storage-solutions-medical-uniforms',
    excerpt: 'ابتكارات في تصميم جيوب وحلول تخزين عملية للزي الطبي تسهل حمل المعدات والأدوات الضرورية مع الحفاظ على المظهر المهني.',
    imageSrc: '/images/healthcare_uniforms/medical_uniform_storage.jpg',
    category: 'التصميم',
  },
  {
    id: 5,
    title: 'معايير السلامة في تصميم الزي الطبي',
    slug: 'safety-standards-medical-uniform-design',
    excerpt: 'المعايير والاشتراطات الأساسية للسلامة التي يجب مراعاتها في تصميم الزي الطبي لحماية الطاقم الطبي والمرضى.',
    imageSrc: '/images/healthcare_uniforms/medical_safety_standards.jpg',
    category: 'التصميم',
  },
  {
    id: 6,
    title: 'تصميم زي خاص لغرف العمليات والعناية المركزة',
    slug: 'designing-specialized-uniforms-operation-rooms-icu',
    excerpt: 'متطلبات وخصائص تصميم الزي الخاص بغرف العمليات والعناية المركزة، مع مراعاة معايير التعقيم والحماية.',
    imageSrc: '/images/healthcare_uniforms/operation_room_uniforms.jpg',
    category: 'التصميم',
  },
  {
    id: 7,
    title: 'تصميم زي طبي مريح للمناوبات الطويلة',
    slug: 'designing-comfortable-medical-uniforms-long-shifts',
    excerpt: 'نصائح وإرشادات لتصميم زي طبي مريح يناسب المناوبات الطويلة، مع التركيز على اختيار الأقمشة والقصّات المناسبة.',
    imageSrc: '/images/healthcare_uniforms/comfortable_medical_wear.jpg',
    category: 'التصميم',
  },
  {
    id: 8,
    title: 'دمج الهوية المؤسسية في تصميم الزي الطبي',
    slug: 'incorporating-corporate-identity-medical-uniform-design',
    excerpt: 'كيفية دمج عناصر الهوية المؤسسية في تصميم الزي الطبي مع الحفاظ على المعايير المهنية والعملية.',
    imageSrc: '/images/healthcare_uniforms/branded_medical_uniforms.jpg',
    category: 'التصميم',
  },
];

export default function DesignHealthcareUniformsPage() {
  return (
    <CategoryPage
      title="تصميم الزي الطبي"
      description="اكتشف أحدث اتجاهات وأساليب تصميم الزي الطبي التي تجمع بين الأناقة والعملية، مع مراعاة متطلبات السلامة والراحة للعاملين في القطاع الصحي"
      categoryArabic="التصميم"
      categorySlug="التصميم/healthcare-uniforms"
      headerImage="/images/healthcare_uniforms/medical_uniform_design_header.jpg"
      articles={healthcareDesignArticles}
    />
  );
}
