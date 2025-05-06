"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Feature1() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.manager?.features?.patientJourney || {});

  if (!messages) return null;

  return (
    <section className="py-12 sm:py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-blue-100 rounded-full p-2 sm:p-3">
                <Image
                  src="/manager/icons/manager_1_icon.png"
                  alt="Patient Icon"
                  width={60}
                  height={60}
                  className="text-blue-600 w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t("title")}
              </h2>
            </div>

            <p className="text-base sm:text-[18px] leading-relaxed text-gray-600 mb-6 sm:mb-10">
              {t("description")}
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  {t("sections.patientList.title")}
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  {t("sections.patientList.description")}
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  {t("sections.predefinedSteps.title")}
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  {t("sections.predefinedSteps.description")}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  {t("sections.journeyFilters.title")}
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  {t("sections.journeyFilters.description")}
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  {t("demoButton")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <Image
                src="/manager/manager_1.png"
                alt="Nextmotion Capture App Screenshot"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
