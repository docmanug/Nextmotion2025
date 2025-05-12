"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [learnMoreLink, setLearnMoreLink] = useState("/before-after");

  useEffect(() => {
    setLearnMoreLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/photos-avant-apres"
        : "/before-after"
    );
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 sm:gap-12 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Image
                src="/icons/mobile.svg"
                alt="Mobile Icon"
                width={60}
                height={60}
                className="w-[70px] h-[70px] sm:w-[60px] sm:h-[60px] text-blue-600"
              />

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {title}
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-[18px] font-[700] text-gray-900 mb-4 sm:mb-6">
              {subtitle}
            </p>

            <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed text-gray-600 mb-8 sm:mb-10">
              {description}
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  {features.standardization.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed text-gray-600">
                  {features.standardization.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  {features.experience.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed text-gray-600">
                  {features.experience.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  {features.automation.title}
                </h3>
                <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed text-gray-600">
                  {features.automation.description}
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link href={learnMoreLink}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-[2px] border-[#284fe6] text-black-600 bg-transparent
 hover:bg-blue-50 rounded-lg px-6 sm:px-8 py-3 text-[14px] sm:text-[16px] font-semibold h-auto"
                >
                  {learnMore}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Nextmotion Capture App Screenshot"
                width={800}
                height={1000}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
