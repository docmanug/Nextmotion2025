"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Standard2Section() {
  return (
    <section className="py-2 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1">
            <div className="inline-block bg-[#EEF4FF] rounded-full px-4 py-1 mb-6">
              <span className="text-[#1650EF] text-sm font-medium uppercase tracking-widest">
                EDUCATE
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1650EF] mb-6">
              A deep understanding of the
              <br />
              aging process
            </h2>

            <div className="space-y-6 text-black">
              <p className="text-md leading-relaxed">
                Each anatomical layer has 2 versions: young and aged.
              </p>

              <p className="text-md leading-relaxed ">
                This way, you will <span className="font-bold">be able to explain your patients</span> fillers need to
                be used in order to replace fat volume loss or bones structural
                changes. While botulinum toxin needs to be used to relax the
                muscles and smooth the wrinkles.
              </p>
            </div>
          </div>

          <div className="relative order-2">
            <Image
              src="/eighth/3d_2.png"
              alt="Aging Process Demonstration"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 