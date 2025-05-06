import { Metadata } from "next";
import Hero from "./components/Hero";
import StandardSection from "./components/StandardSection";
import Standard2Section from "./components/Standard2Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSection from "./components/ImageSection";
import Standard3Section from "./components/Standard3Section";
import FaqSection from "./components/FaqSection";
import DiscoverSection from "./components/DiscoverSection";

export const metadata: Metadata = {
  title: "Nextmotion 3D - The Revolutionary App for Aesthetic Medicine",
  description:
    "Discover Nextmotion 3D, the ultimate tool for aesthetic professionals. Visualize detailed 3D anatomical models, educate your patients with precision, and boost your conversion rates with augmented reality.",
  alternates: {
    canonical: "https://www.nextmotion.net/3d-aesthetic-simulation",
  },
};

export default function ThreeDAestheticSimulation() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImageSection />
      <StandardSection />
      <Standard2Section />
      <Standard3Section />
      <FaqSection />
      <DiscoverSection />
      <Footer />
    </main>
  );
}
