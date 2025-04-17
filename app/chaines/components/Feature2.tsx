"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature2() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/chaines/chaines_2.png"
                  alt="Sales & Marketing Interface"
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
                  src="/chaines/icons/chaines_2_icon.png"
                  alt="Sales & Marketing Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Sales & Marketing
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Optimize Your Marketing and Sales : generate leads, track
              conversions, and easily personalize your campaigns with powerful
              tools.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Integrated Marketing
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Manage your marketing campaigns from a single interface.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Sales Tools
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Optimize your sales processes with dedicated tools.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Campaign Personalization
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Use data to create targeted campaigns.
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
        </div>
      </div>
    </section>
  );
}
