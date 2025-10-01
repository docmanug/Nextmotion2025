"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
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

  const t = useTranslations(messages?.virtualClasses?.hero || {});

  if (!messages) return null;

  return (
    <div className="relative h-[500px] sm:h-[600px]">
      <OptimizedImage
        src="/fifth/virtual_classes_bg.webp"
        alt="Virtual Classes Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081F4D]/60 to-[#081F4D]/50" />

      {/* Hero Content */}
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center h-full">
            <div className="pt-[60px] sm:pt-[100px]">
              <div className="text-sm font-medium text-white/80 uppercase tracking-wider mb-3 sm:mb-4">
                {t("label")}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {t("title")}
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg">
                {t("description")}
              </p>
              <Link
                href={
                  window.location.pathname.startsWith("/fr")
                    ? "/fr/contact"
                    : "/en/contact"
                }
              >
                <Button className="w-full sm:w-auto bg-[#0066FF] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-600">
                  {t("contactButton")}
                </Button>
              </Link>
            </div>

            <div className="relative">
              {/* Face overlay and vertical bars with icons will be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
