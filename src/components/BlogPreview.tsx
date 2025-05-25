import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
}

const recentPosts: BlogPost[] = [
  {
    id: 1,
    title: 'أهمية الزي الموحد في تعزيز الهوية المؤسسية',
    excerpt: 'تعرف على دور الزي الموحد في تعزيز الهوية البصرية للمؤسسة وتقوية الشعور بالانتماء لدى الموظفين وزيادة التميز في السوق',
    slug: '/blog/importance-of-uniforms-in-corporate-identity',
    image: '/images/blog/blog-1.jpg',
    category: 'تسويق',
    date: '15 مايو 2023',
    readTime: 4,
  },
  {
    id: 2,
    title: 'كيفية اختيار الأقمشة المناسبة للزي الموحد في المناخ الحار',
    excerpt: 'نصائح عملية لاختيار الأقمشة المناسبة للزي الموحد في المملكة العربية السعودية التي تتميز بالمناخ الحار الجاف',
    slug: '/blog/choosing-suitable-fabrics-for-hot-climate',
    image: '/images/blog/blog-2.jpg',
    category: 'نصائح',
    date: '3 يونيو 2023',
    readTime: 5,
  },
  {
    id: 3,
    title: 'أحدث اتجاهات تصميم الزي الموحد للشركات في 2023',
    excerpt: 'تعرف على أحدث صيحات وتوجهات تصميم الزي الموحد للشركات في عام 2023 ومواكبة العصر مع الحفاظ على الراحة والأداء الوظيفي',
    slug: '/blog/latest-corporate-uniform-design-trends',
    image: '/images/blog/blog-3.jpg',
    category: 'تصميم',
    date: '22 يونيو 2023',
    readTime: 6,
  },
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">آخر المقالات</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            تابع مدونتنا للحصول على أفضل النصائح والمعلومات حول الزي الموحد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Link href={post.slug}>
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={post.image || '/images/blog/default.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} دقائق للقراءة</span>
                </div>
                <Link href={post.slug}>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={post.slug} className="text-primary font-medium hover:text-accent transition-colors flex items-center">
                  قراءة المزيد
                  <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="300">
          <Link 
            href="/blog"
            className="btn-secondary inline-block"
          >
            عرض جميع المقالات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 