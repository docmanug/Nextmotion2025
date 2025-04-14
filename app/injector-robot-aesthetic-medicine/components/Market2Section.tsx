"use client";

import Image from "next/image";

export default function Market2Section() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-sm">
                OUR JOURNEY
              </span>
            </div>

            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-6 leading-tight">
              Since our birth,<br />
              we kept on growing<br />
              at light speed pace.
            </h2>

            <p className="text-[#4A5567] text-lg leading-relaxed mb-8">
              NextMotion is an innovative MedTech company established since 2016 which has started by proposing a photographic documentation solution. Furtherly, the company has created a EMR/SaaS platform to help doctors digitize their entire workflow and propose an innovative private web platform to their patients.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[450px] lg:h-[500px]">
            <div className="relative w-full h-full max-w-[550px] mx-auto">
              <Image
                src="/fifth/market_2.png"
                alt="NextMotion Journey"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 