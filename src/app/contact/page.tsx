import { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'اتصل بنا | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'تواصل مع خبراء الزي الموحد للاستفسارات والطلبات - نحن هنا لمساعدتك في الحصول على أفضل زي موحد يناسب مؤسستك',
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'اتصل بنا', href: '/contact', isCurrent: true }
        ]} 
      />
      
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">اتصل بنا</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">نحن هنا لمساعدتك</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                سواء كنت تبحث عن معلومات حول منتجاتنا، أو تريد الحصول على عرض سعر، أو لديك استفسارات أخرى، فريقنا جاهز للإجابة على جميع أسئلتك.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-accent mb-4">معلومات الاتصال</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-reverse space-x-4 rtl:space-x-reverse">
                    <div className="bg-primary text-white p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h4>
                      <p className="text-gray-700">info@uniformexperts.sa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4 rtl:space-x-reverse">
                    <div className="bg-primary text-white p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">الهاتف</h4>
                      <p className="text-gray-700">+966-12-345-6789</p>
                      <p className="text-gray-700">+966-12-345-6780</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-4 rtl:space-x-reverse">
                    <div className="bg-primary text-white p-2 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">العنوان</h4>
                      <p className="text-gray-700">شارع الملك فهد، حي الورود</p>
                      <p className="text-gray-700">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-accent mb-4">ساعات العمل</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>الأحد - الخميس:</span>
                    <span>9:00 ص - 5:00 م</span>
                  </li>
                  <li className="flex justify-between">
                    <span>الجمعة:</span>
                    <span>مغلق</span>
                  </li>
                  <li className="flex justify-between">
                    <span>السبت:</span>
                    <span>10:00 ص - 2:00 م</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">أرسل رسالة</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">الاسم</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" 
                      placeholder="أدخل اسمك" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" 
                      placeholder="أدخل بريدك الإلكتروني" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" 
                    placeholder="أدخل رقم هاتفك" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">الموضوع</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" 
                    placeholder="موضوع الرسالة" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">الرسالة</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition" 
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">موقعنا</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2219494308824!2d46.67389741543992!3d24.713148558358855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xa7f6a04c23221ad5!2sKing%20Fahd%20Rd%2C%20Al%20Olaya%2C%20Riyadh%2012212%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1621344386672!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقعنا في الرياض"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">الأسئلة الشائعة</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-accent mb-3">كيف يمكنني طلب عرض سعر؟</h3>
              <p className="text-gray-700">يمكنك طلب عرض سعر من خلال ملء نموذج الاتصال أعلاه، أو عن طريق الاتصال بنا مباشرة على الرقم الموضح.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-accent mb-3">ما هي مدة التوصيل المتوقعة؟</h3>
              <p className="text-gray-700">تختلف مدة التوصيل حسب حجم الطلب ونوع الزي، ولكن بشكل عام نسعى لتسليم جميع الطلبات خلال 2-4 أسابيع من تاريخ الموافقة على العينة.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-accent mb-3">هل تقدمون خدمات التصميم المخصص؟</h3>
              <p className="text-gray-700">نعم، لدينا فريق متخصص في التصميم يمكنه تصميم زي موحد يناسب هوية شركتك ومتطلباتك الخاصة.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">هل تقدمون خدمات لجميع مناطق المملكة؟</h3>
              <p className="text-gray-700">نعم، نقدم خدماتنا في جميع مناطق المملكة العربية السعودية، ولدينا خدمة توصيل إلى جميع المدن.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 