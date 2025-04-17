"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TryNextmotion() {
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1650EF] rounded-[32px] px-6 sm:px-12 py-8 sm:py-16">
          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to join the revolution?
            </h2>

            <p className="text-base sm:text-[18px] leading-relaxed text-white/90 mb-6 sm:mb-8">
              Test the NextMotion suite for free for 14 days!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1650EF] rounded-md px-6 py-2 flex items-center gap-2 font-bold">
                  Book a demo
                </Button>
              </Link>
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1650EF] rounded-md px-6 py-2 flex items-center gap-2 font-bold">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
