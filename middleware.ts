import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, pathnameHasLocale, getLocaleFromPathname } from './src/utils/i18n';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a locale
  const pathnameHasLocalePrefix = pathnameHasLocale(pathname);
  
  // If pathname has locale, continue
  if (pathnameHasLocalePrefix) {
    return NextResponse.next();
  }
  
  // Get locale from Accept-Language header or use default
  const locale = getLocaleFromRequest(request) || defaultLocale;
  
  // For default locale (Arabic), don't add prefix to URL
  if (locale === defaultLocale) {
    return NextResponse.next();
  }
  
  // For non-default locales, redirect to locale-prefixed URL
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

function getLocaleFromRequest(request: NextRequest): string | undefined {
  // Check if locale is in cookie
  const localeCookie = request.cookies.get('locale')?.value;
  if (localeCookie && locales.includes(localeCookie as any)) {
    return localeCookie;
  }
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    // Parse Accept-Language header
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, q = '1'] = lang.trim().split(';q=');
        return { code: code.trim(), quality: parseFloat(q) };
      })
      .sort((a, b) => b.quality - a.quality);
    
    // Find matching locale
    for (const lang of languages) {
      // Check exact match
      if (locales.includes(lang.code as any)) {
        return lang.code;
      }
      
      // Check language part (e.g., 'en' from 'en-US')
      const langCode = lang.code.split('-')[0];
      const matchingLocale = locales.find(locale => locale.startsWith(langCode));
      if (matchingLocale) {
        return matchingLocale;
      }
    }
  }
  
  return undefined;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!_next|api|favicon.ico|images|.*\\.).*)',
  ],
};
