'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function DynamicSlugRoute() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string[];

  // Combine the functionality of both routes
  useEffect(() => {
    if (slug && slug.length > 0) {
      const path = slug.join('/');
      
      // Handle Arabic routes that need redirect to localized versions
      if (path.match(/[\u0600-\u06FF]/) && !path.startsWith('ar-SA/')) {
        // If it's an Arabic route but not already prefixed with locale
        router.push(`/ar-SA/${path}`);
        return;
      }
    }
  }, [slug, router]);

  // Loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">جاري التحويل...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
}
