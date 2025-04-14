"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <Image
        src="/fifth/virtual_classes_bg.png"
        alt="Virtual Classes Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081F4D]/60 to-[#081F4D]/50" />
      
      {/* Hero Content */}
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <div className="pt-[100px]">
              <div className="text-sm font-medium text-white/80 uppercase tracking-wider mb-4">
                NEXTMOTION 3D
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
              Empower Your Consultations with
              Augmented Reality
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
              Nextmotion 3D lets you visualize anatomical layers in real-time, educate your
patients with interactive tools, and enhance trust with cutting-edge
technology.
              </p>
            </div>
            
            <div className="relative">
              {/* Face overlay and vertical bars with icons will be added here */}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}