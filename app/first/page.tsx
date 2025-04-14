import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import CaptureSection from "./components/CaptureSection";
import ConsultSection from "./components/ConsultSection";
import ThreeDSection from "./components/ThreeDSection";
import RevolutionSection from "./components/RevolutionSection";
import LogoSlider from "./components/LogoSlider";
import ReviewsSection from "./components/ReviewsSection";
import CommunitySection from "./components/CommunitySection";
import ApprovalSection from "./components/ApprovalSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FirstLandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SolutionsSection />
      <CaptureSection />
      <ConsultSection />
      <ThreeDSection />
      <RevolutionSection />
      <LogoSlider />
      <ReviewsSection />
      <CommunitySection />
      <ApprovalSection />
      <Footer />
    </main>
  );
} 