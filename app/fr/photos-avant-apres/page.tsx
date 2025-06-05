import { Metadata } from "next";
import Hero from "../../before-after/components/Hero";
import SolutionsSection from "../../before-after/components/SolutionsSection";
import CaptureSection from "../../before-after/components/CaptureSection";
import ConsultSection from "../../before-after/components/ConsultSection";
import ThreeDSection from "../../before-after/components/ThreeDSection";
import RevolutionSection from "../../before-after/components/RevolutionSection";
import SimpleSection from "../../before-after/components/SimpleSection";
import LogoSlider from "../../before-after/components/LogoSlider";
import EngageSection from "../../before-after/components/EngageSection";
import ComparisonSection from "../../before-after/components/ComparisonSection";
import DiscoverSection from "../../before-after/components/DiscoverSection";
import FaqSection from "../../before-after/components/FaqSection";
import ReviewsSection from "../../before-after/components/ReviewsSection";
import { getMessages } from "@/utils/i18n";
import ImageSection from "../../before-after/components/ImageSection";
export const metadata: Metadata = {
  title: "Des photos et vidéos avant-après parfaitement standardisées",
  description:
    "Utilisez NM Capture pour des photos esthétiques professionnelles. Standardisez les photos de vos patients, comparez chaque détail et partagez vos résultats !",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/photos-avant-apres",
  },
};

export default async function BeforeAfterPage() {
  const messages = await getMessages("fr");
  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  return (
    <main>
      <Hero />
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
