'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function FlightCrewPage() {
  const [selectedCategory, setSelectedCategory] = useState('جميع المقالات');

  const articles = [
    {
      title: 'أهمية الأزياء المهنية لطاقم الطيران في صورة الشركة',
      description: 'كيف تؤثر أزياء طاقم الطيران على صورة شركة الطيران وثقة المسافرين',
      href: '/blog/flight-crew/importance-of-professional-aviation-crew-uniforms-company-image',
      image: '/images/aviation_uniforms/professional_crew_uniforms.jpg',
      category: 'صورة الشركة',
      readTime: '8 دقائق'
    },
    {
      title: 'أحدث اتجاهات تصميم الأزياء في قطاع الطيران',
      description: 'استكشاف أحدث التطورات والاتجاهات في تصميم أزياء طاقم الطيران',
      href: '/blog/flight-crew/latest-aviation-uniform-design-trends',
      image: '/images/aviation_uniforms/modern_aviation_design.jpg',
      category: 'التصميم',
      readTime: '10 دقائق'
    },
    {
      title: 'تاريخ تطور زي مضيفي الطيران',
      description: 'رحلة عبر تاريخ تطور أزياء مضيفي الطيران من البدايات حتى اليوم',
      href: '/blog/flight-crew/history-of-flight-attendant-uniform-design',
      image: '/images/aviation_uniforms/flight_attendant_history.jpg',
      category: 'التاريخ',
      readTime: '12 دقائق'
    },
    {
      title: 'معايير الجودة والسلامة في تصميم أزياء الطيارين ومضيفي الطيران',
      description: 'المعايير الدولية والمحلية للسلامة والجودة في أزياء طاقم الطيران',
      href: '/blog/flight-crew/quality-safety-standards-in-pilot-flight-attendant-uniform-design',
      image: '/images/aviation_uniforms/safety_standards_uniforms.jpg',
      category: 'السلامة',
      readTime: '15 دقائق'
    },
    {
      title: 'تصميم أزياء الطيران الخاص والفاخر',
      description: 'أزياء مخصصة لطاقم الطيران الخاص والطائرات التجارية الفاخرة',
      href: '/blog/flight-crew/private-aviation-uniform-design-luxury',
      image: '/images/aviation_uniforms/luxury_aviation_uniforms.jpg',
      category: 'الطيران الخاص',
      readTime: '9 دقائق'
    },
    {
      title: 'كيفية اختيار الأقمشة المناسبة لأزياء الطيران في المناخ السعودي',
      description: 'دليل شامل لاختيار أفضل الأقمشة المناسبة للمناخ الحار في المملكة',
      href: '/blog/flight-crew/how-to-choose-suitable-fabrics-for-aviation-uniforms-in-saudi-climate',
      image: '/images/aviation_uniforms/fabric_selection_guide.jpg',
      category: 'الأقمشة',
      readTime: '11 دقائق'
    },
    {
      title: 'أزياء خدمات الأرض: الوظائف والعلامة التجارية',
      description: 'تصميم أزياء فعالة لفرق خدمات الأرض في المطارات',
      href: '/blog/flight-crew/ground-service-uniforms-functionality-branding',
      image: '/images/aviation_uniforms/ground_services_uniforms.jpg',
      category: 'خدمات الأرض',
      readTime: '7 دقائق'
    },
    {
      title: 'تأثير الأزياء على معنويات وأداء طاقم الطيران',
      description: 'كيف تؤثر جودة وتصميم الأزياء على أداء ورضا طاقم الطيران',
      href: '/blog/flight-crew/aviation-uniforms-impact-crew-morale-performance',
      image: '/images/aviation_uniforms/crew_performance_uniforms.jpg',
      category: 'الأداء',
      readTime: '13 دقائق'
    },
    {
      title: 'ابتكارات تقنية الأقمشة في صناعة الطيران',
      description: 'أحدث التقنيات والابتكارات في أقمشة أزياء الطيران',
      href: '/blog/flight-crew/aviation-fabric-technology-innovations',
      image: '/images/aviation_uniforms/fabric_technology_innovation.jpg',
      category: 'التقنية',
      readTime: '14 دقائق'
    }
  ];

  const categories = [
    { name: 'جميع المقالات', count: articles.length },
    { name: 'التصميم', count: articles.filter(a => a.category === 'التصميم').length },
    { name: 'السلامة', count: articles.filter(a => a.category === 'السلامة').length },
    { name: 'الأقمشة', count: articles.filter(a => a.category === 'الأقمشة').length },
    { name: 'التاريخ', count: articles.filter(a => a.category === 'التاريخ').length },
    { name: 'الأداء', count: articles.filter(a => a.category === 'الأداء').length },
    { name: 'التقنية', count: articles.filter(a => a.category === 'التقنية').length },
    { name: 'صورة الشركة', count: articles.filter(a => a.category === 'صورة الشركة').length },
    { name: 'الطيران الخاص', count: articles.filter(a => a.category === 'الطيران الخاص').length },
    { name: 'خدمات الأرض', count: articles.filter(a => a.category === 'خدمات الأرض').length }
  ];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'جميع المقالات' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'المدونة', href: '/blog' },
          { label: 'طاقم الطيران', href: '/blog/flight-crew', isCurrent: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white rounded-2xl overflow-hidden mb-12 mt-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            دليل شامل لأزياء طاقم الطيران
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            اكتشف كل ما تحتاج معرفته عن أزياء طاقم الطيران - من معايير السلامة إلى أحدث اتجاهات التصميم
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              ✈️ أزياء الطيارين
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              👩‍✈️ أزياء مضيفي الطيران
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              🛡️ معايير السلامة
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              🎨 التصميم الحديث
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-primary">
          <div className="text-3xl font-bold text-primary mb-2">25+</div>
          <div className="text-gray-600">سنة من الخبرة</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-accent">
          <div className="text-3xl font-bold text-accent mb-2">500+</div>
          <div className="text-gray-600">شركة طيران</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-secondary">
          <div className="text-3xl font-bold text-secondary mb-2">50,000+</div>
          <div className="text-gray-600">قطعة زي منتجة</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-primary">
          <div className="text-3xl font-bold text-primary mb-2">99%</div>
          <div className="text-gray-600">رضا العملاء</div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
            <h3 className="text-xl font-bold mb-6 text-gray-800">التصنيفات</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <button 
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-right p-3 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-primary text-white' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category.name
                          ? 'bg-white/20' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold mb-4 text-gray-800">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/aviation-uniforms" className="text-primary hover:underline">
                    أزياء قطاع الطيران
                  </Link>
                </li>
                <li>
                  <Link href="/corporate-uniforms" className="text-primary hover:underline">
                    الأزياء المؤسسية
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary hover:underline">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          {/* Featured Article */}
          {selectedCategory === 'جميع المقالات' && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">المقال المميز</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/images/aviation_uniforms/professional_crew_uniforms.jpg"
                    alt="أزياء طاقم الطيران المهنية"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    مميز
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">صورة الشركة</span>
                    <span>8 دقائق للقراءة</span>
                    <span>{new Date().toLocaleDateString('ar-SA')}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    أهمية الأزياء المهنية لطاقم الطيران في صورة الشركة
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    تلعب أزياء طاقم الطيران دوراً محورياً في تشكيل الانطباع الأول للمسافرين وبناء ثقتهم في شركة الطيران. 
                    اكتشف كيف يمكن للتصميم المدروس والجودة العالية أن تعزز من صورة علامتك التجارية.
                  </p>
                  <Link 
                    href="/blog/flight-crew/importance-of-professional-aviation-crew-uniforms-company-image"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    اقرأ المزيد
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Articles Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {selectedCategory === 'جميع المقالات' ? 'جميع المقالات' : `مقالات ${selectedCategory}`}
              <span className="text-sm font-normal text-gray-500 mr-2">({filteredArticles.length} مقال)</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    <Link 
                      href={article.href}
                      className="inline-flex items-center text-primary font-medium hover:underline text-sm"
                    >
                      اقرأ المقال
                      <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results Message */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد مقالات في هذا التصنيف</h3>
                <p className="text-gray-500">جرب تصنيفاً آخر أو تصفح جميع المقالات</p>
                <button 
                  onClick={() => setSelectedCategory('جميع المقالات')}
                  className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  عرض جميع المقالات
                </button>
              </div>
            )}
          </section>

          {/* Call to Action */}
          <section className="mt-12 bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج استشارة مخصصة؟</h3>
            <p className="text-lg mb-6 opacity-90">
              فريقنا من الخبراء جاهز لمساعدتك في اختيار وتصميم أفضل الأزياء لطاقم الطيران
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                اتصل بنا الآن
              </Link>
              <Link 
                href="/aviation-uniforms"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
              >
                تصفح منتجاتنا
              </Link>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
} 