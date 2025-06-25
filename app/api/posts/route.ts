import { NextRequest, NextResponse } from 'next/server';
import type { 
  PostsApiRequest, 
  PostsApiResponse, 
  WordPressPost, 
  ApiErrorResponse,
  Pagination 
} from '@/types';
import { paginationSchema, validateForm } from '@/types/validation';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        
        // Parse and validate query parameters
        const page = parseInt(searchParams.get('page') || '1', 10) || 1;
        const per_page = parseInt(searchParams.get('per_page') || '10', 10) || 10;
        const fields = searchParams.get('fields')?.split(',');
        const category = searchParams.get('category') || undefined;
        const search = searchParams.get('search') || undefined;
        const orderby = (searchParams.get('orderby') as PostsApiRequest['orderby']) || 'date';
        const order = (searchParams.get('order') as PostsApiRequest['order']) || 'desc';

        // Validate pagination parameters
        const paginationValidation = validateForm(paginationSchema, {
            page,
            perPage: per_page
        });

        if (!paginationValidation.isValid) {
            const errorResponse: ApiErrorResponse = {
                error: {
                    code: 'INVALID_PAGINATION',
                    message: 'Invalid pagination parameters',
                    details: paginationValidation.errors
                },
                status: 400,
                timestamp: new Date().toISOString(),
                path: request.url,
                method: 'GET'
            };
            return NextResponse.json(errorResponse, { status: 400 });
        }

        // Build WordPress API URL
        const apiUrl = new URL('https://blog.nextmotion.net/wp-json/wp/v2/posts');
        apiUrl.searchParams.set('_embed', 'true');
        apiUrl.searchParams.set('page', page.toString());
        apiUrl.searchParams.set('per_page', per_page.toString());
        
        if (category) {
            apiUrl.searchParams.set('categories', category);
        }
        
        if (search) {
            apiUrl.searchParams.set('search', search);
        }
        
        if (orderby) {
            apiUrl.searchParams.set('orderby', orderby);
        }
        
        if (order) {
            apiUrl.searchParams.set('order', order);
        }

        const response = await fetch(apiUrl.toString());

        if (!response.ok) {
            const errorResponse: ApiErrorResponse = {
                error: {
                    code: 'WORDPRESS_API_ERROR',
                    message: 'Failed to fetch posts from WordPress',
                    details: { status: response.status, statusText: response.statusText }
                },
                status: response.status,
                timestamp: new Date().toISOString(),
                path: request.url,
                method: 'GET'
            };
            return NextResponse.json(errorResponse, { status: response.status });
        }

        let data: WordPressPost[] = await response.json();

        // Filter fields if requested
        if (fields && Array.isArray(data)) {
            data = data.map((item: WordPressPost) => {
                const filtered: Partial<WordPressPost> = {};
                fields.forEach(field => {
                    if (item[field as keyof WordPressPost] !== undefined) {
                        (filtered as any)[field] = item[field as keyof WordPressPost];
                    }
                });
                return filtered as WordPressPost;
            });
        }

        // Calculate pagination info
        const total = parseInt(response.headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0', 10);
        
        const pagination: Pagination = {
            page,
            perPage: per_page,
            total: total || 0,
            totalPages: totalPages || 0,
            hasNext: page < (totalPages || 0),
            hasPrev: page > 1
        };

        const successResponse = {
            success: true,
            data,
            pagination,
            message: 'Posts fetched successfully'
        };

        return NextResponse.json(successResponse, {
            status: 200,
            headers: { 
                'Cache-Control': 's-maxage=60, stale-while-revalidate',
                'X-Total-Count': total.toString(),
                'X-Total-Pages': totalPages.toString()
            }
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
            method: 'GET'
        };
        
        return NextResponse.json(errorResponse, { status: 500 });
    }
}