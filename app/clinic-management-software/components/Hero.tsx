"use client";

import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Hero() {
  const [messages, setMessages] = useState<any>(null);
  const [contactFormLink, setContactFormLink] = useState("/contact_form");

  useEffect(() => {
    setContactFormLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/formulaire_contact"
        : "/contact_form"
    );
  }, []);
  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.clinicManagementSoftware?.hero || {});

  if (!messages) return null;

  return (
    <div className="relative pt-[120px] sm:pt-[200px] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-white to-white -z-10" />
      <div className="max-w-[1300px] mx-auto px-4 sm:px-14">
        <div className="flex flex-col items-start gap-6 sm:gap-8 pt-0 pb-12 sm:pb-16">
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[700px]">
            <h1 className="text-[32px] sm:text-[50px] font-extrabold leading-tight text-gray-900">
              {t("title")}
            </h1>
            <p className="text-base sm:text-xl font-bold leading-relaxed text-black max-w-2xl">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href={contactFormLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] sm:text-base px-6 sm:px-8 py-3 h-auto rounded-full"
                >
                  {t("signUpDemoButton")}
                </Button>
              </Link>
              <Link
                href="https://youtu.be/5ppBRo2iFYg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-gray-900 border-2 border-black hover:bg-gray-50 font-semibold text-[15px] sm:text-base px-8 sm:px-12 py-3 h-auto rounded-full"
                >
                  {t("playVideoButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
