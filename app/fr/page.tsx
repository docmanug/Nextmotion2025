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
import { OrganizationSchema } from "../components/shared/OrganizationSchema";
import { SoftwareApplicationSchema } from "../components/shared/SoftwareApplicationSchema";

export const metadata: Metadata = {
  title: "Le logiciel n°1 pensé exclusivement pour les cliniques esthétiques",
  description:
    "Découvrez Nextmotion, solution pour cliniques esthétiques : photos avant/après, gestion des patients, comptabilité certifiée, agenda en ligne.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr",
  },
};

export default async function Home() {
  const messages = await getMessages("fr");
  const t = useTranslations(messages);

  return (
    <main>
      <Hero
        title="La solution IA tout-en-un pour booster votre clinique esthétique"
        subtitle="Attirez plus de patients, simplifiez la gestion, automatisez votre pratique."
        demoButton="Planifier une démo IA"
        watchButton="Voir la vidéo"
        videoId="5ppBRo2iFYg"
      />
      <LogoSlider 
        title="Utilisé par les meilleures cliniques esthétiques"
        subtitle="Rejoignez plus de 500 cliniques qui transforment déjà leur pratique avec Nextmotion"
      />
      <PainPointsSection 
        title="Résoudre vos plus grands défis"
        subtitle="Notre plateforme répond aux problématiques clés des cliniques esthétiques"
        isFrenchlanguage={true}
      />
      <AIModulesSection 
        title="Propulsé par l'IA avancée"
        subtitle="Nos modules d'IA transforment les opérations de votre clinique"
      />
      <ProductsSection 
        title="Plateforme complète pour cliniques esthétiques"
        subtitle="Notre IA s'intègre dans une plateforme complète"
        isFrenchlanguage={true}
      />
      <ImpactSection 
        title="Des résultats mesurables pour votre clinique"
        subtitle="Rejoignez les cliniques qui constatent déjà des améliorations significatives"
        isFrenchlanguage={true}
      />
      <ImpactCalculatorSection isFrenchlanguage={true} />
      <TestimonialsSection 
        title="Approuvé par les meilleurs praticiens"
        subtitle="Écoutez ce que nos clients ont à dire"
        isFrenchlanguage={true}
      />
      <OrganizationSchema />
      <SoftwareApplicationSchema />
    </main>
  );
}