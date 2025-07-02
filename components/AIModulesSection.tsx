"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

interface AIModule {
  title: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
}

interface AIModulesSectionProps {
  title: string;
  subtitle: string;
  className?: string;
  isFrenchlanguage?: boolean;
}

export default function AIModulesSection({
  title,
  subtitle,
  className,
  isFrenchlanguage = false,
}: AIModulesSectionProps) {
  const [contactFormLink, setContactFormLink] = useState<string>("/contact_form");

  useEffect(() => {
    setContactFormLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/formulaire_contact"
        : "/contact_form"
    );
  }, []);

  const aiModulesEN: AIModule[] = [
    {
      title: "Consult AI",
      description: "Automated transcription and report generation",
      features: [
        "Real-time consultation transcription",
        "Automated medical report generation",
        "Intelligent treatment recommendations",
        "Time savings of up to 70% on documentation"
      ],
      icon: "/icons/consult-ai-icon.svg",
      image: "/consult.webp"
    },
    {
      title: "Secretary AI",
      description: "24/7 voice agent for your clinic",
      features: [
        "Handles patient calls 24/7",
        "Books and reschedules appointments",
        "Answers common patient questions",
        "Reduces missed appointments by 40%"
      ],
      icon: "/icons/secretary-ai-icon.svg",
      image: "/secretary.webp"
    },
    {
      title: "Copilot AI",
      description: "Voice and text control via ChatGPT",
      features: [
        "Voice-controlled clinic management",
        "Natural language interface for all functions",
        "Intelligent workflow automation",
        "Reduces administrative time by 35%"
      ],
      icon: "/icons/copilot-ai-icon.svg",
      image: "/copilot.webp"
    }
  ];

  const aiModulesFR: AIModule[] = [
    {
      title: "Consult AI",
      description: "Transcription et génération automatisée de rapports",
      features: [
        "Transcription des consultations en temps réel",
        "Génération automatisée de rapports médicaux",
        "Recommandations intelligentes de traitement",
        "Gain de temps jusqu'à 70% sur la documentation"
      ],
      icon: "/icons/consult-ai-icon.svg",
      image: "/consult.webp"
    },
    {
      title: "Secrétariat IA",
      description: "Agent vocal 24/7 pour votre clinique",
      features: [
        "Gère les appels patients 24h/24, 7j/7",
        "Réserve et reprogramme les rendez-vous",
        "Répond aux questions courantes des patients",
        "Réduit les rendez-vous manqués de 40%"
      ],
      icon: "/icons/secretary-ai-icon.svg",
      image: "/secretary.webp"
    },
    {
      title: "Copilot IA",
      description: "Contrôle vocal et textuel via ChatGPT",
      features: [
        "Gestion de clinique par commande vocale",
        "Interface en langage naturel pour toutes les fonctions",
        "Automatisation intelligente des flux de travail",
        "Réduit le temps administratif de 35%"
      ],
      icon: "/icons/copilot-ai-icon.svg",
      image: "/copilot.webp"
    }
  ];

  const aiModules = isFrenchlanguage ? aiModulesFR : aiModulesEN;
  const learnMoreText = isFrenchlanguage ? "En savoir plus" : "Learn more";
  const demoText = isFrenchlanguage ? "Demander une démo" : "Request a demo";

  return (
    <Section className={cn("py-16 bg-gray-50", className)}>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="mt-12 space-y-16">
        {aiModules.map((module, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
                </div>

                <p className="text-lg text-gray-700 mb-6">{module.description}</p>

                <ul className="space-y-3 mb-6">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link href={contactFormLink}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 text-[16px] h-auto">
                      {learnMoreText}
                    </Button>
                  </Link>
                  <Link href={contactFormLink}>
                    <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-6 py-3 text-[16px] font-semibold h-auto">
                      {demoText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-[350px] md:h-[400px]">
              <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
                <OptimizedImage
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href={contactFormLink}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 text-lg h-auto">
            {isFrenchlanguage ? "Découvrir tous nos modules IA" : "Discover all our AI modules"}
          </Button>
        </Link>
      </div>
    </Section>
  );
}