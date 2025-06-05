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
  standardization: Feature;
  experience: Feature;
  automation: Feature;
}

interface CaptureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: Features;
  learnMore: string;
}

export default function CaptureSection({
  title,
  subtitle,
  description,
  features,
  learnMore,
}: CaptureSectionProps) {
  return (
    <SectionWithImage
      imageSrc="/capture-app-demo.png"
      imageAlt="Nextmotion Capture App Screenshot"
      background="gray"
      imagePriority
    >
      <div>
        <SectionHeaderWithIcon
          icon="/icons/mobile.svg"
          iconAlt="Mobile Icon"
          title={title}
          subtitle={subtitle}
          description={description}
        />

        <div className="space-y-6 sm:space-y-8">
          <FeatureCard
            title={features.standardization.title}
            description={features.standardization.description}
            className="text-left items-start"
          />
          <FeatureCard
            title={features.experience.title}
            description={features.experience.description}
            className="text-left items-start"
          />
          <FeatureCard
            title={features.automation.title}
            description={features.automation.description}
            className="text-left items-start"
          />
        </div>

        <div className="mt-8 sm:mt-10">
          <LearnMoreButton
            text={learnMore}
            defaultPath="/before-after"
            frenchPath="/fr/photos-avant-apres"
          />
        </div>
      </div>
    </SectionWithImage>
  );
}
