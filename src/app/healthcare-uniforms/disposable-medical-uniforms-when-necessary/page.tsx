import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogImage from '@/components/BlogImage';

export const metadata: Metadata = {
  title: 'الزي الطبي المتاح للاستعمال الواحد: متى يكون ضرورياً؟ | خبراء الزي الموحد',
  description: 'دليل شامل حول استخدام الزي الطبي المتاح للاستعمال الواحد، الحالات التي تستدعي استخدامه، مزاياه وعيوبه، ومعايير الاختيار في المؤسسات الصحية',
  keywords: 'الزي الطبي المتاح, زي طبي للاستعمال الواحد, معدات الحماية الشخصية, مكافحة العدوى, السلامة الطبية',
};

export default function DisposableMedicalUniformsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb
            items={[
              { label: 'الرئيسية', href: '/' },
              { label: 'الزي الطبي', href: '/healthcare-uniforms' },
              { label: 'الزي الطبي المتاح للاستعمال الواحد', href: '/healthcare-uniforms/disposable-medical-uniforms-when-necessary', isCurrent: true }
            ]}
          />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              الزي الطبي المتاح للاستعمال الواحد: متى يكون ضرورياً؟
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              دليل شامل لاستخدام الزي الطبي المتاح في الحالات الحرجة ومكافحة العدوى
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <BlogImage
              src="/images/healthcare_uniforms/disposable-medical-uniforms.jpg"
              alt="الزي الطبي المتاح للاستعمال الواحد"
              category="healthcare_uniforms"
            />

            <div className="prose prose-lg max-w-none mt-8">
              
              <p className="lead text-xl font-semibold mb-8 text-gray-700 border-r-4 border-primary pr-4 py-2 bg-gray-50 rounded-lg">
                يُعد الزي الطبي المتاح للاستعمال الواحد عنصراً حيوياً في منظومة السلامة الطبية، خاصة في الحالات عالية الخطورة ومكافحة العدوى. رغم أن الزي الطبي القابل لإعادة الاستخدام يبقى الخيار الأساسي في معظم الحالات، إلا أن هناك ظروفاً محددة تستدعي استخدام الزي المتاح لضمان أقصى مستويات الحماية والسلامة للكادر الطبي والمرضى.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">مفهوم الزي الطبي المتاح وخصائصه</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. تعريف الزي الطبي المتاح</h3>

              <p className="mb-4">
                الزي الطبي المتاح هو ملابس طبية مصممة للاستخدام لمرة واحدة فقط، ثم يتم التخلص منها بطريقة آمنة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الاستخدام الواحد:</strong> مصمم للاستعمال لمرة واحدة فقط</li>
                <li><strong className="text-gray-800">مواد خاصة:</strong> مصنوع من مواد غير منسوجة أو بلاستيكية</li>
                <li><strong className="text-gray-800">حاجز وقائي:</strong> يوفر حماية من السوائل والملوثات</li>
                <li><strong className="text-gray-800">سهولة التخلص:</strong> يمكن التخلص منه بأمان بعد الاستخدام</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. أنواع المواد المستخدمة</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-primary mb-3 font-semibold">المواد الشائعة في الزي الطبي المتاح</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>البولي بروبيلين:</strong> خفيف الوزن ومقاوم للسوائل</li>
                  <li>• <strong>البوليثيلين:</strong> حاجز قوي ضد الملوثات</li>
                  <li>• <strong>الأقمشة غير المنسوجة:</strong> مريحة وتسمح بالتهوية</li>
                  <li>• <strong>المواد المركبة:</strong> تجمع بين مزايا عدة مواد</li>
                  <li>• <strong>الطلاءات الخاصة:</strong> معالجات مضادة للبكتيريا والفيروسات</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الحالات التي تستدعي استخدام الزي المتاح</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. الأوبئة والجوائح</h3>

              <p className="mb-4">
                في حالات الأوبئة مثل جائحة كوفيد-19، يصبح الزي المتاح ضرورة حتمية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">منع انتشار العدوى:</strong> تقليل خطر نقل الفيروسات والبكتيريا</li>
                <li><strong className="text-gray-800">حماية الكادر الطبي:</strong> حاجز إضافي ضد الإصابة</li>
                <li><strong className="text-gray-800">سرعة التغيير:</strong> إمكانية تغيير الزي بسرعة بين المرضى</li>
                <li><strong className="text-gray-800">تقليل التلوث المتقاطع:</strong> منع نقل العدوى بين الأقسام</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. العمليات الجراحية عالية الخطورة</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">العمليات التي تتطلب زي متاح</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">نوع العملية</th>
                      <th className="border border-gray-300 p-2 text-right">مستوى الخطورة</th>
                      <th className="border border-gray-300 p-2 text-right">نوع الزي المطلوب</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">جراحة القلب المفتوح</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">زي متاح معقم كامل</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">زراعة الأعضاء</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">زي متاح مع حماية إضافية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">جراحة الأعصاب</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                      <td className="border border-gray-300 p-2">زي متاح معقم</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">العمليات الطارئة</td>
                      <td className="border border-gray-300 p-2">متغير</td>
                      <td className="border border-gray-300 p-2">زي متاح سريع الارتداء</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. التعامل مع المواد الخطرة</h3>

              <p className="mb-4">
                عند التعامل مع مواد كيميائية أو إشعاعية أو بيولوجية خطرة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">المواد الكيميائية:</strong> حماية من التسرب والتلوث الكيميائي</li>
                <li><strong className="text-gray-800">المواد المشعة:</strong> منع التلوث الإشعاعي للملابس الشخصية</li>
                <li><strong className="text-gray-800">العينات البيولوجية:</strong> حماية من التلوث بالعينات المعدية</li>
                <li><strong className="text-gray-800">الأدوية السامة:</strong> منع امتصاص المواد الضارة</li>
              </ul>

              <BlogImage
                src="/images/healthcare_uniforms/ppe-disposable-uniforms.jpg"
                alt="معدات الحماية الشخصية والزي المتاح"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">مزايا وعيوب الزي الطبي المتاح</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. المزايا الرئيسية</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">فوائد الزي الطبي المتاح</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>أقصى حماية من العدوى:</strong> حاجز فعال ضد الملوثات</li>
                  <li>• <strong>سهولة الاستخدام:</strong> لا يحتاج لغسيل أو تعقيم</li>
                  <li>• <strong>توفير الوقت:</strong> سرعة في الارتداء والتخلص</li>
                  <li>• <strong>تقليل التلوث المتقاطع:</strong> منع نقل العدوى بين المرضى</li>
                  <li>• <strong>مناسب للطوارئ:</strong> متوفر بسرعة في الحالات الحرجة</li>
                  <li>• <strong>معايير عالية للنظافة:</strong> جديد ومعقم في كل استخدام</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. العيوب والتحديات</h3>

              <p className="mb-4">
                رغم المزايا، هناك تحديات مرتبطة بالزي المتاح:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">التكلفة العالية:</strong> تكلفة مستمرة مع كل استخدام</li>
                <li><strong className="text-gray-800">التأثير البيئي:</strong> زيادة النفايات الطبية</li>
                <li><strong className="text-gray-800">الراحة المحدودة:</strong> أقل راحة من الزي القابل لإعادة الاستخدام</li>
                <li><strong className="text-gray-800">التهوية المحدودة:</strong> قد يسبب تراكم الحرارة والرطوبة</li>
                <li><strong className="text-gray-800">قيود الحركة:</strong> قد يقيد الحركة في بعض الأنواع</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. مقارنة التكلفة والفائدة</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">تحليل التكلفة والفائدة</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">العامل</th>
                      <th className="border border-gray-300 p-2 text-right">الزي المتاح</th>
                      <th className="border border-gray-300 p-2 text-right">الزي القابل لإعادة الاستخدام</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">التكلفة الأولية</td>
                      <td className="border border-gray-300 p-2">منخفضة</td>
                      <td className="border border-gray-300 p-2">عالية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">التكلفة التشغيلية</td>
                      <td className="border border-gray-300 p-2">عالية ومستمرة</td>
                      <td className="border border-gray-300 p-2">منخفضة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">مستوى الحماية</td>
                      <td className="border border-gray-300 p-2">عالي جداً</td>
                      <td className="border border-gray-300 p-2">عالي</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">التأثير البيئي</td>
                      <td className="border border-gray-300 p-2">سلبي</td>
                      <td className="border border-gray-300 p-2">إيجابي</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">الراحة</td>
                      <td className="border border-gray-300 p-2">محدودة</td>
                      <td className="border border-gray-300 p-2">عالية</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">معايير الاختيار والجودة</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. المعايير الدولية والمحلية</h3>

              <p className="mb-4">
                يجب أن يلتزم الزي الطبي المتاح بمعايير صارمة للجودة والسلامة:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">معايير ISO:</strong> الالتزام بمعايير الجودة الدولية</li>
                <li><strong className="text-gray-800">معايير FDA:</strong> موافقة إدارة الغذاء والدواء الأمريكية</li>
                <li><strong className="text-gray-800">معايير CE:</strong> الامتثال للمعايير الأوروبية</li>
                <li><strong className="text-gray-800">معايير SFDA:</strong> موافقة الهيئة السعودية للغذاء والدواء</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. اختبارات الجودة المطلوبة</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">الاختبارات الأساسية للزي المتاح</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>اختبار مقاومة السوائل:</strong> قياس قدرة المادة على صد السوائل</li>
                  <li>• <strong>اختبار قوة التحمل:</strong> مقاومة التمزق والثقب</li>
                  <li>• <strong>اختبار النفاذية:</strong> منع تسرب الملوثات الدقيقة</li>
                  <li>• <strong>اختبار الراحة:</strong> قياس التهوية ونفاذية الهواء</li>
                  <li>• <strong>اختبار السمية:</strong> التأكد من عدم وجود مواد ضارة</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. مستويات الحماية</h3>

              <p className="mb-4">
                يتم تصنيف الزي المتاح حسب مستوى الحماية المطلوب:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">تصنيف مستويات الحماية</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">المستوى</th>
                      <th className="border border-gray-300 p-2 text-right">نوع الحماية</th>
                      <th className="border border-gray-300 p-2 text-right">الاستخدام</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">المستوى 1</td>
                      <td className="border border-gray-300 p-2">حماية أساسية من السوائل</td>
                      <td className="border border-gray-300 p-2">الفحوصات الروتينية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">المستوى 2</td>
                      <td className="border border-gray-300 p-2">حماية متوسطة</td>
                      <td className="border border-gray-300 p-2">العمليات البسيطة</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">المستوى 3</td>
                      <td className="border border-gray-300 p-2">حماية عالية</td>
                      <td className="border border-gray-300 p-2">العمليات الجراحية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">المستوى 4</td>
                      <td className="border border-gray-300 p-2">حماية قصوى</td>
                      <td className="border border-gray-300 p-2">الحالات عالية الخطورة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الاستخدام الصحيح والآمن</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. إجراءات الارتداء الصحيحة</h3>

              <p className="mb-4">
                الارتداء الصحيح للزي المتاح أمر بالغ الأهمية لضمان الحماية الفعالة:
              </p>

              <ol className="list-decimal pr-8 space-y-3 mb-6">
                <li><strong className="text-gray-800">تنظيف اليدين:</strong> غسل اليدين جيداً قبل لمس الزي</li>
                <li><strong className="text-gray-800">فحص الزي:</strong> التأكد من سلامة الزي وعدم وجود تمزق</li>
                <li><strong className="text-gray-800">الارتداء بالترتيب:</strong> اتباع تسلسل محدد للارتداء</li>
                <li><strong className="text-gray-800">التأكد من الإحكام:</strong> ضمان إغلاق جميع الفتحات</li>
                <li><strong className="text-gray-800">فحص نهائي:</strong> التأكد من الحماية الكاملة</li>
              </ol>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. إجراءات الخلع الآمن</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">خطوات الخلع الآمن</h4>
                <ol className="space-y-2 mb-0">
                  <li>1. <strong>تطهير القفازات:</strong> تنظيف القفازات قبل البدء</li>
                  <li>2. <strong>خلع الزي من الخلف:</strong> تجنب لمس الجزء الأمامي</li>
                  <li>3. <strong>طي الزي للداخل:</strong> حصر الملوثات داخل الزي</li>
                  <li>4. <strong>التخلص الفوري:</strong> وضع الزي في حاوية النفايات الطبية</li>
                  <li>5. <strong>تطهير اليدين:</strong> غسل اليدين فوراً بعد الخلع</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. التخلص الآمن والبيئي</h3>

              <p className="mb-4">
                التخلص الصحيح من الزي المتاح أمر بالغ الأهمية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">تصنيف النفايات:</strong> فصل الزي المتاح حسب نوع التلوث</li>
                <li><strong className="text-gray-800">الحاويات المخصصة:</strong> استخدام حاويات النفايات الطبية</li>
                <li><strong className="text-gray-800">المعالجة المناسبة:</strong> حرق أو تعقيم قبل التخلص النهائي</li>
                <li><strong className="text-gray-800">التوثيق:</strong> تسجيل كميات النفايات المتولدة</li>
              </ul>

              <BlogImage
                src="/images/healthcare_uniforms/proper-disposal-medical-waste.jpg"
                alt="التخلص الآمن من الزي الطبي المتاح"
                category="healthcare_uniforms"
              />

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">التطبيق في المؤسسات الصحية السعودية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. إرشادات وزارة الصحة السعودية</h3>

              <p className="mb-4">
                وضعت وزارة الصحة السعودية إرشادات واضحة لاستخدام الزي المتاح:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الحالات الإلزامية:</strong> قائمة بالحالات التي تستوجب الزي المتاح</li>
                <li><strong className="text-gray-800">معايير الجودة:</strong> مواصفات فنية للزي المقبول</li>
                <li><strong className="text-gray-800">إجراءات السلامة:</strong> بروتوكولات الاستخدام والتخلص</li>
                <li><strong className="text-gray-800">التدريب المطلوب:</strong> برامج تدريبية للكادر الطبي</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. تجارب المستشفيات السعودية</h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-primary mb-3 font-semibold">مستشفى الملك فهد الطبية</h4>
                <p className="mb-3">
                  طبق المستشفى نظاماً متطوراً لاستخدام الزي المتاح خلال جائحة كوفيد-19:
                </p>
                
                <h5 className="font-semibold mb-2">الإجراءات المطبقة:</h5>
                <ul className="space-y-1 mb-4">
                  <li>• استخدام إلزامي للزي المتاح في أقسام كوفيد-19</li>
                  <li>• تدريب شامل للكادر على الاستخدام الصحيح</li>
                  <li>• نظام صارم للتخلص الآمن</li>
                  <li>• مراقبة مستمرة لمعدلات العدوى</li>
                </ul>
                
                <h5 className="font-semibold mb-2">النتائج المحققة:</h5>
                <ul className="space-y-1 mb-0">
                  <li>• انخفاض معدل إصابة الكادر الطبي بنسبة 78%</li>
                  <li>• تحسن الثقة لدى الكادر الطبي</li>
                  <li>• تقليل التلوث المتقاطع بين الأقسام</li>
                  <li>• تحسن إجراءات مكافحة العدوى</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. التحديات في التطبيق المحلي</h3>

              <p className="mb-4">
                تواجه المؤسسات الصحية السعودية تحديات في تطبيق الزي المتاح:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">التحديات والحلول المحلية</h4>
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-right">التحدي</th>
                      <th className="border border-gray-300 p-2 text-right">السبب</th>
                      <th className="border border-gray-300 p-2 text-right">الحل المقترح</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">التكلفة العالية</td>
                      <td className="border border-gray-300 p-2">استيراد معظم المنتجات</td>
                      <td className="border border-gray-300 p-2">تطوير صناعة محلية</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">عدم الراحة في المناخ الحار</td>
                      <td className="border border-gray-300 p-2">تصميم غير مناسب للمناخ</td>
                      <td className="border border-gray-300 p-2">تطوير مواد متكيفة مع المناخ</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">زيادة النفايات الطبية</td>
                      <td className="border border-gray-300 p-2">استخدام مكثف</td>
                      <td className="border border-gray-300 p-2">تطوير تقنيات إعادة التدوير</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">نقص التدريب</td>
                      <td className="border border-gray-300 p-2">حداثة التقنية</td>
                      <td className="border border-gray-300 p-2">برامج تدريبية مكثفة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الابتكارات والتطورات المستقبلية</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. المواد الذكية والمتطورة</h3>

              <p className="mb-4">
                تطوير مواد جديدة تحسن من أداء الزي المتاح:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">المواد النانوية:</strong> حماية أفضل مع وزن أقل</li>
                <li><strong className="text-gray-800">الأقمشة التفاعلية:</strong> تغيير اللون عند التلوث</li>
                <li><strong className="text-gray-800">المواد المضادة للميكروبات:</strong> قتل البكتيريا والفيروسات</li>
                <li><strong className="text-gray-800">التقنيات الحيوية:</strong> مواد قابلة للتحلل الحيوي</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. التقنيات الذكية المدمجة</h3>

              <div className="bg-primary-50 p-6 rounded-lg mb-6 border-r-4 border-primary">
                <h4 className="text-primary mb-3 font-semibold">ابتكارات المستقبل</h4>
                <ul className="space-y-2 mb-0">
                  <li>• <strong>أجهزة الاستشعار المدمجة:</strong> مراقبة التلوث والحرارة</li>
                  <li>• <strong>المؤشرات البصرية:</strong> تنبيهات عند انتهاء فعالية الحماية</li>
                  <li>• <strong>التتبع الذكي:</strong> تتبع استخدام وتخلص الزي</li>
                  <li>• <strong>التطهير الذاتي:</strong> مواد تطهر نفسها تلقائياً</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. الحلول البيئية المستدامة</h3>

              <p className="mb-4">
                تطوير حلول تقلل من التأثير البيئي:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">المواد القابلة للتحلل:</strong> زي يتحلل طبيعياً بعد التخلص</li>
                <li><strong className="text-gray-800">إعادة التدوير المتقدمة:</strong> تقنيات لإعادة تدوير المواد</li>
                <li><strong className="text-gray-800">التصنيع الأخضر:</strong> عمليات إنتاج صديقة للبيئة</li>
                <li><strong className="text-gray-800">الاستخدام المحدود:</strong> زي قابل للاستخدام عدة مرات بأمان</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">إرشادات الشراء والتخزين</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">1. معايير اختيار المورد</h3>

              <p className="mb-4">
                اختيار المورد المناسب أمر بالغ الأهمية:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-6 marker:text-primary">
                <li><strong className="text-gray-800">الشهادات والتراخيص:</strong> التأكد من حصول المورد على الشهادات المطلوبة</li>
                <li><strong className="text-gray-800">جودة المنتجات:</strong> اختبار عينات قبل الشراء بكميات كبيرة</li>
                <li><strong className="text-gray-800">الموثوقية:</strong> سجل حافل في التوريد للمؤسسات الصحية</li>
                <li><strong className="text-gray-800">الدعم الفني:</strong> توفير التدريب والدعم التقني</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">2. شروط التخزين المناسبة</h3>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">متطلبات التخزين الآمن</h4>
                <ul className="list-disc pr-6 space-y-2 mb-0">
                  <li>بيئة جافة ونظيفة بعيداً عن الرطوبة</li>
                  <li>درجة حرارة مناسبة (15-25 درجة مئوية)</li>
                  <li>حماية من أشعة الشمس المباشرة</li>
                  <li>تهوية جيدة لمنع تراكم الرطوبة</li>
                  <li>نظام FIFO (الأول داخل، الأول خارج)</li>
                  <li>فحص دوري لتواريخ الانتهاء</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">3. إدارة المخزون</h3>

              <p className="mb-4">
                إدارة فعالة لمخزون الزي المتاح:
              </p>

              <ul className="list-disc pr-8 space-y-2 mb-8 marker:text-primary">
                <li><strong className="text-gray-800">التنبؤ بالاحتياجات:</strong> حساب الاستهلاك المتوقع</li>
                <li><strong className="text-gray-800">المخزون الاحتياطي:</strong> الاحتفاظ بمخزون للطوارئ</li>
                <li><strong className="text-gray-800">نظام المراقبة:</strong> تتبع مستويات المخزون</li>
                <li><strong className="text-gray-800">التدوير المنتظم:</strong> استخدام المخزون الأقدم أولاً</li>
              </ul>

              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-primary mb-3 font-semibold">رأي الخبراء</h3>
                <p className="mb-0 italic">
                  "الزي الطبي المتاح ليس بديلاً عن الزي التقليدي، بل مكمل ضروري في حالات محددة. خلال جائحة كوفيد-19، أثبت الزي المتاح أهميته القصوى في حماية الكادر الطبي ومنع انتشار العدوى. المفتاح هو الاستخدام الذكي والمدروس، بحيث نستفيد من مزاياه في الحالات التي تستدعي ذلك، مع الحفاظ على الاستدامة البيئية والاقتصادية. أنصح المؤسسات الصحية بوضع بروتوكولات واضحة لتحديد متى ومتى لا يُستخدم الزي المتاح، مع التركيز على التدريب المستمر للكادر الطبي."
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  د. أحمد الحربي، خبير مكافحة العدوى ومدير سابق لإدارة الجودة والسلامة
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-b-2 border-primary pb-2">الخلاصة والتوصيات</h2>

              <p className="mb-4">
                يُعد الزي الطبي المتاح للاستعمال الواحد أداة حيوية في منظومة السلامة الطبية، خاصة في الحالات عالية الخطورة ومكافحة العدوى. رغم التحديات المرتبطة بالتكلفة والتأثير البيئي، إلا أن فوائده في حماية الكادر الطبي والمرضى تجعله ضرورة لا غنى عنها في ظروف محددة.
              </p>

              <p className="mb-4">
                النجاح في استخدام الزي المتاح يتطلب فهماً عميقاً لمتى ومتى لا يُستخدم، مع الالتزام بأعلى معايير الجودة والسلامة. كما يتطلب تدريباً مستمراً للكادر الطبي على الاستخدام الصحيح والتخلص الآمن.
              </p>

              <p className="mb-0">
                في خبراء الزي الموحد، نلتزم بتوفير أعلى جودة من الزي الطبي المتاح، مع التركيز على السلامة والفعالية والاستدامة. نعمل مع المؤسسات الصحية السعودية لتطوير حلول متكاملة تجمع بين الحماية القصوى والمسؤولية البيئية، مساهمين في تعزيز منظومة الرعاية الصحية في المملكة.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}