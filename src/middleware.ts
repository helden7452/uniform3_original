import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Fix Arabic encoding issues in headers
  const url = request.nextUrl.clone();
  
  // Ensure proper encoding for Arabic content
  response.headers.set('Content-Type', 'text/html; charset=utf-8');
  
  // Add cache control for better performance
  if (url.pathname.startsWith('/images/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Handle Arabic URLs properly
  if (url.pathname.includes('%D8%') || url.pathname.includes('%D9%')) {
    try {
      const decodedPath = decodeURIComponent(url.pathname);
      // Only redirect if the decoded path is different and valid
      if (decodedPath !== url.pathname && !decodedPath.includes('undefined')) {
        url.pathname = decodedPath;
        return NextResponse.redirect(url);
      }
    } catch (error) {
      // If decoding fails, continue with original path
      console.warn('URL decoding failed:', error);
    }
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 