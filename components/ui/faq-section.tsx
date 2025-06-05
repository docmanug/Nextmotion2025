"use client";

import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "./section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Icon } from "./icon";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
  className?: string;
  background?: "white" | "gray" | "blue";
  padding?: "sm" | "md" | "lg";
  animate?: boolean;
}

const paddingClasses = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
};

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  animate,
}: FAQ & {
  isOpen: boolean;
  onClick: () => void;
  animate: boolean;
}) {
  const content = (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex items-center justify-between w-full py-6 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <Icon
          src="/icons/chevron-down.svg"
          alt="Toggle"
          size="sm"
          className={cn(
            "transform transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}

export function FAQSection({
  title,
  subtitle,
  faqs,
  className,
  background = "white",
  padding = "md",
  animate = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      className={cn(paddingClasses[padding], className)}
      background={background}
    >
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
            animate={animate}
          />
        ))}
      </div>
    </Section>
  );
} 