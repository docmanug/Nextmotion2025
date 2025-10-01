import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "./section";
import { Grid } from "./grid";
import { motion } from "framer-motion";
import { Icon } from "./icon";

interface Stat {
  value: string | number;
  label: string;
  icon?: string;
  iconAlt?: string;
  prefix?: string;
  suffix?: string;
}

interface StatsSectionProps {
  title: string;
  subtitle?: string;
  stats: Stat[];
  className?: string;
  background?: "white" | "gray" | "blue";
  cols?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
  animate?: boolean;
}

const paddingClasses = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
};

function StatCard({ stat, animate }: { stat: Stat; animate: boolean }) {
  const content = (
    <div className="text-center">
      {stat.icon && (
        <div className="w-12 h-12 mx-auto mb-4">
          <Icon
            src={stat.icon}
            alt={stat.iconAlt || ""}
            size="md"
            className="w-full h-full"
          />
        </div>
      )}
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
        {stat.prefix && <span className="text-gray-500">{stat.prefix}</span>}
        {stat.value}
        {stat.suffix && <span className="text-gray-500">{stat.suffix}</span>}
      </div>
      <div className="text-lg text-gray-600">{stat.label}</div>
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

export function StatsSection({
  title,
  subtitle,
  stats,
  className,
  background = "white",
  cols = 4,
  gap = "md",
  padding = "md",
  animate = true,
}: StatsSectionProps) {
  return (
    <Section
      className={cn(paddingClasses[padding], className)}
      background={background}
    >
      <SectionHeader title={title} subtitle={subtitle} />
      <Grid cols={cols} gap={gap} className="mt-8 sm:mt-12">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} animate={animate} />
        ))}
      </Grid>
    </Section>
  );
} 