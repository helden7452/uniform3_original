'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SecurityUniformsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/ar-SA/الاستدامة/security-uniforms');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">جاري التحويل...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
}
