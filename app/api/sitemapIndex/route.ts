import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import type { ApiResponse, ApiErrorResponse } from '@/types';
import { z } from 'zod';

// Ensure secrets are set in environment variables
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || "your-client-email-here";
const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "your-private-key-here").replace(/\n/g, "\n");

const jwtClient = new google.auth.JWT(
    clientEmail,
    undefined,
    privateKey,
    ["https://www.googleapis.com/auth/indexing"],
);

const urlSchema = z.object({ url: z.string().url('Invalid URL') });

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validation = urlSchema.safeParse(body);
        if (!validation.success) {
            const errorResponse: ApiErrorResponse = {
                error: {
                    code: 'INVALID_URL',
                    message: 'Invalid or missing url',
                    details: validation.error.flatten().fieldErrors
                },
                status: 400,
                timestamp: new Date().toISOString(),
                path: req.url,
                method: 'POST',
            };
            return NextResponse.json(errorResponse, { status: 400 });
        }
        const url = validation.data.url;
        await jwtClient.authorize();
        const accessToken = jwtClient.credentials.access_token;
        const response = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                url: url,
                type: "URL_UPDATED",
            }),
        });
        if (response.ok) {
            const successResponse: ApiResponse = {
                success: true,
                message: 'URL notification published successfully',
            };
            return NextResponse.json(successResponse, { status: 200 });
        } else {
            const errorData = await response.json().catch(() => ({}));
            const errorResponse: ApiErrorResponse = {
                error: {
                    code: 'GOOGLE_INDEXING_ERROR',
                    message: 'Failed to publish URL notification',
                    details: errorData
                },
                status: response.status,
                timestamp: new Date().toISOString(),
                path: req.url,
                method: 'POST',
            };
            return NextResponse.json(errorResponse, { status: response.status });
        }
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
            path: req.url,
            method: 'POST',
        };
        return NextResponse.json(errorResponse, { status: 500 });
    }
} 