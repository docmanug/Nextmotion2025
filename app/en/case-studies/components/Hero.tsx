"use client";

import { useTranslations, getMessages } from "@/utils/i18n";
import { useEffect, useState } from "react";

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

  const t = useTranslations(messages?.caseStudies?.hero || {});

  if (!messages) return null;

  return (
    <section className="bg-[#F3F8FD] pt-24 sm:pt-36 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#081F4D]">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-gray-600">{t("subtitle")}</p>
          <p className="text-base sm:text-lg font-semibold text-[#081F4D]">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
