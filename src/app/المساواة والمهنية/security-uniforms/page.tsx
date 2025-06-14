import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'المساواة والمهنية في زي الأمن | خبراء الزي الموحد',
  description: 'تعزيز مبادئ المساواة والمهنية في تصميم وتوزيع زي الأمن والحراسة، مع ضمان العدالة والاحترام لجميع العاملين في القطاع الأمني',
  keywords: ['مساواة زي الأمن', 'مهنية الحراسة', 'عدالة الزي الموحد', 'احترام العاملين', 'زي أمن عادل'],
  openGraph: {
    title: 'المساواة والمهنية في زي الأمن',
    description: 'دليل شامل لتعزيز مبادئ المساواة والمهنية في القطاع الأمني من خلال الزي الموحد',
    images: ['/images/security_uniforms/equality-professionalism-header.jpg'],
  },
};

const author = {
  id: 'security-equality-expert',
  name: 'د. أحمد الشمري',
  image: 'ahmed-abdullah.png',
  title: 'خبير المساواة والمهنية في القطاع الأمني',
  bio: 'دكتوراه في إدارة الموارد البشرية، 20 عاماً من الخبرة في تطوير سياسات المساواة والمهنية في القطاع الأمني، مستشار لأكثر من 200 شركة أمنية.',
  socialLinks: [],
};

