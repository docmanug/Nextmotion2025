import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const per_page = parseInt(searchParams.get('per_page') || '10', 10);
        const fields = searchParams.get('fields')?.split(',');

        if (isNaN(page) || isNaN(per_page) || page < 1 || per_page < 1 || per_page > 100) {
            return NextResponse.json({ error: 'Invalid pagination parameters' }, { status: 400 });
        }

        const apiUrl = `https://blog.nextmotion.net/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${per_page}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch posts' }, { status: response.status });
        }

        let data = await response.json();

        if (fields && Array.isArray(data)) {
            data = data.map((item: any) => {
                const filtered: any = {};
                fields.forEach(field => {
                    if (item[field] !== undefined) filtered[field] = item[field];
                });
                return filtered;
            });
        }

        return NextResponse.json(data, {
            status: 200,
            headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate' }
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}