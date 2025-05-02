"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Nextmotion Revolution App Screenshot"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/icons/icon_revolution.png"
                  alt="Revolution Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
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
                  {features.innovation.title}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {features.innovation.description}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {features.integration.title}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {features.integration.description}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {features.results.title}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {features.results.description}
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
        </div>
      </div>
    </section>
  );
}
