"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations, getMessages } from "@/utils/i18n";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Feature3() {
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
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <OptimizedImage
                src="/fourth/icons/feature3.svg"
                alt="Feature 3 Icon"
                width={60}
                height={60}
                className="w-[70px] h-[70px] text-blue-600"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t("agendaOnlineBookingReminders.feature3.title")}
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              {t("agendaOnlineBookingReminders.feature3.description")}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t(
                    "agendaOnlineBookingReminders.feature3.features.reminders.title"
                  )}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t(
                    "agendaOnlineBookingReminders.feature3.features.reminders.description"
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  {t(
                    "agendaOnlineBookingReminders.feature3.features.tracking.title"
                  )}
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {t(
                    "agendaOnlineBookingReminders.feature3.features.tracking.description"
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
                  {t("agendaOnlineBookingReminders.feature3.bookDemoButton")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <OptimizedImage
                  src="/fourth/feature3.webp"
                  alt={t("agendaOnlineBookingReminders.feature3.imageAlt")}
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
