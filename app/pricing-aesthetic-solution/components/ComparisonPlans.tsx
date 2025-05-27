"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";

export default function ComparisonPlans() {
	const [messages, setMessages] = useState<any>(null);
	const [contactFormLink, setContactFormLink] = useState("/contact_form");

	useEffect(() => {
		setContactFormLink(
			window.location.pathname.startsWith("/fr")
				? "/fr/formulaire_contact"
				: "/contact_form"
		);
	}, []);
	const pathname = usePathname();
	const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

	useEffect(() => {
		const loadMessages = async () => {
			const msgs = await getMessages(currentLocale);
			setMessages(msgs);
		};
		loadMessages();
	}, [currentLocale]);

	const t = useTranslations(messages);

	if (!messages) return null;

	const plans = [
		{
			type: t("pricing.comparisonPlans.plans.starter.type"),
			title: t("pricing.comparisonPlans.plans.starter.title"),
			subtitle: t("pricing.comparisonPlans.plans.starter.subtitle"),
			price: t("pricing.comparisonPlans.plans.starter.price"),
			period: t("pricing.comparisonPlans.plans.starter.period"),
			note: t("pricing.comparisonPlans.plans.starter.note"),
			features: t("pricing.comparisonPlans.plans.starter.features"),
			cta: t("pricing.comparisonPlans.plans.starter.cta"),
		},
		{
			type: t("pricing.comparisonPlans.plans.essential.type"),
			title: t("pricing.comparisonPlans.plans.essential.title"),
			subtitle: t("pricing.comparisonPlans.plans.essential.subtitle"),
			price: t("pricing.comparisonPlans.plans.essential.price"),
			period: t("pricing.comparisonPlans.plans.essential.period"),
			note: t("pricing.comparisonPlans.plans.essential.note"),
			features: t("pricing.comparisonPlans.plans.essential.features"),
			cta: t("pricing.comparisonPlans.plans.essential.cta"),
		},
		{
			type: t("pricing.comparisonPlans.plans.premium.type"),
			title: t("pricing.comparisonPlans.plans.premium.title"),
			subtitle: t("pricing.comparisonPlans.plans.premium.subtitle"),
			price: t("pricing.comparisonPlans.plans.premium.price"),
			period: t("pricing.comparisonPlans.plans.premium.period"),
			note: t("pricing.comparisonPlans.plans.premium.note"),
			features: t("pricing.comparisonPlans.plans.premium.features"),
			cta: t("pricing.comparisonPlans.plans.premium.cta"),
		},
		{
			type: t("pricing.comparisonPlans.plans.enterprise.type"),
			title: t("pricing.comparisonPlans.plans.enterprise.title"),
			subtitle: t("pricing.comparisonPlans.plans.enterprise.subtitle"),
			price: t("pricing.comparisonPlans.plans.enterprise.price"),
			period: t("pricing.comparisonPlans.plans.enterprise.period"),
			note: t("pricing.comparisonPlans.plans.enterprise.note"),
			features: t("pricing.comparisonPlans.plans.enterprise.features"),
			cta: t("pricing.comparisonPlans.plans.enterprise.cta"),
		},
	];

	const handleDemoClick = () => {
		window.open(
			"https://account.nextmotion.net/auth/register?app_platform=web&next=https://app.nextmotion.net",
			"_blank",
			"noopener,noreferrer"
		);
	};

	return (
		<>
			<section className='py-24 bg-[#F8FAFF]'>
				<div className='max-w-7xl mx-auto px-4'>
					{/* <h2 className="text-4xl font-bold text-center text-[#284fe6] mb-16">
          {t("pricing.comparisonPlans.title")}
        </h2> */}

					<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
						{plans.map((plan, index) => (
							<div
								key={index}
								className={`bg-white rounded-3xl p-8 ${
									index === 1 ? "ring-2 ring-[#284fe6]" : ""
								}`}
							>
								<div className='space-y-6'>
									<div>
										<div className='text-[10px] text-[#081F4D] tracking-wider uppercase'>
											{plan.type}
										</div>
										<h3 className='text-2xl font-bold text-[#081F4D]'>
											{plan.title}
										</h3>
										<p className='text-sm text-[#081F4D] mt-2'>
											{plan.subtitle}
										</p>
									</div>

									<div>
										<div className='flex items-baseline'>
											<span className='text-3xl font-bold text-[#081F4D]'>
												{plan.price} {plan.period}
											</span>
										</div>
										<div className='text-sm text-[#081F4D80] mt-1'>
											{plan.note}
										</div>
									</div>

									<Button
										className={`w-full py-2 rounded-lg font-semibold ${
											index === 1
												? "bg-[#284fe6] text-white hover:bg-blue-600"
												: "bg-white text-[#284fe6] border-2 border-[#284fe6] hover:bg-blue-50"
										}`}
										onClick={handleDemoClick}
									>
										{plan.cta}
									</Button>

									<div className='space-y-3 mt-8'>
										{plan?.features?.map(
											(feature: string, featureIndex: number) => (
												<div
													key={featureIndex}
													className='flex items-start gap-3'
												>
													<svg
														viewBox='0 0 24 24'
														className='w-5 h-5 text-green-500 flex-shrink-0'
														fill='currentColor'
													>
														<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
													</svg>
													<span className='text-sm text-[#081F4D] leading-tight pr-9'>
														{feature}
													</span>
												</div>
											)
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<div className='mt-12'>
				<div className='text-center mb-10'>
					<h2 className='text-4xl font-bold text-center mb-6'>
						{t("pricing.info.engagement.title")}
					</h2>
					<p>{t("pricing.info.engagement.desc")}</p>
				</div>
				<div className='text-center'>
					<h2 className='text-4xl font-bold text-center mb-6'>
						{t("pricing.info.offers.title")}
					</h2>
					<p>{t("pricing.info.offers.desc1")}</p>
					<p>{t("pricing.info.offers.desc2")}</p>
					<p>{t("pricing.info.offers.desc3")}</p>
				</div>
			</div>
		</>
	);
}
