"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "@/utils/i18n";
import { useEffect } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqItem = ({
  question,
  answer,
  isOpen,
  onClick,
  number,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  number: number;
}) => {
  return (
    <div className="border-gray-100 rounded-2xl border border-[#006BCC26] bg-white shadow-sm mb-4">
      <button
        className="w-full px-8 py-6 text-left flex justify-between items-center"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <span className="text-black text-lg font-semibold">{number}.</span>
          <span className="text-[#081F4D] text-lg font-semibold">
            {question}
          </span>
        </div>
        <ChevronRight
          className={`text-black w-6 h-6 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && <div className="px-8 pb-6 text-gray-600">{answer}</div>}
    </div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [messages, setMessages] = useState<any>(null);
  const t = useTranslations(messages);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await import(`@/messages/${locale}.json`);
      setMessages(msgs.default.beforeAfter.faq);
    };
    loadMessages();
  }, []);

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#081F4D] mb-2">
            {t("title.part1")}{" "}
            <span className="text-[#1650EF]">{t("title.part2")}</span>
          </h2>
          <p className="text-3xl text-[#081F4D] font-bold">
            {t("title.part3")}
          </p>
        </div>

        <div className="space-y-4">
          {t("items").map((faq: any, index: number) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
