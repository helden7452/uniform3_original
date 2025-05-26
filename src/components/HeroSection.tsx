'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale } from '@/utils/i18n';

interface HeroSectionProps {
  locale: Locale;
  dictionary: any;
}

const HeroSection = ({ locale, dictionary }: HeroSectionProps) => {
  const isRTL = locale === 'ar-SA';
  
  const getSlideData = () => [
    {
      id: 1,
      title: dictionary?.home?.hero?.title || 'Uniform Experts in Saudi Arabia',
      subtitle: dictionary?.home?.hero?.subtitle || 'Comprehensive uniform solutions combining quality, comfort, and excellence',
      description: dictionary?.home?.hero?.description || 'We provide modern designs suitable for various sectors with a focus on quality and comfort',
      buttonText: dictionary?.home?.hero?.cta || dictionary?.common?.buttons?.contactUs || 'Contact Us',
      buttonLink: locale === 'ar-SA' ? '/contact' : `/${locale}/contact`,
      secondaryButtonText: dictionary?.home?.hero?.secondaryCta || dictionary?.common?.buttons?.ourServices || 'Our Services',
      secondaryButtonLink: '#categories',
      image: '/images/hero-bg.jpg',
      overlayColor: 'rgba(0, 0, 0, 0.5)',
      position: 'center',
    },
    {
      id: 2,
      title: dictionary?.home?.hero?.slides?.healthcare?.title || dictionary?.categories?.healthcare || 'Healthcare Uniforms',
      subtitle: dictionary?.home?.hero?.slides?.healthcare?.subtitle || 'Design and manufacture high-quality medical uniforms',
      description: dictionary?.home?.hero?.slides?.healthcare?.description || 'Comfortable and durable medical uniforms suitable for various specialties in the healthcare sector',
      buttonText: dictionary?.common?.buttons?.explore || 'Explore',
      buttonLink: locale === 'ar-SA' ? '/healthcare-uniforms' : `/${locale}/healthcare-uniforms`,
      secondaryButtonText: dictionary?.common?.buttons?.requestQuote || 'Request Quote',
      secondaryButtonLink: locale === 'ar-SA' ? '/contact?sector=healthcare' : `/${locale}/contact?sector=healthcare`,
      image: '/images/healthcare_uniforms.jpg',
      overlayColor: 'rgba(0, 0, 0, 0.4)',
      position: 'center',
    },
    {
      id: 3,
      title: dictionary?.home?.hero?.slides?.hospitality?.title || dictionary?.categories?.hospitality || 'Hospitality Uniforms',
      subtitle: dictionary?.home?.hero?.slides?.hospitality?.subtitle || 'Elegant and practical uniforms for hotels, restaurants, and resorts',
      description: dictionary?.home?.hero?.slides?.hospitality?.description || 'We design uniforms that reflect your establishment\'s identity and enhance the professional image of staff',
      buttonText: dictionary?.common?.buttons?.explore || 'Explore',
      buttonLink: locale === 'ar-SA' ? '/hospitality-uniforms' : `/${locale}/hospitality-uniforms`,
      secondaryButtonText: dictionary?.common?.buttons?.ourProjects || 'Our Projects',
      secondaryButtonLink: locale === 'ar-SA' ? '/projects?category=hospitality' : `/${locale}/projects?category=hospitality`,
      image: '/images/hospitality_uniforms.jpg',
      overlayColor: 'rgba(0, 0, 0, 0.45)',
      position: 'center',
    },
  ];

  const slideData = getSlideData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  const resetAutoplayTimer = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    
    if (isAutoplay) {
      autoplayRef.current = setTimeout(() => {
        goToNextSlide();
      }, 7000); // 7 seconds per slide
    }
    
    // Reset progress bar animation
    if (progressBarRef.current) {
      progressBarRef.current.style.width = '0%';
      void progressBarRef.current.offsetWidth; // Force reflow
      progressBarRef.current.style.transition = 'width 7s linear';
      progressBarRef.current.style.width = '100%';
    }
  }, [isAutoplay]);
  
  useEffect(() => {
    resetAutoplayTimer();
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [currentSlide, isAutoplay, resetAutoplayTimer]);
  
  const goToSlide = useCallback((index: number) => {
    if (!animating && index !== currentSlide) {
      setAnimating(true);
      setCurrentSlide(index);
      
      setTimeout(() => {
        setAnimating(false);
      }, 1000);
      
      resetAutoplayTimer();
    }
  }, [animating, currentSlide, resetAutoplayTimer]);
  
  const goToNextSlide = useCallback(() => {
    const nextSlide = (currentSlide + 1) % slideData.length;
    goToSlide(nextSlide);
  }, [currentSlide, goToSlide]);
  
  const goToPrevSlide = useCallback(() => {
    const prevSlide = (currentSlide - 1 + slideData.length) % slideData.length;
    goToSlide(prevSlide);
  }, [currentSlide, goToSlide]);
  
  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      goToNextSlide();
    }
    
    if (touchStart - touchEnd < -100) {
      // Swipe right
      goToPrevSlide();
    }
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToNextSlide(); // RTL layout
      } else if (e.key === 'ArrowRight') {
        goToPrevSlide(); // RTL layout
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);
  
  // Handle autoplay toggle
  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  return (
    <div 
      className="relative h-[700px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main background images with advanced transitions */}
      <AnimatePresence initial={false}>
        {slideData.map((slide, index) => (
          currentSlide === index && (
            <motion.div 
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image 
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
                quality={90}
              />
              <div 
                className="absolute inset-0" 
                style={{ backgroundColor: slide.overlayColor }}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/60 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/60 to-transparent z-10" />
      
      {/* Diagonal overlay */}
      <div className="absolute inset-0 z-10 opacity-40">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
        </svg>
      </div>
      
      {/* Content with animated transitions */}
      <div className="relative z-20 h-full flex flex-col justify-center text-white container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block bg-accent/90 text-white px-4 py-1 rounded-md mb-4 backdrop-blur-sm"
            >
              {slideData[currentSlide].subtitle}
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-lg"
            >
              {slideData[currentSlide].title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl"
            >
              {slideData[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href={slideData[currentSlide].buttonLink} 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center"
              >
                {slideData[currentSlide].buttonText}
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link 
                href={slideData[currentSlide].secondaryButtonLink} 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 inline-flex items-center"
              >
                {slideData[currentSlide].secondaryButtonText}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation arrows */}
        <div className="absolute top-1/2 left-0 right-0 z-30 transform -translate-y-1/2 container mx-auto px-4">
          <div className="flex justify-between">
            <button 
              onClick={goToPrevSlide}
              className="bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
              aria-label={isRTL ? "السابق" : "Previous"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNextSlide}
              className="bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
              aria-label={isRTL ? "التالي" : "Next"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Slider indicators and controls */}
        <div className="absolute bottom-10 left-0 right-0 z-30 container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {slideData.map((_, index) => (
                <button 
                  key={index} 
                  className={`relative h-3 transition-all duration-500 rounded-full overflow-hidden ${
                    currentSlide === index ? 'w-12 bg-accent' : 'w-3 bg-white/60 hover:bg-white'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={isRTL ? `الانتقال إلى الشريحة ${index + 1}` : `Go to slide ${index + 1}`}
                >
                  {currentSlide === index && (
                    <div 
                      ref={progressBarRef}
                      className="absolute top-0 left-0 h-full bg-white/30 w-0"
                    />
                  )}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <button 
                onClick={toggleAutoplay}
                className="bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                aria-label={isAutoplay 
                  ? (isRTL ? "إيقاف التشغيل التلقائي" : "Pause autoplay") 
                  : (isRTL ? "تشغيل تلقائي" : "Start autoplay")
                }
              >
                {isAutoplay ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              
              <div className="text-white/80 text-sm">
                <span className="font-bold">{currentSlide + 1}</span>
                <span className="mx-1">/</span>
                <span>{slideData.length}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated scroll hint */}
        <motion.div 
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
