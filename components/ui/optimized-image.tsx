import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "loading"> {
  loading?: "lazy" | "eager";
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  loading,
  className,
  priority = false,
  quality = 75,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : loading || "lazy"}
      className={cn("transition-opacity duration-300", className)}
      quality={quality}
      priority={priority}
      {...props}
    />
  );
} 