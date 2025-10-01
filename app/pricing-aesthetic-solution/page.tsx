// "use client";

import Hero from "./components/Hero";
import { getMessages, useTranslations } from '@/utils/i18n';
import PricingPlans from '@/components/PricingPlans';
import SchemaManager from '../components/shared/SchemaManager';

export default async function PricingAestheticSolutionPage() {
	const messages = await getMessages("en");
	const t = useTranslations(messages);

	return (
		<main className='bg-[#F8FAFF]'>
			<SchemaManager schemas={['organization', 'softwareApplication']} />
			<Hero />
			<PricingPlans />
		</main>
	);
}