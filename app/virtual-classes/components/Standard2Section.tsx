"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";
import { processBoldText } from "@/utils/text";

export default function Standard2Section() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.virtualClasses?.hardware || {});

  if (!messages) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[350px] lg:h-[450px] order-2 lg:order-1">
            <div className="relative w-full h-full max-w-[550px] mx-auto">
              <OptimizedImage
                src="/fifth/standard_2.webp"
                alt="Virtual Classes Hardware"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="max-w-xl order-1 lg:order-2">
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-sm">
                {t("label")}
              </span>
            </div>

            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-5 leading-tight">
              {t("title")}
            </h2>

            <div className="text-[#4A5567] text-lg leading-relaxed">
              {processBoldText(t("description"))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
