"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useEffect, useState } from "react";

export default function TryNextmotion() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.pricing?.tryNextmotion || {});

  if (!messages) return null;

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1650EF] rounded-[32px] px-6 sm:px-12 py-8 sm:py-16">
          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              {t("title")}
            </h2>

            <p className="text-base sm:text-[18px] leading-relaxed text-white/90 mb-6 sm:mb-8">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1650EF] rounded-md px-6 py-2 flex items-center gap-2 font-bold">
                  {t("buttons.demo")}
                </Button>
              </Link>
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1650EF] rounded-md px-6 py-2 flex items-center gap-2 font-bold">
                  {t("buttons.contact")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
