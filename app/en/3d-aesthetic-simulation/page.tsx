import Hero from "./components/Hero";
import StandardSection from "./components/StandardSection";
import Standard2Section from "./components/Standard2Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSection from "./components/ImageSection";
import Standard3Section from "./components/Standard3Section";
import FaqSection from "./components/FaqSection";
import DiscoverSection from "./components/DiscoverSection";
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