"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function StandardSection() {
  return (
    <section className="py-2 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/eighth/3d_1.png"
              alt="3D Anatomy Layers Demonstration"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-[#EEF4FF] rounded-full px-4 py-1 mb-6">
              <span className="text-[#1650EF] text-sm font-medium uppercase tracking-widest">
                LEARN
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1650EF] mb-6">
              3D Anatomy at your fingertips
            </h2>

            <div className="space-y-6 text-gray-600">
              <p className="text-md leading-relaxed">
                Our model is composed by <span className="font-bold text-[#081F4D]">anatomic layers</span> that can <span className="font-bold text-[#081F4D]">be highlighted or removed</span>. This way, you will be able to perform a <span className="font-bold text-[#081F4D]">digital dissection</span> in
                order to visualize any structure.
              </p>

              <p className="text-md leading-relaxed">
                It can display <span className="font-bold text-[#081F4D]">the danger zones</span> where a cannula will be necessary,
                depending on the treatment plan you have mind for your patients.
              </p>

              <p className="text-md leading-relaxed">
                Get full access to Nextmotion 3D for just <span className="font-bold text-[#081F4D]">€49/month</span>, no commitment
                required. Enjoy all features, updates, and support with the flexibility to
                cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 