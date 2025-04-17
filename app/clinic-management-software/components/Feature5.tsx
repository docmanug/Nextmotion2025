"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature5() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/third/icons/camera.png"
                  alt="Photo Solution Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Integrated Photo Solution
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Create Dynamic Before/After Photos and Videos: achieve perfect
              standardization while saving time and ensuring professional,
              uniform result that will automatically sync with your patient's
              files.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  High Standardization
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Ensure uniform photos with consistent colors and positioning.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Quick Editing
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Easily create overlays or collages with simple editing tools.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  AI Background Removal
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Automatically blur eyes, tattoos, and replace backgrounds.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Easy Retrieval
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Add keywords for easy retrieval of your photos.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Electronic Consent Forms
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Integrate electronically signable image rights consent forms.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Easy Sharing
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Share images with your patients or on social media
                  effortlessly.
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
                  src="/third/feature5.png"
                  alt="Nextmotion Photo Solution Screenshot"
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
