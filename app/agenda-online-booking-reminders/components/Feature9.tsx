"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";

export default function Feature9() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative w-full max-w-[600px] mx-auto">
              <OptimizedImage
                src="/third/feature9.webp"
                alt="Use Case Illustration"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="lg:max-w-[400px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <OptimizedImage
                  src="/third/icons/feature9_icon.webp"
                  alt="Use Case Icon"
                  width={32}
                  height={32}
                  className="text-white"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Use case</h2>
            </div>
            
            <p className="text-[16px] leading-relaxed text-gray-600">
              Sophie, assistant to Dr. Loubeyres in Pau, reduced her administrative
              time by 32%, saving over 1.5 hours a day to focus more on patient
              care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 