import { Metadata } from "next";
import Hero from "../../3d-aesthetic-simulation/components/Hero";
import StandardSection from "../../3d-aesthetic-simulation/components/StandardSection";
import Standard2Section from "../../3d-aesthetic-simulation/components/Standard2Section";
import Standard3Section from "../../3d-aesthetic-simulation/components/Standard3Section";
import FaqSection from "../../3d-aesthetic-simulation/components/FaqSection";
import DiscoverSection from "../../3d-aesthetic-simulation/components/DiscoverSection";
import { getMessages } from "@/utils/i18n";
import ImageSection from "../../3d-aesthetic-simulation/components/ImageSection";

export const metadata: Metadata = {
  title:
    "Nextmotion 3D - L'application révolutionnaire pour la médecine esthétique",
  description:
    "En quelques secondes, réalisez des scans 3D hyper réalistes du visage de vos patients. Proposez des simulations 3D des procédures durant la consultation.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/3d-simulation-esthetique",
  },
};

export default async function ThreeDAestheticSimulationPage() {
  const messages = await getMessages("fr");
  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  return (
    <main>
      <Hero />
      <ImageSection />
      <StandardSection />
      <Standard2Section />
      <Standard3Section />
      <FaqSection />
      <DiscoverSection />
    </main>
  );
}
