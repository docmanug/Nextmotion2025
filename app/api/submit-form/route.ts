import { NextRequest, NextResponse } from "next/server";
import type { ContactFormValidation, FormSubmissionResponse, ApiErrorResponse } from '@/types';
import { contactFormSchema } from '@/types/forms';
import { validateForm } from '@/types/validation';
import { countries } from '@/lib/countries';

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

		// Find the country name for phone_country
		const phone_country =
			countries.find(
				(c) =>
					c.dial_code === formData.countryCode ||
					c.name === formData.country
			)?.name ||
			formData.country ||
			"";

		const apiData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			phone_country: phone_country,
			phone: formData.phone,
			profession: formData.profession,
			practitioners: formData.practitioners,
			country: formData.country,
			interestedIn: formData.interestedIn,
			additionalInfo: formData.additionalInfo,
		};

		const response = await fetch(
			"https://nextmotion.pythonanywhere.com/nextmotion/website/website-form/v2",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(apiData),
			}
		);

		const result = await response.json();

		if (response.ok && result.status === "success") {
			return NextResponse.json({
				success: true,
				message: "Form submitted successfully",
				data: result,
			});
		} else {
			return NextResponse.json({
				success: false,
				message: result.errors || result.message || "An error occurred",
				data: result,
			}, { status: response.status });
		}
	} catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
		return NextResponse.json({
			error: {
				code: "INTERNAL_SERVER_ERROR",
				message: errorMessage,
				details: { timestamp: new Date().toISOString() },
			},
			status: 500,
			timestamp: new Date().toISOString(),
			path: req.url,
			method: "POST",
		}, { status: 500 });
	}
}
