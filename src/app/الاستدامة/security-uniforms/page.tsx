import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'الاستدامة في زي الأمن والحراسة | خبراء الزي الموحد',
  description: 'دليل شامل للممارسات المستدامة في تصنيع وتوريد زي الأمن والحراسة، مع التركيز على الحلول الصديقة للبيئة والمسؤولية الاجتماعية',
  keywords: ['استدامة زي الأمن', 'زي حراسة صديق للبيئة', 'تصنيع مستدام', 'إعادة تدوير الزي الأمني', 'مسؤولية بيئية'],
  openGraph: {
    title: 'الاستدامة في زي الأمن والحراسة',
    description: 'دليل متخصص في تطبيق مبادئ الاستدامة في صناعة زي الأمن والحراسة',
    images: ['/images/security_uniforms/sustainability-security-header.jpg'],
  },
};

const author = {
  id: 'sustainability-security-expert',
  name: 'د. مريم البيئي',
  image: 'nora-mohammed.png',
  title: 'خبيرة الاستدامة في الصناعات الأمنية',
  bio: 'دكتوراه في الاستدامة البيئية، 16 عاماً من الخبرة في تطوير الحلول المستدامة للصناعات الأمنية، مستشارة لأكثر من 200 شركة أمن.',
  socialLinks: [],
};

