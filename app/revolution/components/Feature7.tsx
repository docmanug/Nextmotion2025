"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature7() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:max-w-[500px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/seventh/icons/rev_7_icon.png"
                  alt="Feature Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Compact Design</h2>
            </div>
            
            <p className="text-[16px] leading-relaxed text-gray-600">
            Thanks to its built-in battery, Nextmotion Revolution requires no
power outlet or dedicated space. It can operate in any environment
while delivering high-quality photos and videos with maximum
standardization. It only needs a floor space of just 1.5 square meters
for daily use.
            </p>
          </div>

          <div>
            <div className="relative w-full max-w-[600px] mx-auto">
              <Image
                src="/seventh/rev_7.png"
                alt="Feature 7 Illustration"
                width={600}
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