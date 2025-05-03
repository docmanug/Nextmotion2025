import { Metadata } from "next";
import Hero from "../../en/marketing/components/Hero";
import SolutionsSection from "../../en/marketing/components/SolutionsSection";
import Feature2 from "../../en/marketing/components/Feature2";
import Feature1 from "../../en/marketing/components/Feature1";

import TryNextmotion from "../../en/marketing/components/TryNextmotion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Feature3 from "../../en/marketing/components/Feature3";
import Feature4 from "../../en/marketing/components/Feature4";
import Feature5 from "../../en/marketing/components/Feature5";
import Feature6 from "../../en/marketing/components/Feature6";
import Feature7 from "../../en/marketing/components/Feature7";

export const metadata: Metadata = {
  title: "Boostez le Marketing de Votre Clinique Esthétique avec Nextmotion",
  description:
    "Attirez plus de patients et optimisez vos campagnes marketing avec Nextmotion. Demandez une démo",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/marketing",
  },
};

export default function Marketing() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SolutionsSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Feature6 />
      <Feature7 />
      <TryNextmotion />
      <Footer />
    </main>
  );
}
