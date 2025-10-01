"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature7() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 rounded-full p-3">
              <OptimizedImage
                src="/second/intuitive.webp"
                alt="Treatment Records Icon"
                width={60}
                height={60}
                className="text-blue-600"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Treatment records
            </h2>
          </div>

          <p className="text-[18px] leading-relaxed text-gray-600 mb-8">
            Nextmotion Consult can be used seamlessly with an iPhone, iPad, or
            any computer (Mac or PC). We offer you the opportunity to test a
            part of the patient journey using an iPad to show you how our
            solution can simplify your practice.
          </p>

          <p className="text-[18px] leading-relaxed text-gray-600 mb-8">
            {`Simply click on "Start the demo" below to get started !`}
          </p>

          <div className="w-full max-w-[800px] mx-auto mt-4">
            <OptimizedImage
              src="/third/feature7.webp"
              alt="Treatment Records Showcase"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>

          <div className="mt-8 flex justify-center">
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
                Start the demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
