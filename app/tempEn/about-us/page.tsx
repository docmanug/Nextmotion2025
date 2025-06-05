import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Founder from "./components/Founder";
import TeamMembers from "./components/TeamMembers";
import Specialists from "./components/Specialists";
import CallToAction from "./components/CallToAction";
import { getMessages, useTranslations } from "@/utils/i18n";

export default async function AboutPage() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return <AboutPageClient t={t} />;
}

"use client";

function AboutPageClient({ t }: { t: (key: string) => string }) {
  return (
    <main className="bg-[#F8FAFF]">
      <Hero />
      <Timeline />
      <Founder />
      <TeamMembers />
      <Specialists />
      <CallToAction />
    </main>
  );
}
