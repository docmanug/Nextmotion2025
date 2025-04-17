"use client";

import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Video/Image Container */}
          <div className="relative w-full max-w-4xl aspect-video mb-10 sm:mb-16">
            <Image
              src="/eighth/3d_img.png"
              alt="3D Anatomy Model Demonstration"
              fill
              className="object-cover rounded-lg sm:rounded-2xl"
              priority
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <div className="w-0 h-0 border-t-6 sm:border-t-7 md:border-t-8 border-t-transparent border-l-10 sm:border-l-11 md:border-l-12 border-l-[#0066FF] border-b-6 sm:border-b-7 md:border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center max-w-3xl px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1650EF] mb-3 sm:mb-4">
              A mindblowing 3D anatomy model
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#081F4D]">
              designed by aesthetics practicioners
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
