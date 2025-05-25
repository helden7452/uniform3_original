import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import posts from '@/data/posts';

export const metadata: Metadata = {
  title: 'أهمية الزي الموحد في تعزيز الهوية المؤسسية وبناء صورة احترافية | خبراء الزي الموحد',
  description: 'كيف يساهم الزي الموحد بشكل فعال في تعزيز الهوية المؤسسية وبناء الانتماء الداخلي وتعزيز الصورة الاحترافية للمؤسسات والشركات السعودية',
};

export default function BlogPostPage() {
  // Redirect to the dynamic page
  redirect('/blog/importance-of-uniforms-in-corporate-identity');
} 