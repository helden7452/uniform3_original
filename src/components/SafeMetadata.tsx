import { Metadata } from 'next';
import { createSafeMetadata } from '@/utils/encoding';

interface SafeMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
}

/**
 * Generate safe metadata that won't cause ByteString errors with Arabic text
 */
export function generateSafeMetadata(props: SafeMetadataProps): Metadata {
  return createSafeMetadata(props);
}

/**
 * Component for rendering safe meta tags
 */
export default function SafeMetadata({ title, description, keywords }: SafeMetadataProps) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=no" />
    </>
  );
} 