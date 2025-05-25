import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  category,
  coverImage,
  date,
  readTime,
  author
}: BlogCardProps) {
  // Format date to Arabic locale
  const formattedDate = new Date(date).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/${category}/${slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <Link href={`/${category}`} className="text-accent hover:underline font-medium text-sm">
            {category.replace('-', ' ')}
          </Link>
          <div className="text-gray-500 text-xs">{formattedDate}</div>
        </div>
        
        <Link href={`/${category}/${slug}`} className="block">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 hover:text-accent transition-colors">{title}</h2>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-xs">{readTime}</span>
          <Link 
            href={`/${category}/${slug}`} 
            className="text-accent hover:underline text-sm font-medium"
          >
            اقرأ المزيد
          </Link>
        </div>
      </div>
    </div>
  );
} 