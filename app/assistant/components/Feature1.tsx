"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";
import type { FeatureSection } from './types';

function useAssistantFeature1Messages() {
  const [messages, setMessages] = useState<Record<string, any> | null>(null);
  const [isFrench, setIsFrench] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      setIsFrench(locale === "fr");
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  return { messages, isFrench };
}

function SectionList({ sections }: { sections: FeatureSection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-[20px] font-bold text-gray-900 mb-3">
            {section.title}
          </h3>
          <p className="text-[18px] leading-relaxed text-gray-600">
            {section.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Feature1() {
  const { messages, isFrench } = useAssistantFeature1Messages();
  const t = useTranslations(messages?.assistantPage?.feature1 || {});

  if (!messages) return null;

  const sections = (messages?.assistantPage?.feature1?.sections as FeatureSection[]) || [];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <OptimizedImage
                  src="/assistant/assistant_1.webp"
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
              <OptimizedImage
                src="/assistant/icons/feature1.svg"
                alt="Feature 1 Icon"
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

            <SectionList sections={sections} />

            <div className="mt-8 sm:mt-10">
              <Link
                href={isFrench ? "/fr/formulaire_contact" : "/contact_form"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  {t("button") || t("demoButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
