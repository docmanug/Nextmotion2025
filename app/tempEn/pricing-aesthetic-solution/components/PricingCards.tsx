"use client";

import { useEffect, useState } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";

export default function PricingCards() {
  const [messages, setMessages] = useState<any>(null);
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

  useEffect(() => {
    const loadMessages = async () => {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    };
    loadMessages();
  }, [currentLocale]);

  const t = useTranslations(messages);

  if (!messages) return null;

  const pricingData = [
    {
      title: t("pricing.cards.capture.title"),
      description: t("pricing.cards.capture.description"),
      price: t("pricing.cards.capture.price"),
      period: t("pricing.cards.capture.period"),
      note: t("pricing.cards.capture.note"),
      image: "/pricing/pricing_capture.webp",
      features: [
        t("pricing.cards.capture.features.feature1"),
        t("pricing.cards.capture.features.feature2"),
        t("pricing.cards.capture.features.feature3"),
      ],
    },
    {
      title: t("pricing.cards.3d.title"),
      description: t("pricing.cards.3d.description"),
      price: t("pricing.cards.3d.price"),
      period: t("pricing.cards.3d.period"),
      note: t("pricing.cards.3d.note"),
      image: "/pricing/pricing_3d.webp",
      features: [
        t("pricing.cards.3d.features.feature1"),
        t("pricing.cards.3d.features.feature2"),
        t("pricing.cards.3d.features.feature3"),
      ],
    },
    {
      title: t("pricing.cards.revolution.title"),
      description: t("pricing.cards.revolution.description"),
      price: t("pricing.cards.revolution.price"),
      image: "/pricing/pricing_revolution.webp",
      features: [
        t("pricing.cards.revolution.features.feature1"),
        t("pricing.cards.revolution.features.feature2"),
        t("pricing.cards.revolution.features.feature3"),
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {pricingData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              <div className="flex flex-col items-center md:flex-row gap-6 sm:gap-8">
                <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39]">
                    {card.title}
                  </h2>
                  <p className="text-[#005FA6] text-base sm:text-lg font-semibold">
                    {card.description}
                  </p>

                  <div className="flex items-baseline justify-center md:justify-start">
                    <span className="text-3xl sm:text-4xl font-bold text-[#0B1C39]">
                      {card.price} {card.period}
                    </span>
                  </div>

                  {card.note && (
                    <p className="text-sm sm:text-md text-gray-500">
                      {card.note}
                    </p>
                  )}

                  <div className="flex justify-center md:justify-start">
                    <Link
                      href="/contact_form"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#284fe6] hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg">
                        {t("pricing.cards.demoButton")}
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 w-full md:w-auto">
                  <div className="relative h-[200px] sm:h-[300px] w-full bg-[#284fe6] rounded-lg overflow-hidden">
                    <OptimizedImage
                      src={card.image}
                      alt={`${card.title} Interface`}
                      fill
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
