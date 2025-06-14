import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'تاريخ وتطور أزياء الخطوط الجوية السعودية: رحلة عبر الزمن | خبراء الزي الموحد',
  description: 'استكشف التاريخ الغني لتطور أزياء الخطوط الجوية العربية السعودية من التأسيس حتى رؤية 2030، وكيف عكست الهوية السعودية عبر العقود',
};

export default function HistoryEvolutionSaudiAirlinesUniformsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي قطاع الطيران', href: '/aviation-uniforms' },
          { label: 'تاريخ وتطور أزياء الخطوط السعودية', href: '/aviation-uniforms/history-evolution-saudi-airlines-uniforms', isCurrent: true }
        ]} 
      />
      
      <article className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
        <div className="relative h-[400px] w-full">
          <Image
            src="/images/aviation-uniforms/saudi-airlines-history.jpg"
            alt="تاريخ وتطور أزياء الخطوط الجوية السعودية"
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
              <span>19 دقيقة للقراءة</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">تاريخ وتطور أزياء الخطوط الجوية السعودية: رحلة عبر الزمن</h1>
          
          <div className="prose prose-lg max-w-none rtl">
            <p>
              تُعتبر الخطوط الجوية العربية السعودية رمزاً للطيران في المنطقة العربية، وقد شهدت أزياء طاقمها تطوراً مذهلاً عبر أكثر من سبعة عقود من التاريخ. هذا التطور لم يكن مجرد تغيير في الأزياء، بل انعكاساً لتطور المملكة نفسها، من دولة ناشئة إلى قوة اقتصادية عالمية. في هذه الرحلة التاريخية الشاملة، نستكشف كيف عكست أزياء الخطوط السعودية الهوية الوطنية والتطور التقني والتغيرات الاجتماعية، وكيف أصبحت رمزاً للأناقة والمهنية في عالم الطيران.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">البدايات المتواضعة (1945-1960)</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التأسيس والانطلاقة</h3>
            <p>
              بدأت قصة الخطوط الجوية العربية السعودية في عام 1945:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الطائرة الأولى:</strong> طائرة DC-3 هدية من الرئيس الأمريكي روزفلت للملك عبدالعزيز</li>
              <li><strong>الطاقم الأول:</strong> طيارون أمريكيون وفنيون متخصصون</li>
              <li><strong>الأزياء البسيطة:</strong> زي عسكري مبسط باللون الكاكي</li>
              <li><strong>التأثير الغربي:</strong> تصاميم مستوحاة من الطيران العسكري الأمريكي</li>
              <li><strong>الرمزية الأولى:</strong> شعار بسيط يحمل السيفين والنخلة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التطوير المبكر (1950-1960)</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التوسع التدريجي:</strong> إضافة طرق جديدة وطائرات أكثر</li>
              <li><strong>السعودة الأولى:</strong> بداية تدريب الطيارين السعوديين</li>
              <li><strong>تطوير الزي:</strong> إدخال عناصر سعودية على التصميم</li>
              <li><strong>الألوان الوطنية:</strong> استخدام الأخضر والأبيض</li>
              <li><strong>التمييز الوظيفي:</strong> أزياء مختلفة للطيارين والمضيفين</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">لحظة تاريخية: أول رحلة دولية</h3>
              <p className="mb-0">
                في عام 1947، قامت الخطوط السعودية بأول رحلة دولية لها إلى القاهرة، وكان الطاقم يرتدي زياً مميزاً يجمع بين الطابع العسكري والهوية السعودية. هذه الرحلة مثلت نقطة تحول في تاريخ الطيران السعودي، وأصبحت أزياء الطاقم رمزاً للمملكة في الخارج. الزي كان بسيطاً لكنه أنيق، ويحمل شعار المملكة بفخر.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">عصر النمو والتوسع (1960-1980)</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الطفرة النفطية وتأثيرها</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التحديث الشامل (1960-1970)</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الطائرات النفاثة:</strong> إدخال طائرات Boeing 707 و Convair 880</li>
              <li><strong>التصميم الحديث:</strong> أزياء عصرية تواكب التطور التقني</li>
              <li><strong>الهوية البصرية:</strong> تطوير شعار جديد وألوان مميزة</li>
              <li><strong>التخصص المهني:</strong> أزياء متخصصة لكل وظيفة</li>
              <li><strong>الجودة العالية:</strong> استخدام أقمشة فاخرة ومتينة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">العصر الذهبي (1970-1980)</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التوسع الدولي:</strong> وصول إلى أوروبا وآسيا وأفريقيا</li>
              <li><strong>الأناقة الدولية:</strong> تصاميم تنافس أفضل شركات الطيران العالمية</li>
              <li><strong>التنوع الثقافي:</strong> أزياء تراعي تنوع الطاقم</li>
              <li><strong>الابتكار التقني:</strong> استخدام أقمشة متطورة ومقاومة للتجعد</li>
              <li><strong>الرمزية الوطنية:</strong> دمج عناصر من التراث السعودي</li>
                </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التطورات التصميمية المهمة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">أزياء الطيارين</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>البدلة الكلاسيكية:</strong> بدلة زرقاء داكنة بقصة أنيقة</li>
              <li><strong>القميص الأبيض:</strong> قميص أبيض مع ربطة عنق سعودية</li>
              <li><strong>الشارات المميزة:</strong> شارات الرتب والتخصص</li>
              <li><strong>القبعة الرسمية:</strong> قبعة بشعار الخطوط السعودية</li>
              <li><strong>الإكسسوارات:</strong> أزرار وشارات بالذهب</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">أزياء المضيفات</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التصميم الأنيق:</strong> فساتين وبدلات بألوان الخطوط السعودية</li>
              <li><strong>الحجاب الاختياري:</strong> خيارات متنوعة للمضيفات المحجبات</li>
              <li><strong>الأقمشة الفاخرة:</strong> استخدام أجود أنواع الأقمشة</li>
              <li><strong>التفاصيل الذهبية:</strong> لمسات ذهبية تعكس الفخامة</li>
              <li><strong>الراحة العملية:</strong> تصاميم تسمح بحرية الحركة</li>
            </ul>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">تطور الألوان عبر العقود</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">الفترة</th>
                      <th className="border border-gray-300 p-2 text-right">الألوان الأساسية</th>
                      <th className="border border-gray-300 p-2 text-right">الرمزية</th>
                      <th className="border border-gray-300 p-2 text-right">التأثير</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">1945-1960</td>
                      <td className="border border-gray-300 p-2">كاكي وبني</td>
                      <td className="border border-gray-300 p-2">الطابع العسكري</td>
                      <td className="border border-gray-300 p-2">الجدية والانضباط</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">1960-1980</td>
                      <td className="border border-gray-300 p-2">أزرق وأبيض</td>
                      <td className="border border-gray-300 p-2">السماء والسلام</td>
                      <td className="border border-gray-300 p-2">الحداثة والتطور</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">1980-2000</td>
                      <td className="border border-gray-300 p-2">أخضر وذهبي</td>
                      <td className="border border-gray-300 p-2">الهوية السعودية</td>
                      <td className="border border-gray-300 p-2">الفخامة والأصالة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">2000-2020</td>
                      <td className="border border-gray-300 p-2">أزرق وفضي</td>
                      <td className="border border-gray-300 p-2">التقنية والمستقبل</td>
                      <td className="border border-gray-300 p-2">العصرية والابتكار</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">عصر الحداثة والتطوير (1980-2000)</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التحديث التقني والتصميمي</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الثورة التقنية (1980-1990)</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الطائرات الحديثة:</strong> إدخال Boeing 747 و Airbus A300</li>
              <li><strong>الأقمشة المتطورة:</strong> استخدام ألياف صناعية متقدمة</li>
              <li><strong>التصميم الهندسي:</strong> قصات محسوبة بدقة للراحة والأناقة</li>
              <li><strong>مقاومة التجعد:</strong> أقمشة تحافظ على شكلها طوال الرحلة</li>
              <li><strong>سهولة العناية:</strong> أزياء سهلة الغسيل والكي</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التطوير المستمر (1990-2000)</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>البحث والتطوير:</strong> استثمار في تطوير الأزياء</li>
              <li><strong>التعاون الدولي:</strong> شراكة مع مصممين عالميين</li>
              <li><strong>الاختبارات الميدانية:</strong> تجربة التصاميم في ظروف حقيقية</li>
              <li><strong>ردود الفعل:</strong> الاستماع لآراء الطاقم والركاب</li>
              <li><strong>التحسين المستمر:</strong> تطوير دوري للتصاميم</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الهوية السعودية في التصميم</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">العناصر التراثية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الزخارف الإسلامية:</strong> أنماط هندسية مستوحاة من التراث</li>
              <li><strong>الخط العربي:</strong> استخدام الخط العربي في التطريز</li>
              <li><strong>الألوان التراثية:</strong> ألوان مستوحاة من البيئة السعودية</li>
              <li><strong>الرموز الوطنية:</strong> السيفان والنخلة في التصميم</li>
              <li><strong>التوازن الثقافي:</strong> مزج بين الأصالة والحداثة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التكيف مع المناخ</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الأقمشة الخفيفة:</strong> مواد تناسب المناخ الحار</li>
              <li><strong>التهوية المحسنة:</strong> تصاميم تسمح بتدفق الهواء</li>
              <li><strong>الألوان الفاتحة:</strong> تقليل امتصاص الحرارة</li>
              <li><strong>الراحة الحرارية:</strong> أقمشة تنظم درجة الحرارة</li>
              <li><strong>المقاومة للرطوبة:</strong> حماية من الرطوبة العالية</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">العصر الرقمي والعولمة (2000-2020)</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التحول الرقمي</h3>
            <p>
              شهدت هذه الفترة تحولاً جذرياً في صناعة الطيران:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التصميم بالحاسوب:</strong> استخدام برامج متقدمة للتصميم</li>
              <li><strong>المحاكاة الافتراضية:</strong> اختبار التصاميم رقمياً</li>
              <li><strong>التخصيص الرقمي:</strong> تفصيل حسب مقاسات دقيقة</li>
              <li><strong>إدارة المخزون:</strong> أنظمة ذكية لإدارة الأزياء</li>
              <li><strong>التتبع الإلكتروني:</strong> متابعة دورة حياة كل قطعة</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">المعايير العالمية</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الجودة والسلامة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>معايير ICAO:</strong> الامتثال للمعايير الدولية</li>
              <li><strong>مقاومة الحريق:</strong> أقمشة تلبي أعلى معايير السلامة</li>
              <li><strong>الاختبارات الصارمة:</strong> فحوصات شاملة للجودة</li>
              <li><strong>الشهادات الدولية:</strong> اعتمادات من جهات عالمية</li>
              <li><strong>التحديث المستمر:</strong> مواكبة أحدث المعايير</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">الاستدامة البيئية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المواد المستدامة:</strong> استخدام مواد صديقة للبيئة</li>
              <li><strong>إعادة التدوير:</strong> برامج لإعادة تدوير الأزياء القديمة</li>
              <li><strong>تقليل النفايات:</strong> تصاميم تقلل من الهدر</li>
              <li><strong>الإنتاج الأخضر:</strong> عمليات إنتاج نظيفة</li>
              <li><strong>دورة الحياة:</strong> تصميم للاستخدام طويل المدى</li>
            </ul>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-primary mb-3">إنجاز مميز: جائزة أفضل زي طيران</h3>
              <p className="mb-0">
                في عام 2015، حصلت الخطوط الجوية العربية السعودية على جائزة "أفضل زي طيران في الشرق الأوسط" من مجلة Skytrax العالمية. هذا التكريم جاء تقديراً للتطوير المستمر في تصميم الأزياء والجمع المتميز بين الأناقة والوظيفية والهوية الثقافية. الزي الفائز كان يجمع بين التقنيات الحديثة والتصميم الأنيق والعناصر التراثية السعودية.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">عصر رؤية 2030 والتحول الجذري (2020-الحاضر)</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التحول الاستراتيجي</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">رؤية 2030 وتأثيرها</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الهوية الجديدة:</strong> تصميم يعكس رؤية المملكة المستقبلية</li>
              <li><strong>التقنيات الذكية:</strong> دمج التكنولوجيا في الأزياء</li>
              <li><strong>الاستدامة الشاملة:</strong> التزام كامل بالاستدامة البيئية</li>
              <li><strong>التنوع والشمولية:</strong> أزياء تناسب جميع أفراد الطاقم</li>
              <li><strong>الابتكار المستمر:</strong> استثمار في البحث والتطوير</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التطوير الحديث</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الأقمشة الذكية:</strong> مواد تتفاعل مع البيئة</li>
              <li><strong>التصميم المعياري:</strong> قطع قابلة للتبديل والتخصيص</li>
              <li><strong>الراحة المتقدمة:</strong> تقنيات جديدة لتحسين الراحة</li>
              <li><strong>الأمان المحسن:</strong> ميزات سلامة إضافية</li>
              <li><strong>التفاعل الرقمي:</strong> عناصر رقمية مدمجة</li>
                </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الابتكارات الحديثة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التقنيات المدمجة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>أجهزة الاستشعار:</strong> مراقبة الصحة والأداء</li>
              <li><strong>الشاشات المرنة:</strong> عرض المعلومات على الزي</li>
              <li><strong>التواصل اللاسلكي:</strong> أنظمة اتصال متطورة</li>
              <li><strong>الإضاءة الذكية:</strong> إضاءة LED مدمجة</li>
              <li><strong>التحكم الصوتي:</strong> تشغيل الوظائف بالصوت</li>
                </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">المواد المتطورة</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>النانو تكنولوجي:</strong> خصائص محسنة على المستوى الجزيئي</li>
              <li><strong>الألياف الحيوية:</strong> مواد من مصادر طبيعية متجددة</li>
              <li><strong>التنظيف الذاتي:</strong> أقمشة تنظف نفسها</li>
              <li><strong>مقاومة البكتيريا:</strong> حماية طبيعية من الميكروبات</li>
              <li><strong>التكيف الحراري:</strong> تنظيم درجة الحرارة تلقائياً</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">التأثير الثقافي والاجتماعي</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الرمزية الوطنية</h3>
            <p>
              أصبحت أزياء الخطوط السعودية رمزاً للهوية الوطنية:
            </p>
            
            <ul className="list-disc pr-6 mb-4">
              <li><strong>السفراء الطائرون:</strong> الطاقم كممثلين للمملكة</li>
              <li><strong>الصورة الإيجابية:</strong> تعزيز صورة السعودية عالمياً</li>
              <li><strong>الفخر الوطني:</strong> مصدر اعتزاز للمواطنين</li>
              <li><strong>التراث المعاصر:</strong> حفظ التراث بشكل عصري</li>
              <li><strong>الهوية البصرية:</strong> تمييز فوري للخطوط السعودية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التأثير على الصناعة</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المعايير الإقليمية:</strong> وضع معايير للمنطقة</li>
              <li><strong>الابتكار الرائد:</strong> قيادة الابتكار في المنطقة</li>
              <li><strong>التدريب والتطوير:</strong> برامج تدريب متقدمة</li>
              <li><strong>الشراكات الدولية:</strong> تعاون مع خبراء عالميين</li>
              <li><strong>نقل المعرفة:</strong> مشاركة الخبرات مع الآخرين</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">التحديات والإنجازات</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">التحديات المواجهة</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التحديات التقنية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>المناخ القاسي:</strong> التكيف مع الحرارة والرطوبة</li>
              <li><strong>المعايير الصارمة:</strong> الامتثال للمعايير الدولية</li>
              <li><strong>التطوير المستمر:</strong> مواكبة التقنيات الجديدة</li>
              <li><strong>التكلفة العالية:</strong> موازنة الجودة مع التكلفة</li>
              <li><strong>التعقيد التقني:</strong> دمج تقنيات متعددة</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">التحديات الثقافية</h4>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التوازن الثقافي:</strong> الموازنة بين التراث والحداثة</li>
              <li><strong>التنوع في الطاقم:</strong> تلبية احتياجات متنوعة</li>
              <li><strong>التغيير التدريجي:</strong> إدارة التغيير بحكمة</li>
              <li><strong>التوقعات العالية:</strong> تلبية توقعات الركاب</li>
              <li><strong>المنافسة الدولية:</strong> التميز في بيئة تنافسية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الإنجازات المحققة</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الريادة الإقليمية:</strong> مكانة رائدة في المنطقة</li>
              <li><strong>الجوائز الدولية:</strong> تقدير عالمي للتميز</li>
              <li><strong>الابتكار المستمر:</strong> تطوير حلول مبتكرة</li>
              <li><strong>الاستدامة البيئية:</strong> التزام بالمسؤولية البيئية</li>
              <li><strong>التأثير الإيجابي:</strong> تعزيز صورة المملكة</li>
                </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">المستقبل والتطلعات</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">رؤية المستقبل</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>التقنيات الناشئة:</strong> دمج أحدث التقنيات</li>
              <li><strong>الذكاء الاصطناعي:</strong> أزياء ذكية تتعلم وتتكيف</li>
              <li><strong>الاستدامة الكاملة:</strong> أزياء صديقة للبيئة بالكامل</li>
              <li><strong>التخصيص الشامل:</strong> أزياء مخصصة لكل فرد</li>
              <li><strong>التكامل الرقمي:</strong> دمج كامل مع الأنظمة الرقمية</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">الأهداف الاستراتيجية</h3>
            <ul className="list-disc pr-6 mb-4">
              <li><strong>الريادة العالمية:</strong> أن تكون الأفضل عالمياً</li>
              <li><strong>الابتكار المستمر:</strong> قيادة الابتكار في الصناعة</li>
              <li><strong>التأثير الإيجابي:</strong> تعزيز صورة المملكة عالمياً</li>
              <li><strong>الاستدامة الشاملة:</strong> نموذج للاستدامة</li>
              <li><strong>التميز المستمر:</strong> تحسين مستمر للجودة</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">خاتمة</h2>
            <p>
              إن تاريخ تطور أزياء الخطوط الجوية العربية السعودية يعكس قصة نجاح ملهمة تجمع بين الأصالة والحداثة، بين التراث والابتكار. هذه الرحلة التي امتدت لأكثر من سبعة عقود شهدت تطوراً مستمراً ليس فقط في التصميم والتقنية، بل في فهم دور الزي كرمز ثقافي ووطني.
            </p>
            <p>
              اليوم، وبينما تتطلع المملكة إلى المستقبل من خلال رؤية 2030، تستمر الخطوط السعودية في ريادة الابتكار في مجال أزياء الطيران. هذا التطور المستمر يعكس التزام المملكة بالتميز والجودة والابتكار في جميع المجالات.
            </p>
            <p>
              في خبراء الزي الموحد، نفخر بكوننا جزءاً من هذا التاريخ العريق، ونسعى دائماً لتقديم أفضل الحلول التي تجمع بين التقنيات المتطورة والتصميم الأنيق والهوية الثقافية الأصيلة. نؤمن بأن المستقبل يحمل إمكانيات لا محدودة للابتكار والتطوير في عالم أزياء الطيران.
            </p>
          </div>
          
          {/* Share Section */}
          <div className="mt-8 flex justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">مشاركة المقال</h3>
              <div className="flex justify-center space-x-reverse space-x-4">
                <button className="bg-[#3b5998] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                </button>
                <button className="bg-[#1da1f2] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                </button>
                <button className="bg-[#0e76a8] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                </button>
                <button className="bg-[#25D366] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="sr-only">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 