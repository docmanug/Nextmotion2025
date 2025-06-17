"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function SolutionsSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.beforeAfter?.solutions || {});

  if (!messages) return null; // Or a loading state

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-8">
            {t("title")}
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-16 h-16">
              <OptimizedImage
                src="/second/solutions/light.webp"
                alt={t("lighting")}
                width={70}
                height={70}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              {t("lighting")}
            </h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-16 h-16">
              <OptimizedImage
                src="/second/solutions/color.webp"
                alt={t("colors")}
                width={70}
                height={70}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              {t("colors")}
            </h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-16 h-16">
              <OptimizedImage
                src="/second/solutions/position.webp"
                alt={t("positioning")}
                width={70}
                height={70}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              {t("positioning")}
            </h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 w-16 h-16">
              <OptimizedImage
                src="/second/solutions/picture.webp"
                alt={t("pictures")}
                width={70}
                height={70}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              {t("pictures")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
