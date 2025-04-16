"use client";

import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Episodes from "./components/Episodes";
import Footer from "@/components/Footer";

export default function PodcastPage() {
  return (
    <main className="bg-[#F8FAFF]">
      <Navbar />
      <Hero />
      <Episodes />
      <Footer />
    </main>
  );
}