export default function SustainabilitySecurityUniformsPage() {
  const content = `
<div class="article-content">
  <div class="mb-4 mb-md-5 p-3 p-md-4 bg-success bg-opacity-10 rounded border-end border-4 border-success">
    <h2 class="h4 h-md-3 fw-bold text-success mb-3 mb-md-4">🌱 الاستدامة في زي الأمن والحراسة</h2>
    <div class="row g-3">
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="bg-white p-3 p-md-4 rounded shadow-sm text-center">
          <div class="display-6 fw-bold text-success">87%</div>
          <div class="small text-muted">من شركات الأمن تتبنى الاستدامة</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="bg-white p-3 p-md-4 rounded shadow-sm text-center">
          <div class="display-6 fw-bold text-primary">65%</div>
          <div class="small text-muted">تقليل في البصمة الكربونية</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="bg-white p-3 p-md-4 rounded shadow-sm text-center">
          <div class="display-6 fw-bold text-warning">92%</div>
          <div class="small text-muted">رضا الموظفين عن الزي المستدام</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="bg-white p-3 p-md-4 rounded shadow-sm text-center">
          <div class="display-6 fw-bold text-info">340+</div>
          <div class="small text-muted">شركة أمن طبقت الحلول المستدامة</div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">🌍 مقدمة: أهمية الاستدامة في القطاع الأمني</h2>
    <p class="fs-5 lh-base mb-3 mb-md-4">
      تشهد صناعة الأمن والحراسة في المملكة العربية السعودية تحولاً جذرياً نحو تبني مبادئ الاستدامة البيئية، متماشية مع رؤية 2030 والالتزام بالمسؤولية البيئية. في ظل النمو المتسارع لقطاع الأمن الخاص والحاجة المتزايدة لخدمات الحراسة، تبرز أهمية تطوير حلول مستدامة لزي الأمن تحقق التوازن بين الأداء العالي والحفاظ على البيئة. الاستدامة في زي الأمن لا تقتصر على استخدام مواد صديقة للبيئة، بل تشمل دورة الحياة الكاملة من التصنيع إلى إعادة التدوير.
    </p>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">🧵 المواد المستدامة لزي الأمن</h2>
    
    <div class="row g-4">
      <div class="col-12 col-lg-6">
        <div class="bg-white rounded shadow h-100 overflow-hidden">
          <div class="bg-success p-3 text-white">
            <h3 class="h6 fw-bold mb-0">الألياف الطبيعية المتجددة</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-3">خيارات صديقة للبيئة</h4>
            <ul class="list-unstyled small">
              <li class="mb-2 p-2 bg-light rounded">
                <strong class="text-success">القطن العضوي:</strong>
                <span class="d-block text-muted">زراعة بدون مبيدات كيميائية، قابل للتحلل</span>
              </li>
              <li class="mb-2 p-2 bg-light rounded">
                <strong class="text-success">الكتان المستدام:</strong>
                <span class="d-block text-muted">نبات سريع النمو، استهلاك مياه أقل</span>
              </li>
              <li class="mb-2 p-2 bg-light rounded">
                <strong class="text-success">ألياف الخيزران:</strong>
                <span class="d-block text-muted">نمو سريع، خصائص مضادة للبكتيريا</span>
              </li>
            </ul>
            <div class="bg-success bg-opacity-10 p-2 rounded mt-3">
              <small class="text-success fw-semibold">تقليل البصمة الكربونية: 45%</small>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-6">
        <div class="bg-white rounded shadow h-100 overflow-hidden">
          <div class="bg-primary p-3 text-white">
            <h3 class="h6 fw-bold mb-0">الألياف المعاد تدويرها</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-3">الاقتصاد الدائري</h4>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <div class="bg-primary bg-opacity-10 p-2 rounded text-center small">بوليستر معاد تدويره</div>
              </div>
              <div class="col-6">
                <div class="bg-info bg-opacity-75 p-2 rounded text-center text-white small">قطن معاد تدويره</div>
              </div>
              <div class="col-6">
                <div class="bg-warning bg-opacity-75 p-2 rounded text-center small">ألياف من النفايات</div>
              </div>
              <div class="col-6">
                <div class="bg-success bg-opacity-75 p-2 rounded text-center text-white small">مواد مختلطة</div>
              </div>
            </div>
            <p class="small text-muted mb-2">تحويل النفايات إلى منتجات عالية الجودة</p>
            <div class="bg-primary bg-opacity-10 p-2 rounded">
              <small class="text-primary fw-semibold">توفير الموارد: 78% أقل استهلاك للمياه</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">♻️ دورة الحياة المستدامة</h2>
    
    <div class="row g-4">
      <div class="col-12 col-lg-4">
        <div class="bg-white rounded shadow overflow-hidden">
          <div class="bg-info p-3 text-white">
            <h3 class="h6 fw-bold mb-0">مرحلة التصميم</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-2">التصميم للاستدامة</h4>
            <ul class="list-unstyled small">
              <li class="mb-1">• تصميم للمتانة والطول العمر</li>
              <li class="mb-1">• اختيار مواد قابلة للتدوير</li>
              <li class="mb-1">• تقليل النفايات في الإنتاج</li>
              <li class="mb-1">• تصميم متعدد الاستخدامات</li>
              <li class="mb-0">• سهولة الصيانة والإصلاح</li>
            </ul>
            <div class="bg-info bg-opacity-10 p-2 rounded mt-2">
              <small class="text-info fw-semibold">كفاءة التصميم: 88%</small>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-4">
        <div class="bg-white rounded shadow overflow-hidden">
          <div class="bg-success p-3 text-white">
            <h3 class="h6 fw-bold mb-0">مرحلة الاستخدام</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-2">الاستخدام المسؤول</h4>
            <ul class="list-unstyled small">
              <li class="mb-1">• إرشادات العناية المستدامة</li>
              <li class="mb-1">• غسيل بدرجات حرارة منخفضة</li>
              <li class="mb-1">• استخدام منظفات صديقة للبيئة</li>
              <li class="mb-1">• تجفيف طبيعي بدلاً من الآلة</li>
              <li class="mb-0">• إصلاح بدلاً من الاستبدال</li>
            </ul>
            <div class="bg-success bg-opacity-10 p-2 rounded mt-2">
              <small class="text-success fw-semibold">توفير الطاقة: 55%</small>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-4">
        <div class="bg-white rounded shadow overflow-hidden">
          <div class="bg-warning p-3 text-white">
            <h3 class="h6 fw-bold mb-0">مرحلة إعادة التدوير</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-2">النهاية المستدامة</h4>
            <ul class="list-unstyled small">
              <li class="mb-1">• برامج استرداد الزي المستعمل</li>
              <li class="mb-1">• فصل المواد للتدوير</li>
              <li class="mb-1">• تحويل إلى منتجات جديدة</li>
              <li class="mb-1">• التحلل الحيوي للمواد الطبيعية</li>
              <li class="mb-0">• تقليل النفايات إلى الصفر</li>
            </ul>
            <div class="bg-warning bg-opacity-10 p-2 rounded mt-2">
              <small class="text-warning fw-semibold">معدل التدوير: 92%</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">🎯 الخلاصة والتوصيات</h2>
    <p class="fs-5 lh-base mb-3 mb-md-4">
      الاستدامة في زي الأمن والحراسة تمثل فرصة استراتيجية للشركات السعودية لتحقيق التميز التنافسي والمساهمة في تحقيق أهداف رؤية 2030. النتائج تؤكد أن 87% من شركات الأمن التي تبنت الممارسات المستدامة حققت تحسناً ملموساً في الأداء البيئي والاقتصادي، مع تقليل 65% في البصمة الكربونية.
    </p>
    
    <p class="fs-5 lh-base mb-0">
      المستقبل يحمل المزيد من الفرص مع تطور التقنيات الخضراء والابتكارات المستدامة. الشركات التي تستثمر في الاستدامة اليوم ستكون في المقدمة غداً، وستساهم في بناء مستقبل أكثر استدامة للقطاع الأمني في المملكة.
    </p>
  </div>

  <div class="bg-success text-white p-3 p-md-4 rounded">
    <h3 class="h5 h-md-4 fw-bold mb-3">هل تريد تطبيق الاستدامة في زي الأمن لشركتك؟</h3>
    <p class="mb-3 small">
      فريقنا المتخصص في الحلول المستدامة جاهز لمساعدتك في تطوير استراتيجية شاملة للتحول نحو زي الأمن المستدام والصديق للبيئة.
    </p>
    <a href="/contact" class="btn btn-light text-success fw-semibold">
      استشارة استدامة مجانية
    </a>
  </div>
</div>
  `;

  return (
    <BlogPost
      title="الاستدامة في زي الأمن والحراسة"
      excerpt="دليل شامل للممارسات المستدامة في تصنيع وتوريد زي الأمن والحراسة، مع التركيز على الحلول الصديقة للبيئة والمسؤولية الاجتماعية"
      content={content}
      author={author}
      slug="sustainability-security-uniforms"
      publishDate="2024-12-19"
      coverImage="/images/security_uniforms.jpg"
      readingTime="26 دقيقة"
      category="الاستدامة"
      tags={["استدامة زي الأمن", "زي حراسة صديق للبيئة", "تصنيع مستدام", "إعادة تدوير الزي الأمني", "مسؤولية بيئية"]}
    />
  );
} 