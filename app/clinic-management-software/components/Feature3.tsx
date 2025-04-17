"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature3() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/third/feature3.png"
                  alt="Nextmotion Performance Tracking Screenshot"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/third/icons/mobile.png"
                  alt="3D Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Performance Tracking
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Track and Analyze Your Clinic's Performance: Monitor key
              indicators to make informed decisions that enhance your services
              and optimize growth.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Geographical Origin
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Analyze the origin of your patients and segment your
                  communications accordingly.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Number of Patients
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Track the number of patients by day, week, month, or year.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Treatment Performance
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Analyze the number of procedures, revenue, and conversion rate
                  by treatment type.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Consultation Monitoring
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Monitor the number of consultations based on the visit type
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent
 hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  Book a demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
