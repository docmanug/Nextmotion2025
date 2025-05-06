"use client";

import Image from "next/image";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

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

  const t = useTranslations(messages?.chainesPage?.solutionsSection || {});

  if (!messages) return null;

  const solutions = [
    {
      icon: "/third/icons/contract.png",
      title: t("solutions.0.title"),
    },
    {
      icon: "/third/icons/signature.png",
      title: t("solutions.1.title"),
    },
    {
      icon: "/third/icons/leaderboard.png",
      title: t("solutions.2.title"),
    },
    {
      icon: "/third/icons/graph.png",
      title: t("solutions.3.title"),
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
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center">
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
          ))}
        </div>
      </div>
    </section>
  );
}
