import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "زي طلاب وطالبات الكليات الصحية: المتطلبات والمواصفات | خبراء الزي الموحد",
  description: "دليل شامل حول متطلبات ومواصفات الزي الموحد لطلاب وطالبات الكليات الصحية في المملكة العربية السعودية، يشمل مواصفات الزي حسب التخصص ومعايير الجودة والاعتبارات العملية.",
  keywords: ["زي طلاب الطب", "يونيفورم كليات صحية", "زي طالبات التمريض", "يونيفورم كلية الطب", "معايير زي طلاب الصحة", "زي المتدربين الصحيين"]
};

const MedicalStudentsUniform = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-sm">
      <Breadcrumb 
        items={[
          { label: 'الرئيسية', href: '/' },
          { label: 'زي القطاع الصحي', href: '/healthcare-uniforms' },
          { label: 'زي طلاب وطالبات الكليات الصحية', href: '/healthcare-uniforms/medical-college-students-uniform-requirements', isCurrent: true }
        ]} 
      />
      
      <article className="prose max-w-none prose-lg prose-slate mt-8 text-right" dir="rtl">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary-600">زي طلاب وطالبات الكليات الصحية: المتطلبات والمواصفات</h1>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/healthcare_uniforms/healthcare_worker_apparel.jpg"
            alt="صورة زي طلاب الكليات الصحية - المتطلبات والمواصفات"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="introduction mb-8">
          <p className="font-semibold text-xl">
            يمثل الزي الموحد لطلاب وطالبات الكليات الصحية أكثر من مجرد موضوع شكلي، فهو يشكل جزءاً أساسياً من هويتهم المهنية منذ بداية مسيرتهم الأكاديمية. ولا يقتصر دوره على تمييز التخصصات المختلفة وتعزيز الانتماء، بل يمتد ليشمل الحماية والسلامة وتعزيز الصورة المهنية في بيئة التعليم السريري. في هذا المقال، نستعرض المتطلبات والمواصفات المعتمدة للزي الموحد في الكليات الصحية بالمملكة العربية السعودية، مع التركيز على الاعتبارات العملية والمهنية والثقافية.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">أهمية الزي الموحد لطلاب الكليات الصحية</h2>
        
        <div className="mb-8">
          <p>
            يؤدي الزي الموحد لطلاب الكليات الصحية عدة وظائف أساسية تتجاوز المظهر الخارجي:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>الهوية المهنية:</strong> يساعد الزي الموحد في غرس الهوية المهنية منذ مرحلة مبكرة من التدريب، مما يعزز الشعور بالانتماء للمهنة الصحية</li>
            <li><strong>التمييز والتعرف:</strong> يسمح بالتمييز بين التخصصات المختلفة والمستويات التعليمية في بيئة الرعاية الصحية المزدحمة</li>
            <li><strong>الحماية:</strong> يوفر حماية للطلاب من التعرض للمواد الخطرة والملوثات في بيئة المستشفى</li>
            <li><strong>الاحترافية:</strong> يعزز المظهر الاحترافي للطلاب أمام المرضى والزملاء، مما يبني الثقة في قدراتهم</li>
            <li><strong>الانضباط والمساواة:</strong> يساهم في خلق بيئة منضبطة ويقلل من التفاوت الاجتماعي بين الطلاب</li>
            <li><strong>التكيف مع بيئة العمل:</strong> يساعد الطلاب على التكيف مع متطلبات بيئة العمل الصحية قبل الانخراط الكامل فيها</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">التأثير النفسي للزي الموحد</h3>
          <p className="text-blue-800">
            وفقاً لدراسة أجريت في كلية الطب بجامعة الملك سعود، فإن ارتداء الزي الطبي المهني يؤثر إيجاباً على ثقة الطلاب بأنفسهم وأدائهم. أظهرت النتائج أن 83% من طلاب الطب يشعرون بمسؤولية أكبر عند ارتداء المعطف الأبيض، وأن 76% من الطلاب يرون أن الزي الموحد يساعدهم على تبني سلوكيات وقيم المهنة. كما وجدت الدراسة أن المرضى يميلون إلى الثقة بشكل أكبر بالطلاب الذين يرتدون زياً رسمياً مقارنة بمن يرتدون ملابس عادية.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الجهات المنظمة لمعايير زي طلاب الكليات الصحية</h2>
        
        <div className="mb-8">
          <p>
            تتعاون عدة جهات في وضع وتنظيم معايير الزي الموحد للطلاب في المجال الصحي:
          </p>
          <ul className="list-disc mr-8 mt-4 space-y-2">
            <li><strong>الجامعات والكليات الصحية:</strong> تضع كل كلية لوائح خاصة بالزي تتناسب مع برامجها وتخصصاتها</li>
            <li><strong>وزارة التعليم:</strong> تشرف على المعايير العامة للزي الجامعي بما يتوافق مع القيم المجتمعية</li>
            <li><strong>الهيئة السعودية للتخصصات الصحية:</strong> تقدم إرشادات حول الزي المهني في مرحلة التدريب السريري</li>
            <li><strong>وزارة الصحة:</strong> تضع اشتراطات للطلاب المتدربين في المنشآت الصحية التابعة لها</li>
            <li><strong>المستشفيات التعليمية:</strong> قد تفرض متطلبات إضافية للزي حسب سياساتها الداخلية</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">المتطلبات الأساسية للزي في الكليات الصحية</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">المتطلبات العامة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>البساطة والأناقة:</strong> زي بسيط وأنيق يعكس احترافية المهنة الصحية</li>
            <li><strong>النظافة:</strong> يجب أن يكون الزي نظيفاً ومكوياً بشكل دائم</li>
            <li><strong>الحشمة:</strong> تصميم محتشم يتوافق مع القيم والتقاليد الإسلامية في المملكة</li>
            <li><strong>الهوية:</strong> شارة تعريفية واضحة تحمل اسم الطالب والتخصص والمستوى الدراسي</li>
            <li><strong>الالتزام:</strong> ارتداء الزي الموحد كاملاً دون تعديلات شخصية</li>
            <li><strong>المناسبة:</strong> ملاءمة الزي لطبيعة النشاط التعليمي (محاضرات، معامل، تدريب سريري)</li>
            <li><strong>الجودة:</strong> استخدام خامات ذات جودة عالية تتحمل الاستخدام المتكرر والتعقيم</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">متطلبات خاصة بالطلاب</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>القميص/البنطال:</strong> قميص رسمي أبيض أو فاتح اللون مع بنطال رسمي داكن (كحلي أو أسود) لغير التخصصات التي لها زي محدد</li>
            <li><strong>المعطف الأبيض:</strong> معطف طبي أبيض بطول وتصميم محدد حسب المستوى الدراسي</li>
            <li><strong>الأحذية:</strong> أحذية مغلقة مريحة باللون الأسود أو البني الداكن، سهلة التنظيف وغير صاخبة</li>
            <li><strong>الشعر واللحية:</strong> يجب أن يكون الشعر قصيراً ومرتباً، واللحية (إن وجدت) مهذبة</li>
            <li><strong>الإكسسوارات:</strong> الحد الأدنى من الإكسسوارات؛ ساعة طبية ويسمح بخاتم الزواج فقط</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">متطلبات خاصة بالطالبات</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الحجاب:</strong> حجاب بلون متناسق مع الزي الموحد، مثبت بإحكام لتجنب تعارضه مع الأنشطة السريرية</li>
            <li><strong>المعطف الطبي:</strong> معطف أبيض طويل بما يتوافق مع معايير الحشمة، مع أكمام مناسبة لا تعيق العمل</li>
            <li><strong>الزي التحتي:</strong> بلوزة وبنطال أو تنورة طويلة بألوان محددة حسب التخصص، فضفاضة وغير شفافة</li>
            <li><strong>الأحذية:</strong> أحذية مغلقة مريحة باللون الأسود أو البني الداكن، بكعب منخفض أو مسطح</li>
            <li><strong>الإكسسوارات:</strong> الحد الأدنى، مع تجنب المجوهرات المتدلية أو الصاخبة</li>
            <li><strong>الماكياج:</strong> يسمح بالمكياج الخفيف البسيط غير الملفت، أو عدم وضع مكياج نهائياً</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">متطلبات الزي حسب التخصص الصحي</h2>
        
        <div className="mb-8">
          <p>
            تختلف متطلبات الزي الموحد باختلاف التخصص الصحي، وذلك لتلبية الاحتياجات العملية والمهنية لكل تخصص:
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">طلاب كلية الطب</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>السنوات الأولى:</strong> معطف أبيض قصير فوق الملابس الرسمية (قميص وبنطال للطلاب، وزي محتشم للطالبات)</li>
            <li><strong>السنوات السريرية:</strong> معطف أبيض طويل يصل إلى الركبة مع شارة تحمل اسم الطالب والجامعة والتخصص</li>
            <li><strong>أدوات:</strong> سماعة طبية، جهاز قياس ضغط الدم، مصباح فحص العين، وأدوات أخرى حسب متطلبات التدريب</li>
            <li><strong>اللون:</strong> يغلب اللون الأبيض كرمز للنظافة والنقاء في مهنة الطب</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">طلاب كلية التمريض</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الطلاب:</strong> بنطال وقميص بلون كحلي أو أزرق فاتح مع معطف أبيض في بعض الحالات</li>
            <li><strong>الطالبات:</strong> زي تمريض كامل (قميص وبنطال/تنورة طويلة) بلون محدد يميز الكلية، عادة أزرق فاتح أو كحلي</li>
            <li><strong>المميزات:</strong> جيوب عملية، أقمشة مقاومة للبقع، تصميم يسمح بسهولة الحركة</li>
            <li><strong>المرحلة التدريبية:</strong> قد يختلف اللون حسب السنة الدراسية لتمييز مستوى الطالب</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">طلاب العلوم الطبية التطبيقية</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>المختبرات الطبية:</strong> معطف مختبر أبيض طويل مع واقيات إضافية حسب طبيعة العمل المخبري</li>
            <li><strong>العلاج الطبيعي:</strong> زي رياضي عملي بألوان محددة (غالباً أزرق أو رمادي) مع شعار الكلية</li>
            <li><strong>تقنية الأشعة:</strong> زي خاص مقاوم للإشعاع في بيئة العمل، ومعطف أبيض خلال المحاضرات النظرية</li>
            <li><strong>التغذية الإكلينيكية:</strong> معطف أبيض مع زي رسمي بلون موحد حسب سياسة الكلية</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">طلاب طب الأسنان</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الزي الأساسي:</strong> معطف أبيض طويل مخصص لطب الأسنان، يتميز بتصميم عملي يناسب بيئة عيادة الأسنان</li>
            <li><strong>معدات الوقاية:</strong> نظارات واقية، قناع، قفازات، وغطاء للرأس أثناء العمل السريري</li>
            <li><strong>الأحذية:</strong> أحذية مخصصة للعيادة، مغلقة ومقاومة للانزلاق والسوائل</li>
            <li><strong>الشارات:</strong> شارات تعريفية توضح المستوى الأكاديمي والتخصص</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">طلاب الصيدلة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الدراسة النظرية:</strong> زي رسمي مع معطف أبيض قصير يحمل شعار كلية الصيدلة</li>
            <li><strong>التدريب العملي:</strong> معطف أبيض طويل خلال التدريب في المختبرات أو الصيدليات التعليمية</li>
            <li><strong>المميزات:</strong> جيوب متعددة لحمل الأدوات الصيدلانية والمذكرات</li>
            <li><strong>الألوان المميزة:</strong> قد تستخدم بعض الكليات اللون الأخضر الفاتح كلون مميز لطلاب الصيدلة</li>
          </ul>
        </div>
        
        <div className="my-8 flex justify-center">
          <Image 
            src="/images/embedded/healthcare_uniforms/medical-college-students-uniform-requirements-1.jpg"
            alt="مقارنة بين أزياء طلاب التخصصات الصحية المختلفة"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">معايير الجودة والسلامة في زي طلاب الكليات الصحية</h2>
        
        <div className="mb-8">
          <p>
            تخضع أزياء طلاب الكليات الصحية لمعايير صارمة من الجودة والسلامة لضمان حماية الطلاب والمرضى على حد سواء:
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">معايير الأقمشة والخامات</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>المتانة:</strong> أقمشة متينة تتحمل الاستخدام المتكرر والغسيل المستمر</li>
            <li><strong>مقاومة البقع:</strong> معالجات خاصة تجعل الأقمشة مقاومة للبقع وسهلة التنظيف</li>
            <li><strong>سهولة التعقيم:</strong> قابلية تحمل درجات حرارة عالية للتعقيم والتطهير</li>
            <li><strong>مضادة للميكروبات:</strong> بعض الأزياء تعالج بمواد مضادة للبكتيريا لتقليل انتقال العدوى</li>
            <li><strong>مقاومة الاشتعال:</strong> خاصة في بيئات المختبرات والعمليات الجراحية</li>
            <li><strong>نسبة القطن:</strong> يفضل نسبة عالية من القطن (60-65%) لضمان الراحة مع نسبة من البوليستر للمتانة</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">معايير السلامة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الأكمام:</strong> تصميم يسمح بطي الأكمام أو أكمام قصيرة لتجنب التلوث أثناء غسل اليدين</li>
            <li><strong>الأزرار والسحابات:</strong> مغطاة أو غير بارزة لتجنب خدش المرضى أو التعلق بالمعدات</li>
            <li><strong>أطوال مناسبة:</strong> أطوال تحمي الجلد وتغطي الجسم بشكل مناسب دون التسبب في مخاطر التعثر</li>
            <li><strong>عاكسات الضوء:</strong> في بعض التخصصات مثل خدمات الطوارئ الطبية</li>
            <li><strong>قابلية الاستبدال السريع:</strong> تصميم يسمح بتغيير سريع للزي في حالات التلوث</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">مطابقة المعايير السعودية</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>مطابقة الهيئة السعودية للمواصفات والمقاييس والجودة (SASO):</strong> الالتزام بالمعايير الوطنية للأقمشة</li>
            <li><strong>احترام الخصوصية الثقافية:</strong> تصاميم تراعي القيم الإسلامية والثقافية للمملكة</li>
            <li><strong>المعايير البيئية:</strong> استخدام أصباغ وخامات صديقة للبيئة وغير مسببة للحساسية</li>
            <li><strong>الاعتماد المؤسسي:</strong> موافقة الجهات التعليمية والصحية على مواصفات الزي</li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg shadow-sm my-10">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">نصائح للحفاظ على نظافة الزي الطبي</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2 text-yellow-800">
            <li>غسل الزي بشكل منفصل عن الملابس العادية، ويفضل استخدام مسحوق غسيل مضاد للبكتيريا</li>
            <li>استخدام الماء الساخن (60 درجة مئوية على الأقل) لقتل البكتيريا والجراثيم</li>
            <li>تجنب استخدام منعم الأقمشة الذي قد يقلل من فعالية المعالجات المضادة للميكروبات</li>
            <li>الكي بدرجة حرارة مناسبة للمساعدة في القضاء على البكتيريا المتبقية</li>
            <li>تخصيص زي منفصل للمختبرات وزي آخر للتدريب السريري</li>
            <li>غسل الزي بعد كل استخدام في البيئة السريرية وعدم ارتدائه خارج المستشفى أو الكلية</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">اعتبارات عملية في اختيار زي طلاب الكليات الصحية</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">الراحة والملاءمة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>المقاس المناسب:</strong> اختيار المقاس الملائم الذي يسمح بالحركة دون أن يكون فضفاضاً بشكل مفرط</li>
            <li><strong>نفاذية الهواء:</strong> أقمشة تسمح بالتهوية المناسبة خاصة في المناوبات الطويلة</li>
            <li><strong>المرونة:</strong> نسبة من الألياف المرنة لتسهيل الحركة والانحناء والعمل</li>
            <li><strong>الوزن:</strong> أقمشة خفيفة نسبياً لتجنب التعب الإضافي خلال المناوبات الطويلة</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">الوظائف العملية</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>الجيوب:</strong> توفر جيوب كافية ومناسبة لحمل الأدوات الأساسية مثل السماعة والمفكرة وغيرها</li>
            <li><strong>حمالات للشارات:</strong> مكان مخصص لتثبيت الشارة التعريفية وبطاقة الطالب</li>
            <li><strong>سهولة الارتداء والخلع:</strong> تصميم يسمح بارتداء وخلع الزي بسرعة في الحالات الطارئة</li>
            <li><strong>مساحات تخزين:</strong> حلقات أو مشابك لتثبيت الأدوات الضرورية مثل مقص الضماد أو القلم الضوئي</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">الميزانية والاستدامة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>العدد المناسب:</strong> امتلاك 2-3 أطقم على الأقل للتبديل خلال أيام الأسبوع</li>
            <li><strong>توازن الجودة والسعر:</strong> الاستثمار في أزياء ذات جودة عالية تدوم لفترة أطول رغم ارتفاع سعرها المبدئي</li>
            <li><strong>قابلية الصيانة:</strong> سهولة إصلاح الجيوب أو استبدال الأزرار عند الحاجة</li>
            <li><strong>التكيف مع المواسم:</strong> مراعاة احتياجات الطقس الحار في معظم مناطق المملكة</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">أماكن شراء وتوفير زي طلاب الكليات الصحية</h2>
        
        <div className="mb-8">
          <p>
            يمكن للطلاب الحصول على الزي الموحد من عدة مصادر:
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">المصادر الرسمية</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>متاجر الجامعة:</strong> توفر معظم الجامعات الطبية متاجر داخل الحرم الجامعي لبيع الزي الموحد المعتمد</li>
            <li><strong>الكلية الصحية:</strong> قد تتعاقد بعض الكليات مع موردين محددين وتوفر طلبات جماعية لطلابها</li>
            <li><strong>جمعيات الطلاب:</strong> تساعد بعض الجمعيات الطلابية في توفير الزي بأسعار مخفضة لأعضائها</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">متاجر متخصصة</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>متاجر المستلزمات الطبية:</strong> توجد في المدن الرئيسية متاجر متخصصة في بيع الأزياء والمستلزمات الطبية</li>
            <li><strong>محلات الخياطة المتخصصة:</strong> توفر خدمة تفصيل الزي حسب المقاسات الشخصية مع الالتزام بالمواصفات المعتمدة</li>
            <li><strong>معارض مستلزمات الطلاب:</strong> تقام دورياً في بداية العام الدراسي وتوفر احتياجات الطلاب بما فيها الزي الموحد</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-4 text-primary-600">المنصات الإلكترونية</h3>
          <ul className="list-disc mr-8 mt-2 space-y-2">
            <li><strong>المتاجر الإلكترونية المتخصصة:</strong> مواقع وتطبيقات محلية متخصصة في بيع المستلزمات الطبية والتعليمية</li>
            <li><strong>منصات التجارة الإلكترونية:</strong> توفر العديد من المنصات الكبرى قسماً خاصاً بالأزياء المهنية والتعليمية</li>
            <li><strong>مجموعات التواصل الاجتماعي:</strong> منصات لتبادل الأزياء المستعملة بين طلاب الدفعات المختلفة</li>
          </ul>
        </div>

        <div className="border-2 border-primary-100 p-6 rounded-lg my-10">
          <h3 className="text-lg font-semibold text-primary-700 mb-4">قائمة تحقق: تجهيز زي طالب الكلية الصحية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">الزي الأساسي:</h4>
              <ul className="list-disc mr-8 space-y-1">
                <li>2-3 معاطف بيضاء بالمقاس المناسب</li>
                <li>3-4 قمصان/بلوزات بألوان مناسبة للتخصص</li>
                <li>3 بناطيل/تنانير طويلة بألوان داكنة مناسبة</li>
                <li>زي خاص بالمختبرات (إن وجد)</li>
                <li>زي خاص بالتدريب السريري (إن وجد)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">الإكسسوارات والأدوات:</h4>
              <ul className="list-disc mr-8 space-y-1">
                <li>حذاء طبي مريح وآمن</li>
                <li>شارة تعريفية + حامل بطاقة</li>
                <li>سماعة طبية (للتخصصات السريرية)</li>
                <li>أدوات القياس حسب التخصص</li>
                <li>حقيبة مناسبة لحمل الكتب والأدوات</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-primary-700">الخلاصة</h2>
        
        <div className="mb-8">
          <p>
            يشكل الزي الموحد جزءاً أساسياً من الهوية المهنية لطلاب الكليات الصحية، ويتجاوز دوره المظهر الخارجي ليشمل جوانب عملية وأخلاقية ووقائية. يجب على الطلاب الالتزام بمتطلبات الزي المحددة من قبل كلياتهم وفهم أهميتها في تعزيز الاحترافية والسلامة في بيئة التعليم الصحي.
          </p>
          <p className="mt-4">
            مع توفر خيارات متعددة من الأزياء الطبية التعليمية، يمكن للطلاب اختيار ما يناسب احتياجاتهم العملية والمهنية مع الالتزام بالمعايير المعتمدة. إن الاهتمام بجودة الزي ونظافته وصيانته يعكس اهتمام الطالب بمهنته المستقبلية ويساهم في تكوين صورة إيجابية عنه لدى أساتذته وزملائه والمرضى على حد سواء.
          </p>
          <p className="mt-4">
            في النهاية، يمثل ارتداء الزي الطبي المناسب والالتزام بمتطلباته الخطوة الأولى في رحلة الطالب نحو اكتساب الهوية المهنية الصحية والانضمام إلى أسرة القطاع الصحي في المملكة، مع ما يحمله ذلك من مسؤوليات وتحديات وفرص للتميز والمساهمة في تطوير الخدمات الصحية.
          </p>
        </div>

        <div className="mt-12 p-5 bg-slate-50 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-primary-600">مقالات ذات صلة</h2>
          <ul className="mr-5 space-y-2">
            <li>
              <Link href="/healthcare-uniforms/differences-between-medical-staff-uniforms" className="text-primary-500 hover:text-primary-700 transition-colors">
                الفرق بين زي الأطباء، الممرضين، الفنيين، والإداريين في القطاع الصحي
              </Link>
            </li>
            <li>
              <Link href="/healthcare-uniforms/choosing-comfortable-and-safe-medical-footwear" className="text-primary-500 hover:text-primary-700 transition-colors">
                اختيار الأحذية الطبية المريحة والآمنة كجزء من الزي
              </Link>
            </li>
            <li>
              <Link href="/healthcare-uniforms/practical-medical-uniform-design" className="text-primary-500 hover:text-primary-700 transition-colors">
                تصميم زي طبي عملي: جيوب كافية وراحة للحركة أثناء المناوبات الطويلة
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default MedicalStudentsUniform; 