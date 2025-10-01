"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

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

  const t = useTranslations(
    messages?.threeDAestheticSimulation?.standardSection || {}
  );

  if (!messages) return null;

  // Function to process markdown-style bold text
  const processBoldText = (text: string) => {
    return text.split("**").map((part, index) =>
      index % 2 === 1 ? (
        <span key={index} className="font-bold text-[#081F4D]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="py-2 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <OptimizedImage
              src="/eighth/3d_1.webp"
              alt={t("imageAlt")}
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-[#EEF4FF] rounded-full px-4 py-1 mb-6">
              <span className="text-[#1650EF] text-sm font-medium uppercase tracking-widest">
                {t("label")}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1650EF] mb-6">
              {t("title")}
            </h2>

            <div className="space-y-6 text-black">
              <p className="text-md leading-relaxed">
                {processBoldText(t("description1"))}
              </p>

              <p className="text-md leading-relaxed">
                {processBoldText(t("description2"))}
              </p>

              <p className="text-md leading-relaxed">
                {processBoldText(t("description3"))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
