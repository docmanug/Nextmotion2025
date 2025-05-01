"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";

export default function Hero() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.podcast?.hero || {});

  if (!messages) return null;

  return (
    <section className="bg-[#051238] min-h-[400px] sm:min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10">
          <div className="lg:w-1/2 pt-4 sm:pt-8 text-center lg:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-[54px] font-bold leading-[1.1]">
              {t("title")}
            </h1>
          </div>

          <div className="lg:w-[45%] w-full">
            <div className="relative w-full rounded-2xl overflow-hidden max-w-[420px] mx-auto">
              <img
                src="/podcast/podcast_hero.png"
                alt="Podcast Discussion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                  aria-label="Play podcast"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white ml-1 sm:w-6 sm:h-6"
                  >
                    <path
                      d="M8 5.14v14.72a1 1 0 001.5.87l11-7.36a1 1 0 000-1.74l-11-7.36a1 1 0 00-1.5.87z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
