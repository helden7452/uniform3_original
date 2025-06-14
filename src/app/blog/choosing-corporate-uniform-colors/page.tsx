import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogPost from '@/components/BlogPost';
import posts from '@/data/posts';
import authors from '@/data/authors';

export const metadata: Metadata = {
  title: 'علم نفس الألوان في الزي المؤسسي: دليل استراتيجي متقدم لاختيار الألوان المثالية | خبراء الزي الموحد',
  description: 'دراسة علمية شاملة لتأثير الألوان على النفسية والإنتاجية في بيئة العمل، مع دليل استراتيجي لاختيار ألوان الزي المؤسسي المناسبة لكل صناعة وثقافة مؤسسية',
  keywords: ['علم نفس الألوان', 'ألوان الزي المؤسسي', 'تأثير الألوان على الإنتاجية', 'استراتيجية الألوان المؤسسية', 'الألوان والثقافة السعودية', 'علم الألوان التطبيقي'],
};

export default function BlogPostPage() {
  const post = posts.find((post) => post.slug === 'choosing-corporate-uniform-colors');
  
  // Find author from data, or use default if not found
  const authorData = authors.find((author) => author.id === post?.author);
  
  // Create author object in the format expected by the BlogPost component
  const author = {
    id: authorData?.id || 'sara-alqahtani',
    name: authorData?.name || 'سارة القحطاني',
    title: authorData?.title || 'خبيرة علم نفس الألوان والتصميم المؤسسي',
    image: authorData?.avatar || '/images/author/sara-alqahtani.png',
  };

  const content = `
    <div class="prose prose-lg max-w-none">
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-r-4 border-primary">
        <h2 class="text-2xl font-bold text-primary mb-4 flex items-center">
          <svg class="w-8 h-8 ml-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M11 7L9 5m-5 8h2m6-8h2"></path>
          </svg>
          قوة الألوان في تشكيل الهوية المؤسسية
        </h2>
        <p class="text-gray-700 leading-relaxed text-lg">
          الألوان ليست مجرد عناصر جمالية، بل أدوات نفسية قوية تؤثر على العقل الباطن وتشكل السلوك البشري بطرق عميقة ومعقدة. في عالم الأعمال المعاصر، تُعتبر الألوان المختارة للزي المؤسسي استراتيجية تواصل صامتة تنقل رسائل محددة عن قيم الشركة ومهنيتها وموثوقيتها.
        </p>
        <p class="text-gray-700 leading-relaxed text-lg mt-4">
          هذا الدليل العلمي المتقدم يستند إلى أحدث الأبحاث في علم النفس المعرفي وعلم الأعصاب، ليقدم للقادة والمدراء التنفيذيين فهماً عميقاً لكيفية استخدام الألوان كأداة استراتيجية لتحقيق الأهداف المؤسسية وتعزيز الأداء التنظيمي.
        </p>
      </div>

      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-12 border border-blue-200">
        <h2 class="text-2xl font-bold text-blue-900 mb-6 flex items-center">
          <svg class="w-8 h-8 ml-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          الأسس العلمية لتأثير الألوان على الدماغ البشري
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold text-blue-900 mb-4">الآليات العصبية:</h3>
            <div class="space-y-3">
              <div class="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <h4 class="font-bold text-blue-800 mb-2">المعالجة البصرية السريعة</h4>
                <p class="text-blue-700 text-sm">الدماغ يعالج الألوان في 13 ميلي ثانية، أسرع من معالجة النصوص بـ 60,000 مرة</p>
              </div>
              <div class="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <h4 class="font-bold text-blue-800 mb-2">تحفيز الهرمونات</h4>
                <p class="text-blue-700 text-sm">الألوان تؤثر على إفراز الدوبامين والسيروتونين والكورتيزول</p>
              </div>
              <div class="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                <h4 class="font-bold text-blue-800 mb-2">الذاكرة طويلة المدى</h4>
                <p class="text-blue-700 text-sm">الألوان تحسن الاستذكار بنسبة 55-78% مقارنة بالأبيض والأسود</p>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold text-blue-900 mb-4">التأثيرات النفسية المقيسة:</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span class="font-medium text-blue-800">زيادة التركيز (الأزرق)</span>
                <span class="text-xl font-bold text-green-600">+23%</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span class="font-medium text-blue-800">تحفيز الإبداع (الأخضر)</span>
                <span class="text-xl font-bold text-green-600">+41%</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span class="font-medium text-blue-800">تقليل التوتر (الألوان الهادئة)</span>
                <span class="text-xl font-bold text-green-600">-34%</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span class="font-medium text-blue-800">زيادة الثقة (الألوان الداكنة)</span>
                <span class="text-xl font-bold text-green-600">+67%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">خريطة الألوان النفسية للبيئات المؤسسية</h2>

      <div class="space-y-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
            <h3 class="text-2xl font-bold text-white flex items-center">
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ml-3">1</span>
              الأزرق: لون الثقة والاحترافية
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">التأثيرات النفسية العلمية:</h4>
                <div class="space-y-4">
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 class="font-bold text-blue-900 mb-2">تحفيز الفص الجبهي</h5>
                    <p class="text-blue-800 text-sm">يزيد من نشاط المناطق المسؤولة عن اتخاذ القرارات والتفكير المنطقي</p>
                  </div>
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 class="font-bold text-blue-900 mb-2">خفض معدل ضربات القلب</h5>
                    <p class="text-blue-800 text-sm">يقلل من التوتر ويحسن التركيز بنسبة 15-20%</p>
                  </div>
                  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 class="font-bold text-blue-900 mb-2">تعزيز الثقة المتبادلة</h5>
                    <p class="text-blue-800 text-sm">يزيد من مستوى الثقة بين الأشخاص بنسبة 42%</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">التطبيقات المؤسسية المثالية:</h4>
                <div class="space-y-4">
                  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <h5 class="text-lg font-bold text-blue-900 mb-2">القطاع المصرفي والمالي</h5>
                    <ul class="text-blue-800 text-sm space-y-1">
                      <li>• يعزز الثقة في التعاملات المالية</li>
                      <li>• يقلل من القلق المرتبط بالقرارات المالية</li>
                      <li>• يحسن من تصور الاستقرار المؤسسي</li>
                    </ul>
                  </div>
                  <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                    <h5 class="text-lg font-bold text-cyan-900 mb-2">التقنية والاستشارات</h5>
                    <ul class="text-cyan-800 text-sm space-y-1">
                      <li>• يعكس الكفاءة التقنية والابتكار</li>
                      <li>• يحسن من تصور الموثوقية</li>
                      <li>• يعزز الثقة في الحلول المقدمة</li>
                </ul>
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
              الأخضر: لون النمو والتوازن
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">تحفيز الإبداع</h4>
                <p class="text-gray-600 text-sm">يزيد من النشاط في المناطق الإبداعية بالدماغ بنسبة 41%</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">تقليل إجهاد العين</h4>
                <p class="text-gray-600 text-sm">يقلل من التعب البصري ويحسن التركيز لفترات طويلة</p>
              </div>

              <div class="text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-2">تعزيز الطاقة الإيجابية</h4>
                <p class="text-gray-600 text-sm">يحفز إفراز السيروتونين ويحسن المزاج العام</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-gray-600 to-gray-700 p-6">
            <h3 class="text-2xl font-bold text-white flex items-center">
              <span class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center ml-3">3</span>
              الرمادي: لون الحياد والاستقرار
            </h3>
          </div>
          <div class="p-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">الخصائص النفسية:</h4>
                <div class="space-y-3">
                  <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-gray-800 mb-2">الحياد العاطفي</h5>
                    <p class="text-gray-700 text-sm">يخلق بيئة متوازنة خالية من التحيز العاطفي</p>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-gray-800 mb-2">تعزيز التركيز</h5>
                    <p class="text-gray-700 text-sm">يقلل من المشتتات البصرية ويحسن الانتباه</p>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-gray-800 mb-2">الجدية المهنية</h5>
                    <p class="text-gray-700 text-sm">يعكس الاحترافية والموثوقية</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-6">الاستخدامات المثالية:</h4>
                <div class="space-y-4">
                  <div class="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-200">
                    <h5 class="text-lg font-bold text-gray-900 mb-2">البيئات التقنية</h5>
                    <p class="text-gray-700 text-sm">مثالي للمختبرات والمراكز التقنية حيث يتطلب التركيز العالي</p>
                  </div>
                  <div class="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-4 border border-slate-200">
                    <h5 class="text-lg font-bold text-slate-900 mb-2">الإدارة العليا</h5>
                    <p class="text-slate-700 text-sm">يعكس السلطة والحكمة في اتخاذ القرارات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-primary mb-8">دراسات حالة من البيئة السعودية</h2>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
            <h3 class="text-xl font-bold">البنك الأهلي السعودي: استراتيجية الأخضر والذهبي</h3>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 class="font-bold text-green-900 mb-2">الاستراتيجية اللونية:</h4>
                <ul class="text-green-800 text-sm space-y-1">
                  <li>• الأخضر الأساسي: يرمز للنمو والازدهار المالي</li>
                  <li>• الذهبي المكمل: يعكس الفخامة والثقة</li>
                  <li>• الأبيض المتوازن: يضفي النظافة والوضوح</li>
                </ul>
              </div>
              <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 class="font-bold text-blue-900 mb-2">النتائج المحققة:</h4>
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between">
                    <span>زيادة ثقة العملاء:</span>
                    <span class="font-bold text-green-600">+34%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تحسن رضا الموظفين:</span>
                    <span class="font-bold text-green-600">+28%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>زيادة التعرف على العلامة:</span>
                    <span class="font-bold text-green-600">+67%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
              </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
            <h3 class="text-xl font-bold">شركة سابك: قوة الأزرق المؤسسي</h3>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 class="font-bold text-blue-900 mb-2">فلسفة الألوان:</h4>
                <ul class="text-blue-800 text-sm space-y-1">
                  <li>• الأزرق الداكن: يعكس الثقة والاستقرار الصناعي</li>
                  <li>• الأبيض النقي: يرمز للنظافة والسلامة</li>
                  <li>• اللمسات الفضية: تعكس التقنية المتقدمة</li>
                </ul>
              </div>
              <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 class="font-bold text-green-900 mb-2">التأثير على الأداء:</h4>
                <div class="space-y-2 text-xs">
                  <div class="flex justify-between">
                    <span>تحسن الانضباط المهني:</span>
                    <span class="font-bold text-green-600">+45%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>زيادة الولاء المؤسسي:</span>
                    <span class="font-bold text-green-600">+52%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>تحسن الصورة الدولية:</span>
                    <span class="font-bold text-green-600">+73%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              </div>

      <h2 class="text-3xl font-bold text-primary mb-8">الإطار الاستراتيجي لاختيار الألوان المؤسسية</h2>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <h3 class="text-2xl font-bold mb-2">منهجية الاختيار العلمية المتقدمة</h3>
          <p class="text-purple-100">نموذج شامل لاتخاذ قرارات الألوان المؤسسية المدروسة</p>
        </div>
        <div class="p-8">
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">التحليل النفسي</h4>
              <ul class="text-gray-700 text-sm space-y-1 text-right">
                <li>• دراسة الجمهور المستهدف</li>
                <li>• تحليل السياق الثقافي</li>
                <li>• فهم التوقعات النفسية</li>
                <li>• قياس التأثيرات العاطفية</li>
              </ul>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">التطبيق الاستراتيجي</h4>
              <ul class="text-gray-700 text-sm space-y-1 text-right">
                <li>• ربط الألوان بالأهداف</li>
                <li>• تحديد التدرجات المناسبة</li>
                <li>• اختبار التوافق البصري</li>
                <li>• ضمان الاتساق المؤسسي</li>
              </ul>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 class="text-lg font-bold text-gray-900 mb-3">القياس والتطوير</h4>
              <ul class="text-gray-700 text-sm space-y-1 text-right">
                <li>• مراقبة ردود الأفعال</li>
                <li>• قياس التأثير على الأداء</li>
                <li>• تحليل البيانات النفسية</li>
                <li>• التحسين المستمر</li>
              </ul>
            </div>
          </div>
        </div>
              </div>

      <div class="bg-gradient-to-r from-primary via-primary/90 to-accent text-white rounded-xl p-8 text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">الخلاصة الاستراتيجية</h2>
        <p class="text-lg leading-relaxed mb-6 opacity-90">
          اختيار ألوان الزي المؤسسي علم دقيق يتطلب فهماً عميقاً لعلم النفس والثقافة المؤسسية والأهداف الاستراتيجية. الألوان المختارة بعناية تصبح أداة قوية لتعزيز الهوية المؤسسية وتحسين الأداء التنظيمي وبناء الثقة مع أصحاب المصلحة.
        </p>
        <div class="bg-white/10 rounded-lg p-6">
          <h3 class="text-xl font-bold mb-4">توصياتنا للقادة المؤسسيين:</h3>
          <div class="grid md:grid-cols-3 gap-4 text-sm">
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للقطاع المالي</h4>
              <p>الأزرق والرمادي لبناء الثقة والاستقرار</p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للقطاع الصحي</h4>
              <p>الأبيض والأخضر للنظافة والطمأنينة</p>
              </div>
            <div class="bg-white/20 rounded-lg p-4">
              <h4 class="font-bold mb-2">للقطاع التقني</h4>
              <p>الأزرق والفضي للابتكار والحداثة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title="علم نفس الألوان في الزي المؤسسي: دليل استراتيجي متقدم لاختيار الألوان المثالية"
        excerpt="دراسة علمية شاملة لتأثير الألوان على النفسية والإنتاجية في بيئة العمل، مع دليل استراتيجي لاختيار ألوان الزي المؤسسي المناسبة لكل صناعة وثقافة مؤسسية"
        content={content}
        category="blog"
        slug="choosing-corporate-uniform-colors"
        author={author}
        publishDate="2025-03-25"
        coverImage="/images/blog/choosing-corporate-uniform-colors.jpg"
        readingTime="16 دقيقة للقراءة"
        tags={["علم نفس الألوان", "ألوان الزي المؤسسي", "تأثير الألوان على الإنتاجية", "استراتيجية الألوان المؤسسية"]}
      />
    </div>
  );
}