import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي القطاع الصحي | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'كل ما تحتاج معرفته عن الزي الطبي الموحد للمستشفيات والعيادات في المملكة العربية السعودية - اختيار الزي الطبي المناسب، معايير الجودة، والمواصفات المعتمدة',
};

// قائمة المقالات مع عناوينها وروابطها الإنجليزية
const articles = [
  {
    id: 1,
    title: 'معايير اختيار أقمشة الزي الطبي: الراحة والمتانة ومقاومة البكتيريا',
    slug: 'medical-uniform-fabric-selection-criteria',
    excerpt: 'دليل شامل لمعايير اختيار أقمشة الزي الطبي التي توازن بين الراحة، المتانة، ومقاومة البكتيريا لبيئة العمل الصحية.',
    imageSrc: '/images/healthcare_uniforms/medical-uniform-fabric-selection-criteria-content-3.jpg',
  },
  {
    id: 2,
    title: 'أهمية الزي الطبي في الوقاية من العدوى وانتقال الأمراض',
    slug: 'importance-of-medical-uniforms-in-infection-prevention',
    excerpt: 'نظرة متعمقة حول دور الزي الطبي في الحد من انتشار العدوى وحماية الكوادر الصحية والمرضى على حد سواء.',
    imageSrc: '/images/healthcare_uniforms/infection-prevention-main.jpg',
  },
  {
    id: 6,
    title: 'دليل شامل لاختيار السكرب الطبي المناسب',
    slug: 'comprehensive-guide-to-choosing-medical-scrubs',
    excerpt: 'معايير اختيار السكرب الطبي المناسب من حيث التصميم، المقاس، الأقمشة، والألوان وكيفية الموازنة بين الراحة والمظهر المهني.',
    imageSrc: '/images/healthcare_uniforms/choosing-medical-scrubs.jpg',
  },
  {
    id: 3,
    title: 'الفرق بين زي الأطباء، الممرضين، الفنيين، والإداريين في القطاع الصحي',
    slug: 'differences-between-medical-staff-uniforms',
    excerpt: 'دليل توضيحي للفروقات بين أزياء مختلف العاملين في القطاع الصحي ودور هذه الفروقات في تنظيم العمل وتسهيل التعرف على الطاقم الطبي.',
    imageSrc: '/images/healthcare_uniforms/medical-staff.jpg',
  },
  {
    id: 4,
    title: 'كيف تختار الألوان المناسبة للزي الطبي وتأثيرها على المرضى والموظفين؟',
    slug: 'choosing-appropriate-colors-for-medical-uniforms',
    excerpt: 'دراسة تأثير ألوان الزي الطبي على نفسية المرضى وأداء الموظفين وكيفية اختيار الألوان المناسبة لبيئة المستشفى.',
    imageSrc: '/images/healthcare_uniforms/uniform-colors.jpg',
  },
  {
    id: 5,
    title: 'تصميم زي طبي عملي: جيوب كافية وراحة للحركة أثناء المناوبات الطويلة',
    slug: 'practical-medical-uniform-design',
    excerpt: 'مواصفات الزي الطبي العملي الذي يوفر الراحة والمرونة أثناء المناوبات الطويلة مع توفير جيوب كافية للأدوات الطبية الضرورية.',
    imageSrc: '/images/healthcare_uniforms/practical-design.jpg',
  },
  {
    id: 7,
    title: 'الزي الطبي النسائي في السعودية: تصميمات عملية ومحتشمة',
    slug: 'womens-medical-uniforms-in-saudi-arabia',
    excerpt: 'تصميمات الزي الطبي النسائي التي تراعي الاحتشام والعملية وتتناسب مع متطلبات العمل في القطاع الصحي السعودي.',
    imageSrc: '/images/healthcare_uniforms/women-uniforms.jpg',
  },
  {
    id: 8,
    title: 'تخصيص الزي الطبي بشعار المستشفى أو العيادة: الهوية والاحترافية',
    slug: 'customizing-medical-uniforms-with-logos',
    excerpt: 'أهمية تخصيص الزي الطبي بشعارات المؤسسات الصحية ودوره في تعزيز الهوية المؤسسية والانطباع الاحترافي.',
    imageSrc: '/images/healthcare_uniforms/branded-uniforms.jpg',
  },
  {
    id: 9,
    title: 'نصائح هامة للعناية بالزي الطبي وتعقيمه بشكل صحيح',
    slug: 'tips-for-proper-medical-uniform-care',
    excerpt: 'إرشادات مفصلة للعناية بالزي الطبي وطرق تعقيمه بشكل صحيح لضمان السلامة والاستدامة.',
    imageSrc: '/images/healthcare_uniforms/uniform-care.jpg',
  },
  {
    id: 10,
    title: 'أحدث التقنيات في أقمشة الزي الطبي: مقاومة للسوائل والتجعد',
    slug: 'latest-technologies-in-medical-uniform-fabrics',
    excerpt: 'استعراض لأحدث التقنيات المستخدمة في أقمشة الزي الطبي وميزاتها في مقاومة السوائل والتجعد وتوفير الراحة.',
    imageSrc: '/images/healthcare_uniforms/fabric-tech.jpg',
  },
  {
    id: 11,
    title: 'معايير الجودة المعتمدة للزي الطبي في وزارة الصحة السعودية',
    slug: 'quality-standards-for-medical-uniforms-in-saudi-ministry-of-health',
    excerpt: 'المعايير والمواصفات المعتمدة من وزارة الصحة السعودية للزي الطبي ومتطلبات الالتزام بها في المنشآت الصحية.',
    imageSrc: '/images/healthcare_uniforms/quality-standards.jpg',
  },
  {
    id: 12,
    title: 'أهمية ارتداء معطف المختبر (Lab Coat) ودوره في الحماية',
    slug: 'importance-of-lab-coats-and-protection',
    excerpt: 'دور معاطف المختبر في حماية الطاقم الطبي والمرضى وأهميتها في بيئة العمل الطبي.',
    imageSrc: '/images/healthcare_uniforms/lab-coats.jpg',
  },
  {
    id: 13,
    title: 'أفضل الموردين للزي الطبي عالي الجودة والمطابق للمواصفات في المملكة',
    slug: 'best-suppliers-for-high-quality-medical-uniforms-in-saudi-arabia',
    excerpt: 'دليل لأفضل موردي الزي الطبي في المملكة العربية السعودية الذين يقدمون منتجات عالية الجودة ومطابقة للمعايير المعتمدة.',
    imageSrc: '/images/healthcare_uniforms/suppliers.jpg',
  },
  {
    id: 14,
    title: 'هل يؤثر تصميم الزي الطبي على ثقة المرضى بالطاقم الطبي؟',
    slug: 'does-medical-uniform-design-affect-patient-trust',
    excerpt: 'دراسة تأثير تصميم ومظهر الزي الطبي على ثقة المرضى بالكادر الطبي وانطباعاتهم عن الخدمة المقدمة.',
    imageSrc: '/images/healthcare_uniforms/patient-trust.jpg',
  },
  {
    id: 15,
    title: 'الزي الطبي للمقاسات الكبيرة: توفير خيارات مريحة للجميع',
    slug: 'plus-size-medical-uniforms',
    excerpt: 'أهمية توفير خيارات متنوعة من الزي الطبي للمقاسات الكبيرة وكيفية اختيار التصاميم المناسبة والمريحة.',
    imageSrc: '/images/healthcare_uniforms/plus-size.jpg',
  },
  {
    id: 16,
    title: 'اختيار الأحذية الطبية المريحة والآمنة كجزء من الزي',
    slug: 'choosing-comfortable-and-safe-medical-footwear',
    excerpt: 'دليل اختيار الأحذية الطبية المناسبة التي توفر الراحة والأمان للعاملين في القطاع الصحي خلال المناوبات الطويلة.',
    imageSrc: '/images/healthcare_uniforms/medical-footwear.jpg',
  },
  {
    id: 17,
    title: 'زي طلاب وطالبات الكليات الصحية: المتطلبات والمواصفات',
    slug: 'medical-college-students-uniform-requirements',
    excerpt: 'المتطلبات والمواصفات المعتمدة لزي طلاب وطالبات الكليات الصحية في المملكة العربية السعودية.',
    imageSrc: '/images/healthcare_uniforms/student-uniforms.jpg',
  },
  {
    id: 18,
    title: 'كيف تطلب كميات كبيرة من الزي الطبي مع ضمان الجودة والمقاسات؟',
    slug: 'ordering-bulk-medical-uniforms-with-quality-assurance',
    excerpt: 'إرشادات لطلب كميات كبيرة من الزي الطبي مع ضمان الجودة وتوفير المقاسات المناسبة لجميع العاملين.',
    imageSrc: '/images/healthcare_uniforms/bulk-orders.jpg',
  },
  {
    id: 19,
    title: 'تأثير الزي الطبي الموحد على تنظيم العمل وروح الفريق في المستشفيات',
    slug: 'impact-of-uniforms-on-teamwork-in-hospitals',
    excerpt: 'دراسة تأثير توحيد الزي الطبي على تنظيم العمل وتعزيز روح الفريق والتعاون بين العاملين في القطاع الصحي.',
    imageSrc: '/images/healthcare_uniforms/teamwork.jpg',
  },
  {
    id: 20,
    title: 'الزي الطبي القابل للتخلص منه (Disposable): متى يكون استخدامه ضرورياً؟',
    slug: 'disposable-medical-uniforms-when-necessary',
    excerpt: 'متى يجب استخدام الزي الطبي القابل للتخلص منه وأهميته في بعض البيئات الطبية وحالات معينة.',
    imageSrc: '/images/healthcare_uniforms/disposable.jpg',
  },
  {
    id: 21,
    title: 'اتجاهات حديثة في تصميم السكراب الطبي: ألوان ونقوش مبتكرة',
    slug: 'modern-trends-in-medical-scrubs-design',
    excerpt: 'أحدث الاتجاهات في تصميم الزي الطبي واستخدام الألوان والنقوش المبتكرة مع الحفاظ على المعايير المهنية.',
    imageSrc: '/images/healthcare_uniforms/design-trends.jpg',
  },
  {
    id: 22,
    title: 'حلول اقتصادية لتوفير زي طبي جيد للعيادات الصغيرة والمراكز الصحية',
    slug: 'economical-solutions-for-small-clinics-uniforms',
    excerpt: 'حلول فعالة من حيث التكلفة لتوفير زي طبي عالي الجودة للعيادات الصغيرة والمراكز الصحية ذات الميزانية المحدودة.',
    imageSrc: '/images/healthcare_uniforms/economic-solutions.jpg',
  },
  {
    id: 23,
    title: 'أهمية توفير زي طبي منفصل لكل قسم داخل المنشأة الصحية',
    slug: 'importance-of-different-uniforms-for-each-department',
    excerpt: 'فوائد تخصيص زي طبي مختلف لكل قسم داخل المستشفى ودوره في تنظيم العمل وتسهيل التواصل.',
    imageSrc: '/images/healthcare_uniforms/department-uniforms.jpg',
  },
  {
    id: 24,
    title: 'دور غطاء الرأس والكمامات كجزء أساسي من زي الوقاية في القطاع الصحي',
    slug: 'role-of-head-covers-and-masks-in-healthcare',
    excerpt: 'أهمية استخدام أغطية الرأس والكمامات في بيئة العمل الطبي ودورها في الوقاية والحماية.',
    imageSrc: '/images/healthcare_uniforms/head-masks.jpg',
  },
  {
    id: 25,
    title: 'قصص نجاح: مستشفيات سعودية رائدة في تطبيق أفضل معايير الزي الطبي',
    slug: 'success-stories-saudi-hospitals-with-exemplary-uniform-standards',
    excerpt: 'قصص نجاح لمستشفيات سعودية طبقت أفضل المعايير في اختيار وتصميم الزي الطبي وأثر ذلك على بيئة العمل وسمعة المنشأة.',
    imageSrc: '/images/healthcare_uniforms/success-stories.jpg',
  },
];

