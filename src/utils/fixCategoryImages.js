const fs = require('fs');
const path = require('path');
const posts = require('../data/posts').default;

// تحديد الفئات المختلفة
const categories = ['corporate-uniforms', 'healthcare-uniforms', 'hospitality-uniforms', 'aviation-uniforms', 'security-uniforms'];

// إنشاء صورة بسيطة بحجم 1x1 بكسل GIF
const createPlaceholder = () => {
  return Buffer.from([
    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
    0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02, 0x44,
    0x01, 0x00, 0x3B
  ]);
};

// معالجة كل فئة
categories.forEach(category => {
  // تصفية المقالات حسب الفئة
  const categoryPosts = posts.filter(post => post.category === category);
  
  console.log(`تم العثور على ${categoryPosts.length} مقال في فئة ${category}`);
  
  // استخراج مسارات الصور للفئة
  const categoryImagePaths = categoryPosts.map(post => post.coverImage);
  const uniqueCategoryImagePaths = [...new Set(categoryImagePaths)];
  
  console.log(`تم العثور على ${uniqueCategoryImagePaths.length} صورة فريدة في فئة ${category}`);
  
  // معالجة كل صورة
  uniqueCategoryImagePaths.forEach(imagePath => {
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
      console.log(`تم إنشاء صورة لفئة ${category}: ${fullPath}`);
    } else {
      console.log(`الصورة موجودة بالفعل: ${fullPath}`);
    }
  });
  
  // تحويل اسم الفئة لمسار مجلد الصور المناسب
  const folderName = category.replace('-', '_');
  
  // إنشاء مجلد للفئة إذا لم يكن موجودًا
  const categoryFolderPath = path.join(process.cwd(), '..', 'public', 'images', folderName);
  if (!fs.existsSync(categoryFolderPath)) {
    fs.mkdirSync(categoryFolderPath, { recursive: true });
    console.log(`تم إنشاء مجلد الفئة: ${categoryFolderPath}`);
  }
  
  // إنشاء صورة افتراضية للفئة
  const defaultImage = path.join(categoryFolderPath, 'default.jpg');
  if (!fs.existsSync(defaultImage)) {
    fs.writeFileSync(defaultImage, createPlaceholder());
    console.log(`تم إنشاء صورة افتراضية لفئة ${category}: ${defaultImage}`);
  }
});

// التأكد من وجود صورة عامة لكل فئة في الصفحة الرئيسية
categories.forEach(category => {
  const folderName = category.replace('-', '_');
  const categoryImageName = `${folderName}.jpg`;
  const categoryImagePath = path.join(process.cwd(), '..', 'public', 'images', categoryImageName);
  
  if (!fs.existsSync(categoryImagePath)) {
    fs.writeFileSync(categoryImagePath, createPlaceholder());
    console.log(`تم إنشاء صورة عامة لفئة ${category}: ${categoryImagePath}`);
  } else {
    console.log(`الصورة العامة للفئة موجودة بالفعل: ${categoryImagePath}`);
  }
});

console.log('تم الانتهاء من إصلاح صور الفئات بنجاح!'); 