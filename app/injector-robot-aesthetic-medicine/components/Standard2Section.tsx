"use client";

import Image from "next/image";

export default function Standard2Section() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column - Placed First */}
          <div className="relative h-[600px] flex items-center justify-center">
            <Image
              src="/sixth/standard_2.png"
              alt="LENA 3D Vision System"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Content Column */}
          <div className="max-w-xl">
            {/* Section Label */}
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-sm">
                HOW IT WORKS
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-8 leading-tight">
              A 3D vision and a dedicated<br />
              app
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-[#081F4D]">
              <p className="text-lg leading-relaxed">
                The patient's face is previously scanned in 3D to allow you to report
                the injection points via a dedicated iOS application. These will then be
                sent to the robot.
              </p>

              <p className="text-lg leading-relaxed">
                LENA is equipped with a 3D camera capable of <span className="font-semibold">perceiving depth and
                measuring distances</span>. After receiving your treatment plan, the robot will
                come alive and complete the injection points without any pain for the
                patient.
              </p>

              <p className="text-lg leading-relaxed">
                The whole procedure will be done <span className="font-semibold">under the strict supervision of a
                doctor</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 