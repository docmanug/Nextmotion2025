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
              Try Nextmotion
            </h2>

            <p className="text-base sm:text-[18px] leading-relaxed text-white/90 mb-6 sm:mb-8">
              Sign up for a free demo and discover how Nextmotion can transform
              your aesthetic clinic management. Maximize your efficiency and
              attract more patients today.
            </p>

            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
              >
                Réservez votre démo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
