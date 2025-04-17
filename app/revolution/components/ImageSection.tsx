"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ImageSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Section */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] sm:aspect-video rounded-lg sm:rounded-2xl overflow-hidden">
          <Image
            src="/seventh/rev_image.png"
            alt="Virtual Classes Overview"
            fill
            className="object-cover"
            priority
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
              <div className="w-0 h-0 border-t-[8px] sm:border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[14px] sm:border-l-[16px] md:border-l-[20px] border-l-[#0066FF] border-b-[8px] sm:border-b-[10px] md:border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
