"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { LogoSliderSection } from "@/components/ui/logo-slider-section";

interface LogoSliderProps {
  title: string;
  subtitle: string;
  logos?: string[];
  speed?: number;
  pauseOnHover?: boolean;
  showGradient?: boolean;
  gradientColor?: "white" | "gray" | "blue";
}

export default function LogoSlider({
  title,
  subtitle,
  logos = [
    "tMJGK9-g.webp",
    "nk7M6BJw.webp",
    "jMUIOX4A.webp",
    "gfTR_RmA.webp",
    "a_vl1iBw.webp",
    "RaBIxjqQ.webp",
  ],
  speed = 30,
  pauseOnHover = true,
  showGradient = true,
  gradientColor = "white",
}: LogoSliderProps) {
  return (
    <LogoSliderSection
      title={title}
      subtitle={subtitle}
      showGradient={showGradient}
      gradientColor={gradientColor}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-8 sm:space-x-12"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Icon
                src={`/logos/${logo}`}
                alt={`Logo ${index + 1}`}
                size="md"
                className="w-full h-full"
              />
            </motion.div>
          ))}
          {logos.map((logo, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-24 sm:w-32 h-12 sm:h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Icon
                src={`/logos/${logo}`}
                alt={`Logo ${index + 1}`}
                size="md"
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </LogoSliderSection>
  );
}
