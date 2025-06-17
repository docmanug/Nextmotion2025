import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon?: string;
  title: string;
  description?: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
  children,
}: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {icon && (
        <div className={cn("mb-3 sm:mb-4 w-12 sm:w-16 h-12 sm:h-16", iconClassName)}>
          <OptimizedImage
            src={icon}
            alt={title}
            width={70}
            height={70}
            className="w-full h-full"
          />
        </div>
      )}
      <h3 className={cn("text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900", titleClassName)}>
        {title}
      </h3>
      {description && (
        <p className={cn("mt-2 text-base text-gray-600", descriptionClassName)}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
} 