import { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import ProductInActionSection from "./components/ProductInActionSection";
import ReassuranceSection from "./components/ReassuranceSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import ContactFormSection from "./components/ContactFormSection";

export const metadata: Metadata = {
  title: "Nextmotion Starter - Simplify your aesthetic clinic",
  description: "Nextmotion Starter is a platform that simplifies the management of your aesthetic clinic.",
  alternates: {
    canonical: "https://www.nextmotion.net/starter",
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
