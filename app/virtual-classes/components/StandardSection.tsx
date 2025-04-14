"use client";

import Image from "next/image";

export default function StandardSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-sm ">
                FONCTIONNEMENT
              </span>
            </div>
            
            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-5 leading-tight">
              A new standard is born
            </h2>
            
            <p className="text-[#4A5567] text-lg leading-relaxed">
              <span className="font-semibold text-[#081F4D]">NextMotion VirtualClasses</span> is a smart and efficient alternative to traditional training formats which is cost saving for companies and impactful for students willing to master the newest techniques using an immersive environment where they can have a direct interaction with their trainer.
            </p>
          </div>
          
          <div className="relative h-[300px] lg:h-[320px]">
            <Image
              src="/fifth/standard_1.png"
              alt="Virtual Classes Standard"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 