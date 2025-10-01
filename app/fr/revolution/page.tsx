import { Metadata } from "next";
import Hero from "../../revolution/components/Hero";
import SolutionsSection from "../../revolution/components/SolutionsSection";
import DiscoverSection from "../../revolution/components/DiscoverSection";
import FaqSection from "../../revolution/components/FaqSection";
import ImageSection from "../../revolution/components/ImageSection";
import NewOffer from "../../revolution/components/NewOffer";
import Feature1 from "../../revolution/components/Feature1";
import Feature2 from "../../revolution/components/Feature2";
import Feature3 from "../../revolution/components/Feature3";
import Feature4 from "../../revolution/components/Feature4";
import Feature5 from "../../revolution/components/Feature5";
import Feature6 from "../../revolution/components/Feature6";
import Feature7 from "../../revolution/components/Feature7";
import { getMessages, useTranslations } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "Des photos esthétiques inégalées",
  description:
    "Découvrez comment la machine Nextmotion Revolution, combinée à l'application NM Capture, peut transformer vos prises de photos et vidéos avant/après.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/revolution",
  },
};

export default async function RevolutionLandingPage() {
  const messages = await getMessages("fr");
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
