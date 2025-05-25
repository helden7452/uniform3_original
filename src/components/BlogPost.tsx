"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Author {
  id: string;
  name: string;
  image: string;
  title: string;
}

interface BlogPostProps {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  slug: string;
  author: Author;
  publishDate: string;
  coverImage: string;
  readingTime: string;
  tags: string[];
}

export default function BlogPost({
  title,
  excerpt,
  content,
  category,
  slug,
  author,
  publishDate,
  coverImage,
  readingTime,
  tags,
}: BlogPostProps) {
  // Format date to Arabic locale
  const formattedDate = new Date(publishDate).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // State to track if sections are loaded
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Effect to simulate progressive loading
  useEffect(() => {
    // Set content loaded after a small delay to allow for DOM painting
    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 100);
    
    // Set visible with a small delay for animation
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => {
      clearTimeout(contentTimer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Cover Image with blur placeholder */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager" // Load only the hero image eagerly
          placeholder="blur" 
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="
        />
      </div>

      {/* Article Header */}
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex justify-between items-center mb-3">
          <Link href={`/${category}`} className="text-accent hover:underline font-medium">
            {category.replace('-', ' ')}
          </Link>
          <div className="flex items-center text-gray-500 text-sm">
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>{readingTime}</span>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        
        {/* Author with lazy loading */}
        <div className="flex items-center mb-6">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={author.image.startsWith('/') ? author.image : `/images/author/${author.image}`}
              alt={author.name}
              fill
              className="object-cover"
              loading="lazy"
              sizes="48px"
            />
          </div>
          <div className="mr-3">
            <div className="font-medium text-gray-900">{author.name}</div>
            <div className="text-sm text-gray-500">{author.title}</div>
          </div>
        </div>
        
        {/* Content with progressive loading */}
        <div className={`article-content prose prose-lg max-w-none transition-opacity duration-500 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        
        {/* Tags with lazy loading */}
        {tags && tags.length > 0 && (
          <div className={`mt-8 pt-6 border-t border-gray-200 transition-opacity duration-300 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg font-semibold mb-3">الوسوم:</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tag}`}
                  className="inline-block bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Share Section with lazy loading */}
        <div className={`mt-8 flex justify-center transition-opacity duration-700 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">مشاركة المقال</h3>
            <div className="flex justify-center space-x-reverse space-x-4">
              <button className="bg-[#3b5998] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="sr-only">Facebook</span>
                {/* Facebook icon would go here */}
              </button>
              <button className="bg-[#1da1f2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="sr-only">Twitter</span>
                {/* Twitter icon would go here */}
              </button>
              <button className="bg-[#0e76a8] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="sr-only">LinkedIn</span>
                {/* LinkedIn icon would go here */}
              </button>
              <button className="bg-[#25D366] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="sr-only">WhatsApp</span>
                {/* WhatsApp icon would go here */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 