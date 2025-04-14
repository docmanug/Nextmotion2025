"use client";

import Image from "next/image";

export default function MarketSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-3 py-1.5 bg-[#EEF4FF] rounded-full mb-5">
              <span className="text-[#0066FF] font-semibold uppercase tracking-widest text-sm">
                MARKET OPPORTUNITIES
              </span>
            </div>

            <h2 className="text-[2.5rem] font-bold text-[#081F4D] mb-6 leading-tight">
              Training is a key driver of growth for aesthetic industries.
            </h2>

            <p className="text-[#4A5567] text-lg leading-relaxed mb-8">
              Customers need first to be convinced by the efficiency of the products proposed by the brand and learn how to use them properly in order to achieve the same results with their own patients. Today, multiple training formats are available with variable costs for companies
            </p>

            <button className="bg-[#0066FF] text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              Download guide
            </button>
          </div>

          {/* Right Side - Features Grid */}
          <div className="space-y-4 flex flex-col justify-center">
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                <p className="text-[#0066FF]">
                  Easy<br />to use
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                <p className="text-[#0066FF]">
                  One to one<br />trainings
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                <p className="text-[#0066FF]">
                  Custom<br />workshop fees
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                <p className="text-[#0066FF]">
                  A key driver<br />of growth
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                <p className="text-[#0066FF]">
                  Multiple training<br />formats
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                <p className="text-[#0066FF]">
                  Congresses<br />symposiums
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                <p className="text-[#0066FF]">
                  Webinars
                </p>
              </div>
              <div className="bg-[#F8FAFC] rounded-xl p-4 text-center">
                <p className="text-[#0066FF]">
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