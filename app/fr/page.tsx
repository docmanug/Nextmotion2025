import { Metadata } from "next";
import { getMessages, useTranslations } from "@/utils/i18n";
import SchemaManager from "../components/shared/SchemaManager";
import AIHero from "@/components/AIHero";
import ChallengesSection from "@/components/ChallengesSection";
import AIModulesSection from "@/components/AIModulesSection";
import TransitionSection from "@/components/TransitionSection";
import ProductsSection from "@/components/ProductsSection";
import ImpactSection from "@/components/ImpactSection";
import FinalCTA from "@/components/FinalCTA";
import LogoSlider from "@/components/LogoSlider";

export const metadata: Metadata = {
  title: "Logiciel de gestion IA pour cliniques esthétiques | Nextmotion",
  description:
    "Boostez la croissance de votre clinique esthétique avec le logiciel IA de Nextmotion. Attirez plus de patients, simplifiez vos opérations et automatisez vos tâches administratives.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr",
  },
};

export default async function Home() {
  const messages = await getMessages("fr");
  const t = useTranslations(messages);

  // Challenges data
  const challenges = [
    {
      icon: "💰",
      title: "Pas assez de chiffre d'affaires",
      description: "Nextmotion vous aide à attirer, convertir et fidéliser grâce à des outils IA et visuels puissants."
    },
    {
      icon: "🔁",
      title: "Parcours patient trop complexe",
      description: "Digitalisez chaque étape du parcours : photos, devis, consentements, documents, rebooking."
    },
    {
      icon: "🗂",
      title: "Gestion administrative laborieuse",
      description: "Automatisez vos tâches répétitives et centralisez toutes vos données au même endroit."
    }
  ];

  // AI Modules data
  const aiModules = [
    {
      icon: "🧠",
      title: "Rédigez vos comptes rendus en 30s avec Consult AI",
      description: "Générez automatiquement des comptes rendus médicaux structurés à partir de votre voix pendant les consultations.",
      features: [
        "Transcription vocale pendant les consultations",
        "Génération automatique de comptes rendus médicaux structurés",
        "Modèles personnalisables pour différentes procédures",
        "Gain de temps jusqu'à 70% sur la documentation"
      ],
      testimonial: {
        quote: "Je gagne 2 heures par jour sur les tâches administratives grâce à Consult AI.",
        author: "Dr. Sophie Martin",
        role: "Médecin esthétique, Paris"
      },
      image: "/ai-consult.webp"
    },
    {
      icon: "📞",
      title: "Un secrétariat IA qui travaille 24/7 pour vous",
      description: "Laissez notre IA gérer la prise de rendez-vous, répondre aux questions courantes et mettre à jour votre CRM - le tout avec votre propre voix.",
      features: [
        "Disponibilité 24/7 pour les demandes des patients",
        "Planification automatique des rendez-vous et rappels",
        "Intégration transparente avec votre calendrier",
        "Interaction vocale naturelle utilisant votre propre voix"
      ],
      testimonial: {
        quote: "Ma clinique prend maintenant des rendez-vous même lorsque nous sommes fermés. C'est comme avoir un membre du personnel supplémentaire.",
        author: "Dr. Jean Dupont",
        role: "Directeur de clinique"
      },
      image: "/ai-receptionist.webp"
    },
    {
      icon: "🤖",
      title: "Parlez à votre CRM depuis ChatGPT",
      description: "Gérez l'ensemble de votre pratique avec de simples commandes vocales ou textuelles grâce à l'intégration ChatGPT.",
      features: [
        "Commandes vocales et textuelles pour toutes les fonctions CRM",
        "Accès rapide aux dossiers et à l'historique des patients",
        "Génération de rapports et d'analyses à la demande",
        "Intégration transparente avec votre flux de travail existant"
      ],
      testimonial: {
        quote: "Pouvoir accéder aux informations des patients avec une simple commande vocale a transformé mes consultations.",
        author: "Dr. Thomas Laurent",
        role: "Chirurgien plasticien"
      },
      image: "/ai-copilot.webp"
    }
  ];

  // Products data
  const products = [
    {
      icon: "📷",
      title: "Nextmotion Capture",
      description: "Des photos avant/après standardisées qui valorisent votre expertise et renforcent la confiance des patients. Alignement automatique, rendu professionnel, sans effort.",
      image: "/capture-app-demo.webp"
    },
    {
      icon: "📁",
      title: "Nextmotion Consult",
      description: "Le dossier médical digital le plus adapté à l'esthétique : workflows fluides, consentements, factures, intégrations API, CRM médical ultra-complet.",
      image: "/consult.webp"
    },
    {
      icon: "🧠",
      title: "Nextmotion 3D",
      description: "Projetez des couches anatomiques en réalité augmentée pour mieux expliquer les actes et engager vos patients dans leur traitement.",
      image: "/3d_anatomy.webp"
    },
    {
      icon: "🤖",
      title: "Nextmotion Revolution",
      description: "Un bras robotisé pour capturer des vidéos dynamiques parfaitement standardisées, sous tous les angles. Une démonstration de technologie qui bluffe les patients.",
      image: "/capturegirl.webp"
    }
  ];

  // Impact metrics
  const metrics = [
    {
      value: "+30%",
      label: "de temps gagné",
      icon: "⏱️"
    },
    {
      value: "+15%",
      label: "de CA moyen constaté",
      icon: "📈"
    },
    {
      value: "+35pts",
      label: "de satisfaction patient",
      icon: "🌟"
    }
  ];

  return (
    <main>
      <AIHero
        title="La solution IA tout-en-un pour booster la croissance de votre clinique esthétique"
        subtitle="Attirez plus de patients, digitalisez l'expérience patient, automatisez votre gestion quotidienne"
        demoButton="Planifier une démo IA personnalisée"
        discoverButton="Découvrir les nouveautés IA"
      />
      <ChallengesSection
        title="Les 3 enjeux critiques des cliniques aujourd'hui"
        challenges={challenges}
      />
      <AIModulesSection
        title="Des modules IA puissants pour transformer votre pratique"
        subtitle="L'assistant IA de Nextmotion est au cœur d'un écosystème complet conçu pour les cliniques esthétiques"
        modules={aiModules}
      />
      <TransitionSection
        title="L'intelligence artificielle est au cœur de Nextmotion. Mais notre solution va bien plus loin."
        description="Nextmotion intègre aussi des outils conçus pour couvrir tous les besoins métiers d'une clinique : capture photo, dossier patient, robotique, 3D et plus encore."
      />
      <ProductsSection
        title="Nos outils emblématiques"
        products={products}
      />
      <ImpactSection
        metrics={metrics}
      />
      <LogoSlider 
        title="Adopté par les meilleures cliniques esthétiques" 
        subtitle="Rejoignez des milliers de praticiens qui ont transformé leur pratique avec Nextmotion"
      />
      <FinalCTA
        title="Prêt à transformer votre cabinet ?"
        description="Réservez une démo IA personnalisée et recevez un diagnostic offert de votre organisation en 15 minutes."
        buttonText="Planifier une démo IA"
      />
      <SchemaManager schemas={['organization', 'softwareApplication']} />
    </main>
  );
}