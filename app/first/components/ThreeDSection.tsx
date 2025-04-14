"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThreeDSection() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/icons/3d.png"
                  alt="3D Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Nextmotion 3D</h2>
            </div>
            
            <p className="text-[18px] font-[700] text-gray-900 mb-6">
              A powerful 3D and augmented reality anatomy app to educate and engage patients
            </p>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Visualize detailed anatomical layers and project them in real-time on your patients' faces. Explain procedures like never before and build trust with interactive tools.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Augmented Reality for Patient Education</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Visualize detailed 3D anatomical layers in real-time to explain treatments clearly.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Engage and Impress</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Use augmented reality to project anatomical structures onto your patient's face and enhance understanding.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Boost Patient Trust</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Simplify complex procedures with interactive tools that build confidence and improve decision-making.
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
                Know more about Nextmotion 3D
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Nextmotion 3D App Screenshot"
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