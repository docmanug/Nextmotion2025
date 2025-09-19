import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import ProductInActionSection from "./components/ProductInActionSection";
import ReassuranceSection from "./components/ReassuranceSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import ContactFormSection from "./components/ContactFormSection";

export const metadata: Metadata = {
  title: "Nextmotion Starter - Simplifier votre clinique esthétique",
  description: "Nextmotion Starter est une plateforme qui simplifie la gestion de votre clinique esthétique.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/starter",
  },
};

const StarterPage = () => {
  return (
    <div className="min-h-screen bg-white mt-16">
      <HeroSection />
      <BenefitsSection />
      <ProductInActionSection />
      <ReassuranceSection />
      <TestimonialSection />
      <PricingSection />
      <ContactFormSection />
    </div>
  );
};

export default StarterPage;
