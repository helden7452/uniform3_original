const { execSync } = require('child_process');
const path = require('path');

console.log('بدء عملية تحديث شاملة لجميع الصور باستخدام الصور الموجودة...');

try {
  // 1. تشغيل سكريبت استخدام الصور الموجودة في المقالات
  console.log('\n=== تشغيل سكريبت استخدام الصور الموجودة في المقالات ===');
  execSync('node ./utils/useExistingImages.js', { stdio: 'inherit' });
  
  // 2. تشغيل سكريبت تحديث صور صفحات المقالات
  console.log('\n=== تشغيل سكريبت تحديث صور صفحات المقالات ===');
  execSync('node ./utils/updateArticlePageImages.js', { stdio: 'inherit' });

  console.log('\n✅ تم الانتهاء من تحديث جميع الصور باستخدام الصور الموجودة بنجاح!');
  console.log('ملاحظة: تم استخدام الصور الموجودة بالفعل في المسار /public/images/ بدلاً من إنشاء صور جديدة.');
} catch (error) {
  console.error('\n❌ حدث خطأ أثناء عملية تحديث الصور:');
  console.error(error);
} 