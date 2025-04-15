"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature1() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/marketing/icons/marketing_1_icon.png"
                  alt="Nextmotion Capture Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Nextmotion Capture
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Create Perfectly Standardized Before/After Photos with NM Capture
              : replace backgrounds with your logo using AI, easily collect
              image rights consents, and share your results on social media with
              a single click to attract more patients.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Perfect Standardization
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Create uniform before/after photos with ease. Automatically
                  replace backgrounds with your logo.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Easy Consents
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Get electronic signatures for image rights effortlessly.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Social Sharing
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Post your results on social media with just one click.
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
                Request a demo
              </Button>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/marketing/marketing_1.png"
                  alt="Nextmotion Capture Interface"
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
