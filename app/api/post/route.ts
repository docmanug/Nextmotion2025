import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');
        if (!slug) {
            return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
        }
        const response = await fetch(`https://blog.nextmotion.net/wp-json/wp/v2/posts?_embed&slug=${encodeURIComponent(slug)}&_embed`);
        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch post' }, { status: response.status });
        }
        const data = await response.json();
        const post = data.length > 0
            ? {
                ...data[0],
                featuredImage: data[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
                metaTitle: data[0].meta?.meta_title || data[0].title.rendered,
                metaDescription: data[0].meta?.meta_description || data[0].excerpt.rendered.replace(/<[^>]*>/g, ''),
            }
            : null;
        return NextResponse.json(post, {
            status: 200,
            headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate' }
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}