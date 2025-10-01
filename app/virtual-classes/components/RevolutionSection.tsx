"use client";

import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function RevolutionSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.virtualClasses?.revolution || {});

  if (!messages) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[300px] rounded-2xl overflow-hidden">
          {/* Background Image */}
          <OptimizedImage
            src="/fifth/rev_bg.webp"
            alt="Revolution Background"
            fill
            className="object-cover"
            priority
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {t("title")}
              </h2>

              <p className="text-white/90 text-lg mb-8">{t("description")}</p>

              <Link
                href={
                  window.location.pathname.startsWith("/fr")
                    ? "/fr/formulaire_contact"
                    : "/contact_form"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-black hover:text-[#0066FF] hover:bg-white px-8 py-3 rounded-lg text-lg font-medium">
                  {t("button")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
