import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import posts from '@/data/posts';

export const metadata: Metadata = {
  title: 'أحدث اتجاهات تصميم الزي الموحد للشركات في عام 2025 | خبراء الزي الموحد',
  description: 'استعراض لأحدث الاتجاهات والابتكارات في مجال تصميم الزي الموحد للشركات والمؤسسات، مع التركيز على التصاميم العصرية التي تجمع بين الأناقة والعملية',
};

export default function BlogPostPage() {
  // Redirect to the dynamic page
  redirect('/blog/latest-corporate-uniform-design-trends');
} 