import Hero from "../../en/injector-robot-aesthetic-medicine/components/Hero";
import StandardSection from "../../en/injector-robot-aesthetic-medicine/components/StandardSection";
import Standard2Section from "../../en/injector-robot-aesthetic-medicine/components/Standard2Section";
import CapabilitiesSection from "../../en/injector-robot-aesthetic-medicine/components/CapabilitiesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinRevolution from "../../en/injector-robot-aesthetic-medicine/components/JoinRevolution";
import ApprovalSection from "../../en/injector-robot-aesthetic-medicine/components/ApprovalSection";
import LastSection from "../../en/injector-robot-aesthetic-medicine/components/LastSection";
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
