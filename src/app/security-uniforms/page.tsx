import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'زي قطاع الأمن | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'كل ما تحتاج معرفته عن الزي الموحد لقطاع الأمن في المملكة العربية السعودية - شركات الأمن، الحراسات، المنشآت الخاصة والعامة مع نصائح اختيار التصميم والأقمشة المناسبة',
};

// قائمة المقالات مع عناوينها وروابطها الإنجليزية
const articles = [
  {
    id: 1,
    title: 'كيف تختار الزي الموحد المناسب لرجال الأمن في السعودية؟',
    slug: 'how-to-choose-suitable-security-uniforms-in-saudi-arabia',
    excerpt: 'دليل شامل لاختيار الزي الموحد المناسب لرجال الأمن في السعودية مع مراعاة المعايير المحلية والمتطلبات العملية.',
    imageSrc: '/images/security_uniforms/choosing-uniforms.jpg',
  },
  {
    id: 2,
    title: 'أهمية الزي الأمني في فرض الهيبة وتعزيز الشعور بالأمان',
    slug: 'importance-of-security-uniforms-in-imposing-authority',
    excerpt: 'دراسة تأثير الزي الأمني على فرض الهيبة وتعزيز الشعور بالأمان لدى الجمهور وكيف يساهم في تحقيق أهداف الأمن.',
    imageSrc: '/images/security_uniforms/imposing-authority.jpg',
  },
  {
    id: 3,
    title: 'معايير اختيار أقمشة زي الأمن: المتانة، الراحة، ومقاومة العوامل الجوية',
    slug: 'standards-for-choosing-security-uniform-fabrics',
    excerpt: 'تعرف على المعايير الرئيسية لاختيار أقمشة زي الأمن التي تجمع بين المتانة، الراحة، ومقاومة العوامل الجوية.',
    imageSrc: '/images/security_uniforms/fabric-standards.jpg',
  },
  {
    id: 6,
    title: 'دور الألوان الداكنة والشارات الرسمية في تصميم زي الأمن',
    slug: 'role-of-dark-colors-and-official-badges-in-security-uniform-design',
    excerpt: 'أهمية استخدام الألوان الداكنة والشارات الرسمية في تصميم زي الأمن وتأثيرها النفسي والعملي.',
    imageSrc: '/images/security_uniforms/dark-colors-badges.jpg',
  },
  {
    id: 9,
    title: 'أهمية السترات الواقية والعاكسة كجزء من زي رجال الأمن',
    slug: 'importance-of-protective-reflective-vests-for-security-personnel',
    excerpt: 'أهمية استخدام السترات الواقية والعاكسة كجزء أساسي من زي رجال الأمن وفوائدها في مختلف الظروف.',
    imageSrc: '/images/security_uniforms/reflective-vests.jpg',
  },
  {
    id: 12,
    title: 'أفضل أنواع الأحذية التكتيكية (Tactical Boots) لرجال الأمن',
    slug: 'best-tactical-boots-for-security-personnel',
    excerpt: 'مراجعة لأفضل أنواع الأحذية التكتيكية المناسبة لرجال الأمن مع مقارنة بين الخيارات المختلفة.',
    imageSrc: '/images/security_uniforms/tactical-boots.jpg',
  },
];

