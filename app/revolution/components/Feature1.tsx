"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature1() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/seventh/icons/icon_revolution.png"
                  alt="Mobile Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Nextmotion Revolution</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Nextmotion Revolution is a rotating motorized machine controlled
              by the iPhone and the NM Capture app. It rotates around the
              patient at a constant speed, ensuring optimal standardization of
              images in both photo and dynamic video formats.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Rotating Motorized Robot</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Nextmotion Revolution is controlled by the NM Capture app via your
                  iPhone, ensuring a constant rotation for highly standardized shots.
                  The blue background allows for perfect separation of faces and
                  bodies, providing you with flawless content.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Optimal Standardization</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Achieve consistent lighting, shadows, positions, and colors with
                  every capture, along with the same dynamic expressions if you
                  choose to make videos. The content you will create is sure to
                  impress.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Superior Quality</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Obtain original and differentiating content that will help you attract
                  and convert more patients: photos and videos taken with our
                  device will be of unmatched professional quality.
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
          
          <div className="relative flex items-center justify-center">
            <div className="relative w-full">
              <Image
                src="/seventh/rev_1.png"
                alt="Nextmotion Revolution Device"
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