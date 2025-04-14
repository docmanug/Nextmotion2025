"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CapabilitiesSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/sixth/capa_bg.png"
        alt="LENA Capabilities Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#081F4D]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Label */}
          <span className="text-[#0066FF] font-medium uppercase tracking-wider mb-4 block">
            IMCAS 2023
          </span>

          {/* Title */}
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet LENA and its capabilities
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8">
            NextMotion team would be more than pleased to meet you during IMCAS Paris 2023
          </p>

          {/* Feature Point */}
          <div className="flex items-start gap-3 mb-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 mt-1"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#0066FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16L16 12L12 8"
                stroke="#0066FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#0066FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-lg text-gray-300">
              You'll be able to attend live demo of LENA performing injections on a human's silicon face
            </p>
          </div>

          {/* CTA Button */}
          <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-6 rounded-full text-lg">
            Play The Video
          </Button>
        </div>
      </div>
    </section>
  );
} 