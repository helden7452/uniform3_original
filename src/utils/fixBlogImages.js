const fs = require('fs');
const path = require('path');
const posts = require('../data/posts').default;

// تحديد المقالات في صفحة المدونة فقط
const blogPosts = posts.filter(post => post.category === 'blog' || !post.category);

console.log(`تم العثور على ${blogPosts.length} مقال في صفحة المدونة`);

// استخراج مسارات الصور من مقالات المدونة
const blogImagePaths = blogPosts.map(post => post.coverImage);
const uniqueBlogImagePaths = [...new Set(blogImagePaths)];

console.log(`تم العثور على ${uniqueBlogImagePaths.length} صورة فريدة في مقالات المدونة`);

// إنشاء صورة بسيطة بحجم 1x1 بكسل GIF
const createPlaceholder = () => {
  return Buffer.from([
    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
    0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02, 0x44,
    0x01, 0x00, 0x3B
  ]);
};

// معالجة كل صورة
uniqueBlogImagePaths.forEach(imagePath => {
  // إزالة الشرطة المائلة في البداية إذا وجدت
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // إنشاء المسار الكامل للملف في دليل public
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`تم إنشاء المجلد: ${directory}`);
  }
  
  // إنشاء الصورة إذا لم تكن موجودة
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`تم إنشاء صورة: ${fullPath}`);
  } else {
    console.log(`الصورة موجودة بالفعل: ${fullPath}`);
  }
});

// فحص جميع الفئات وإصلاح صور المقالات
const categories = ['blog', 'corporate-uniforms', 'healthcare-uniforms', 'hospitality-uniforms', 'aviation-uniforms', 'security-uniforms'];

categories.forEach(category => {
  // إنشاء مسار الصور للفئة
  const categoryImagePath = `/images/${category.replace('-', '_')}`;
  const normalizedCategoryPath = categoryImagePath.startsWith('/') ? categoryImagePath.slice(1) : categoryImagePath;
  
  // إنشاء المسار الكامل للملف في دليل public
  const fullCategoryPath = path.join(process.cwd(), '..', 'public', normalizedCategoryPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  if (!fs.existsSync(fullCategoryPath)) {
    fs.mkdirSync(fullCategoryPath, { recursive: true });
    console.log(`تم إنشاء مجلد الفئة: ${fullCategoryPath}`);
  }
  
  // إنشاء صورة افتراضية للفئة
  const defaultCategoryImagePath = path.join(fullCategoryPath, 'default.jpg');
  if (!fs.existsSync(defaultCategoryImagePath)) {
    fs.writeFileSync(defaultCategoryImagePath, createPlaceholder());
    console.log(`تم إنشاء صورة افتراضية للفئة: ${defaultCategoryImagePath}`);
  }
});

// تأكد من وجود صورة hero-bg.jpg في مجلد الصور
const heroBgPath = path.join(process.cwd(), '..', 'public', 'images', 'hero-bg.jpg');
if (!fs.existsSync(heroBgPath)) {
  fs.writeFileSync(heroBgPath, createPlaceholder());
  console.log(`تم إنشاء صورة الخلفية الرئيسية: ${heroBgPath}`);
} else {
  console.log(`صورة الخلفية الرئيسية موجودة بالفعل: ${heroBgPath}`);
}

console.log('تم الانتهاء من إصلاح صور المدونة بنجاح!'); 