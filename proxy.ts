import { NextResponse, type NextRequest } from "next/server";

// Page addresses are case-sensitive, and phones often capitalise the first
// letter typed (e.g. "wadeeharvest.ca/Csa"). Send any capitalisation of these
// pages to the lowercase address instead of showing a 404.
const PAGES = new Set(["csa", "shop", "about", "contact", "privacy", "cart", "account"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase().replace(/\/+$/, "");
  if (lower !== pathname && PAGES.has(lower.slice(1))) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

// Only runs on single-segment page addresses, never on images, scripts or
// product pages.
export const config = {
  matcher: "/:page([^/.]+)",
};
