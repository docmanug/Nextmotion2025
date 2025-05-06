"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function CapabilitiesSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.injectorRobot?.capabilities || {});

  if (!messages) return null;

  return (
    <section className="relative min-h-[600px] sm:min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/sixth/capa_bg1.jpg"
        alt="LENA Capabilities Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <div className="max-w-xl">
          {/* Label */}
          <span className="text-white font-medium uppercase tracking-wider text-sm sm:text-base mb-3 sm:mb-4 block">
            {t("label")}
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {t("title")}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8">
            {t("description")}
          </p>

          {/* Feature Point */}
          <div className="flex items-start gap-2 sm:gap-3 mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-200">{t("feature")}</p>
          </div>

          {/* CTA Button */}
          <Link
            href="https://www.youtube.com/watch?v=TC9AmqU3o6w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:w-auto bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-base sm:text-lg">
              {t("button")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
