import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import CaptureSection from "./components/CaptureSection";
import ConsultSection from "./components/ConsultSection";
import ThreeDSection from "./components/ThreeDSection";
import RevolutionSection from "./components/RevolutionSection";
import SimpleSection from "./components/SimpleSection";
import LogoSlider from "./components/LogoSlider";
import ReviewsSection from "./components/ReviewsSection";
import EngageSection from "./components/EngageSection";
import ComparisonSection from "./components/ComparisonSection";
import DiscoverSection from "./components/DiscoverSection";
import CommunitySection from "./components/CommunitySection";
import ApprovalSection from "./components/ApprovalSection";
import FaqSection from "./components/FaqSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SecondLandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SolutionsSection />
      <CaptureSection />
      <ConsultSection />
      <ThreeDSection />
      <RevolutionSection />
      <SimpleSection />
      <LogoSlider />
      <ReviewsSection />
      <EngageSection />
      <ComparisonSection />
      <DiscoverSection />
      <FaqSection />
      <Footer />
    </main>
  );
} 