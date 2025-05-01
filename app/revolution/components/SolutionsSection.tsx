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

  const t = useTranslations(messages?.revolution?.route?.solutions || {});

  if (!messages) return null;

  const solutions = [
    {
      icon: "/seventh/icons/robot_icon.png",
      title: t("features.robot.title"),
    },
    {
      icon: "/seventh/icons/automated_icon.png",
      title: t("features.automation.title"),
    },
    {
      icon: "/seventh/icons/camera_icon.png",
      title: t("features.videos.title"),
    },
    {
      icon: "/seventh/icons/quality_icon.png",
      title: t("features.quality.title"),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4 sm:mb-8">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto px-4">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={70}
                  height={70}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
