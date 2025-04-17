"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F3F8FD]">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 md:pl-16 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="text-[#0045FF] text-[16px] md:text-[20px] tracking-wider font-medium mb-3 md:mb-4">
              NEXTMOTION CAPTURE
            </div>
            <h1 className="text-[26px] md:text-[30px] lg:text-[35px] font-bold text-[#000B45] leading-tight mb-6">
              Nextmotion Capture: Redefining Aesthetic Photography
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#0045FF] hover:bg-[#0035CC] text-white font-semibold px-8 py-3 h-auto rounded-full"
                >
                  Get Started
                </Button>
              </Link>
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-[#0045FF] text-[#0045FF] hover:bg-[#0045FF] hover:text-white px-8 py-3 h-auto rounded-full"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full max-w-[300px] md:max-w-[400px] mx-auto mt-6 md:mt-12">
              <Image
                src="/capture-app-demo.png"
                alt="Nextmotion Capture Interface"
                width={400}
                height={533}
                className="w-full rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
