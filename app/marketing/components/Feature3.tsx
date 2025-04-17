"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature3() {
  return (
    <section className="py-16 sm:py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="bg-blue-100 rounded-full p-2 sm:p-3">
                <Image
                  src="/marketing/icons/marketing_3_icon.png"
                  alt="Online booking Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Online booking
              </h2>
            </div>

            <p className="text-base sm:text-[18px] leading-relaxed text-gray-600 mb-6 sm:mb-10">
              Enhance Appointment Booking with Nextmotion : create specific
              pages for each treatment, integrate GTAG to target patients who
              abandoned the booking process, and track the source of every
              appointment.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  Specific Pages
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  Create appointment booking pages for each treatment type.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  GTAG Integration
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  Target patients who abandoned their appointment process.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  Appointment Source Tracking
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  Identify the source of every booking.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  Demandez une demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/marketing/marketing_3.png"
                  alt="Online booking Interface"
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
