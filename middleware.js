import { NextResponse } from "next/server";

export function middleware(request) {
  // Allow Vercel assets and API routes to work
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Return a simple maintenance page
  return new NextResponse(
    `
      <html>
        <head>
          <title>Stranica trenutno nedostupna</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-family: sans-serif;
              background: #f5f5f5;
              color: #333;
            }
            h1 { font-size: 2rem; }
          </style>
        </head>
        <body>
          <h1>Stranica trenutno nedostupna</h1>
        </body>
      </html>
    `,
    { status: 503, headers: { "Content-Type": "text/html" } }
  );
}

export const config = {
  matcher: "/((?!_next|api).*)", // apply to all pages except _next/ and API
};
