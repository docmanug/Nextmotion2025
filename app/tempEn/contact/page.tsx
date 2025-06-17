import { Metadata } from "next";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import { getMessages, useTranslations } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "Contact NextMotion, we can help you grow your aesthetic practice!",
  description:
    "Our sales team can answer your questions, provide product demos, and create custom plans that fit your needs. Fill out the form below, or call us directly.",
  alternates: {
    canonical: "https://www.nextmotion.net/en/contact",
  },
};

export default async function ContactPage() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return (
    <main>
      <Hero />
      <ContactForm />
      {/* <TestimonialSection
        title={t("contact.testimonials.title")}
        subtitle={t("contact.testimonials.description")}
        testimonials={t("contact.testimonials.items") || []}
      /> */}
    </main>
  );
}
