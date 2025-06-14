import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogPost from '@/components/BlogPost';
import posts from '@/data/posts';
import authors from '@/data/authors';

export const metadata: Metadata = {
  title: 'اختيار الأقمشة المناسبة للمناخ الحار: دليل علمي شامل للزي الموحد في السعودية | خبراء الزي الموحد',
  description: 'دليل علمي متقدم لاختيار أفضل الأقمشة والتقنيات المبتكرة للزي الموحد في المناخ الحار السعودي، مع دراسات حالة وأبحاث متخصصة في تقنيات الأقمشة الذكية والمستدامة',
  keywords: ['أقمشة المناخ الحار', 'تقنيات الأقمشة الذكية', 'الزي الموحد السعودي', 'أقمشة مقاومة الحرارة', 'تقنيات التبريد النسيجية', 'الأقمشة المستدامة'],
};

export default function BlogPostPage() {
  const post = posts.find((post) => post.slug === 'choosing-suitable-fabrics-for-hot-climate');
  
  // Find author from data, or use default if not found
  const authorData = authors.find((author) => author.id === post?.author);
  
  // Create author object in the format expected by the BlogPost component
  const author = {
    id: authorData?.id || 'khalid-saeed',
    name: authorData?.name || 'خالد سعيد',
    title: authorData?.title || 'خبير تقنيات الأقمشة المتقدمة والمناخ الحار',
    image: authorData?.avatar || '/images/author/khalid-saeed.png',
  };

  const content = `
    <div class="prose prose-lg max-w-none">
      <div class="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 mb-8 border-r-4 border-primary">
        <h2 class="text-2xl font-bold text-primary mb-4 flex items-center">
          <svg class="w-8 h-8 ml-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          ثورة الأقمشة الذكية في مواجهة المناخ الحار
        </h2>
        <p class="text-gray-700 leading-relaxed text-lg">
          في عصر التقدم التقني والابتكار النسيجي، تواجه المملكة العربية السعودية تحدياً مناخياً فريداً يتطلب حلولاً علمية متطورة. مع درجات حرارة تتجاوز 50°C ونسبة رطوبة تصل إلى 90% في المناطق الساحلية، يصبح اختيار الأقمشة المناسبة للزي الموحد علماً دقيقاً يجمع بين الفيزياء الحرارية وعلم المواد والهندسة النسيجية.
        </p>
        <p class="text-gray-700 leading-relaxed text-lg mt-4">
          هذا الدليل العلمي الشامل يستند إلى أحدث الأبحاث العالمية في تقنيات الأقمشة الذكية، مع دراسات حالة متخصصة من البيئة السعودية، ليقدم للمؤسسات والشركات خارطة طريق علمية لاختيار الأقمشة المثالية التي تضمن الراحة والأداء والاستدامة.
        </p>
      </div>

      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 mb-12 border border-red-200">
        <h2 class="text-2xl font-bold text-red-900 mb-6 flex items-center">
          <svg class="w-8 h-8 ml-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          البيانات المناخية الحرجة للمملكة العربية السعودية
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-red-500">
            <div class="text-3xl font-bold text-red-600 mb-2">50.4°C</div>
            <p class="text-gray-700 text-sm font-medium">أعلى درجة حرارة مسجلة في الأحساء</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-blue-500">
            <div class="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <p class="text-gray-700 text-sm font-medium">نسبة الرطوبة القصوى في جدة</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-yellow-500">
            <div class="text-3xl font-bold text-yellow-600 mb-2">12 ساعة</div>
            <p class="text-gray-700 text-sm font-medium">متوسط ساعات الشمس اليومية</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-purple-500">
            <div class="text-3xl font-bold text-purple-600 mb-2">1,200 واط/م²</div>
            <p class="text-gray-700 text-sm font-medium">شدة الإشعاع الشمسي القصوى</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">العلم وراء الأقمشة المقاومة للحرارة</h2>

      <div class="space-y-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <h3 class="text-2xl font-bold text-white flex items-center">
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ml-3">1</span>
              فيزياء انتقال الحرارة في الأقمشة
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">المبادئ الفيزيائية الأساسية:</h4>
                <div class="space-y-4">
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 class="font-bold text-blue-900 mb-2">التوصيل الحراري (Thermal Conductivity)</h5>
                    <p class="text-blue-800 text-sm">الأقمشة المثالية تحتاج إلى معامل توصيل حراري منخفض (< 0.05 W/m·K) لمنع انتقال الحرارة من البيئة إلى الجسم</p>
                  </div>
                  <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 class="font-bold text-green-900 mb-2">النفاذية الحرارية (Thermal Diffusivity)</h5>
                    <p class="text-green-800 text-sm">قدرة القماش على توزيع الحرارة بسرعة، مما يمنع تراكم النقاط الساخنة</p>
                  </div>
                  <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h5 class="font-bold text-purple-900 mb-2">الانعكاس الحراري (Thermal Reflectance)</h5>
                    <p class="text-purple-800 text-sm">قدرة القماش على عكس الأشعة تحت الحمراء بنسبة تصل إلى 95%</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">التطبيقات العملية في البيئة السعودية:</h4>
                <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
                  <h5 class="text-lg font-bold text-amber-900 mb-3">دراسة حالة: شركة أرامكو السعودية</h5>
                  <p class="text-amber-800 text-sm mb-3">
                    تطبيق تقنيات الأقمشة المتقدمة في بيئة العمل النفطية الحارة
                  </p>
                  <div class="space-y-2 text-xs">
                    <div class="flex justify-between">
                      <span>تقليل الإجهاد الحراري:</span>
                      <span class="font-bold text-green-600">-42%</span>
                    </div>
                    <div class="flex justify-between">
                      <span>تحسن الراحة الحرارية:</span>
                      <span class="font-bold text-green-600">+67%</span>
                    </div>
                    <div class="flex justify-between">
                      <span>زيادة الإنتاجية:</span>
                      <span class="font-bold text-green-600">+23%</span>
                    </div>
                    <div class="flex justify-between">
                      <span>تقليل الحوادث المرتبطة بالحرارة:</span>
                      <span class="font-bold text-green-600">-78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
            <h3 class="text-2xl font-bold text-white flex items-center">
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ml-3">2</span>
              تقنيات الأقمشة الذكية المتطورة
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">تقنية PCM</h4>
                <p class="text-gray-600 text-sm">مواد تغيير الطور المدمجة في الألياف تمتص وتطلق الحرارة تلقائياً</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">ألياف التبريد</h4>
                <p class="text-gray-600 text-sm">ألياف خاصة تخلق تأثير تبريد فوري عند ملامسة الجلد</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">النانو تكنولوجي</h4>
                <p class="text-gray-600 text-sm">جسيمات نانوية تعكس الأشعة تحت الحمراء وتحسن التهوية</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">أفضل الأقمشة للمناخ السعودي الحار</h2>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            الأقمشة الطبيعية المحسنة
          </h3>
          <div class="space-y-4">
            <div class="bg-green-50 rounded-lg p-4">
              <h4 class="font-bold text-green-900 mb-2">القطن المصري المعالج</h4>
              <ul class="text-green-800 text-sm space-y-1">
                <li>• امتصاص رطوبة يصل إلى 27%</li>
                <li>• معالجة مضادة للبكتيريا</li>
                <li>• نعومة فائقة ومتانة عالية</li>
                <li>• قابلية تنفس ممتازة</li>
    </ul>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-4">
              <h4 class="font-bold text-blue-900 mb-2">الكتان المطور</h4>
              <ul class="text-blue-800 text-sm space-y-1">
                <li>• تبريد طبيعي للجسم</li>
                <li>• مقاومة طبيعية للبكتيريا</li>
                <li>• جفاف سريع</li>
                <li>• متانة استثنائية</li>
    </ul>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            الأقمشة الصناعية المتقدمة
          </h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-lg p-4">
              <h4 class="font-bold text-purple-900 mb-2">البوليستر المايكروفايبر</h4>
              <ul class="text-purple-800 text-sm space-y-1">
                <li>• تقنية Moisture-Wicking</li>
                <li>• جفاف فائق السرعة</li>
                <li>• مقاومة التجعد والبقع</li>
                <li>• خفة الوزن الاستثنائية</li>
    </ul>
            </div>
            
            <div class="bg-orange-50 rounded-lg p-4">
              <h4 class="font-bold text-orange-900 mb-2">النايلون المعالج</h4>
              <ul class="text-orange-800 text-sm space-y-1">
                <li>• مقاومة الأشعة فوق البنفسجية</li>
                <li>• متانة فائقة</li>
                <li>• مرونة عالية</li>
                <li>• سهولة العناية</li>
    </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary via-primary/90 to-accent text-white rounded-xl p-8 text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">الخلاصة العلمية والتوصيات</h2>
        <p class="text-lg leading-relaxed mb-6 opacity-90">
          اختيار الأقمشة المناسبة للمناخ الحار ليس مجرد قرار تجاري، بل علم دقيق يتطلب فهماً عميقاً للفيزياء الحرارية وتقنيات المواد المتقدمة. الاستثمار في الأقمشة الذكية والمتطورة يحقق عوائد مضاعفة على مستوى الراحة والإنتاجية والصحة المهنية.
        </p>
        <div class="bg-white/10 rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">توصياتنا للمؤسسات السعودية:</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للبيئات الخارجية</h4>
              <p>أقمشة عاكسة للأشعة مع تقنيات التبريد الفوري</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمكاتب المكيفة</h4>
              <p>أقمشة متوازنة تتكيف مع تغيرات درجة الحرارة</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للصناعات الثقيلة</h4>
              <p>أقمشة فائقة المتانة مع حماية حرارية متقدمة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title="اختيار الأقمشة المناسبة للمناخ الحار: دليل علمي شامل للزي الموحد في السعودية"
        excerpt="دليل علمي متقدم لاختيار أفضل الأقمشة والتقنيات المبتكرة للزي الموحد في المناخ الحار السعودي، مع دراسات حالة وأبحاث متخصصة في تقنيات الأقمشة الذكية والمستدامة"
        content={content}
        category="blog"
        slug="choosing-suitable-fabrics-for-hot-climate"
        author={author}
        publishDate="2025-04-20"
        coverImage="/images/blog/choosing-suitable-fabrics-for-hot-climate.jpg"
        readingTime="14 دقيقة للقراءة"
        tags={["أقمشة المناخ الحار", "تقنيات الأقمشة الذكية", "الزي الموحد السعودي", "أقمشة مقاومة الحرارة"]}
      />
    </div>
  );
} 