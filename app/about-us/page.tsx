"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Founder from "./components/Founder";
import TeamMembers from "./components/TeamMembers";
import Specialists from "./components/Specialists";
import CallToAction from "./components/CallToAction";
import { getMessages, useTranslations } from "@/utils/i18n";
import { OrganizationSchema } from "../components/shared/OrganizationSchema";
import { SoftwareApplicationSchema } from "../components/shared/SoftwareApplicationSchema";

export default function AboutPage() {
  const [messages, setMessages] = useState(null);
  useEffect(() => {
    getMessages("en").then(setMessages);
  }, []);
  const t = useTranslations(messages);

  return (
    <main className="bg-[#F8FAFF]">
      <Hero />
      <Timeline />
      <Founder />
      <TeamMembers />
      <Specialists />
      <CallToAction />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
    </main>
  );
}
