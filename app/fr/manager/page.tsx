import { Metadata } from "next";
import Hero from "../../manager/components/Hero";
import SolutionsSection from "../../manager/components/SolutionsSection";
import Feature2 from "../../manager/components/Feature2";
import Feature1 from "../../manager/components/Feature1";

import TryNextmotion from "../../components/shared/TryNextmotion";
import Feature3 from "../../manager/components/Feature3";
import Feature4 from "../../manager/components/Feature4";
import Feature5 from "../../manager/components/Feature5";
import Feature6 from "../../manager/components/Feature6";
import Feature7 from "../../manager/components/Feature7";
import Feature8 from "../../manager/components/Feature8";

export const metadata: Metadata = {
  title:
    "Gestion Complète pour Cliniques Esthétiques : Rendez-vous et Marketing",
  description:
    "Découvrez notre solution tout-en-un pour cliniques de médecine et chirurgie esthétique : agenda, comptabilité, marketing et développement de votre activité",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/manager",
  },
};

export default function Manager() {
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
      <TryNextmotion translationKey="managerPage.tryNextmotion" />
    </main>
  );
}
