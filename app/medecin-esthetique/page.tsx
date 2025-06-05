import { Metadata } from "next";
import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import Feature2 from "./components/Feature2";
import Feature1 from "./components/Feature1";
import TryNextmotion from "@/app/components/shared/TryNextmotion";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";
import Feature6 from "./components/Feature6";
import Feature7 from "./components/Feature7";
import Feature8 from "./components/Feature8";

export const metadata: Metadata = {
  title: "Logiciel Clinique Esthétique : Simplifiez la Gestion",
  description:
    "Optimisez la gestion de votre clinique esthétique avec notre solution tout-en-un",
  alternates: {
    canonical: "https://www.nextmotion.net/medecin-esthetique",
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
      <TryNextmotion 
        translationKey="medecinEsthetique.tryNextmotion"
        sectionClassName="py-8 sm:py-12"
        buttonClassName="w-full sm:w-auto bg-white text-[#1650EF] hover:bg-white/90 rounded-lg px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-[16px] font-semibold h-auto"
      />
    </main>
  );
}
