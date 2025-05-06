import { Metadata } from "next";
import Hero from "../../injector-robot-aesthetic-medicine/components/Hero";
import StandardSection from "../../injector-robot-aesthetic-medicine/components/StandardSection";
import Standard2Section from "../../injector-robot-aesthetic-medicine/components/Standard2Section";
import CapabilitiesSection from "../../injector-robot-aesthetic-medicine/components/CapabilitiesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinRevolution from "../../injector-robot-aesthetic-medicine/components/JoinRevolution";
import ApprovalSection from "../../injector-robot-aesthetic-medicine/components/ApprovalSection";
import LastSection from "../../injector-robot-aesthetic-medicine/components/LastSection";

export const metadata: Metadata = {
  title: "Un robot injecteur doté d'une IA pour la médecine esthétique",
  description:
    "Découvrez le premier robot doté d'une intelligence artificielle ! Il exécute les traitements mis au point par les professionnels de l'esthétique médicale",
  alternates: {
    canonical:
      "https://www.nextmotion.net/fr/robot-injecteur-medecine-esthetique",
  },
};

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
