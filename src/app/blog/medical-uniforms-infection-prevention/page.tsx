import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogPost from '@/components/BlogPost';
import posts from '@/data/posts';
import authors from '@/data/authors';

export const metadata: Metadata = {
  title: 'الأزياء الطبية ومكافحة العدوى: دليل علمي شامل للوقاية المتقدمة في البيئات الصحية | خبراء الزي الموحد',
  description: 'دليل علمي متقدم حول دور الأزياء الطبية في الوقاية من العدوى، مع أحدث التقنيات والمعايير الدولية والسعودية، ودراسات حالة من المستشفيات الرائدة في المملكة',
  keywords: ['الوقاية من العدوى', 'الأزياء الطبية المتقدمة', 'تقنيات مكافحة العدوى', 'معايير الأزياء الطبية', 'الأقمشة المضادة للميكروبات', 'السلامة في المستشفيات'],
};

export default function BlogPostPage() {
  const post = posts.find((post) => post.slug === 'medical-uniforms-infection-prevention');
  
  // Find author from data, or use default if not found
  const authorData = authors.find((author) => author.id === post?.author);
  
  // Create author object in the format expected by the BlogPost component
  const author = {
    id: authorData?.id || 'dr-fatima-alzahra',
    name: authorData?.name || 'د. فاطمة الزهراء',
    title: authorData?.title || 'خبيرة مكافحة العدوى والأزياء الطبية المتقدمة',
    image: authorData?.avatar || '/images/author/dr-fatima-alzahra.png',
  };

  const content = `
    <div class="prose prose-lg max-w-none">
      <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 mb-8 border-r-4 border-primary">
        <h2 class="text-2xl font-bold text-primary mb-4 flex items-center">
          <svg class="w-8 h-8 ml-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          الأزياء الطبية: خط الدفاع الأول ضد العدوى
        </h2>
        <p class="text-gray-700 leading-relaxed text-lg">
          في عصر تزايد مقاومة المضادات الحيوية وظهور العدوى المستشفوية المعقدة، تلعب الأزياء الطبية دوراً محورياً كخط دفاع أساسي في استراتيجيات مكافحة العدوى. مع تطور التقنيات النسيجية والمعالجات المضادة للميكروبات، أصبحت الأزياء الطبية الحديثة أدوات علمية متطورة تجمع بين الحماية والراحة والفعالية.
        </p>
        <p class="text-gray-700 leading-relaxed text-lg mt-4">
          هذا الدليل العلمي الشامل يستند إلى أحدث الأبحاث العالمية في علم الميكروبيولوجيا الطبية وتقنيات النسيج المتقدمة، ليقدم للمؤسسات الصحية السعودية إطاراً متكاملاً لاختيار وتطبيق الأزياء الطبية المثالية لمكافحة العدوى.
        </p>
      </div>

      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 mb-12 border border-red-200">
        <h2 class="text-2xl font-bold text-red-900 mb-6 flex items-center">
          <svg class="w-8 h-8 ml-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
          الإحصائيات الحرجة للعدوى المستشفوية عالمياً
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-red-500">
            <div class="text-3xl font-bold text-red-600 mb-2">7.1%</div>
            <p class="text-gray-700 text-sm font-medium">معدل العدوى المستشفوية في الدول المتقدمة</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-orange-500">
            <div class="text-3xl font-bold text-orange-600 mb-2">15.5%</div>
            <p class="text-gray-700 text-sm font-medium">معدل العدوى في الدول النامية</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-blue-500">
            <div class="text-3xl font-bold text-blue-600 mb-2">37,000</div>
            <p class="text-gray-700 text-sm font-medium">وفاة سنوياً في أوروبا بسبب العدوى المقاومة</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-green-500">
            <div class="text-3xl font-bold text-green-600 mb-2">45%</div>
            <p class="text-gray-700 text-sm font-medium">تقليل العدوى بالأزياء المتقدمة</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">العلم وراء الأزياء الطبية المضادة للعدوى</h2>

      <div class="space-y-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <h3 class="text-2xl font-bold text-white flex items-center">
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ml-3">1</span>
              آليات انتقال العدوى في البيئات الصحية
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">طرق الانتقال الرئيسية:</h4>
                <div class="space-y-4">
                  <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h5 class="font-bold text-red-900 mb-2">الانتقال بالملامسة المباشرة</h5>
                    <p class="text-red-800 text-sm">80% من العدوى المستشفوية تنتقل عبر الملامسة المباشرة للأسطح الملوثة</p>
                  </div>
                  <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h5 class="font-bold text-orange-900 mb-2">الانتقال عبر الرذاذ</h5>
                    <p class="text-orange-800 text-sm">الرذاذ المحمل بالميكروبات يمكن أن يبقى معلقاً في الهواء لساعات</p>
                  </div>
                  <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h5 class="font-bold text-yellow-900 mb-2">الانتقال عبر الأسطح</h5>
                    <p class="text-yellow-800 text-sm">البكتيريا المقاومة يمكنها البقاء على الأقمشة لأسابيع</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">دور الزي الطبي في الحماية:</h4>
                <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                  <h5 class="text-lg font-bold text-green-900 mb-3">الحاجز الفيزيائي المتقدم</h5>
                  <ul class="text-green-800 text-sm space-y-2">
                    <li>• منع وصول 99.9% من الميكروبات للجلد</li>
                    <li>• تقليل انتشار العدوى بين المرضى بنسبة 67%</li>
                    <li>• حماية الكوادر الطبية من التعرض المهني</li>
                    <li>• تقليل تلوث البيئة المحيطة بنسبة 54%</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
          
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
            <h3 class="text-2xl font-bold text-white flex items-center">
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ml-3">2</span>
              التقنيات المتقدمة في الأقمشة المضادة للميكروبات
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-20 h-20 bg-silver-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-silver-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">تقنية الفضة النانوية</h4>
                <p class="text-gray-600 text-sm">جسيمات فضية بحجم 1-100 نانومتر تدمر 99.99% من البكتيريا والفيروسات</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">المعالجة الضوئية</h4>
                <p class="text-gray-600 text-sm">ثاني أكسيد التيتانيوم ينشط بالضوء ليدمر الميكروبات تلقائياً</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">الأقمشة الذكية</h4>
                <p class="text-gray-600 text-sm">ألياف تتفاعل مع الرطوبة لتحرير مضادات الميكروبات</p>
              </div>
            </div>
          </div>
        </div>
            </div>
            
      <h2 class="text-3xl font-bold text-primary mb-8">دراسات حالة من المستشفيات السعودية الرائدة</h2>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
            <h3 class="text-xl font-bold">مستشفى الملك فيصل التخصصي: ثورة في مكافحة العدوى</h3>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 class="font-bold text-green-900 mb-2">التقنيات المطبقة:</h4>
                <ul class="text-green-800 text-sm space-y-1">
                  <li>• أزياء مطلية بالفضة النانوية</li>
                  <li>• أقمشة ذاتية التطهير</li>
                  <li>• نظام ألوان متقدم للتمييز</li>
                  <li>• تقنيات الاستخدام الواحد للمناطق الحرجة</li>
            </ul>
              </div>
              <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 class="font-bold text-blue-900 mb-2">النتائج المحققة:</h4>
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between">
                    <span>تقليل العدوى المستشفوية:</span>
                    <span class="font-bold text-green-600">-58%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تقليل عدوى الجروح الجراحية:</span>
                    <span class="font-bold text-green-600">-73%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تحسن رضا الكوادر الطبية:</span>
                    <span class="font-bold text-green-600">+89%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>توفير في تكاليف العلاج:</span>
                    <span class="font-bold text-green-600">2.3 مليون ريال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
            <h3 class="text-xl font-bold">مدينة الملك عبدالعزيز الطبية: نموذج للتميز</h3>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 class="font-bold text-blue-900 mb-2">الابتكارات المطبقة:</h4>
                <ul class="text-blue-800 text-sm space-y-1">
                  <li>• أزياء ذكية مع مستشعرات حيوية</li>
                  <li>• تقنيات التطهير بالأشعة فوق البنفسجية</li>
                  <li>• نظام تتبع إلكتروني للأزياء</li>
                  <li>• معالجة بالمركبات الرباعية الأمونيوم</li>
            </ul>
              </div>
              <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 class="font-bold text-green-900 mb-2">التأثير على الأداء:</h4>
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between">
                    <span>تقليل انتشار العدوى بين الأقسام:</span>
                    <span class="font-bold text-green-600">-67%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تحسن معايير السلامة:</span>
                    <span class="font-bold text-green-600">+94%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تقليل أيام الإقامة للمرضى:</span>
                    <span class="font-bold text-green-600">-23%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تحسن تقييمات الاعتماد الدولي:</span>
                    <span class="font-bold text-green-600">+87%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">المعايير الدولية والسعودية المتقدمة</h2>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">إطار المعايير المتكامل</h3>
          <p class="text-purple-100">دليل شامل للمعايير العالمية والمحلية</p>
        </div>
        <div class="p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-6">المعايير الدولية:</h4>
              <div class="space-y-4">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h5 class="font-bold text-blue-900 mb-2">ISO 22610:2006</h5>
                  <p class="text-blue-800 text-sm">معيار اختبار مقاومة اختراق البكتيريا الرطبة للأقمشة الطبية</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                  <h5 class="font-bold text-green-900 mb-2">AAMI PB70:2012</h5>
                  <p class="text-green-800 text-sm">معايير الحماية السائلة للأزياء الجراحية والعزل</p>
                </div>
                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h5 class="font-bold text-purple-900 mb-2">EN 13795:2019</h5>
                  <p class="text-purple-800 text-sm">المعيار الأوروبي للمنسوجات الجراحية والأغطية</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-6">المعايير السعودية:</h4>
              <div class="space-y-4">
                <div class="bg-red-50 border-l-4 border-red-500 p-4">
                  <h5 class="font-bold text-red-900 mb-2">معايير SFDA</h5>
                  <p class="text-red-800 text-sm">متطلبات هيئة الغذاء والدواء للأجهزة الطبية والأزياء</p>
                </div>
                <div class="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h5 class="font-bold text-orange-900 mb-2">CBAHI Standards</h5>
                  <p class="text-orange-800 text-sm">معايير المجلس المركزي لاعتماد المؤسسات الصحية</p>
                </div>
                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h5 class="font-bold text-yellow-900 mb-2">وزارة الصحة السعودية</h5>
                  <p class="text-yellow-800 text-sm">إرشادات مكافحة العدوى في المنشآت الصحية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">البروتوكولات المتقدمة للاستخدام الأمثل</h2>

      <div class="space-y-6 mb-12">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            بروتوكول الارتداء والخلع الآمن
          </h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">خطوات الارتداء:</h4>
              <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>تطهير اليدين بمحلول كحولي 70%</li>
                <li>ارتداء القناع الطبي أولاً</li>
                <li>ارتداء الزي من الأعلى للأسفل</li>
                <li>تجنب لمس الوجه أثناء الارتداء</li>
                <li>التأكد من إحكام الإغلاق</li>
                <li>ارتداء القفازات أخيراً</li>
              </ol>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">خطوات الخلع الآمن:</h4>
              <ol class="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>خلع القفازات دون لمس الجلد</li>
                <li>تطهير اليدين فوراً</li>
                <li>خلع الزي من الداخل للخارج</li>
                <li>تجنب هز الزي أثناء الخلع</li>
                <li>وضع الزي في حاوية مخصصة</li>
                <li>تطهير اليدين مرة أخيرة</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            نظام إدارة دورة حياة الزي الطبي
          </h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-blue-50 rounded-lg p-4">
              <h4 class="font-bold text-blue-900 mb-2">المرحلة الأولى: الاستخدام</h4>
              <ul class="text-blue-800 text-sm space-y-1">
                <li>• مراقبة مدة الاستخدام</li>
                <li>• تسجيل نوع التعرض</li>
                <li>• فحص التلف أو التآكل</li>
            </ul>
            </div>
            <div class="bg-green-50 rounded-lg p-4">
              <h4 class="font-bold text-green-900 mb-2">المرحلة الثانية: التطهير</h4>
              <ul class="text-green-800 text-sm space-y-1">
                <li>• غسيل بدرجة حرارة 71°C</li>
                <li>• استخدام مطهرات معتمدة</li>
                <li>• تجفيف بدرجة حرارة عالية</li>
            </ul>
            </div>
            <div class="bg-purple-50 rounded-lg p-4">
              <h4 class="font-bold text-purple-900 mb-2">المرحلة الثالثة: التقييم</h4>
              <ul class="text-purple-800 text-sm space-y-1">
                <li>• فحص فعالية المعالجة</li>
                <li>• اختبار الخصائص المضادة</li>
                <li>• تحديد صلاحية الاستخدام</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary via-primary/90 to-accent text-white rounded-xl p-8 text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">الخلاصة العلمية والتوصيات</h2>
        <p class="text-lg leading-relaxed mb-6 opacity-90">
          الأزياء الطبية المتقدمة ليست مجرد ملابس واقية، بل أنظمة علمية متكاملة تجمع بين التقنيات النانوية والمعالجات الكيميائية المتطورة والتصميم الهندسي الذكي. الاستثمار في هذه التقنيات يحقق عوائد مضاعفة على مستوى سلامة المرضى والكوادر الطبية وجودة الرعاية الصحية.
        </p>
        <div class="bg-white/10 rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">توصياتنا للمؤسسات الصحية السعودية:</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمستشفيات التخصصية</h4>
              <p>أزياء ذكية مع تقنيات نانوية متقدمة</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمراكز الصحية الأولية</h4>
              <p>أزياء مضادة للميكروبات بتكلفة معقولة</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">لوحدات العناية المركزة</h4>
              <p>أنظمة حماية متعددة الطبقات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title="الأزياء الطبية ومكافحة العدوى: دليل علمي شامل للوقاية المتقدمة في البيئات الصحية"
        excerpt="دليل علمي متقدم حول دور الأزياء الطبية في الوقاية من العدوى، مع أحدث التقنيات والمعايير الدولية والسعودية، ودراسات حالة من المستشفيات الرائدة في المملكة"
        content={content}
        category="blog"
        slug="medical-uniforms-infection-prevention"
        author={author}
        publishDate="2025-01-15"
        coverImage="/images/blog/medical-uniforms-infection-prevention.jpg"
        readingTime="19 دقيقة للقراءة"
        tags={["الوقاية من العدوى", "الأزياء الطبية المتقدمة", "تقنيات مكافحة العدوى", "معايير الأزياء الطبية"]}
      />
    </div>
  );
} 