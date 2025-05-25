'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'محمد العبد الله',
    role: 'مدير الموارد البشرية',
    company: 'مستشفى الرعاية الحديثة',
    content: 'نتعامل مع خبراء الزي الموحد منذ أكثر من خمس سنوات، وما زلنا نشيد بجودة منتجاتهم وخدماتهم الممتازة. الزي الطبي الذي يقدمونه يدوم طويلاً ويحافظ على مظهره الأنيق رغم الاستخدام المكثف والغسيل المتكرر.',
    image: '/images/testimonials/client1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'فاطمة السليم',
    role: 'مديرة العمليات',
    company: 'فندق الأصالة الفاخر',
    content: 'كان التعامل مع خبراء الزي الموحد تجربة استثنائية. تميزوا بالمهنية العالية والالتزام بالمواعيد والجودة الممتازة. صنعوا لنا زي موحد يعكس هوية فندقنا ويتميز بالأناقة والراحة، مما أثار إعجاب الضيوف والموظفين.',
    image: '/images/testimonials/client2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'خالد العمري',
    role: 'المدير التنفيذي',
    company: 'شركة الأمان للحراسات الأمنية',
    content: 'وجدنا في خبراء الزي الموحد شريكاً موثوقاً لتزويد فرق الأمن لدينا بالزي العملي المناسب. يتميز الزي بالمتانة والراحة، كما أن الشركة توفر خدمة ما بعد البيع ممتازة والتزام تام بالجودة.',
    image: '/images/testimonials/client3.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'نورة الأحمد',
    role: 'مديرة الخدمات الفندقية',
    company: 'منتجع الواحة السياحي',
    content: 'تعاملنا مع خبراء الزي الموحد كان مثمراً للغاية. قدموا لنا استشارات متميزة في اختيار الأقمشة والتصاميم المناسبة لمناخنا الحار. كما أن الزي الموحد لطاقم الخدمة لدينا نال استحسان النزلاء وساهم في تعزيز صورة المنتجع.',
    image: '/images/testimonials/client4.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'سلطان الحربي',
    role: 'مدير المشتريات',
    company: 'مجموعة مدارس التميز',
    content: 'نقدر عالياً الجودة والدقة في التنفيذ التي يقدمها خبراء الزي الموحد. تمكنوا من توفير زي مدرسي مريح وعملي لأكثر من 5000 طالب وطالبة، مع الالتزام بمواعيد التسليم رغم ضيق الوقت. شراكة ناجحة نعتز بها.',
    image: '/images/testimonials/client5.jpg',
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Handle autoplay
  useEffect(() => {
    if (!autoplay || !inView) return;
    
    autoplayRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [currentIndex, autoplay, inView]);

  const handlePrev = () => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 inline-block ${i < rating ? 'text-amber-500' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <div ref={ref} className="relative max-w-6xl mx-auto px-4 py-12">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-accent w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`انتقل إلى الشهادة ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAutoplay}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label={autoplay ? 'إيقاف التشغيل التلقائي' : 'تشغيل تلقائي'}
            >
              {autoplay ? (
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="السابق"
              >
                <svg className="w-5 h-5 text-gray-600 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="التالي"
              >
                <svg className="w-5 h-5 text-gray-600 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[350px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col md:flex-row gap-8 overflow-hidden">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                    <Image 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-gray-800">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                    <p className="text-accent font-medium text-sm">{testimonials[currentIndex].company}</p>
                    <div className="mt-3">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 flex flex-col justify-center relative">
                  <svg className="absolute top-0 right-0 w-16 h-16 text-gray-100 -mt-6 -mr-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-gray-700 text-lg leading-relaxed">{testimonials[currentIndex].content}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
          <span className="text-sm font-medium text-gray-500">
            {currentIndex + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider; 