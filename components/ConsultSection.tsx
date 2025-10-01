"use client";

import { SectionWithImage } from "@/components/ui/section-with-image";
import { FeatureCard } from "@/components/ui/feature-card";
import { LearnMoreButton } from "@/components/ui/learn-more-button";
import { SectionHeaderWithIcon } from "@/components/ui/section-header-with-icon";

interface Feature {
  title: string;
  description: string;
}

interface Features {
  management: Feature;
  agenda: Feature;
  workflow: Feature;
  api: Feature;
  cloud: Feature;
}

interface ConsultSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: Features;
  learnMore: string;
}

export default function ConsultSection({
  title,
  subtitle,
  description,
  features,
  learnMore,
}: ConsultSectionProps) {
  return (
    <SectionWithImage
      imageSrc="/consult.webp"
      imageAlt="Nextmotion Consult App Screenshot"
      imagePosition="left"
      imagePriority
    >
      <div>
        <SectionHeaderWithIcon
          icon="/icons/consult.svg"
          iconAlt="Consult Icon"
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <div className="space-y-6 sm:space-y-8">
          <FeatureCard
            title={features.management.title}
            description={features.management.description}
            className="text-left items-start"
          />
          <FeatureCard
            title={features.agenda.title}
            description={features.agenda.description}
            className="text-left items-start"
          />
          <FeatureCard
            title={features.workflow.title}
            description={features.workflow.description}
            className="text-left items-start"
          />
          <FeatureCard
            title={features.api.title}
            description={features.api.description}
            className="text-left items-start"
          />
          <FeatureCard
            title={features.cloud.title}
            description={features.cloud.description}
            className="text-left items-start"
          />
        </div>

        <div className="mt-8 sm:mt-10">
          <LearnMoreButton
            text={learnMore}
            defaultPath="/clinic-management-software"
            frenchPath="/fr/logiciel-consultation-esthetique"
          />
        </div>
      </div>
    </SectionWithImage>
  );
}
