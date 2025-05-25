import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Supported locales
const locales = ['ar-SA'];
const defaultLocale = 'ar-SA';

// Get the preferred locale, similar to the above
function getLocale(request: NextRequest) {
  // For simplicity, we're always using the default locale
  // In a production app, you might check Accept-Language headers
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Prevent redirect for API routes, static files, and other special files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') // This catches files like favicon.ico, etc.
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to the locale version - including the / route
  const locale = getLocale(request);
  const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(newPath, request.url));
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images).*)'],
}; 