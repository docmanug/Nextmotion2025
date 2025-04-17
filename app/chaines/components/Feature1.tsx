"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature1() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/chaines/icons/chaines_1_icon.png"
                  alt="Centralized Management Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Centralized Management
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Manage all your clinics from a single interface. Centralize
              documents, manage schedules, clinic openings, and online
              appointment bookings with ease.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Team Management
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Assign and manage access rights for each team member.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Document Centralization
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Quotes, invoices, prescriptions, pre-consultation
                  questionnaires, and informed consents.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Schedule Management
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Manage schedules and clinic openings across all your
                  locations.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Online Appointment Booking
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Simplify appointment scheduling with an integrated booking
                  portal.
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
                  Schedule a demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/chaines/chaines_1.png"
                  alt="Centralized Management Interface"
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
