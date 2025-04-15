"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature3() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/assistant/icons/assistant_3_icon.png"
                  alt="Specific Benefits Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Specific Benefits
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Our Software is Perfectly Suited for Aesthetic Medical Practices :
              manage quotes, consents, invoices, product traceability, and stock
              control effortlessly. Save time with photos automatically
              integrated into patient records and instantly available on
              doctors' iPads and iPhones.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Comprehensive Management
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Effortlessly handle quotes, consents, invoices, product
                  traceability, and stock control, all in one platform.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Time-Saving Photo Integration
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Automatically integrate before/after photos into patient
                  records, making them instantly accessible to doctors.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Instant Access on Mobile Devices
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Doctors can view patient records and photos instantly on iPads
                  and iPhones for seamless workflow.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Optimized for Aesthetic Practices
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Tailored features to meet the specific needs of aesthetic
                  medical clinics, enhancing daily operations and improving
                  patient care.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button
                variant="outline"
                size="lg"
                className="border-[2px] border-[#284fe6] text-black-600 bg-transparent
 hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
              >
                Book a personalized Demo
              </Button>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/assistant/assistant_3.png"
                  alt="Specific Benefits Interface"
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
