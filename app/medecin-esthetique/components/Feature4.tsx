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
                  src="/medecin/medecin_4.png"
                  alt="Process Optimization Interface"
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
                  src="/medecin/icons/medecin_4_icon.png"
                  alt="Process Optimization Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Process Optimization
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Improve photo documentation and streamline document management for
              a more efficient aesthetic practice.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Nextmotion Capture
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Delegate photo capture to your team with professional results.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Voice Dictation
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Quickly record your observations with integrated voice
                  dictation.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Pre-Consultation Questionnaire
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Have patients complete questionnaires at reception or on their
                  smartphones, automatically synced with their medical records.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Electronic Signature
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Collect electronic signatures for administrative documents
                  before the consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
