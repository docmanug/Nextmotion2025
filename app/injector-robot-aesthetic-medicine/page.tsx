import { Metadata } from "next";
import Hero from "./components/Hero";
import StandardSection from "./components/StandardSection";
import Standard2Section from "./components/Standard2Section";
import CapabilitiesSection from "./components/CapabilitiesSection";
import JoinRevolution from "./components/JoinRevolution";
import ApprovalSection from "./components/ApprovalSection";
import LastSection from "./components/LastSection";

export const metadata: Metadata = {
  title:
    "Revolutionizing Aesthetic Medicine | Meet LENA, the Autonomous Injector Robot | NextMotion",
  description:
    "Discover the first autonomous robot with artificial intelligence! It performs the treatments developed by medical aesthetics professionals",
  alternates: {
    canonical: "https://www.nextmotion.net/injector-robot-aesthetic-medicine",
  },
};

export default function InjectorRobotAestheticMedicinePage() {
  return (
    <main>
      <Hero />
      <StandardSection />
      <Standard2Section />
      <CapabilitiesSection />
      <ApprovalSection />
      <JoinRevolution />
      <LastSection />
    </main>
  );
}
