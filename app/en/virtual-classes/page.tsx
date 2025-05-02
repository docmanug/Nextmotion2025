import Hero from "./components/Hero";
import StandardSection from "./components/StandardSection";
import Standard2Section from "./components/Standard2Section";
import TeacherStudentSection from "./components/TeacherStudentSection";
import RevolutionSection from "./components/RevolutionSection";
import MarketSection from "./components/MarketSection";
import Market2Section from "./components/Market2Section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextMotionJourney from "./components/NextMotionJourney";
import ApprovalSection from "./components/ApprovalSection";
import ImageSection from "./components/ImageSection";

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
