"use client";

import { useTranslations, getMessages } from "@/utils/i18n";
import Hero from "../../about-us/components/Hero";
import Timeline from "../../about-us/components/Timeline";
import Founder from "../../about-us/components/Founder";
import TeamMembers from "../../about-us/components/TeamMembers";
import Specialists from "../../about-us/components/Specialists";
import CallToAction from "../../about-us/components/CallToAction";
import { useEffect, useState } from "react";

export default async function AboutPage() {
  const messages = await getMessages("fr");
  const t = useTranslations(messages);
  return <AboutPageClient t={t} />;
}

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
