"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#F3F8FD] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-6">
              <p className="text-[#1650EF] font-medium">CONTACT</p>
              <h1 className="text-[42px] leading-[1.2] font-semibold text-[#0B1C39]">
                Get in touch with the NextMotion Team
              </h1>
              <p className="text-gray-600 text-lg">
                Looking for a plan that fits your specific business needs?
              </p>
              <Link href="/contact">
                <Button className="bg-[#1650EF] text-white hover:bg-[#1345D1] px-8 py-3 h-auto text-base font-semibold">
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="w-[480px] aspect-[4/2] rounded-2xl overflow-hidden">
              <img
                src="/contact/contact_hero.png"
                alt="NextMotion Team Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
