import { NextRequest, NextResponse } from 'next/server';
import { submitUrlToGoogleIndex } from '@/utils/googleIndexing';

export async function POST(request: NextRequest) {
  try {
    // Check for authorization
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Extract token
    const token = authHeader.split(' ')[1];
    
    // Simple token validation - in production, use a more secure method
    if (token !== process.env.API_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { url, type = 'URL_UPDATED' } = body;

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Validate type
    if (type !== 'URL_UPDATED' && type !== 'URL_DELETED') {
      return NextResponse.json(
        { error: 'Type must be either URL_UPDATED or URL_DELETED' },
        { status: 400 }
      );
    }

    // Submit URL to Google Indexing API
    const result = await submitUrlToGoogleIndex(url, type as 'URL_UPDATED' | 'URL_DELETED');

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error in Google Indexing API route:', error);
    return NextResponse.json(
      { error: 'Failed to submit URL to Google Indexing API', details: (error as Error).message },
      { status: 500 }
    );
  }
}