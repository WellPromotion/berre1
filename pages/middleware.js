import { NextResponse } from "next/server";

export function middleware() {
  return new NextResponse("Site temporarily unavailable");
}