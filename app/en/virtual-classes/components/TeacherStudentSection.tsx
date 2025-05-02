"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function TeacherStudentSection() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.virtualClasses || {});

  if (!messages) return null;

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 group">
          {/* Teacher Card */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50 hover:!opacity-100">
            <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF4FF] rounded-full mb-4 sm:mb-5">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-xs sm:text-sm">
                {t("teacher.label")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#081F4D] mb-4 sm:mb-5 leading-tight">
              {t("teacher.title")}
            </h2>

            <p className="text-[#4A5567] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {t("teacher.description")}
            </p>

            <Link
              href={
                window.location.pathname.startsWith("/fr")
                  ? "/fr/formulaire_contact"
                  : "/contact_form"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-white text-[#0066FF] border border-[#0066FF] px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-50 text-sm sm:text-base">
                {t("teacher.button")}
              </Button>
            </Link>
          </div>

          {/* Student Card */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50 hover:!opacity-100">
            <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF4FF] rounded-full mb-4 sm:mb-5">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-xs sm:text-sm">
                {t("student.label")}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#081F4D] mb-4 sm:mb-5 leading-tight">
              {t("student.title")}
            </h2>

            <p className="text-[#4A5567] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {t("student.description")}
            </p>

            <Link
              href={
                window.location.pathname.startsWith("/fr")
                  ? "/fr/formulaire_contact"
                  : "/contact_form"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-white text-[#0066FF] border border-[#0066FF] px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-50 text-sm sm:text-base">
                {t("student.button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
