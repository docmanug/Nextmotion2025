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

export default function FirstLandingPage() {
  return (
    <main>
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
    </main>
  );
} 