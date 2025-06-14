import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: "أحدث اتجاهات الموضة في تصميم الزي الموحد المؤسسي | خبراء الزي الموحد",
  description: "استكشاف أحدث صيحات الموضة والتصميم في عالم الزي الموحد المؤسسي، مع التركيز على الابتكار والأناقة المعاصرة",
  keywords: ["اتجاهات الموضة", "تصميم الزي الموحد", "موضة مؤسسية", "تطورات التصميم", "أزياء عصرية"],
};

export default function ArticlePage() {
  const author = {
    id: 'fashion-trend-analyst',
    name: 'أ. نور الدين مصطفى',
    image: 'fashion-trend-analyst.png',
    title: 'محلل اتجاهات الموضة والتصميم المؤسسي',
    bio: 'ماجستير في تصميم الأزياء من معهد باريس للموضة، 13 عاماً من الخبرة في تحليل اتجاهات الموضة المؤسسية، مستشار للعلامات التجارية العالمية.',
    socialLinks: [],
  };

  const content = `
<div class="article-content">
  <div class="mb-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border-r-4 border-pink-500">
    <h2 class="text-2xl font-bold text-pink-800 mb-4">🎨 ثورة التصميم في عالم الأزياء المؤسسية</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-pink-600">2024</div>
        <div class="text-sm text-gray-600">عام الابتكار في التصميم المؤسسي</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-pink-600">85%</div>
        <div class="text-sm text-gray-600">من الشركات تتبنى التصاميم العصرية</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-pink-600">156%</div>
        <div class="text-sm text-gray-600">زيادة الطلب على التصاميم المبتكرة</div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🌟 تطور مفهوم الزي المؤسسي</h2>
    <p class="text-lg leading-relaxed mb-6">
      شهد عام 2024 تحولاً جذرياً في مفهوم الزي الموحد المؤسسي، حيث تجاوزت التصاميم الحدود التقليدية لتصبح تعبيراً عن الهوية المؤسسية والقيم العصرية. لم تعد الأزياء المؤسسية مجرد ملابس عمل، بل أصبحت بياناً للأناقة والابتكار يعكس روح العصر ويواكب التطلعات الحديثة. في البيئة السعودية، نشهد مزجاً فريداً بين التراث الأصيل والحداثة العالمية، مما يخلق فرصاً لا محدودة للإبداع في التصميم.
    </p>
  </div>

  <div class="mb-8 p-6 bg-yellow-50 rounded-xl">
    <h3 class="text-xl font-bold text-yellow-800 mb-4">📊 تحليل السوق العالمي للاتجاهات</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-yellow-700 mb-2">اتجاهات أوروبا الغربية</h4>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• الحد الأدنى الأنيق (Minimalist Chic)</li>
          <li>• الألوان الترابية والطبيعية</li>
          <li>• التصاميم الجندرية المحايدة</li>
          <li>• الاستدامة كأولوية تصميمية</li>
        </ul>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-yellow-700 mb-2">اتجاهات آسيا والشرق الأوسط</h4>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• دمج العناصر التراثية بطريقة عصرية</li>
          <li>• التقنيات الذكية في الأقمشة</li>
          <li>• الألوان الجريئة والمتباينة</li>
          <li>• التخصيص والأقمشة عالية الجودة</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🎯 الاتجاهات الرئيسية لعام 2024</h2>
    
    <div class="space-y-6">
      <div class="border-r-4 border-blue-500 pr-6">
        <h3 class="text-xl font-semibold text-blue-700 mb-3">1. الاستدامة الذكية (Smart Sustainability)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-2">المواد المستدامة</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>الألياف المُعاد تدويرها:</strong> من البلاستيك والنسيج القديم</li>
              <li>• <strong>الأقمشة النباتية:</strong> القنب، الخيزران، الطحالب البحرية</li>
              <li>• <strong>الصباغة الطبيعية:</strong> ألوان من النباتات والمعادن</li>
              <li>• <strong>تقنيات الإنتاج الخضراء:</strong> توفير الماء والطاقة</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-2">التصميم الدائري</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• قطع قابلة للفصل والإعادة تجميع</li>
              <li>• تصاميم متعددة الاستخدامات</li>
              <li>• برامج إعادة التدوير للأزياء القديمة</li>
              <li>• مواد قابلة للتحلل الحيوي</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-r-4 border-purple-500 pr-6">
        <h3 class="text-xl font-semibold text-purple-700 mb-3">2. التقنيات الذكية المدمجة</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-semibold text-purple-800 mb-2">الأقمشة التفاعلية</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• تغيير اللون حسب الحرارة</li>
              <li>• مؤشرات مرئية للرطوبة</li>
              <li>• حماية UV تتفاعل مع الضوء</li>
              <li>• خصائص مضادة للبكتيريا ذاتية التجديد</li>
            </ul>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-semibold text-purple-800 mb-2">التكنولوجيا القابلة للارتداء</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• أجهزة استشعار صحية مدمجة</li>
              <li>• شحن لاسلكي للأجهزة</li>
              <li>• شاشات مرنة صغيرة</li>
              <li>• نقل البيانات عبر الألياف</li>
            </ul>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-semibold text-purple-800 mb-2">التحكم البيئي</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• تنظيم درجة الحرارة تلقائياً</li>
              <li>• إدارة الرطوبة الذكية</li>
              <li>• تنقية الهواء المحيط</li>
              <li>• إطلاق العطور الطبيعية</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-r-4 border-green-500 pr-6">
        <h3 class="text-xl font-semibold text-green-700 mb-3">3. التصميم المرن والتكيفي</h3>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-800 mb-2">المرونة في الاستخدام</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul class="text-sm text-gray-700 space-y-2">
              <li>• <strong>Day-to-Night Designs:</strong> تحول من الرسمي للكاجوال</li>
              <li>• <strong>Modular Fashion:</strong> قطع قابلة للإضافة والإزالة</li>
              <li>• <strong>Size-Adaptive:</strong> مقاسات تتكيف مع تغيرات الجسم</li>
            </ul>
            <ul class="text-sm text-gray-700 space-y-2">
              <li>• <strong>Climate-Responsive:</strong> تكيف مع تغيرات الطقس</li>
              <li>• <strong>Multi-Function:</strong> استخدامات متعددة لنفس القطعة</li>
              <li>• <strong>Reversible Designs:</strong> وجهان مختلفان للقطعة الواحدة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🌈 اتجاهات الألوان والأنماط</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">لوحة الألوان العصرية</h3>
        <div class="space-y-3">
          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h4 class="font-semibold text-indigo-800 mb-2">Digital Lavender</h4>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full"></div>
              <p class="text-sm text-gray-700">لون العام لـ Pantone، يعبر عن التوازن الرقمي والهدوء</p>
            </div>
          </div>
          <div class="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <h4 class="font-semibold text-emerald-800 mb-2">Verdigris & Forest Tones</h4>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full"></div>
              <p class="text-sm text-gray-700">الألوان الترابية تعكس الاستدامة والطبيعة</p>
            </div>
          </div>
          <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 class="font-semibold text-amber-800 mb-2">Warm Terracotta</h4>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"></div>
              <p class="text-sm text-gray-700">يربط بين التراث والحداثة، مثالي للبيئة السعودية</p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">الأنماط والطباعة</h3>
        <div class="space-y-3">
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-blue-800 mb-2">الأنماط الهندسية المبسطة</h4>
            <p class="text-sm text-gray-700">خطوط نظيفة وأشكال هندسية بسيطة تعكس الاحترافية</p>
          </div>
          <div class="bg-rose-50 p-4 rounded-lg border border-rose-200">
            <h4 class="font-semibold text-rose-800 mb-2">التطريز الرقمي</h4>
            <p class="text-sm text-gray-700">تفاصيل دقيقة مُنتجة بتقنيات رقمية متقدمة</p>
          </div>
          <div class="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <h4 class="font-semibold text-teal-800 mb-2">العناصر التراثية المعاصرة</h4>
            <p class="text-sm text-gray-700">دمج أنماط تراثية بطريقة عصرية ومبسطة</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
    <h2 class="text-2xl font-bold text-orange-800 mb-6">👥 اتجاهات التصميم حسب الجنس والجيل</h2>
    
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-lg shadow-sm border-r-4 border-orange-500">
        <h3 class="text-lg font-bold text-orange-700 mb-3">التصميم الشامل والجندري المحايد</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">الملامح الأساسية:</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• قصات تناسب جميع أشكال الجسم</li>
              <li>• ألوان محايدة ومريحة للجميع</li>
              <li>• تصاميم قابلة للتخصيص حسب التفضيل</li>
              <li>• راحة في الحركة والأداء</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">التطبيق العملي:</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• مجموعة موحدة بخيارات متعددة للتخصيص</li>
              <li>• نفس الأقمشة والألوان للجميع</li>
              <li>• إكسسوارات اختيارية للتمييز</li>
              <li>• مرونة في تطبيق السياسات</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border-r-4 border-red-500">
        <h3 class="text-lg font-bold text-red-700 mb-3">تلبية احتياجات الأجيال المختلفة</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-red-50 p-3 rounded-lg">
            <h4 class="font-semibold text-red-800 mb-1">الجيل Z (مواليد 1997-2012)</h4>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• ألوان جريئة ومميزة</li>
              <li>• تقنيات ذكية مدمجة</li>
              <li>• تعبير عن الشخصية</li>
              <li>• اهتمام بالاستدامة</li>
            </ul>
          </div>
          <div class="bg-red-50 p-3 rounded-lg">
            <h4 class="font-semibold text-red-800 mb-1">الميلينيالز (مواليد 1981-1996)</h4>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• توازن بين المهنية والراحة</li>
              <li>• جودة عالية وعملية</li>
              <li>• تصاميم عصرية كلاسيكية</li>
              <li>• قيمة مقابل السعر</li>
            </ul>
          </div>
          <div class="bg-red-50 p-3 rounded-lg">
            <h4 class="font-semibold text-red-800 mb-1">الجيل X (مواليد 1965-1980)</h4>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• أناقة كلاسيكية محافظة</li>
              <li>• جودة ومتانة عالية</li>
              <li>• ألوان هادئة ومحايدة</li>
              <li>• راحة في العمل لفترات طويلة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🏢 التطبيقات القطاعية للاتجاهات الحديثة</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">القطاعات التقليدية</h3>
        <div class="space-y-3">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">البنوك والمؤسسات المالية</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>الاتجاه:</strong> الحد الأدنى الفاخر مع لمسات تقنية</li>
              <li>• <strong>الألوان:</strong> الأزرق الداكن، الرمادي الفضي، الأبيض الناصع</li>
              <li>• <strong>المواد:</strong> أقمشة ذكية مقاومة للتجاعيد والبقع</li>
              <li>• <strong>التفاصيل:</strong> أزرار ذكية، بطانات مضادة للبكتيريا</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">المؤسسات الحكومية</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>الاتجاه:</strong> الكلاسيكية المحدثة مع عناصر تراثية</li>
              <li>• <strong>الألوان:</strong> ألوان العلم السعودي بتدرجات أنيقة</li>
              <li>• <strong>المواد:</strong> أقمشة محلية عالية الجودة</li>
              <li>• <strong>التفاصيل:</strong> شعارات مطرزة، إكسسوارات ذهبية</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">القطاعات الحديثة</h3>
        <div class="space-y-3">
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-blue-800 mb-2">شركات التكنولوجيا</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>الاتجاه:</strong> المستقبلي والتفاعلي</li>
              <li>• <strong>الألوان:</strong> ألوان جريئة متغيرة، أضواء LED مدمجة</li>
              <li>• <strong>المواد:</strong> أقمشة تفاعلية، مواد إعادة التدوير</li>
              <li>• <strong>التفاصيل:</strong> جيوب ذكية، شحن لاسلكي مدمج</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 class="font-semibold text-green-800 mb-2">الشركات الناشئة</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>الاتجاه:</strong> الكاجوال الأنيق والمرن</li>
              <li>• <strong>الألوان:</strong> لوحة ألوان العلامة التجارية</li>
              <li>• <strong>المواد:</strong> أقمشة مختلطة مريحة ومقاومة</li>
              <li>• <strong>التفاصيل:</strong> تصاميم قابلة للتخصيص والتعديل</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
    <h2 class="text-2xl font-bold text-purple-800 mb-6">🔮 اتجاهات المستقبل القريب (2025-2026)</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-4 rounded-lg border-r-4 border-purple-500">
        <h3 class="text-lg font-semibold text-purple-700 mb-3">الذكاء الاصطناعي في التصميم</h3>
        <ul class="text-sm space-y-2 text-gray-700">
          <li>• تصاميم مُولدة بواسطة AI</li>
          <li>• تخصيص تلقائي حسب الشخصية</li>
          <li>• تنبؤ بالاحتياجات المستقبلية</li>
          <li>• أنماط فريدة لكل شركة</li>
        </ul>
      </div>

      <div class="bg-white p-4 rounded-lg border-r-4 border-indigo-500">
        <h3 class="text-lg font-semibold text-indigo-700 mb-3">التفاعل مع البيئة</h3>
        <ul class="text-sm space-y-2 text-gray-700">
          <li>• أقمشة تتفاعل مع جودة الهواء</li>
          <li>• تنقية الهواء المحيط تلقائياً</li>
          <li>• مؤشرات صحية مرئية</li>
          <li>• تكيف مع الإضاءة المحيطة</li>
        </ul>
      </div>

      <div class="bg-white p-4 rounded-lg border-r-4 border-blue-500">
        <h3 class="text-lg font-semibold text-blue-700 mb-3">الواقع المعزز في التصميم</h3>
        <ul class="text-sm space-y-2 text-gray-700">
          <li>• تجربة الأزياء افتراضياً</li>
          <li>• تعديل الألوان في الوقت الفعلي</li>
          <li>• عروض تفاعلية للتصاميم</li>
          <li>• تخصيص فوري حسب الطلب</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">💡 نصائح التطبيق للشركات السعودية</h2>
    
    <div class="space-y-6">
      <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
        <h3 class="text-lg font-bold text-teal-800 mb-4">خطة التطبيق التدريجي</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-white p-3 rounded-lg text-center">
            <h4 class="font-semibold text-teal-700 mb-2">المرحلة 1</h4>
            <p class="text-sm text-gray-600">تحليل الاحتياجات والاتجاهات</p>
          </div>
          <div class="bg-white p-3 rounded-lg text-center">
            <h4 class="font-semibold text-teal-700 mb-2">المرحلة 2</h4>
            <p class="text-sm text-gray-600">تطوير التصاميم الأولية</p>
          </div>
          <div class="bg-white p-3 rounded-lg text-center">
            <h4 class="font-semibold text-teal-700 mb-2">المرحلة 3</h4>
            <p class="text-sm text-gray-600">التجريب مع مجموعة محدودة</p>
          </div>
          <div class="bg-white p-3 rounded-lg text-center">
            <h4 class="font-semibold text-teal-700 mb-2">المرحلة 4</h4>
            <p class="text-sm text-gray-600">التطبيق الشامل والتطوير</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
        <h3 class="text-lg font-bold text-amber-800 mb-4">اعتبارات خاصة بالسوق السعودي</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-amber-700 mb-2">التوافق الثقافي</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• احترام القيم الإسلامية والتقاليد السعودية</li>
              <li>• تصاميم محتشمة ومناسبة لبيئة العمل</li>
              <li>• مرونة في التطبيق للمناطق المختلفة</li>
              <li>• دمج العناصر التراثية بذوق عالي</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-amber-700 mb-2">التكيف المناخي</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• أقمشة مناسبة للمناخ الحار والجاف</li>
              <li>• ألوان فاتحة تعكس أشعة الشمس</li>
              <li>• تصاميم تسمح بالتهوية الطبيعية</li>
              <li>• مقاومة للغبار والرمال</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl">
    <h2 class="text-2xl font-bold mb-4">🎯 الخلاصة المستقبلية</h2>
    <p class="text-lg leading-relaxed">
      مستقبل الأزياء المؤسسية يتجه نحو التكامل بين التقنية والاستدامة والجمالية، مع احترام التنوع الثقافي والاحتياجات الفردية. الشركات السعودية التي تستطيع دمج الاتجاهات العالمية مع الهوية المحلية ستكون في المقدمة. الاستثمار في التصاميم المبتكرة ليس مجرد تطوير للمظهر، بل استراتيجية شاملة لبناء هوية مؤسسية قوية تعكس رؤية 2030 وتطلعات المملكة نحو المستقبل.
    </p>
  </div>
</div>
  `;

  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title="أحدث اتجاهات الموضة في تصميم الزي الموحد المؤسسي"
        excerpt="استكشاف أحدث صيحات الموضة والتصميم في عالم الزي الموحد المؤسسي، مع التركيز على الابتكار والأناقة المعاصرة"
        content={content}
        category="corporate-uniforms"
        slug="latest-fashion-trends-in-corporate-uniform-design"
        author={author}
        publishDate="2024-11-15"
        coverImage="/images/corporate-uniforms/fashion-trends.jpg"
        readingTime="16 دقيقة للقراءة"
        tags={["اتجاهات الموضة", "تصميم الزي الموحد", "موضة مؤسسية", "تطورات التصميم", "أزياء عصرية"]}
      />
    </div>
  );
} 