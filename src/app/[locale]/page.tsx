import { Locale, getDictionary } from '@/utils/i18n';
import HeroSection from '@/components/HeroSection';

interface LocalePageProps {
  params: { locale: Locale };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const dictionary = await getDictionary(params.locale);
  
  return (
    <div>
      <HeroSection locale={params.locale} dictionary={dictionary} />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dictionary.home?.categories?.title || 'Our Sectors'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {dictionary.home?.categories?.subtitle || 'We provide specialized uniform solutions for various sectors in Saudi Arabia'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Healthcare */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <div className="text-6xl">🏥</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {dictionary.categories?.healthcare || 'Healthcare Uniforms'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {dictionary.home?.categories?.healthcare?.description || 'Uniforms for hospitals and medical centers designed for comfort and practical performance'}
                </p>
                <a 
                  href={params.locale === 'ar-SA' ? '/healthcare-uniforms' : `/${params.locale}/healthcare-uniforms`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  {dictionary.common?.buttons?.learnMore || 'Learn More'} →
                </a>
              </div>
            </div>
            
            {/* Security */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-6xl">🛡️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {dictionary.categories?.security || 'Security Uniforms'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {dictionary.home?.categories?.security?.description || 'Durable and practical uniforms for the security sector'}
                </p>
                <a 
                  href={params.locale === 'ar-SA' ? '/security-uniforms' : `/${params.locale}/security-uniforms`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  {dictionary.common?.buttons?.learnMore || 'Learn More'} →
                </a>
              </div>
            </div>
            
            {/* Hospitality */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-yellow-100 flex items-center justify-center">
                <div className="text-6xl">🏨</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {dictionary.categories?.hospitality || 'Hospitality Uniforms'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {dictionary.home?.categories?.hospitality?.description || 'Elegant and practical designs for hospitality and hotel staff'}
                </p>
                <a 
                  href={params.locale === 'ar-SA' ? '/hospitality-uniforms' : `/${params.locale}/hospitality-uniforms`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  {dictionary.common?.buttons?.learnMore || 'Learn More'} →
                </a>
              </div>
            </div>
            
            {/* Corporate */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <div className="text-6xl">🏢</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {dictionary.categories?.corporate || 'Corporate Uniforms'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {dictionary.home?.categories?.corporate?.description || 'Corporate uniforms that reflect brand identity and enhance institutional belonging'}
                </p>
                <a 
                  href={params.locale === 'ar-SA' ? '/corporate-uniforms' : `/${params.locale}/corporate-uniforms`}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  {dictionary.common?.buttons?.learnMore || 'Learn More'} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {dictionary.home?.whyChooseUs?.title || 'Why Choose Us?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {dictionary.home?.whyChooseUs?.subtitle || 'We excel in providing high-quality services with a focus on meeting our clients\' needs'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⭐</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {dictionary.home?.whyChooseUs?.quality?.title || 'High Quality'}
              </h3>
              <p className="text-gray-600">
                {dictionary.home?.whyChooseUs?.quality?.description || 'We use the best materials and latest technologies in uniform manufacturing'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🚚</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {dictionary.home?.whyChooseUs?.delivery?.title || 'Fast Delivery'}
              </h3>
              <p className="text-gray-600">
                {dictionary.home?.whyChooseUs?.delivery?.description || 'We commit to agreed delivery dates while ensuring quality'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {dictionary.home?.whyChooseUs?.pricing?.title || 'Competitive Prices'}
              </h3>
              <p className="text-gray-600">
                {dictionary.home?.whyChooseUs?.pricing?.description || 'We offer competitive prices while maintaining the highest quality standards'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {dictionary.home?.cta?.title || 'Ready to Get Started?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {dictionary.home?.cta?.subtitle || 'Contact us today for a free consultation and custom quote'}
          </p>
          <a 
            href={params.locale === 'ar-SA' ? '/contact' : `/${params.locale}/contact`}
            className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            {dictionary.home?.cta?.button || dictionary.common?.buttons?.getQuote || 'Get Free Quote'}
          </a>
        </div>
      </section>
    </div>
  );
}
