import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BlogPost from '@/components/BlogPost';
import AuthorBio from '@/components/AuthorBio';
import posts from '@/data/posts';
import authors from '@/data/authors';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'المقال غير موجود | خبراء الزي الموحد',
      description: 'عذراً، المقال الذي تبحث عنه غير موجود',
    };
  }
  
  return {
    title: `${post.title} | خبراء الزي الموحد`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  const author = authors.find((author) => author.id === post.author);
  
  if (!author) {
    const defaultAuthor = {
      id: 'admin',
      name: 'فريق يونيفورم إكسبيرتس',
      image: 'admin.png',
      title: 'فريق المحتوى',
      bio: 'فريق متخصص في مجال تصميم وإنتاج الأزياء الموحدة للشركات والمؤسسات المختلفة.',
      socialLinks: [],
    };
    
    return (
      <div className="max-w-4xl mx-auto">
        <BlogPost
          title={post.title}
          excerpt={post.excerpt}
          content={post.excerpt}
          category={post.category}
          slug={post.slug}
          author={defaultAuthor}
          publishDate={post.date}
          coverImage={post.coverImage}
          readingTime={post.readTime}
          tags={[post.category]}
        />
      </div>
    );
  }
  
  const updatedAuthor = {
    ...author,
    image: author.avatar || `${author.id}.png`,
    socialLinks: author.socialLinks || [],
  };
  
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
  
  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title={post.title}
        excerpt={post.excerpt}
        content={post.excerpt}
        category={post.category}
        slug={post.slug}
        author={updatedAuthor}
        publishDate={post.date}
        coverImage={post.coverImage}
        readingTime={post.readTime}
        tags={[post.category]}
      />
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">عن الكاتب</h2>
        <AuthorBio
          id={updatedAuthor.id}
          name={updatedAuthor.name}
          image={updatedAuthor.image}
          title={updatedAuthor.title}
          bio={updatedAuthor.bio}
          socialLinks={updatedAuthor.socialLinks}
        />
      </div>
      
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">مقالات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => {
              const relatedAuthorId = relatedPost.author;
              const relatedAuthor = authors.find((a) => a.id === relatedAuthorId);
              const avatar = relatedAuthor?.avatar || `/images/author/admin.png`;
              
              return (
                <div key={relatedPost.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="text-lg font-bold hover:text-primary transition-colors duration-200 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden">
                          <Image
                            src={avatar}
                            alt={relatedAuthor?.name || "مؤلف"}
                            fill
                            loading="lazy"
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs text-gray-600 mr-2">{relatedAuthor?.name || "مؤلف"}</span>
                      </div>
                      <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} 