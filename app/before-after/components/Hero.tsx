"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F3F8FD]">
      <div className="max-w-[1300px] mx-auto px-6 pl-16 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="text-[#0045FF] text-[20px] tracking-wider font-medium mb-4">NEXTMOTION CAPTURE</div>
            <h1 className="text-[30px] lg:text-[35px] font-bold text-[#000B45] leading-tight mb-6">
              Nextmotion Capture: Redefining Aesthetic Photography
            </h1>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full max-w-[400px] mx-auto mt-12">
              <Image 
                src="/capture-app-demo.png"
                alt="Nextmotion Capture Interface"
                width={400}
                height={533}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}