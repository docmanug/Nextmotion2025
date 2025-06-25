"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

function useManagerFeature3Messages() {
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

  return { messages, contactFormLink };
}

function SectionItem({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-[20px] font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-[18px] leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function SectionList({ t }: { t: (key: string) => string }) {
  const sections = [
    "newPatients",
    "revenue",
    "stock",
    "appointmentSources",
    "unpaid",
    "revenueForecast",
    "performance",
  ];
  return (
    <div className="space-y-8">
      {sections.map((key) => (
        <SectionItem
          key={key}
          title={t(`sections.${key}.title`)}
          description={t(`sections.${key}.description`)}
        />
      ))}
    </div>
  );
}

export default function Feature3() {
  const { messages, contactFormLink } = useManagerFeature3Messages();
  const t = useTranslations(messages?.manager?.features?.activityTracking || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <OptimizedImage
                src="/manager/icons/feature3.svg"
                alt="Feature 3 Icon"
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

            <SectionList t={t} />

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

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <OptimizedImage
                  src="/manager/manager_3.webp"
                  alt="Dashboard de suivi d'activité"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
