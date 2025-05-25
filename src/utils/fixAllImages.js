const fs = require('fs');
const path = require('path');
const posts = require('../data/posts').default;

// إنشاء صورة بسيطة بحجم 1x1 بكسل GIF
const createPlaceholder = () => {
  return Buffer.from([
    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
    0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02, 0x44,
    0x01, 0x00, 0x3B
  ]);
};

// الفئات المختلفة للمقالات
const categories = ['blog', 'corporate-uniforms', 'healthcare-uniforms', 'hospitality-uniforms', 'aviation-uniforms', 'security-uniforms'];

// تحديد مسارات الصور المفقودة المحددة في السجل
const missingPaths = [
  '/images/hero-bg.jpg',
  '/images/healthcare_uniforms/medical_staff_uniforms.jpg',
  '/images/security_uniforms/security_guards.jpg',
  '/images/hospitality_uniforms/luxury_hotel_staff.jpg',
  '/images/corporate_uniforms/corporate_staff.jpg',
  '/images/healthcare_uniforms/infection_control_uniforms.jpg',
  '/images/healthcare_uniforms/saudi_medical_standards.jpg',
  '/images/aviation_uniforms/saudia_uniform_history.jpg',
  '/images/aviation_uniforms/flight_safety_standards.jpg',
  '/images/security_uniforms/saudi_security_uniforms.jpg',
  '/images/security_uniforms/security_authority.jpg',
  '/images/healthcare_uniforms/scrub_colors.jpg',
  '/images/aviation_uniforms/aviation_fabrics.jpg',
  '/images/healthcare_uniforms/medical_students_uniform.jpg',
  '/images/healthcare_uniforms/medical_masks_caps.jpg',
  '/images/healthcare_uniforms/medical_staff_comparison.jpg',
  '/images/healthcare_uniforms/saudi_hospitals_uniforms.jpg',
  '/images/hospitality_uniforms/elegant_hotel_staff.jpg',
  '/images/aviation_uniforms/pilot_crew_differences.jpg',
  '/images/security_uniforms/security_fabrics.jpg',
  '/images/security_uniforms/reflective_vests.jpg',
  '/images/healthcare_uniforms/practical_medical_uniform.jpg',
  '/images/healthcare_uniforms/medical_fabric_selection.jpg',
  '/images/healthcare_uniforms/medical_uniform_care.jpg',
  '/images/healthcare_uniforms/medical_tech_fabrics.jpg',
  '/images/healthcare_uniforms/hospital_departments_uniforms.jpg',
  '/images/hospitality_uniforms/cost_quality_balance.jpg',
  '/images/hospitality_uniforms/luxury_hospitality_suppliers.jpg',
  '/images/hospitality_uniforms/food_prep_hygiene.jpg',
  '/images/hospitality_uniforms/modern_hospitality_trends.jpg',
  '/images/aviation_uniforms/aviation_fabric_guide.jpg',
  '/images/aviation_uniforms/international_regulations.jpg',
  '/images/aviation_uniforms/crew_safety_design.jpg',
  '/images/security_uniforms/tactical_boots.jpg',
  '/images/security_uniforms/practical_security_design.jpg',
  '/images/security_uniforms/dark_colors_badges.jpg',
  '/images/healthcare_uniforms/medical_uniform_guide.jpg',
  '/images/hospitality_uniforms/staff_appearance.jpg',
  '/images/healthcare_uniforms/scrubs_guide.jpg',
  '/images/educational_uniforms/school_uniform_guide.jpg',
  '/images/hospitality_uniforms/trends_2024.jpg',
  '/images/security_uniforms/security_fabrics_guide.jpg',
  '/images/healthcare_uniforms/functional_pockets.jpg',
  '/images/healthcare_uniforms/comfortable_scrubs.jpg',
  '/images/healthcare_uniforms/global_standards.jpg',
  '/images/healthcare_uniforms/infection_prevention.jpg',
  '/images/security_uniforms/saudi_standards.jpg',
];

// صور مقالات الطيران الجديدة
const newAviationImages = [
  // المقال الأول: تاريخ وتطور زي الخطوط الجوية السعودية
  '/images/aviation_uniforms/saudia_uniform_history.jpg',
  '/images/aviation_uniforms/saudi_airlines_uniform_evolution.jpg',
  '/images/aviation_uniforms/saudi_airlines_identity.jpg',
  
  // المقال الثاني: أزياء الطيران الخاصة للطائرات رجال الأعمال
  '/images/aviation_uniforms/private_aviation_uniforms.jpg',
  '/images/aviation_uniforms/business_jet_crew_attire.jpg',
  '/images/aviation_uniforms/luxury_private_jet_uniforms.jpg',
  
  // المقال الثالث: اعتبارات أزياء الخدمة الأرضية في المطارات السعودية
  '/images/aviation_uniforms/ground_service_uniforms.jpg',
  '/images/aviation_uniforms/saudi_airport_staff_uniforms.jpg',
  '/images/aviation_uniforms/ground_crew_safety_gear.jpg',
  
  // المقال الرابع: تأثير الزي الموحد على روح طاقم الطيران والأداء
  '/images/aviation_uniforms/crew_morale.jpg',
  '/images/aviation_uniforms/flight_crew_performance.jpg',
  '/images/aviation_uniforms/airline_team_spirit.jpg',
  
  // المقال الخامس: التكنولوجيا في أقمشة أزياء الطيران
  '/images/aviation_uniforms/wrinkle_resistant_fabrics.jpg',
  '/images/aviation_uniforms/aviation_fabric_technology.jpg',
  '/images/aviation_uniforms/innovative_uniform_materials.jpg'
];

