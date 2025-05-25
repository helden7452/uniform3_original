"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import posts from '@/data/posts';

// نستخدم معلومات الصفحة بدون export متطلبات استخدام فقط، الآن البيانات الوصفية معرّفة في layout
const pageTitle = 'مدونة الزي الموحد | نصائح واتجاهات لصناعة اليونيفورم في السعودية';
const pageDescription = 'استكشف مقالاتنا المتخصصة في مجال الزي الموحد والتي تقدم نصائح وإرشادات حول اختيار وتصميم اليونيفورم المناسب لمختلف القطاعات في المملكة العربية السعودية';

export default function BlogPage() {
  const [displayedPosts, setDisplayedPosts] = useState<typeof posts>([]);
  const [loading, setLoading] = useState(true);
  const [postsPerPage] = useState(9); // عدد المقالات في الصفحة
  const [currentPage, setCurrentPage] = useState(1);

  // حساب عدد صفحات التنقل
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // تحميل المقالات تدريجياً
  useEffect(() => {
    setLoading(true);
    
    // محاكاة التحميل التدريجي
    const timer = setTimeout(() => {
      const start = (currentPage - 1) * postsPerPage;
      const end = start + postsPerPage;
      setDisplayedPosts(posts.slice(start, end));
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentPage, postsPerPage]);
  
  // التنقل بين الصفحات
  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">المدونة</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          اكتشف أحدث المقالات والنصائح حول اختيار وتصميم الزي الموحد المناسب لمختلف القطاعات
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(postsPerPage)].map((_, index) => (
            <div 
              key={`skeleton-${index}`} 
              className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-5">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-8 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
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
                index={index}
              />
            ))}
          </div>

          {/* ترقيم الصفحات */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav aria-label="تنقل الصفحات">
                <ul className="flex items-center space-x-2 rtl:space-x-reverse">
                  <li>
                    <button
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === 1 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-label="الصفحة السابقة"
                    >
                      السابق
                    </button>
                  </li>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <li key={pageNumber}>
                        <button
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 rounded-md ${
                            currentPage === pageNumber
                              ? 'bg-accent text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          aria-label={`الصفحة ${pageNumber}`}
                          aria-current={currentPage === pageNumber ? 'page' : undefined}
                        >
                          {pageNumber}
                        </button>
                      </li>
                    );
                  })}
                  
                  <li>
                    <button
                      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === totalPages 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-label="الصفحة التالية"
                    >
                      التالي
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </>
      )}
    </main>
  );
} 