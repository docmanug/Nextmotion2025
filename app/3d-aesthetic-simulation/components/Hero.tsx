"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Hero() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.threeDAestheticSimulation?.hero || {});

  if (!messages) return null; // Or a loading state

  return (
    <div className="relative h-[500px] sm:h-[550px] md:h-[600px]">
      <video
        src="https://f.hubspotusercontent10.net/hubfs/6086964/Nextmotion_2020/Videos/Videoheaderhome%20and%203Dsd.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081F4D]/60 to-[#081F4D]/50" />

      {/* Hero Content */}
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center h-full">
            <div className="pt-[80px] sm:pt-[90px] md:pt-[100px] text-center sm:text-left">
              <div className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wider mb-3 sm:mb-4">
                {t("label")}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                {t("title")}
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg mx-auto sm:mx-0">
                {t("description")}
              </p>
            </div>

            <div className="relative hidden lg:block">
              {/* Face overlay and vertical bars with icons will be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
