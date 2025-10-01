import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "./section";
import { Grid } from "./grid";
import { TestimonialCard } from "./testimonial-card";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
  background?: "white" | "gray" | "blue";
  cols?: 1 | 2 | 3;
  gap?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
};

export function TestimonialSection({
  title,
  subtitle,
  testimonials,
  className,
  background = "white",
  cols = 3,
  gap = "md",
  padding = "md",
}: TestimonialSectionProps) {
  return (
    <Section
      className={cn(paddingClasses[padding], className)}
      background={background}
    >
      <SectionHeader title={title} subtitle={subtitle} />
      <Grid cols={cols} gap={gap} className="mt-8 sm:mt-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            animate={true}
          />
        ))}
      </Grid>
    </Section>
  );
} 