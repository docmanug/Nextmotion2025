import { Metadata } from "next";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import MoreCaseStudies from "./components/MoreCaseStudies";
import TryNextmotion from "./components/TryNextMotion";
import { getMessages, useTranslations } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "Our customers talk about us and we thank them for that",
  description:
    "The gratitude of our customers guides us to propose solutions in adequacy with the expectations of the professionals of the medical aesthetic.",
  alternates: {
    canonical: "https://www.nextmotion.net/en/case-studies",
  },
};

export default async function CaseStudiesPage() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return (
    <main>
      <Hero />
      <CaseStudies />
      <MoreCaseStudies />
      <TryNextmotion />
    </main>
  );
}
