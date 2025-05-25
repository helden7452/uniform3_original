import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import posts from '@/data/posts';

export const metadata: Metadata = {
  title: 'اختيار الأقمشة المناسبة للمناخ الحار: دليل شامل للزي الموحد في السعودية | خبراء الزي الموحد',
  description: 'نصائح متخصصة لاختيار أفضل الأقمشة للزي الموحد التي تناسب المناخ الحار في المملكة العربية السعودية، مع التركيز على الراحة والأداء العملي والمظهر المهني',
};

export default function BlogPostPage() {
  // Redirect to the dynamic page
  redirect('/blog/choosing-suitable-fabrics-for-hot-climate');
} 