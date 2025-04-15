"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature6() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/medecin/medecin_6.png"
                  alt="Photo Solution Interface"
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
                  src="/medecin/icons/medecin_6_icon.png"
                  alt="Photo Solution Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Photo Solution
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Capture Dynamic Before/After Photos and Videos. Achieve perfect
              standardization with every shot. Save time and ensure
              professional, consistent results.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  High Standardization
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Ensure uniform photos with consistent colors and positions.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Quick Editing
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Create simple overlays or collages quickly and easily.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  AI Background Removal
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Blur eyes, tattoos, and automatically replace backgrounds. Add
                  keywords to easily find your photos.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Signable Consents
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
                  Share images with your patients or on social media platforms.
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
                Réserver une demo personnalisée
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
