"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CapabilitiesSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/sixth/capa_bg1.jpg"
        alt="LENA Capabilities Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-xl">
          {/* Label */}
          <span className="text-white font-medium uppercase tracking-wider mb-4 block">
            IMCAS 2023
          </span>

          {/* Title */}
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Meet LENA and its capabilities
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8">
            NextMotion team would be more than pleased to meet you during IMCAS Paris 2023
          </p>

          {/* Feature Point */}
          <div className="flex items-start gap-3 mb-12">
            <p className="text-lg text-gray-200">
              You'll be able to attend live demo of LENA performing injections on a human's silicon face
            </p>
          </div>

          {/* CTA Button */}
          <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white pt-10 px-8 py-3 rounded-md text-lg">
            Play The Video
          </Button>
        </div>
      </div>
    </section>
  );
} 