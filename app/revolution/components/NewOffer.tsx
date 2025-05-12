"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function NewOffer() {
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

  const t = useTranslations(messages?.revolution?.route?.newOffer || {});

  if (!messages) return null;

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background Image */}
          <Image
            src="/seventh/new_offer_bg.png"
            alt={t("bgAlt")}
            fill
            className="object-cover"
            priority
          />

          {/* Content */}
          <div className="relative z-10 py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <Image
                src="/seventh/new_offer_logo.png"
                alt={t("logoAlt")}
                width={64}
                height={64}
                className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              {t("title")}
            </h2>

            {/* Main Offer Text */}
            <p className="text-lg sm:text-xl text-white mb-3 sm:mb-4">
              {t("description")}
            </p>

            {/* Availability Text */}
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 opacity-90">
              {t("availability")}
            </p>

            {/* Price Button */}
            <Link
              href={contactFormLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors">
                {t("price")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
