import { Metadata } from "next";
import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import DiscoverSection from "./components/DiscoverSection";
import FaqSection from "./components/FaqSection";
import ImageSection from "./components/ImageSection";
import NewOffer from "./components/NewOffer";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";
import Feature6 from "./components/Feature6";
import Feature7 from "./components/Feature7";
import { getMessages, useTranslations } from "@/utils/i18n";

export const metadata: Metadata = {
  title:
    "Nextmotion Revolution - Perfectly Standardized Videos for Aesthetic Care",
  description:
    "Revolutionize aesthetic consultations with Nextmotion Revolution. Capture dynamic videos, extract HD photos, and deliver consistent before-and-after results",
  alternates: {
    canonical: "https://www.nextmotion.net/revolution",
  },
};

export default async function RevolutionLandingPage() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return (
    <main>
      <Hero />
      <ImageSection />
      <SolutionsSection />
      {/* <NewOffer /> */}
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Feature6 />
      <Feature7 />
      <FaqSection />
      {/* <NewOffer /> */}
      <DiscoverSection />
    </main>
  );
}
