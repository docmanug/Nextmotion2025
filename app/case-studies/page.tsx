import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Footer from "@/components/Footer";
import TestimonialSlider from "./components/TestinomialSlider";
import MoreCaseStudies from "./components/MoreCaseStudies";
import TryNextmotion from "./components/TryNextMotion";
export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CaseStudies />
      <TestimonialSlider />
      <MoreCaseStudies />
      <TryNextmotion />
      <Footer />
    </main>
  );
}
