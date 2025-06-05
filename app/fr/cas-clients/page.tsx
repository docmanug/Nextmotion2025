import { Metadata } from "next";
import Hero from "../../case-studies/components/Hero";
import CaseStudies from "../../case-studies/components/CaseStudies";
import MoreCaseStudies from "../../case-studies/components/MoreCaseStudies";
import TryNextmotion from "../../case-studies/components/TryNextMotion";
import { getMessages, useTranslations } from "@/utils/i18n";
import { TestimonialSection } from "@/components/ui/testimonial-section";

export const metadata: Metadata = {
  title: "Nos clients parlent de nous et nous les en remercions",
  description:
    "La reconnaissance de nos clients nous guide afin de proposer des solutions en adéquation avec les attentes des professionnels de l'esthétique médicale.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/cas-clients",
  },
};

export default async function CaseStudiesPage() {
  const messages = await getMessages("fr");
  const t = useTranslations(messages);

  return (
    <main>
      <Hero />
      <CaseStudies />
      <TestimonialSection
        title={t("testimonials.title")}
        subtitle={t("testimonials.description")}
        testimonials={t("testimonials.items")}
      />
      <MoreCaseStudies />
      <TryNextmotion />
    </main>
  );
}