// 1. إصلاح الصور الأساسية
console.log('1. إنشاء الصور الأساسية...');

// استخراج جميع مسارات الصور من المقالات
const allImagePaths = posts.map(post => post.coverImage);
const uniqueImagePaths = [...new Set(allImagePaths)];

uniqueImagePaths.forEach(imagePath => {
  // إزالة الشرطة المائلة في البداية إذا وجدت
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // إنشاء المسار الكامل للملف في دليل public
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`تم إنشاء المجلد: ${directory}`);
  }
  
  // إنشاء الصورة إذا لم تكن موجودة
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`تم إنشاء صورة أساسية: ${fullPath}`);
  }
});

// 2. إصلاح صور المؤلفين
console.log('2. إنشاء صور المؤلفين...');

// استخراج معرفات المؤلفين الفريدة من المقالات
const authorIds = posts.map(post => post.author);
const uniqueAuthorIds = [...new Set(authorIds)];

uniqueAuthorIds.forEach(authorId => {
  const imagePath = `/images/author/${authorId}.png`;
  
  // إزالة الشرطة المائلة في البداية إذا وجدت
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // إنشاء المسار الكامل للملف في دليل public
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`تم إنشاء مجلد المؤلف: ${directory}`);
  }
  
  // إنشاء صورة المؤلف إذا لم تكن موجودة
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`تم إنشاء صورة المؤلف: ${fullPath}`);
  }
});

// 3. إصلاح الصور المفقودة المحددة
console.log('3. إصلاح الصور المفقودة المحددة...');

missingPaths.forEach(imagePath => {
  // إزالة الشرطة المائلة في البداية إذا وجدت
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // إنشاء المسار الكامل للملف في دليل public
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`تم إنشاء مجلد للصورة المفقودة: ${directory}`);
  }
  
  // إنشاء الصورة إذا لم تكن موجودة
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`تم إصلاح الصورة المفقودة: ${fullPath}`);
  }
});

// 4. إنشاء صور مقالات الطيران الجديدة
console.log('4. إنشاء صور مقالات الطيران الجديدة...');

newAviationImages.forEach(imagePath => {
  // إزالة الشرطة المائلة في البداية إذا وجدت
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // إنشاء المسار الكامل للملف في دليل public
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`تم إنشاء مجلد لصور الطيران: ${directory}`);
  }
  
  // إنشاء الصورة إذا لم تكن موجودة
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`تم إنشاء صورة طيران جديدة: ${fullPath}`);
  }
});

// 5. إنشاء صور افتراضية لكل فئة
console.log('5. إنشاء صور افتراضية للفئات...');

categories.forEach(category => {
  // تحويل اسم الفئة إلى اسم المجلد
  const folderName = category.replace('-', '_');
  
  // إنشاء مسار الصورة الافتراضية للفئة
  const defaultImagePath = path.join(process.cwd(), '..', 'public', 'images', folderName, 'default.jpg');
  
  // إنشاء الدليل إذا لم يكن موجودًا
  const directory = path.dirname(defaultImagePath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`تم إنشاء مجلد للفئة: ${directory}`);
  }
  
  // إنشاء الصورة الافتراضية إذا لم تكن موجودة
  if (!fs.existsSync(defaultImagePath)) {
    fs.writeFileSync(defaultImagePath, createPlaceholder());
    console.log(`تم إنشاء صورة افتراضية للفئة: ${defaultImagePath}`);
  }
  
  // إنشاء صورة عامة للفئة في المجلد الرئيسي
  const categoryImagePath = path.join(process.cwd(), '..', 'public', 'images', `${folderName}.jpg`);
  if (!fs.existsSync(categoryImagePath)) {
    fs.writeFileSync(categoryImagePath, createPlaceholder());
    console.log(`تم إنشاء صورة عامة للفئة: ${categoryImagePath}`);
  }
});

// 6. إنشاء صورة الخلفية hero-bg.jpg
console.log('6. إنشاء صورة الخلفية الرئيسية...');

const heroBgPath = path.join(process.cwd(), '..', 'public', 'images', 'hero-bg.jpg');
if (!fs.existsSync(heroBgPath)) {
  fs.writeFileSync(heroBgPath, createPlaceholder());
  console.log(`تم إنشاء صورة الخلفية الرئيسية: ${heroBgPath}`);
} else {
  console.log(`صورة الخلفية الرئيسية موجودة بالفعل: ${heroBgPath}`);
}

console.log('تم إصلاح جميع مشاكل الصور بنجاح!'); 