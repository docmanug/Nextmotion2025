import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const response = await fetch(`https://blog.nextmotion.net/wp-json/wp/v2/posts?_embed&slug=${slug}&_embed`);
    const data = await response.json();
    const post = data.length > 0
        ? {
            ...data[0],
            featuredImage: data[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
            metaTitle: data[0].meta?.meta_title || data[0].title.rendered,
            metaDescription: data[0].meta?.meta_description || data[0].excerpt.rendered.replace(/<[^>]*>/g, ''),
        }
        : null;
    return NextResponse.json(post);
}