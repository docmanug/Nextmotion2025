"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function RevolutionSection() {
  const [messages, setMessages] = useState<any>(null);
  const [contactFormLink, setContactFormLink] = useState("/contact_form");

  useEffect(() => {
    setContactFormLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/formulaire_contact"
        : "/contact_form"
    );
  }, []);
  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.beforeAfter?.revolution || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <OptimizedImage
                src="/dynamvideos.webp"
                alt={t("appScreenshotAlt")}
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <OptimizedImage
                src="/second/video_icon.svg"
                alt="Revolution Icon"
                width={60}
                height={60}
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
                  {t("features.details.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.details.description")}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.outcomes.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.outcomes.description")}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t("features.comparison.title")}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t("features.comparison.description")}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href={contactFormLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  {t("demoButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
