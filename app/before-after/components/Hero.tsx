"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
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

  const t = useTranslations(messages?.beforeAfter?.hero || {});

  if (!messages) return null; // Or a loading state

  return (
    <section className="bg-[#F3F8FD]">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 md:pl-16 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="text-[#0045FF] text-[16px] md:text-[20px] tracking-wider font-medium mb-3 md:mb-4">
              {t("subtitle")}
            </div>
            <h1 className="text-[26px] md:text-[30px] lg:text-[35px] font-bold text-[#000B45] leading-tight mb-6">
              {t("title")}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={contactFormLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#0045FF] hover:bg-[#0035CC] text-white font-semibold px-8 py-3 h-auto rounded-full"
                >
                  {t("getStartedButton")}
                </Button>
              </Link>
              <Link
                href={contactFormLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#0045FF] text-[#0045FF] hover:bg-[#0045FF] hover:text-white px-8 py-3 h-auto rounded-full"
                >
                  {t("bookDemoButton")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full max-w-[300px] md:max-w-[400px] mx-auto mt-6 md:mt-12">
              <OptimizedImage
                src="/capture-app-demo.webp"
                alt={t("imageAlt")}
                width={400}
                height={533}
                className="w-full rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
