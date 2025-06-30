"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface Challenge {
  icon: string;
  title: string;
  description: string;
}

interface ChallengesSectionProps {
  title: string;
  challenges: Challenge[];
  className?: string;
}

export default function ChallengesSection({
  title,
  challenges,
  className,
}: ChallengesSectionProps) {
  return (
    <Section className={cn("py-16 sm:py-20", className)}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-2xl mb-4">{challenge.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
            <p className="text-gray-600">{challenge.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}