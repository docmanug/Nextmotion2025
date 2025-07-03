import { Metadata } from "next";
import { getMessages, useTranslations } from "@/utils/i18n";
import Hero from "@/components/Hero";
import PainPointsSection from "@/components/PainPointsSection";
import AIModulesSection from "@/components/AIModulesSection";
import ProductsSection from "@/components/ProductsSection";
import ImpactSection from "@/components/ImpactSection";
import ImpactCalculatorSection from "@/components/ImpactCalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LogoSlider from "@/components/LogoSlider";
import CountryRedirect from "./components/CountryRedirect";
import { OrganizationSchema } from "./components/shared/OrganizationSchema";
import { SoftwareApplicationSchema } from "./components/shared/SoftwareApplicationSchema";

export const metadata: Metadata = {
  title:
    "Management software for aesthetic clinics: simplify your appointments and cash management.",
  description:
    "Optimize the management of your aesthetic clinic with our software dedicated to physicians, aesthetic surgeons, and managers. Simplify appointment scheduling, cash management, and much more.",
  alternates: {
    canonical: "https://www.nextmotion.net",
  },
};

export default async function Home() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  return (
    <main>
      <CountryRedirect />
      <Hero
        title="The all-in-one AI solution to boost your aesthetic clinic"
        subtitle="Attract more patients, simplify management, automate your practice."
        demoButton="Schedule an AI demo"
        watchButton="Watch video"
        videoId="5ppBRo2iFYg"
      />
      <LogoSlider 
        title="Trusted by leading aesthetic clinics worldwide"
        subtitle="Join over 500 clinics already using Nextmotion to transform their practice"
      />
      <PainPointsSection 
        title="Solving your biggest challenges"
        subtitle="Our platform addresses the key pain points of aesthetic clinics"
      />
      <AIModulesSection 
        title="Powered by advanced AI"
        subtitle="Our AI modules transform your clinic operations"
      />
      <ProductsSection 
        title="Complete platform for aesthetic clinics"
        subtitle="Our AI integrates with a comprehensive platform"
      />
      <ImpactSection 
        title="Measurable results for your clinic"
        subtitle="Join clinics already seeing significant improvements"
      />
      <ImpactCalculatorSection />
      <TestimonialsSection 
        title="Trusted by leading practitioners"
        subtitle="Hear what our clients have to say"
      />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
    </main>
  );
}