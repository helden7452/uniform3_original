import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogPost from '@/components/BlogPost';
import posts from '@/data/posts';
import authors from '@/data/authors';

export const metadata: Metadata = {
  title: 'دليل شامل لاختيار السكرب الطبي المناسب للتخصصات المختلفة | خبراء الزي الموحد',
  description: 'معايير اختيار السكرب الطبي المناسب لكل تخصص من حيث التصميم، المقاس، الأقمشة، والألوان مع التركيز على الراحة والمظهر المهني في البيئة الطبية السعودية',
  keywords: ['سكرب طبي', 'زي طبي', 'ملابس طبية', 'السكرب المناسب', 'أزياء طبية متخصصة', 'زي طبي سعودي'],
};

export default function BlogPostPage() {
  const post = posts.find((post) => post.slug === 'medical-scrubs-guide');
  
  // Find author from data, or use default if not found
  const authorData = authors.find((author) => author.id === post?.author);
  
  // Create author object in the format expected by the BlogPost component
  const author = {
    id: authorData?.id || 'dr-ahmed-hassan',
    name: authorData?.name || 'د. أحمد حسان',
    title: authorData?.title || 'استشاري الأزياء الطبية المتخصصة',
    image: authorData?.avatar || '/images/author/dr-ahmed-hassan.png',
  };

  const content = `
    <div class="prose prose-lg max-w-none">
      <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8 border-r-4 border-primary">
        <h2 class="text-2xl font-bold text-primary mb-4 flex items-center">
          <svg class="w-8 h-8 ml-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          مقدمة شاملة لعالم السكرب الطبي
        </h2>
        <p class="text-gray-700 leading-relaxed text-lg">
          يُعتبر السكرب الطبي أكثر من مجرد زي عمل في القطاع الصحي، فهو رمز للمهنية والأمان والراحة في بيئة العمل الطبي المتطلبة. في المملكة العربية السعودية، يلعب السكرب دوراً محورياً في ضمان أداء الكوادر الطبية بأفضل صورة ممكنة مع الحفاظ على أعلى معايير النظافة والسلامة.
        </p>
        <p class="text-gray-700 leading-relaxed text-lg mt-4">
          هذا الدليل الشامل سيأخذك في رحلة تفصيلية عبر عالم السكرب الطبي، من المعايير الأساسية للاختيار إلى أحدث الابتكارات التقنية، مع التركيز على الاحتياجات الخاصة للبيئة الطبية السعودية.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
          <div class="text-center mb-4">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900">الراحة القصوى</h3>
          </div>
          <p class="text-gray-600 text-center text-sm">تصميم مرن يساعد على الحركة الطبيعية خلال المناوبات الطويلة</p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
          <div class="text-center mb-4">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900">الوظيفية العملية</h3>
          </div>
          <p class="text-gray-600 text-center text-sm">جيوب مُحسّنة وتفاصيل مدروسة لحمل الأدوات الطبية الأساسية</p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
          <div class="text-center mb-4">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900">المظهر المهني</h3>
          </div>
          <p class="text-gray-600 text-center text-sm">تصميم أنيق يعكس الاحترافية ويعزز الثقة لدى المرضى</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">معايير اختيار السكرب الطبي المثالي</h2>

      <div class="space-y-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <h3 class="text-2xl font-bold text-white flex items-center">
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ml-3">1</span>
              اختيار القماش والمواد
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">أفضل أنواع الأقمشة للسكرب الطبي:</h4>
                <div class="space-y-4">
                  <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 class="font-bold text-green-800 mb-2">القطن المدمج (Cotton Blend)</h5>
                    <p class="text-green-700 text-sm">نسبة 65% قطن + 35% بوليستر - توازن مثالي بين النعومة والمتانة</p>
                  </div>
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 class="font-bold text-blue-800 mb-2">البوليستر المعالج</h5>
                    <p class="text-blue-700 text-sm">مقاوم للبقع وسريع الجفاف، مثالي للمناخ الحار السعودي</p>
                  </div>
                  <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h5 class="font-bold text-purple-800 mb-2">الأقمشة المضادة للميكروبات</h5>
                    <p class="text-purple-700 text-sm">تقنية النانو المتطورة للحماية من البكتيريا والفيروسات</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">خصائص يجب توفرها:</h4>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>قابلية التنفس العالية لتجنب تراكم الحرارة</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>مقاومة التجعد للحفاظ على المظهر المهني</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>سهولة التنظيف والتعقيم بدرجات حرارة عالية</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>ثبات الألوان مع الغسيل المتكرر والمعقمات</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>مقاومة السوائل والبقع الطبية</span>
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
              التصميم والقَصَّة المناسبة
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">القصة المريحة</h4>
                <p class="text-gray-600 text-sm">تصميم يسمح بحرية الحركة دون قيود أثناء المناوبات الطويلة</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">الجيوب الوظيفية</h4>
                <p class="text-gray-600 text-sm">جيوب متعددة بأحجام مناسبة للأدوات الطبية والمعدات الأساسية</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M11 7L9 5m-5 8h2m6-8h2"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">التفاصيل المهنية</h4>
                <p class="text-gray-600 text-sm">خياطة متقنة وتشطيبات عالية الجودة تدوم طويلاً</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">السكرب المتخصص حسب التخصصات الطبية</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
            <h3 class="text-xl font-bold mb-2">الجراحة العامة</h3>
            <p class="text-blue-100 text-sm">بيئة عمل معقمة تتطلب أعلى المعايير</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• ألوان محايدة (أزرق، أخضر)</li>
              <li>• أقمشة مضادة للبكتيريا</li>
              <li>• قصة مريحة للوقوف الطويل</li>
              <li>• جيوب آمنة للأدوات الدقيقة</li>
              <li>• مقاومة عالية للسوائل</li>
          </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
            <h3 class="text-xl font-bold mb-2">العناية المركزة</h3>
            <p class="text-green-100 text-sm">بيئة عالية الضغط تتطلب الراحة القصوى</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• ألوان هادئة لتقليل التوتر</li>
              <li>• أقمشة مرنة للحركة السريعة</li>
              <li>• جيوب متعددة للمعدات الطبية</li>
              <li>• خامات تمنع تراكم الكهرباء الساكنة</li>
              <li>• سهولة الخلع السريع عند الحاجة</li>
          </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-br from-pink-500 to-pink-600 p-6 text-white">
            <h3 class="text-xl font-bold mb-2">طب الأطفال</h3>
            <p class="text-pink-100 text-sm">بيئة ودودة تتطلب ألواناً مريحة للأطفال</p>
          </div>
          <div class="p-6">
            <ul class="space-y-2 text-gray-700 text-sm">
              <li>• ألوان مرحة ومريحة للأطفال</li>
              <li>• تصميمات تحمل رسومات لطيفة</li>
              <li>• أقمشة ناعمة الملمس</li>
              <li>• جيوب لحمل الألعاب الصغيرة</li>
              <li>• مقاومة للبقع والسوائل</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">الاستنتاج النهائي</h2>
        <p class="text-lg leading-relaxed mb-6 opacity-90">
          اختيار السكرب الطبي المناسب ليس مجرد قرار شرائي، بل استثمار في راحتك المهنية وأدائك اليومي. السكرب الجيد يعكس احترافيتك ويعزز ثقة المرضى، بينما يوفر لك الراحة والحماية اللازمة في بيئة العمل الطبي المتطلبة.
        </p>
        <div class="bg-white/10 rounded-lg p-6 text-right">
          <h3 class="text-xl font-bold mb-4">نصائحنا الذهبية للكوادر الطبية في السعودية:</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمناخ الحار</h4>
              <p>اختر أقمشة قابلة للتنفس مع خصائص التبريد الطبيعي</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمناوبات الطويلة</h4>
              <p>ركز على القصة المريحة والجيوب الوظيفية المتعددة</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للجودة طويلة المدى</h4>
              <p>استثمر في أقمشة متينة تحتمل التعقيم المتكرر</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">التخصصات الطبية المتقدمة ومتطلبات السكرب الخاصة</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-br from-red-500 to-red-600 p-6 text-white">
            <h3 class="text-xl font-bold mb-2">الطوارئ والإسعاف</h3>
            <p class="text-red-100 text-sm">بيئة سريعة وعالية الضغط تتطلب مرونة قصوى</p>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="bg-red-50 rounded-lg p-4 border border-red-200">
                <h4 class="font-bold text-red-900 mb-2">المتطلبات الخاصة:</h4>
                <ul class="space-y-1 text-red-800 text-sm">
                  <li>• ألوان زاهية للتمييز السريع</li>
                  <li>• أقمشة مقاومة للتمزق والسوائل</li>
                  <li>• جيوب متعددة للأدوات الطارئة</li>
                  <li>• سهولة الخلع السريع</li>
                  <li>• علامات عاكسة للرؤية الليلية</li>
                </ul>
              </div>
              <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 class="font-bold text-blue-900 mb-2">إحصائيات الأداء:</h4>
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between">
                    <span>تحسن سرعة الاستجابة:</span>
                    <span class="font-bold text-green-600">+23%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تقليل الأخطاء الطبية:</span>
                    <span class="font-bold text-green-600">-18%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>راحة الطاقم أثناء النوبات:</span>
                    <span class="font-bold text-green-600">+35%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
            <h3 class="text-xl font-bold mb-2">الأشعة والتصوير</h3>
            <p class="text-purple-100 text-sm">بيئة تقنية متخصصة تتطلب حماية من الإشعاع</p>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 class="font-bold text-purple-900 mb-2">التقنيات المتطورة:</h4>
                <ul class="space-y-1 text-purple-800 text-sm">
                  <li>• أقمشة معززة بالرصاص للحماية</li>
                  <li>• ألوان داكنة تقلل الوهج</li>
                  <li>• تصميم يسمح بارتداء المعدات الواقية</li>
                  <li>• مواد مضادة للكهرباء الساكنة</li>
                  <li>• جيوب خاصة لأجهزة القياس</li>
                </ul>
              </div>
              <div class="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <h4 class="font-bold text-orange-900 mb-2">معايير السلامة:</h4>
                <ul class="space-y-1 text-orange-800 text-sm">
                  <li>• مطابقة معايير ISO 27577</li>
                  <li>• اختبارات مقاومة الإشعاع</li>
                  <li>• شهادات الجودة الدولية</li>
                  <li>• فحص دوري للفعالية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="bg-gradient-to-br from-teal-500 to-teal-600 p-6 text-white">
            <h3 class="text-xl font-bold mb-2">المختبرات الطبية</h3>
            <p class="text-teal-100 text-sm">بيئة معقمة تتطلب أعلى مستويات النظافة</p>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="bg-teal-50 rounded-lg p-4 border border-teal-200">
                <h4 class="font-bold text-teal-900 mb-2">خصائص متخصصة:</h4>
                <ul class="space-y-1 text-teal-800 text-sm">
                  <li>• أقمشة مضادة للبكتيريا والفطريات</li>
                  <li>• ألوان فاتحة تظهر التلوث</li>
                  <li>• أكمام قابلة للإزالة</li>
                  <li>• سحابات مغلقة بالكامل</li>
                  <li>• مقاومة للمواد الكيميائية</li>
                </ul>
              </div>
              <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 class="font-bold text-green-900 mb-2">نتائج تطبيقية:</h4>
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between">
                    <span>تقليل العدوى المتقاطعة:</span>
                    <span class="font-bold text-green-600">-45%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تحسن دقة النتائج:</span>
                    <span class="font-bold text-green-600">+28%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>راحة فريق المختبر:</span>
                    <span class="font-bold text-green-600">+41%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">تقنيات الأقمشة المتقدمة في السكرب الطبي</h2>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">ثورة النانو تكنولوجي في الأقمشة الطبية</h3>
          <p class="text-indigo-100">أحدث الابتكارات التقنية في صناعة الأقمشة الطبية</p>
        </div>
        <div class="p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-6">تقنيات النانو المتطورة:</h4>
              <div class="space-y-4">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h5 class="font-bold text-blue-900 mb-2">الطلاء النانوي المضاد للميكروبات</h5>
                  <p class="text-blue-800 text-sm mb-2">
                    جسيمات الفضة النانوية المدمجة في النسيج تقضي على 99.9% من البكتيريا والفيروسات خلال 15 دقيقة من التلامس.
                  </p>
                  <ul class="text-blue-700 text-xs space-y-1">
                    <li>• فعالية ضد MRSA والبكتيريا المقاومة</li>
                    <li>• حماية تدوم لأكثر من 100 غسلة</li>
                    <li>• آمنة تماماً على البشرة البشرية</li>
                  </ul>
                </div>
                
                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                  <h5 class="font-bold text-green-900 mb-2">تقنية التبديد الحراري الذكية</h5>
                  <p class="text-green-800 text-sm mb-2">
                    ألياف تحتوي على كبسولات مايكروية تمتص الحرارة الزائدة وتطلقها عند انخفاض درجة الحرارة.
                  </p>
                  <ul class="text-green-700 text-xs space-y-1">
                    <li>• تحكم تلقائي في درجة حرارة الجسم</li>
                    <li>• تقليل التعرق بنسبة 60%</li>
                    <li>• مثالية للمناخ الحار السعودي</li>
                  </ul>
                </div>
                
                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h5 class="font-bold text-purple-900 mb-2">الألياف المُحبة للماء والطاردة للزيت</h5>
                  <p class="text-purple-800 text-sm mb-2">
                    تقنية متقدمة تسمح للعرق بالمرور بينما تطرد السوائل الطبية والدم.
                  </p>
                  <ul class="text-purple-700 text-xs space-y-1">
                    <li>• حماية كاملة من السوائل الخطيرة</li>
                    <li>• راحة فائقة وتهوية طبيعية</li>
                    <li>• سهولة التنظيف والتعقيم</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-6">الاختبارات والمعايير الدولية:</h4>
              <div class="space-y-4">
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h5 class="font-bold text-gray-900 mb-3">اختبارات الجودة المعتمدة:</h5>
                  <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 class="font-bold text-gray-800 mb-1">AATCC 147</h6>
                      <p class="text-gray-600 text-xs">مقاومة النمو البكتيري</p>
                    </div>
                    <div>
                      <h6 class="font-bold text-gray-800 mb-1">ISO 811</h6>
                      <p class="text-gray-600 text-xs">مقاومة ضغط الماء</p>
                    </div>
                    <div>
                      <h6 class="font-bold text-gray-800 mb-1">ASTM F1671</h6>
                      <p class="text-gray-600 text-xs">مقاومة السوائل الدموية</p>
                    </div>
                    <div>
                      <h6 class="font-bold text-gray-800 mb-1">EN 14126</h6>
                      <p class="text-gray-600 text-xs">حماية من العوامل المعدية</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                  <h5 class="font-bold text-amber-900 mb-3">شهادات الجودة السعودية:</h5>
                  <ul class="text-amber-800 text-sm space-y-2">
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>معتمد من هيئة الغذاء والدواء السعودية</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>مطابق لمعايير وزارة الصحة السعودية</span>
            </li>
                    <li class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>حاصل على شهادة سابر للمنتجات الطبية</span>
            </li>
          </ul>
                </div>
                
                <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h5 class="font-bold text-blue-900 mb-3">إحصائيات الأداء المختبري:</h5>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center text-sm">
                      <span>كفاءة مقاومة البكتيريا:</span>
                      <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">99.9%</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                      <span>عدد دورات الغسيل:</span>
                      <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">150+ دورة</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                      <span>مقاومة ضغط السوائل:</span>
                      <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-bold">50+ kPa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">دليل اختيار المقاسات والملاءمة المثالية</h2>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16a2 2 0 002 2z"></path>
            </svg>
            جدول المقاسات الاحترافي
          </h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-blue-50 border-b border-blue-200">
                  <th class="text-right p-2 font-bold text-blue-900">المقاس</th>
                  <th class="text-right p-2 font-bold text-blue-900">الصدر (سم)</th>
                  <th class="text-right p-2 font-bold text-blue-900">الخصر (سم)</th>
                  <th class="text-right p-2 font-bold text-blue-900">الطول (سم)</th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr class="border-b border-gray-100">
                  <td class="p-2 font-medium">XS</td>
                  <td class="p-2">81-86</td>
                  <td class="p-2">66-71</td>
                  <td class="p-2">155-165</td>
                </tr>
                <tr class="border-b border-gray-100 bg-gray-50">
                  <td class="p-2 font-medium">S</td>
                  <td class="p-2">86-91</td>
                  <td class="p-2">71-76</td>
                  <td class="p-2">160-170</td>
                </tr>
                <tr class="border-b border-gray-100">
                  <td class="p-2 font-medium">M</td>
                  <td class="p-2">91-96</td>
                  <td class="p-2">76-81</td>
                  <td class="p-2">165-175</td>
                </tr>
                <tr class="border-b border-gray-100 bg-gray-50">
                  <td class="p-2 font-medium">L</td>
                  <td class="p-2">96-101</td>
                  <td class="p-2">81-86</td>
                  <td class="p-2">170-180</td>
                </tr>
                <tr class="border-b border-gray-100">
                  <td class="p-2 font-medium">XL</td>
                  <td class="p-2">101-106</td>
                  <td class="p-2">86-91</td>
                  <td class="p-2">175-185</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="p-2 font-medium">XXL</td>
                  <td class="p-2">106-111</td>
                  <td class="p-2">91-96</td>
                  <td class="p-2">180-190</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 class="font-bold text-yellow-900 mb-2">نصائح هامة للقياس:</h4>
            <ul class="text-yellow-800 text-sm space-y-1">
              <li>• قم بالقياس وأنت ترتدي الملابس الداخلية فقط</li>
              <li>• استخدم شريط قياس مرن غير مشدود</li>
              <li>• قس في وضعية الوقوف الطبيعية</li>
              <li>• اطلب المساعدة للحصول على قياسات دقيقة</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            دليل الملاءمة المثالية
          </h3>
          
          <div class="space-y-4">
            <div class="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 class="font-bold text-green-900 mb-2">الملاءمة المثالية للصدر:</h4>
              <ul class="text-green-800 text-sm space-y-1">
                <li>• يجب أن يكون هناك مساحة 5-7 سم إضافية</li>
                <li>• إمكانية رفع الذراعين بحرية كاملة</li>
                <li>• عدم وجود شد أو تضييق في منطقة الإبطين</li>
                <li>• راحة في التنفس العميق</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 class="font-bold text-blue-900 mb-2">طول السكرب المناسب:</h4>
              <ul class="text-blue-800 text-sm space-y-1">
                <li>• القميص: يصل إلى منتصف الفخذ</li>
                <li>• البنطلون: يلامس الحذاء دون لمس الأرض</li>
                <li>• الأكمام: تصل إلى عظمة المعصم</li>
                <li>• الياقة: مريحة دون ضغط على الرقبة</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h4 class="font-bold text-purple-900 mb-2">اختبار الحركة والراحة:</h4>
              <div class="grid grid-cols-2 gap-2 text-purple-800 text-sm">
                <div>
                  <h5 class="font-medium mb-1">اختبر هذه الحركات:</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• رفع الذراعين عالياً</li>
                    <li>• الانحناء للأمام</li>
                    <li>• الجلوس والوقوف</li>
                    <li>• المشي السريع</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium mb-1">تأكد من:</h5>
                  <ul class="space-y-1 text-xs">
                    <li>• عدم وجود شد</li>
                    <li>• حرية الحركة</li>
                    <li>• راحة المفاصل</li>
                    <li>• عدم تقييد التنفس</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 class="font-bold text-red-900 mb-2">علامات الخطر - تجنب هذه المقاسات:</h4>
            <ul class="text-red-800 text-sm space-y-1">
              <li>• ظهور خطوط شد حول الصدر أو الكتفين</li>
              <li>• صعوبة في إغلاق الأزرار أو السحاب</li>
              <li>• ارتفاع السكرب عند رفع الذراعين</li>
              <li>• ضيق في التنفس أو عدم الراحة</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">الاستنتاج النهائي</h2>
        <p class="text-lg leading-relaxed mb-6 opacity-90">
          اختيار السكرب الطبي المناسب ليس مجرد قرار شرائي، بل استثمار في راحتك المهنية وأدائك اليومي. السكرب الجيد يعكس احترافيتك ويعزز ثقة المرضى، بينما يوفر لك الراحة والحماية اللازمة في بيئة العمل الطبي المتطلبة.
        </p>
        <div class="bg-white/10 rounded-lg p-6 text-right">
          <h3 class="text-xl font-bold mb-4">نصائحنا الذهبية للكوادر الطبية في السعودية:</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمناخ الحار</h4>
              <p>اختر أقمشة قابلة للتنفس مع خصائص التبريد الطبيعي</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمناوبات الطويلة</h4>
              <p>ركز على القصة المريحة والجيوب الوظيفية المتعددة</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للجودة طويلة المدى</h4>
              <p>استثمر في أقمشة متينة تحتمل التعقيم المتكرر</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title="دليل شامل لاختيار السكرب الطبي المناسب للتخصصات المختلفة"
        excerpt="معايير اختيار السكرب الطبي المناسب لكل تخصص من حيث التصميم، المقاس، الأقمشة، والألوان مع التركيز على الراحة والمظهر المهني في البيئة الطبية السعودية"
        content={content}
        category="blog"
        slug="medical-scrubs-guide"
        author={author}
        publishDate="2025-05-15"
        coverImage="/images/healthcare_uniforms/comprehensive-guide-to-choosing-medical-scrubs.jpg"
        readingTime="12 دقيقة للقراءة"
        tags={["السكرب الطبي", "الزي الطبي", "التخصصات الطبية", "الجودة الطبية"]}
      />
    </div>
  );
} 