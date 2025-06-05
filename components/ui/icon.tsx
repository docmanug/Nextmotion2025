import { cn } from "@/lib/utils";
import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

const sizeClasses = {
  sm: "w-8 h-8 sm:w-10 sm:h-10",
  md: "w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]",
  lg: "w-16 h-16 sm:w-20 sm:h-20",
};

export function Icon({
  src,
  alt,
  size = "md",
  className,
  priority = false,
}: IconProps) {
  const isSvg = src.endsWith(".svg");

  if (isSvg) {
    return (
      <div className={cn("relative", sizeClasses[size], className)}>
        <Image
          src={src}
          alt={alt}
          width={70}
          height={70}
          className="w-full h-full"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority={priority}
      />
    </div>
  );
} 