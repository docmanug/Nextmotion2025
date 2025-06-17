"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SolutionsSection() {
  const [messages, setMessages] = useState<any>(null);
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

  useEffect(() => {
    const loadMessages = async () => {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    };
    loadMessages();
  }, [currentLocale]);

  const t = useTranslations(messages || {});

  if (!messages) return null;

  const solutions = [
    {
      icon: "/third/icons/contract.webp",
      title: t("agendaOnlineBookingReminders.solutions.items.paperless.title"),
      alt: t("agendaOnlineBookingReminders.solutions.items.paperless.alt"),
    },
    {
      icon: "/third/icons/signature.webp",
      title: t("agendaOnlineBookingReminders.solutions.items.signature.title"),
      alt: t("agendaOnlineBookingReminders.solutions.items.signature.alt"),
    },
    {
      icon: "/third/icons/leaderboard.webp",
      title: t("agendaOnlineBookingReminders.solutions.items.business.title"),
      alt: t("agendaOnlineBookingReminders.solutions.items.business.alt"),
    },
    {
      icon: "/third/icons/graph.webp",
      title: t(
        "agendaOnlineBookingReminders.solutions.items.optimization.title"
      ),
      alt: t("agendaOnlineBookingReminders.solutions.items.optimization.alt"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-8">
            {t("agendaOnlineBookingReminders.solutions.title")}
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto">
            {t("agendaOnlineBookingReminders.solutions.description")}
          </p>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto mt-6">
            {t("agendaOnlineBookingReminders.solutions.description2")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 w-16 h-16">
                <OptimizedImage
                  src={solution.icon}
                  alt={solution.alt}
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
