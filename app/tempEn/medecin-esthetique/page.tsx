import { Metadata } from "next";
import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import Feature2 from "./components/Feature2";
import Feature1 from "./components/Feature1";
import TryNextmotion from "./components/TryNextmotion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    canonical: "https://www.nextmotion.net/en/medecin-esthetique",
  },
};

export default function Medecin() {
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
