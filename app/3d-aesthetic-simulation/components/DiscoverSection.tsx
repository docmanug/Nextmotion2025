"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useState, useEffect } from "react";

const DiscoverCard = ({
  title,
  imageSrc,
  isPhone = false,
  href,
}: {
  title: string;
  imageSrc: string;
  isPhone?: boolean;
  href: string;
}) => {
  return (
    <Link href={href} className="block">
      <div className="relative rounded-3xl overflow-hidden bg-white h-[300px] w-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]">
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={`object-cover ${isPhone ? "object-contain px-12" : ""}`}
          />
          <div className="absolute bottom-6 left-8">
            <h3 className="text-[#081F4D] text-[28px] font-bold">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
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

  const t = useTranslations(
    messages?.threeDAestheticSimulation?.discover || {}
  );

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#081F4D] mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <DiscoverCard
              title={t("cards.0.title")}
              imageSrc="/seventh/discovery_1.jpg"
              isPhone={true}
              href={
                window.location.pathname.startsWith("/fr")
                  ? "/fr/photos-avant-apres"
                  : "/before-after"
              }
            />
          </div>
          <div className="w-full">
            <DiscoverCard
              title={t("cards.1.title")}
              imageSrc="/eighth/part1.jpg"
              href={
                window.location.pathname.startsWith("/fr")
                  ? "/fr/logiciel-consultation-esthetique"
                  : "/clinic-management-software"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
