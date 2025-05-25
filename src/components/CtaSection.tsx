import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)" />
          </svg>
          <defs>
            <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="2" fill="currentColor" />
            </pattern>
          </defs>
        </div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            هل أنت جاهز لتحسين مظهر فريقك؟
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="100">
            نحن هنا لتقديم حلول متكاملة للزي الموحد تلبي احتياجاتك وتعكس هوية مؤسستك. تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Link 
              href="/contact" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              تواصل معنا
            </Link>
            <Link 
              href="/about" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300"
            >
              تعرف علينا
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div 
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">جودة عالية</h3>
            <p className="opacity-90">نستخدم أفضل الخامات ونطبق أعلى معايير الجودة في التصنيع لضمان متانة وأناقة دائمة للزي الموحد.</p>
          </div>
          
          <div 
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">تصميم احترافي</h3>
            <p className="opacity-90">نقدم تصاميم عصرية وعملية تجمع بين الأناقة والراحة وتعكس هوية مؤسستك بشكل احترافي.</p>
          </div>
          
          <div 
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">مواعيد التسليم</h3>
            <p className="opacity-90">نلتزم بمواعيد التسليم المتفق عليها مع عملائنا لضمان توفير الزي في الوقت المناسب تماماً.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 