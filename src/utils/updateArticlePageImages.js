const fs = require('fs');
const path = require('path');
const posts = require('../data/posts').default;

// دالة للبحث عن الصور الموجودة في مجلد معين
function findExistingImages(directory) {
  const images = [];
  
  try {
    // التحقق من وجود المجلد
    if (!fs.existsSync(directory)) {
      console.log(`المجلد ${directory} غير موجود`);
      return images;
    }
    
    // قراءة محتويات المجلد
    const files = fs.readdirSync(directory, { withFileTypes: true });
    
    // إضافة الملفات التي تمثل صور
    for (const file of files) {
      const filePath = path.join(directory, file.name);
      
      if (file.isDirectory()) {
        // إذا كان مجلد، نبحث بداخله بشكل متكرر
        const subDirImages = findExistingImages(filePath);
        images.push(...subDirImages);
      } else {
        // نتحقق إذا كان ملف صورة
        const ext = path.extname(file.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
          // إضافة مسار الصورة النسبي للمجلد العام
          const relativePath = filePath.replace(path.join(process.cwd(), '..', 'public'), '');
          images.push(relativePath.replace(/\\/g, '/'));
        }
      }
    }
  } catch (error) {
    console.error(`خطأ في قراءة المجلد ${directory}:`, error);
  }
  
  return images;
}

// دالة لتحديث صور المقالات في ملفات TSX
function updateArticlePageImages(availableImages) {
  const pagesDirectory = path.join(process.cwd(), '..', 'src', 'app');
  const categories = ['blog', 'corporate-uniforms', 'healthcare-uniforms', 'hospitality-uniforms', 'aviation-uniforms', 'security-uniforms'];
  let updatedCount = 0;
  
  // البحث في جميع الفئات
  for (const category of categories) {
    const categoryDir = path.join(pagesDirectory, category);
    
    if (!fs.existsSync(categoryDir)) {
      console.log(`مجلد الفئة غير موجود: ${categoryDir}`);
      continue;
    }
    
    // البحث في مجلدات المقالات داخل الفئة
    try {
      const articleDirs = fs.readdirSync(categoryDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      for (const articleDir of articleDirs) {
        const pagePath = path.join(categoryDir, articleDir, 'page.tsx');
        
        if (!fs.existsSync(pagePath)) {
          console.log(`ملف الصفحة غير موجود: ${pagePath}`);
          continue;
        }
        
        // قراءة محتوى ملف الصفحة
        let content = fs.readFileSync(pagePath, 'utf8');
        
        // البحث عن مسارات الصور في المحتوى
        const imagePathRegex = /src=["'](\/images\/[^"']+)["']/g;
        const matches = [...content.matchAll(imagePathRegex)];
        
        if (matches.length === 0) {
          console.log(`لم يتم العثور على مسارات صور في: ${pagePath}`);
          continue;
        }
        
        // استبدال مسارات الصور بصور موجودة
        for (const match of matches) {
          const originalPath = match[1];
          
          // التحقق مما إذا كانت الصورة موجودة بالفعل
          const fullImagePath = path.join(process.cwd(), '..', 'public', originalPath.startsWith('/') ? originalPath.slice(1) : originalPath);
          
          if (!fs.existsSync(fullImagePath)) {
            // اختيار صورة مناسبة من الصور المتاحة
            const categoryName = category.replace('-', '_');
            const categoryImages = availableImages.filter(img => img.includes(categoryName));
            
            let replacementImage;
            if (categoryImages.length > 0) {
              replacementImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
            } else {
              replacementImage = availableImages[Math.floor(Math.random() * availableImages.length)];
            }
            
            // استبدال مسار الصورة في المحتوى
            const replacementPath = replacementImage.startsWith('/') ? replacementImage : `/${replacementImage}`;
            content = content.replace(originalPath, replacementPath);
            
            console.log(`تم استبدال الصورة في ${pagePath}:`);
            console.log(`  من: ${originalPath}`);
            console.log(`  إلى: ${replacementPath}`);
            
            updatedCount++;
          }
        }
        
        // حفظ التغييرات
        fs.writeFileSync(pagePath, content, 'utf8');
      }
    } catch (error) {
      console.error(`خطأ في معالجة الفئة ${category}:`, error);
    }
  }
  
  return updatedCount;
}

// دالة لتحديث الصور في ملفات المكونات
function updateComponentImages(availableImages) {
  const componentsDirectory = path.join(process.cwd(), '..', 'src', 'components');
  let updatedCount = 0;
  
  if (!fs.existsSync(componentsDirectory)) {
    console.log(`مجلد المكونات غير موجود: ${componentsDirectory}`);
    return updatedCount;
  }
  
  // البحث في جميع ملفات المكونات
  try {
    const processDirectory = (dir) => {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        const filePath = path.join(dir, file.name);
        
        if (file.isDirectory()) {
          processDirectory(filePath);
        } else if (file.name.endsWith('.tsx') || file.name.endsWith('.jsx')) {
          // قراءة محتوى الملف
          let content = fs.readFileSync(filePath, 'utf8');
          
          // البحث عن مسارات الصور في المحتوى
          const imagePathRegex = /src=["'](\/images\/[^"']+)["']/g;
          const matches = [...content.matchAll(imagePathRegex)];
          
          if (matches.length === 0) {
            continue;
          }
          
          // استبدال مسارات الصور بصور موجودة
          for (const match of matches) {
            const originalPath = match[1];
            
            // التحقق مما إذا كانت الصورة موجودة بالفعل
            const fullImagePath = path.join(process.cwd(), '..', 'public', originalPath.startsWith('/') ? originalPath.slice(1) : originalPath);
            
            if (!fs.existsSync(fullImagePath)) {
              // اختيار صورة مناسبة من الصور المتاحة
              const replacementImage = availableImages[Math.floor(Math.random() * availableImages.length)];
              
              // استبدال مسار الصورة في المحتوى
              const replacementPath = replacementImage.startsWith('/') ? replacementImage : `/${replacementImage}`;
              content = content.replace(originalPath, replacementPath);
              
              console.log(`تم استبدال الصورة في ${filePath}:`);
              console.log(`  من: ${originalPath}`);
              console.log(`  إلى: ${replacementPath}`);
              
              updatedCount++;
            }
          }
          
          // حفظ التغييرات
          fs.writeFileSync(filePath, content, 'utf8');
        }
      }
    };
    
    processDirectory(componentsDirectory);
  } catch (error) {
    console.error(`خطأ في معالجة مجلد المكونات:`, error);
  }
  
  return updatedCount;
}

