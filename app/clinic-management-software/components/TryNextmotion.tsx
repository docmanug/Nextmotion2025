"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

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

  const t = useTranslations(
    messages?.clinicManagementSoftware?.tryNextmotion || {}
  );

  if (!messages) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1650EF] rounded-[32px] px-12 py-16">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold text-white mb-6">{t("title")}</h2>

            <p className="text-[18px] leading-relaxed text-white/90 mb-8">
              {t("description")}
            </p>

            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-blue-700 hover:text-white text-blue-700 font-semibold text-[15px] sm:text-base px-6 sm:px-8 py-3 h-auto rounded-md"
              >
                {t("reserveDemoButton")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
