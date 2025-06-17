"use client";

import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { logos } from "@/public/logos";

// Duplicate logos for seamless loop
const duplicatedLogos = [...logos, ...logos];

export default function LogoSlider() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16 leading-tight">
          Approved by 1000 clinics and practitioners worldwide
        </h2>
        
        <div className="relative">
          {/* Add a gradient overlay on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Logo slider container */}
          <div className="relative overflow-hidden py-8">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <OptimizedImage
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 