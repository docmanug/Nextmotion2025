import Hero from "../../clinic-management-software/components/Hero";
import SolutionsSection from "../../clinic-management-software/components/SolutionsSection";
import Feature2 from "../../clinic-management-software/components/Feature2";
import Feature1 from "../../clinic-management-software/components/Feature1";
import Feature3 from "../../clinic-management-software/components/Feature3";
import Feature4 from "../../clinic-management-software/components/Feature4";
import Feature5 from "../../clinic-management-software/components/Feature5";
import Feature6 from "../../clinic-management-software/components/Feature6";
import Feature7 from "../../clinic-management-software/components/Feature7";
import Feature8 from "../../clinic-management-software/components/Feature8";
import Feature9 from "../../clinic-management-software/components/Feature9";
import TryNextmotion from "../../clinic-management-software/components/TryNextmotion";
import DiscoverSection from "../../clinic-management-software/components/DiscoverSection";
import ReviewsSection from "../../clinic-management-software/components/ReviewsSection";
import { getMessages } from "@/utils/i18n";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logiciel Clinique Esthétique : Simplifiez la Gestion",
  description:
    "Optimisez la gestion de votre clinique esthétique avec notre solution tout-en-un",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/logiciel-consultation-esthetique",
  },
};

export default async function ClinicManagementSoftwarePage() {
  const messages = await getMessages("fr");
  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  return (
    <main>
      <Hero />
      <SolutionsSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Feature6 />
      <Feature7 />
      <Feature8 />
      <Feature9 />
      <TryNextmotion />
      <DiscoverSection />
      <ReviewsSection />
    </main>
  );
}
