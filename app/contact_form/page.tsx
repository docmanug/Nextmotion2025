"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { countries } from "../../lib/countries";
import { FormEvent } from "react";

export default function ContactFormPage() {
	const [messages, setMessages] = useState<any>(null);
	const pathname = usePathname();
	const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		success?: boolean;
		message?: string;
	}>({});

	// Form state
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		countryCode: "+1", // Default country code
		profession: "",
		practitioners: [] as string[],
		country: "",
		interestedIn: [] as string[],
		additionalInfo: "",
	});

	useEffect(() => {
		const loadMessages = async () => {
			const msgs = await getMessages(currentLocale);
			setMessages(msgs);
		};
		loadMessages();
	}, [currentLocale]);

	const t = useTranslations(messages || {});

	if (!messages) return null;

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = e.target;

		if (checked) {
			setFormData((prev) => ({
				...prev,
				[name]: [...(prev[name as keyof typeof formData] as string[]), value],
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: (prev[name as keyof typeof formData] as string[]).filter(
					(item) => item !== value
				),
			}));
		}
	};

	const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData((prev) => ({ ...prev, countryCode: e.target.value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({});

		try {
			// Find the country name based on the selected country code
			const selectedCountry =
				countries.find((c) => c.dial_code === formData.countryCode)?.name || "";

			// Prepare data for API
			const apiData = {
				lng: currentLocale,
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				phone_country: selectedCountry,
				phone: formData.phone,
				profession: formData.profession,
				practitioners: formData.practitioners,
				country: formData.country,
				interestedIn: formData.interestedIn,
				additionalInfo: formData.additionalInfo,
			};

			const response = await fetch(
				"https://nextmotion.pythonanywhere.com/nextmotion/website/website-form",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(apiData),
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const result = await response.json();

			if (response.ok) {
				setSubmitStatus({
					success: true,
					message:
						t("contactForm.submitSuccess") || "Form submitted successfully!",
				});
				// Reset form
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					countryCode: "+1",
					profession: "",
					practitioners: [],
					country: "",
					interestedIn: [],
					additionalInfo: "",
				});
			} else {
				throw new Error(result.error || "Form submission failed");
			}
		} catch (error: unknown) {
			const errorMessage = error instanceof Error ? error.message : "An error occurred";
			setSubmitStatus({
				success: false,
				message: errorMessage || t("contactForm.submitError") || "An error occurred",
			});
			console.error("Form submission error:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className='bg-white min-h-screen'>
			<section className='pt-20 pb-8 md:pt-32 md:pb-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
					<div className='grid grid-cols-1 lg:grid-cols-[45%,55%] gap-0 items-center relative'>
						{/* Form Section */}
						<div className='bg-white p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:mr-[-120px] relative z-20'>
							<h1 className='text-2xl sm:text-[28px] font-bold text-[#081F4D] mb-6 sm:mb-8'>
								{t("contactForm.title")}
							</h1>
							<form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
									<div>
										<label className='block text-sm text-[#081F4D] mb-1.5 sm:mb-2'>
											{t("contactForm.form.firstName.label")}
											<span className='text-red-500'>*</span>
										</label>
										<input
											type='text'
											name='firstName'
											value={formData.firstName}
											onChange={handleInputChange}
											required
											className='w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base'
											placeholder={t("contactForm.form.firstName.placeholder")}
										/>
									</div>
									<div>
										<label className='block text-sm text-[#081F4D] mb-1.5 sm:mb-2'>
											{t("contactForm.form.lastName.label")}
											<span className='text-red-500'>*</span>
										</label>
										<input
											type='text'
											name='lastName'
											value={formData.lastName}
											onChange={handleInputChange}
											required
											className='w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base'
											placeholder={t("contactForm.form.lastName.placeholder")}
										/>
									</div>
								</div>

								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
									<div>
										<label className='block text-sm text-[#081F4D] mb-1.5 sm:mb-2'>
											{t("contactForm.form.email.label")}
											<span className='text-red-500'>*</span>
										</label>
										<input
											type='email'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
											required
											className='w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base'
											placeholder={t("contactForm.form.email.placeholder")}
										/>
									</div>
									<div>
										<label className='block text-sm text-[#081F4D] mb-1.5 sm:mb-2'>
											{t("contactForm.form.phone.label")}
											<span className='text-red-500'>*</span>
										</label>
										<div className='flex gap-2 flex-wrap sm:flex-nowrap'>
											<select
												className='w-[120px] px-2 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm'
												value={formData.countryCode}
												onChange={handleCountryCodeChange}
											>
												{countries.map((country) => (
													<option key={country.code} value={country.dial_code}>
														{country.name} ({country.dial_code})
													</option>
												))}
											</select>
											<input
												type='tel'
												name='phone'
												value={formData.phone}
												onChange={handleInputChange}
												required
												className='flex-1 min-w-[180px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base'
												placeholder={t("contactForm.form.phone.placeholder")}
											/>
										</div>
									</div>
								</div>

								<div>
									<label className='block text-sm text-[#081F4D] mb-2 sm:mb-3'>
										{t("contactForm.form.profession.label")}
										<span className='text-red-500'>*</span>
									</label>
									<div className='grid grid-cols-1 sm:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base'>
										{[
											"aestheticPhysician",
											"aestheticSurgeon",
											"clinicManager",
											"assistant",
											"secretary",
											"marketingSpecialist",
											"industry",
											"other",
										].map((option) => {
											const value = t(
												`contactForm.form.profession.options.${option}`
											);
											return (
												<label
													key={option}
													className='flex items-center gap-2 cursor-pointer'
												>
													<input
														type='radio'
														name='profession'
														value={value}
														checked={formData.profession === value}
														onChange={handleInputChange}
														required
														className='w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]'
													/>
													<span className='text-[#081F4D]'>{value}</span>
												</label>
											);
										})}
									</div>
								</div>

								<div>
									<label className='block text-sm text-[#081F4D] mb-2 sm:mb-3'>
										{t("contactForm.form.practitioners.label")}
									</label>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base'>
										{[
											"privatePractice",
											"smallFacility",
											"mediumFacility",
											"largeFacility",
										].map((option) => {
											const value = t(
												`contactForm.form.practitioners.options.${option}`
											);
											return (
												<label
													key={option}
													className='flex items-center gap-2 cursor-pointer'
												>
													<input
														type='checkbox'
														name='practitioners'
														value={value}
														checked={formData.practitioners.includes(value)}
														onChange={handleCheckboxChange}
														className='w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]'
													/>
													<span className='text-[#081F4D]'>{value}</span>
												</label>
											);
										})}
									</div>
								</div>

								<div>
									<label className='block text-sm text-[#081F4D] mb-1.5 sm:mb-2'>
										{t("contactForm.form.country.label")}
									</label>
									<select
										name='country'
										value={formData.country}
										onChange={handleInputChange}
										className='w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm sm:text-base'
									>
										<option value=''>
											{t("contactForm.form.country.placeholder")}
										</option>
										{countries.map((country) => (
											<option key={country.code} value={country.name}>
												{country.name}
											</option>
										))}
									</select>
								</div>

								<div>
									<label className='block text-sm text-[#081F4D] mb-2 sm:mb-3'>
										{t("contactForm.form.interestedIn.label")}
									</label>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base'>
										{[
											"photoApp",
											"consultationSoftware",
											"onlineAgenda",
											"3DAnatomyTool",
											"nextmotionRevolutionMachine",
											"mixedRealityHeadset",
											"injectionRobot",
										].map((option) => {
											const value = t(
												`contactForm.form.interestedIn.options.${option}`
											);
											return (
												<label
													key={option}
													className='flex items-center gap-2 cursor-pointer'
												>
													<input
														type='checkbox'
														name='interestedIn'
														value={value}
														checked={formData.interestedIn.includes(value)}
														onChange={handleCheckboxChange}
														className='w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]'
													/>
													<span className='text-[#081F4D]'>{value}</span>
												</label>
											);
										})}
									</div>
								</div>

								<div>
									<label className='block text-sm text-[#081F4D] mb-1.5 sm:mb-2'>
										{t("contactForm.form.additionalInfo.label")}
									</label>
									<textarea
										name='additionalInfo'
										value={formData.additionalInfo}
										onChange={handleInputChange}
										className='w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none resize-none h-20 sm:h-24 text-[#081F4D] text-sm sm:text-base'
										placeholder={t(
											"contactForm.form.additionalInfo.placeholder"
										)}
									/>
								</div>

								{submitStatus.message && (
									<div
										className={`my-4 p-4 rounded-lg ${
											submitStatus.success
												? "bg-green-100 text-green-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{submitStatus.message}
									</div>
								)}

								<div className='flex justify-center pt-2'>
									<button
										type='submit'
										disabled={isSubmitting}
										className='w-full sm:w-[200px] bg-[#1650EF] text-white hover:bg-[#1345D1] py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors disabled:bg-[#1650EF]/70'
									>
										{isSubmitting
											? t("contactForm.form.submitting") || "Submitting..."
											: t("contactForm.form.submitButton")}
									</button>
								</div>
							</form>
						</div>

						{/* Image Section */}
						<div className='hidden lg:block relative z-10'>
							<div className='relative max-w-[420px] drop-shadow-2xl lg:ml-[120px]'>
								<div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1650EF]/20 to-transparent shadow-[0_8px_30px_rgb(0,0,0,0.12)]' />
								<OptimizedImage
									src='/contact_form/contact_form_1.webp'
									alt='Contact Form'
									width={420}
									height={525}
									className='rounded-2xl object-contain relative z-10 shadow-[0_20px_50px_rgba(8,31,77,0.2)]'
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
