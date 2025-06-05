import { Metadata } from "next";
import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import CaptureSection from "./components/CaptureSection";
import ConsultSection from "./components/ConsultSection";
import ThreeDSection from "./components/ThreeDSection";
import RevolutionSection from "./components/RevolutionSection";
import SimpleSection from "./components/SimpleSection";
import LogoSlider from "./components/LogoSlider";
import ReviewsSection from "./components/ReviewsSection";
import EngageSection from "./components/EngageSection";
import ComparisonSection from "./components/ComparisonSection";
import DiscoverSection from "./components/DiscoverSection";
import FaqSection from "./components/FaqSection";
import { getMessages } from "@/utils/i18n";
import ImageSection from "./components/ImageSection";
export const metadata: Metadata = {
  title:
    "Nextmotion Capture - Professional Before-and-After Photos & Videos for Aesthetic Clinics",
  description:
    "Discover NM Capture, the ultimate tool for aesthetic clinics. Capture professional before-and-after photos, standardize patient images, compare details, and share results effortlessly.",
  alternates: {
    canonical: "https://www.nextmotion.net/before-after",
  },
};

export default async function SecondLandingPage() {
  const messages = await getMessages("en");
  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  return (
    <main>
      <ImageSection />
      <SolutionsSection />
      <CaptureSection />
      <ConsultSection />
      <ThreeDSection />
      <RevolutionSection />
      <SimpleSection />
      <LogoSlider />
      <ReviewsSection />
      <EngageSection />
      <ComparisonSection />
      <DiscoverSection />
      <FaqSection />
    </main>
  );
}
