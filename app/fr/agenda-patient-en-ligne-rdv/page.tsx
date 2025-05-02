import Hero from "../../agenda-online-booking-reminders/components/Hero";
import SolutionsSection from "../../agenda-online-booking-reminders/components/SolutionsSection";
import Feature2 from "../../agenda-online-booking-reminders/components/Feature2";
import Feature1 from "../../agenda-online-booking-reminders/components/Feature1";
import Feature3 from "../../agenda-online-booking-reminders/components/Feature3";
import Feature4 from "../../agenda-online-booking-reminders/components/Feature4";
import Feature5 from "../../agenda-online-booking-reminders/components/Feature5";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AgendaPatientEnLigneRdvPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SolutionsSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Footer />
    </main>
  );
}
