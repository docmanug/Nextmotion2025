"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

  const t = useTranslations(messages?.injectorRobot?.hero || {});

  if (!messages) return null;

  return (
    <section className="relative h-[500px] sm:h-[600px] bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/sixth/sixth_bg.png"
        alt="Robotic Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-48">
        <div className="max-w-xl">
          <span className="text-white font-medium uppercase tracking-wider text-sm sm:text-base mb-3 sm:mb-4 block">
            {t("label")}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            {t("description")}
          </p>
          <Link
            href="https://www.youtube.com/watch?v=TC9AmqU3o6w"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-6 sm:px-8 py-4 sm:py-6 rounded-md text-base sm:text-lg w-full sm:w-auto">
              {t("button")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent pointer-events-none"></div>

      {/* Circular Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-60 hidden sm:block">
        <div className="relative w-full h-full">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] border-2 border-[#0066FF]/20 rounded-full"></div>
          <div className="absolute right-10 sm:right-20 top-1/2 -translate-y-1/2 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] border-2 border-[#0066FF]/30 rounded-full"></div>
          <div className="absolute right-20 sm:right-40 top-1/2 -translate-y-1/2 w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] border-2 border-[#0066FF]/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
