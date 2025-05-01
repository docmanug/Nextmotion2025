"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function EngageSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.beforeAfter?.engage || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/second/engage_icon.png"
                  alt={t("engageIconAlt")}
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{t("title")}</h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              {t("description")}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.socialMedia.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.socialMedia.description")}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.consent.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.consent.description")}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.webLinks.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.webLinks.description")}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Engage Showcase"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
