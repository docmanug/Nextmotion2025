"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature2() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/third/icons/feature2_icon.png"
                  alt="Mobile Icon"
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
              Optimize your clinical processes and efficiently delegate tasks to
              your team. Improve photo capture and document management for a
              smoother practice.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Nextmotion Capture
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Delegate photo capture to your team while achieving
                  professional results.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Voice Dictation
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Quickly draft your observations with the integrated voice
                  dictation feature.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Pre-Consultation Questionnaire
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Have patients fill out questionnaires at reception or on their
                  smartphone, synchronized with their medical records.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Electronic Signature
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Have administrative documents signed electronically before the
                  consultation.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Generate documents lightning speed
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Design beautiful document templates with your logo and own
                  layout, generate them in one click and ask your patients to
                  sign them electronically. Zero paper and zero stress
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Multiplatform Solution
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Add a new patient from iPhone, design his treatment plan from
                  our web-software and ask him to sign quote and consent forms
                  on your iPad. Get a taste of our intuitive and user-friendly
                  multiplatform solution
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/revolution">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent
 hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  Know more about NM Capture
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <Image
                src="/third/feature2.png"
                alt="Nextmotion Capture App Screenshot"
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
