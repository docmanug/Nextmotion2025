"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

const DiscoverCard = ({
  title,
  imageSrc,
  isPhone = false,
  alt,
  href,
}: {
  title: string;
  imageSrc: string;
  isPhone?: boolean;
  alt: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="relative rounded-3xl overflow-hidden bg-white h-[400px] w-full shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className={`object-cover ${isPhone ? "object-contain px-12" : ""}`}
          />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-[#081F4D] text-[28px] font-bold">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function DiscoverSection() {
  const [messages, setMessages] = useState<any>(null);
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.clinicManagementSoftware?.discover || {});

  if (!messages) return null;

  const isFrenchdRoute = window.location.pathname.startsWith("/fr");
  const revolutionHref = isFrenchdRoute ? "/fr/before-after" : "/before-after";
  const threeDHref = isFrenchdRoute
    ? "/fr/simulation-esthetique-3d"
    : "/en/3d-aesthetic-simulation";

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <DiscoverCard
              title={t("cards.capture.title")}
              imageSrc="/seventh/discovery_1.jpg"
              alt={t("cards.capture.alt")}
              href={revolutionHref}
            />
          </div>
          <div className="w-full">
            <DiscoverCard
              title={t("cards.3d.title")}
              imageSrc="/second/part2.jpg"
              isPhone={true}
              alt={t("cards.3d.alt")}
              href="/3d-aesthetic-simulation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
