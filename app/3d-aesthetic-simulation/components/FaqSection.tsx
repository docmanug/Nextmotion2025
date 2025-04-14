"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer, isOpen, onClick, number }: { 
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
          className={`text-black w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-8 pb-6 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "How much does the application license cost?",
      answer: "Our pricing is structured to provide maximum value for medical professionals. Please contact our sales team for detailed pricing information tailored to your specific needs and requirements."
    },
    {
      question: "Does the application work on Android and iOS?",
      answer: "Currently, the application is optimized for iOS devices (iPad and iPhone) to ensure the highest quality augmented reality experience. We are continuously working on expanding platform support."
    },
    {
      question: "Is the anatomy displayed on the screen specific to my patient?",
      answer: "Yes, the 3D anatomic model adapts to your patient's face in real-time using advanced AR technology. This creates a personalized visualization that accurately reflects your patient's unique facial structure."
    },
    {
      question: "Can I use the application on a computer?",
      answer: "The AR features of the application require a mobile device (iPad/iPhone) for the best experience. However, you can access certain features and manage your account through our web platform on your computer."
    }
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
      </div>
    </section>
  );
} 