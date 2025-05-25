/**
 * تصحيح مسار الصورة إذا لزم الأمر
 * @param {string} src مسار الصورة
 * @param {string} category الفئة (اختياري)
 * @returns {string} مسار الصورة المصحح
 */
export function fixImagePath(src, category) {
  // إذا كان المسار يبدأ بـ http أو https، فلا نحتاج لتصحيحه
  if (src && (src.startsWith('http://') || src.startsWith('https://'))) {
    return src;
  }

  // تأكد من أن المسار يبدأ بـ "/"
  let correctedSrc = src;
  if (src && !src.startsWith('/')) {
    correctedSrc = `/${src}`;
  }

  // إذا كان المسار غير موجود أو فارغ، استخدم صورة بديلة بناءً على الفئة
  if (!src || src.trim() === '' || src === '/') {
    const formattedCategory = formatCategory(category);
    correctedSrc = formattedCategory 
      ? `/images/${formattedCategory}/default.jpg`
      : '/images/placeholder.jpg';
    return correctedSrc;
  }
  
  // معالجة الفئة لضمان تنسيق صحيح (تحويل الشرطات إلى شرطات سفلية)
  const formattedCategory = formatCategory(category);
  
  // إذا لم يكن المسار يتضمن /images/ ولدينا فئة، نبني مسار صحيح
  if (!correctedSrc.includes('/images/') && formattedCategory) {
    correctedSrc = `/images/${formattedCategory}/${src.split('/').pop()}`;
  }

  // تحديد ما إذا كنا بحاجة للإشارة إلى مجلد المحتوى
  if (formattedCategory && 
      correctedSrc.includes(`/images/${formattedCategory}/`) && 
      !correctedSrc.includes('/content/')) {
    
    // تحقق مما إذا كان هذا مسار صفحة محددة
    const pagePathMatch = correctedSrc.match(new RegExp(`/images/${formattedCategory}/([^/]+)`));
    if (pagePathMatch && pagePathMatch[1]) {
      const pageName = pagePathMatch[1].replace(/\.[^/.]+$/, ""); // إزالة الامتداد
      
      // استخدم تنسيق مسار المحتوى
      if (!correctedSrc.includes(`/images/${formattedCategory}/content/`)) {
        // تحقق مما إذا كان المسار يحتوي على رقم صورة (مثل 1.jpg، 2.jpg)
        const numberMatch = correctedSrc.match(/\/(\d+)\.[^/.]+$/);
        if (numberMatch) {
          const number = numberMatch[1];
          correctedSrc = `/images/${formattedCategory}/content/${pageName}/${number}.jpg`;
        } else {
          correctedSrc = `/images/${formattedCategory}/content/${pageName}/1.jpg`;
        }
      }
    }
  }
  
  return correctedSrc;
}

/**
 * تنسيق اسم الفئة لمطابقة تنسيق المسارات المتوقع
 * @param {string} category اسم الفئة
 * @returns {string} اسم الفئة المنسق
 */
function formatCategory(category) {
  if (!category) return '';
  
  // تنظيف الفئة
  let formattedCategory = category.trim().toLowerCase();
  
  // التعامل مع الحالات الخاصة
  switch (formattedCategory) {
    case 'security-uniforms':
    case 'security_uniforms':
      return 'security_uniforms';
    case 'corporate-uniforms':
    case 'corporate_uniforms':
      return 'corporate_uniforms';
    case 'healthcare-uniforms':
    case 'healthcare_uniforms':
      return 'healthcare_uniforms';
    case 'hospitality-uniforms':
    case 'hospitality_uniforms':
      return 'hospitality_uniforms';
    case 'aviation-uniforms':  
    case 'aviation_uniforms':
      return 'aviation_uniforms';
    default:
      // استبدال الشرطات بشرطات سفلية للفئات الأخرى
      return formattedCategory.replace(/-/g, '_');
  }
}

// قائمة بالامتدادات الصالحة للصور
const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];

/**
 * التحقق من صحة مسار الصورة
 * @param {string} src مسار الصورة
 * @returns {boolean} صحيح إذا كان المسار صالحًا
 */
export function validateImagePath(src) {
  if (!src) return false;
  
  // إذا كان المسار خارجيًا (http/https)، نفترض أنه صالح
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return true;
  }

  // تنظيف المسار
  const cleanPath = src.startsWith('/') ? src.substring(1) : src;
  
  // تحقق من أن المسار غير فارغ ولا يحتوي على undefined
  if (cleanPath.length === 0 || cleanPath.includes('undefined')) {
    return false;
  }
  
  // التحقق من أن المسار يحتوي على امتداد صورة صالح
  const hasValidExtension = validImageExtensions.some(ext => 
    cleanPath.toLowerCase().endsWith(ext)
  );
  
  // التحقق من أن المسار يحتوي على /images/
  const hasImagesPath = cleanPath.includes('images/') || cleanPath.includes('images\\');
  
  return hasImagesPath && hasValidExtension;
} 