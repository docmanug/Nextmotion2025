"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature2() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/assistant/icons/assistant_2_icon.png"
                  alt="Simplify Administrative Tasks Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Simplify Your Administrative Tasks
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Save Time with Electronic Signatures and Digital Management : sign
              quotes and informed consents electronically, and manage product
              traceability and stock tracking digitally. Reduce paperwork and
              simplify daily operations with our intuitive interface.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Daily Patient List
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Quickly access the list of patients scheduled for the day,
                  enabling efficient and stress-free schedule management.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Pre-Defined Steps
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Follow the pre-defined patient journey steps without
                  navigating through each individual record. This streamlines
                  the workflow and reduces administrative time.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Journey Filters
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Easily filter patients by completed, in-progress, or
                  not-yet-started journeys. This feature gives you a clear view
                  of care status, allowing you to prioritize actions and ensure
                  thorough follow-up.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button
                variant="outline"
                size="lg"
                className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
              >
                En savoir plus sur NM Capture
              </Button>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/assistant/assistant_2.png"
                  alt="Simplify Administrative Tasks Interface"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
