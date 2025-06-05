import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";
import { Section } from "./section";

interface SectionWithImageProps {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePriority?: boolean;
  imageClassName?: string;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "blue";
  imagePosition?: "left" | "right";
}

export function SectionWithImage({
  children,
  imageSrc,
  imageAlt,
  imagePriority = false,
  imageClassName,
  className,
  containerClassName,
  background = "white",
  imagePosition = "right",
}: SectionWithImageProps) {
  const contentOrder = imagePosition === "left" ? "order-2" : "order-1";
  const imageOrder = imagePosition === "left" ? "order-1" : "order-2";

  return (
    <Section className={className} background={background}>
      <div className={cn("grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 sm:gap-12 lg:gap-16 items-start", containerClassName)}>
        <div className={contentOrder}>
          {children}
        </div>

        <div className={cn("relative mt-8 lg:mt-0", imageOrder)}>
          <div className="relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={1000}
              className={cn("w-full h-auto rounded-lg", imageClassName)}
              priority={imagePriority}
            />
          </div>
        </div>
      </div>
    </Section>
  );
} 