// دالة رئيسية لتنفيذ العملية
async function main() {
  console.log('بدء عملية تحديث صور صفحات المقالات باستخدام الصور الموجودة...');
  
  // البحث عن الصور الموجودة في مجلد الصور
  const imagesDirectory = path.join(process.cwd(), '..', 'public', 'images');
  console.log(`البحث عن الصور في المجلد: ${imagesDirectory}`);
  
  const availableImages = findExistingImages(imagesDirectory);
  console.log(`تم العثور على ${availableImages.length} صورة متاحة`);
  
  if (availableImages.length === 0) {
    console.error('لم يتم العثور على أي صور في المجلد المحدد');
    return;
  }
  
  // عرض عينة من الصور المتاحة
  console.log('عينة من الصور المتاحة:');
  availableImages.slice(0, 10).forEach(img => console.log(`- ${img}`));
  
  // تحديث صور صفحات المقالات
  const updatedPagesCount = updateArticlePageImages(availableImages);
  console.log(`تم تحديث ${updatedPagesCount} صورة في صفحات المقالات`);
  
  // تحديث صور المكونات
  const updatedComponentsCount = updateComponentImages(availableImages);
  console.log(`تم تحديث ${updatedComponentsCount} صورة في ملفات المكونات`);
  
  console.log('تم الانتهاء من تحديث صور صفحات المقالات باستخدام الصور الموجودة بنجاح!');
}

// تنفيذ الدالة الرئيسية
main().catch(error => {
  console.error('حدث خطأ أثناء تنفيذ السكريبت:', error);
}); 