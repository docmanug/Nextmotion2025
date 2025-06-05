// "use client";

import Hero from "./components/Hero";
import PricingCards from "./components/PricingCards";
import SmallPricingCards from "./components/SmallPricingCards";
import ComparisonPlans from "./components/ComparisonPlans";
import TestimonialSlider from "./components/TestimonialSlider";
import FaqSection from "./components/FaqSection";
import TryNextmotion from "./components/TryNextMotion";
import { getMessages, useTranslations } from "@/utils/i18n";

export default async function PricingAestheticSolutionPage() {
	const messages = await getMessages("en");
	const t = useTranslations(messages);

	return (
		<main className='bg-[#F8FAFF]'>
			<Hero />
			<ComparisonPlans />
			<PricingCards />
			<SmallPricingCards />
			<TestimonialSlider />
			<FaqSection />
			{/* <TryNextmotion /> */}
		</main>
	);
}
