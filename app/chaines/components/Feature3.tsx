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
                  src="/chaines/icons/chaines_3_icon.png"
                  alt="Complete Integration Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Complete Integration
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Benefit from full integration with your existing tools. Connect
              Hubspot, Salesforce, Zapier, Make, and Sendgrid for seamless and
              centralized management.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  API Full
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Connect your data to your accounting tools and other systems.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Hubspot and Salesforce
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Integrate for efficient client relationship and sales
                  management.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Zapier and Make
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Automate repetitive tasks to save time.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Sendgrid
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Send personalized HTML emails.
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
                Book a demo
              </Button>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/chaines/chaines_3.png"
                  alt="Complete Integration Interface"
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
