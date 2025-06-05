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

export const metadata: Metadata = {
  title: "Boostez le Marketing de Votre Clinique Esthétique avec Nextmotion",
  description:
    "Attirez plus de patients et optimisez vos campagnes marketing avec Nextmotion. Demandez une démo",
  alternates: {
    canonical: "https://www.nextmotion.net/marketing",
  },
};

export default function Marketing() {
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
      <TryNextmotion 
        translationKey="marketingPage.tryNextmotion"
        sectionClassName="py-8 sm:py-12"
        buttonClassName="bg-white text-[#1650EF] hover:bg-white/90 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
      />
    </main>
  );
}
