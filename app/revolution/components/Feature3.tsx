"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature3() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/seventh/icons/rev_3_icon.png"
                  alt="Portfolio Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Portfolio and Tags
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Integrate tags to your medias and Build a Complete Portfolio: add
              tags to your photos and create a comprehensive portfolio of your
              treatments. Use it to illustrate your treatment plans during
              consultations and showcase the results achieved to demonstrate
              your expertise to patients.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Easy Media Organization
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Add tags to your photos for easy searching, allowing you to
                  find any before/after images in seconds.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Comprehensive Portfolio
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Build a comprehensive portfolio of all your treatments, which
                  will be your best asset for converting patients to the
                  proposed procedures.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Consultation Illustration
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Showcase results already achieved with similar patients to
                  highlight your expertise, reassure, and build trust.
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
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  Schedule a demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/seventh/rev_3.png"
                alt="Portfolio and Tags Interface"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
