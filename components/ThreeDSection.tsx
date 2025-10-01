"use client";

import { SectionWithImage } from "@/components/ui/section-with-image";
import { FeatureCard } from "@/components/ui/feature-card";
import { LearnMoreButton } from "@/components/ui/learn-more-button";
import { SectionHeaderWithIcon } from "@/components/ui/section-header-with-icon";

interface ThreeDSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: {
    simulation: {
      title: string;
      description: string;
    };
    visualization: {
      title: string;
      description: string;
    };
    planning: {
      title: string;
      description: string;
    };
  };
  learnMore: string;
}

export default function ThreeDSection({
  title,
  subtitle,
  description,
  features,
  learnMore,
}: ThreeDSectionProps) {
  return (
    <SectionWithImage
      imageSrc="/3d_anatomy.webp"
      imageAlt="Nextmotion 3D App Screenshot"
      background="gray"
      imagePriority
    >
      <div>
        <SectionHeaderWithIcon
          icon="/icons/3d.svg"
          iconAlt="3D Icon"
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <div className="space-y-8">
          <FeatureCard
            title={features.simulation.title}
            description={features.simulation.description}
            className="text-left items-start"
          />
          <FeatureCard
            title={features.visualization.title}
            description={features.visualization.description}
            className="text-left items-start"
          />
          <FeatureCard
            title={features.planning.title}
            description={features.planning.description}
            className="text-left items-start"
          />
        </div>

        <div className="mt-10">
          <LearnMoreButton
            text={learnMore}
            defaultPath="/3d-aesthetic-simulation"
            frenchPath="/fr/3d-aesthetic-simulation"
          />
        </div>
      </div>
    </SectionWithImage>
  );
}
