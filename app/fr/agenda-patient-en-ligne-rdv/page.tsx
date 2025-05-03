import { Metadata } from "next";
import Hero from "../../agenda-online-booking-reminders/components/Hero";
import SolutionsSection from "../../agenda-online-booking-reminders/components/SolutionsSection";
import Feature2 from "../../agenda-online-booking-reminders/components/Feature2";
import Feature1 from "../../agenda-online-booking-reminders/components/Feature1";
import Feature3 from "../../agenda-online-booking-reminders/components/Feature3";
import Feature4 from "../../agenda-online-booking-reminders/components/Feature4";
import Feature5 from "../../agenda-online-booking-reminders/components/Feature5";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agenda en ligne pour cliniques esthétiques: rappels et RDV patient.",
  description:
    "Agenda en ligne pour cliniques esthétiques : gestion des rendez-vous, rappels automatiques, accès patient sécurisé et suivi des performances en temps réel.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/agenda-patient-en-ligne-rdv",
  },
};

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
