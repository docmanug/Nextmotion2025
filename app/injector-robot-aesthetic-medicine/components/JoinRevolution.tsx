"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JoinRevolution() {
  return (
    <section className="py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1650EF] rounded-[20px] sm:rounded-[32px] px-6 sm:px-12 py-10 sm:py-16">
          <div className="max-w-5xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to join the revolution?
            </h2>

            <p className="text-base sm:text-[18px] leading-relaxed text-white/90 mb-6 sm:mb-8">
              Discover and try our patient management solutions during a live
              demo
            </p>

            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white text-[#1650EF] hover:bg-white/90 rounded-lg px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-[16px] font-semibold h-auto"
              >
                Request a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
