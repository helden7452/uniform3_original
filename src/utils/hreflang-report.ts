import { alternativePages, validateUrlEncoding, generateHreflangTags } from './hreflang';

/**
 * Generate a comprehensive hreflang report for all pages
 */
export function generateHreflangReport() {
  const report = {
    summary: {
      totalPages: alternativePages.length,
      aboutPages: alternativePages.filter(p => p.page === 'about').length,
      contactPages: alternativePages.filter(p => p.page === 'contact').length,
      sections: Array.from(new Set(alternativePages.map(p => p.section))),
    },
    urlValidation: alternativePages.map(page => ({
      ...page,
      validation: validateUrlEncoding(page.url)
    })),
    hreflangCodes: {} as { [key: string]: string[] }
  };

  // Generate hreflang codes for each page
  alternativePages.forEach(page => {
    const pageKey = `${page.section} - ${page.page}`;
    report.hreflangCodes[pageKey] = generateHreflangTags(page.section, page.page);
  });

  return report;
}

/**
 * Generate HTML output for a specific page's hreflang tags
 */
export function generatePageHreflangHTML(section: string, pageType: 'about' | 'contact'): string {
  const tags = generateHreflangTags(section, pageType);
  
  return `<!-- Hreflang tags for ${section} - ${pageType} page -->
${tags.map(tag => `    ${tag}`).join('\n')}`;
}

/**
 * Generate a complete report with all hreflang codes
 */
export function generateCompleteHreflangReport(): string {
  const report = generateHreflangReport();
  
  let output = `# تقرير شامل لأكواد Hreflang\n\n`;
  
  // Summary
  output += `## ملخص التقرير\n`;
  output += `- إجمالي الصفحات: ${report.summary.totalPages}\n`;
  output += `- صفحات "عن القسم": ${report.summary.aboutPages}\n`;
  output += `- صفحات "تواصل معنا": ${report.summary.contactPages}\n`;
  output += `- الأقسام: ${report.summary.sections.join(', ')}\n\n`;
  
  // URL Validation
  output += `## فحص صحة الروابط\n\n`;
  report.urlValidation.forEach(page => {
    output += `### ${page.section} - ${page.page}\n`;
    output += `- الرابط: ${page.url}\n`;
    output += `- الحالة: ${page.validation.isValid ? '✅ صحيح' : '❌ يحتوي على أخطاء'}\n`;
    if (!page.validation.isValid) {
      output += `- المشاكل:\n`;
      page.validation.issues.forEach(issue => {
        output += `  - ${issue}\n`;
      });
    }
    output += `\n`;
  });
  
  // Hreflang codes for each page
  output += `## أكواد Hreflang لكل صفحة\n\n`;
  
  Object.entries(report.hreflangCodes).forEach(([pageKey, tags]) => {
    output += `### ${pageKey}\n\n`;
    output += `\`\`\`html\n`;
    output += `${tags.join('\n')}\n`;
    output += `\`\`\`\n\n`;
  });
  
  return output;
}

/**
 * Generate individual page reports
 */
export function generateIndividualPageReports() {
  const reports: { [key: string]: string } = {};
  
  alternativePages.forEach(page => {
    const pageKey = `${page.section}-${page.page}`;
    const tags = generateHreflangTags(page.section, page.page);
    
    reports[pageKey] = `<!-- أكواد Hreflang لصفحة ${page.section} - ${page.page} -->
<!-- يجب إضافة هذه الأكواد في قسم <head> -->

${tags.map(tag => `${tag}`).join('\n')}

<!-- نهاية أكواد Hreflang -->`;
  });
  
  return reports;
} 