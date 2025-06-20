import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Ensure secrets are set in environment variables
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || "your-client-email-here";
const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "your-private-key-here").replace(/\\n/g, "\n");

const jwtClient = new google.auth.JWT(
    clientEmail,
    undefined,
    privateKey,
    ["https://www.googleapis.com/auth/indexing"],
);

function isValidUrl(url: string) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const url = body.url;
        if (!url || !isValidUrl(url)) {
            return NextResponse.json({ success: false, error: 'Invalid or missing url' }, { status: 400 });
        }
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
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            const errorData = await response.json().catch(() => ({}));
            return NextResponse.json({ success: false, error: errorData }, { status: response.status });
        }
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error?.toString() }, { status: 500 });
    }
} 