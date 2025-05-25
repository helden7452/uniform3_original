# خبراء الزي الموحد - Uniform Experts

موقع عربي متخصص في الزي الموحد للشركات والمؤسسات في المملكة العربية السعودية مع مدونة متخصصة في مجال اليونيفورم.

## مميزات الموقع

- تصميم عربي كامل موجه للسوق السعودي
- تصميم متوافق مع SEO لتحقيق تصنيفات عالية في محركات البحث
- تصميم متجاوب مع جميع أحجام الشاشات (Responsive Design)
- تحسين أداء الموقع وسرعة التحميل
- مدونة متخصصة في مجال الزي الموحد
- دعم الاتجاه من اليمين إلى اليسار (RTL)
- واجهة مستخدم سهلة وبسيطة

## التقنيات المستخدمة

- Next.js: إطار عمل React للتطبيقات العصرية
- TypeScript: للبرمجة بشكل آمن مع نظام كتابة قوي
- Tailwind CSS: إطار CSS للتصميم السريع والمرن
- React: مكتبة JavaScript لبناء واجهات المستخدم
- SEO متقدم بفضل خصائص Next.js

## هيكل المشروع

```
src/
├── app/
│   ├── [category]/
│   │   └── page.tsx
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   │   └── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BlogCard.tsx
│   ├── BlogPost.tsx
│   ├── AuthorBio.tsx
│   └── ...
├── data/
│   ├── authors.ts
│   └── posts.ts
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── utils/
    └── ...
```

## طريقة تشغيل المشروع

### المتطلبات

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. قم بتنزيل المشروع أو استنساخه من Git:

```bash
git clone https://github.com/your-username/uniform-experts.git
cd uniform-experts
```

2. قم بتثبيت المكتبات المطلوبة:

```bash
npm install
# أو
yarn install
```

3. تشغيل المشروع في بيئة التطوير:

```bash
npm run dev
# أو
yarn dev
```

4. افتح المتصفح على العنوان: [http://localhost:3000](http://localhost:3000)

### بناء المشروع للإنتاج

```bash
npm run build
npm start
# أو
yarn build
yarn start
```

### النشر على Netlify

هذا المشروع مُعد للنشر على منصة Netlify. اتبع الخطوات التالية للنشر:

1. انسخ المشروع إلى حساب GitHub الخاص بك
2. قم بربط حساب Netlify بمستودع GitHub
3. اضبط متغيرات البيئة المطلوبة في لوحة تحكم Netlify

للمزيد من التفاصيل حول النشر، راجع ملف [NETLIFY-DEPLOY.md](NETLIFY-DEPLOY.md).

```bash
# للاختبار المحلي قبل النشر
npm run netlify:dev

# لرفع الإعدادات البيئية
npm run netlify:setup-env
```

## كيفية الإسهام في المشروع

1. قم بعمل Fork للمشروع
2. أنشئ فرع (Branch) جديد (`git checkout -b feature/amazing-feature`)
3. قم بحفظ التغييرات (`git commit -m 'Add some amazing feature'`)
4. ارفع التغييرات إلى الفرع (`git push origin feature/amazing-feature`)
5. افتح طلب سحب (Pull Request)

## الترخيص

[MIT](LICENSE)

## التواصل

للاستفسارات أو الدعم، يرجى التواصل على:

- البريد الإلكتروني: info@uniformexperts.sa
- الموقع: www.uniformexperts.sa 