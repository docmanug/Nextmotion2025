"use client";

import Image from "next/image";
import { Button } from "./ui/button";
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
                  src="/icons/mobile.png"
                  alt="Mobile Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Nextmotion Capture</h2>
            </div>
            
            <p className="text-[18px] font-[700] text-gray-900 mb-6">
              The ultimate tool for standardized patient photos and videos.
            </p>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Capture high-quality before-and-after images effortlessly. Manage your patient records with unlimited cloud storage and elevate your consultations with professional-grade tools.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Effortless Standardization</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Capture high-quality before-and-after photos and videos in seconds, with tools designed to simplify your daily practice.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Enhanced Patient Experience</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Impress your patients with professional-grade results that highlight your expertise and build trust during consultations.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Time-Saving Automation</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Generate standardized images instantly, ensuring consistency across every session without extra effort.
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
                Know more about Nextmotion Capture
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