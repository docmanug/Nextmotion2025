import { Metadata } from "next";
import Hero from "../../chaines/components/Hero";
import SolutionsSection from "../../chaines/components/SolutionsSection";
import Feature2 from "../../chaines/components/Feature2";
import Feature1 from "../../chaines/components/Feature1";
import TryNextmotion from "../../chaines/components/TryNextmotion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Feature3 from "../../chaines/components/Feature3";
import Feature4 from "../../chaines/components/Feature4";
import Feature5 from "../../chaines/components/Feature5";

export const metadata: Metadata = {
  title: "Optimisez la gestion de vos cliniques esthétiques avec Nextmotion",
  description:
    "Centralisez et optimisez la gestion de vos chaînes de cliniques esthétiques avec Nextmotion. Demandez une démonstration gratuite dès aujourd'hui.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/chaines",
  },
};

export default function Chaines() {
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
      <TryNextmotion />
      <Footer />
    </main>
  );
}
