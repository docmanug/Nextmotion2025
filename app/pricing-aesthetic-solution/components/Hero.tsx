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

  const t = useTranslations(messages?.pricing?.hero || {});

  if (!messages) return null; // Or a loading state

  return (
    <section className="pt-24 sm:pt-40 pb-4 sm:pb-5 bg-[#F8FAFF]">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6 leading-tight">
            {t("title")}
            <br />
            <span>{t("subtitle")}</span>
            <span className="text-[#284fe6]">{t("highlight1")}</span>
            <span>{t("subtitle2")}</span>
            <span className="text-[#284fe6]">{t("highlight2")}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
