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

// استخراج البيانات الوصفية من الصفحة الموجودة
function extractMetadata(content) {
  const metadata = {};
  
  // استخراج العنوان
  const titleMatch = content.match(/title: ['"](.+?)['"]/);
  metadata.title = titleMatch ? titleMatch[1] : "عنوان المقال";
  
  // استخراج الوصف
  const descMatch = content.match(/description: ['"](.+?)['"]/);
  metadata.description = descMatch ? descMatch[1] : "وصف المقال";
  
  // استخراج الكلمات المفتاحية
  const keywordsMatch = content.match(/keywords: (.+?)(,|\n)/);
  metadata.keywords = keywordsMatch ? keywordsMatch[1].replace(/[[\]'"]/g, '').trim() : "";
  
  return metadata;
}

// استخراج معلومات المسارات من فتات الخبز (Breadcrumb)
function extractBreadcrumbPaths(content) {
  const paths = [];
  const pathMatches = content.match(/href: ['"]\/([^'"]+)['"]/g);
  
  if (pathMatches) {
    pathMatches.forEach(match => {
      const path = match.match(/href: ['"]\/([^'"]+)['"]/)[1];
      if (!paths.includes(path)) {
        paths.push(path);
      }
    });
  }
  
  return paths;
}

// استخراج محتوى المقال الفعلي
function extractArticleContent(content) {
  let articleContent = '';
  
  // البحث عن محتوى المقال بين وسمي <article> و </article>
  const articleMatch = content.match(/<article.*?>([\s\S]*?)<\/article>/);
  if (articleMatch && articleMatch[1]) {
    articleContent = articleMatch[1].trim();
  }
  
  return articleContent;
}

// استخراج الصور المستخدمة في المقال
function extractImages(content) {
  const images = [];
  const imageMatches = content.match(/src="\/images\/([^"]+)"/g);
  
  if (imageMatches) {
    imageMatches.forEach(match => {
      const imagePath = match.match(/src="\/images\/([^"]+)"/)[1];
      images.push(imagePath);
    });
  }
  
  return images;
}

// دمج محتوى المقال الفعلي في القالب
function mergeContentWithTemplate(templateContent, originalContent, filePath) {
  // استخراج البيانات من المحتوى الأصلي
  const metadata = extractMetadata(originalContent);
  const paths = extractBreadcrumbPaths(originalContent);
  const articleContent = extractArticleContent(originalContent);
  const images = extractImages(originalContent);
  
  console.log('\n=== معلومات المقال المستخرجة ===');
  console.log('العنوان:', metadata.title);
  console.log('المسارات:', paths);
  console.log('الصور المستخدمة:', images);
  
  // تحديد القسم والمقال من المسار
  const pathParts = filePath.split('/');
  const sectionIndex = pathParts.indexOf('app') + 1;
  const sectionPath = pathParts[sectionIndex];
  const slug = pathParts[sectionIndex + 1];
  
  // إنشاء اسم المكون من slug
  const componentName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
  
  // تخصيص القالب
  let newContent = templateContent;
  
  // تحديث البيانات الوصفية
  newContent = newContent.replace(/title: "عنوان المقال \| خبراء الزي الموحد"/, 
    `title: "${metadata.title}"`);
  
  newContent = newContent.replace(/description: "وصف مختصر للمقال يشرح محتواه الرئيسي وأهميته."/, 
    `description: "${metadata.description}"`);
  
  // تحديث اسم المكون
  newContent = newContent.replace(/const PostTemplate = \(\) => {/, 
    `const ${componentName} = () => {`);
  
  newContent = newContent.replace(/export default PostTemplate;/, 
    `export default ${componentName};`);
  
  // تحديث المسارات في فتات الخبز (Breadcrumb)
  if (paths.length >= 2) {
    newContent = newContent.replace(/'اسم القسم', href: '\/section-name'/g, 
      `'${sectionPath}', href: '/${sectionPath}'`);
    
    newContent = newContent.replace(/'عنوان المقال', href: '\/section-name\/post-name'/g, 
      `'${metadata.title}', href: '/${sectionPath}/${slug}'`);
  }
  
  // تحديث محتوى المقال (هذا يحتاج إلى تنفيذ أكثر تعقيدًا في التطبيق الفعلي)
  // هنا نفترض أن القالب يحتوي على تعليق أو عنصر نائب يمكننا استبداله
  
  // العثور على مكان إدراج المحتوى في القالب (بين وسوم المقال)
  const articlePlaceholder = /<article.*?>([\s\S]*?)<\/article>/;
  if (articleContent) {
    // استبدال محتوى المقال في القالب بالمحتوى الأصلي
    newContent = newContent.replace(articlePlaceholder, (match, p1) => {
      return match.replace(p1, `\n${articleContent}\n      `);
    });
  }
  
  return newContent;
}

// الدالة الرئيسية
async function main() {
  try {
    console.log('\n=== تحويل صفحة مقال موجودة إلى القالب الموحد ===\n');
    
    // طلب مسار الصفحة من المستخدم
    const filePath = await question('أدخل مسار ملف الصفحة (مثال: src/app/security-uniforms/article/page.tsx): ');
    
    // قراءة محتوى الصفحة الموجودة
    let originalContent;
    try {
      originalContent = await readFile(filePath, 'utf8');
      console.log(`تم قراءة الملف: ${filePath}`);
    } catch (error) {
      console.error(`خطأ في قراءة الملف: ${error.message}`);
      rl.close();
      return;
    }
    
    // تحميل القالب
    const templateContent = await loadTemplate();
    
    // إنشاء مجلد للنسخ الاحتياطية
    const backupDir = 'backups';
    await mkdir(backupDir, { recursive: true });
    
    // إنشاء نسخة احتياطية من الملف الأصلي
    const backupFilePath = path.join(backupDir, filePath);
    await mkdir(path.dirname(backupFilePath), { recursive: true });
    await writeFile(backupFilePath, originalContent);
    console.log(`تم إنشاء نسخة احتياطية: ${backupFilePath}`);
    
    // دمج المحتوى مع القالب
    const newContent = mergeContentWithTemplate(templateContent, originalContent, filePath);
    
    // تأكيد التحديث
    const confirm = await question('\nهل تريد تحديث الملف بالمحتوى الجديد؟ (نعم/لا): ');
    
    if (confirm.toLowerCase() === 'نعم') {
      // حفظ المحتوى الجديد
      await writeFile(filePath, newContent);
      console.log(`\nتم تحديث الملف بنجاح: ${filePath}`);
    } else {
      console.log('\nتم إلغاء العملية.');
    }
    
  } catch (error) {
    console.error('حدث خطأ:', error);
  } finally {
    rl.close();
  }
}

main(); 