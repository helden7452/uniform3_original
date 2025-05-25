const fs = require('fs');
const path = require('path');

// قراءة ملف المقالات
const postsPath = path.join(__dirname, '../data/posts.js');
const postsContent = fs.readFileSync(postsPath, 'utf8');

// استخراج المقالات من الملف
const posts = eval(postsContent.replace('const posts = ', '').replace('export default posts;', ''));

// قائمة بالصور الموجودة فعلياً في كل مجلد
const availableImages = {
  'corporate_uniforms': [
    'accessories-complementing-corporate-uniforms.jpg',
    'are-corporate-uniforms-necessary-for-all-companies.jpg',
    'balancing-cost-quality-when-choosing-corporate-uniforms.jpg',
    'bank_uniforms.jpg',
    'best-suppliers-for-high-quality-corporate-uniforms-in-saudi-market.jpg',
    'business_uniforms.jpg',
    'case-studies-saudi-companies-enhanced-brand-with-distinctive-uniforms.jpg',
    'corporate_staff_scarves.jpg',
    'corporate_uniform_design.jpg',
    'corporate_uniforms.jpg',
    'differences-between-administrative-frontline-staff-uniforms.jpg',
    'employee_uniforms.jpg',
    'future-of-uniforms-in-saudi-corporate-sector.jpg',
    'how-corporate-uniforms-reflect-company-identity-values.jpg',
    'how-to-ensure-appropriate-sizes-for-all-employees.jpg',
    'ideal-fabrics-for-corporate-uniforms-elegance-comfort.jpg',
    'impact-of-corporate-uniforms-on-work-environment-team-spirit.jpg',
    'impact-of-uniforms-on-employee-productivity-morale.jpg',
    'importance-of-colors-design-in-corporate-identity.jpg',
    'latest-fashion-trends-in-corporate-uniform-design.jpg',
    'placeholder.jpg',
    'role-of-corporate-uniforms-in-promoting-equality-professionalism.jpg',
    'saudi_company_uniforms_case_studies.jpg',
    'summer-winter-corporate-uniforms-design-material-differences.jpg',
    'summer-winter-uniforms-design-differences.jpg',
    'sustainable-corporate-uniforms-eco-friendly-options.jpg',
    'team_uniforms_corporate.jpg',
    'womens_mens_corporate_uniforms.jpg'
  ],
  'healthcare_uniforms': [
    'infection_control_uniforms.jpg',
    'medical_scrubs.jpg',
    'saudi_medical_standards.jpg',
    'scrub_colors.jpg',
    'medical_staff_uniforms.jpg',
    'importance-of-medical-uniforms-in-infection-prevention.jpg',
    'infection-prevention-through-medical-uniforms.jpg',
    'quality-standards-for-medical-uniforms-in-saudi-ministry-of-health.jpg',
    'scrubs-colors-for-different-departments.jpg',
    'medical-college-students-uniform-requirements.jpg',
    'role-of-head-covers-and-masks-in-healthcare.jpg',
    'differences-between-medical-staff-uniforms.jpg',
    'success-stories-saudi-hospitals-with-exemplary-uniform-standards.jpg'
  ],
  'hospitality_uniforms': [
    'chef_uniforms.jpg',
    'hotel_uniforms.jpg',
    'saudi_heritage_uniforms.jpg',
    'success-stories-saudi-hotels-restaurants-with-unique-uniforms.jpg',
    'saudi-heritage-inspired-hospitality-uniforms.jpg',
    'chef-uniform-standards-for-hygiene-and-professionalism.jpg',
    'housekeeping-uniform-comfortable-and-practical-design.jpg',
    'hygiene-standards-for-food-preparation-staff.jpg',
    'importance-of-elegant-appearance-for-hospitality-staff.jpg',
    'modern-trends-in-hospitality-uniform-design.jpg'
  ],
  'aviation_uniforms': [
    'saudia_uniform_history.jpg',
    'flight_safety_standards.jpg',
    'aviation_fabrics.jpg',
    'history-evolution-saudi-airlines-uniform.jpg',
    'safety-standards-for-aviation-uniforms.jpg',
    'how-to-choose-suitable-fabrics-for-aviation-uniforms-in-saudi-climate.jpg',
    'differences-between-pilot-and-cabin-crew-uniforms.jpg',
    'materials-fabric-selection-guide-aviation-uniforms.jpg',
    'safety-requirements-in-crew-uniform-design.jpg'
  ],
  'security_uniforms': [
    'saudi_security_uniforms.jpg',
    'security_authority.jpg',
    'how-to-choose-suitable-security-uniforms-in-saudi-arabia.jpg',
    'importance-of-security-uniforms-in-imposing-authority.jpg',
    'best-tactical-boots-for-security-personnel.jpg',
    'designing-practical-security-uniform.jpg',
    'importance-of-protective-reflective-vests-for-security-personnel.jpg',
    'role-of-dark-colors-and-official-badges-in-security-uniform-design.jpg',
    'standards-for-choosing-security-uniform-fabrics.jpg'
  ]
};

// دالة للعثور على أفضل صورة متطابقة
function findBestMatch(slug, category, currentImage) {
  const categoryImages = availableImages[category.replace('-', '_')] || [];
  
  // البحث عن صورة تحتوي على slug المقال
  const exactMatch = categoryImages.find(img => img.includes(slug));
  if (exactMatch) {
    return `/images/${category.replace('-', '_')}/${exactMatch}`;
  }
  
  // البحث عن صورة تحتوي على كلمات مفتاحية من العنوان
  const keywords = slug.split('-');
  const keywordMatch = categoryImages.find(img => 
    keywords.some(keyword => img.includes(keyword))
  );
  if (keywordMatch) {
    return `/images/${category.replace('-', '_')}/${keywordMatch}`;
  }
  
  // استخدام placeholder إذا لم نجد تطابق
  if (categoryImages.includes('placeholder.jpg')) {
    return `/images/${category.replace('-', '_')}/placeholder.jpg`;
  }
  
  // استخدام أول صورة متاحة
  if (categoryImages.length > 0) {
    return `/images/${category.replace('-', '_')}/${categoryImages[0]}`;
  }
  
  return currentImage; // الاحتفاظ بالصورة الحالية إذا لم نجد بديل
}

// إصلاح مسارات الصور
const fixedPosts = posts.map(post => {
  const currentImage = post.coverImage;
  const newImage = findBestMatch(post.slug, post.category, currentImage);
  
  if (currentImage !== newImage) {
    console.log(`تم إصلاح: ${post.slug}`);
    console.log(`  من: ${currentImage}`);
    console.log(`  إلى: ${newImage}`);
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
console.log('تم إصلاح جميع مسارات الصور بنجاح!');