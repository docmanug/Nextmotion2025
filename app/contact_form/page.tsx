'use client';

import { useEffect, useState } from 'react';
import { useTranslations, getMessages } from '@/utils/i18n';
import { usePathname } from 'next/navigation';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { countries } from '@/lib/countries';
import { FormEvent } from 'react';
import { SoftwareApplicationSchema } from '../components/shared/SoftwareApplicationSchema';
import { OrganizationSchema } from '../components/shared/OrganizationSchema';

export default function ContactFormPage() {
	const [messages, setMessages] = useState<any>(null);
	const pathname = usePathname();
	const currentLocale = pathname?.startsWith("/fr") ? "fr" : "en";
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		success?: boolean;
		message?: string;
	}>({});

	// Form state
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		countryCode: '+1', // Default country code
		profession: '',
		practitioners: '',
		country: '',
		primaryObjectives: [] as string[],
		additionalInfo: '',
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

		const maxRetries = 3;
		let attempt = 0;
		let lastError: any = null;

		// Find the country name based on the selected country code
		const selectedCountry =
			countries.find((c) => c.dial_code === formData.countryCode)?.name || '';

		// Map practitioners selection to array format for API compatibility
		const practitionersArray = formData.practitioners
			? [formData.practitioners]
			: [];

		// Prepare data for API
		const apiData = {
			lng: currentLocale,
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			phone_country: selectedCountry,
			phone: formData.phone,
			profession: formData.profession,
			practitioners: practitionersArray,
			country: formData.country,
			interestedIn: formData.primaryObjectives,
			primaryGoal: formData.primaryObjectives, // Map primaryObjectives to both interestedIn and primaryGoal
			additionalInfo: formData.additionalInfo,
		};

		while (attempt < maxRetries) {
			try {
				const response = await fetch(
					'https://nextmotion.pythonanywhere.com/nextmotion/website/website-form/v2',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
						},
						body: JSON.stringify(apiData),
					}
				);

				const result = await response.json();

				if (response.ok && result.status === 'success') {
					setSubmitStatus({
						success: true,
						message:
							t('contactForm.submitSuccess') || 'Form submitted successfully!',
					});
					// Reset form
					setFormData({
						firstName: '',
						lastName: '',
						email: '',
						phone: '',
						countryCode: '+1',
						profession: '',
						practitioners: '',
						country: '',
						primaryObjectives: [],
						additionalInfo: '',
					});
					setIsSubmitting(false);
					return;
				} else if (response.status === 500) {
					throw new Error(result.message || 'Internal Server Error');
				} else {
					setSubmitStatus({
						success: false,
						message: result.errors || result.message || t('contactForm.submitError') || 'An error occurred',
					});
					setIsSubmitting(false);
					return;
				}
			} catch (error: unknown) {
				lastError = error;
				if (attempt < maxRetries - 1) {
					// Exponential backoff: 500ms, 1000ms, 2000ms
					await new Promise((resolve) => setTimeout(resolve, 500 * Math.pow(2, attempt)));
					attempt++;
				} else {
					const errorMessage =
						error instanceof Error ? error.message : 'An error occurred';
					setSubmitStatus({
						success: false,
						message:
							errorMessage || t('contactForm.submitError') || 'An error occurred',
					});
					console.error('Form submission error:', error);
					setIsSubmitting(false);
					return;
				}
			}
		}
	};

	return (
		<main className="bg-white min-h-screen">
			<section className="pt-20 pb-8 md:pt-32 md:pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
					<div className="grid grid-cols-1 lg:grid-cols-[45%,55%] gap-0 items-center relative">
						{/* Form Section */}
						<div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:mr-[-120px] relative z-20">
							<h1 className="text-2xl sm:text-[28px] font-bold text-[#081F4D] mb-3 sm:mb-4">
								{t('contactForm.title')}
							</h1>
							<p className="text-gray-600 mb-6">
								{t('contactForm.tagline') || "Dites-nous où vous voulez aller, on vous montre comment y arriver."}
							</p>
							<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
									<div>
										<label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
											{t('contactForm.form.firstName.label')}
											<span className="text-red-500">*</span>
										</label>
										<input
											type="text"
											name="firstName"
											value={formData.firstName}
											onChange={handleInputChange}
											required
											className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
											placeholder={t('contactForm.form.firstName.placeholder')}
										/>
									</div>
									<div>
										<label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
											{t('contactForm.form.lastName.label')}
											<span className="text-red-500">*</span>
										</label>
										<input
											type="text"
											name="lastName"
											value={formData.lastName}
											onChange={handleInputChange}
											required
											className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
											placeholder={t('contactForm.form.lastName.placeholder')}
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
									<div>
										<label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
											{t('contactForm.form.email.label')}
											<span className="text-red-500">*</span>
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
											placeholder={t('contactForm.form.email.placeholder')}
										/>
									</div>
									<div>
										<label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
											{t('contactForm.form.phone.label')}
											<span className="text-red-500">*</span>
										</label>
										<div className="flex gap-2 flex-wrap sm:flex-nowrap">
											<select
												className="px-2 py-2 sm:py-2.5 w-full rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm"
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
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												required
												className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 w-full rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
												placeholder={t('contactForm.form.phone.placeholder')}
											/>
										</div>
									</div>
								</div>

								<div>
									<label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
										{t('contactForm.form.profession.newLabel') || "Quelle est votre profession ?"}
										<span className="text-red-500">*</span>
									</label>
									<select
										name="profession"
										value={formData.profession}
										onChange={handleInputChange}
										required
										className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm sm:text-base"
									>
										<option value="">{t('contactForm.form.profession.placeholder')}</option>
										<option value="Médecin">{t('contactForm.form.profession.options.doctor') || "Médecin"}</option>
										<option value="Assistant(e)">{t('contactForm.form.profession.options.assistant') || "Assistant(e)"}</option>
										<option value="Manager">{t('contactForm.form.profession.options.manager') || "Manager"}</option>
										<option value="Gérant multi-sites">{t('contactForm.form.profession.options.multiSiteManager') || "Gérant multi-sites"}</option>
										<option value="Autre">{t('contactForm.form.profession.options.other') || "Autre"}</option>
									</select>
								</div>

								<div>
									<label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
										{t('contactForm.form.practitioners.newLabel') || "Combien de praticiens travaillent dans votre structure ?"}
									</label>
									<select
										name="practitioners"
										value={formData.practitioners}
										onChange={handleInputChange}
										className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm sm:text-base"
									>
										<option value="">{t('contactForm.form.practitioners.placeholder') || "Sélectionnez une option"}</option>
										<option value="1">1</option>
										<option value="2-3">2 to 3</option>
										<option value="4-6">4 to 6</option>
										<option value="7-10">7 to 10</option>
										<option value="+10">+10</option>
									</select>
								</div>

								<div>
									<label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
										{t('contactForm.form.country.label')}
									</label>
									<select
										name="country"
										value={formData.country}
										onChange={handleInputChange}
										className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm sm:text-base"
									>
										<option value="">
											{t('contactForm.form.country.placeholder')}
										</option>
										{countries.map((country) => (
											<option key={country.code} value={country.name}>
												{country.name}
											</option>
										))}
									</select>
								</div>

								<div>
									<label className="block text-sm text-[#081F4D] mb-2 sm:mb-3">
										{t('contactForm.form.objectives.label') || "Quel est votre objectif prioritaire ?"}
									</label>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
										{[
											{ value: 'optimize-profitability', label: t('contactForm.form.objectives.options.profitability') || "Optimiser la rentabilité de mon activité" },
											{ value: 'attract-patients', label: t('contactForm.form.objectives.options.patients') || "Attirer plus de patients" },
											{ value: 'save-time', label: t('contactForm.form.objectives.options.time') || "Gagner du temps sur la gestion administrative" },
											{ value: 'digitalize', label: t('contactForm.form.objectives.options.digitalize') || "Digitaliser / automatiser ma pratique" },
											{ value: 'ai-discovery', label: t('contactForm.form.objectives.options.ai') || "Découvrir les apports de l'intelligence artificielle" }
										].map((option) => (
											<div
												key={option.value}
												className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors ${formData.primaryObjectives.includes(option.value)
														? 'border-[#1650EF] bg-blue-50'
														: 'border-gray-200 hover:border-gray-300'
													}`}
												onClick={() => {
													const isSelected = formData.primaryObjectives.includes(option.value);
													setFormData(prev => ({
														...prev,
														primaryObjectives: isSelected
															? prev.primaryObjectives.filter(item => item !== option.value)
															: [...prev.primaryObjectives, option.value]
													}));
												}}
											>
												<input
													type="checkbox"
													name="primaryObjectives"
													value={option.value}
													checked={formData.primaryObjectives.includes(option.value)}
													onChange={handleCheckboxChange}
													className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
												/>
												<span className="text-[#081F4D] text-sm">{option.label}</span>
											</div>
										))}
									</div>
								</div>

								<div>
									<label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
										{t('contactForm.form.additionalInfo.label')}
									</label>
									<textarea
										name="additionalInfo"
										value={formData.additionalInfo}
										onChange={handleInputChange}
										className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none resize-none h-20 sm:h-24 text-[#081F4D] text-sm sm:text-base"
										placeholder={t(
											'contactForm.form.additionalInfo.placeholder'
										)}
									/>
								</div>

								{submitStatus.message && (
									<div
										className={`my-4 p-4 rounded-lg ${submitStatus.success
												? 'bg-green-100 text-green-800'
												: 'bg-red-100 text-red-800'
											}`}
									>
										{submitStatus.message}
									</div>
								)}

								<div className="flex justify-center pt-2">
									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full sm:w-[200px] bg-[#1650EF] text-white hover:bg-[#1345D1] py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors disabled:bg-[#1650EF]/70"
									>
										{isSubmitting
											? t('contactForm.form.submitting') || 'Submitting...'
											: t('contactForm.form.submitButton')}
									</button>
								</div>
							</form>
						</div>

						{/* Image Section */}
						<div className="hidden lg:block relative z-10">
							<div className="relative max-w-[420px] drop-shadow-2xl lg:ml-[120px]">
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1650EF]/20 to-transparent shadow-[0_8px_30px_rgb(0,0,0,0.12)]" />
								<OptimizedImage
									src="/contact_form/contact_form_1.webp"
									alt={t('contactForm.imageAlt') || "Contact Form"}
									width={420}
									height={525}
									className="rounded-2xl object-contain relative z-10 shadow-[0_20px_50px_rgba(8,31,77,0.2)]"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<SoftwareApplicationSchema />
			<OrganizationSchema />
		</main>
	);
}