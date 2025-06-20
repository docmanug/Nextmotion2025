import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const response = await fetch('https://blog.nextmotion.net/wp-json/wp/v2/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        return NextResponse.json(data, {
            status: 200,
            headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate' }
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}