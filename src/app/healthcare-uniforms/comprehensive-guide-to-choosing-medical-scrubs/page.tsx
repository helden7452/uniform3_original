import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'الدليل الشامل لاختيار الزي الطبي (سكراب) المناسب للمستشفيات والعيادات السعودية',
  description: 'دليل متكامل لمعايير اختيار الزي الطبي (سكراب) المناسب للمستشفيات والعيادات في المملكة العربية السعودية، مع نصائح للجودة والراحة والمتانة والامتثال للمعايير المحلية',
  keywords: 'الزي الطبي، سكراب طبي، المستشفيات السعودية، العيادات الطبية، معايير الجودة، الراحة المهنية'
}

const breadcrumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'زي القطاع الصحي', href: '/healthcare-uniforms' },
  { label: 'الدليل الشامل لاختيار الزي الطبي', href: '/healthcare-uniforms/comprehensive-guide-to-choosing-medical-scrubs', isCurrent: true }
]

export default function ComprehensiveGuideToChoosingMedicalScrubs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/healthcare_uniforms.jpg"
            alt="اختيار الزي الطبي المناسب للمستشفيات السعودية"
            width={1200}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-8 opacity-80"
          />
          
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-blue-200">/</span>}
                  {crumb.isCurrent ? (
                    <span className="text-blue-200">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="text-white hover:text-blue-200 transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="text-4xl font-bold mb-6">الدليل الشامل لاختيار الزي الطبي (سكراب) المناسب للمستشفيات والعيادات السعودية</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            في عالم الرعاية الصحية، يعتبر الزي الطبي أو ما يُعرف بـ "السكراب" (Scrubs) أكثر من مجرد ملابس للعمل. إنه جزء أساسي من منظومة الرعاية الصحية يجمع بين الوظائف العملية والسلامة والراحة والهوية المهنية.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-8">
            في المملكة العربية السعودية، حيث يشهد القطاع الصحي تطوراً متسارعاً ضمن رؤية 2030، أصبح اختيار الزي الطبي المناسب أمراً يستحق الاهتمام والدراسة المتأنية. يقدم هذا الدليل الشامل للمسؤولين عن المشتريات في المستشفيات والعيادات السعودية كل ما يحتاجون معرفته لاختيار زي طبي يلبي المعايير العالمية والمتطلبات المحلية.
          </p>
          </div>
          
        {/* Key Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">العوامل الأساسية لاختيار الزي الطبي المناسب</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">المعايير التي تحدد جودة السكراب الطبي</h3>
            <p className="text-gray-700 mb-6">
              عند البحث عن الزي الطبي المثالي، يجب مراعاة عدة عوامل أساسية:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">خامات الأقمشة:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>القطن الطبي عالي الجودة: يوفر راحة وتهوية ممتازة خاصة في المناخ الحار للمملكة</li>
                  <li>البوليستر المخلوط: يمنح متانة أكبر ومقاومة للتجعد والانكماش</li>
                  <li>أقمشة المايكروفايبر: خفيفة الوزن وسريعة الجفاف ومقاومة للبقع</li>
                  <li>الأقمشة المضادة للبكتيريا: توفر حماية إضافية في البيئات الطبية</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">التصميم والقطع:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>القطع المريحة التي تسمح بحرية الحركة</li>
                  <li>الجيوب العملية لحمل الأدوات الطبية الأساسية</li>
                  <li>التصاميم التي تراعي الثقافة المحلية والمعايير الدينية</li>
                  <li>الأكمام والأطوال المناسبة لمختلف التخصصات</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fabric Comparison Table */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-green-600 mb-6">مقارنة أنواع الأقمشة الطبية</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">نوع القماش</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">المزايا</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">العيوب</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">الاستخدام المثالي</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">القطن 100%</td>
                    <td className="border border-gray-300 px-4 py-3">تهوية ممتازة، راحة طبيعية، مقاوم للحساسية</td>
                    <td className="border border-gray-300 px-4 py-3">يتجعد بسهولة، قد ينكمش</td>
                    <td className="border border-gray-300 px-4 py-3">الأقسام العامة، المناخ الحار</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">القطن/البوليستر</td>
                    <td className="border border-gray-300 px-4 py-3">متوازن، سهل العناية، مقاوم للتجعد</td>
                    <td className="border border-gray-300 px-4 py-3">تهوية أقل من القطن الخالص</td>
                    <td className="border border-gray-300 px-4 py-3">الاستخدام اليومي، جميع الأقسام</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">المايكروفايبر</td>
                    <td className="border border-gray-300 px-4 py-3">خفيف، مقاوم للبقع، سريع الجفاف</td>
                    <td className="border border-gray-300 px-4 py-3">قد يحتفظ بالروائح، أقل تهوية</td>
                    <td className="border border-gray-300 px-4 py-3">غرف العمليات، الأقسام الحرجة</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">الأقمشة المضادة للميكروبات</td>
                    <td className="border border-gray-300 px-4 py-3">حماية إضافية، تقليل العدوى</td>
                    <td className="border border-gray-300 px-4 py-3">تكلفة أعلى، قد تحتاج عناية خاصة</td>
                    <td className="border border-gray-300 px-4 py-3">وحدات العناية المركزة، العزل</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Color Standards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">معايير الألوان في المستشفيات السعودية</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">الألوان التقليدية</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded mr-3"></div>
                  <span><strong>الأبيض:</strong> الأطباء والاستشاريون</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-blue-300 rounded mr-3"></div>
                  <span><strong>الأزرق الفاتح:</strong> التمريض العام</span>
              </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                  <span><strong>الأخضر:</strong> غرف العمليات</span>
              </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-pink-300 rounded mr-3"></div>
                  <span><strong>الوردي:</strong> طب الأطفال</span>
              </li>
            </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">الألوان الحديثة</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-teal-500 rounded mr-3"></div>
                  <span><strong>التيل:</strong> الأقسام التخصصية</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                  <span><strong>البنفسجي:</strong> الطب النفسي</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-gray-600 rounded mr-3"></div>
                  <span><strong>الرمادي:</strong> الخدمات المساندة</span>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                  <span><strong>الأحمر:</strong> الطوارئ والإسعاف</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">معايير الجودة والمطابقة</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">المعايير الدولية والمحلية</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">المعايير الدولية:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• معيار ISO 13485 للأجهزة الطبية</li>
                  <li>• معايير OEKO-TEX للأقمشة الآمنة</li>
                  <li>• شهادات CE للمنتجات الأوروبية</li>
                  <li>• معايير FDA الأمريكية</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">المتطلبات المحلية:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• مطابقة معايير الهيئة السعودية للمواصفات</li>
                  <li>• شهادة الجودة من وزارة الصحة</li>
                  <li>• مراعاة المعايير الثقافية والدينية</li>
                  <li>• التوافق مع لوائح السلامة المهنية</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sizing Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">دليل المقاسات والتصاميم</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">جدول المقاسات الموحد</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">المقاس</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">محيط الصدر (سم)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">محيط الخصر (سم)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">طول الكم (سم)</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">طول البنطال (سم)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">XS</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">86-91</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">71-76</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">58-60</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">100-102</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">S</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">91-96</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">76-81</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">60-62</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">102-104</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">M</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">96-101</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">81-86</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">62-64</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">104-106</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">L</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">101-106</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">86-91</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">64-66</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">106-108</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">XL</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">106-111</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">91-96</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">66-68</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">108-110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">إرشادات العناية والصيانة</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">الغسيل والتنظيف</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>الغسيل في درجة حرارة 60-75 مئوية للتعقيم</span>
              </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>استخدام مساحيق غسيل طبية معتمدة</span>
              </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>فصل الألوان لتجنب التلوث المتبادل</span>
              </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>التجفيف في درجة حرارة مناسبة</span>
              </li>
            </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">التخزين والحفظ</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>التخزين في مكان جاف ومعقم</span>
              </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>استخدام أكياس حفظ مناسبة</span>
              </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>تجنب التعرض المباشر لأشعة الشمس</span>
              </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>الفحص الدوري للتآكل والتلف</span>
              </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Budget Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">اعتبارات الميزانية والتكلفة</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">تحليل التكلفة الإجمالية للملكية</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">العوامل المؤثرة في التكلفة:</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-600 mb-2">التكلفة الأولية</h5>
                      <p className="text-sm text-gray-600">سعر الشراء، الشحن، الجمارك</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-600 mb-2">تكلفة التشغيل</h5>
                      <p className="text-sm text-gray-600">الغسيل، التعقيم، الصيانة</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-lg p-4">
                      <h5 className="font-semibold text-green-600 mb-2">العمر الافتراضي</h5>
                      <p className="text-sm text-gray-600">المتانة، الاستبدال، التجديد</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-green-900 mb-6">الخلاصة والتوصيات</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              اختيار الزي الطبي المناسب للمستشفيات والعيادات السعودية يتطلب توازناً دقيقاً بين الجودة والراحة والتكلفة والامتثال للمعايير المحلية والدولية. من خلال اتباع المعايير المذكورة في هذا الدليل، يمكن للمؤسسات الصحية ضمان توفير زي طبي يلبي احتياجات الكوادر الطبية ويساهم في تحسين جودة الرعاية الصحية.
            </p>
            <p className="text-gray-700 leading-relaxed">
              نوصي بإجراء تقييم شامل للاحتياجات، واختبار عينات من موردين متعددين، والتشاور مع الفرق الطبية قبل اتخاذ القرار النهائي. كما ننصح بوضع خطة للمراجعة الدورية وتحديث المعايير بما يتماشى مع التطورات في مجال الرعاية الصحية.
            </p>
          </div>
        </section>
          
          {/* Share Section */}
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">شارك هذا المقال</h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              فيسبوك
                </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
              تويتر
                </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
              لينكد إن
                </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
  )
} 