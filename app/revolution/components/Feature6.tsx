"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature6() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative w-full max-w-[600px] mx-auto">
              <Image
                src="/seventh/rev_6.png"
                alt="Use Case Illustration"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="lg:max-w-[500px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/seventh/icons/rev_6_icon.png"
                  alt="Use Case Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Use case</h2>
            </div>
            
            <p className="text-[16px] leading-relaxed text-gray-600">
            Discover How Clinics Use Nextmotion Revolution and see how they
are enhancing the quality of their before/after photos and videos,
attracting more patients in the process.
            </p>
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
          
        </div>
      </div>
    </section>
  );
} 