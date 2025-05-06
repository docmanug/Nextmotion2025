"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function MarketSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.virtualClasses?.market || {});

  if (!messages) return null;

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF4FF] rounded-full mb-4 sm:mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-xs sm:text-sm">
                {t("label")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#081F4D] mb-4 sm:mb-6 leading-tight">
              {t("title")}
            </h2>

            <p className="text-base sm:text-lg text-[#4A5567] leading-relaxed mb-6 sm:mb-8">
              {t("description")}
            </p>

            <Link href="/">
              <Button className="w-full sm:w-auto bg-[#0066FF] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                {t("downloadButton")}
              </Button>
            </Link>
          </div>

          {/* Right Side - Features Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  {t("features.easy")}
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  {t("features.oneToOne")}
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  {t("features.custom")}
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  {t("features.growth")}
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  {t("features.formats")}
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  {t("features.congresses")}
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  {t("features.webinars")}
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  {t("features.cost")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
