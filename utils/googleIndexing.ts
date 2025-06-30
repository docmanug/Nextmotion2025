import { google } from 'googleapis';

/**
 * Submits a URL to Google's Indexing API
 * @param url The URL to submit for indexing
 * @param type The type of submission ('URL_UPDATED' or 'URL_DELETED')
 * @returns Promise with the result of the indexing request
 */
export async function submitUrlToGoogleIndex(
  url: string,
  type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED'
): Promise<any> {
  try {
    // Get credentials from environment variables
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

    if (!privateKey || !clientEmail) {
      throw new Error('Google API credentials not found in environment variables');
    }

    // Create JWT client
    const jwtClient = new google.auth.JWT(
      clientEmail,
      undefined,
      privateKey,
      ['https://www.googleapis.com/auth/indexing'],
      undefined
    );

    // Authorize the client
    await jwtClient.authorize();

    // Initialize the Indexing API
    const indexing = google.indexing({
      version: 'v3',
      auth: jwtClient
    });

    // Submit URL for indexing
    const result = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: type
      }
    });

    return result.data;
  } catch (error) {
    console.error('Error submitting URL to Google Indexing API:', error);
    throw error;
  }
}