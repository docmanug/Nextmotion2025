"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature2() {
  return (
    <section className="py-16 sm:py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="bg-blue-100 rounded-full p-2 sm:p-3">
                <Image
                  src="/fourth/icons/feature2_icon.png"
                  alt="Coordination Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Coordination of Rooms and Equipment
              </h2>
            </div>

            <p className="text-base sm:text-[18px] leading-relaxed text-gray-600 mb-8 sm:mb-10">
              Optimize your resource usage by scheduling rooms and machines for
              each procedure. Easily manage equipment availability to ensure a
              seamless workflow.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  Resource Planning
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  Ensure that each room and machine is available at the right
                  time.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  Equipment Management
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  Prevent usage conflicts and maximize your clinic's efficiency.
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
                  src="/fourth/feature2.png"
                  alt="Room and Equipment Coordination Screenshot"
                  width={800}
                  height={1000}
                  className="w-full h-auto max-w-[400px] sm:max-w-none"
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
