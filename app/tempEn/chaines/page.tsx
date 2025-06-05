import { Metadata } from "next";
import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import Feature2 from "./components/Feature2";
import Feature1 from "./components/Feature1";
import TryNextmotion from "./components/TryNextmotion";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";

export const metadata: Metadata = {
  title: "Optimize the management of your aesthetic clinics with Nextmotion",
  description:
    "Centralize and optimize the management of your aesthetic clinic chains with Nextmotion. Request a free demo today.",
  alternates: {
    canonical: "https://www.nextmotion.net/en/chaines",
  },
};

export default function Chaines() {
  return (
    <main>
      <Hero />
      <SolutionsSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <TryNextmotion />
    </main>
  );
}
