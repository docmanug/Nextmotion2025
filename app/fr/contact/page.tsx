import { Metadata } from "next";
import Hero from "../../pricing-aesthetic-solution/components/Hero";
import { getMessages, useTranslations } from "@/utils/i18n";
import ContactForm from "@/app/contact/components/ContactForm";
import { TestimonialSection } from "@/components/ui/testimonial-section";

export const metadata: Metadata = {
  title: "Entrez en contact avec l'équipe NextMotion",
  description:
    "Notre équipe est à votre service pour répondre à vos questions et mettre en place une formule personnalisée qui correspond à vos besoins.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/contact",
  },
};

export default async function ContactPage() {
  const messages = await getMessages("fr");
  const t = useTranslations(messages);

  return (
    <main>
      <Hero />
      <ContactForm />
      <TestimonialSection
        title={t("testimonials.title")}
        subtitle={t("testimonials.description")}
        testimonials={messages?.testimonials?.items || []}
      />
    </main>
  );
}
