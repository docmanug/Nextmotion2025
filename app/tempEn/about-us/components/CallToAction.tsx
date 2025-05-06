"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTranslations } from "@/utils/i18n";
import { getMessages } from "@/utils/i18n";

export default function CallToAction() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.aboutUs?.callToAction || {});

  if (!messages) return null;

  const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
  const contactPath = `/${locale}/contact`;

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-[#081F4D] text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          {t("title.prefix")}
          <span className="text-[#1650EF]"> {t("title.highlight")} </span>
          {t("title.suffix")}
        </h2>

        <Link href={contactPath} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#1650EF] text-white font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl hover:bg-transparent hover:text-[#1650EF] hover:border hover:border-[#1650EF]">
            {t("button")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
