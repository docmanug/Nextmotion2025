"use client";

import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Founder from "./components/Founder";
import TeamMembers from "./components/TeamMembers";
import Specialists from "./components/Specialists";
import CallToAction from "./components/CallToAction";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAFF]">
      <Navbar />
      <Hero />
      <Timeline />
      <Founder />
      <TeamMembers />
      <Specialists />
      <CallToAction />
      <Footer />
    </main>
  );
}
