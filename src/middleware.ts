import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files, API routes, admin, and special paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/icons") ||
    pathname.includes(".") ||
    pathname === "/manifest.json" ||
    pathname === "/favicon.png" ||
    pathname === "/sw.js"
  ) {
    return NextResponse.next();
  }

  // Check if pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect locale from cookie or Accept-Language header
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLanguage = request.headers.get("Accept-Language");

  let detectedLocale = defaultLocale;

  if (cookieLocale && isValidLocale(cookieLocale)) {
    detectedLocale = cookieLocale;
  } else if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().slice(0, 2))
      .find((lang) => isValidLocale(lang));

    if (preferredLocale && isValidLocale(preferredLocale)) {
      detectedLocale = preferredLocale;
    }
  }

  // Map old Turkish URLs to new structure
  const urlMappings: Record<string, string> = {
    "/urunler": "/products",
    "/hakkimizda": "/about",
    "/iletisim": "/contact",
    "/siparis": "/order",
  };

  let newPathname = pathname;
  for (const [oldPath, newPath] of Object.entries(urlMappings)) {
    if (pathname === oldPath || pathname.startsWith(`${oldPath}/`)) {
      newPathname = pathname.replace(oldPath, newPath);
      break;
    }
  }

  // Redirect to locale-prefixed URL
  return NextResponse.redirect(
    new URL(`/${detectedLocale}${newPathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Match all pathnames except for static files
    "/((?!_next|api|admin|images|icons|.*\\..*).*)",
    "/",
  ],
};
