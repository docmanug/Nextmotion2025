"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";

export default function Hero() {
  const [messages, setMessages] = useState<any>(null);
  const t = useTranslations(messages || {});

  useEffect(() => {
    const loadMessages = async () => {
      const locale =
        typeof window !== "undefined" &&
        window.location.pathname.startsWith("/fr")
          ? "fr"
          : "en";
      try {
        const msgs = await import(`../../../../messages/${locale}.json`).then(
          (m) => m.default
        );
        setMessages(msgs?.marketingPage?.hero ? msgs.marketingPage.hero : {});
      } catch (error) {
        console.error("Failed to load messages:", error);
        // Fallback to empty object if messages can't be loaded
        setMessages({});
      }
    };
    loadMessages();
  }, []);

  if (!messages) return null;

  return (
    <div className="relative pt-[100px] sm:pt-[200px] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-white to-white -z-10" />
      <div className="max-w-[1300px] mx-auto px-4 sm:px-14">
        <div className="flex flex-col items-start gap-6 sm:gap-8 pt-0 pb-8 sm:pb-16">
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[700px]">
            <h1 className="text-3xl sm:text-[50px] font-extrabold leading-tight text-gray-900">
              {t("title")}
            </h1>
            <p className="text-lg sm:text-xl font-bold leading-relaxed text-black max-w-2xl">
              {t("description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 h-auto rounded-full"
                >
                  {t("button")}
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
                  className="text-gray-900 border-2 border-black hover:bg-gray-50 font-semibold text-base px-12 py-3 h-auto rounded-full"
                >
                  {t("videoButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
