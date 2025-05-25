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

// دالة لاختيار صورة مناسبة من الصور الموجودة
function selectAppropriateImage(category, slug, availableImages) {
  // محاولة العثور على صورة تطابق الفئة والعنوان
  const categoryFolder = category ? category.replace('-', '_') : 'blog';
  
  // محاولة العثور على صورة بناءً على الفئة والعنوان
  const specificImagePattern = new RegExp(`${categoryFolder}.*${slug}`, 'i');
  const specificImages = availableImages.filter(img => specificImagePattern.test(img));
  
  if (specificImages.length > 0) {
    return specificImages[0];
  }
  
  // محاولة العثور على صورة بناءً على الفئة فقط
  const categoryImagePattern = new RegExp(`${categoryFolder}`, 'i');
  const categoryImages = availableImages.filter(img => categoryImagePattern.test(img));
  
  if (categoryImages.length > 0) {
    return categoryImages[Math.floor(Math.random() * categoryImages.length)];
  }
  
  // إذا لم نجد صورة مناسبة، نختار صورة عشوائية
  if (availableImages.length > 0) {
    return availableImages[Math.floor(Math.random() * availableImages.length)];
  }
  
  // إذا لم نجد أي صورة، نعيد مسار افتراضي
  return '/images/default.jpg';
}

// دالة لتحديث مسارات الصور في المقالات
function updateArticleImages(posts, availableImages) {
  const updatedPosts = [];
  const usedImages = new Set(); // لتتبع الصور المستخدمة
  
  for (const post of posts) {
    // نتحقق إذا كانت الصورة الحالية غير موجودة
    const currentImagePath = post.coverImage.startsWith('/') 
      ? post.coverImage.slice(1) 
      : post.coverImage;
    
    const fullCurrentPath = path.join(process.cwd(), '..', 'public', currentImagePath);
    
    if (!fs.existsSync(fullCurrentPath)) {
      // اختيار صورة مناسبة من الصور المتاحة
      // نستبعد الصور التي تم استخدامها بالفعل إذا كان ذلك ممكنًا
      const unusedImages = availableImages.filter(img => !usedImages.has(img));
      const imagesToUse = unusedImages.length > 0 ? unusedImages : availableImages;
      
      const selectedImage = selectAppropriateImage(post.category, post.slug, imagesToUse);
      
      // تحديث مسار الصورة في المقال
      post.coverImage = selectedImage.startsWith('/') ? selectedImage : `/${selectedImage}`;
      
      console.log(`تم تحديث صورة المقال "${post.title}": ${post.coverImage}`);
      
      // إضافة الصورة المستخدمة إلى القائمة
      usedImages.add(selectedImage);
    } else {
      console.log(`الصورة الحالية للمقال "${post.title}" موجودة بالفعل: ${post.coverImage}`);
    }
    
    updatedPosts.push(post);
  }
  
  return updatedPosts;
}

// دالة لتحديث ملف posts.js بالمسارات الجديدة للصور
function updatePostsFile(updatedPosts) {
  try {
    const postsFilePath = path.join(process.cwd(), 'data', 'posts.js');
    
    // قراءة محتوى الملف الحالي
    const currentContent = fs.readFileSync(postsFilePath, 'utf8');
    
    // إنشاء محتوى جديد مع المقالات المحدثة
    const newContent = `const posts = ${JSON.stringify(updatedPosts, null, 2)};\n\nexport default posts;`;
    
    // كتابة المحتوى الجديد إلى الملف
    fs.writeFileSync(postsFilePath, newContent, 'utf8');
    
    console.log('تم تحديث ملف posts.js بنجاح');
    
    return true;
  } catch (error) {
    console.error('خطأ في تحديث ملف posts.js:', error);
    return false;
  }
}

// دالة رئيسية لتنفيذ العملية
async function main() {
  console.log('بدء عملية استخدام الصور الموجودة...');
  
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
  
  // تحديث مسارات الصور في المقالات
  const updatedPosts = updateArticleImages(posts, availableImages);
  
  // تحديث ملف posts.js بالمسارات الجديدة
  const updated = updatePostsFile(updatedPosts);
  
  if (updated) {
    console.log('تم الانتهاء من استخدام الصور الموجودة بنجاح!');
  } else {
    console.error('فشل في تحديث ملف posts.js');
  }
}

// تنفيذ الدالة الرئيسية
main().catch(error => {
  console.error('حدث خطأ أثناء تنفيذ السكريبت:', error);
}); 