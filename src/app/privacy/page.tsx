import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | خبراء الزي الموحد في المملكة العربية السعودية',
  description: 'تعرف على سياسة الخصوصية وحماية البيانات الخاصة بشركة خبراء الزي الموحد',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8">سياسة الخصوصية</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="prose prose-lg max-w-none rtl">
          <p className="text-gray-500 mb-8">آخر تحديث: 1 مايو 2023</p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">مقدمة</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            نحن في شركة خبراء الزي الموحد نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا لمعلوماتك الشخصية عند زيارة موقعنا الإلكتروني أو التعامل معنا.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">البيانات التي نجمعها</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            قد نقوم بجمع المعلومات التالية:
          </p>
          <ul className="list-disc mr-8 mb-6 text-gray-700 space-y-2">
            <li>المعلومات الشخصية: مثل الاسم والعنوان والبريد الإلكتروني ورقم الهاتف.</li>
            <li>معلومات الشركة: مثل اسم الشركة والمنصب وعنوان الشركة.</li>
            <li>معلومات تقنية: مثل عنوان IP وبيانات تصفح الموقع ونوع المتصفح.</li>
            <li>معلومات المعاملات: مثل تفاصيل الطلبات والمدفوعات.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-primary mb-4">كيفية استخدام البيانات</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            نستخدم البيانات التي نجمعها للأغراض التالية:
          </p>
          <ul className="list-disc mr-8 mb-6 text-gray-700 space-y-2">
            <li>تقديم منتجاتنا وخدماتنا وتحسينها.</li>
            <li>التواصل معك بخصوص طلباتك واستفساراتك.</li>
            <li>إرسال مواد تسويقية وإعلامية عن منتجاتنا وخدماتنا (إذا اخترت ذلك).</li>
            <li>تحسين موقعنا الإلكتروني وتجربة المستخدم.</li>
            <li>الامتثال للالتزامات القانونية والتنظيمية.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-primary mb-4">مشاركة البيانات</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة. ومع ذلك، قد نشارك معلوماتك في الحالات التالية:
          </p>
          <ul className="list-disc mr-8 mb-6 text-gray-700 space-y-2">
            <li>مع مقدمي الخدمات الذين يساعدوننا في تشغيل أعمالنا، مثل خدمات الشحن والدفع.</li>
            <li>عندما يتطلب القانون ذلك، مثل الامتثال لأمر قضائي أو متطلبات قانونية.</li>
            <li>لحماية حقوقنا أو ممتلكاتنا أو سلامة موظفينا أو عملائنا.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-primary mb-4">حماية البيانات</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف. نحن نستخدم تقنيات التشفير وجدران الحماية وغيرها من الإجراءات الأمنية لحماية بياناتك.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">حقوقك</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:
          </p>
          <ul className="list-disc mr-8 mb-6 text-gray-700 space-y-2">
            <li>الوصول إلى معلوماتك الشخصية وطلب نسخة منها.</li>
            <li>تصحيح معلوماتك الشخصية غير الدقيقة أو غير المكتملة.</li>
            <li>طلب حذف معلوماتك الشخصية في ظروف معينة.</li>
            <li>الاعتراض على معالجة معلوماتك الشخصية لأغراض التسويق المباشر.</li>
            <li>سحب موافقتك في أي وقت إذا كنا نعتمد على موافقتك لمعالجة معلوماتك الشخصية.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-primary mb-4">ملفات تعريف الارتباط</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك على موقعنا. يمكنك تعديل إعدادات المتصفح الخاص بك لرفض ملفات تعريف الارتباط، ولكن ذلك قد يؤثر على قدرتك على استخدام بعض ميزات موقعنا.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">التغييرات على سياسة الخصوصية</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية. سنقوم بإخطارك بأي تغييرات جوهرية من خلال نشر الإصدار المحدث على موقعنا.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4">اتصل بنا</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية الخاصة بنا أو كيفية تعاملنا مع بياناتك الشخصية، يرجى الاتصال بنا على:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-2 text-gray-700">البريد الإلكتروني: privacy@uniformexperts.sa</p>
            <p className="mb-2 text-gray-700">الهاتف: +966-12-345-6789</p>
            <p className="text-gray-700">العنوان: شارع الملك فهد، حي الورود، الرياض، المملكة العربية السعودية</p>
          </div>
        </div>
      </div>
    </div>
  );
} 