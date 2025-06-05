"use client";

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

  const t = useTranslations(messages?.pricing?.hero || {});

  if (!messages) return null; // Or a loading state

  return (
    <section className="pt-24 sm:pt-40 pb-4 sm:pb-5 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6 leading-tight">
            {t("title")}{" "}
            <span className="text-[#284fe6]">{t("highlight")}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
