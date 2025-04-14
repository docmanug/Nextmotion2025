"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature4() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/seventh/rev_4.png"
                alt="Transparent Results Interface"
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
                  src="/seventh/icons/rev_4_icon.png"
                  alt="Transparency Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Transparent Results</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Ensure clear communication and adherence to regulations, building
              trust with your patients while maintaining the highest standards of
              care and ethical practice.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Visual Evidence</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Capture images from all angles for comprehensive initial
                  documentation of all your patients.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Legal Protection</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Protect yourself against complaints about lack of results and
                  mitigate potential disputes from the outset with our ultra-
                  standardized before/after videos.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Compliance</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Meet documentation standards with complete images that will form
                  the foundation of your patient records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}