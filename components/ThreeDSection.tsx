"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [learnMoreLink, setLearnMoreLink] = useState(
    "/3d-aesthetic-simulation"
  );

  useEffect(() => {
    setLearnMoreLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/3d-aesthetic-simulation"
        : "/3d-aesthetic-simulation"
    );
  }, []);

  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Image
                src="/icons/3d.svg"
                alt="3D Icon"
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
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {features.simulation.title}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {features.simulation.description}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {features.visualization.title}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {features.visualization.description}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {features.planning.title}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {features.planning.description}
                </p>
              </div>
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

          <div className="relative">
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Nextmotion 3D App Screenshot"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
