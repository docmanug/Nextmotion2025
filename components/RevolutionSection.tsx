"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/ui/feature-card";

interface RevolutionSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: {
    innovation: {
      title: string;
      description: string;
    };
    integration: {
      title: string;
      description: string;
    };
    results: {
      title: string;
      description: string;
    };
  };
  learnMore: string;
}

export default function RevolutionSection({
  title,
  subtitle,
  description,
  features,
  learnMore,
}: RevolutionSectionProps) {
  const [learnMoreLink, setLearnMoreLink] = useState("/revolution");

  useEffect(() => {
    setLearnMoreLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/revolution"
        : "/revolution"
    );
  }, []);

  return (
    <Section className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 flex items-center justify-center h-full">
          <div className="relative max-w-md mx-auto">
            <OptimizedImage
              src="/capturegirl.webp"
              alt="Nextmotion Revolution App Screenshot"
              width={800}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <OptimizedImage
              src="/icons/icon_revolution.svg"
              alt="Revolution Icon"
              width={60}
              height={60}
              className="w-[70px] h-[70px] sm:w-[60px] sm:h-[60px] text-blue-600"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {title}
            </h2>
          </div>

          <p className="text-[18px] font-[700] text-gray-900 mb-6">
            {subtitle}
          </p>

          <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
            {description}
          </p>

          <div className="space-y-8">
            <FeatureCard
              title={features.innovation.title}
              description={features.innovation.description}
              className="text-left items-start"
            />
            <FeatureCard
              title={features.integration.title}
              description={features.integration.description}
              className="text-left items-start"
            />
            <FeatureCard
              title={features.results.title}
              description={features.results.description}
              className="text-left items-start"
            />
          </div>

          <div className="mt-10">
            <Link href={learnMoreLink}>
              <Button
                variant="outline"
                size="lg"
                className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
              >
                {learnMore}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
