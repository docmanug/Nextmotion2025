import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "./section";
import { ReactNode } from "react";

interface LogoSliderSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "blue";
  showGradient?: boolean;
  gradientColor?: "white" | "gray" | "blue";
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
};

const gradientColors = {
  white: "from-white",
  gray: "from-gray-50",
  blue: "from-blue-50",
};

export function LogoSliderSection({
  title,
  subtitle,
  children,
  className,
  background = "white",
  showGradient = true,
  gradientColor = "white",
  padding = "md",
}: LogoSliderSectionProps) {
  return (
    <Section className={cn(paddingClasses[padding], className)} background={background}>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="relative mt-8 sm:mt-12">
        {showGradient && (
          <>
            <div className={cn(
              "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r",
              gradientColors[gradientColor],
              "to-transparent z-10"
            )} />
            <div className={cn(
              "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l",
              gradientColors[gradientColor],
              "to-transparent z-10"
            )} />
          </>
        )}
        <div className="relative">
          {children}
        </div>
      </div>
    </Section>
  );
} 