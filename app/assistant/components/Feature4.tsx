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
                  src="/assistant/assistant_4.png"
                  alt="Simplified Agenda Interface"
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
                  src="/assistant/icons/assistant_4_icon.png"
                  alt="Simplified Agenda Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Simplified Agenda
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Easily manage appointments with our integrated agenda or synced
              with Doctolib, and send automatic SMS and email reminders. Use our
              internal messaging through the patient portal to improve
              communication and reassure patients.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Seamless Appointment Management
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Schedule and manage appointments effortlessly with our
                  built-in agenda, or integrate with Doctolib for a synchronized
                  experience.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Automated Reminders
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Send automatic SMS and email reminders to reduce no-shows and
                  ensure patients are well-informed.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Internal Messaging System
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Use our internal messaging via the patient portal to improve
                  communication and provide reassurance to your patients.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Patient Engagement
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Keep your patients engaged and informed with timely updates
                  and easy access to their appointment details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
