"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CaptureSection() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/second/easeofuse.png"
                  alt="Mobile Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Ease of use</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
            Easily capture flawless before/after photos with NM Capture on
your iPhone or iPad. Achieve professional-quality results with high-
speed workflows and advanced standardization tools—perfect for
aesthetic clinics.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Photo Capture</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                Capture standardized images directly from your iPhone or iPad.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Speed and Simplicity</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                Take photos quickly and efficiently, automatically synced to patient
                records and available across all your devices.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Professional Results</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                Get high-quality standardized photos with our exclusive "color
                control" and "ghost image" technologies.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[2px] border-[#284fe6] text-black-600 bg-transparent
hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
              >
                Book a demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Nextmotion Capture App Screenshot"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 