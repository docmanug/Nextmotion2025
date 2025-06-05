"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";

interface SolutionsSectionProps {
  title?: string;
  subtitle?: string;
  individuals?: string;
  clinics?: string;
  chains?: string;
  marketing?: string;
}

export default function SolutionsSection({
  title = "All in one solution designed by a doctor for aesthetic clinics",
  subtitle = "Nextmotion is a comprehensive ecosystem of solutions offering all the tools you need, whether you are an individual physician, clinic manager, or chain clinic owner.",
  individuals = "Individuals",
  clinics = "Clinics",
  chains = "Clinic chains",
  marketing = "Marketing",
}: SolutionsSectionProps) {
  const solutions = [
    {
      icon: "clinical_notes.png",
      title: individuals,
    },
    {
      icon: "medical.png",
      title: clinics,
    },
    {
      icon: "medication.png",
      title: chains,
    },
    {
      icon: "marketing.png",
      title: marketing,
    },
  ];

  return (
    <Section>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
        {solutions.map((solution, index) => (
          <FeatureCard
            key={index}
            icon={solution.icon}
            title={solution.title}
          />
        ))}
      </div>
    </Section>
  );
}
