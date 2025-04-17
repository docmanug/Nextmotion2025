"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function RevolutionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-[300px] rounded-2xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/fifth/rev_bg.png"
            alt="Revolution Background"
            fill
            className="object-cover"
            priority
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to join the revolution?
              </h2>

              <p className="text-white/90 text-lg mb-8">
                Try the NextMotion Suite for free for 14 days!
              </p>

              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-black hover:text-[#0066FF] hover:bg-white px-8 py-3 rounded-lg text-lg font-medium">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
