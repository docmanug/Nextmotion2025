import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const response = await fetch('https://blog.nextmotion.net/wp-json/wp/v2/categories');
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate' }
    });
}