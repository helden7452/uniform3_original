"use client";

import { useState, useEffect } from 'react';
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
  index?: number; // لتحديد ترتيب ظهور البطاقات
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  category,
  coverImage,
  date,
  readTime,
  author,
  index = 0
}: BlogCardProps) {
  // Format date to Arabic locale
  const formattedDate = new Date(date).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // حالات للتحميل التدريجي
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // تأخير ظهور البطاقة بشكل متدرج بناءً على الترتيب
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 100); // تأخير متدرج حسب الترتيب

    return () => clearTimeout(timer);
  }, [index]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } hover:shadow-lg`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link href={`/${category}/${slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <div 
            className={`absolute inset-0 bg-gray-200 animate-pulse ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-300 z-10`}
          />
          <Image
            src={coverImage}
            alt={title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadingComplete={handleImageLoad}
            placeholder="blur" 
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="
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