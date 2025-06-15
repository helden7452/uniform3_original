import { generateHreflangMetadata, generateHreflangTags } from '@/utils/hreflang';

interface HreflangTagsProps {
  currentSection: string;
  pageType: 'about' | 'contact';
}

/**
 * Component to render hreflang tags in the head
 */
export default function HreflangTags({ currentSection, pageType }: HreflangTagsProps) {
  const tags = generateHreflangTags(currentSection, pageType);
  
  return (
    <>
      {tags.map((tag, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang="ar"
          href={tag.match(/href="([^"]*)"/)![1]}
        />
      ))}
    </>
  );
}

/**
 * Generate metadata with hreflang for Next.js pages
 */
export function generatePageMetadataWithHreflang(
  currentSection: string, 
  pageType: 'about' | 'contact',
  baseMetadata: any = {}
) {
  const hreflangMetadata = generateHreflangMetadata(currentSection, pageType);
  
  return {
    ...baseMetadata,
    ...hreflangMetadata,
  };
} 