"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useEffect, useState } from "react";

export default function Feature4() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.marketingPage?.feature4 || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/marketing/marketing_4.png"
                  alt={t("imageAlt")}
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Image
                src="/third/icons/camera.png"
                alt="Feature 4 Icon"
                width={60}
                height={60}
                className="w-[70px] h-[70px] text-blue-600"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t("title")}
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              {t("description")}
            </p>

            <div className="space-y-8">
              {Array.isArray(messages?.marketingPage?.feature4?.sections) &&
                messages.marketingPage.feature4.sections.map(
                  (section: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                        {section.title}
                      </h3>
                      <p className="text-[18px] leading-relaxed text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
