import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
	return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export async function POST(req: NextRequest) {
	try {
		const formData = await req.json();
		// Basic input validation
		if (!formData.email || !isValidEmail(formData.email)) {
			return NextResponse.json({ success: false, error: 'Invalid or missing email' }, { status: 400 });
		}
		if (!formData.firstName || !formData.lastName) {
			return NextResponse.json({ success: false, error: 'Missing name fields' }, { status: 400 });
		}
		// TODO: Add rate limiting to prevent spam
		const mondayFormId = "73df764e54603807815f0f0c516bfa65";

		// Create a URLSearchParams object for form data submission
		const formParams = new URLSearchParams();
		formParams.append("email", formData.email.trim());
		formParams.append("name[first]", formData.firstName.trim());
		formParams.append("name[last]", formData.lastName.trim());
		formParams.append("phone", (formData.phone || '').trim());
		formParams.append("status1", (formData.profession || '').trim());
		formParams.append("status8", (formData.practitioners || '').trim());
		formParams.append("status2", (formData.country || '').trim());
		formParams.append("status6", (formData.interestedIn || '').trim());
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

		// Check if the response is OK (status in the range 200-299)
		if (!response.ok) {
			const errorText = await response.text();
			console.error("Monday.com error response:", errorText);
			throw new Error(
				`Monday.com API error: ${response.status} - Try contacting us directly at contact@nextmotion.net`
			);
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

		return NextResponse.json({ success: true, data });
	} catch (error: any) {
		console.error("Form submission error:", error);
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
}
