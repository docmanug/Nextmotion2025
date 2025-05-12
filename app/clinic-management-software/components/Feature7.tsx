"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Feature7() {
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

  const t = useTranslations(messages?.clinicManagementSoftware?.feature7 || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-3xl mx-auto">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Image
              src="/third/icons/feature7.svg"
              alt="Feature 7 Icon"
              width={60}
              height={60}
              className="w-[70px] h-[70px] text-blue-600"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t("title")}
            </h2>
          </div>

          <p className="text-[18px] leading-relaxed text-gray-600 mb-8">
            {t("description")}
          </p>

          <p className="text-[18px] leading-relaxed text-gray-600 mb-8">
            {t("note")}
          </p>

          <div className="mb-8">
            <Link
              href={contactFormLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] sm:text-base px-6 sm:px-8 py-3 h-auto rounded-full"
              >
                {t("startDemoButton")}
              </Button>
            </Link>
          </div>

          <div className="w-full max-w-[800px] mx-auto mt-4">
            <Image
              src="/third/feature7.png"
              alt="Treatment Records Showcase"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
