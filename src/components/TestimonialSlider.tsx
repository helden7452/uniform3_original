'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'محمد العبد الله',
    role: 'مدير الموارد البشرية',
    company: 'مستشفى الرعاية الحديثة',
    content: 'نتعامل مع خبراء الزي الموحد منذ أكثر من خمس سنوات، وما زلنا نشيد بجودة منتجاتهم وخدماتهم الممتازة. الزي الطبي الذي يقدمونه يدوم طويلاً ويحافظ على مظهره الأنيق رغم الاستخدام المكثف والغسيل المتكرر.',
    image: '/images/testimonials/client1.jpg',
  },
  {
    id: 2,
    name: 'فاطمة السليم',
    role: 'مديرة العمليات',
    company: 'فندق الأصالة الفاخر',
    content: 'كان التعامل مع خبراء الزي الموحد تجربة استثنائية. تميزوا بالمهنية العالية والالتزام بالمواعيد والجودة الممتازة. صنعوا لنا زي موحد يعكس هوية فندقنا ويتميز بالأناقة والراحة، مما أثار إعجاب الضيوف والموظفين.',
    image: '/images/testimonials/client2.jpg',
  },
  {
    id: 3,
    name: 'خالد العمري',
    role: 'المدير التنفيذي',
    company: 'شركة الأمان للحراسات الأمنية',
    content: 'وجدنا في خبراء الزي الموحد شريكاً موثوقاً لتزويد فرق الأمن لدينا بالزي العملي المناسب. يتميز الزي بالمتانة والراحة، كما أن الشركة توفر خدمة ما بعد البيع ممتازة والتزام تام بالجودة.',
    image: '/images/testimonials/client3.jpg',
  },
];

const TestimonialSlider = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    rtl: true,
    arrows: windowWidth >= 768,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <div className="text-sm text-gray-600">
                    <span>{testimonial.role}</span>
                    <span className="mx-1">-</span>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
              <div className="mt-4 text-primary">
                <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider; 