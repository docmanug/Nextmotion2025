"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

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
    <div className="border border-gray-100 rounded-2xl border border-[#006BCC26] bg-white shadow-sm mb-4">
      <button
        className="w-full px-8 py-6 text-left flex justify-between items-center"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <span className="text-[#081F4D] text-lg font-bold">{question}</span>
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

  const faqs: FaqItem[] = [
    {
      question:
        "Do I need the NextMotion Revolution machine to use NM Capture?",
      answer:
        "The NextMotion Capture app can be used with or without the NextMotion Revolution.\n\nCombined with the NextMotion Revolution, you will be able to make dynamic 180° or 360° videos around your patient with a maximum level of standardization.\n\nFrom these videos it will be possible to extract comparative photos from any angle.\n\nFind more explanations from our dedicated page.",
    },
    {
      question: "Can I subscribe to NextMotion 3D only?",
      answer:
        "The answer is yes. Just download Nextmotion 3D and subscribe from the app. If you already have a NextMotion Consult or Capture account, you will find the list of your patients directly in the NextMotion 3D application.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#081F4D] mb-2">
            You have <span className="text-[#1650EF]">questions ?</span>
          </h2>
          <p className="text-3xl text-[#081F4D] font-bold">
            We have the answers
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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

        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-[#081F4D] mb-6">
            You have more questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Call us or send us an email. We will get back to you on the next
            working day.
          </p>
          <a
            href="tel:+33767728137"
            className="text-[#1650EF] text-2xl font-semibold hover:underline"
          >
            (+33) 7 67 72 81 37
          </a>
        </div>
      </div>
    </section>
  );
}
