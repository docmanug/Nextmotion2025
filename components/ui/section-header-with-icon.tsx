import { cn } from "@/lib/utils";
import { Icon } from "./icon";

interface SectionHeaderWithIconProps {
  icon: string;
  iconAlt: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  iconSize?: "sm" | "md" | "lg";
}

export function SectionHeaderWithIcon({
  icon,
  iconAlt,
  title,
  subtitle,
  description,
  className,
  iconClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  iconSize = "md",
}: SectionHeaderWithIconProps) {
  return (
    <div className={cn("", className)}>
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <Icon
          src={icon}
          alt={iconAlt}
          size={iconSize}
          className={cn("text-blue-600", iconClassName)}
        />
        <h2 className={cn("text-2xl sm:text-3xl font-bold text-gray-900", titleClassName)}>
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className={cn("text-[18px] font-[700] text-gray-900 mb-6", subtitleClassName)}>
          {subtitle}
        </p>
      )}

      {description && (
        <p className={cn("text-[18px] leading-relaxed text-gray-600 mb-10", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
} 