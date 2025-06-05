// "use client";

import Hero from "../../pricing-aesthetic-solution/components/Hero";
import PricingCards from "../../pricing-aesthetic-solution/components/PricingCards";
import SmallPricingCards from "../../pricing-aesthetic-solution/components/SmallPricingCards";
import ComparisonPlans from "../../pricing-aesthetic-solution/components/ComparisonPlans";
import TestimonialSlider from "../../pricing-aesthetic-solution/components/TestimonialSlider";
import { FAQSection } from "@/components/ui/faq-section";
import { getMessages, useTranslations } from "@/utils/i18n";

export default async function PricingAestheticSolutionPage() {
	const messages = await getMessages("fr");
	const t = useTranslations(messages);

	return (
		<main className='bg-[#F8FAFF]'>
			<Hero />
			<ComparisonPlans />
			<PricingCards />
			<SmallPricingCards />
			<TestimonialSlider />
			<FAQSection
				title={t("faq.title")}
				subtitle={t("faq.subtitle")}
				faqs={messages?.faq?.questions || []}
			/>
			{/* <TryNextmotion /> */}
		</main>
	);
}
