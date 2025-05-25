const fs = require('fs');
const path = require('path');
const posts = require('../data/posts').default;

// إنشاء صورة بسيطة بحجم 1x1 بكسل GIF
const createPlaceholder = () => {
  return Buffer.from([
    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
    0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02, 0x44,
    0x01, 0x00, 0x3B
  ]);
};

console.log('بدء عملية إصلاح صور المقالات الفردية...');
console.log(`إجمالي عدد المقالات: ${posts.length}`);

// تمر على كل مقال وتأكد من وجود صورة الغلاف الخاصة به
posts.forEach(post => {
  // استخراج مسار الصورة
  const imagePath = post.coverImage;
  
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
    console.log(`تم إنشاء صورة للمقال "${post.title}": ${fullPath}`);
  }
});

// تأكد من وجود صور المؤلفين
const authors = [...new Set(posts.map(post => post.author))];
console.log(`عدد المؤلفين: ${authors.length}`);

authors.forEach(author => {
  // تعريف مسارات مختلفة محتملة لصور المؤلف
  const authorImagePaths = [
    `/images/author/${author}.png`,
    `/images/author/${author}.jpg`,
    `/images/authors/${author}.png`,
    `/images/authors/${author}.jpg`
  ];
  
  authorImagePaths.forEach(imagePath => {
    // إزالة الشرطة المائلة في البداية إذا وجدت
    const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    
    // إنشاء المسار الكامل للملف في دليل public
    const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
    
    // إنشاء الدليل إذا لم يكن موجودًا
    const directory = path.dirname(fullPath);
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    
    // إنشاء الصورة إذا لم تكن موجودة
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, createPlaceholder());
      console.log(`تم إنشاء صورة للمؤلف ${author}: ${fullPath}`);
    }
  });
});

// إنشاء صور إضافية قد تكون مستخدمة في صفحات المقالات الفردية
const categories = ['blog', 'corporate-uniforms', 'healthcare-uniforms', 'hospitality-uniforms', 'aviation-uniforms', 'security-uniforms'];

categories.forEach(category => {
  // تحويل اسم الفئة إلى اسم المجلد
  const folderName = category.replace('-', '_');
  
  // إنشاء صور متعددة لكل فئة
  const categoryImages = [
    path.join(process.cwd(), '..', 'public', 'images', folderName, 'header.jpg'),
    path.join(process.cwd(), '..', 'public', 'images', folderName, 'thumbnail.jpg'),
    path.join(process.cwd(), '..', 'public', 'images', folderName, 'bg.jpg'),
    path.join(process.cwd(), '..', 'public', 'images', folderName, 'banner.jpg'),
    path.join(process.cwd(), '..', 'public', 'images', folderName, 'icon.png')
  ];
  
  categoryImages.forEach(imgPath => {
    // إنشاء الدليل إذا لم يكن موجودًا
    const directory = path.dirname(imgPath);
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    
    // إنشاء الصورة إذا لم تكن موجودة
    if (!fs.existsSync(imgPath)) {
      fs.writeFileSync(imgPath, createPlaceholder());
      console.log(`تم إنشاء صورة إضافية للفئة ${category}: ${imgPath}`);
    }
  });
});

// إنشاء صور للمقالات المميزة
const featuredPosts = posts.filter(post => post.featured);
console.log(`عدد المقالات المميزة: ${featuredPosts.length}`);

featuredPosts.forEach(post => {
  // إنشاء صور إضافية للمقالات المميزة
  const featuredImagePath = `/images/featured/${post.slug}.jpg`;
  const normalizedPath = featuredImagePath.startsWith('/') ? featuredImagePath.slice(1) : featuredImagePath;
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
  
  // إنشاء الصورة إذا لم تكن موجودة
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`تم إنشاء صورة مميزة للمقال "${post.title}": ${fullPath}`);
  }
});

// إنشاء الصور داخل محتوى المقالات (تخمين المسارات المحتملة)
posts.forEach(post => {
  const category = post.category || 'blog';
  const slug = post.slug;
  
  // إنشاء مسارات الصور المحتملة داخل المقال
  const contentImagePaths = [
    `/images/${category.replace('-', '_')}/${slug}_1.jpg`,
    `/images/${category.replace('-', '_')}/${slug}_2.jpg`,
    `/images/${category.replace('-', '_')}/${slug}_3.jpg`,
    `/images/${category.replace('-', '_')}/details/${slug}.jpg`,
    `/images/content/${slug}/main.jpg`,
    `/images/content/${slug}/detail.jpg`,
    `/images/content/${slug}/thumbnail.jpg`
  ];
  
  contentImagePaths.forEach(imagePath => {
    const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
    
    // إنشاء الدليل إذا لم يكن موجودًا
    const directory = path.dirname(fullPath);
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    
    // إنشاء الصورة إذا لم تكن موجودة
    if (!fs.existsSync(fullPath)) {
      fs.writeFileSync(fullPath, createPlaceholder());
      console.log(`تم إنشاء صورة داخلية للمقال "${post.title}": ${fullPath}`);
    }
  });
});

// إنشاء صورة للشعار والأيقونات العامة
const commonImages = [
  '/images/logo.png',
  '/images/logo-dark.png',
  '/images/logo-light.png',
  '/images/favicon.ico',
  '/images/og-image.jpg',
  '/images/blog-header.jpg',
  '/images/blog-banner.jpg',
  '/images/blog-default.jpg',
  '/images/related-posts-bg.jpg'
];

commonImages.forEach(imagePath => {
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
  
  // إنشاء الصورة إذا لم تكن موجودة
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`تم إنشاء صورة عامة: ${fullPath}`);
  }
});

console.log('تم الانتهاء من إصلاح صور المقالات الفردية بنجاح!'); 