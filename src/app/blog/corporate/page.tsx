import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'مدونة الزي المؤسسي | خبراء الزي الموحد',
  description: 'اكتشف أحدث المقالات والنصائح حول الزي المؤسسي، تصميم الهوية المؤسسية، والاتجاهات الحديثة في عالم الأزياء المهنية',
  keywords: 'مدونة الزي المؤسسي, مقالات الزي المهني, نصائح الزي المؤسسي, تصميم الهوية المؤسسية',
};

const corporateBlogPosts = [
  {
    id: 'corporate-uniforms-guide',
    title: 'الدليل الشامل للزي المؤسسي في السعودية',
    excerpt: 'دليل متكامل لاختيار وتصميم الزي المؤسسي المناسب للشركات السعودية مع مراعاة الثقافة المحلية والمعايير الدولية',
    image: '/images/blog/corporate-uniforms-guide.jpg',
    category: 'دليل شامل',
    readTime: '12 دقيقة',
    publishDate: '2024-01-15',
    author: 'فريق خبراء الزي الموحد',
    slug: 'corporate-uniforms-guide'
  },
  {
    id: 'sustainable-corporate-uniforms',
    title: 'الزي المؤسسي المستدام والخيارات الصديقة للبيئة',
    excerpt: 'كيف تختار الشركات الزي المؤسسي المستدام الذي يحافظ على البيئة ويعكس قيم المسؤولية الاجتماعية',
    image: '/images/corporate_uniforms/sustainable-eco-friendly-uniforms.jpg',
    category: 'الاستدامة',
    readTime: '10 دقائق',
    publishDate: '2024-01-10',
    author: 'م. أحمد الغامدي',
    slug: 'sustainable-corporate-uniforms-eco-friendly-options'
  },
  {
    id: 'corporate-identity-uniforms',
    title: 'كيف يعكس الزي المؤسسي هوية وقيم الشركة',
    excerpt: 'تأثير الزي المؤسسي على بناء الهوية المؤسسية وتعزيز قيم الشركة أمام العملاء والموظفين',
    image: '/images/corporate_uniforms/corporate-identity-values.jpg',
    category: 'الهوية المؤسسية',
    readTime: '8 دقائق',
    publishDate: '2024-01-05',
    author: 'د. سارة العتيبي',
    slug: 'how-corporate-uniforms-reflect-company-identity-values'
  },
  {
    id: 'equality-professionalism-uniforms',
    title: 'دور الزي المؤسسي في تعزيز المساواة والمهنية',
    excerpt: 'كيف يساهم الزي الموحد في خلق بيئة عمل عادلة ومهنية تقوم على الجدارة والكفاءة',
    image: '/images/corporate_uniforms/equality-professionalism-uniforms.jpg',
    category: 'المساواة والمهنية',
    readTime: '9 دقائق',
    publishDate: '2023-12-28',
    author: 'د. سعاد المطيري',
    slug: 'role-of-corporate-uniforms-in-promoting-equality-professionalism'
  },
  {
    id: 'corporate-uniform-trends-2024',
    title: 'أحدث اتجاهات الزي المؤسسي لعام 2024',
    excerpt: 'استكشف أحدث الاتجاهات في تصميم الزي المؤسسي والألوان والأقمشة الرائجة لهذا العام',
    image: '/images/blog/corporate-uniform-trends-2024.jpg',
    category: 'الاتجاهات',
    readTime: '7 دقائق',
    publishDate: '2023-12-20',
    author: 'فريق التصميم',
    slug: 'corporate-uniform-trends-2024'
  },
  {
    id: 'choosing-corporate-uniform-colors',
    title: 'كيفية اختيار ألوان الزي المؤسسي المناسبة',
    excerpt: 'دليل شامل لاختيار الألوان المناسبة للزي المؤسسي وتأثيرها على نفسية الموظفين وانطباع العملاء',
    image: '/images/blog/corporate-uniform-colors.jpg',
    category: 'التصميم',
    readTime: '6 دقائق',
    publishDate: '2023-12-15',
    author: 'أ. منى الشهري',
    slug: 'choosing-corporate-uniform-colors'
  }
];

export default function CorporateBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb
            items={[
              { label: 'الرئيسية', href: '/' },
              { label: 'المدونة', href: '/blog' },
              { label: 'الزي المؤسسي', href: '/blog/corporate', isCurrent: true }
            ]}
          />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              مدونة الزي المؤسسي
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              اكتشف أحدث الاتجاهات والنصائح في عالم الزي المؤسسي المهني
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">المقال المميز</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={corporateBlogPosts[0].image}
                      alt={corporateBlogPosts[0].title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {corporateBlogPosts[0].category}
                      </span>
                      <span className="text-gray-500 text-sm mr-4">
                        {corporateBlogPosts[0].readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {corporateBlogPosts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {corporateBlogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                          {corporateBlogPosts[0].author.charAt(0)}
                        </div>
                        <div className="mr-3">
                          <p className="text-sm font-medium text-gray-800">
                            {corporateBlogPosts[0].author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(corporateBlogPosts[0].publishDate).toLocaleDateString('ar-SA')}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${corporateBlogPosts[0].slug}`}
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        اقرأ المزيد
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories Filter */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">التصنيفات</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-primary text-white px-4 py-2 rounded-lg">
                  جميع المقالات
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  دليل شامل
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  الاستدامة
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  الهوية المؤسسية
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  التصميم
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  الاتجاهات
                </button>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corporateBlogPosts.slice(1).map((post, index) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  coverImage={post.image}
                  category={post.category}
                  readTime={post.readTime}
                  date={post.publishDate}
                  author={post.author}
                  slug={post.slug}
                  index={index}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                تحميل المزيد من المقالات
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-xl text-white/90 mb-8">
              احصل على أحدث المقالات والنصائح حول الزي المؤسسي مباشرة في بريدك الإلكتروني
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              مواضيع ذات صلة
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/healthcare-uniforms"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">الزي الطبي</h3>
                <p className="text-gray-600 text-sm">
                  اكتشف أحدث الاتجاهات في الزي الطبي والسكراب المهني
                </p>
              </Link>

              <Link
                href="/security-uniforms"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">زي الأمن</h3>
                <p className="text-gray-600 text-sm">
                  تعرف على معايير وتصاميم زي الأمن والحماية
                </p>
              </Link>

              <Link
                href="/hospitality-uniforms"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">زي الضيافة</h3>
                <p className="text-gray-600 text-sm">
                  أناقة ومهنية في زي الفنادق والمطاعم
                </p>
              </Link>

              <Link
                href="/aviation-uniforms"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">زي الطيران</h3>
                <p className="text-gray-600 text-sm">
                  تصاميم راقية لطاقم الطيران والخدمات الجوية
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}