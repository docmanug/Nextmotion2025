"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature4() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/chaines/chaines_4.png"
                  alt="Ease of Use Interface"
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
                  src="/chaines/icons/chaines_4_icon.png"
                  alt="Ease of Use Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Ease of Use</h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Our Solution is Easy to Use and Intuitive : designed to maximize
              your efficiency, manage everything from the agenda to the patient
              appointment page effortlessly.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Ergonomic Interface
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  An intuitive and user-friendly interface.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Management via Agenda
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Manage all your operations directly from the agenda.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Simplified Appointment Booking
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Easily integrate the appointment booking portal into your
                  website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
