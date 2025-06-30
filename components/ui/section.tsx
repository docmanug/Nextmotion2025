import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "blue";
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  background = "white",
  id,
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-blue-50",
  };

  return (
    <section 
      id={id}
      className={cn("py-12 sm:py-16 lg:py-20", backgroundClasses[background], className)}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-10 sm:mb-16", className)}>
      <h2 className={cn("text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F4D] mb-4 sm:mb-8", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto px-4", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}