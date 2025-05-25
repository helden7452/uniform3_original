const fs = require('fs');
const path = require('path');

// الفئات التي سنقوم بإصلاحها
const categories = [
  'corporate_uniforms',
  'security_uniforms',
  'healthcare_uniforms',
  'hospitality_uniforms',
  'aviation_uniforms'
];

// نسخ الصور الرئيسية للصور الداخلية
function copyMainToInnerImages(categoryPath) {
  const contentDir = path.join(categoryPath, 'content');
  
  if (!fs.existsSync(contentDir)) {
    console.log(`مجلد المحتوى غير موجود: ${contentDir}`);
    return 0;
  }
  
  let fixedCount = 0;
  
  try {
    const contentFolders = fs.readdirSync(contentDir)
      .filter(name => {
        const fullPath = path.join(contentDir, name);
        return fs.statSync(fullPath).isDirectory();
      });
    
    for (const folder of contentFolders) {
      const folderPath = path.join(contentDir, folder);
      const mainImagePath = path.join(folderPath, 'main.jpg');
      
      // تحقق من وجود الصورة الرئيسية
      if (!fs.existsSync(mainImagePath)) {
        console.log(`الصورة الرئيسية غير موجودة: ${mainImagePath}`);
        continue;
      }
      
      // نسخ الصورة الرئيسية للصور الداخلية 1.jpg، 2.jpg، و 3.jpg
      for (let i = 1; i <= 3; i++) {
        const innerImagePath = path.join(folderPath, `${i}.jpg`);
        
        try {
          // نسخ الصورة الرئيسية
          fs.copyFileSync(mainImagePath, innerImagePath);
          console.log(`تم نسخ الصورة الرئيسية إلى ${innerImagePath}`);
          fixedCount++;
        } catch (error) {
          console.error(`خطأ أثناء نسخ الصورة إلى ${innerImagePath}: ${error.message}`);
        }
      }
    }
  } catch (error) {
    console.error(`خطأ أثناء قراءة المحتوى: ${error.message}`);
  }
  
  return fixedCount;
}

// البدء بإصلاح الصور
console.log('بدء إصلاح الصور الداخلية...');
let totalFixed = 0;

for (const category of categories) {
  const categoryPath = path.join(__dirname, 'public', 'images', category);
  
  if (!fs.existsSync(categoryPath)) {
    console.log(`الفئة غير موجودة: ${category}`);
    continue;
  }
  
  console.log(`\nإصلاح الصور في الفئة: ${category}`);
  const fixedInCategory = copyMainToInnerImages(categoryPath);
  totalFixed += fixedInCategory;
  console.log(`تم إصلاح ${fixedInCategory} صورة في الفئة ${category}`);
}

console.log(`\nتم إصلاح إجمالي ${totalFixed} صورة.`);
console.log('انتهى إصلاح الصور الداخلية.');

// نسخ صورة مناسبة للصور الافتراضية
console.log('\nإصلاح الصور الافتراضية...');
let defaultFixCount = 0;

for (const category of categories) {
  const defaultImagePath = path.join(__dirname, 'public', 'images', category, 'default.jpg');
  
  // البحث عن صورة مناسبة للنسخ
  const contentDir = path.join(__dirname, 'public', 'images', category, 'content');
  if (fs.existsSync(contentDir)) {
    const folders = fs.readdirSync(contentDir)
      .filter(name => fs.statSync(path.join(contentDir, name)).isDirectory());
    
    if (folders.length > 0) {
      const firstFolder = folders[0];
      const sourceImagePath = path.join(contentDir, firstFolder, 'main.jpg');
      
      if (fs.existsSync(sourceImagePath)) {
        try {
          fs.copyFileSync(sourceImagePath, defaultImagePath);
          console.log(`تم نسخ صورة مناسبة إلى ${defaultImagePath}`);
          defaultFixCount++;
        } catch (error) {
          console.error(`خطأ أثناء نسخ الصورة الافتراضية ${defaultImagePath}: ${error.message}`);
        }
      }
    }
  }
}

console.log(`تم إصلاح ${defaultFixCount} صورة افتراضية.`); 