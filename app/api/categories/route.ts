import { NextRequest, NextResponse } from "next/server";
import type { Category, ApiErrorResponse } from '@/types';

export async function GET(request: NextRequest) {
    try {
        const response = await fetch('https://blog.nextmotion.net/wp-json/wp/v2/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data: Category[] = await response.json();
        return NextResponse.json(data, {
            status: 200,
            headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate' }
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