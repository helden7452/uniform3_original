const fs = require('fs');
const path = require('path');

// الفئات التي سنتحقق منها
const categories = [
  'corporate_uniforms',
  'security_uniforms',
  'healthcare_uniforms',
  'hospitality_uniforms',
  'aviation_uniforms'
];

// تحقق من حجم الصورة
function checkImageSize(imagePath) {
  try {
    const stats = fs.statSync(imagePath);
    const fileSizeInBytes = stats.size;
    const fileSizeInKilobytes = fileSizeInBytes / 1024;
    
    return {
      path: imagePath,
      exists: true,
      size: fileSizeInKilobytes.toFixed(2) + ' KB',
      sizeBytes: fileSizeInBytes,
      isValid: fileSizeInBytes > 100 // نعتبر الصورة صالحة إذا كان حجمها أكبر من 100 بايت
    };
  } catch (error) {
    return {
      path: imagePath,
      exists: false,
      size: '0 KB',
      sizeBytes: 0,
      isValid: false,
      error: error.message
    };
  }
}

// العثور على جميع مجلدات المحتوى في فئة معينة
function findContentDirectories(categoryPath) {
  const contentPath = path.join(categoryPath, 'content');
  
  if (!fs.existsSync(contentPath)) {
    console.log(`مجلد المحتوى غير موجود: ${contentPath}`);
    return [];
  }
  
  try {
    return fs.readdirSync(contentPath)
      .filter(name => {
        const fullPath = path.join(contentPath, name);
        return fs.statSync(fullPath).isDirectory();
      })
      .map(name => path.join(contentPath, name));
  } catch (error) {
    console.error(`خطأ أثناء قراءة مجلد المحتوى ${contentPath}: ${error.message}`);
    return [];
  }
}

// فحص الصور في مجلد معين
function checkImagesInDirectory(directoryPath) {
  const requiredImages = ['main.jpg', '1.jpg', '2.jpg', '3.jpg'];
  const results = [];
  
  for (const imageName of requiredImages) {
    const imagePath = path.join(directoryPath, imageName);
    results.push(checkImageSize(imagePath));
  }
  
  return results;
}

// البدء بالفحص
console.log('بدء فحص الصور...');
let totalDirectories = 0;
let totalImages = 0;
let validImages = 0;
let missingImages = 0;
let invalidImages = 0;

// فحص كل فئة
for (const category of categories) {
  const categoryPath = path.join(__dirname, 'public', 'images', category);
  
  if (!fs.existsSync(categoryPath)) {
    console.log(`الفئة غير موجودة: ${category}`);
    continue;
  }
  
  console.log(`\nفحص الفئة: ${category}`);
  
  // فحص الصورة الافتراضية للفئة
  const defaultImagePath = path.join(categoryPath, 'default.jpg');
  const defaultImageCheck = checkImageSize(defaultImagePath);
  
  console.log(`الصورة الافتراضية: ${defaultImageCheck.exists ? 'موجودة' : 'غير موجودة'} (${defaultImageCheck.size})`);
  totalImages++;
  
  if (defaultImageCheck.exists) {
    if (defaultImageCheck.isValid) {
      validImages++;
    } else {
      invalidImages++;
      console.log(`  تحذير: الصورة الافتراضية صغيرة جداً: ${defaultImagePath}`);
    }
  } else {
    missingImages++;
    console.log(`  خطأ: الصورة الافتراضية غير موجودة: ${defaultImagePath}`);
  }
  
  // العثور على مجلدات المحتوى وفحصها
  const contentDirs = findContentDirectories(categoryPath);
  totalDirectories += contentDirs.length;
  
  for (const contentDir of contentDirs) {
    const dirName = path.basename(contentDir);
    console.log(`\nفحص المجلد: ${dirName}`);
    
    const imageResults = checkImagesInDirectory(contentDir);
    totalImages += imageResults.length;
    
    for (const result of imageResults) {
      const fileName = path.basename(result.path);
      
      if (result.exists) {
        if (result.isValid) {
          validImages++;
          console.log(`  ✓ ${fileName} (${result.size})`);
        } else {
          invalidImages++;
          console.log(`  ⚠ ${fileName} (${result.size}) - صغيرة جداً`);
        }
      } else {
        missingImages++;
        console.log(`  ✗ ${fileName} - غير موجودة`);
      }
    }
  }
}

// عرض ملخص النتائج
console.log('\n===== ملخص نتائج فحص الصور =====');
console.log(`إجمالي المجلدات المفحوصة: ${totalDirectories}`);
console.log(`إجمالي الصور المفحوصة: ${totalImages}`);
console.log(`الصور الصالحة: ${validImages} (${(validImages / totalImages * 100).toFixed(2)}%)`);
console.log(`الصور المفقودة: ${missingImages} (${(missingImages / totalImages * 100).toFixed(2)}%)`);
console.log(`الصور غير الصالحة (صغيرة الحجم): ${invalidImages} (${(invalidImages / totalImages * 100).toFixed(2)}%)`);

if (invalidImages > 0 || missingImages > 0) {
  console.log('\nتوصيات:');
  
  if (missingImages > 0) {
    console.log('- تأكد من وجود جميع الصور المطلوبة في كل مجلد محتوى (main.jpg و 1.jpg و 2.jpg و 3.jpg).');
  }
  
  if (invalidImages > 0) {
    console.log('- استبدل الصور الصغيرة جداً بصور ذات حجم مناسب.');
  }
}

console.log('\nاكتمل فحص الصور.'); 