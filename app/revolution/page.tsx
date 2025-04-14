import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import SimpleSection from "./components/SimpleSection";
import EngageSection from "./components/EngageSection";
import ComparisonSection from "./components/ComparisonSection";
import DiscoverSection from "./components/DiscoverSection";
import CommunitySection from "./components/CommunitySection";
import ApprovalSection from "./components/ApprovalSection";
import FaqSection from "./components/FaqSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSection from "./components/ImageSection";
import NewOffer from "./components/NewOffer";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";
import Feature6 from "./components/Feature6";
import Feature7 from "./components/Feature7";
export default function RevolutionLandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImageSection />
      <SolutionsSection />
      <NewOffer />
      <Feature1  />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Feature6 />
      <Feature7 />
      <FaqSection />
      <NewOffer />
      <DiscoverSection />
      <Footer />
    </main>
  );
} 