import { notFound, redirect } from 'next/navigation';

interface ArabicRouteProps {
  params: {
    arabic: string[];
  };
}

export default function ArabicRoute({ params }: ArabicRouteProps) {
  const { arabic } = params;
  
  // Handle Arabic routes
  if (arabic && arabic.length > 0) {
    const path = arabic.join('/');
    
    // Check if it's a sustainability security uniforms page
    if (path === 'الاستدامة/security-uniforms') {
      redirect('/ar-SA/الاستدامة/security-uniforms');
    }
    
    // Check if it's any Arabic category
    if (path.match(/[\u0600-\u06FF]/)) {
      redirect(`/ar-SA/${path}`);
    }
  }
  
  return notFound();
}
