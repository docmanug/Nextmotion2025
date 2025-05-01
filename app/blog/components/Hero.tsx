"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";

export default function Hero() {
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

  const t = useTranslations(messages?.blog?.hero || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#EAF0F6]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-20">
        <h1 className="text-[#1650EF] text-4xl md:text-4xl font-bold mb-8">
          {t("title")}
        </h1>

        <p className="text-[#081F4D] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
