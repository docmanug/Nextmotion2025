"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface Metric {
  value: string;
  label: string;
  icon?: string;
}

interface ImpactSectionProps {
  title?: string;
  metrics: Metric[];
  className?: string;
}

export default function ImpactSection({
  title,
  metrics,
  className,
}: ImpactSectionProps) {
  return (
    <Section className={cn("py-16 sm:py-20 bg-gray-50", className)}>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D]">{title}</h2>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-8 shadow-md text-center"
          >
            {metric.icon && (
              <div className="text-3xl mb-4">{metric.icon}</div>
            )}
            <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3">{metric.value}</div>
            <p className="text-lg text-gray-700">{metric.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}