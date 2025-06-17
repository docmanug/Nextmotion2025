"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";
import { OptimizedImage } from "@/components/ui/optimized-image";

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

  const t = useTranslations(messages?.contact?.hero || {});

  if (!messages) return null;

  const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
  const contactPath = `/${locale}/contact`;

  return (
    <section className="bg-[#F3F8FD] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
              <p className="text-[#1650EF] font-medium">{t("label")}</p>
              <h1 className="text-[42px] leading-[1.2] font-semibold text-[#0B1C39]">
                {t("title")}
              </h1>
              <p className="text-gray-600 text-lg">{t("subtitle")}</p>
              <div className="flex justify-center lg:justify-start">
                <Link href={contactPath}>
                  <Button className="bg-[#1650EF] text-white hover:bg-[#1345D1] px-8 py-3 h-auto text-base font-semibold">
                    {t("button")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="w-[480px] aspect-[4/2] rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/contact/contact_hero.webp"
                alt="NextMotion Team Contact"
                width={480}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
