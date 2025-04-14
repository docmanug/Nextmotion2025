"use client";

import Image from "next/image";
import Link from "next/link";

export default function ApprovalSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-6">
            Discover the other solutions of NextMotion
          </h2>
          <p className="text-[#4A5567] text-lg">
            Our imaging, digitization and simulation solutions can be used both altogether and separately. Combine with us solutions to obtain the maximum benefit of our technology.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <div className="mb-6">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-sm">
                NEXTMOTION CAPTURE
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#081F4D] mb-6">
              A gold standard imaging solution that's consistent, efficient, and easy to use
            </h3>

            <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
              <Image
                src="/fifth/approaval_capture.png"
                alt="NextMotion Capture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <div className="mb-6">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-sm">
                NEXTMOTION CONSULT
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#081F4D] mb-6">
              An Electronic Health Records system that goes beyond your expectations
            </h3>

            <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
              <Image
                src="/fifth/approaval_consult.png"
                alt="NextMotion Consult"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6">
            <div className="mb-6">
              <span className="text-[#0066FF] font-medium uppercase tracking-wider text-sm">
                NEXTMOTION 3D
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#081F4D] mb-6">
              Turn your smartphone into a high-resolution 3D camera & digital anatomy solution
            </h3>

            <div className="relative h-[200px] rounded-xl overflow-hidden mb-4">
              <Image
                src="/fifth/approaval_3d.png"
                alt="NextMotion 3D"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}