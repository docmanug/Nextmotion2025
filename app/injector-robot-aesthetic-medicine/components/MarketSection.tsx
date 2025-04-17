"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MarketSection() {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#EEF4FF] rounded-full mb-4 sm:mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-xs sm:text-sm">
                MARKET OPPORTUNITIES
              </span>
            </div>

            <h2 className="text-2xl sm:text-[2.5rem] font-bold text-[#081F4D] mb-4 sm:mb-6 leading-tight">
              Training is a key driver of growth for aesthetic industries.
            </h2>

            <p className="text-base sm:text-lg text-[#4A5567] leading-relaxed mb-6 sm:mb-8">
              Customers need first to be convinced by the efficiency of the
              products proposed by the brand and learn how to use them properly
              in order to achieve the same results with their own patients.
              Today, multiple training formats are available with variable costs
              for companies
            </p>

            <Button className="w-full sm:w-auto bg-[#0066FF] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Download guide
            </Button>
          </div>

          {/* Right Side - Features Grid */}
          <div className="space-y-3 sm:space-y-4 flex flex-col justify-center">
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  Easy
                  <br />
                  to use
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  One to one
                  <br />
                  trainings
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  Custom
                  <br />
                  workshop fees
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  A key driver
                  <br />
                  of growth
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  Multiple training
                  <br />
                  formats
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  Congresses
                  <br />
                  symposiums
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">Webinars</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-3 sm:p-4 text-center">
                <p className="text-[#0066FF] text-sm sm:text-base">
                  Cost saving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
