"use client";

import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import PricingCards from "./components/PricingCards";
import SmallPricingCards from "./components/SmallPricingCards";
import ComparisonPlans from "./components/ComparisonPlans";
import TestimonialSlider from "./components/TestimonialSlider";
import Footer from "@/components/Footer";
import FaqSection from "./components/FaqSection";
import TryNextmotion from "./components/TryNextMotion";

export default function PricingAestheticSolutionPage() {
  return (
    <main className="bg-[#F8FAFF]">
      <Navbar />
      <Hero />
      <PricingCards />
      <SmallPricingCards />
      <ComparisonPlans />
      <TestimonialSlider />
      <FaqSection />
      <TryNextmotion />
      <Footer />
    </main>
  );
}