export default function SecurityUniformsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Breadcrumb 
        items={[
          { label: 'المدونة', href: '/blog' },
          { label: 'زي قطاع الأمن', href: '/security-uniforms', isCurrent: true }
        ]} 
      />
    
      <section className="mb-16">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">زي قطاع الأمن والحراسة المتخصص</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            مجموعة متنوعة من الأزياء الموحدة لقطاع الأمن والحراسات المصممة خصيصاً للسوق السعودي مع مراعاة أعلى معايير الجودة والسلامة المهنية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              href={`/security-uniforms/${article.slug}`}
              key={article.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover-lift">
                <div className="relative h-48">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="my-16 bg-gray-50 p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">خبراء في تصنيع وتوريد يونيفورم الأمن بجميع أشكاله</h2>
            <p className="text-gray-600 mb-6">
              نقدم تشكيلة متنوعة من الأزياء الموحدة لقطاع الأمن والحراسات بدءًا من الزي الرسمي وحتى الملابس التكتيكية، مع خيارات مختلفة تناسب متطلبات كل منشأة والمناخ السعودي.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">تصميم آمن</h3>
                  <p className="text-sm text-gray-600">مطابق لمعايير السلامة</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">تخصيص كامل</h3>
                  <p className="text-sm text-gray-600">بحسب متطلبات المنشأة</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                <Image
              src="/images/security_uniforms/security_guards_lineup.jpg"
              alt="أزياء موحدة لقطاع الأمن"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">لماذا الزي الموحد مهم لفرق الأمن؟</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            يلعب الزي الموحد دوراً محورياً في نجاح أعمال الحراسة الأمنية عبر ترسيخ الهيبة وتعزيز الثقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">سهولة التمييز والتعرف</h3>
            <p className="text-gray-600">
              يساعد الزي الموحد على تمييز أفراد الأمن بسهولة من قبل الجمهور خاصة في حالات الطوارئ، مما يسهل طلب المساعدة عند الحاجة.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">تعزيز الهيبة والسلطة</h3>
            <p className="text-gray-600">
              يمنح الزي الرسمي هيبة وثقة لرجال الأمن، مما يساهم في ضمان الاحترام والامتثال للتعليمات الأمنية من قبل الزوار والمراجعين.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">الانتماء للفريق</h3>
            <p className="text-gray-600">
              يعزز الزي الموحد الشعور بالانتماء والوحدة بين أفراد فريق الأمن، مما يحسن الأداء الجماعي ويرفع من الروح المعنوية.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">أنواع الزي الأمني حسب المنشأة</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-r-4 border-primary">
                <h3 className="font-bold text-lg mb-1">زي الأمن للمرافق الحكومية</h3>
                <p className="text-gray-600">تصاميم رسمية تعكس هيبة المؤسسات الحكومية مع الالتزام بالألوان والشارات الرسمية.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-r-4 border-primary">
                <h3 className="font-bold text-lg mb-1">زي الأمن للمجمعات التجارية والمولات</h3>
                <p className="text-gray-600">أزياء أنيقة تجمع بين المظهر المهني والراحة للعمل لساعات طويلة في بيئة استهلاكية.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-r-4 border-primary">
                <h3 className="font-bold text-lg mb-1">زي الأمن للمنشآت الصناعية</h3>
                <p className="text-gray-600">تصاميم متينة مع عناصر عاكسة للضوء ومقاومة للحرارة والمواد الكيميائية حسب طبيعة الصناعة.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-r-4 border-primary">
                <h3 className="font-bold text-lg mb-1">زي الأمن للفنادق والمنتجعات</h3>
                <p className="text-gray-600">أزياء أنيقة تتناسب مع الطابع الفاخر للمنشآت الفندقية مع الحفاظ على الطابع الأمني.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/security_uniforms/government_security.jpg" alt="زي الأمن للمرافق الحكومية" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/security_uniforms/mall_security.jpg" alt="زي الأمن للمجمعات التجارية" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/security_uniforms/industrial_security.jpg" alt="زي الأمن للمنشآت الصناعية" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/images/security_uniforms/hotel_security.jpg" alt="زي الأمن للفنادق" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="my-16 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ناقش احتياجاتك معنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم استشارات مجانية لمساعدتك في اختيار الزي الأمني المناسب لمنشأتك. تواصل معنا اليوم للحصول على عرض سعر مخصص.
          </p>
        </div>
        <div className="flex justify-center">
          <Link 
            href="/contact" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-block"
          >
            احصل على عرض سعر
          </Link>
        </div>
      </section>
    </div>
  );
} 