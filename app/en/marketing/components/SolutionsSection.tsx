"use client";

import Image from "next/image";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useEffect, useState } from "react";

export default function SolutionsSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.marketingPage?.solutionsSection || {});

  if (!messages) return null;

  const translations =
    messages?.marketingPage?.solutionsSection?.solutions || [];

  const solutions = [
    {
      icon: "/marketing/icons/sl_1.png",
      title: translations[0]?.title || "NM Capture",
    },
    {
      icon: "/marketing/icons/sl_2.png",
      title: translations[1]?.title || "Marketing emails",
    },
    {
      icon: "/marketing/icons/sl_3.png",
      title: translations[2]?.title || "Automations",
    },
    {
      icon: "/marketing/icons/sl_4.png",
      title: translations[3]?.title || "Performances analysis",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-8">
            {t("title")}
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {solutions.map(
            (solution: { icon: string; title: string }, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 w-16 h-16">
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    width={70}
                    height={70}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {solution.title}
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