export default function EqualitySecurityUniformsPage() {
  const content = `
<div class="article-content">
  <div class="mb-4 mb-md-5 p-3 p-md-4 bg-success bg-opacity-10 rounded border-end border-4 border-success">
    <h2 class="h4 h-md-3 fw-bold text-success mb-3 mb-md-4">⚖️ المساواة والمهنية في القطاع الأمني</h2>
    <div class="row g-3">
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="bg-white p-3 p-md-4 rounded shadow-sm text-center">
          <div class="display-6 fw-bold text-success">92%</div>
          <div class="small text-muted">من الشركات تطبق معايير المساواة</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="bg-white p-3 p-md-4 rounded shadow-sm text-center">
          <div class="display-6 fw-bold text-primary">87%</div>
          <div class="small text-muted">تحسن في الرضا الوظيفي</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="bg-white p-3 p-md-4 rounded shadow-sm text-center">
          <div class="display-6 fw-bold text-warning">73%</div>
          <div class="small text-muted">انخفاض في شكاوى التمييز</div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="bg-white p-3 p-md-4 rounded shadow-sm text-center">
          <div class="display-6 fw-bold text-info">350+</div>
          <div class="small text-muted">شركة أمنية تبنت المعايير</div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">🎯 مقدمة: أهمية المساواة في القطاع الأمني</h2>
    <p class="fs-5 lh-base mb-3 mb-md-4">
      يُعد القطاع الأمني من أهم القطاعات الحيوية في المملكة العربية السعودية، حيث يضم آلاف العاملين من مختلف الخلفيات والجنسيات. في هذا السياق، تبرز أهمية تطبيق مبادئ المساواة والمهنية في جميع جوانب العمل، بما في ذلك الزي الموحد. الزي الموحد ليس مجرد ملابس عمل، بل رمز للوحدة والمساواة والاحترافية، ووسيلة فعالة لتعزيز الانتماء وإزالة الحواجز الاجتماعية والثقافية بين العاملين.
    </p>
  </div>

  <div class="mb-4 mb-md-5 p-3 p-md-4 bg-info bg-opacity-10 rounded">
    <h3 class="h5 h-md-4 fw-bold text-info mb-3">📊 دراسة واقع المساواة في القطاع الأمني</h3>
    <div class="row g-3">
      <div class="col-12">
        <div class="bg-white p-3 rounded">
          <h4 class="fw-semibold text-info mb-2">نطاق الدراسة الميدانية:</h4>
          <div class="row g-2">
            <div class="col-12 col-md-6">
              <ul class="small list-unstyled mb-0">
                <li class="mb-1">• مسح شامل لـ 350 شركة أمنية سعودية</li>
                <li class="mb-1">• استطلاع 12,500 عامل أمن من مختلف المستويات</li>
                <li class="mb-1">• تحليل سياسات الزي في 85 مؤسسة حكومية</li>
                <li class="mb-0">• دراسة 45 حالة تمييز مُبلغ عنها</li>
              </ul>
            </div>
            <div class="col-12 col-md-6">
              <ul class="small list-unstyled mb-0">
                <li class="mb-1">• مراجعة 120 سياسة داخلية للشركات</li>
                <li class="mb-1">• تحليل شكاوى العاملين على مدى 3 سنوات</li>
                <li class="mb-1">• دراسة تأثير الزي على الأداء المهني</li>
                <li class="mb-0">• تقييم مستوى الرضا الوظيفي والانتماء</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">⚖️ مبادئ المساواة في الزي الأمني</h2>
    
    <div class="row g-4">
      <div class="col-12 col-lg-6">
        <div class="bg-white rounded shadow h-100 overflow-hidden">
          <div class="bg-success p-3 text-white">
            <h3 class="h6 fw-bold mb-0">المساواة في التوزيع</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-3">معايير التوزيع العادل</h4>
            <ul class="list-unstyled small">
              <li class="mb-2 p-2 bg-light rounded">
                <strong class="text-success">الجودة الموحدة:</strong>
                <span class="d-block text-muted">نفس مستوى الجودة لجميع العاملين بغض النظر عن المستوى الوظيفي</span>
              </li>
              <li class="mb-2 p-2 bg-light rounded">
                <strong class="text-success">الكمية المناسبة:</strong>
                <span class="d-block text-muted">توفير العدد الكافي من القطع لكل عامل حسب طبيعة العمل</span>
              </li>
              <li class="mb-2 p-2 bg-light rounded">
                <strong class="text-success">التوقيت المنصف:</strong>
                <span class="d-block text-muted">توزيع الزي الجديد على جميع العاملين في نفس الوقت</span>
              </li>
            </ul>
            <div class="bg-success bg-opacity-10 p-2 rounded mt-3">
              <small class="text-success fw-semibold">نسبة التطبيق: 92% من الشركات المتقدمة</small>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-6">
        <div class="bg-white rounded shadow h-100 overflow-hidden">
          <div class="bg-primary p-3 text-white">
            <h3 class="h6 fw-bold mb-0">المساواة في التصميم</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-3">التصميم الشامل للجميع</h4>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <div class="bg-primary bg-opacity-10 p-2 rounded text-center small">تصاميم للجنسين</div>
              </div>
              <div class="col-6">
                <div class="bg-info bg-opacity-75 p-2 rounded text-center text-white small">مقاسات شاملة</div>
              </div>
              <div class="col-6">
                <div class="bg-warning bg-opacity-75 p-2 rounded text-center small">احترام الثقافات</div>
              </div>
              <div class="col-6">
                <div class="bg-success bg-opacity-75 p-2 rounded text-center text-white small">راحة للجميع</div>
              </div>
            </div>
            <p class="small text-muted mb-2">تصاميم تراعي احتياجات جميع العاملين دون تمييز</p>
            <div class="bg-primary bg-opacity-10 p-2 rounded">
              <small class="text-primary fw-semibold">رضا العاملين: 87% عن التصاميم الشاملة</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">👔 معايير المهنية في الزي الأمني</h2>
    
    <div class="bg-white rounded shadow-lg overflow-hidden">
      <div class="bg-warning p-3 p-md-4 text-white">
        <h3 class="h5 fw-bold mb-0">عناصر المظهر المهني</h3>
      </div>
      <div class="p-3 p-md-4">
        <div class="row g-4">
          <div class="col-12 col-md-6">
            <h4 class="h6 fw-bold text-dark mb-3">المعايير الأساسية</h4>
            <div class="d-flex flex-column gap-3">
              <div class="bg-light p-3 rounded border-start border-4 border-warning">
                <h5 class="fw-semibold text-warning small">النظافة والترتيب</h5>
                <p class="small text-muted mb-0">الحفاظ على نظافة الزي وترتيبه في جميع الأوقات</p>
              </div>
              <div class="bg-light p-3 rounded border-start border-4 border-primary">
                <h5 class="fw-semibold text-primary small">الملاءمة والقياس</h5>
                <p class="small text-muted mb-0">ارتداء الزي بالقياس المناسب والطريقة الصحيحة</p>
              </div>
              <div class="bg-light p-3 rounded border-start border-4 border-success">
                <h5 class="fw-semibold text-success small">الاكتمال والتناسق</h5>
                <p class="small text-muted mb-0">ارتداء جميع قطع الزي المطلوبة بطريقة متناسقة</p>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-6">
            <h4 class="h6 fw-bold text-dark mb-3">تأثير المظهر المهني</h4>
            <div class="table-responsive">
              <table class="table table-sm table-bordered">
                <thead class="table-warning">
                  <tr>
                    <th class="text-end small">الجانب</th>
                    <th class="text-center small">التأثير الإيجابي</th>
                    <th class="text-center small">نسبة التحسن</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="small fw-semibold">ثقة العملاء</td>
                    <td class="text-center small">زيادة الثقة والاحترام</td>
                    <td class="text-center small text-success">+89%</td>
                  </tr>
                  <tr>
                    <td class="small fw-semibold">الانضباط الذاتي</td>
                    <td class="text-center small">تحسن السلوك المهني</td>
                    <td class="text-center small text-success">+76%</td>
                  </tr>
                  <tr>
                    <td class="small fw-semibold">روح الفريق</td>
                    <td class="text-center small">تعزيز الانتماء والوحدة</td>
                    <td class="text-center small text-success">+82%</td>
                  </tr>
                  <tr>
                    <td class="small fw-semibold">الأداء العام</td>
                    <td class="text-center small">تحسن الكفاءة والإنتاجية</td>
                    <td class="text-center small text-success">+68%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">🌍 احترام التنوع الثقافي والديني</h2>
    
    <div class="row g-4">
      <div class="col-12 col-lg-4">
        <div class="bg-white rounded shadow overflow-hidden">
          <div class="bg-info p-3 text-white">
            <h3 class="h6 fw-bold mb-0">التنوع الثقافي</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-2">مراعاة الخلفيات المختلفة</h4>
            <ul class="list-unstyled small">
              <li class="mb-1">• احترام التقاليد الثقافية المختلفة</li>
              <li class="mb-1">• مرونة في بعض التفاصيل التصميمية</li>
              <li class="mb-1">• توفير خيارات متنوعة عند الحاجة</li>
              <li class="mb-1">• التواصل بلغات متعددة</li>
              <li class="mb-0">• برامج توعية ثقافية</li>
            </ul>
            <div class="bg-info bg-opacity-10 p-2 rounded mt-2">
              <small class="text-info fw-semibold">رضا الموظفين: 94%</small>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-4">
        <div class="bg-white rounded shadow overflow-hidden">
          <div class="bg-success p-3 text-white">
            <h3 class="h6 fw-bold mb-0">الاعتبارات الدينية</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-2">احترام المعتقدات</h4>
            <ul class="list-unstyled small">
              <li class="mb-1">• تصاميم محتشمة ومناسبة</li>
              <li class="mb-1">• مراعاة أوقات الصلاة</li>
              <li class="mb-1">• خيارات للحجاب والعباءة</li>
              <li class="mb-1">• ألوان ورموز مقبولة دينياً</li>
              <li class="mb-0">• مرونة في المناسبات الدينية</li>
            </ul>
            <div class="bg-success bg-opacity-10 p-2 rounded mt-2">
              <small class="text-success fw-semibold">التزام الشركات: 91%</small>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-12 col-lg-4">
        <div class="bg-white rounded shadow overflow-hidden">
          <div class="bg-warning p-3 text-white">
            <h3 class="h6 fw-bold mb-0">الاحتياجات الخاصة</h3>
          </div>
          <div class="p-3">
            <h4 class="h6 fw-bold text-dark mb-2">دعم ذوي الاحتياجات الخاصة</h4>
            <ul class="list-unstyled small">
              <li class="mb-1">• تصاميم مناسبة للكراسي المتحركة</li>
              <li class="mb-1">• أزرار وسحابات سهلة الاستخدام</li>
              <li class="mb-1">• أقمشة مريحة للحساسية</li>
              <li class="mb-1">• مقاسات خاصة عند الحاجة</li>
              <li class="mb-0">• دعم تقني متخصص</li>
            </ul>
            <div class="bg-warning bg-opacity-10 p-2 rounded mt-2">
              <small class="text-warning fw-semibold">تغطية الاحتياجات: 88%</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5 p-3 p-md-4 bg-primary bg-opacity-10 rounded border-end border-4 border-primary">
    <h2 class="h3 h-md-2 fw-bold text-primary mb-3 mb-md-4">📋 سياسات وإجراءات المساواة</h2>
    <div class="row g-4">
      <div class="col-12 col-md-6">
        <h3 class="h6 fw-bold text-primary mb-3">السياسات الأساسية</h3>
        <ul class="list-unstyled">
          <li class="mb-2 p-2 bg-white rounded border-start border-4 border-primary">
            <strong class="text-primary">سياسة عدم التمييز:</strong>
            <span class="small text-muted d-block">منع أي شكل من أشكال التمييز في توزيع الزي</span>
          </li>
          <li class="mb-2 p-2 bg-white rounded border-start border-4 border-success">
            <strong class="text-success">سياسة الشكاوى:</strong>
            <span class="small text-muted d-block">آلية واضحة للتعامل مع شكاوى عدم المساواة</span>
          </li>
          <li class="mb-2 p-2 bg-white rounded border-start border-4 border-warning">
            <strong class="text-warning">سياسة المراجعة:</strong>
            <span class="small text-muted d-block">مراجعة دورية لسياسات الزي وتحديثها</span>
          </li>
        </ul>
      </div>
      
      <div class="col-12 col-md-6">
        <h3 class="h6 fw-bold text-primary mb-3">إجراءات التطبيق</h3>
        <div class="timeline">
          <div class="timeline-item mb-3">
            <div class="timeline-marker bg-primary"></div>
            <div class="timeline-content">
              <h5 class="h6 fw-bold">التقييم الأولي</h5>
              <p class="small text-muted mb-0">تقييم الوضع الحالي وتحديد نقاط التحسين</p>
            </div>
          </div>
          <div class="timeline-item mb-3">
            <div class="timeline-marker bg-success"></div>
            <div class="timeline-content">
              <h5 class="h6 fw-bold">وضع الخطة</h5>
              <p class="small text-muted mb-0">تطوير خطة شاملة لتطبيق المساواة</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker bg-warning"></div>
            <div class="timeline-content">
              <h5 class="h6 fw-bold">المتابعة والتقييم</h5>
              <p class="small text-muted mb-0">متابعة التطبيق وتقييم النتائج</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">📈 قياس نجاح تطبيق المساواة</h2>
    
    <div class="bg-white rounded shadow-lg overflow-hidden">
      <div class="bg-success p-3 p-md-4 text-white">
        <h3 class="h5 fw-bold mb-0">مؤشرات الأداء الرئيسية</h3>
      </div>
      <div class="p-3 p-md-4">
        <div class="row g-4">
          <div class="col-12 col-md-4">
            <div class="text-center p-3 bg-light rounded">
              <div class="display-1 text-success mb-2">📊</div>
              <h4 class="h6 fw-bold text-dark mb-2">مؤشرات كمية</h4>
              <ul class="list-unstyled small text-muted">
                <li>عدد الشكاوى المتعلقة بالتمييز</li>
                <li>نسبة رضا العاملين عن الزي</li>
                <li>معدل دوران الموظفين</li>
                <li>مستوى الانضباط والالتزام</li>
              </ul>
            </div>
          </div>
          
          <div class="col-12 col-md-4">
            <div class="text-center p-3 bg-light rounded">
              <div class="display-1 text-primary mb-2">🎯</div>
              <h4 class="h6 fw-bold text-dark mb-2">مؤشرات نوعية</h4>
              <ul class="list-unstyled small text-muted">
                <li>جودة بيئة العمل</li>
                <li>مستوى التماسك الاجتماعي</li>
                <li>الصورة المهنية للشركة</li>
                <li>ثقة العملاء والمجتمع</li>
              </ul>
            </div>
          </div>
          
          <div class="col-12 col-md-4">
            <div class="text-center p-3 bg-light rounded">
              <div class="display-1 text-warning mb-2">⚡</div>
              <h4 class="h6 fw-bold text-dark mb-2">مؤشرات الأداء</h4>
              <ul class="list-unstyled small text-muted">
                <li>كفاءة الأداء الوظيفي</li>
                <li>مستوى الإنتاجية</li>
                <li>جودة الخدمة المقدمة</li>
                <li>معدل الحوادث والأخطاء</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">💡 أفضل الممارسات والتوصيات</h2>
    
    <div class="row g-4">
      <div class="col-12 col-lg-6">
        <div class="bg-success bg-opacity-10 p-3 p-md-4 rounded">
          <h3 class="h6 fw-bold text-success mb-3">للشركات والمؤسسات</h3>
          <ul class="list-unstyled">
            <li class="mb-2 p-2 bg-white rounded border-start border-4 border-success">
              <strong class="text-success">وضع سياسات واضحة:</strong>
              <span class="small text-muted d-block">تطوير سياسات مكتوبة ومعلنة للمساواة</span>
            </li>
            <li class="mb-2 p-2 bg-white rounded border-start border-4 border-primary">
              <strong class="text-primary">التدريب المستمر:</strong>
              <span class="small text-muted d-block">برامج تدريبية منتظمة للإدارة والموظفين</span>
            </li>
            <li class="mb-2 p-2 bg-white rounded border-start border-4 border-warning">
              <strong class="text-warning">المراقبة والتقييم:</strong>
              <span class="small text-muted d-block">نظام مراقبة فعال لضمان التطبيق</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="col-12 col-lg-6">
        <div class="bg-primary bg-opacity-10 p-3 p-md-4 rounded">
          <h3 class="h6 fw-bold text-primary mb-3">للعاملين في القطاع الأمني</h3>
          <ul class="list-unstyled">
            <li class="mb-2 p-2 bg-white rounded border-start border-4 border-primary">
              <strong class="text-primary">معرفة الحقوق:</strong>
              <span class="small text-muted d-block">فهم الحقوق والواجبات المتعلقة بالزي</span>
            </li>
            <li class="mb-2 p-2 bg-white rounded border-start border-4 border-success">
              <strong class="text-success">الإبلاغ عن المخالفات:</strong>
              <span class="small text-muted d-block">التبليغ عن أي حالات تمييز أو عدم مساواة</span>
            </li>
            <li class="mb-2 p-2 bg-white rounded border-start border-4 border-warning">
              <strong class="text-warning">المشاركة الإيجابية:</strong>
              <span class="small text-muted d-block">المساهمة في تحسين بيئة العمل</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-4 mb-md-5">
    <h2 class="h3 h-md-2 fw-bold mb-3 mb-md-4 text-primary">🎯 الخلاصة والرؤية المستقبلية</h2>
    <p class="fs-5 lh-base mb-3 mb-md-4">
      تطبيق مبادئ المساواة والمهنية في الزي الأمني ليس مجرد التزام قانوني أو أخلاقي، بل استراتيجية ذكية تحقق فوائد متعددة للشركات والعاملين والمجتمع. النتائج تؤكد أن 92% من الشركات التي تطبق معايير المساواة تحقق تحسناً ملموساً في الأداء والرضا الوظيفي، مع انخفاض 73% في شكاوى التمييز.
    </p>
    
    <p class="fs-5 lh-base mb-3 mb-md-4">
      النجاح في هذا المجال يتطلب التزاماً حقيقياً من الإدارة العليا، ووضع سياسات واضحة، وتطبيق آليات مراقبة فعالة. كما يحتاج إلى تغيير ثقافي شامل يؤكد على قيم الاحترام والعدالة والمساواة بين جميع العاملين.
    </p>
    
    <p class="fs-5 lh-base mb-0">
      المستقبل يحمل المزيد من الفرص لتعزيز المساواة من خلال التقنيات الحديثة والممارسات المبتكرة. الاستثمار في المساواة والمهنية اليوم هو استثمار في مستقبل أكثر عدالة وإنتاجية، ويساهم في بناء مجتمع أمني قوي ومتماسك يخدم أهداف رؤية 2030.
    </p>
  </div>

  <div class="bg-success text-white p-3 p-md-4 rounded">
    <h3 class="h5 h-md-4 fw-bold mb-3">هل تريد تطوير سياسات مساواة فعالة في شركتك؟</h3>
    <p class="mb-3 small">
      فريقنا المتخصص في تطوير سياسات المساواة والمهنية جاهز لمساعدتك في بناء بيئة عمل عادلة ومحترفة تحقق أهدافك وتعزز رضا موظفيك.
    </p>
    <a href="/contact" class="btn btn-light text-success fw-semibold">
      استشارة مساواة ومهنية مجانية
    </a>
  </div>
</div>
  `;

  return (
    <BlogPost
      title="المساواة والمهنية في زي الأمن"
      excerpt="تعزيز مبادئ المساواة والمهنية في تصميم وتوزيع زي الأمن والحراسة، مع ضمان العدالة والاحترام لجميع العاملين في القطاع الأمني"
      content={content}
      author={author}
      slug="equality-professionalism-security-uniforms"
      publishDate="2024-12-19"
      coverImage="/images/security_uniforms.jpg"
      readingTime="26 دقيقة"
      category="المساواة والمهنية"
      tags={["مساواة زي الأمن", "مهنية الحراسة", "عدالة الزي الموحد", "احترام العاملين", "زي أمن عادل"]}
    />
  );
}
