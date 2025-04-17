"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TryNextmotion() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1650EF] rounded-[32px] px-12 py-16">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Try Nextmotion
            </h2>

            <p className="text-[18px] leading-relaxed text-white/90 mb-8">
              Sign up for a free demonstration and discover how Nextmotion can
              transform the management of your aesthetic clinic. Maximize your
              efficiency and reduce your administrative tasks starting today.
            </p>

            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[#1650EF] hover:bg-white/90 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
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
