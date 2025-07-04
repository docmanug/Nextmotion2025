import { NextRequest, NextResponse } from "next/server";
import type { ContactFormValidation, FormSubmissionResponse, ApiErrorResponse } from '@/types';
import { contactFormSchema } from '@/types/forms';
import { validateForm } from '@/types/validation';

function isValidEmail(email: string) {
	return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export async function POST(req: NextRequest) {
	try {
		const formData: ContactFormValidation = await req.json();
		// Validate input using Zod schema
		const validation = validateForm(contactFormSchema, formData);
		if (!validation.isValid) {
			const errorResponse: ApiErrorResponse = {
				error: {
					code: 'INVALID_FORM',
					message: 'Invalid form data',
					details: validation.errors
				},
				status: 400,
				timestamp: new Date().toISOString(),
				path: req.url,
				method: 'POST',
			};
			return NextResponse.json(errorResponse, { status: 400 });
		}
		// TODO: Add rate limiting to prevent spam
		const mondayFormId = "73df764e54603807815f0f0c516bfa65";

		// Create a URLSearchParams object for form data submission
		const formParams = new URLSearchParams();
		formParams.append("email", formData.email.trim());
		formParams.append("name[first]", formData.firstName.trim());
		formParams.append("name[last]", formData.lastName.trim());

		// Find the country short name (ISO 2-letter code) for the phone field
		let countryShortName = '';
		if (formData.countryCode) {
			const countryObj = require('@/lib/countries').countries.find(
				(c: any) => c.dial_code === formData.countryCode
			);
			countryShortName = countryObj ? countryObj.code : '';
		}
		const phoneValue = JSON.stringify({
			phone: (formData.phone || '').trim(),
			countryShortName: countryShortName
		});
		formParams.append("phone", phoneValue);
		formParams.append("status1", (formData.profession || '').trim());
		formParams.append("status8", (formData.practitioners || []).join(', '));
		formParams.append("status2", (formData.country || '').trim());
		formParams.append("status6", (formData.interestedIn || []).join(', '));
		formParams.append("longText", (formData.additionalInfo || '').trim());

		console.log("Submitting to Monday.com with form data");

		// Try form submission with application/x-www-form-urlencoded
		const response = await fetch(
			`https://forms.monday.com/forms/submit/${mondayFormId}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: formParams.toString(),
			}
		);

		if (!response.ok) {
			const errorText = await response.text();
			const errorResponse: ApiErrorResponse = {
				error: {
					code: 'MONDAY_API_ERROR',
					message: `Monday.com API error: ${response.status}`,
					details: { errorText }
				},
				status: response.status,
				timestamp: new Date().toISOString(),
				path: req.url,
				method: 'POST',
			};
			return NextResponse.json(errorResponse, { status: response.status });
		}

		// Handle the response carefully as it might not be JSON
		const contentType = response.headers.get("content-type");
		let data;
		if (contentType && contentType.includes("application/json")) {
			data = await response.json();
		} else {
			// If not JSON, consider it a success if the status is OK
			const responseText = await response.text();
			console.log("Monday.com non-JSON response:", responseText);
			data = { message: "Form submitted successfully" };
		}

		const successResponse: FormSubmissionResponse = {
			success: true,
			message: 'Form submitted successfully',
			data
		};
		return NextResponse.json(successResponse);
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
