"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RevolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <OptimizedImage
                src="/capture-app-demo.webp"
                alt="Nextmotion Revolution App Screenshot"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <OptimizedImage
                  src="/icons/icon_revolution.webp"
                  alt="Revolution Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Nextmotion Revolution</h2>
            </div>
            
            <p className="text-[18px] font-[700] text-gray-900 mb-6">
              The robotic arm redefining aesthetic consultations.
            </p>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Capture dynamic, perfectly standardized videos with precision. Highlight natural results, showcase your expertise, and impress your patients with cutting-edge technology.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Dynamic Standardization</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Capture perfectly standardized, dynamic videos to showcase your expertise.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Cutting-Edge Precision</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Our robotic arm ensures consistent angles, lighting, and patient positioning for flawless before-and-after comparisons.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Patient Engagement</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Highlight natural movements and expressions to build trust and confidence in your results.
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
                Know more about Nextmotion Revolution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}