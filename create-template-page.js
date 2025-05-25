const fs = require('fs');
const path = require('path');
const util = require('util');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);

// مسار ملف القالب
const TEMPLATE_PATH = 'src/app/templates/post-template.tsx';

// إنشاء واجهة للتفاعل مع المستخدم
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// وعد للسؤال
function question(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

// تحميل محتوى قالب المقال
async function loadTemplate() {
  try {
    return await readFile(TEMPLATE_PATH, 'utf8');
  } catch (error) {
    console.error('خطأ في قراءة ملف القالب:', error);
    process.exit(1);
  }
}

// إنشاء مجلد المقال إذا لم يكن موجودًا
async function createDirectory(dir) {
  try {
    await mkdir(dir, { recursive: true });
    console.log(`تم إنشاء المجلد: ${dir}`);
  } catch (error) {
    console.error(`خطأ في إنشاء المجلد ${dir}:`, error);
    process.exit(1);
  }
}

// تحديث محتوى القالب بالمعلومات المقدمة
function customizeTemplate(templateContent, info) {
  let newContent = templateContent;
  
  // تحديث البيانات الوصفية
  newContent = newContent.replace(/title: "عنوان المقال \| خبراء الزي الموحد"/, 
    `title: "${info.title} | خبراء الزي الموحد"`);
  
  newContent = newContent.replace(/description: "وصف مختصر للمقال يشرح محتواه الرئيسي وأهميته."/, 
    `description: "${info.description}"`);
  
  // تحديث الكلمات المفتاحية
  const keywordsArray = info.keywords.split(',').map(k => `"${k.trim()}"`).join(', ');
  newContent = newContent.replace(/keywords: \["كلمة مفتاحية 1", "كلمة مفتاحية 2", "كلمة مفتاحية 3", "كلمة مفتاحية 4"\]/, 
    `keywords: [${keywordsArray}]`);
  
  // تحديث المسارات في فتات الخبز (Breadcrumb)
  newContent = newContent.replace(/'اسم القسم', href: '\/section-name'/g, 
    `'${info.sectionTitle}', href: '/${info.sectionPath}'`);
  
  newContent = newContent.replace(/'عنوان المقال', href: '\/section-name\/post-name'/g, 
    `'${info.title}', href: '/${info.sectionPath}/${info.slug}'`);
  
  // تحديث عنوان المقال
  newContent = newContent.replace(/عنوان المقال الرئيسي/, info.title);
  
  // تحديث مسار الصورة
  newContent = newContent.replace(/src="\/images\/section_name\/image_name.jpg"/, 
    `src="/images/${info.sectionPath}/${info.imageFileName}"`);
  
  // تحديث نص alt للصورة
  newContent = newContent.replace(/alt="وصف الصورة - عنوان المقال"/, 
    `alt="${info.title}"`);
  
  // تحديث اسم المكون
  newContent = newContent.replace(/const PostTemplate = \(\) => {/, 
    `const ${info.componentName} = () => {`);
  
  newContent = newContent.replace(/export default PostTemplate;/, 
    `export default ${info.componentName};`);
  
  return newContent;
}

// الدالة الرئيسية
async function main() {
  try {
    console.log('\n=== إنشاء صفحة مقال جديدة بناءً على القالب ===\n');
    
    // جمع معلومات المقال من المستخدم
    const sectionPath = await question('أدخل مسار القسم (مثال: security-uniforms): ');
    const slug = await question('أدخل اسم المقال المختصر بالإنجليزية (مثال: choosing-fabric-guide): ');
    const title = await question('أدخل عنوان المقال: ');
    const description = await question('أدخل وصف المقال: ');
    const keywords = await question('أدخل الكلمات المفتاحية مفصولة بفواصل: ');
    const sectionTitle = await question('أدخل عنوان القسم بالعربية: ');
    const imageFileName = await question('أدخل اسم ملف الصورة (مع الامتداد): ');
    
    // إنشاء اسم المكون من slug
    const componentName = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';
    
    // جمع كل المعلومات
    const info = {
      sectionPath,
      slug,
      title,
      description,
      keywords,
      sectionTitle,
      imageFileName,
      componentName
    };
    
    // تأكيد البيانات
    console.log('\n=== معلومات المقال ===');
    console.log(info);
    const confirm = await question('\nهل تريد المتابعة؟ (نعم/لا): ');
    
    if (confirm.toLowerCase() !== 'نعم') {
      console.log('تم إلغاء العملية.');
      rl.close();
      return;
    }
    
    // تحميل القالب
    const templateContent = await loadTemplate();
    
    // إنشاء المجلد الجديد
    const newDir = `src/app/${sectionPath}/${slug}`;
    await createDirectory(newDir);
    
    // تخصيص القالب
    const customizedContent = customizeTemplate(templateContent, info);
    
    // إنشاء ملف page.tsx الجديد
    const newFilePath = path.join(newDir, 'page.tsx');
    await writeFile(newFilePath, customizedContent);
    
    console.log(`\nتم إنشاء ملف المقال الجديد بنجاح: ${newFilePath}`);
    console.log('\nتذكر أن تقوم بتخصيص محتوى المقال ومراجعته قبل النشر.');
    
  } catch (error) {
    console.error('حدث خطأ:', error);
  } finally {
    rl.close();
  }
}

main(); 