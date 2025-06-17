"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { OptimizedVideo } from "@/components/ui/optimized-video";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Feature9() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.clinicManagementSoftware?.feature9 || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative w-full max-w-[600px] mx-auto">
              <OptimizedVideo
                src="/clinic/cas.mp4"
                className="w-full h-auto rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <div className="lg:max-w-[400px]">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <OptimizedImage
                src="/third/icons/feature9.svg"
                alt="Feature 9 Icon"
                width={70}
                height={70}
                className="w-[70px] h-[70px] text-blue-600"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t("title")}
              </h2>
            </div>

            <p className="text-[16px] leading-relaxed text-gray-600">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
