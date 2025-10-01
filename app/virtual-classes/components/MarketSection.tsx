"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function MarketSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.virtualClasses?.market || {});

  if (!messages) return null;

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF4FF] rounded-full mb-4 sm:mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-xs sm:text-sm">
                {t("label")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#081F4D] mb-4 sm:mb-6 leading-tight">
              {t("title")}
            </h2>

            <p className="text-base sm:text-lg text-[#4A5567] leading-relaxed mb-6 sm:mb-8">
              {t("description")}
            </p>

            <Link href="/">
              <Button className="w-full sm:w-auto bg-[#0066FF] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                {t("downloadButton")}
              </Button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <div className="relative w-full h-full max-w-[400px] sm:max-w-[500px] lg:max-w-[550px] mx-auto">
              <OptimizedImage
                src="/training.webp"
                alt="Training"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
