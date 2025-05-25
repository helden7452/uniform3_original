import { MetadataRoute } from 'next';
import { locales } from '@/utils/i18n';

// أقسام الموقع الرئيسية
const mainSections = [
  '',
  '/about',
  '/contact',
  '/blog',
  '/healthcare-uniforms',
  '/corporate-uniforms',
  '/security-uniforms',
  '/hospitality-uniforms',
  '/aviation-uniforms',
];

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

// بناء مسارات الموقع المختلفة
function buildLocalizedUrls() {
  const urls: {
    url: string;
    lastModified: Date;
    changeFrequency?: ChangeFrequency;
    priority: number;
  }[] = [];
  
  // إضافة المسارات الرئيسية بكل اللغات المدعومة
  for (const locale of locales) {
    for (const section of mainSections) {
      // المسار الرئيسي هو / بدون لغة
      const path = locale === 'ar-SA' && section === '' 
        ? '/' 
        : `/${locale}${section}`;
      
      // تحديد الأولوية حسب أهمية المسار
      let priority = 1.0;
      if (section !== '') {
        priority = 0.8;
      }
      
      urls.push({
        url: `https://a5fi.com${path}`,
        lastModified: new Date(),
        changeFrequency: section === '' ? 'daily' : 'weekly',
        priority: priority,
      });
    }
  }

  return urls;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedUrls = buildLocalizedUrls();
  
  // هنا يمكنك إضافة مسارات إضافية مثل صفحات المدونة أو المنتجات
  // عن طريق الاستعلام من قاعدة البيانات وإضافتها إلى المصفوفة
  
  return localizedUrls;
} 