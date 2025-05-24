import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const response = await fetch('https://blog.nextmotion.net/wp-json/wp/v2/categories');
    const data = await response.json();
    return NextResponse.json(data);
}