"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RevolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Dynamic Video Showcase"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/second/video_icon.png"
                  alt="Video Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Dynamic Videos for Natural Results</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Showcase natural results with NM Capture's dynamic videos.
              Highlight the success of aesthetic treatments by extracting high-
              resolution photos at any point in the video for precise before-and-
              after comparisons.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Highlight Every Detail</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Capture dynamic 180°, 360°, or 720° videos to provide a holistic view
                  of treatments. Extract high-quality stills from any frame for detailed
                  comparisons.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Natural Patient Outcomes</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Reassure your patients by demonstrating natural results, whether it's
                  Botox, dermal fillers, or other aesthetic procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}