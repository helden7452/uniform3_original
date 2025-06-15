/**
 * Utility functions to handle Arabic text encoding issues
 */

/**
 * Sanitize Arabic text for use in headers and metadata
 * Converts Arabic text to a safe format that won't cause ByteString errors
 */
export function sanitizeArabicText(text: string): string {
  if (!text) return '';
  
  try {
    // Encode Arabic characters properly for headers
    return encodeURIComponent(text).replace(/%/g, '');
  } catch (error) {
    console.warn('Failed to sanitize Arabic text:', error);
    // Fallback: remove non-ASCII characters
    return text.replace(/[^\x00-\x7F]/g, '');
  }
}

/**
 * Create safe metadata object with properly encoded Arabic text
 */
export function createSafeMetadata(metadata: {
  title?: string;
  description?: string;
  keywords?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
}) {
  return {
    title: metadata.title || '',
    description: metadata.description || '',
    keywords: metadata.keywords || '',
    openGraph: {
      title: metadata.openGraph?.title || metadata.title || '',
      description: metadata.openGraph?.description || metadata.description || '',
      images: metadata.openGraph?.images || [],
    },
    // Add charset meta tag
    other: {
      charset: 'utf-8',
    },
  };
}

/**
 * Encode URL path safely for Arabic content
 */
export function encodeArabicPath(path: string): string {
  try {
    return encodeURIComponent(path);
  } catch (error) {
    console.warn('Failed to encode Arabic path:', error);
    return path;
  }
}

/**
 * Decode URL path safely for Arabic content
 */
export function decodeArabicPath(path: string): string {
  try {
    return decodeURIComponent(path);
  } catch (error) {
    console.warn('Failed to decode Arabic path:', error);
    return path;
  }
}

/**
 * Check if text contains Arabic characters
 */
export function containsArabic(text: string): boolean {
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/;
  return arabicRegex.test(text);
}

/**
 * Convert Arabic numerals to English numerals
 */
export function arabicToEnglishNumerals(text: string): string {
  const arabicNumerals = '٠١٢٣٤٥٦٧٨٩';
  const englishNumerals = '0123456789';
  
  return text.replace(/[٠-٩]/g, (match) => {
    return englishNumerals[arabicNumerals.indexOf(match)];
  });
}

/**
 * Normalize Arabic text for better compatibility
 */
export function normalizeArabicText(text: string): string {
  return text
    .replace(/ي/g, 'ي') // Normalize Ya
    .replace(/ك/g, 'ك') // Normalize Kaf
    .replace(/ة/g, 'ة') // Normalize Ta Marbuta
    .trim();
} 