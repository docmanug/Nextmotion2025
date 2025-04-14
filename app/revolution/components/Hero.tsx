"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-[#F8FAFC] pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Label */}
          <span className="text-[#0066FF] font-medium uppercase tracking-widest mb-4 block">
            NEXTMOTION REVOLUTION
          </span>

          {/* Title */}
          <h1 className="text-[2.75rem] font-bold text-[#081F4D] mb-6 leading-tight">
            Nextmotion Revolution for<br />
            Unmatched Aesthetic Photos
          </h1>

          {/* Description */}
          <p className="text-lg text-[#4A5567]">
            Discover Nextmotion Revolution for Unmatched Aesthetic Photos
          </p>
        </div>
      </div>
    </section>
  );
}