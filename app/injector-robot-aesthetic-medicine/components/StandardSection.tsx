"use client";

import Image from "next/image";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";
import { processBoldText } from "@/utils/text";

export default function StandardSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.injectorRobot?.standard || {});

  if (!messages) return null;

  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Image Column - Moved to top for mobile */}
          <div className="lg:order-last relative h-[400px] sm:h-[600px] flex items-center justify-center">
            <Image
              src="/sixth/standard_1.png"
              alt="LENA Robotic Arm"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Content Column */}
          <div className="max-w-xl">
            <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF4FF] rounded-full mb-4 sm:mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-xs sm:text-sm">
                {t("label")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-[2.5rem] font-bold text-[#0C5394] mb-4 sm:mb-5 leading-tight">
              {t("title")}
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-4 sm:space-y-6 text-[#081F4D]">
              <p className="text-base sm:text-lg leading-relaxed">
                {processBoldText(t("description1"))}
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                {processBoldText(t("description2"))}
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                {processBoldText(t("description3"))}
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                {processBoldText(t("description4"))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
