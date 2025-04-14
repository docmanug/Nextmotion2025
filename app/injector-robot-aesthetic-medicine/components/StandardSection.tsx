"use client";

import Image from "next/image";

export default function StandardSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-sm ">
              A REVOLUTION
              </span>
            </div>
            
            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-5 leading-tight">
            A new chapter opens in the
            aesthetic industry 
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-[#081F4D]">
              <p className="text-lg leading-relaxed">
                Introducing <span className="font-semibold">LENA</span> (<span className="font-semibold">L</span>ight <span className="font-semibold">E</span>nabled <span className="font-semibold">N</span>euro-robotic <span className="font-semibold">A</span>rm), our latest
                generation autonomous robotic arm able to perform botulinum
                toxin injections with formidable precision.
              </p>

              <p className="text-lg leading-relaxed">
                Unlike the human hand, LENA will reach each of the injection
                points you have chosen with a sub-millimeter precision without
                ever shaking or tiring.
              </p>

              <p className="text-lg leading-relaxed">
                The localization of the injection points as well as their depth will
                be perfectly achieved thanks to its medical robotic arm
                equipped with 6 axes.
              </p>

              <p className="text-lg leading-relaxed">
                Combined with an electronic syringe capable of consistently
                delivering doses calibrated to the thousandth of a ml, the
                injections performed by LENA are constant and perfectly
                reproducible.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-[600px] flex items-center justify-center">
            <Image
              src="/sixth/standard_1.png"
              alt="LENA Robotic Arm"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 