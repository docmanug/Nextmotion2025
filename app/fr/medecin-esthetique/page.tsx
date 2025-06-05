import { Metadata } from "next";
import Hero from "../../medecin-esthetique/components/Hero";
import SolutionsSection from "../../medecin-esthetique/components/SolutionsSection";
import Feature2 from "../../medecin-esthetique/components/Feature2";
import Feature1 from "../../medecin-esthetique/components/Feature1";

import TryNextmotion from "../../components/shared/TryNextmotion";
import Feature3 from "../../medecin-esthetique/components/Feature3";
import Feature4 from "../../medecin-esthetique/components/Feature4";
import Feature5 from "../../medecin-esthetique/components/Feature5";
import Feature6 from "../../medecin-esthetique/components/Feature6";
import Feature7 from "../../medecin-esthetique/components/Feature7";
import Feature8 from "../../medecin-esthetique/components/Feature8";

export const metadata: Metadata = {
  title: "Logiciel Clinique Esthétique : Simplifiez la Gestion",
  description:
    "Optimisez la gestion de votre clinique esthétique avec notre solution tout-en-un.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/medecin-esthetique",
  },
};

export default function Medecin() {
  return (
    <main>
      <Hero />
      <SolutionsSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Feature6 />
      <Feature7 />
      <Feature8 />
      <TryNextmotion translationKey="medecinPage.tryNextmotion" />
    </main>
  );
}
