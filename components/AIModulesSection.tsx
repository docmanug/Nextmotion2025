"use client";

import { Section } from "@/components/ui/section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface AIModule {
  icon: string;
  title: string;
  description: string;
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  image?: string;
}

interface AIModulesSectionProps {
  title: string;
  subtitle: string;
  modules: AIModule[];
  className?: string;
}

export default function AIModulesSection({
  title,
  subtitle,
  modules,
  className,
}: AIModulesSectionProps) {
  return (
    <Section id="ai-modules" className={cn("py-16 sm:py-24", className)}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      
      <div className="space-y-16">
        {modules.map((module, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
          >
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{module.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{module.title}</h3>
              </div>
              
              <p className="text-lg text-gray-600">{module.description}</p>
              
              <ul className="space-y-3">
                {module.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {module.testimonial && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-6">
                  <p className="text-gray-600 italic mb-2">&quot;{module.testimonial.quote}&quot;</p>
                  <p className="text-sm font-medium">
                    {module.testimonial.author}
                    {module.testimonial.role && (
                      <span className="text-gray-500"> — {module.testimonial.role}</span>
                    )}
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              {module.image ? (
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <OptimizedImage
                    src={module.image}
                    alt={module.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg h-[300px] sm:h-[400px] flex items-center justify-center">
                  <span className="text-gray-400">Image placeholder</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}