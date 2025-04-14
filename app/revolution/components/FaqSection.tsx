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
          <span className="text-black text-lg font-semibold">{number}.</span>
          <span className="text-[#081F4D] text-lg font-semibold">{question}</span>
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
      question: "Is the application available on Android?",
      answer: "Yes, our application is available on both Android and iOS platforms. You can download it from the Google Play Store for Android devices. We ensure full functionality and regular updates across both platforms."
    },
    {
      question: "What if I don't have an iPhone or iPad?",
      answer: "No worries! Our application is compatible with Android devices as well. You can use any modern smartphone or tablet running Android 8.0 or higher. Additionally, we offer web-based solutions for desktop users."
    },
    {
      question: "Can I import my personal photos into the application?",
      answer: "Yes, you can easily import your existing photos into the application. We support various image formats including JPEG, PNG, and HEIC. You can import photos from your device's gallery or directly from your camera."
    },
    {
      question: "Can I add my clinic's logo after cropping the patient's image?",
      answer: "Yes, you can customize your images by adding your clinic's logo. Our application includes a watermark feature that allows you to add your logo in various positions with adjustable size and opacity settings."
    },
    {
      question: "Is the IMCAS offer free?",
      answer: "The IMCAS offer includes a special trial period with access to premium features. While basic features are available for free, premium features require a subscription. Contact our sales team for current promotional offers and pricing details."
    },
    {
      question: "How much does the monthly subscription cost?",
      answer: "Our subscription plans are designed to be flexible and cost-effective. The monthly subscription starts at €99/month, with different tiers available based on your needs. We also offer annual plans at a discounted rate. Contact our sales team for detailed pricing and custom enterprise solutions."
    },
    {
      question: "I work in multiple clinics. Can I use the application anywhere?",
      answer: "Yes, absolutely! Our application is designed for mobility. You can use your account across multiple locations, and all your data syncs automatically. This makes it perfect for practitioners who work at different clinics or locations. Just log in to your account on any device to access all your photos and settings."
    },
    {
      question: "Can I view the before/after photos on a computer?",
      answer: "Yes, you can access your before/after photos on any computer through our web platform. We provide a seamless cross-platform experience, allowing you to capture photos on your mobile device and view, edit, or present them on your computer. The web interface offers additional features for presentation and patient consultation."
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