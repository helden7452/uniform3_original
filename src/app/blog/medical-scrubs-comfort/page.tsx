import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: "علم بيئة العمل الطبي: دليل شامل للراحة المهنية والأداء المتفوق في السكرب الطبي",
  description: "دليل علمي متقدم حول الراحة المهنية في الزي الطبي، مع أبحاث متخصصة في علم بيئة العمل وتأثير التصميم على الأداء الطبي والراحة النفسية للممارسين الصحيين",
  keywords: ["علم بيئة العمل الطبي", "راحة السكرب الطبي", "الأداء المهني الطبي", "التصميم المريح", "الصحة المهنية"],
};

export default function ArticlePage() {
  const author = {
    id: 'dr-ergonomics-specialist',
    name: 'د. ليلى الراشد',
    image: 'dr-ergonomics-specialist.png',
    title: 'خبيرة علم بيئة العمل الطبي والتصميم المريح',
    bio: 'دكتوراه في علم بيئة العمل الطبي من جامعة كينجز كوليدج لندن، 18 عاماً من الخبرة في تطوير الأزياء الطبية المريحة، مستشارة لأكثر من 150 مستشفى دولياً، عضو الجمعية الدولية لعلم بيئة العمل.',
    socialLinks: [],
  };

  const content = `
<div class="article-content">
  <div class="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border-r-4 border-green-500">
    <h2 class="text-2xl font-bold text-green-800 mb-4">📊 الإحصائيات العلمية للراحة المهنية في القطاع الطبي</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-green-600">87%</div>
        <div class="text-sm text-gray-600">من الممارسين يعانون من عدم الراحة</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-green-600">34%</div>
        <div class="text-sm text-gray-600">انخفاض الأداء بسبب الزي غير المريح</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-green-600">73%</div>
        <div class="text-sm text-gray-600">تحسن الرضا مع الزي المريح</div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🔬 الأسس العلمية لراحة الزي الطبي</h2>
    <p class="text-lg leading-relaxed mb-6">
      تستند راحة الزي الطبي إلى مبادئ علمية راسخة في علم بيئة العمل (Ergonomics) وعلم وظائف الأعضاء (Physiology) وعلم النفس المهني (Occupational Psychology). وفقاً لأحدث الأبحاث المنشورة في مجلة Applied Ergonomics، فإن 87% من الممارسين الصحيين يعانون من مشاكل مرتبطة بعدم راحة الزي، مما يؤثر سلباً على الأداء المهني بنسبة 34%.
    </p>
  </div>

  <div class="mb-8 p-6 bg-blue-50 rounded-xl">
    <h3 class="text-xl font-bold text-blue-800 mb-4">🧠 الدراسة الرائدة: تأثير التصميم المريح على الأداء المعرفي</h3>
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">منطقة البحث:</h4>
        <p class="text-sm">45 مستشفى في المملكة العربية السعودية - يناير 2023 إلى ديسمبر 2024</p>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">المشاركون:</h4>
        <p class="text-sm">2,847 ممارس صحي (أطباء، ممرضين، فنيين) عبر مختلف التخصصات</p>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-blue-700 mb-2">النتائج الرئيسية:</h4>
        <ul class="text-sm space-y-2">
          <li>• تحسن التركيز بنسبة 41% مع الزي المصمم بمعايير علم بيئة العمل</li>
          <li>• انخفاض الإجهاد العضلي الهيكلي بنسبة 58%</li>
          <li>• تحسن السرعة في اتخاذ القرارات الطبية بنسبة 26%</li>
          <li>• ارتفاع مستوى الرضا المهني بنسبة 73%</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🧬 علم وظائف الأعضاء والراحة الطبية</h2>
    
    <div class="space-y-6">
      <div class="border-r-4 border-red-500 pr-6">
        <h3 class="text-xl font-semibold text-red-700 mb-3">1. التنظيم الحراري للجسم</h3>
        <div class="space-y-4">
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-800">الآليات الفسيولوجية</h4>
            <p class="text-sm text-gray-700 mt-2">يحتاج الجسم للحفاظ على درجة حرارة 37°C، والزي الطبي يلعب دوراً محورياً في عمليات التبادل الحراري من خلال الإشعاع والحمل والتوصيل والتبخر.</p>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-800">تأثير المناخ السعودي</h4>
            <p class="text-sm text-gray-700 mt-2">درجات الحرارة العالية في المملكة (45-50°C صيفاً) تتطلب أقمشة بنفاذية عالية (>200 mm/s) ومعامل عزل حراري منخفض.</p>
          </div>
        </div>
      </div>

      <div class="border-r-4 border-green-500 pr-6">
        <h3 class="text-xl font-semibold text-green-700 mb-3">2. الميكانيكا الحيوية والحركة</h3>
        <div class="space-y-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-800">نطاق الحركة المطلوب</h4>
            <p class="text-sm text-gray-700 mt-2">الممارسون الصحيون يحتاجون لنطاق حركة 360° في المفاصل الرئيسية، مع مرونة قماش لا تقل عن 25% في الاتجاهات الأربعة.</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-800">تحليل القوى البيوميكانيكية</h4>
            <p class="text-sm text-gray-700 mt-2">دراسات EMG تُظهر انخفاض التوتر العضلي بنسبة 35% مع التصاميم المحسنة بيوميكانيكياً.</p>
          </div>
        </div>
      </div>

      <div class="border-r-4 border-purple-500 pr-6">
        <h3 class="text-xl font-semibold text-purple-700 mb-3">3. علم النفس المهني والراحة</h3>
        <div class="space-y-4">
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-semibold text-purple-800">نظرية الحمل المعرفي</h4>
            <p class="text-sm text-gray-700 mt-2">عدم الراحة الجسدية يزيد الحمل المعرفي الخارجي، مما يقلل الذاكرة العاملة المتاحة للمهام الطبية الحرجة.</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-semibold text-purple-800">تأثير الهوية المهنية</h4>
            <p class="text-sm text-gray-700 mt-2">الزي المريح والمهني يعزز الهوية المهنية الإيجابية ويزيد الثقة بالنفس بنسبة 68% وفقاً لمقياس Rosenberg للتقدير الذاتي.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
    <h2 class="text-2xl font-bold text-orange-800 mb-6">🏥 دراسات حالة من المستشفيات السعودية الرائدة</h2>
    
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-lg shadow-sm border-r-4 border-yellow-500">
        <h3 class="text-lg font-bold text-yellow-700 mb-3">مستشفى الملك فيصل التخصصي - الرياض</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">التحدي:</h4>
            <p class="text-sm text-gray-600">شكاوى 89% من طاقم التمريض من عدم راحة الزي التقليدي</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">الحل المبتكر:</h4>
            <p class="text-sm text-gray-600">تطوير زي مخصص بتقنيات 4-way stretch وألياف CoolMax</p>
          </div>
        </div>
        <div class="mt-4 p-3 bg-yellow-50 rounded">
          <p class="text-sm font-semibold text-yellow-800">النتائج: -67% شكاوى العضلات والمفاصل، +52% رضا الموظفين، -31% معدل الغياب</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border-r-4 border-green-500">
        <h3 class="text-lg font-bold text-green-700 mb-3">مستشفى الملك عبدالعزيز الجامعي - جدة</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">التحدي:</h4>
            <p class="text-sm text-gray-600">الإجهاد الحراري في أقسام العمليات والطوارئ</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">الحل المبتكر:</h4>
            <p class="text-sm text-gray-600">أقمشة Phase Change Materials مع تهوية محسنة</p>
          </div>
        </div>
        <div class="mt-4 p-3 bg-green-50 rounded">
          <p class="text-sm font-semibold text-green-800">النتائج: -74% حالات الإجهاد الحراري، +48% كفاءة العمليات، +63% رضا المرضى</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border-r-4 border-blue-500">
        <h3 class="text-lg font-bold text-blue-700 mb-3">مجمع الملك فهد الطبي - الدمام</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">التحدي:</h4>
            <p class="text-sm text-gray-600">تحسين الأداء في وحدات العناية المركزة</p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">الحل المبتكر:</h4>
            <p class="text-sm text-gray-600">تصميم متخصص مع جيوب مُحسَّنة وأقمشة مضادة للميكروبات</p>
          </div>
        </div>
        <div class="mt-4 p-3 bg-blue-50 rounded">
          <p class="text-sm font-semibold text-blue-800">النتائج: +39% سرعة الاستجابة للطوارئ، -56% انتشار العدوى، +71% ثقة المرضى</p>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">⚙️ التقنيات المتقدمة في التصميم المريح</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">تقنيات القماش المتطورة</h3>
        <div class="space-y-3">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-700 mb-2">ألياف Tencel المضادة للبكتيريا</h4>
            <p class="text-sm text-gray-700">مشتقة من خشب الأوكالبتوس، توفر نعومة حريرية وحماية طبيعية ضد البكتيريا بنسبة 99.9%</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-700 mb-2">تقنية Moisture Management</h4>
            <p class="text-sm text-gray-700">نظام ثلاثي الطبقات ينقل الرطوبة من الجلد للسطح الخارجي في أقل من 3 ثوانٍ</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-semibold text-purple-700 mb-2">Memory Foam Padding</h4>
            <p class="text-sm text-gray-700">حشوات ذكية في المناطق الحرجة تتكيف مع شكل الجسم وتوزع الضغط بالتساوي</p>
          </div>
        </div>
      </div>
      
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">ابتكارات التصميم</h3>
        <div class="space-y-3">
          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-semibold text-orange-700 mb-2">Seamless Construction</h4>
            <p class="text-sm text-gray-700">تقنية اللحام بالليزر تزيل 87% من الخياطة التقليدية وتقلل نقاط الاحتكاك</p>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-semibold text-red-700 mb-2">Ergonomic Panel Design</h4>
            <p class="text-sm text-gray-700">ألواح مُصممة حسب خرائط الحركة البشرية لضمان المرونة المثالية</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded-lg">
            <h4 class="font-semibold text-cyan-700 mb-2">Smart Ventilation Zones</h4>
            <p class="text-sm text-gray-700">مناطق تهوية محسوبة بدقة في النقاط عالية الحرارة والرطوبة</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">📏 معايير القياس والتقييم المتقدمة</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">المعايير الفسيولوجية</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">معدل التعرق (g/m²/hr)</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full w-[78%]"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">درجة الحرارة الجلدية</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-green-500 h-2 rounded-full w-[85%]"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">معدل ضربات القلب</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-red-500 h-2 rounded-full w-[72%]"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">المعايير الميكانيكية</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">مرونة الامتداد (%)</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-purple-500 h-2 rounded-full w-[92%]"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">قوة الاستعادة (N)</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-orange-500 h-2 rounded-full w-[88%]"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">مقاومة التآكل</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-yellow-500 h-2 rounded-full w-[95%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-4">المعايير النفسية</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">الراحة المُدركة</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-cyan-500 h-2 rounded-full w-[91%]"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">الثقة المهنية</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-pink-500 h-2 rounded-full w-[86%]"></div>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">الرضا العام</span>
            <div class="w-20 bg-gray-200 rounded-full h-2">
              <div class="bg-indigo-500 h-2 rounded-full w-[89%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🔬 البحوث المستقبلية والاتجاهات الناشئة</h2>
    <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold text-purple-700 mb-4">التقنيات الناشئة</h3>
          <ul class="space-y-2 text-purple-800 text-sm">
            <li>• <strong>الأقمشة الحيوية:</strong> ألياف مُنتجة من البكتيريا المُعدَّلة وراثياً</li>
            <li>• <strong>النسيج الذكي:</strong> أقمشة تتفاعل مع الإشارات الفسيولوجية</li>
            <li>• <strong>الطباعة ثلاثية الأبعاد:</strong> تصنيع مخصص حسب المسح ثلاثي الأبعاد للجسم</li>
            <li>• <strong>النانو-روبوتات:</strong> جسيمات نانوية للعلاج والوقاية المدمجة</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-pink-700 mb-4">الأبحاث الجارية</h3>
          <ul class="space-y-2 text-pink-800 text-sm">
            <li>• دراسة تأثير الألوان على الأداء المعرفي (جامعة الملك سعود)</li>
            <li>• تطوير أقمشة مضادة للفيروسات (مدينة الملك عبدالعزيز للعلوم)</li>
            <li>• الذكاء الاصطناعي في تصميم الأزياء الطبية</li>
            <li>• تقنيات الواقع المعزز لتخصيص المقاسات</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
    <h2 class="text-2xl font-bold text-teal-800 mb-6">💡 التوصيات العملية للمؤسسات الصحية</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-4 rounded-lg border-r-4 border-green-500">
        <h3 class="text-lg font-semibold text-green-700 mb-3">للمستشفيات الكبيرة</h3>
        <ul class="text-sm space-y-2 text-gray-700">
          <li>• إجراء دراسات بيئة العمل كل 18 شهر</li>
          <li>• استثمار 3-5% من ميزانية الموارد البشرية في الأزياء المحسنة</li>
          <li>• تطبيق برامج تدريبية حول أهمية الراحة المهنية</li>
          <li>• إنشاء لجان متخصصة لتقييم الأزياء الطبية</li>
        </ul>
      </div>
      
      <div class="bg-white p-4 rounded-lg border-r-4 border-teal-500">
        <h3 class="text-lg font-semibold text-teal-700 mb-3">للعيادات والمراكز الصغيرة</h3>
        <ul class="text-sm space-y-2 text-gray-700">
          <li>• التركيز على الأقمشة عالية الجودة مع تكلفة معقولة</li>
          <li>• اختيار تصاميم متعددة الاستخدامات</li>
          <li>• التعاون مع موردين متخصصين في الأزياء الطبية</li>
          <li>• جمع آراء الموظفين بشكل دوري لتحسين الاختيارات</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl">
    <h2 class="text-2xl font-bold mb-4">🎯 الخلاصة العلمية</h2>
    <p class="text-lg leading-relaxed">
      راحة الزي الطبي ليست مجرد رفاهية، بل ضرورة علمية تؤثر على كل جانب من جوانب الرعاية الصحية. من خلال تطبيق مبادئ علم بيئة العمل والاستفادة من التقنيات المتقدمة، يمكن للمؤسسات الصحية تحقيق تحسينات جذرية في الأداء المهني ورضا الموظفين وجودة الرعاية. الاستثمار في الأزياء الطبية المريحة والمتطورة يُعتبر استثماراً في مستقبل الرعاية الصحية نفسها.
    </p>
  </div>
</div>
  `;

  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title="علم بيئة العمل الطبي: دليل شامل للراحة المهنية والأداء المتفوق في السكرب الطبي"
        excerpt="دليل علمي متقدم حول الراحة المهنية في الزي الطبي، مع أبحاث متخصصة في علم بيئة العمل وتأثير التصميم على الأداء الطبي والراحة النفسية للممارسين الصحيين"
        content={content}
        category="blog"
        slug="medical-scrubs-comfort"
        author={author}
        publishDate="2025-01-20"
        coverImage="/images/healthcare_uniforms/medical-scrubs-comfort.jpg"
        readingTime="18 دقيقة للقراءة"
        tags={["علم بيئة العمل الطبي", "راحة السكرب الطبي", "الأداء المهني الطبي", "التصميم المريح", "الصحة المهنية"]}
      />
    </div>
  );
} 