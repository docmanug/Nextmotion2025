"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/sixth/sixth_bg.png"
        alt="Robotic Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
        <div className="max-w-xl">
          <span className="text-white font-medium uppercase tracking-wider mb-4 block">
            ROBOTICS
          </span>
          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            The world's first autonomous injector robot with AI for aesthetic medicine
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Meet LENA, the first injector robot self-piloted with artificial intelligence, dedicated to aesthetic medicine
          </p>
          <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-6 rounded-md text-lg">
            Play The Video
          </Button>
        </div>
      </div>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent pointer-events-none"></div>
      
      {/* Circular Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-60">
        <div className="relative w-full h-full">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-[#0066FF]/20 rounded-full"></div>
          <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-[#0066FF]/30 rounded-full"></div>
          <div className="absolute right-40 top-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-[#0066FF]/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}