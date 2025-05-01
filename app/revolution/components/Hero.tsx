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

  const t = useTranslations(messages?.revolution?.route?.hero || {});

  if (!messages) return null; // Or a loading state

  return (
    <section className="bg-[#F8FAFC] pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto sm:mx-0">
          {/* Label */}
          <div className="text-[#0066FF] font-medium uppercase tracking-widest text-sm sm:text-base mb-3 sm:mb-4 block text-center sm:text-left">
            {t("label")}
          </div>

          {/* Title */}
          <h1 className="text-[1.5rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold text-[#081F4D] mb-4 sm:mb-6 leading-tight text-center sm:text-left">
            {t("title")}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#4A5567] text-center sm:text-left">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
