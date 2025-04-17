"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature3() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/fourth/icons/feature3_icon.png"
                  alt="Reminders Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                SMS and Email Reminders
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Reduce missed appointments with an automated system of SMS and
              email reminders. Patients receive personalized notifications
              before their consultation to ensure their attendance.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Customized Reminders
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Create personalized messages for each patient.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Confirmation Tracking
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  See patient responses and anticipate absences.
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

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/fourth/feature3.png"
                  alt="SMS and Email Reminders Screenshot"
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
