import { Metadata } from "next";
import Hero from "../../en/assistant/components/Hero";
import SolutionsSection from "../../en/assistant/components/SolutionsSection";
import Feature2 from "../../en/assistant/components/Feature2";
import Feature1 from "../../en/assistant/components/Feature1";
import TryNextmotion from "../../en/assistant/components/TryNextmotion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Feature3 from "../../en/assistant/components/Feature3";
import Feature4 from "../../en/assistant/components/Feature4";
import Feature5 from "../../en/assistant/components/Feature5";
import Feature6 from "../../en/assistant/components/Feature6";
import Feature7 from "../../en/assistant/components/Feature7";
import Feature8 from "../../en/assistant/components/Feature8";

export const metadata: Metadata = {
  title: "Gestion Clinique Esthétique : Solution Tout-en-Un",
  description:
    "Simplifiez la gestion de votre clinique esthétique avec Nextmotion. Demandez une démo gratuite",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/assistant",
  },
};

export default function Assistant() {
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
      <Feature8 />
      <TryNextmotion />
      <Footer />
    </main>
  );
}
