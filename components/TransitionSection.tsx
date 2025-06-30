"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface TransitionSectionProps {
  title: string;
  description: string;
  className?: string;
}

export default function TransitionSection({
  title,
  description,
  className,
}: TransitionSectionProps) {
  return (
    <Section className={cn("py-16", className)}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#081F4D] mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </Section>
  );
}