import { Metadata } from 'next';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import posts from '@/data/posts';

export const metadata: Metadata = {
  title: 'مدونة الزي الموحد | نصائح واتجاهات لصناعة اليونيفورم في السعودية',
  description: 'استكشف مقالاتنا المتخصصة في مجال الزي الموحد والتي تقدم نصائح وإرشادات حول اختيار وتصميم اليونيفورم المناسب لمختلف القطاعات في المملكة العربية السعودية',
};

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">المدونة</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          اكتشف أحدث المقالات والنصائح حول اختيار وتصميم الزي الموحد المناسب لمختلف القطاعات
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            category={post.category}
            coverImage={post.coverImage}
            date={post.date}
            readTime={post.readTime}
            author={post.author}
          />
        ))}
      </div>
    </main>
  );
} 