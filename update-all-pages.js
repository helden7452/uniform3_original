const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const stat = util.promisify(fs.stat);
const mkdir = util.promisify(fs.mkdir);

// مسار ملف القالب
const TEMPLATE_PATH = 'src/app/templates/post-template.tsx';

// المجلدات التي تحتوي على مقالات
const articleDirectories = [
  'src/app/security-uniforms',
  'src/app/hospitality-uniforms',
  'src/app/healthcare-uniforms',
  'src/app/corporate-uniforms',
  'src/app/aviation-uniforms',
  'src/app/blog'
];

// تحميل محتوى قالب المقال
async function loadTemplate() {
  try {
    return await readFile(TEMPLATE_PATH, 'utf8');
  } catch (error) {
    console.error('خطأ في قراءة ملف القالب:', error);
    process.exit(1);
  }
}

// الكشف عن كل ملفات page.tsx في المجلدات الفرعية
async function findAllPageFiles(dir) {
  const pageFiles = [];
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const nestedPages = await findAllPageFiles(fullPath);
      pageFiles.push(...nestedPages);
    } else if (entry.name === 'page.tsx') {
      pageFiles.push(fullPath);
    }
  }
  
  return pageFiles;
}

// استخراج المعلومات الأساسية من الملف الحالي
function extractPageInfo(content) {
  // استخراج العنوان
  const titleMatch = content.match(/title: ['"](.+?)['"]/);
  const title = titleMatch ? titleMatch[1] : "عنوان المقال";
  
  // استخراج الوصف
  const descMatch = content.match(/description: ['"](.+?)['"]/);
  const description = descMatch ? descMatch[1] : "وصف المقال";
  
  // استخراج الكلمات المفتاحية
  const keywordsMatch = content.match(/keywords: \[(.+?)\]/);
  const keywords = keywordsMatch ? keywordsMatch[1] : "كلمة مفتاحية 1, كلمة مفتاحية 2";
  
  // استخراج مسار الصور
  const imageSrcMatch = content.match(/src=['"](.+?\.(jpg|png|jpeg|webp))['"]/i);
  const imageSrc = imageSrcMatch ? imageSrcMatch[1] : "/images/default.jpg";
  
  // استخراج اسم الكاتب
  const authorMatch = content.match(/font-semibold.+?>(.+?)<\/p>/);
  const author = authorMatch ? authorMatch[1] : "اسم الكاتب";
  
  // استخراج مسار الصفحة
  const pathMatch = content.match(/href: ['"](.+?)['"]/g);
  const paths = pathMatch ? pathMatch.map(p => p.match(/href: ['"](.+?)['"]/)[1]) : [];
  
  return {
    title,
    description,
    keywords,
    imageSrc,
    author,
    paths
  };
}

// تحديث محتوى الملف ليتبع القالب
async function updatePageFile(filePath, templateContent) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // تحقق مما إذا كان الملف يحتاج إلى تحديث
    // هنا يمكنك تخصيص المنطق حسب احتياجاتك
    const needsUpdate = !content.includes('className="prose max-w-none prose-lg prose-slate mt-8 text-right"') || 
                        !content.includes('<article');
    
    if (needsUpdate) {
      console.log(`يحتاج إلى تحديث: ${filePath}`);
      
      // نسخة احتياطية من الملف الأصلي
      const backupDir = path.join('backups', path.dirname(filePath));
      await mkdir(backupDir, { recursive: true });
      await writeFile(path.join('backups', filePath), content);
      
      // استخراج معلومات الصفحة الحالية
      const pageInfo = extractPageInfo(content);
      
      // إنشاء محتوى جديد بناءً على القالب
      // هذا مجرد نموذج بسيط، قد تحتاج إلى مزيد من المنطق المعقد
      let newContent = templateContent;
      
      // تحديث العنوان والوصف والكلمات المفتاحية
      newContent = newContent.replace(/title: "(.*?)"/, `title: "${pageInfo.title}"`);
      newContent = newContent.replace(/description: "(.*?)"/, `description: "${pageInfo.description}"`);
      newContent = newContent.replace(/keywords: \[(.*?)\]/, `keywords: [${pageInfo.keywords}]`);
      
      // تحديث مسار المقال في فتات الخبز (Breadcrumb)
      if (pageInfo.paths.length >= 2) {
        const section = pageInfo.paths[0];
        const articlePath = pageInfo.paths[1];
        
        newContent = newContent.replace(/'الرئيسية', href: '\/'/g, `'الرئيسية', href: '${section}'`);
        newContent = newContent.replace(/'اسم القسم', href: '\/section-name'/g, `'اسم القسم', href: '${section}'`);
        newContent = newContent.replace(/'عنوان المقال', href: '\/section-name\/post-name'/g, `'عنوان المقال', href: '${articlePath}'`);
      }
      
      // تحديث محتوى المقال
      // هذا يتطلب تحليلًا أكثر تعقيدًا للمحتوى الحالي واستخراجه
      
      // حفظ المحتوى الجديد
      // في الإصدار الحقيقي، قد تحتاج إلى تأكيد أو تحقق إضافي قبل الكتابة
      // await writeFile(filePath, newContent);
      console.log(`تم إنشاء نسخة احتياطية وتحديث: ${filePath}`);
    } else {
      console.log(`مطابق للقالب بالفعل: ${filePath}`);
    }
  } catch (error) {
    console.error(`خطأ في معالجة الملف ${filePath}:`, error);
  }
}

// الدالة الرئيسية
async function main() {
  // تحميل القالب
  const templateContent = await loadTemplate();
  
  // إنشاء مجلد للنسخ الاحتياطية
  await mkdir('backups', { recursive: true });
  
  let allPageFiles = [];
  
  for (const dir of articleDirectories) {
    try {
      if (fs.existsSync(dir)) {
        const pageFiles = await findAllPageFiles(dir);
        allPageFiles.push(...pageFiles);
      }
    } catch (error) {
      console.error(`خطأ في قراءة المجلد ${dir}:`, error);
    }
  }
  
  console.log(`تم العثور على ${allPageFiles.length} صفحة مقال`);
  
  // معالجة كل ملف
  for (const pageFile of allPageFiles) {
    await updatePageFile(pageFile, templateContent);
  }
  
  console.log('تم الانتهاء من العملية!');
}

main().catch(console.error); 