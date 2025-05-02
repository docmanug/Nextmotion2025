"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Feature1() {
  const [messages, setMessages] = useState<any>(null);
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

  useEffect(() => {
    const loadMessages = async () => {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    };
    loadMessages();
  }, [currentLocale]);

  const t = useTranslations(messages || {});

  if (!messages) return null;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex justify-center items-center">
              <Image
                src="/third/patient.png"
                alt={t("agendaOnlineBookingReminders.feature1.imageAlt")}
                width={800}
                height={1000}
                className="w-full h-auto max-w-[400px] sm:max-w-[600px]"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="bg-blue-100 rounded-full p-2 sm:p-3">
                <Image
                  src="/third/icons/camera.png"
                  alt={t("agendaOnlineBookingReminders.feature1.iconAlt")}
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t("agendaOnlineBookingReminders.feature1.title")}
              </h2>
            </div>

            <p className="text-base sm:text-[18px] leading-relaxed text-gray-600 mb-8 sm:mb-10">
              {t("agendaOnlineBookingReminders.feature1.description")}
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  {t(
                    "agendaOnlineBookingReminders.feature1.features.calendar.title"
                  )}
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  {t(
                    "agendaOnlineBookingReminders.feature1.features.calendar.description"
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  {t(
                    "agendaOnlineBookingReminders.feature1.features.notifications.title"
                  )}
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  {t(
                    "agendaOnlineBookingReminders.feature1.features.notifications.description"
                  )}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href={
                  currentLocale === "fr"
                    ? "/fr/formulaire_contact"
                    : "/contact_form"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  {t("agendaOnlineBookingReminders.feature1.bookDemoButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
