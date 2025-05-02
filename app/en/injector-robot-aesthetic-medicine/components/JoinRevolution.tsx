"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function JoinRevolution() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.injectorRobot?.revolution || {});

  if (!messages) return null;

  return (
    <section className="py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1650EF] rounded-[20px] sm:rounded-[32px] px-6 sm:px-12 py-10 sm:py-16">
          <div className="max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t("title")}
            </h2>

            <p className="text-base sm:text-[18px] leading-relaxed text-white/90 mb-6 sm:mb-8">
              {t("description")}
            </p>

            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white text-[#1650EF] hover:bg-white/90 rounded-lg px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-[16px] font-semibold h-auto"
              >
                {t("button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
