import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import PricingCards from "./components/PricingCards";
import SmallPricingCards from "./components/SmallPricingCards";
import ComparisonPlans from "./components/ComparisonPlans";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import TryNextmotion from "./components/TryNextMotion";
import { getMessages, useTranslations } from "@/utils/i18n";
import { FAQSection } from "@/components/ui/faq-section";

export default async function PricingAestheticSolutionPage() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return <PricingAestheticSolutionPageClient t={t} messages={messages} />;
}

"use client";

function PricingAestheticSolutionPageClient({ t, messages }: { t: (key: string) => string; messages: any }) {
  return (
    <main className="bg-[#F8FAFF]">
      <Hero />
      <PricingCards />
      <SmallPricingCards />
      <ComparisonPlans />
      <TestimonialSection
        title={t("testimonials.title")}
        subtitle={t("testimonials.description")}
        testimonials={messages.testimonials.items}
      />
      <FAQSection
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
        faqs={messages.faq.questions}
      />
      <TryNextmotion />
    </main>
  );
}
