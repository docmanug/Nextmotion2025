"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useTranslations } from "@/utils/i18n";
import { getMessages } from "@/utils/i18n";
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

  const t = useTranslations(messages?.aboutUs?.hero || {});

  if (!messages) return null;

  const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
  const contactPath = `/${locale}/contact`;

  return (
    <section className="pt-20 sm:pt-32 pb-16 sm:pb-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <div className="text-[#284fe6] font-medium mb-3 sm:mb-4">
              {t("label")}
            </div>
            <h1 className="text-3xl sm:text-[40px] font-bold text-[#051238] leading-tight mb-4 sm:mb-6">
              {t("title")}
            </h1>
            <p className="text-[#051238] text-base sm:text-lg opacity-80 mb-6 sm:mb-8">
              {t("description")}
            </p>
            <Link href={contactPath} target="_blank" rel="noopener noreferrer">
              <Button className="bg-transperant hover:bg-[#1650EF] hover:text-white text-[#284fe6] font-semibold px-6 py-2.5 border-2 border-[#284fe6] rounded-md">
                {t("demoButton")}
              </Button>
            </Link>
          </div>
          <div className="relative w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] md:pr-10">
            <OptimizedImage
              src="/about/about_logo.webp"
              alt="NextMotion Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
