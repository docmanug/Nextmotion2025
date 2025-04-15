"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature5() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/assistant/icons/assistant_5_icon.png"
                  alt="Patient Management Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Patient Management
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Quickly access patient records through an ergonomic all-in-one
              interface. View clinical notes, quotes, consents, before/after
              photos, treatment plans, and history. Use filters to easily search
              for any event or document.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Automatic Reminders
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  You will have tools at your disposal to send automatic email
                  or SMS reminders to follow up with patients considering a
                  quote or to remind them to book their next appointment for
                  recurring treatments.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Hubspot Synchronization
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Synchronization with Hubspot will enable you to take your
                  marketing and sales to a new level of performance through
                  sequences and other automations.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Nextmotion Capture and Portfolio
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  The Nextmotion Capture app and its portfolio will help you
                  attract more patients and increase your conversion rate,
                  boosting the growth of your clinic.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/assistant/assistant_5.png"
                  alt="Patient Management Interface"
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
