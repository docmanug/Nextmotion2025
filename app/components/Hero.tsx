"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-[120px] pb-24 bg-gradient-to-br from-white via-[#F8F9FF] to-[#F0F3FF]">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="max-w-[580px]">
          <h1 className="text-[52px] leading-[1.15] font-extrabold text-gray-900 mb-5">
            Transform Your Aesthetic Practice with Nextmotion
          </h1>
          
          <p className="text-[17px] leading-[1.5] text-gray-600 mb-8">
            Explore our cutting-edge tools designed to enhance your consultations, standardize your results, and engage your patients like never before
          </p>
          
          <div className="flex items-center gap-4">
            <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-[15px] font-medium px-7 py-3 rounded-full h-auto min-w-[160px]">
              Schedule a demo
            </Button>
            <Button variant="outline" className="border border-gray-300 bg-white text-gray-900 hover:bg-gray-50/50 text-[15px] font-medium px-7 py-3 rounded-full h-auto min-w-[160px]">
              Watch video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 