import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الشروط والأحكام | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'تعرف على الشروط والأحكام الخاصة بشركة خبراء الزي الموحد لتوريد وتصنيع الزي الموحد في المملكة العربية السعودية',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto pt-16">
      <h1 className="text-4xl font-bold text-primary mb-8">الشروط والأحكام</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="prose prose-lg max-w-none rtl">
          <p className="text-gray-500 mb-8">آخر تحديث: 1 مايو 2023</p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">مقدمة</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            مرحبًا بك في موقع خبراء الزي الموحد. تنطبق هذه الشروط والأحكام على استخدامك لموقعنا الإلكتروني وعلى جميع المعاملات التي تتم معنا. باستخدامك للموقع أو بشرائك لمنتجاتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">استخدام الموقع</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            أنت توافق على استخدام موقعنا للأغراض المشروعة فقط وبطريقة لا تنتهك حقوق أي طرف ثالث، أو تقيد أو تمنع استخدام الموقع من قبل أي طرف ثالث.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            يحظر عليك:
          </p>
          <ul className="list-disc mr-8 mb-6 text-gray-700 space-y-2">
            <li>نشر أي مواد غير قانونية أو احتيالية أو تمييزية أو تهديدية.</li>
            <li>انتهاك حقوق الملكية الفكرية الخاصة بنا أو بأي طرف ثالث.</li>
            <li>استخدام الموقع بطريقة قد تضر بالموقع أو تجعله غير متاح للآخرين.</li>
            <li>استخدام أي روبوتات أو برامج آلية لجمع البيانات من موقعنا.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-primary mb-4">المنتجات والخدمات</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            نحن نسعى جاهدين لضمان دقة جميع المعلومات المقدمة على موقعنا، بما في ذلك وصف المنتجات والأسعار. ومع ذلك، قد تحدث أخطاء من وقت لآخر.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            نحتفظ بالحق في:
          </p>
          <ul className="list-disc mr-8 mb-6 text-gray-700 space-y-2">
            <li>تغيير أو سحب أي منتج أو خدمة نقدمها دون إشعار مسبق.</li>
            <li>تحديث الأسعار والمواصفات في أي وقت.</li>
            <li>رفض أي طلب أو جزء من الطلب وفقًا لتقديرنا.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-primary mb-4">عملية الطلب</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            عند تقديم طلب من خلال موقعنا أو عبر الهاتف أو البريد الإلكتروني، فإنك تقدم عرضًا للشراء وفقًا لهذه الشروط. لا يتم تأكيد قبول العرض حتى نرسل إليك تأكيدًا كتابيًا.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            قبل تقديم الطلب النهائي، ستتاح لك الفرصة لمراجعة طلبك وتصحيح أي أخطاء. يرجى التأكد من مراجعة طلبك بعناية قبل تقديمه.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">الدفع</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            نقبل مجموعة متنوعة من طرق الدفع، بما في ذلك التحويل المصرفي والدفع عبر الإنترنت. جميع المدفوعات يجب أن تتم مقدمًا ما لم يتفق على خلاف ذلك.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            في حالة الطلبات الكبيرة أو التصاميم المخصصة، قد نطلب دفعة مقدمة بنسبة 50% من قيمة الطلب قبل البدء في الإنتاج، مع دفع الرصيد المتبقي قبل الشحن.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">التسليم</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            سنبذل قصارى جهدنا للالتزام بتواريخ التسليم المقدرة. ومع ذلك، فإن جميع التواريخ المقدمة هي تقديرات فقط وليست ملزمة. لا نتحمل المسؤولية عن أي تأخير في التسليم ناتج عن ظروف خارجة عن سيطرتنا.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            ستكون مسؤولاً عن توفير عنوان تسليم دقيق وضمان وجود شخص لاستلام البضائع في العنوان المتفق عليه.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">الإرجاع والاستبدال</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            نقبل إرجاع المنتجات خلال 14 يومًا من الاستلام إذا كانت المنتجات معيبة أو تالفة أو لا تتطابق مع الوصف المقدم. لا نقبل الإرجاع للمنتجات المخصصة أو المصنوعة حسب الطلب ما لم تكن معيبة.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            لإجراء عملية إرجاع، يرجى الاتصال بنا أولاً للحصول على تفاصيل وتعليمات الإرجاع. يجب أن تكون المنتجات المرتجعة في حالتها الأصلية وبدون استخدام.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">الضمان</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            نضمن أن تكون جميع منتجاتنا خالية من عيوب الصناعة والمواد لمدة 90 يومًا من تاريخ التسليم. لا يغطي هذا الضمان التلف الناتج عن الاستخدام غير السليم أو التآكل العادي.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">حدود المسؤولية</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            إلى أقصى حد يسمح به القانون، لن نكون مسؤولين عن أي خسائر غير مباشرة أو تبعية أو خاصة أو عرضية أو تأديبية تنشأ عن استخدامك لموقعنا أو منتجاتنا، بما في ذلك خسارة الأرباح أو البيانات أو فرص العمل.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            في جميع الحالات، تقتصر مسؤوليتنا الإجمالية على المبلغ الذي دفعته مقابل المنتجات أو الخدمات المعنية.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">الملكية الفكرية</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            جميع المحتويات الموجودة على موقعنا، بما في ذلك النصوص والصور والشعارات والرسومات وتصميمات المنتجات، هي ملكية لنا أو نمتلك ترخيصًا لاستخدامها. يحظر عليك استخدام أو نسخ أو تعديل أي محتوى دون موافقة صريحة منا.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">القانون الحاكم</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية وتفسر وفقًا لها. أي نزاع ينشأ عن هذه الشروط سيخضع للاختصاص القضائي الحصري للمحاكم في المملكة العربية السعودية.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">التعديلات على الشروط والأحكام</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. ستكون التغييرات سارية فور نشرها على موقعنا. يرجى مراجعة هذه الشروط بانتظام للبقاء على اطلاع بأي تغييرات.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">اتصل بنا</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            إذا كان لديك أي أسئلة أو استفسارات حول هذه الشروط والأحكام، يرجى الاتصال بنا على:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-2 text-gray-700">البريد الإلكتروني: info@uniformexperts.sa</p>
            <p className="mb-2 text-gray-700">الهاتف: +966-12-345-6789</p>
            <p className="text-gray-700">العنوان: شارع الملك فهد، حي الورود، الرياض، المملكة العربية السعودية</p>
          </div>
        </div>
      </div>
    </div>
  );
}