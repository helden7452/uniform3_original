const fs = require('fs');
const path = require('path');

// قائمة جميع فئات الزي الموحد التي نريد إنشاء صور بديلة لها
const categories = [
  'author',
  'aviation_uniforms',
  'cleaning_uniforms',
  'construction_uniforms',
  'corporate_uniforms',
  'healthcare_uniforms',
  'hospitality_uniforms',
  'security_uniforms',
  'placeholder' // صورة عامة
];

// إنشاء ملف صورة فارغ بديل لكل فئة
const createPlaceholderImages = async () => {
  try {
    // تأكد من وجود المجلد الرئيسي للصور
    const imagesDir = path.join(__dirname, 'public', 'images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    // إنشاء ملفات الصور البديلة
    categories.forEach(category => {
      // إنشاء مسار المجلد للفئة
      const categoryDir = path.join(imagesDir, category);
      if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
      }

      // إنشاء ملف صورة بديل للفئة
      const placeholderPath = path.join(categoryDir, 'placeholder.jpg');
      if (!fs.existsSync(placeholderPath)) {
        fs.writeFileSync(placeholderPath, '');
        console.log(`تم إنشاء صورة بديلة للفئة: ${category}`);
      }
    });

    // إنشاء صورة عامة في المجلد الرئيسي للصور
    const generalPlaceholderPath = path.join(imagesDir, 'placeholder.jpg');
    if (!fs.existsSync(generalPlaceholderPath)) {
      fs.writeFileSync(generalPlaceholderPath, '');
      console.log('تم إنشاء صورة بديلة عامة');
    }

    console.log('تم إنشاء جميع الصور البديلة بنجاح');
  } catch (error) {
    console.error('حدث خطأ أثناء إنشاء الصور البديلة:', error);
  }
};

// تنفيذ العملية
createPlaceholderImages(); 