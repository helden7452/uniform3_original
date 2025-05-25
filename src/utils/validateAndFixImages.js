const fs = require('fs');
const path = require('path');

// قراءة جميع الصور الموجودة فعلياً
function getAvailableImages() {
  const imagesDir = path.join(__dirname, '../../public/images');
  const categories = ['corporate_uniforms', 'healthcare_uniforms', 'hospitality_uniforms', 'aviation_uniforms', 'security_uniforms'];
  
  const availableImages = {};
  
  categories.forEach(category => {
    const categoryPath = path.join(imagesDir, category);
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.match(/\.(jpg|jpeg|png|webp)$/i))
        .filter(file => !file.includes('_1.jpg') && !file.includes('_2.jpg') && !file.includes('_3.jpg'))
        .filter(file => !file.includes('-banner.jpg') && !file.includes('-content-') && !file.includes('-feature.jpg'))
        .filter(file => !file.includes('-header.jpg') && !file.includes('-og.jpg') && !file.includes('-social.jpg'))
        .filter(file => !file.includes('-thumbnail.jpg'));
      
      availableImages[category] = files;
      console.log(`${category}: ${files.length} صورة متاحة`);
    }
  });
  
  return availableImages;
}

// دالة للعثور على أفضل صورة متطابقة
function findBestImageMatch(slug, category, availableImages) {
  const categoryKey = category.replace('-', '_');
  const categoryImages = availableImages[categoryKey] || [];
  
  if (categoryImages.length === 0) {
    return `/images/placeholder.jpg`;
  }
  
  // البحث عن تطابق مباشر مع slug
  const directMatch = categoryImages.find(img => {
    const imgName = img.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    return imgName === slug;
  });
  
  if (directMatch) {
    return `/images/${categoryKey}/${directMatch}`;
  }
  
  // البحث عن تطابق جزئي
  const partialMatch = categoryImages.find(img => {
    const imgName = img.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    return slug.includes(imgName) || imgName.includes(slug);
  });
  
  if (partialMatch) {
    return `/images/${categoryKey}/${partialMatch}`;
  }
  
  // البحث بناءً على الكلمات المفتاحية
  const keywords = slug.split('-');
  const keywordMatch = categoryImages.find(img => {
    return keywords.some(keyword => 
      keyword.length > 3 && img.toLowerCase().includes(keyword.toLowerCase())
    );
  });
  
  if (keywordMatch) {
    return `/images/${categoryKey}/${keywordMatch}`;
  }
  
  // استخدام placeholder إذا كان متاحاً
  if (categoryImages.includes('placeholder.jpg')) {
    return `/images/${categoryKey}/placeholder.jpg`;
  }
  
  // استخدام أول صورة متاحة
  return `/images/${categoryKey}/${categoryImages[0]}`;
}

// قراءة وإصلاح ملف المقالات
function fixPostsImages() {
  const postsPath = path.join(__dirname, '../data/posts.js');
  
  if (!fs.existsSync(postsPath)) {
    console.error('ملف المقالات غير موجود!');
    return;
  }
  
  const availableImages = getAvailableImages();
  
  // قراءة محتوى الملف
  let content = fs.readFileSync(postsPath, 'utf8');
  
  // استخراج المقالات باستخدام regex
  const postsMatch = content.match(/const posts = (\[[\s\S]*?\]);/);
  if (!postsMatch) {
    console.error('لا يمكن العثور على بيانات المقالات في الملف!');
    return;
  }
  
  let posts;
  try {
    posts = eval(postsMatch[1]);
  } catch (error) {
    console.error('خطأ في تحليل بيانات المقالات:', error);
    return;
  }
  
  console.log(`تم العثور على ${posts.length} مقال`);
  
  let fixedCount = 0;
  
  // إصلاح مسارات الصور
  const fixedPosts = posts.map(post => {
    const currentImage = post.coverImage;
    const newImage = findBestImageMatch(post.slug, post.category, availableImages);
    
    if (currentImage !== newImage) {
      console.log(`\nإصلاح: ${post.title}`);
      console.log(`  من: ${currentImage}`);
      console.log(`  إلى: ${newImage}`);
      fixedCount++;
    }
    
    return {
      ...post,
      coverImage: newImage
    };
  });
  
  // كتابة الملف المحدث
  const updatedContent = `const posts = ${JSON.stringify(fixedPosts, null, 2)};

export default posts;`;
  
  fs.writeFileSync(postsPath, updatedContent, 'utf8');
  
  console.log(`\n✅ تم إصلاح ${fixedCount} مسار صورة من أصل ${posts.length} مقال`);
  console.log('تم حفظ الملف المحدث بنجاح!');
}

// تشغيل الإصلاح
if (require.main === module) {
  fixPostsImages();
}

module.exports = { fixPostsImages, getAvailableImages, findBestImageMatch };