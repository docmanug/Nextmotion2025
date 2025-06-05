import { Metadata } from "next";
import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import Feature2 from "./components/Feature2";
import Feature1 from "./components/Feature1";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";
import Feature6 from "./components/Feature6";
import Feature7 from "./components/Feature7";
import Feature8 from "./components/Feature8";
import Feature9 from "./components/Feature9";
import TryNextmotion from "./components/TryNextmotion";
import DiscoverSection from "./components/DiscoverSection";
import ReviewsSection from "./components/ReviewsSection";
import { getMessages, useTranslations } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "Online agenda for aesthetic clinics: scheduling, reminders",
  description:
    "Online agenda for aesthetic clinics: manage appointments, automated reminders, secure patient access, and real-time performance tracking.",
  alternates: {
    canonical: "https://www.nextmotion.net/agenda-online-booking-reminders",
  },
};

export default async function AgendaOnlineBookingRemindersPage() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return (
    <main>
      <Hero />
      <SolutionsSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
    </main>
  );
}
