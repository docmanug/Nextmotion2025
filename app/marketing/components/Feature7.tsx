"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature7() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/marketing/icons/marketing_7_icon.png"
                  alt="Use-case Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Use-case</h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              See How Clinics Like Clinique des Champs Élysées Use Nextmotion:
              optimize your marketing efforts with centralized appointment
              booking, personalized email campaigns, and seamless API
              integrations for smooth management.
            </p>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/marketing/marketing_7.png"
                  alt="Use-case Interface"
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
