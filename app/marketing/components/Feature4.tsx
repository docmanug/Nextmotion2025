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
                  src="/marketing/marketing_4.png"
                  alt="Performance Analysis Interface"
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
                  src="/marketing/icons/marketing_4_icon.png"
                  alt="Performance Analysis Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Performance Analysis
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Use the Nextmotion Dashboard for Performance Tracking : monitor
              revenue by treatment type and time period. Measure the
              effectiveness of your marketing campaigns and adjust your
              strategies to optimize results.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Comprehensive Dashboard
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Track revenue by treatment type and time period.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Effectiveness Measurement
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Assess the impact of your marketing campaigns.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Strategy Optimization
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Adjust your campaigns for better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
