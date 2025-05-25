'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slideData = [
  {
    id: 1,
    title: 'خبراء الزي الموحد في المملكة العربية السعودية',
    subtitle: 'حلول متكاملة للزي الموحد تجمع بين الجودة والراحة والتميز',
    buttonText: 'تواصل معنا',
    buttonLink: '/contact',
    image: '/images/hero-bg.jpg',
  },
  {
    id: 2,
    title: 'زي القطاع الصحي',
    subtitle: 'تصميم وتصنيع زي طبي عالي الجودة لمختلف التخصصات في القطاع الصحي',
    buttonText: 'استكشف',
    buttonLink: '/healthcare-uniforms',
    image: '/images/healthcare_uniforms.jpg',
  },
  {
    id: 3,
    title: 'زي قطاع الضيافة والفنادق',
    subtitle: 'زي أنيق وعملي للفنادق والمطاعم والمنتجعات',
    buttonText: 'استكشف',
    buttonLink: '/hospitality-uniforms',
    image: '/images/hospitality_uniforms.jpg',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  const goToSlide = (index: number) => {
    if (!animating && index !== currentSlide) {
      setAnimating(true);
      setCurrentSlide(index);
      
      setTimeout(() => {
        setAnimating(false);
      }, 800);
    }
  };
  
  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slideData.length;
    goToSlide(nextSlide);
  };

  return (
    <div className="relative h-[700px] overflow-hidden">
      {/* Main background image */}
      {slideData.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image 
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center text-white container mx-auto px-4">
        <div className="max-w-3xl">
          {slideData.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`transition-all duration-800 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'}`}
            >
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {slide.title}
              </h1>
              <p 
                className="text-xl md:text-2xl mb-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {slide.subtitle}
              </p>
              <div 
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Link 
                  href={slide.buttonLink} 
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slideData.map((_, index) => (
            <button 
              key={index} 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-accent w-10' : 'bg-white/60 hover:bg-white'}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Animated scroll hint */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-10" />
    </div>
  );
};

export default HeroSection; 