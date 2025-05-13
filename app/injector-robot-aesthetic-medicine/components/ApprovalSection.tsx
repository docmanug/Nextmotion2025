"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function ApprovalSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.injectorRobot?.approval || {});

  if (!messages) return null;

  return (
    <section className="py-10 pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-6">
            {t("title")}
          </h2>
          <p className="text-[#4A5567] text-lg">{t("description")}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <div className="mb-6">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-sm">
                {t("solutions.capture.label")}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#081F4D] mb-6">
              {t("solutions.capture.title")}
            </h3>

            <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
              <Image
                src="/fifth/approaval_capture.png"
                alt="NextMotion Capture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <div className="mb-6">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-sm">
                {t("solutions.consult.label")}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#081F4D] mb-6">
              {t("solutions.consult.title")}
            </h3>

            <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
              <Image
                src="/fifth/approaval_consult.png"
                alt="NextMotion Consult"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <div className="mb-6">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-sm">
                {t("solutions.3d.label")}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#081F4D] mb-6">
              {t("solutions.3d.title")}
            </h3>

            <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
              <Image
                src="/fifth/approaval_3d.png"
                alt="NextMotion 3D"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
