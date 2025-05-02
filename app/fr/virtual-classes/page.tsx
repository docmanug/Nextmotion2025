import Hero from "../../en/virtual-classes/components/Hero";
import StandardSection from "../../en/virtual-classes/components/StandardSection";
import Standard2Section from "../../en/virtual-classes/components/Standard2Section";
import TeacherStudentSection from "../../en/virtual-classes/components/TeacherStudentSection";
import RevolutionSection from "../../en/virtual-classes/components/RevolutionSection";
import MarketSection from "../../en/virtual-classes/components/MarketSection";
import Market2Section from "../../en/virtual-classes/components/Market2Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextMotionJourney from "../../en/virtual-classes/components/NextMotionJourney";
import ApprovalSection from "../../en/virtual-classes/components/ApprovalSection";
import ImageSection from "../../en/virtual-classes/components/ImageSection";

export default function VirtualClassesPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImageSection />
      <StandardSection />
      <Standard2Section />
      <TeacherStudentSection />
      <RevolutionSection />
      <MarketSection />
      <Market2Section />
      <NextMotionJourney />
      <ApprovalSection />
      <Footer />
    </main>
  );
}
