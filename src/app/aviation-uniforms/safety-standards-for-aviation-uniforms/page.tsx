import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'معايير السلامة الأساسية في زي الطيران | خبراء الزي الموحد',
  description: 'تعرف على المعايير والمواصفات الضرورية لسلامة أزياء طواقم الطيران، وأهميتها في حماية الطاقم والركاب خلال الرحلات الجوية',
};

export default function SafetyStandardsForAviationUniformsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الطيران', href: '/aviation-uniforms' },
          { label: 'معايير السلامة الأساسية في زي الطيران', href: '/aviation-uniforms/safety-standards-for-aviation-uniforms', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation-uniforms/safety-standards.jpg"
            alt="معايير السلامة في زي الطيران"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <Link href="/aviation-uniforms" className="text-accent hover:underline font-medium">
              زي قطاع الطيران
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <span>{new Date().toLocaleDateString('ar-SA-u-ca-gregory', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">•</span>
              <span>14 دقيقة للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">معايير السلامة الأساسية في زي الطيران</h1>
          
          <div className="prose prose-lg max-w-none rtl">
            <p>
              يخضع زي الطيران لمجموعة صارمة من معايير السلامة التي تضمن حماية الطاقم والمساعدة في إجراءات الطوارئ. تعتبر هذه المعايير إلزامية لشركات الطيران في المملكة العربية السعودية وحول العالم، وتهدف لضمان أقصى درجات الأمان خلال الرحلات الجوية. في هذا المقال، نستعرض أهم معايير السلامة في زي الطيران وتأثيرها على تصميم الزي وخصائصه.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المعايير الأساسية لسلامة زي الطيران</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">مقاومة الحريق والحرارة</h3>
            <p>
              تُعد مقاومة الحريق أحد أهم معايير السلامة في زي الطيران، وتشمل:
            </p>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>أقمشة مقاومة للاشتعال:</strong> يجب أن تكون جميع مكونات الزي مصنوعة من أقمشة مقاومة للهب ومعالجة بمواد تؤخر الاشتعال</li>
              <li><strong>معيار FAR 25.853:</strong> الامتثال للمعيار الفيدرالي الأمريكي للطيران الذي يحدد معدل احتراق الأقمشة المستخدمة</li>
              <li><strong>تحمل الحرارة العالية:</strong> القدرة على تحمل درجات حرارة عالية دون الانصهار والالتصاق بالجلد</li>
              <li><strong>التصميم الواقي:</strong> أكمام طويلة وبناطيل لتغطية أكبر مساحة من الجسم والحماية من الحروق</li>
            </ul>
            
            <div className="bg-red-50 p-6 rounded-lg mb-6 border-r-4 border-red-500">
              <h3 className="text-red-700 mb-3">إحصائية مهمة</h3>
              <p className="mb-0 text-red-600">
                تشير الإحصائيات إلى أن الأقمشة المقاومة للحريق في زي الطيران قد أسهمت في تقليل الإصابات الناجمة عن حوادث الطائرات بنسبة تصل إلى 65% خلال العقود الثلاثة الماضية. وتشترط الهيئة العامة للطيران المدني السعودي أن تجتاز أقمشة زي الطيران فحوصات مقاومة الحريق بمعدل احتراق لا يتجاوز 2.5 سم/دقيقة تحت ظروف الاختبار المعيارية.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الرؤية والتمييز</h3>
            <p>
              تلعب الرؤية دوراً حاسماً في سلامة الطيران، وتشمل معايير الرؤية:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الألوان والتمييز</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>ألوان مميزة:</strong> استخدام ألوان تساعد في التمييز السريع لأفراد الطاقم في حالات الطوارئ</li>
              <li><strong>عناصر عاكسة:</strong> إضافة شرائط أو عناصر عاكسة للضوء لتحسين الرؤية في الظروف المظلمة</li>
              <li><strong>تباين الألوان:</strong> استخدام تباين واضح بين ألوان الزي لسهولة التمييز</li>
              <li><strong>الشارات والرتب:</strong> وضوح الشارات والرتب لتحديد المسؤوليات بسرعة</li>
              <li><strong>معايير الإضاءة:</strong> اختبار الألوان تحت ظروف إضاءة مختلفة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التصميم الوظيفي للرؤية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>القطع المتحركة:</strong> تجنب القطع التي قد تعيق الرؤية أو الحركة</li>
              <li><strong>الجيوب الواضحة:</strong> تصميم جيوب واضحة ومرئية للأدوات المهمة</li>
              <li><strong>الخطوط الإرشادية:</strong> استخدام خطوط أو أشكال ترشد العين للعناصر المهمة</li>
              <li><strong>التناسق البصري:</strong> تصميم متناسق يسهل التعرف على الطاقم</li>
              <li><strong>الوضوح في الظلام:</strong> عناصر تضمن الوضوح في ظروف الإضاءة المنخفضة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">المتانة ومقاومة التمزق</h3>
            <p>
              تتطلب بيئة الطيران أزياء فائقة المتانة:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">معايير المتانة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>قوة الشد:</strong> مقاومة عالية للشد والتمزق تحت الضغط</li>
              <li><strong>مقاومة الاحتكاك:</strong> تحمل الاحتكاك المستمر أثناء العمل</li>
              <li><strong>ثبات الخياطة:</strong> خياطة قوية ومقواة في النقاط الحرجة</li>
              <li><strong>مقاومة التآكل:</strong> مقاومة التآكل من الاستخدام المتكرر</li>
              <li><strong>اختبارات الجودة:</strong> اجتياز اختبارات صارمة للمتانة والجودة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التقوية والحماية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>تقوية المفاصل:</strong> تقوية إضافية في مناطق المفاصل والحركة</li>
              <li><strong>حماية الركب والمرفقين:</strong> حماية إضافية للمناطق المعرضة للاحتكاك</li>
              <li><strong>الحواف المقواة:</strong> تقوية حواف الجيوب والفتحات</li>
              <li><strong>مقاومة الانكماش:</strong> مقاومة الانكماش بعد الغسيل</li>
              <li><strong>ثبات الشكل:</strong> الحفاظ على الشكل الأصلي مع الاستخدام</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">معايير السلامة حسب نوع الطاقم</h4>
              <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">نوع الطاقم</th>
                      <th className="border border-gray-300 p-2 text-right">مقاومة الحريق</th>
                      <th className="border border-gray-300 p-2 text-right">الرؤية</th>
                      <th className="border border-gray-300 p-2 text-right">المتانة</th>
                      <th className="border border-gray-300 p-2 text-right">الحماية</th>
                      <th className="border border-gray-300 p-2 text-right">المرونة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-300 p-2">الطيارون</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">متوسط</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">مضيفو الطيران</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                      <td className="border border-gray-300 p-2">متوسط</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">فنيو الصيانة</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">متوسط</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 p-2">طاقم الأرض</td>
                      <td className="border border-gray-300 p-2">متوسط</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المعايير الدولية والمحلية</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">المعايير الدولية</h3>
            <p>
              تخضع أزياء الطيران لمعايير دولية صارمة:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">منظمة الطيران المدني الدولي (ICAO)</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الملحق 6:</strong> معايير تشغيل الطائرات التجارية الدولية</li>
              <li><strong>معايير السلامة:</strong> متطلبات السلامة للطاقم والركاب</li>
              <li><strong>إجراءات الطوارئ:</strong> معايير الاستجابة للطوارئ</li>
              <li><strong>التدريب المطلوب:</strong> متطلبات التدريب على استخدام المعدات</li>
              <li><strong>التحديثات الدورية:</strong> مراجعة وتحديث المعايير بانتظام</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">إدارة الطيران الفيدرالية الأمريكية (FAA)</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>FAR Part 25:</strong> معايير صلاحية الطيران للطائرات النقل</li>
              <li><strong>FAR Part 121:</strong> متطلبات تشغيل الناقلات الجوية</li>
              <li><strong>اختبارات المواد:</strong> اختبارات صارمة لمواد الطيران</li>
              <li><strong>شهادات الاعتماد:</strong> شهادات للمواد والمعدات المعتمدة</li>
              <li><strong>المراقبة المستمرة:</strong> مراقبة الامتثال للمعايير</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">المعايير السعودية</h3>
            <p>
              تطبق المملكة العربية السعودية معايير صارمة لسلامة الطيران:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الهيئة العامة للطيران المدني</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>اللوائح السعودية:</strong> لوائح محلية تتماشى مع المعايير الدولية</li>
              <li><strong>التفتيش الدوري:</strong> فحص دوري لامتثال شركات الطيران</li>
              <li><strong>الشهادات المحلية:</strong> شهادات اعتماد للمواد والمعدات</li>
              <li><strong>التدريب المحلي:</strong> برامج تدريب متخصصة للطاقم السعودي</li>
              <li><strong>التطوير المستمر:</strong> تطوير المعايير وفقاً لأفضل الممارسات</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">هيئة المواصفات والمقاييس</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المواصفات القياسية:</strong> وضع مواصفات قياسية للمواد المستخدمة</li>
              <li><strong>اختبارات الجودة:</strong> إجراء اختبارات شاملة للجودة والسلامة</li>
              <li><strong>الرقابة على الواردات:</strong> فحص المواد المستوردة للتأكد من المطابقة</li>
              <li><strong>التوعية والتثقيف:</strong> برامج توعية للمصنعين والمستخدمين</li>
              <li><strong>التحديث المستمر:</strong> تحديث المواصفات وفقاً للتطورات التقنية</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">اختبارات السلامة والجودة</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">اختبارات مقاومة الحريق</h3>
            <p>
              تخضع أقمشة زي الطيران لاختبارات صارمة:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">أنواع الاختبارات</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>اختبار الاحتراق العمودي:</strong> قياس معدل انتشار اللهب عمودياً</li>
              <li><strong>اختبار الاحتراق الأفقي:</strong> قياس معدل انتشار اللهب أفقياً</li>
              <li><strong>اختبار الحرارة الإشعاعية:</strong> مقاومة الحرارة الإشعاعية العالية</li>
              <li><strong>اختبار الدخان والغازات:</strong> قياس كمية الدخان والغازات السامة</li>
              <li><strong>اختبار التقطير:</strong> فحص تقطير المواد المنصهرة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">معايير النجاح</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>معدل الاحتراق:</strong> أقل من 2.5 سم/دقيقة</li>
              <li><strong>وقت الإطفاء الذاتي:</strong> أقل من 15 ثانية</li>
              <li><strong>طول المنطقة المحترقة:</strong> أقل من 15 سم</li>
              <li><strong>عدم التقطير:</strong> عدم تكوين قطرات مشتعلة</li>
              <li><strong>كثافة الدخان:</strong> ضمن الحدود المسموحة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">اختبارات المتانة والأداء</h3>
            <p>
              تشمل اختبارات شاملة للتأكد من الأداء:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">اختبارات الشد والتمزق</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>قوة الشد:</strong> قياس أقصى قوة تحمل قبل التمزق</li>
              <li><strong>مقاومة التمزق:</strong> مقاومة انتشار التمزق</li>
              <li><strong>قوة الخياطة:</strong> قوة تحمل الخياطة والوصلات</li>
              <li><strong>مرونة القماش:</strong> قدرة القماش على العودة لشكله الأصلي</li>
              <li><strong>مقاومة الاحتكاك:</strong> تحمل الاحتكاك المتكرر</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">اختبارات الغسيل والصيانة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>ثبات الألوان:</strong> عدم تغير الألوان مع الغسيل</li>
              <li><strong>مقاومة الانكماش:</strong> عدم تغير الأبعاد</li>
              <li><strong>احتفاظ بالخصائص:</strong> الحفاظ على خصائص مقاومة الحريق</li>
              <li><strong>سهولة التنظيف:</strong> إزالة البقع والأوساخ بسهولة</li>
              <li><strong>سرعة الجفاف:</strong> جفاف سريع بعد الغسيل</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">دراسة حالة: الخطوط السعودية</h3>
              <p className="mb-0">
                طورت الخطوط الجوية العربية السعودية نظاماً متقدماً لمعايير السلامة في أزياء الطاقم يتجاوز المتطلبات الدولية. يتضمن النظام اختبارات إضافية للمواد في الظروف الجوية القاسية للمنطقة، واستخدام تقنيات متطورة لمقاومة الحريق والحرارة. كما يشمل برنامج تدريب شامل للطاقم على استخدام المعدات الواقية والاستجابة للطوارئ. هذا النهج الشامل أدى إلى تحقيق معدلات سلامة عالية وحصول الشركة على شهادات دولية متقدمة في مجال سلامة الطيران.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">التطوير والابتكار في معايير السلامة</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التقنيات الحديثة</h3>
            <p>
              تشهد معايير السلامة تطوراً مستمراً مع التقنيات الحديثة:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المواد المتقدمة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الألياف النانوية:</strong> ألياف بخصائص محسنة للحماية والراحة</li>
              <li><strong>المواد الذكية:</strong> مواد تتفاعل مع البيئة المحيطة</li>
              <li><strong>الطلاءات الواقية:</strong> طلاءات تعزز مقاومة الحريق والمواد الكيميائية</li>
              <li><strong>الألياف المركبة:</strong> دمج عدة أنواع من الألياف للحصول على خصائص متفوقة</li>
              <li><strong>المواد القابلة للتحلل:</strong> مواد صديقة للبيئة مع الحفاظ على السلامة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">أنظمة المراقبة الذكية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>أجهزة الاستشعار:</strong> أجهزة مدمجة لمراقبة الحالة الصحية</li>
              <li><strong>أنظمة الإنذار المبكر:</strong> تنبيهات فورية في حالات الخطر</li>
              <li><strong>تتبع الموقع:</strong> أنظمة تحديد موقع أفراد الطاقم</li>
              <li><strong>مراقبة البيئة:</strong> قياس درجة الحرارة والرطوبة والغازات</li>
              <li><strong>التواصل الطارئ:</strong> أنظمة اتصال مدمجة للطوارئ</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الاتجاهات المستقبلية</h3>
            <p>
              تتجه معايير السلامة نحو مزيد من التطور:
            </p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التخصيص والتفريد</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التصميم الشخصي:</strong> أزياء مصممة خصيصاً لكل فرد</li>
              <li><strong>التكيف مع البيئة:</strong> أزياء تتكيف مع الظروف المختلفة</li>
              <li><strong>الاحتياجات الخاصة:</strong> مراعاة الاحتياجات الطبية والجسدية الخاصة</li>
              <li><strong>التفضيلات الثقافية:</strong> احترام التفضيلات الثقافية والدينية</li>
              <li><strong>التحسين المستمر:</strong> تطوير مستمر بناءً على التغذية الراجعة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الاستدامة والبيئة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المواد المستدامة:</strong> استخدام مواد صديقة للبيئة</li>
              <li><strong>إعادة التدوير:</strong> أنظمة لإعادة تدوير الأزياء المستعملة</li>
              <li><strong>تقليل النفايات:</strong> تصاميم تقلل من النفايات في الإنتاج</li>
              <li><strong>الطاقة المتجددة:</strong> استخدام الطاقة المتجددة في التصنيع</li>
              <li><strong>دورة الحياة الكاملة:</strong> تقييم التأثير البيئي لدورة الحياة الكاملة</li>
            </ul>
            
            <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
              <h3 className="text-primary mb-3">نصائح للامتثال لمعايير السلامة</h3>
              <ul className="mb-0">
                <li className="mb-2">✓ التأكد من حصول جميع المواد على الشهادات المطلوبة</li>
                <li className="mb-2">✓ إجراء اختبارات دورية للتأكد من استمرار المطابقة</li>
                <li className="mb-2">✓ تدريب الطاقم على الاستخدام الصحيح للأزياء الواقية</li>
                <li className="mb-2">✓ وضع برامج صيانة منتظمة للحفاظ على خصائص السلامة</li>
                <li className="mb-2">✓ متابعة التطورات في المعايير والتقنيات الجديدة</li>
                <li className="mb-2">✓ التعاون مع خبراء متخصصين في سلامة الطيران</li>
                <li className="mb-2">✓ توثيق جميع الإجراءات والاختبارات للمراجعة</li>
                <li className="mb-0">✓ الاستثمار في التقنيات الحديثة لتعزيز السلامة</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p>
              معايير السلامة في زي الطيران ليست مجرد متطلبات تنظيمية، بل ضرورة حيوية لحماية الأرواح وضمان سلامة الطيران. الالتزام بهذه المعايير والاستثمار في التقنيات المتقدمة يساهم في تعزيز سمعة شركات الطيران وثقة الركاب.
            </p>
            <p>
              مع التطور المستمر في التقنيات والمواد، تتطور أيضاً معايير السلامة لتواكب التحديات الجديدة وتوفر حماية أفضل. المفتاح هو التوازن بين السلامة والراحة والكفاءة، مع الحفاظ على أعلى مستويات الجودة والأداء.
            </p>
            <p>
              في خبراء الزي الموحد، نلتزم بأعلى معايير السلامة الدولية والمحلية، ونقدم حلولاً متطورة لأزياء الطيران تجمع بين السلامة القصوى والتصميم الأنيق والراحة المثلى، لدعم قطاع الطيران السعودي في تحقيق أهدافه الطموحة ضمن رؤية المملكة 2030.
            </p>
          </div>
          
          {/* Share Section */}
          <div className="mt-8 flex justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">مشاركة المقال</h3>
              <div className="flex justify-center space-x-reverse space-x-4">
                <button className="bg-[#3b5998] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                  {/* Facebook icon would go here */}
                </button>
                <button className="bg-[#1da1f2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon would go here */}
                </button>
                <button className="bg-[#0e76a8] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                  {/* LinkedIn icon would go here */}
                </button>
                <button className="bg-[#25D366] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">WhatsApp</span>
                  {/* WhatsApp icon would go here */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 