export default function HealthcareUniformsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'المدونة', href: '/blog' },
          { label: 'زي القطاع الصحي', href: '/healthcare-uniforms', isCurrent: true }
        ]} 
      />
    
      <section className="mb-16">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/healthcare_uniforms/header.jpg"
            alt="زي القطاع الصحي الموحد"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-transparent to-primary/50">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">زي القطاع الصحي</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-white drop-shadow-md">
              كل ما تحتاج معرفته عن الزي الطبي الموحد للمستشفيات والعيادات في المملكة العربية السعودية
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6">أهمية الزي الطبي في القطاع الصحي</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            يعتبر الزي الطبي أحد أهم مكونات بيئة العمل في القطاع الصحي، حيث يلعب دوراً محورياً في تحديد هوية الطاقم الطبي، وضمان السلامة والوقاية، وتعزيز ثقة المرضى في الخدمات المقدمة.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            في خبراء الزي الموحد، نحرص على توفير أفضل حلول الزي الطبي التي تلبي احتياجات جميع المؤسسات الصحية في المملكة العربية السعودية، بدءاً من المستشفيات الكبرى وحتى العيادات الخاصة، مع الالتزام بأعلى معايير الجودة والمواصفات المعتمدة من وزارة الصحة.
          </p>
          <p className="text-gray-700 leading-relaxed">
            استكشف مجموعة المقالات التالية للتعرف على كل ما يتعلق بالزي الطبي، من معايير الاختيار وأحدث التقنيات إلى طرق العناية والتعقيم الصحيح.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-8">مقالات عن الزي الطبي</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56 w-full">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  <Link href={`/healthcare-uniforms/${article.slug}`} className="hover:text-accent transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                <Link 
                  href={`/healthcare-uniforms/${article.slug}`} 
                  className="inline-block bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى زي طبي موحد لمنشأتك؟</h2>
              <p className="mb-4">
                نحن في خبراء الزي الموحد نقدم حلولاً متكاملة للزي الطبي تناسب احتياجات منشأتك الصحية مع الالتزام بأعلى معايير الجودة.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-primary rounded-lg px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                تواصل معنا الآن
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative h-40 w-40">
                <Image
                  src="/images/healthcare_uniforms/cta-icon.png"
                  alt="طلب زي طبي"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 