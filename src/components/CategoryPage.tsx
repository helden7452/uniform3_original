import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from './Breadcrumb';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  imageSrc: string;
  category: string;
}

interface CategoryPageProps {
  title: string;
  description: string;
  categoryArabic: string;
  categorySlug: string;
  headerImage: string;
  articles: Article[];
}

export default function CategoryPage({
  title,
  description,
  categoryArabic,
  categorySlug,
  headerImage,
  articles,
}: CategoryPageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'المدونة', href: '/blog' },
          { label: categoryArabic, href: `/${categorySlug}`, isCurrent: true }
        ]} 
      />
    
      <section className="mb-16">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={headerImage}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-transparent to-primary/50">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white drop-shadow-md">
              {description}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">{`مقالات عن ${title}`}</h2>
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56 w-full">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  <Link href={`/${categorySlug}/${article.slug}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link 
                  href={`/${categorySlug}/${article.slug}`}
                  className="inline-block bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى مساعدة في اختيار الزي المناسب؟</h2>
              <p className="mb-4">
                نحن في خبراء الزي الموحد نقدم حلولاً متكاملة تناسب مختلف القطاعات والمتطلبات، مع الالتزام بأعلى معايير الجودة والمهنية.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-primary rounded-lg px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                طلب استشارة مجانية
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative h-40 w-40">
                <Image
                  src="/images/cta-icon.png"
                  alt="طلب استشارة"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
