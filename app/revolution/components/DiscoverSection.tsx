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
}: {
  title: string;
  imageSrc: string;
  isPhone?: boolean;
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white h-[400px] w-full shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="relative h-full w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover ${isPhone ? "object-contain px-12" : ""}`}
        />
        <div className="absolute bottom-8 left-8">
          <h3 className="text-[#081F4D] text-[28px] font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default function DiscoverSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.revolution?.route?.discover || {});

  if (!messages) return null;

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
          <Link
            href={
              window.location.pathname.startsWith("/fr")
                ? "/fr/photos-avant-apres"
                : "/before-after"
            }
            className="w-full"
          >
            <DiscoverCard
              title={t("cards.capture.title")}
              imageSrc="/seventh/discovery_1.jpg"
              isPhone={true}
            />
          </Link>
          <Link
            href={
              window.location.pathname.startsWith("/fr")
                ? "/fr/3d-simulation-esthetique"
                : "/3d-aesthetic-simulation"
            }
            className="w-full"
          >
            <DiscoverCard
              title={t("cards.3d.title")}
              imageSrc="/second/part2.jpg"
              isPhone={true}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
