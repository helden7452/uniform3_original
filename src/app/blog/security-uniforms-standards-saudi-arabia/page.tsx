import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogPost from '@/components/BlogPost';
import posts from '@/data/posts';
import authors from '@/data/authors';

export const metadata: Metadata = {
  title: 'معايير اختيار زي الأمن والحراسة في المملكة العربية السعودية: دليل شامل للمعايير الأمنية المتقدمة | خبراء الزي الموحد',
  description: 'دليل شامل ومتقدم حول معايير ومواصفات اختيار زي الأمن والحراسة المناسب في المملكة العربية السعودية، مع مراعاة المتطلبات الأمنية والقانونية والمناخية والتقنيات الحديثة',
  keywords: ['زي الأمن السعودي', 'معايير الحراسة', 'الأزياء الأمنية المتقدمة', 'لوائح الأمن السعودي', 'تقنيات الأمان في الأزياء', 'معدات الحماية الشخصية'],
};

export default function BlogPostPage() {
  const post = posts.find((post) => post.slug === 'security-uniforms-standards-saudi-arabia');
  
  // Find author from data, or use default if not found
  const authorData = authors.find((author) => author.id === post?.author);
  
  // Create author object in the format expected by the BlogPost component
  const author = {
    id: authorData?.id || 'mohammed-alharbi',
    name: authorData?.name || 'محمد الحربي',
    title: authorData?.title || 'خبير الأمن والحماية والأزياء التكتيكية',
    image: authorData?.avatar || '/images/author/mohammed-alharbi.png',
  };

  const content = `
    <div class="prose prose-lg max-w-none">
      <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 mb-8 border-r-4 border-primary">
        <h2 class="text-2xl font-bold text-primary mb-4 flex items-center">
          <svg class="w-8 h-8 ml-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          الأمن والحراسة: ركيزة أساسية في رؤية المملكة 2030
        </h2>
        <p class="text-gray-700 leading-relaxed text-lg">
          في ظل التطور الأمني والتقني الذي تشهده المملكة العربية السعودية، يلعب زي الأمن والحراسة دوراً محورياً في تعزيز الهيبة والمهنية والفعالية الأمنية. مع تزايد الاستثمارات في المشاريع الضخمة والمدن المستقبلية، تتطلب معايير الأزياء الأمنية مواكبة أحدث التقنيات والمعايير الدولية.
        </p>
        <p class="text-gray-700 leading-relaxed text-lg mt-4">
          هذا الدليل الشامل يقدم إطاراً متكاملاً لاختيار وتطوير الأزياء الأمنية وفقاً للمعايير السعودية والدولية، مع التركيز على التقنيات المتقدمة والحلول المبتكرة التي تضمن أعلى مستويات الأمان والراحة والمهنية.
        </p>
      </div>

      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 mb-12 border border-red-200">
        <h2 class="text-2xl font-bold text-red-900 mb-6 flex items-center">
          <svg class="w-8 h-8 ml-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
          التحديات الأمنية في البيئة السعودية
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-red-500">
            <div class="text-3xl font-bold text-red-600 mb-2">50°C</div>
            <p class="text-gray-700 text-sm font-medium">درجات حرارة قصوى تتطلب أقمشة متخصصة</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-blue-500">
            <div class="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p class="text-gray-700 text-sm font-medium">مناوبات مستمرة تتطلب راحة قصوى</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-green-500">
            <div class="text-3xl font-bold text-green-600 mb-2">15+</div>
            <p class="text-gray-700 text-sm font-medium">أنواع مختلفة من البيئات الأمنية</p>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-purple-500">
            <div class="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <p class="text-gray-700 text-sm font-medium">الالتزام بالمعايير الدولية مطلوب</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">الإطار التنظيمي والقانوني للأزياء الأمنية</h2>

      <div class="space-y-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
            <h3 class="text-2xl font-bold text-white flex items-center">
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ml-3">1</span>
              اللوائح والتنظيمات الحكومية
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">المتطلبات الأساسية:</h4>
                <div class="space-y-4">
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 class="font-bold text-blue-900 mb-2">تراخيص وزارة الداخلية</h5>
                    <p class="text-blue-800 text-sm">الحصول على الموافقات اللازمة لتصميم وإنتاج الأزياء الأمنية</p>
                  </div>
                  <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h5 class="font-bold text-green-900 mb-2">معايير الهيئة السعودية للمواصفات</h5>
                    <p class="text-green-800 text-sm">الالتزام بالمواصفات القياسية السعودية SASO</p>
                  </div>
                  <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h5 class="font-bold text-purple-900 mb-2">لوائح السلامة المهنية</h5>
                    <p class="text-purple-800 text-sm">مطابقة معايير الصحة والسلامة المهنية</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">الضوابط التمييزية:</h4>
                <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
                  <h5 class="text-lg font-bold text-amber-900 mb-3">التمييز عن الأزياء الرسمية</h5>
                  <ul class="text-amber-800 text-sm space-y-2">
                    <li>• تجنب استخدام الألوان والشارات العسكرية الرسمية</li>
                    <li>• وضع علامات تمييز واضحة للأمن الخاص</li>
                    <li>• استخدام شعارات الشركة المعتمدة فقط</li>
                    <li>• الالتزام بالتصاميم المعتمدة من الجهات المختصة</li>
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
              المعايير التقنية والأمنية المتقدمة
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">مقاومة الحريق</h4>
                <p class="text-gray-600 text-sm">أقمشة مطابقة لمعايير NFPA 2112 للحماية من الحرائق</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">مقاومة القطع</h4>
                <p class="text-gray-600 text-sm">حماية من الأدوات الحادة وفقاً لمعيار EN 388</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">الرؤية الليلية</h4>
                <p class="text-gray-600 text-sm">عناصر عاكسة وتقنيات الإضاءة المدمجة</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">التقنيات المتقدمة في الأزياء الأمنية</h2>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>
            التقنيات الذكية المدمجة
          </h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-lg p-4">
              <h4 class="font-bold text-blue-900 mb-2">أجهزة الاستشعار المدمجة</h4>
              <ul class="text-blue-800 text-sm space-y-1">
                <li>• مستشعرات الحركة والموقع GPS</li>
                <li>• أجهزة قياس العلامات الحيوية</li>
                <li>• تقنيات الاتصال اللاسلكي</li>
                <li>• أنظمة الإنذار المبكر</li>
            </ul>
            </div>
            
            <div class="bg-green-50 rounded-lg p-4">
              <h4 class="font-bold text-green-900 mb-2">الكاميرات المدمجة</h4>
              <ul class="text-green-800 text-sm space-y-1">
                <li>• كاميرات عالية الدقة 4K</li>
                <li>• تسجيل مستمر لمدة 12 ساعة</li>
                <li>• رؤية ليلية متقدمة</li>
                <li>• مقاومة للماء والغبار IP67</li>
            </ul>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 ml-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            أنظمة الحماية المتقدمة
          </h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-lg p-4">
              <h4 class="font-bold text-purple-900 mb-2">الحماية الباليستية</h4>
              <ul class="text-purple-800 text-sm space-y-1">
                <li>• سترات مقاومة للرصاص NIJ Level IIIA</li>
                <li>• خوذات تكتيكية متطورة</li>
                <li>• حماية للأطراف والمفاصل</li>
                <li>• مواد خفيفة الوزن عالية الحماية</li>
            </ul>
            </div>
            
            <div class="bg-orange-50 rounded-lg p-4">
              <h4 class="font-bold text-orange-900 mb-2">الحماية الكيميائية والبيولوجية</h4>
              <ul class="text-orange-800 text-sm space-y-1">
                <li>• أقمشة مقاومة للمواد الكيميائية</li>
                <li>• فلاتر تنفس متقدمة</li>
                <li>• طلاءات مضادة للبكتيريا والفيروسات</li>
                <li>• أنظمة إزالة التلوث السريع</li>
            </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">دراسات حالة من المشاريع السعودية الكبرى</h2>

      <div class="space-y-6 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
            <h3 class="text-xl font-bold">مشروع نيوم: مستقبل الأمن التقني</h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-4">التقنيات المطبقة:</h4>
                <div class="space-y-3">
                  <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h5 class="font-bold text-green-900 mb-2">الذكاء الاصطناعي المدمج</h5>
                    <p class="text-green-800 text-sm">أزياء ذكية مزودة بأنظمة AI لتحليل التهديدات</p>
                  </div>
                  <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h5 class="font-bold text-blue-900 mb-2">تقنيات الواقع المعزز</h5>
                    <p class="text-blue-800 text-sm">نظارات ذكية لعرض المعلومات الأمنية الحيوية</p>
                  </div>
                  <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h5 class="font-bold text-purple-900 mb-2">الاتصالات المتقدمة</h5>
                    <p class="text-purple-800 text-sm">شبكات 5G مدمجة للاتصال الفوري</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-4">النتائج المحققة:</h4>
                <div class="space-y-3">
                  <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span class="font-medium">تحسن سرعة الاستجابة:</span>
                    <span class="text-xl font-bold text-green-600">+85%</span>
                  </div>
                  <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span class="font-medium">تقليل الحوادث الأمنية:</span>
                    <span class="text-xl font-bold text-green-600">-67%</span>
                  </div>
                  <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span class="font-medium">رضا فرق الأمن:</span>
                    <span class="text-xl font-bold text-green-600">+92%</span>
                  </div>
                  <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span class="font-medium">كفاءة التشغيل:</span>
                    <span class="text-xl font-bold text-green-600">+78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
            <h3 class="text-xl font-bold">الحرمين الشريفين: معايير الأمان القصوى</h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-4">المتطلبات الخاصة:</h4>
                <ul class="text-gray-700 text-sm space-y-2">
                  <li>• مقاومة درجات الحرارة العالية</li>
                  <li>• سهولة التعرف في الزحام</li>
                  <li>• راحة قصوى للمناوبات الطويلة</li>
                  <li>• مقاومة التآكل والاهتراء</li>
            </ul>
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-4">التقنيات المطبقة:</h4>
                <ul class="text-gray-700 text-sm space-y-2">
                  <li>• أقمشة مضادة للميكروبات</li>
                  <li>• تقنيات التبريد الطبيعي</li>
                  <li>• عناصر عاكسة متقدمة</li>
                  <li>• أنظمة اتصال مدمجة</li>
            </ul>
              </div>
              <div>
                <h4 class="text-lg font-bold text-gray-900 mb-4">الإنجازات:</h4>
                <div class="space-y-2">
                  <div class="bg-green-100 text-green-800 px-3 py-2 rounded text-sm">
                    <strong>صفر حوادث</strong> مرتبطة بالزي خلال موسم الحج
                  </div>
                  <div class="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm">
                    <strong>99.8%</strong> رضا أفراد الأمن عن الراحة
                  </div>
                  <div class="bg-purple-100 text-purple-800 px-3 py-2 rounded text-sm">
                    <strong>45%</strong> تحسن في كفاءة التشغيل
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">دليل الاختيار والتطبيق العملي</h2>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">منهجية الاختيار المتكاملة</h3>
          <p class="text-purple-100">إطار شامل لاتخاذ قرارات الأزياء الأمنية المدروسة</p>
        </div>
        <div class="p-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-6">مرحلة التقييم والتحليل:</h4>
              <div class="space-y-4">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h5 class="font-bold text-blue-900 mb-2">تحليل البيئة الأمنية</h5>
                  <ul class="text-blue-800 text-sm space-y-1">
                    <li>• تقييم مستوى التهديدات</li>
                    <li>• دراسة الظروف المناخية</li>
                    <li>• تحليل طبيعة المهام</li>
                    <li>• تحديد المتطلبات التقنية</li>
            </ul>
                </div>
                
                <div class="bg-green-50 border-l-4 border-green-500 p-4">
                  <h5 class="font-bold text-green-900 mb-2">دراسة الجدوى الاقتصادية</h5>
                  <ul class="text-green-800 text-sm space-y-1">
                    <li>• تحليل التكلفة الإجمالية</li>
                    <li>• حساب العائد على الاستثمار</li>
                    <li>• تقدير تكاليف الصيانة</li>
                    <li>• مقارنة البدائل المتاحة</li>
            </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-6">مرحلة التنفيذ والتطبيق:</h4>
              <div class="space-y-4">
                <div class="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h5 class="font-bold text-orange-900 mb-2">التطبيق التدريجي</h5>
                  <ul class="text-orange-800 text-sm space-y-1">
                    <li>• اختبار العينات الأولية</li>
                    <li>• تدريب الفرق المختارة</li>
                    <li>• التقييم والتحسين</li>
                    <li>• التطبيق الشامل</li>
            </ul>
          </div>
          
                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h5 class="font-bold text-purple-900 mb-2">المراقبة والتطوير</h5>
                  <ul class="text-purple-800 text-sm space-y-1">
                    <li>• مراقبة الأداء المستمر</li>
                    <li>• جمع التغذية الراجعة</li>
                    <li>• التحديث التقني الدوري</li>
                    <li>• التحسين المستمر</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
          
      <div class="bg-gradient-to-r from-primary via-primary/90 to-accent text-white rounded-xl p-8 text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">الخلاصة الاستراتيجية</h2>
        <p class="text-lg leading-relaxed mb-6 opacity-90">
          اختيار زي الأمن والحراسة في المملكة العربية السعودية يتطلب نهجاً شاملاً يجمع بين الالتزام بالمعايير القانونية والتقنيات المتقدمة والاعتبارات العملية. الاستثمار في الأزياء الأمنية المتطورة ليس مجرد تكلفة، بل استثمار في الأمان والكفاءة والمهنية.
        </p>
        <div class="bg-white/10 rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">توصياتنا للمؤسسات الأمنية:</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمنشآت الحيوية</h4>
              <p>تقنيات متقدمة مع أعلى معايير الحماية</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمجمعات التجارية</h4>
              <p>توازن بين المهنية والراحة والتكلفة</p>
              </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للمناطق النائية</h4>
              <p>متانة عالية مع تقنيات الاتصال المتقدمة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title="معايير اختيار زي الأمن والحراسة في المملكة العربية السعودية: دليل شامل للمعايير الأمنية المتقدمة"
        excerpt="دليل شامل ومتقدم حول معايير ومواصفات اختيار زي الأمن والحراسة المناسب في المملكة العربية السعودية، مع مراعاة المتطلبات الأمنية والقانونية والمناخية والتقنيات الحديثة"
        content={content}
        category="blog"
        slug="security-uniforms-standards-saudi-arabia"
        author={author}
        publishDate="2025-02-10"
        coverImage="/images/blog/security-uniforms-standards-saudi-arabia.jpg"
        readingTime="18 دقيقة للقراءة"
        tags={["زي الأمن السعودي", "معايير الحراسة", "الأزياء الأمنية المتقدمة", "لوائح الأمن السعودي"]}
      />
    </div>
  );
} 