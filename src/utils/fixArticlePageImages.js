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

console.log('بدء عملية إصلاح صور صفحات المقالات...');

// تحليل هيكل المشروع لتخمين الصور المستخدمة في صفحات المقالات
const blogStructure = {
  'mainBanner': '/images/blog/banner.jpg',
  'headerImage': '/images/blog/header.jpg',
  'articleDefault': '/images/blog/default.jpg',
  'relatedPostsBackground': '/images/blog/related-bg.jpg',
  'socialShareImage': '/images/blog/social-share.jpg'
};

// إنشاء صور رئيسية لصفحة المدونة
Object.values(blogStructure).forEach(imagePath => {
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`تم إنشاء مجلد صفحة المدونة: ${directory}`);
  }
  
  // إنشاء الصورة إذا لم تكن موجودة
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`تم إنشاء صورة رئيسية لصفحة المدونة: ${fullPath}`);
  }
});

// تمر على كل مقال وتنشئ مجموعة كاملة من الصور المحتملة لكل مقال
posts.forEach(post => {
  const slug = post.slug;
  const category = post.category || 'blog';
  
  // إنشاء مجموعة متنوعة من الصور المحتملة لكل مقال فردي
  const articleImages = [
    // صورة غلاف المقال
    post.coverImage,
    
    // مسارات محتملة أخرى للصور داخل صفحة المقال
    `/images/${category.replace('-', '_')}/${slug}.jpg`,
    `/images/${category.replace('-', '_')}/${slug}-header.jpg`,
    `/images/${category.replace('-', '_')}/${slug}-thumbnail.jpg`,
    `/images/${category.replace('-', '_')}/${slug}-banner.jpg`,
    `/images/${category.replace('-', '_')}/${slug}-feature.jpg`,
    `/images/${category.replace('-', '_')}/${slug}-social.jpg`,
    `/images/${category.replace('-', '_')}/${slug}-og.jpg`,
    
    // مسارات لصور المحتوى الداخلي
    `/images/${category.replace('-', '_')}/content/${slug}/1.jpg`,
    `/images/${category.replace('-', '_')}/content/${slug}/2.jpg`,
    `/images/${category.replace('-', '_')}/content/${slug}/3.jpg`,
    
    // مسارات للصور البديلة
    `/images/articles/${slug}/main.jpg`,
    `/images/articles/${slug}/header.jpg`,
    `/images/articles/${slug}/thumbnail.jpg`,
    
    // مسارات الصور داخل المحتوى
    `/images/content/${slug}/1.jpg`,
    `/images/content/${slug}/2.jpg`,
    `/images/content/${slug}/3.jpg`,
    
    // مسارات خاصة للصور المضمنة
    `/images/embedded/${category.replace('-', '_')}/${slug}-1.jpg`,
    `/images/embedded/${category.replace('-', '_')}/${slug}-2.jpg`,
    `/images/embedded/${category.replace('-', '_')}/${slug}-3.jpg`
  ];
  
  articleImages.forEach(imagePath => {
    if (!imagePath) return; // تجاهل المسارات الفارغة
    
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
      console.log(`تم إنشاء صورة للمقال "${post.title}": ${fullPath}`);
    }
  });
});

// إنشاء صور مخصصة لصفحة المدونة
const blogPageImages = [
  // صور الشعار والأيقونات
  '/images/logo.png',
  '/images/logo-white.png',
  '/images/favicon.ico',
  '/images/favicon-32x32.png',
  '/images/favicon-16x16.png',
  '/images/apple-touch-icon.png',
  
  // صور الصفحة الرئيسية
  '/images/hero-bg.jpg',
  '/images/blog-bg.jpg',
  '/images/page-header.jpg',
  '/images/breadcrumb-bg.jpg',
  
  // صور للعناصر المتكررة
  '/images/separator.png',
  '/images/pattern.jpg',
  '/images/quote-bg.jpg',
  
  // صور الفئات
  '/images/corporate_uniforms/category.jpg',
  '/images/healthcare_uniforms/category.jpg',
  '/images/hospitality_uniforms/category.jpg',
  '/images/aviation_uniforms/category.jpg',
  '/images/security_uniforms/category.jpg',
  
  // صور المنشورات الشائعة
  '/images/popular-posts/1.jpg',
  '/images/popular-posts/2.jpg',
  '/images/popular-posts/3.jpg',
  
  // صور الإعلانات الجانبية
  '/images/sidebar/ad-1.jpg',
  '/images/sidebar/ad-2.jpg',
  
  // صور التذييل
  '/images/footer-bg.jpg',
  '/images/footer-logo.png'
];

blogPageImages.forEach(imagePath => {
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
    console.log(`تم إنشاء صورة لصفحة المدونة: ${fullPath}`);
  }
});

// إنشاء صور عامة قد تكون مستخدمة في جميع صفحات المقالات
const commonComponents = [
  '/images/related-post-bg.jpg',
  '/images/loading.gif',
  '/images/share-icons.png',
  '/images/author/default.png',
  '/images/default-avatar.png',
  '/images/comments/avatar.jpg',
  '/images/tags-bg.jpg'
];

commonComponents.forEach(imagePath => {
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

console.log('تم الانتهاء من إصلاح صور صفحات المقالات بنجاح!'); 