import { Metadata } from "next";
import Hero from "../../virtual-classes/components/Hero";
import StandardSection from "../../virtual-classes/components/StandardSection";
import Standard2Section from "../../virtual-classes/components/Standard2Section";
import TeacherStudentSection from "../../virtual-classes/components/TeacherStudentSection";
import RevolutionSection from "../../virtual-classes/components/RevolutionSection";
import MarketSection from "../../virtual-classes/components/MarketSection";
import Market2Section from "../../virtual-classes/components/Market2Section";
import NextMotionJourney from "../../virtual-classes/components/NextMotionJourney";
import ApprovalSection from "../../virtual-classes/components/ApprovalSection";
import ImageSection from "../../virtual-classes/components/ImageSection";

export const metadata: Metadata = {
  title: "L'expérience ultime des formations à distance en médecine esthétique",
  description:
    "Une alternative innovante aux formations à distance. Offrez à vos étudiants des trainings immersifs grâce à la réalité mixte et aux hologrammes 3D",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/virtual-classes",
  },
};

export default function VirtualClassesPage() {
  return (
    <main>
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
    </main>
  );
}
