import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import BlogPreview from '@/components/BlogPreview';
import CtaSection from '@/components/CtaSection';
import Image from 'next/image';
import Link from 'next/link';

import { Locale, getDictionary } from '@/utils/i18n';

interface LocalePageProps {
  params: { locale: Locale };
}

export default async function HomePage({ params }: LocalePageProps) {
  // Define uniform categories
  const categories = [
    {
      id: 'healthcare-uniforms',
      title: 'زي القطاع الصحي',
      description: 'أزياء موحدة للمستشفيات والمراكز الطبية مصممة للراحة والأداء العملي مع مراعاة متطلبات البيئة الطبية',
      image: '/images/healthcare_uniforms/medical-uniform-fabric-selection-criteria-content-3.jpg',
    },
    {
      id: 'security-uniforms',
      title: 'زي الأمن والحراسة',
      description: 'يونيفورم متين وعملي لقطاع الأمن، مصمم للتحمل في مختلف الظروف مع مراعاة المناخ السعودي',
      image: '/images/security_uniforms/security_guards.jpg',
    },
    {
      id: 'hospitality-uniforms',
      title: 'زي الضيافة والفنادق',
      description: 'تصاميم أنيقة وعملية للعاملين في قطاع الضيافة والفنادق، تعكس أعلى معايير الخدمة والاحترافية',
      image: '/images/hospitality_uniforms/luxury_hotel_staff.jpg',
    },
    {
      id: 'corporate-uniforms',
      title: 'الزي الرسمي للشركات',
      description: 'زي موحد للشركات والمؤسسات يعكس هوية العلامة التجارية ويعزز الانتماء المؤسسي بتصاميم عصرية',
      image: '/images/corporate_uniforms/corporate_staff.jpg',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection locale={params.locale} dictionary={await getDictionary(params.locale)} />

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto text-center mb-6 pb-2 inline-block" data-aos="fade-up">قطاعاتنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              نقدم حلولاً متخصصة للزي الموحد لمختلف القطاعات في المملكة العربية السعودية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/${category.id}`}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover-lift">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto text-center mb-6 pb-2 inline-block" data-aos="fade-up">لماذا تختارنا؟</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              نتميز بتقديم خدمات عالية الجودة مع التركيز على تلبية احتياجات عملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
              <p className="text-gray-600">
                نستخدم أفضل المواد وأحدث التقنيات في تصنيع الزي الموحد
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">تسليم سريع</h3>
              <p className="text-gray-600">
                نلتزم بمواعيد التسليم المتفق عليها مع ضمان الجودة
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">أسعار تنافسية</h3>
              <p className="text-gray-600">
                نقدم أسعاراً منافسة مع الحفاظ على أعلى معايير الجودة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto text-center mb-6 pb-2 inline-block" data-aos="fade-up">آراء عملائنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              نفخر بثقة عملائنا وشهاداتهم حول جودة منتجاتنا وخدماتنا
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
} 