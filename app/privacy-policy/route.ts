import { NextResponse } from "next/server";

export function GET(request: Request) {
  const url = new URL("/privacy-policy.pdf", request.url);
  return NextResponse.redirect(url);
}


