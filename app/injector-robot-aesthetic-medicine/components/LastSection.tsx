"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function LastSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.injectorRobot?.lastSection || {});

  if (!messages) return null;

  const resources = [
    {
      type: t("resources.useCases.type"),
      title: t("resources.useCases.title"),
      image: "/usecases.png",
      redirect:"/fr/cas-clients"
    },
    {
      type: t("resources.ebook.type"),
      title: t("resources.ebook.title"),
      image: "/ebook.png",
      redirect:"https://pages.nextmotion.net/ebook-digital-consultation"
    },
    {
      type: t("resources.events.type"),
      title: t("resources.events.title"),
      image: "/events.png",
      redirect:"https://pages.nextmotion.net/ebook-digital-consultation"
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-10">
          {resources.map((resource, index) => (
            <a
              href={resource.redirect}
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow cursor-pointer max-w-[380px] w-full mx-auto block"
            >
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src={resource.image}
                  alt={resource.type}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[16px] font-medium text-[#0045FF] tracking-wide mb-2">
                {resource.type}
              </div>
              <h3 className="text-[24px] font-bold text-[#000B45] leading-snug">
                {resource.title}
              </h3>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className=" border-2 border-[#0045FF] text-[#0045FF] hover:bg-[#0045FF] hover:text-white px-8 py-3 h-auto text-base font-semibold transition-colors"
          >
            {t("button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
