'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import CategoryPage from '@/components/CategoryPage';

const sustainabilitySecurityArticles = [
  {
    id: 1,
    title: 'استخدام المواد المستدامة في تصنيع زي الأمن',
    slug: 'sustainable-materials-security-uniform-manufacturing',
    excerpt: 'دليل شامل حول استخدام المواد المستدامة وصديقة للبيئة في تصنيع زي الأمن مع الحفاظ على الجودة والمتانة.',
    imageSrc: '/images/security_uniforms/sustainable_materials.jpg',
    category: 'الاستدامة',
  },
  {
    id: 2,
    title: 'تقليل النفايات في إنتاج زي الأمن',
    slug: 'reducing-waste-security-uniform-production',
    excerpt: 'استراتيجيات فعالة لتقليل النفايات في عملية إنتاج زي الأمن وتعزيز الممارسات المستدامة في التصنيع.',
    imageSrc: '/images/security_uniforms/waste_reduction.jpg',
    category: 'الاستدامة',
  },
  {
    id: 3,
    title: 'إعادة تدوير زي الأمن القديم',
    slug: 'recycling-old-security-uniforms',
    excerpt: 'برامج وحلول مبتكرة لإعادة تدوير زي الأمن المستعمل وتحويله إلى منتجات جديدة مفيدة.',
    imageSrc: '/images/security_uniforms/uniform_recycling.jpg',
    category: 'الاستدامة',
  },
  {
    id: 4,
    title: 'شهادات الاستدامة في صناعة زي الأمن',
    slug: 'sustainability-certifications-security-uniform-industry',
    excerpt: 'دليل الشهادات والمعايير العالمية للاستدامة في صناعة زي الأمن وكيفية الحصول عليها.',
    imageSrc: '/images/security_uniforms/sustainability_certifications.jpg',
    category: 'الاستدامة',
  },
  {
    id: 5,
    title: 'تحسين دورة حياة زي الأمن',
    slug: 'improving-security-uniform-lifecycle',
    excerpt: 'استراتيجيات لتحسين دورة حياة زي الأمن من التصميم إلى التخلص النهائي بطريقة مستدامة.',
    imageSrc: '/images/security_uniforms/lifecycle_improvement.jpg',
    category: 'الاستدامة',
  },
  {
    id: 6,
    title: 'الممارسات المستدامة في صيانة زي الأمن',
    slug: 'sustainable-practices-security-uniform-maintenance',
    excerpt: 'دليل الممارسات المستدامة في صيانة وتنظيف زي الأمن للحفاظ على البيئة وإطالة عمر الملابس.',
    imageSrc: '/images/security_uniforms/sustainable_maintenance.jpg',
    category: 'الاستدامة',
  },
  {
    id: 7,
    title: 'مستقبل الاستدامة في صناعة زي الأمن',
    slug: 'future-sustainability-security-uniform-industry',
    excerpt: 'نظرة مستقبلية على اتجاهات الاستدامة في صناعة زي الأمن والتقنيات الجديدة المتوقعة.',
    imageSrc: '/images/security_uniforms/future_sustainability.jpg',
    category: 'الاستدامة',
  },
  {
    id: 8,
    title: 'التعاون مع موردين مستدامين لزي الأمن',
    slug: 'collaborating-sustainable-security-uniform-suppliers',
    excerpt: 'كيفية اختيار وبناء علاقات مع موردين ملتزمين بالاستدامة في صناعة زي الأمن.',
    imageSrc: '/images/security_uniforms/sustainable_suppliers.jpg',
    category: 'الاستدامة',
  },
];

export default function DynamicArabicRoute() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string[];

  // Handle specific Arabic routes
  if (slug && slug.length === 2 && slug[0] === 'الاستدامة' && slug[1] === 'security-uniforms') {
    return (
      <CategoryPage
        title="الاستدامة في زي الأمن"
        description="اكتشف كيفية تحقيق الاستدامة في تصميم وإنتاج زي الأمن مع التركيز على الجودة والمسؤولية البيئية"
        categoryArabic="الاستدامة"
        categorySlug="الاستدامة/security-uniforms"
        headerImage="/images/security_uniforms/sustainability_header.jpg"
        articles={sustainabilitySecurityArticles}
      />
    );
  }

  // For other routes, redirect to 404
  useEffect(() => {
    router.push('/404');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">جاري التحويل...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
}
