import Hero from "./components/Hero";
import StandardSection from "./components/StandardSection";
import Standard2Section from "./components/Standard2Section";
import CapabilitiesSection from "./components/CapabilitiesSection";
import TeacherStudentSection from "./components/TeacherStudentSection";
import RevolutionSection from "./components/RevolutionSection";
import MarketSection from "./components/MarketSection";
import Market2Section from "./components/Market2Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextMotionJourney from "./components/NextMotionJourney";
import ApprovalSection from "./components/ApprovalSection";

export default function InjectorRobotAestheticMedicinePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StandardSection />
      <Standard2Section />
      <CapabilitiesSection />
      <ApprovalSection />
      <Footer />
    </main>
  );
} 