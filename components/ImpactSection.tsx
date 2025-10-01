"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface ImpactSectionProps {
  title: string;
  subtitle: string;
  className?: string;
  isFrenchlanguage?: boolean;
}

export default function ImpactSection({
  title,
  subtitle,
  className,
  isFrenchlanguage = false,
}: ImpactSectionProps) {
  const statsEN: Stat[] = [
    {
      value: "+30%",
      label: "Time Saved",
      description: "Practitioners save up to 30% of their time with our AI-powered automation"
    },
    {
      value: "+15%",
      label: "Revenue Growth",
      description: "Clinics report an average 15% increase in revenue after implementing Nextmotion"
    },
    {
      value: "+35",
      label: "NPS Points",
      description: "Patient satisfaction scores improve by an average of 35 points"
    },
    {
      value: "24/7",
      label: "Availability",
      description: "Our AI secretary provides round-the-clock patient service and booking"
    }
  ];

  const statsFR: Stat[] = [
    {
      value: "+30%",
      label: "Temps Économisé",
      description: "Les praticiens économisent jusqu'à 30% de leur temps grâce à notre automatisation IA"
    },
    {
      value: "+15%",
      label: "Croissance du CA",
      description: "Les cliniques rapportent une augmentation moyenne de 15% de leur chiffre d'affaires"
    },
    {
      value: "+35",
      label: "Points NPS",
      description: "Les scores de satisfaction patient s'améliorent en moyenne de 35 points"
    },
    {
      value: "24/7",
      label: "Disponibilité",
      description: "Notre secrétaire IA offre un service patient et des réservations 24h/24, 7j/7"
    }
  ];

  const stats = isFrenchlanguage ? statsFR : statsEN;
  const joinText = isFrenchlanguage
    ? "Rejoignez plus de 500 cliniques esthétiques qui transforment déjà leur pratique"
    : "Join over 500 aesthetic clinics already transforming their practice";
  const clientsText = isFrenchlanguage
    ? "Nos clients constatent des améliorations significatives en efficacité, satisfaction patient et croissance commerciale dès les 3 premiers mois."
    : "Our clients report significant improvements in efficiency, patient satisfaction, and business growth within the first 3 months.";
  const recommendText = isFrenchlanguage ? "Recommanderaient" : "Would recommend";
  const roiText = isFrenchlanguage ? "ROI en 6 mois" : "Saw ROI in 6 months";
  const ratingText = isFrenchlanguage ? "Note moyenne" : "Average rating";

  return (
    <Section className={cn("py-16 bg-gradient-to-b from-blue-50 to-white", className)}>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</div>
            <p className="text-gray-600 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">{joinText}</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{clientsText}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <div className="text-2xl font-bold">93%</div>
            <div className="text-sm">{recommendText}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <div className="text-2xl font-bold">87%</div>
            <div className="text-sm">{roiText}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
            <div className="text-2xl font-bold">4.8/5</div>
            <div className="text-sm">{ratingText}</div>
          </div>
        </div>
      </div>
    </Section>
  );
}