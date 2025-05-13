"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Feature5() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.revolution?.route?.feature5 || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <img
                src="/seventh/icons/rev_5_icon.svg"
                alt="Feature 5 Icon"
                className="w-[70px] h-[70px] sm:w-[60px] sm:h-[60px] text-blue-600"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t("title")}
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              {t("description")}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.trust.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.trust.description")}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.engagement.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.engagement.description")}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.angles.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.angles.description")}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.comparisons.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.comparisons.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <video
              src="/revolution/video_after.mp4"
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
