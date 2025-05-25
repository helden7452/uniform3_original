const { execSync } = require('child_process');
const path = require('path');

console.log('بدء عملية إصلاح شاملة لجميع مشاكل الصور...');

try {
  // 1. تشغيل سكريبت إصلاح صور المقالات الفردية
  console.log('\n=== تشغيل سكريبت إصلاح صور المقالات الفردية ===');
  execSync('node ./utils/fixIndividualArticleImages.js', { stdio: 'inherit' });
  
  // 2. تشغيل سكريبت إصلاح صور صفحات المقالات
  console.log('\n=== تشغيل سكريبت إصلاح صور صفحات المقالات ===');
  execSync('node ./utils/fixArticlePageImages.js', { stdio: 'inherit' });

  // 3. تشغيل سكريبت إصلاح صور المدونة
  console.log('\n=== تشغيل سكريبت إصلاح صور المدونة ===');
  execSync('node ./utils/fixBlogImages.js', { stdio: 'inherit' });

  // 4. تشغيل سكريبت إصلاح صور الفئات
  console.log('\n=== تشغيل سكريبت إصلاح صور الفئات ===');
  execSync('node ./utils/fixCategoryImages.js', { stdio: 'inherit' });

  // 5. تشغيل سكريبت إصلاح جميع الصور للتأكد من إصلاح أي مشاكل متبقية
  console.log('\n=== تشغيل سكريبت إصلاح شامل لجميع الصور ===');
  execSync('node ./utils/fixAllImages.js', { stdio: 'inherit' });
  
  console.log('\n✅ تم الانتهاء من إصلاح جميع مشاكل الصور بنجاح!');
  console.log('لاحظ أن الصور المنشأة هي صور وهمية 1x1 بكسل شفافة يمكنك استبدالها لاحقًا بالصور الفعلية.');
} catch (error) {
  console.error('\n❌ حدث خطأ أثناء عملية إصلاح الصور:');
  console.error(error);
} 