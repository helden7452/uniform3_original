import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تأثير الزي الطبي الموحد على تنظيم العمل وروح الفريق في المستشفيات',
  description: 'استعراض شامل لتأثير الزي الطبي الموحد على كفاءة تنظيم العمل وتعزيز روح الفريق في المستشفيات والمراكز الصحية السعودية، مع التركيز على النواحي التنظيمية والنفسية.',
  keywords: 'الزي الطبي الموحد، تنظيم العمل، روح الفريق، المستشفيات السعودية، الكفاءة الطبية، بيئة العمل الصحية'
}

const breadcrumbs = [
  { label: 'الرئيسية', href: '/' },
  { label: 'زي القطاع الصحي', href: '/healthcare-uniforms' },
  { label: 'تأثير الزي الطبي على تنظيم العمل', href: '/healthcare-uniforms/impact-on-organization-team-spirit', isCurrent: true }
]

export default function ImpactOnOrganizationTeamSpirit() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/healthcare_uniforms.jpg"
            alt="فريق طبي بزي موحد يعمل بروح الفريق الواحد"
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

          <h1 className="text-4xl font-bold mb-6">تأثير الزي الطبي الموحد على تنظيم العمل وروح الفريق في المستشفيات</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            يشكل الزي الطبي الموحد عنصراً أساسياً في المنظومة الصحية، يتجاوز دوره الوظيفي البديهي المتمثل في توفير ملابس عملية للعاملين في القطاع الصحي. فبعيداً عن الجوانب العملية المتعلقة بالنظافة والوقاية من العدوى، يمتلك الزي الموحد تأثيراً عميقاً على ديناميكيات العمل وروح الفريق وكفاءة تقديم الخدمات الصحية.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-8">
            يستكشف هذا المقال الأبعاد التنظيمية والنفسية والاجتماعية للزي الطبي الموحد في المستشفيات والمراكز الصحية السعودية، مع توضيح كيف يمكن استثمار هذا العنصر البسيط في تعزيز بيئة عمل أكثر انسجاماً وإنتاجية.
          </p>
          </div>
          
        {/* Organizational Dimensions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">الأبعاد التنظيمية للزي الطبي الموحد</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">كيف يساهم الزي الموحد في تنظيم العمل وتحسين الكفاءة؟</h3>
            <p className="text-gray-700 mb-6">
              يؤدي الزي الطبي الموحد وظائف تنظيمية متعددة تنعكس على كفاءة وفعالية العمل في المؤسسات الصحية:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">التمييز الوظيفي الفوري:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>تمييز سريع للتخصصات المختلفة من خلال ألوان أو تصاميم محددة</li>
                  <li>تحديد المسؤوليات والصلاحيات بشكل مرئي واضح</li>
                  <li>تسهيل التعرف على مستوى الخبرة والتسلسل الإداري</li>
                  <li>توفير الوقت في تحديد الشخص المناسب للمهمة المناسبة</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">تحسين تدفق العمل:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>تقليل الوقت المهدر في البحث عن الأشخاص المناسبين</li>
                  <li>تسريع عمليات التواصل والتنسيق بين الأقسام</li>
                  <li>تحسين الاستجابة في حالات الطوارئ</li>
                  <li>تقليل الأخطاء الناتجة عن سوء التواصل</li>
                </ul>
              </div>
            </div>
            </div>
            
          {/* Color Coding System */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">نظام الترميز اللوني في المستشفيات السعودية</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">اللون</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">التخصص/القسم</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">المسؤوليات الأساسية</th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">التأثير التنظيمي</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">الأبيض</td>
                    <td className="border border-gray-300 px-4 py-3">الأطباء والاستشاريين</td>
                    <td className="border border-gray-300 px-4 py-3">التشخيص والعلاج والقرارات الطبية</td>
                    <td className="border border-gray-300 px-4 py-3">سلطة طبية عليا، قرارات سريعة</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">الأزرق الفاتح</td>
                    <td className="border border-gray-300 px-4 py-3">التمريض</td>
                    <td className="border border-gray-300 px-4 py-3">الرعاية المباشرة للمرضى</td>
                    <td className="border border-gray-300 px-4 py-3">تواصل مستمر، تنسيق الرعاية</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">الأخضر</td>
                    <td className="border border-gray-300 px-4 py-3">غرف العمليات</td>
                    <td className="border border-gray-300 px-4 py-3">العمليات الجراحية</td>
                    <td className="border border-gray-300 px-4 py-3">بيئة معقمة، تركيز عالي</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">الوردي</td>
                    <td className="border border-gray-300 px-4 py-3">طب الأطفال</td>
                    <td className="border border-gray-300 px-4 py-3">رعاية الأطفال والرضع</td>
                    <td className="border border-gray-300 px-4 py-3">بيئة مريحة، تخصص دقيق</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Team Spirit Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">تأثير الزي الموحد على روح الفريق</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">الفوائد النفسية والاجتماعية</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>تعزيز الشعور بالانتماء للمؤسسة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>تقليل الفوارق الاجتماعية والاقتصادية</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>بناء الهوية المهنية المشتركة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>تحسين الثقة بالنفس والمظهر المهني</span>
                </li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">التأثير على التعاون</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>تسهيل التواصل بين الأقسام المختلفة</span>
              </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>تقليل الحواجز الهرمية غير الضرورية</span>
              </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>تعزيز روح العمل الجماعي</span>
              </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>تحسين التنسيق في المهام المشتركة</span>
              </li>
            </ul>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">دراسة حالة: مستشفى الملك فيصل التخصصي</h3>
            <p className="text-gray-700 mb-4">
              أظهرت دراسة أجريت في مستشفى الملك فيصل التخصصي بالرياض تحسناً ملحوظاً في مؤشرات الأداء التالية بعد تطبيق نظام الزي الموحد المطور:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25%</div>
                <div className="text-sm text-gray-600">تحسن في سرعة الاستجابة للطوارئ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                <div className="text-sm text-gray-600">انخفاض في أخطاء التواصل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">تحسن في رضا الموظفين</div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychological Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">التأثير النفسي للزي الموحد</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">علم النفس وراء الزي الموحد</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">تأثير "التجسيد المعرفي" (Embodied Cognition):</h4>
                <p className="text-gray-700 mb-4">
                  تشير الأبحاث النفسية إلى أن الملابس التي نرتديها تؤثر على سلوكنا وأدائنا المعرفي. في السياق الطبي:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
                  <li>يعزز الزي الطبي الشعور بالمسؤولية والجدية</li>
                  <li>يحسن التركيز والانتباه أثناء العمل</li>
                  <li>يقلل من التشتت والسلوكيات غير المهنية</li>
                  <li>يعزز الثقة في اتخاذ القرارات الطبية</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">تأثير الألوان على الحالة النفسية:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">الألوان الهادئة (الأزرق، الأخضر):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• تقليل التوتر والقلق</li>
                      <li>• تحسين التركيز</li>
                      <li>• تعزيز الشعور بالهدوء</li>
                </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">الألوان النشطة (الأحمر، البرتقالي):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• زيادة اليقظة والانتباه</li>
                      <li>• تحفيز النشاط والحيوية</li>
                      <li>• مناسبة لأقسام الطوارئ</li>
                </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">إرشادات التطبيق الفعال</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">خطوات تطبيق نظام الزي الموحد الناجح</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-orange-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">التخطيط والتصميم</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• دراسة احتياجات كل قسم وتخصص</li>
                    <li>• اختيار الألوان والتصاميم المناسبة</li>
                    <li>• مراعاة الجوانب الثقافية والدينية</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-orange-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">إشراك الموظفين</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• استطلاع آراء الفرق الطبية</li>
                    <li>• تجربة نماذج أولية</li>
                    <li>• تعديل التصاميم بناءً على التغذية الراجعة</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-orange-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">التدريب والتوعية</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• شرح أهمية الزي الموحد</li>
                    <li>• تدريب على الاستخدام الصحيح</li>
                    <li>• وضع سياسات واضحة للالتزام</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">المتابعة والتقييم</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• قياس مؤشرات الأداء</li>
                    <li>• جمع التغذية الراجعة المستمرة</li>
                    <li>• إجراء التحسينات اللازمة</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">التحديات والحلول</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-4">التحديات الشائعة</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠</span>
                  <span>مقاومة التغيير من بعض الموظفين</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠</span>
                  <span>التكاليف المالية للتطبيق</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠</span>
                  <span>صعوبة في اختيار التصاميم المناسبة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">⚠</span>
                  <span>الحاجة لصيانة وتنظيف مستمر</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">الحلول المقترحة</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>برامج توعية وتدريب شاملة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>تطبيق تدريجي بدءاً من الأقسام الرئيسية</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>إشراك الموظفين في عملية الاختيار</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>خدمات غسيل وصيانة متخصصة</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">الاتجاهات المستقبلية</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">تقنيات الزي الطبي الذكي</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">الأقمشة الذكية</h4>
                  <p className="text-sm text-gray-600">مقاومة للبكتيريا وتنظم درجة الحرارة</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">أجهزة الاستشعار</h4>
                  <p className="text-sm text-gray-600">مراقبة العلامات الحيوية للموظفين</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">التتبع الرقمي</h4>
                  <p className="text-sm text-gray-600">تحديد المواقع وتتبع الأنشطة</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">الخلاصة</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              يمثل الزي الطبي الموحد أداة قوية لتحسين تنظيم العمل وتعزيز روح الفريق في المؤسسات الصحية السعودية. من خلال التطبيق المدروس والمتدرج، يمكن للمستشفيات والمراكز الصحية تحقيق فوائد ملموسة تشمل تحسين الكفاءة التشغيلية، وتعزيز التواصل بين الفرق، وزيادة رضا الموظفين والمرضى على حد سواء.
            </p>
            <p className="text-gray-700 leading-relaxed">
              النجاح في تطبيق نظام الزي الموحد يتطلب نهجاً شاملاً يأخذ في الاعتبار الجوانب التنظيمية والنفسية والثقافية، مع التركيز على إشراك جميع أصحاب المصلحة في عملية التخطيط والتنفيذ. مع التطورات التقنية المستمرة، نتوقع أن نشهد المزيد من الابتكارات في مجال الزي الطبي الذكي الذي سيعزز من فعالية هذه الأداة التنظيمية المهمة.
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