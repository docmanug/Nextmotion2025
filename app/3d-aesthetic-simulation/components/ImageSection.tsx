"use client";

import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function ImageSection() {
  const [translations, setTranslations] = useState<any>(null);
  const [isFrench, setIsFrench] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Get locale from URL path
        const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
        const messages = await getMessages(locale);

        if (messages?.threeDAestheticSimulation?.imageSection) {
          setTranslations(messages.threeDAestheticSimulation.imageSection);
        }
        setIsFrench(locale === "fr");
      } catch (error) {
        console.error("Failed to load translations:", error);
        // Keep default English translations on error
      }
    };
    loadTranslations();
  }, []);

  if (!translations) return null;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Video Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl mb-10 sm:mb-16">
            <iframe
              src={
                isFrench
                  ? "https://www.youtube.com/embed/CILpFl28cfM"
                  : "https://www.youtube.com/embed/LIZQ9LJmcXo"
              }
              title="3D Aesthetic Simulation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>

          {/* Text Content */}
          <div className="text-center max-w-3xl px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1650EF] mb-3 sm:mb-4">
              {translations.title}
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#081F4D]">
              {translations.subtitle}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
