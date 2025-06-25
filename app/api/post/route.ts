import { NextRequest, NextResponse } from 'next/server';
import type { WordPressPost, ApiErrorResponse } from '@/types';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');
        if (!slug) {
            const errorResponse: ApiErrorResponse = {
                error: {
                    code: 'MISSING_SLUG',
                    message: 'Missing slug parameter',
                },
                status: 400,
                timestamp: new Date().toISOString(),
                path: request.url,
                method: 'GET',
            };
            return NextResponse.json(errorResponse, { status: 400 });
        }
        const response = await fetch(`https://blog.nextmotion.net/wp-json/wp/v2/posts?_embed&slug=${encodeURIComponent(slug)}&_embed`);
        if (!response.ok) {
            const errorResponse: ApiErrorResponse = {
                error: {
                    code: 'WORDPRESS_API_ERROR',
                    message: 'Failed to fetch post',
                    details: { status: response.status, statusText: response.statusText }
                },
                status: response.status,
                timestamp: new Date().toISOString(),
                path: request.url,
                method: 'GET',
            };
            return NextResponse.json(errorResponse, { status: response.status });
        }
        const data: WordPressPost[] = await response.json();
        const post = data.length > 0
            ? {
                ...data[0],
                featuredImage: data[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
                metaTitle: (data[0] as any).meta?.meta_title || data[0].title.rendered,
                metaDescription: (data[0] as any).meta?.meta_description || data[0].excerpt.rendered.replace(/<[^>]*>/g, ''),
            }
            : null;
        return NextResponse.json(post, {
            status: 200,
            headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate' }
        });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        const errorResponse: ApiErrorResponse = {
            error: {
                code: 'INTERNAL_SERVER_ERROR',
                message: errorMessage,
                details: { timestamp: new Date().toISOString() }
            },
            status: 500,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: 'GET',
        };
        return NextResponse.json(errorResponse, { status: 500 });
    }
}