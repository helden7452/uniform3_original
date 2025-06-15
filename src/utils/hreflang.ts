/**
 * Utility functions for managing hreflang tags for Arabic alternative pages
 */

export interface AlternatePage {
  section: string;
  page: 'about' | 'contact';
  url: string;
}

/**
 * All alternative pages that should reference each other
 */
export const alternativePages: AlternatePage[] = [
  // About pages
  { section: 'التراث والتصميم', page: 'about', url: 'https://a5fi.com/التراث%20والتصميم/about' },
  { section: 'الاتجاهات', page: 'about', url: 'https://a5fi.com/الاتجاهات/about' },
  { section: 'التصميم', page: 'about', url: 'https://a5fi.com/التصميم/about' },
  { section: 'المساواة والمهنية', page: 'about', url: 'https://a5fi.com/المساواة%20والمهنية/about' },
  { section: 'الهوية المؤسسية', page: 'about', url: 'https://a5fi.com/الهوية%20المؤسسية/about' },
  { section: 'أزياء الطيران', page: 'about', url: 'https://a5fi.com/أزياء%20الطيران/about' },
  
  // Contact pages
  { section: 'التراث والتصميم', page: 'contact', url: 'https://a5fi.com/التراث%20والتصميم/contact' },
  { section: 'الاتجاهات', page: 'contact', url: 'https://a5fi.com/الاتجاهات/contact' },
  { section: 'المساواة والمهنية', page: 'contact', url: 'https://a5fi.com/المساواة%20والمهنية/contact' },
  { section: 'التصميم', page: 'contact', url: 'https://a5fi.com/التصميم/contact' },
  { section: 'الهوية المؤسسية', page: 'contact', url: 'https://a5fi.com/الهوية%20المؤسسية/contact' },
  { section: 'أزياء الطيران', page: 'contact', url: 'https://a5fi.com/أزياء%20الطيران/contact' },
];

/**
 * Get all alternative pages for a specific page type
 */
export function getAlternativePagesForType(pageType: 'about' | 'contact'): AlternatePage[] {
  return alternativePages.filter(page => page.page === pageType);
}

/**
 * Generate hreflang tags for a specific page
 */
export function generateHreflangTags(currentSection: string, pageType: 'about' | 'contact'): string[] {
  const relevantPages = getAlternativePagesForType(pageType);
  
  return relevantPages.map(page => {
    // Use properly encoded URLs
    const encodedUrl = encodeURI(page.url);
    return `<link rel="alternate" hreflang="ar" href="${encodedUrl}" />`;
  });
}

/**
 * Generate hreflang metadata for Next.js
 */
export function generateHreflangMetadata(currentSection: string, pageType: 'about' | 'contact') {
  const relevantPages = getAlternativePagesForType(pageType);
  
  const alternates: { [key: string]: string } = {};
  
  relevantPages.forEach(page => {
    // Create a unique key for each alternative
    const key = `ar-${page.section.replace(/\s+/g, '-')}`;
    alternates[key] = encodeURI(page.url);
  });
  
  return {
    alternates: {
      languages: alternates
    }
  };
}

/**
 * Get the current page info based on section and page type
 */
export function getCurrentPageInfo(section: string, pageType: 'about' | 'contact'): AlternatePage | null {
  return alternativePages.find(page => 
    page.section === section && page.page === pageType
  ) || null;
}

/**
 * Validate if a URL is properly encoded
 */
export function validateUrlEncoding(url: string): { isValid: boolean; issues: string[] } {
  const issues: string[] = [];
  
  try {
    // Check if URL can be decoded
    const decoded = decodeURIComponent(url);
    
    // Check if it contains Arabic characters that should be encoded
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/;
    if (arabicRegex.test(url) && !url.includes('%')) {
      issues.push('URL contains unencoded Arabic characters');
    }
    
    // Check if URL is properly formatted
    if (!url.startsWith('https://')) {
      issues.push('URL should start with https://');
    }
    
  } catch (error) {
    issues.push('URL encoding is invalid');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * Generate HTML string for hreflang tags
 */
export function generateHreflangHTML(currentSection: string, pageType: 'about' | 'contact'): string {
  const tags = generateHreflangTags(currentSection, pageType);
  return tags.join('\n    ');
} 