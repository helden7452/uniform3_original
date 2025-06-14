import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: "الأقمشة المثالية للزي الموحد: التوازن بين الأناقة والراحة | خبراء الزي الموحد",
  description: "دليل شامل لاختيار أفضل الأقمشة للزي الموحد المؤسسي، مع التركيز على الجودة والراحة والأناقة في البيئة السعودية",
  keywords: ["أقمشة الزي الموحد", "أقمشة مؤسسية", "راحة الأقمشة", "جودة الأقمشة", "أقمشة أنيقة"],
};

export default function ArticlePage() {
  const author = {
    id: 'fabric-specialist',
    name: 'د. ليلى الحربي',
    image: 'fabric-specialist.png',
    title: 'خبيرة هندسة النسيج والأقمشة المتقدمة',
    bio: 'دكتوراه في هندسة النسيج من جامعة مانشستر، 19 عاماً من الخبرة في تطوير أقمشة الأزياء المؤسسية، مستشارة تقنية لأكثر من 150 شركة نسيج عالمية.',
    socialLinks: [],
  };

  const content = `
<div class="article-content">
  <div class="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-r-4 border-blue-500">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">🧵 الأقمشة والتكنولوجيا في خدمة الراحة والأناقة</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-blue-600">95%</div>
        <div class="text-sm text-gray-600">من راحة الموظف تعتمد على نوع القماش</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-blue-600">78%</div>
        <div class="text-sm text-gray-600">تحسن الانطباع المهني مع الأقمشة الراقية</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <div class="text-3xl font-bold text-blue-600">67%</div>
        <div class="text-sm text-gray-600">توفير التكاليف مع الأقمشة عالية الجودة</div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🎯 فلسفة اختيار الأقمشة المثالية</h2>
    <p class="text-lg leading-relaxed mb-6">
      اختيار القماش المناسب للزي الموحد المؤسسي يُعتبر من أهم القرارات الاستراتيجية التي تؤثر على راحة الموظفين وصورة الشركة. في البيئة السعودية، حيث المناخ الحار والتنوع الثقافي، يتطلب الأمر توازناً دقيقاً بين عوامل متعددة: الراحة الجسدية، المظهر المهني، المتانة، وسهولة العناية. هذا الدليل يستكشف أحدث التطورات في علوم النسيج وكيفية تطبيقها لتحقيق أقصى استفادة.
    </p>
  </div>

  <div class="mb-8 p-6 bg-green-50 rounded-xl">
    <h3 class="text-xl font-bold text-green-800 mb-4">🔬 علوم النسيج والتطورات الحديثة</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-green-700 mb-2">تقنيات الألياف الذكية</h4>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• ألياف مقاومة البقع والروائح</li>
          <li>• تقنيات التحكم في الحرارة والرطوبة</li>
          <li>• ألياف مضادة للبكتيريا والفطريات</li>
          <li>• تقنيات الحماية من الأشعة فوق البنفسجية</li>
        </ul>
      </div>
      <div class="bg-white p-4 rounded-lg">
        <h4 class="font-semibold text-green-700 mb-2">الاستدامة في صناعة النسيج</h4>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>• ألياف مُعاد تدويرها من البلاستيك</li>
          <li>• القطن العضوي والخيزران الطبيعي</li>
          <li>• تقنيات الصباغة الصديقة للبيئة</li>
          <li>• أقمشة قابلة للتحلل البيولوجي</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🏆 الأقمشة الطبيعية الراقية</h2>
    
    <div class="space-y-6">
      <div class="border-r-4 border-green-500 pr-6">
        <h3 class="text-xl font-semibold text-green-700 mb-3">القطن عالي الجودة</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-800 mb-2">القطن المصري طويل التيلة</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>الخصائص:</strong> نعومة استثنائية، مقاومة عالية للبلى</li>
              <li>• <strong>المزايا:</strong> تهوية ممتازة، امتصاص طبيعي للرطوبة</li>
              <li>• <strong>الاستخدامات:</strong> القمصان الرسمية، البلوزات النسائية</li>
              <li>• <strong>العناية:</strong> سهل الغسيل والكي، مقاوم للانكماش</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-semibold text-green-800 mb-2">القطن البيما الأمريكي</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>الخصائص:</strong> ألياف طويلة جداً، لون ثابت</li>
              <li>• <strong>المزايا:</strong> مقاومة ممتازة للتجاعيد</li>
              <li>• <strong>الاستخدامات:</strong> البدلات الصيفية، الأزياء التنفيذية</li>
              <li>• <strong>السعر:</strong> أعلى قليلاً لكن مع عمر أطول</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-r-4 border-blue-500 pr-6">
        <h3 class="text-xl font-semibold text-blue-700 mb-3">الصوف الفاخر والمخاليط المتقدمة</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-2">صوف المرينو</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• نعومة حريرية طبيعية</li>
              <li>• مقاوم للروائح بشكل طبيعي</li>
              <li>• تنظيم حراري ممتاز</li>
              <li>• مثالي للبدلات الشتوية الفاخرة</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-2">الكشمير المخلوط</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• فخامة لا مثيل لها</li>
              <li>• دفء استثنائي مع خفة الوزن</li>
              <li>• مناسب للمناصب التنفيذية</li>
              <li>• يتطلب عناية خاصة</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-2">خليط الصوف-الحرير</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• لمعة طبيعية أنيقة</li>
              <li>• مقاومة عالية للتجاعيد</li>
              <li>• سقوط ممتاز على الجسم</li>
              <li>• متانة استثنائية</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-r-4 border-purple-500 pr-6">
        <h3 class="text-xl font-semibold text-purple-700 mb-3">الكتان والألياف النباتية المتطورة</h3>
        <div class="bg-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-800 mb-2">الكتان الأوروبي عالي الجودة</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul class="text-sm text-gray-700 space-y-2">
              <li>• <strong>البلجيكي:</strong> الأنعم والأقوى في العالم</li>
              <li>• <strong>الأيرلندي:</strong> متوازن بين النعومة والمتانة</li>
              <li>• <strong>الفرنسي:</strong> لمسة نهائية أنيقة</li>
            </ul>
            <ul class="text-sm text-gray-700 space-y-2">
              <li>• تبريد طبيعي مثالي للمناخ الحار</li>
              <li>• مظهر كاجوال-أنيق متميز</li>
              <li>• يتحسن مع الاستخدام والغسيل</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">⚡ الأقمشة التقنية والألياف الصناعية المتقدمة</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">تقنيات الأداء المتقدم</h3>
        <div class="space-y-3">
          <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
            <h4 class="font-semibold text-indigo-800 mb-2">Coolmax® Technology</h4>
            <p class="text-sm text-gray-700">تقنية نقل الرطوبة الأسرع، تبقي الجسم جافاً وباردً لمدة أطول. مثالية للمناخ السعودي الحار.</p>
          </div>
          <div class="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <h4 class="font-semibold text-cyan-800 mb-2">Tencel™ Lyocell</h4>
            <p class="text-sm text-gray-700">ألياف من الخشب المستدام، نعومة الحرير مع قوة القطن، مضادة للبكتيريا طبيعياً.</p>
          </div>
          <div class="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <h4 class="font-semibold text-teal-800 mb-2">Modal Premium</h4>
            <p class="text-sm text-gray-700">من ألياف الزان النقية، أكثر نعومة من القطن، يحتفظ بالألوان لفترة أطول.</p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">خصائص الحماية والأمان</h3>
        <div class="space-y-3">
          <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 class="font-semibold text-orange-800 mb-2">UV Protection Fabric</h4>
            <p class="text-sm text-gray-700">حماية من الأشعة فوق البنفسجية بمعامل UPF 50+، ضرورية للعمل الخارجي في السعودية.</p>
          </div>
          <div class="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 class="font-semibold text-red-800 mb-2">مقاومة اللهب</h4>
            <p class="text-sm text-gray-700">للصناعات عالية المخاطر، أقمشة تلبي معايير NFPA و OSHA العالمية.</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 class="font-semibold text-green-800 mb-2">مقاومة البقع والسوائل</h4>
            <p class="text-sm text-gray-700">تقنيات النانو للحماية من الانسكابات، مثالية للمطاعم والمستشفيات.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl">
    <h2 class="text-2xl font-bold text-amber-800 mb-6">🏢 تطبيقات عملية حسب القطاع</h2>
    
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-lg shadow-sm border-r-4 border-amber-500">
        <h3 class="text-lg font-bold text-amber-700 mb-3">القطاع المصرفي والمالي</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">للرجال:</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• <strong>البدلات:</strong> صوف مرينو مخلوط 70% مع بوليستر 30%</li>
              <li>• <strong>القمصان:</strong> قطن مصري مع Coolmax للياقات</li>
              <li>• <strong>الأربطة:</strong> حرير طبيعي مع ألياف مقاومة البقع</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">للسيدات:</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• <strong>البدلات:</strong> كتان مخلوط مع إيلاستين للمرونة</li>
              <li>• <strong>البلوزات:</strong> Tencel مع قطن للنعومة والتنفس</li>
              <li>• <strong>الفساتين:</strong> جيرسي ممتاز مع Modal للراحة</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border-r-4 border-green-500">
        <h3 class="text-lg font-bold text-green-700 mb-3">قطاع التكنولوجيا والشركات الناشئة</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">النهج العملي:</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• أقمشة مرنة تسمح بالحركة الحرة</li>
              <li>• مواد مقاومة للتجاعيد للعمل المكثف</li>
              <li>• ألوان عملية تخفي البقع البسيطة</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 mb-2">الخيارات المفضلة:</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• قطن-بوليستر مع تقنية Wrinkle-Free</li>
              <li>• قمصان بولو من Piqué cotton</li>
              <li>• سراويل من الكتان المخلوط</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border-r-4 border-blue-500">
        <h3 class="text-lg font-bold text-blue-700 mb-3">القطاع الصحي والمستشفيات</h3>
        <div class="space-y-3">
          <h4 class="font-semibold text-gray-800 mb-2">المتطلبات الخاصة:</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• مقاومة للبكتيريا والفيروسات بشكل طبيعي</li>
            <li>• سهولة التعقيم والغسيل بدرجات حرارة عالية</li>
            <li>• راحة للعمل لفترات طويلة</li>
            <li>• ألوان تبعث على الطمأنينة (أبيض، أزرق فاتح، أخضر نعناعي)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🧪 اختبارات الجودة والمعايير الدولية</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">المعايير التقنية</h3>
        <div class="space-y-3">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">اختبارات المتانة</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>Martindale Test:</strong> مقاومة الاحتكاك (25,000+ دورة)</li>
              <li>• <strong>Pilling Resistance:</strong> مقاومة التكور (Grade 4+)</li>
              <li>• <strong>Tensile Strength:</strong> قوة الشد (50+ N/5cm)</li>
              <li>• <strong>Color Fastness:</strong> ثبات اللون (Grade 4+)</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">اختبارات الراحة</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>Air Permeability:</strong> نفاذية الهواء</li>
              <li>• <strong>Moisture Management:</strong> إدارة الرطوبة</li>
              <li>• <strong>Thermal Resistance:</strong> المقاومة الحرارية</li>
              <li>• <strong>pH Value:</strong> الحموضة المناسبة للبشرة</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">الشهادات والمعايير</h3>
        <div class="space-y-3">
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 class="font-semibold text-green-800 mb-2">الشهادات البيئية</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• OEKO-TEX Standard 100 (خالي من المواد الضارة)</li>
              <li>• GOTS (معيار النسيج العضوي العالمي)</li>
              <li>• Cradle to Cradle (الاقتصاد الدائري)</li>
              <li>• GREENGUARD (جودة الهواء الداخلي)</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 class="font-semibold text-blue-800 mb-2">معايير الجودة</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• ISO 9001 (إدارة الجودة)</li>
              <li>• ISO 14001 (الإدارة البيئية)</li>
              <li>• WRAP (مسؤولية الإنتاج)</li>
              <li>• BSCI (مبادرة التجارة الأخلاقية)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
    <h2 class="text-2xl font-bold text-purple-800 mb-6">💰 تحليل التكلفة والعائد</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-4 rounded-lg border-r-4 border-purple-500">
        <h3 class="text-lg font-semibold text-purple-700 mb-3">الاستثمار الأولي</h3>
        <ul class="text-sm space-y-2 text-gray-700">
          <li><strong>أقمشة اقتصادية:</strong> 50-100 ريال/متر</li>
          <li><strong>أقمشة متوسطة:</strong> 100-200 ريال/متر</li>
          <li><strong>أقمشة فاخرة:</strong> 200-500 ريال/متر</li>
          <li><strong>أقمشة تقنية متقدمة:</strong> 300-800 ريال/متر</li>
        </ul>
      </div>

      <div class="bg-white p-4 rounded-lg border-r-4 border-pink-500">
        <h3 class="text-lg font-semibold text-pink-700 mb-3">التكاليف طويلة المدى</h3>
        <ul class="text-sm space-y-2 text-gray-700">
          <li><strong>الغسيل والعناية:</strong> 20-40% من التكلفة الأولية سنوياً</li>
          <li><strong>الاستبدال:</strong> كل 1-3 سنوات حسب الجودة</li>
          <li><strong>التعديلات:</strong> 5-10% من التكلفة الأولية</li>
          <li><strong>التدريب:</strong> 50-100 ريال للموظف</li>
        </ul>
      </div>

      <div class="bg-white p-4 rounded-lg border-r-4 border-indigo-500">
        <h3 class="text-lg font-semibold text-indigo-700 mb-3">العوائد المتوقعة</h3>
        <ul class="text-sm space-y-2 text-gray-700">
          <li><strong>تحسن الإنتاجية:</strong> 15-30%</li>
          <li><strong>تقليل الغياب:</strong> 20-35%</li>
          <li><strong>تحسن صورة الشركة:</strong> غير قابل للقياس لكن قيّم</li>
          <li><strong>توفير على المدى الطويل:</strong> 40-60%</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-6 text-primary-800">🛠️ دليل العناية والصيانة</h2>
    
    <div class="space-y-6">
      <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl">
        <h3 class="text-lg font-bold text-teal-800 mb-4">إرشادات العناية حسب نوع القماش</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-teal-700 mb-2">الأقمشة الطبيعية</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>القطن:</strong> غسيل بماء دافئ، تجفيف طبيعي أفضل</li>
              <li>• <strong>الكتان:</strong> غسيل بارد، كي وهو رطب قليلاً</li>
              <li>• <strong>الصوف:</strong> غسيل جاف أو يدوي بماء بارد</li>
              <li>• <strong>الحرير:</strong> غسيل جاف فقط أو يدوي بحذر شديد</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-teal-700 mb-2">الأقمشة التقنية</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>Coolmax:</strong> غسيل بماء بارد، تجنب المنعم</li>
              <li>• <strong>Tencel:</strong> غسيل لطيف، تجفيف منخفض الحرارة</li>
              <li>• <strong>البوليستر المخلوط:</strong> غسيل عادي، مقاوم للتجاعيد</li>
              <li>• <strong>الأقمشة المقاومة:</strong> اتباع تعليمات خاصة للحفاظ على الخصائص</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
        <h3 class="text-lg font-bold text-orange-800 mb-4">نصائح لإطالة عمر الأقمشة</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white p-3 rounded-lg">
            <h4 class="font-semibold text-orange-700 mb-2">التنظيف الصحيح</h4>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• فرز الألوان والأقمشة</li>
              <li>• استخدام منظفات عالية الجودة</li>
              <li>• تجنب الإفراط في التحميل</li>
            </ul>
          </div>
          <div class="bg-white p-3 rounded-lg">
            <h4 class="font-semibold text-orange-700 mb-2">التخزين المناسب</h4>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• مكان جاف وجيد التهوية</li>
              <li>• شماعات مناسبة لكل نوع</li>
              <li>• حماية من أشعة الشمس المباشرة</li>
            </ul>
          </div>
          <div class="bg-white p-3 rounded-lg">
            <h4 class="font-semibold text-orange-700 mb-2">الصيانة الدورية</h4>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• فحص دوري للتلف</li>
              <li>• إصلاح فوري للمشاكل البسيطة</li>
              <li>• تناوب الاستخدام بين القطع</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl">
    <h2 class="text-2xl font-bold mb-4">🎯 خلاصة الخبراء</h2>
    <p class="text-lg leading-relaxed">
      اختيار الأقمشة المثالية للزي الموحد المؤسسي يتطلب نظرة شمولية تجمع بين التقنية والجمالية والعملية. في البيئة السعودية، يُصبح التوازن بين الراحة والأناقة أكثر أهمية نظراً للمناخ الحار والتنوع الثقافي. الاستثمار في أقمشة عالية الجودة ليس مجرد تكلفة، بل استثمار طويل المدى في راحة الموظفين وصورة الشركة. المستقبل يتجه نحو الأقمشة الذكية والمستدامة، والشركات الرائدة هي التي تواكب هذه التطورات مبكراً.
    </p>
  </div>
</div>
  `;

  return (
    <div className="max-w-4xl mx-auto">
      <BlogPost
        title="الأقمشة المثالية للزي الموحد: التوازن بين الأناقة والراحة"
        excerpt="دليل شامل لاختيار أفضل الأقمشة للزي الموحد المؤسسي، مع التركيز على الجودة والراحة والأناقة في البيئة السعودية"
        content={content}
        category="corporate-uniforms"
        slug="ideal-fabrics-for-corporate-uniforms-elegance-comfort"
        author={author}
        publishDate="2024-11-20"
        coverImage="/images/corporate-uniforms/ideal-fabrics.jpg"
        readingTime="19 دقيقة للقراءة"
        tags={["أقمشة الزي الموحد", "أقمشة مؤسسية", "راحة الأقمشة", "جودة الأقمشة", "أقمشة أنيقة"]}
      />
    </div>
  );
} 