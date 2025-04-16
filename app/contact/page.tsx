import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "@/components/Footer";
import TestinomialSlider from "./components/TestinomialSlider";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ContactForm />
      <TestinomialSlider />
      <Footer />
    </main>
  );
}
