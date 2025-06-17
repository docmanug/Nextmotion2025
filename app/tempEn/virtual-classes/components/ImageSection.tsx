"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";

export default function ImageSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Video Section */}
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden">
          <OptimizedImage
            src="/fifth/video_bg.webp"
            alt="Virtual Classes Overview"
            fill
            className="object-cover"
            priority
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#0066FF] border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 