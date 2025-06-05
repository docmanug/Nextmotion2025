import { Metadata } from "next";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import { getMessages, useTranslations } from "@/utils/i18n";
import { TestimonialSection } from "@/components/ui/testimonial-section";


export const metadata: Metadata = {
  title: "Contact NextMotion, we can help you grow your aesthetic practice!",
  description:
    "Our sales team can answer your questions, provide product demos, and create custom plans that fit your needs. Fill out the form below, or call us directly.",
  alternates: {
    canonical: "https://www.nextmotion.net/contact",
  },
};

export default async function ContactPage() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return (
    <main>
      <Hero />
      <ContactForm />
      <TestimonialSection
        title={t("testimonials.title")}
        subtitle={t("testimonials.description")}
        testimonials={t("testimonials.items")}
      />
    </main>
  );
}
