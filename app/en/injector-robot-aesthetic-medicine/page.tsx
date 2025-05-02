import Hero from "./components/Hero";
import StandardSection from "./components/StandardSection";
import Standard2Section from "./components/Standard2Section";
import CapabilitiesSection from "./components/CapabilitiesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinRevolution from "./components/JoinRevolution";
import ApprovalSection from "./components/ApprovalSection";
import LastSection from "./components/LastSection";
export default function InjectorRobotAestheticMedicinePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StandardSection />
      <Standard2Section />
      <CapabilitiesSection />
      <ApprovalSection />
      <JoinRevolution />
      <LastSection />
      <Footer />
    </main>
  );
}
