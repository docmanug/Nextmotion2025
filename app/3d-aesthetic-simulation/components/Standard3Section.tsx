"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Standard3Section() {
  return (
    <section className="py-2 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/eighth/3d_3.png"
              alt="3D Augmented Reality Demonstration"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-[#EEF4FF] rounded-full px-4 py-1 mb-6">
              <span className="text-[#1650EF] text-sm font-medium uppercase tracking-widest">
                CONVERT
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1650EF] mb-6">
              Create a trusting relationship with
              <br />
              your patients
            </h2>

            <div className="space-y-6 text-black">
              <p className="text-lg leading-relaxed">
                Turn in one tap the 3D anatomic model into an augmented reality
                anatomy mask that will fit directly on the face of your patients, turning
                your iPad/iPhone into <span className="font-bold">a magic mirror</span>.
              </p>

              <p className="text-lg leading-relaxed">
                NextMotion 3D is the <span className="font-bold">best way to explain</span>  your patients the aging
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 