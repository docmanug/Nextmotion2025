"use client";

import Image from "next/image";

export default function Standard2Section() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[350px] lg:h-[450px] order-2 lg:order-1">
            <div className="relative w-full h-full max-w-[550px] mx-auto">
              <Image
                src="/fifth/standard_2.png"
                alt="Virtual Classes Hardware"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="max-w-xl order-1 lg:order-2">
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-sm">
                HARDWARE
              </span>
            </div>
            
            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-5 leading-tight">
              All you need is web
            </h2>
            
            <p className="text-[#4A5567] text-lg leading-relaxed">
              VirtualClasses requires only one <span className="font-semibold text-[#081F4D]">Hololens device</span> to work (included in the package). The rest of the technology is accessible from a single weblink with your iOS device or laptop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 