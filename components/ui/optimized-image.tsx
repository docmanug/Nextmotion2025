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
  // Provide better default `sizes` only when using `fill`, otherwise respect CSS width/height
  const imageProps: any = { ...props };
  if (imageProps.fill && !imageProps.sizes) {
    imageProps.sizes = "(min-width: 1024px) 50vw, 100vw";
  }
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
      {...imageProps}
    />
  );
} 