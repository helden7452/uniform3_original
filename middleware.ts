import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Supported locales
const locales = ['ar-SA'];
const defaultLocale = 'ar-SA';

function getLocale(request: NextRequest) {
  // For simplicity, we're always using the default locale
  // In a production app, you might check Accept-Language headers
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Special handling for root path
  if (pathname === '/') {
    // Redirect root to default locale
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(request.nextUrl);
  }
  
  // Check if the pathname has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Special handling for paths without locale
  // Append the default locale to the beginning of the path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|static|public|favicon.ico|images).*)',
    // Add homepage matcher
    '/'
  ],
}; 