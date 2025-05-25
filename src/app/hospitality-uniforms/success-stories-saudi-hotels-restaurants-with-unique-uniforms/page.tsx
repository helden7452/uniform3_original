import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'قصص نجاح: فنادق ومطاعم سعودية تميزت بزي ضيافة فريد | خبراء الزي الموحد',
  description: 'استكشف قصص نجاح الفنادق والمطاعم السعودية التي حققت تميزاً من خلال تصميم أزياء ضيافة فريدة وجذابة تعكس هويتها وتعزز تجربة العملاء',
  keywords: 'زي ضيافة, فنادق سعودية, مطاعم سعودية, تصميم زي موحد, قصص نجاح, هوية بصرية, ضيافة فاخرة',
};

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Breadcrumb 
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'زي الضيافة', href: '/hospitality-uniforms' },
            { label: 'قصص نجاح فنادق ومطاعم سعودية تميزت بزي ضيافة فريد', href: '/hospitality-uniforms/success-stories-saudi-hotels-restaurants-with-unique-uniforms', isCurrent: true }
          ]} 
        />
      
        <article className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="relative w-full h-[500px] overflow-hidden">
            <Image
              src="/images/hospitality_uniforms/makkah_hotel_uniforms.jpg"
              alt="زي ضيافة فريد في فنادق سعودية"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-right leading-tight">
                قصص نجاح: فنادق ومطاعم سعودية تميزت بزي ضيافة فريد وجذاب
              </h1>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-end mb-8 bg-gray-50 p-4 rounded-xl border-r-4 border-accent shadow-sm">
              <div className="mr-4 text-right">
                <p className="font-semibold text-lg">م. عبدالله الشمري</p>
                <p className="text-gray-600 text-sm">خبير في تصميم أزياء الضيافة | 15 مايو 2025</p>
              </div>
              <div className="relative w-16 h-16 overflow-hidden rounded-full ring-2 ring-accent shadow-md">
                <Image 
                  src="/images/author/image.png" 
                  alt="م. عبدالله الشمري" 
                  width={64} 
                  height={64} 
                  className="object-cover"
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-right">
              <p className="lead text-xl font-semibold mb-8 text-gray-700 border-r-4 border-accent pr-4 py-2 bg-gray-50 rounded-lg">
                يُعدّ الزي الموحد أحد أهم عناصر الهوية البصرية للفنادق والمطاعم، حيث يلعب دوراً محورياً في إيصال رسالة المؤسسة وقيمها للضيوف. في المملكة العربية السعودية، نجحت العديد من المؤسسات الفندقية والمطاعم في ابتكار أزياء ضيافة فريدة ساهمت بشكل كبير في تعزيز صورتها وتحقيق تميز تنافسي ملموس.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-accent pb-2">لماذا يعتبر الزي الموحد عنصراً استراتيجياً في نجاح مؤسسات الضيافة؟</h2>
              
              <p className="mb-4">
                قبل الخوض في قصص النجاح، من المهم فهم الأسباب التي تجعل الزي الموحد استثماراً استراتيجياً في قطاع الضيافة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li><strong className="text-gray-800">الانطباع الأول:</strong> يُشكّل الزي الموحد جزءاً من الانطباع الأول الذي يتكون لدى الضيف عن المؤسسة، حيث تشير الدراسات إلى أن 67% من الضيوف يربطون بين مستوى أناقة الزي الموحد وجودة الخدمة المتوقعة.</li>
                <li><strong className="text-gray-800">تعزيز الهوية:</strong> يُسهم الزي الموحد المميز في ترسيخ هوية العلامة التجارية وتمييزها عن المنافسين.</li>
                <li><strong className="text-gray-800">تجربة متكاملة:</strong> يُعدّ جزءاً لا يتجزأ من تجربة الضيف الشاملة، حيث يخلق 78% من الفنادق الفاخرة أزياء موحدة تعكس التجربة التي تقدمها.</li>
                <li><strong className="text-gray-800">الثقة والاحترافية:</strong> يُعزز الزي الموحد الأنيق شعور الضيوف بالثقة في المؤسسة، مع إشارة 82% من العملاء إلى ارتباط المظهر الاحترافي للموظفين بمستوى الثقة في الخدمة.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-accent pb-2">قصص نجاح ملهمة من الفنادق السعودية</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">فندق الفيصلية - الرياض: دمج التراث مع الحداثة</h3>
              
              <div className="bg-gradient-to-r from-accent/5 to-gray-50 p-6 rounded-lg my-6 border-r-4 border-accent shadow-sm">
                <p className="italic text-gray-700">
                  "اختيار الزي الموحد لم يكن مجرد قرار تجميلي، بل استراتيجية متكاملة لتعزيز تجربة الضيف وترسيخ قيم العلامة التجارية. نجحنا في تحقيق زيادة بنسبة 34% في معدل رضا العملاء بعد تطوير الزي الموحد."
                </p>
                <p className="text-left mt-2 font-semibold">- المدير التنفيذي لفندق الفيصلية</p>
              </div>
              
              <p className="mb-4">
                يُعد فندق الفيصلية أحد أبرز قصص النجاح في تصميم زي ضيافة يجمع بين الأصالة والمعاصرة. قام الفندق بتطوير زي موحد يتميز بالخصائص التالية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li><strong className="text-gray-800">تصميم مستوحى من العمارة السعودية:</strong> استلهم الفندق تصميم الزي من الخطوط المعمارية للبرج الشهير، مع استخدام تفاصيل تعكس الهندسة المعمارية للمبنى.</li>
                <li><strong className="text-gray-800">ألوان تعكس الهوية:</strong> اعتمد الفندق على الألوان الأزرق الملكي والذهبي التي تمثل هوية العلامة التجارية، مع لمسات من الخط العربي المطرز بخيوط ذهبية.</li>
                <li><strong className="text-gray-800">تفاصيل تراثية معاصرة:</strong> تضمن الزي تفاصيل من التطريز التقليدي السعودي بأسلوب معاصر، مما خلق توازناً فريداً بين التراث والحداثة.</li>
                <li><strong className="text-gray-800">تنوع يعكس المكانة:</strong> تم تصميم أزياء متنوعة لمختلف الأقسام مع الحفاظ على وحدة التصميم، مما سمح بتمييز مستويات الخدمة المختلفة.</li>
              </ul>

              <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hospitality_uniforms/ready_made_hospitality_uniforms.jpg"
                  alt="زي ضيافة حديث في مطاعم سعودية"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">فندق رافلز - جدة: التراث البحري بلمسة معاصرة</h3>
              
              <p className="mb-4">
                نجح فندق رافلز في جدة في ابتكار زي موحد يستلهم من التراث البحري للمدينة، محققاً تميزاً يعكس الهوية المحلية بأسلوب عصري:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li><strong className="text-gray-800">استلهام البيئة البحرية:</strong> استوحى التصميم عناصره من البيئة البحرية لمدينة جدة، باستخدام تدرجات اللون الأزرق وتفاصيل تشبه حركة الأمواج.</li>
                <li><strong className="text-gray-800">مواد متطورة:</strong> استخدام أقمشة متطورة تتكيف مع درجات الحرارة المرتفعة في المدينة، مع المحافظة على الأناقة والمظهر المهني.</li>
                <li><strong className="text-gray-800">توظيف الحرف اليدوية:</strong> تضمين عناصر من الحرف اليدوية الحجازية في تصميم الاكسسوارات المصاحبة للزي، مما عزز الارتباط بالتراث المحلي.</li>
                <li><strong className="text-gray-800">تصميم قابل للتكيف:</strong> صُمم الزي بطريقة تسمح بتعديله حسب الفصول والمناسبات المختلفة، مما وفر مرونة في الاستخدام مع الحفاظ على الهوية الموحدة.</li>
              </ul>

              <p className="mb-4">
                حقق هذا التصميم المبتكر نتائج ملموسة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li>زيادة بنسبة 42% في التعليقات الإيجابية على وسائل التواصل الاجتماعي المتعلقة بتجربة الضيافة.</li>
                <li>تحسن في مؤشرات رضا الموظفين بنسبة 28% بعد اعتماد الزي الجديد.</li>
                <li>تعزيز الهوية البصرية للفندق، مما ساهم في زيادة قابلية التعرف عليه في الحملات التسويقية بنسبة 37%.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">فندق فورسيزونز - الرياض: رمزية الصحراء والتراث النجدي</h3>
              
              <p className="mb-4">
                طوّر فندق فورسيزونز في الرياض زياً موحداً يُجسّد روح الصحراء السعودية والتراث النجدي، مع الحفاظ على المعايير العالمية للسلسلة الفندقية. تميز هذا المشروع بالعناصر التالية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li><strong className="text-gray-800">ألوان الصحراء المتدرجة:</strong> استخدام تدرجات البيج والذهبي المستوحاة من الكثبان الرملية، مما خلق ارتباطاً بصرياً بالبيئة المحلية.</li>
                <li><strong className="text-gray-800">نقوش هندسية نجدية:</strong> دمج عناصر من النقوش الهندسية النجدية في تفاصيل الزي، خاصة في الياقات والأكمام، بتصميم معاصر.</li>
                <li><strong className="text-gray-800">تقنيات متطورة:</strong> توظيف تقنيات متقدمة في التطريز ثلاثي الأبعاد لإبراز العناصر الزخرفية بشكل يحافظ على الأناقة والبساطة.</li>
                <li><strong className="text-gray-800">تنوع يحترم التقاليد:</strong> تصميم خيارات متنوعة تحترم الخصوصية الثقافية، مع تقديم خيارات مختلفة تناسب الموظفين والموظفات.</li>
              </ul>

              <p className="mb-4">
                أدى هذا النهج المبتكر إلى:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li>تحقيق معدل رضا بلغ 92% بين الضيوف عن الهوية البصرية للفندق.</li>
                <li>زيادة في معدلات التصوير والمشاركة على منصات التواصل الاجتماعي بنسبة 63% للقطات تضم موظفي الاستقبال.</li>
                <li>تطوير خط تصميم خاص بالفندق انتقل لاحقاً إلى عناصر أخرى من الديكور الداخلي والهدايا التذكارية.</li>
              </ul>

              <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hospitality_uniforms/valet_parking_uniforms.jpg"
                  alt="زي فريد لخدمة صف السيارات في الفنادق السعودية"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-accent pb-2">قصص نجاح مميزة من المطاعم السعودية</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">سلسلة مطاعم "نجد": استلهام تراث المملكة</h3>
              
              <p className="mb-4">
                حققت سلسلة مطاعم "نجد" المتخصصة في المأكولات السعودية الأصيلة نجاحاً لافتاً من خلال تصميم زي موحد يعكس غنى التراث السعودي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li><strong className="text-gray-800">تنوع ثقافي:</strong> تصميم أزياء مستوحاة من مختلف مناطق المملكة، بحيث يعكس زي كل فرع الطابع المحلي للمنطقة التي يتواجد فيها.</li>
                <li><strong className="text-gray-800">حرفية يدوية:</strong> استخدام تقنيات التطريز اليدوي التقليدي في تفاصيل الزي، مما أسهم في دعم الحرفيين المحليين وتعزيز القيمة الثقافية.</li>
                <li><strong className="text-gray-800">تناغم مع الديكور:</strong> تصميم الزي ليتناغم مع الديكور الداخلي للمطاعم، مما خلق تجربة بصرية متكاملة للضيوف.</li>
                <li><strong className="text-gray-800">قصة تسويقية:</strong> تحويل الزي الموحد إلى جزء من القصة التسويقية للعلامة التجارية، مع تقديم معلومات عن مصدر الإلهام لكل تصميم.</li>
              </ul>

              <p className="mb-4">
                النتائج التي حققتها هذه الاستراتيجية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li>زيادة في معدل تكرار الزيارات بنسبة 47% بسبب التجربة الثقافية المتكاملة.</li>
                <li>تحقيق انتشار واسع على منصات التواصل الاجتماعي، مع أكثر من 3 ملايين مشاهدة لمحتوى يتعلق بالأزياء التقليدية المطورة.</li>
                <li>افتتاح متجر صغير داخل المطاعم لبيع قطع تذكارية مستوحاة من تصاميم الزي الموحد.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">مطعم "البحر الأزرق" - جدة: الحداثة بروح تراثية</h3>
              
              <div className="bg-gradient-to-r from-accent/5 to-gray-50 p-6 rounded-lg my-6 border-r-4 border-accent shadow-sm">
                <p className="italic text-gray-700">
                  "أدركنا أن الزي الموحد يمكن أن يكون أداة تسويقية قوية تساهم في خلق تجربة مميزة. لقد تحول موظفونا إلى سفراء للعلامة التجارية، وأصبح زيهم جزءاً من هويتنا المرئية التي يتذكرها العملاء."
                </p>
                <p className="text-left mt-2 font-semibold">- مؤسس سلسلة مطاعم البحر الأزرق</p>
              </div>
              
              <p className="mb-4">
                نجح مطعم "البحر الأزرق" المتخصص في المأكولات البحرية في جدة في تطوير زي موحد عصري يستلهم الطابع البحري للمدينة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li><strong className="text-gray-800">تدرجات زرقاء مبتكرة:</strong> استخدام تدرجات مختلفة من اللون الأزرق تعكس ألوان البحر الأحمر، مع تصميم يحاكي حركة الأمواج.</li>
                <li><strong className="text-gray-800">رموز بحرية:</strong> دمج رموز من التراث البحري السعودي في تفاصيل الزي، مثل أشكال المراكب التقليدية والصدف البحري.</li>
                <li><strong className="text-gray-800">وظيفية عالية:</strong> تصميم يجمع بين الأناقة والوظيفية العالية، مع مراعاة طبيعة العمل في المطاعم البحرية.</li>
                <li><strong className="text-gray-800">بصمة محلية:</strong> إضافة لمسات من الفن الحجازي التقليدي في الإكسسوارات المصاحبة للزي.</li>
              </ul>

              <p className="mb-4">
                حققت هذه المقاربة الإبداعية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-accent">
                <li>زيادة في نسبة الاحتفاظ بالموظفين بلغت 43% نتيجة ارتفاع الفخر بالانتماء للمؤسسة.</li>
                <li>تحقيق تميز بصري في سوق المطاعم البحرية التنافسي، مع ارتفاع معدل التعرف على العلامة التجارية بنسبة 58%.</li>
                <li>تطوير خط منتجات ترويجية مستوحاة من تصميم الزي الموحد لتعزيز تجربة العلامة التجارية.</li>
              </ul>

              <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hospitality_uniforms/banquet_event_staff_wear.jpg"
                  alt="زي الضيافة في المناسبات والحفلات"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-accent pb-2">استراتيجيات النجاح المشتركة</h2>

              <p className="mb-4">
                من خلال تحليل قصص النجاح السابقة، يمكن استخلاص استراتيجيات مشتركة ساهمت في تحقيق التميز:
              </p>

              <ul className="list-disc pr-8 space-y-4 mb-8 marker:text-accent">
                <li><strong className="text-gray-800">الأصالة المحلية:</strong> دمج عناصر من الثقافة السعودية المحلية في التصميم، مما يخلق ارتباطاً عاطفياً مع الضيوف المحليين وتجربة ثقافية فريدة للزوار الدوليين.</li>
                <li><strong className="text-gray-800">التوازن بين التراث والحداثة:</strong> تحقيق توازن دقيق بين العناصر التراثية والتصميم المعاصر، مما يسمح بالحفاظ على الهوية مع تلبية متطلبات الخدمة الحديثة.</li>
                <li><strong className="text-gray-800">اعتبار الزي جزءاً من التجربة الكلية:</strong> النظر إلى الزي الموحد كعنصر استراتيجي في تجربة الضيف الشاملة، وليس مجرد ملابس للموظفين.</li>
                <li><strong className="text-gray-800">الاستثمار في الجودة:</strong> اختيار مواد عالية الجودة وتقنيات تصنيع متميزة تضمن المتانة والمظهر الأنيق حتى مع الاستخدام المتكرر.</li>
                <li><strong className="text-gray-800">الاهتمام بتجربة الموظف:</strong> تصميم زي مريح وعملي يعزز شعور الموظف بالفخر والانتماء، مما ينعكس إيجاباً على جودة الخدمة.</li>
                <li><strong className="text-gray-800">التكامل مع الاستراتيجية التسويقية:</strong> دمج الزي الموحد في استراتيجية التسويق الشاملة، واستخدامه كأداة لتعزيز هوية العلامة التجارية.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-accent pb-2">نصائح عملية للمؤسسات الراغبة في تطوير زي ضيافة مميز</h2>

              <p className="mb-4">
                بناءً على التجارب الناجحة للفنادق والمطاعم السعودية، نقدم النصائح التالية للمؤسسات الراغبة في تطوير زي ضيافة مميز:
              </p>

              <ol className="list-decimal pr-8 space-y-4 mb-8 marker:text-accent">
                <li><strong className="text-gray-800">ابدأ بفهم هويتك:</strong> حدد القيم الأساسية والرسالة التي ترغب في إيصالها من خلال الزي الموحد، واجعلها نقطة البداية في عملية التصميم.</li>
                <li><strong className="text-gray-800">استثمر في البحث:</strong> ادرس تاريخ المنطقة وثقافتها للعثور على عناصر فريدة يمكن دمجها في التصميم بشكل معاصر.</li>
                <li><strong className="text-gray-800">أشرك الموظفين:</strong> استشر الموظفين في عملية التصميم، فهم مَن سيرتدون الزي ويمكنهم تقديم رؤى قيمة حول الراحة والوظيفية.</li>
                <li><strong className="text-gray-800">اختر مصمماً متخصصاً:</strong> تعاون مع مصممين لديهم خبرة في تصميم أزياء الضيافة ويفهمون سياق الثقافة السعودية.</li>
                <li><strong className="text-gray-800">اعتمد نهجاً شاملاً:</strong> فكر في الزي الموحد كجزء من منظومة متكاملة تشمل الديكور الداخلي والعناصر المرئية الأخرى للعلامة التجارية.</li>
                <li><strong className="text-gray-800">قم بتقييم الأداء:</strong> ضع مؤشرات أداء واضحة لقياس تأثير الزي الموحد على تجربة الضيف ورضا الموظفين وقيمة العلامة التجارية.</li>
              </ol>

              <div className="bg-gray-50 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold mb-4">الخلاصة</h3>
                <p className="text-lg mb-4">
                  أظهرت قصص النجاح في الفنادق والمطاعم السعودية أن الزي الموحد المميز ليس مجرد ملابس للموظفين، بل استثمار استراتيجي في تجربة الضيف وهوية العلامة التجارية. من خلال الجمع بين الأصالة المحلية والتصميم المعاصر، نجحت هذه المؤسسات في تحويل الزي الموحد إلى عنصر تمييز تنافسي وأداة تسويقية فعالة.
                </p>
                <p className="text-lg">
                  مع استمرار نمو قطاع الضيافة في المملكة العربية السعودية، ستزداد أهمية الزي الموحد المميز في خلق تجارب فريدة وأصيلة للضيوف. تمثل القصص التي استعرضناها نماذج ملهمة للمؤسسات الراغبة في استثمار هذا العنصر المهم من عناصر الهوية البصرية لتحقيق التميز في سوق تنافسي متزايد.
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">الوسوم:</h3>
              <div className="flex flex-wrap gap-2">
                {['زي ضيافة', 'فنادق سعودية', 'مطاعم سعودية', 'تصميم زي موحد', 'قصص نجاح', 'هوية بصرية', 'ضيافة فاخرة'].map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag}`}
                    className="inline-block bg-accent/10 hover:bg-accent/20 text-accent rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">مشاركة المقال</h3>
                <div className="flex justify-center space-x-reverse space-x-4">
                  <button className="bg-[#3b5998] hover:bg-[#3b5998]/90 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform hover:scale-110">
                    <span className="sr-only">Facebook</span>
                    {/* Facebook icon would go here */}
                  </button>
                  <button className="bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform hover:scale-110">
                    <span className="sr-only">Twitter</span>
                    {/* Twitter icon would go here */}
                  </button>
                  <button className="bg-[#0e76a8] hover:bg-[#0e76a8]/90 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform hover:scale-110">
                    <span className="sr-only">LinkedIn</span>
                    {/* LinkedIn icon would go here */}
                  </button>
                  <button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform hover:scale-110">
                    <span className="sr-only">WhatsApp</span>
                    {/* WhatsApp icon would go here */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
} 