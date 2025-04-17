"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Tracy Cohen",
    role: "CEO Clinique des Champs Elysées",
    quote: "The best digitalisation tool for clinics",
    image: "/testimonials/tracy-cohen.jpg",
  },
  {
    name: "Dr. Nabila Azib",
    role: "Plastic Surgeon, Rabat",
    quote: "A must have for your marketing",
    image: "/testimonials/nabila-azib.jpg",
  },
  {
    name: "Dr. Constantin Stan",
    role: "Plastic surgeon from Bucharest",
    quote: "NextMotion is a part of my workflow now. My patients love it!",
    image: "/testimonials/constantin-stan.jpg",
  },
  {
    name: "Pr. Jean Paul Meningaud",
    role: "Head of Plastic Surgery, Henri Mondor Hospital in France",
    quote: "A wonderful tool that helps a lot to document my clinical cases",
    image: "/testimonials/jean-paul-meningaud.jpg",
  },
  {
    name: "Dr. Rolf Bartsch",
    role: "Plastic Surgeon from Vienna",
    quote: "A must have for any plastic surgeon",
    image: "/testimonials/rolf-bartsch.jpg",
  },
  {
    name: "Dr. Ali Pirayesh",
    role: "Plastic surgeon from Amsterdam",
    quote: "The complete NextMotion solution has changed the way I work",
    image: "/testimonials/ali-pirayesh.jpg",
  },
];

// Split testimonials into two rows
const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3);

export default function TestimonialSlider() {
  const controlsFirstRow = useAnimationControls();
  const controlsSecondRow = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await Promise.all([
        controlsFirstRow.start({
          x: [0, -100 * firstRow.length],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        }),
        controlsSecondRow.start({
          x: [-100 * secondRow.length, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        }),
      ]);
    };

    startAnimation();
  }, [controlsFirstRow, controlsSecondRow]);

  return (
    <section className="py-24 bg-[#051238] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            What other professionals have to say about us
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Using our technology also means being part of a medical community
            committed to sharing knowledge and making digital practices
            accessible to all
          </p>
          <Button
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#051238] transition-colors rounded-md px-8 py-2"
            onClick={() =>
              window.open("/contact_form", "_blank", "noopener,noreferrer")
            }
          >
            Contact Us
          </Button>
        </div>

        <div className="space-y-8">
          {/* First Row - Left to Right */}
          <div className="relative">
            <motion.div className="flex gap-6" animate={controlsFirstRow}>
              {[...firstRow, ...firstRow, ...firstRow].map(
                (testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[400px] min-h-[200px] bg-white rounded-2xl p-8 shadow-lg flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#051238] text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#051238] italic flex-grow">
                      "{testimonial.quote}"
                    </p>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <motion.div className="flex gap-6" animate={controlsSecondRow}>
              {[...secondRow, ...secondRow, ...secondRow].map(
                (testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[400px] min-h-[200px] bg-white rounded-2xl p-8 shadow-lg flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#051238] text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#051238] italic text-lg flex-grow">
                      "{testimonial.quote}"
                    </p>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
