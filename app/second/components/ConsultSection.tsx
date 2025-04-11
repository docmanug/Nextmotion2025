"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConsultSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/second/savetime.png"
                alt="Nextmotion Consult App Screenshot"
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
                <Image
                  src="/second/save_icon.png"
                  alt="Consult Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Save Time and Enhance Efficiency</h2>
            </div>
            
            <p className="text-[18px] font-[700] text-gray-900 mb-6">
              Synchronize your before/after photos across all devices and patient records with ease.
            </p>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Quickly create professional-grade photo collages and seamlessly integrate existing images into your
              aesthetic workflow—perfect for clinics looking to enhance efficiency and patient satisfaction.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Effortless Photo Editing</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Quickly create professional collages, overlay images, blur sensitive details, or replace backgrounds with your clinic's branding—all in just a few clicks.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Synchronization</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Connect your photos across all devices and patient records with our secure medical cloud.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Integration of All Your Photos</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Worried about leaving your previous photos behind? No problem—easily integrate them into our solution.
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
                Sign up for a 15min demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}