"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SimpleSection() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/second/intuitive.png"
                  alt="Portfolio Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Simple and intuitive</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
            Experience the power of NextMotion with our interactive demo!
Explore our intuitive features directly on an iPhone and see how
effortless patient's pictures management can be. Click ‘Start’ to
begin your guided tour and discover why clinics love our solution
            </p>
          </div>

          <div>
            <div className="relative w-full max-w-[300px] mx-auto">
              <Image
                src="/second/mobile.png"
                alt="Portfolio Showcase"
                width={300}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 