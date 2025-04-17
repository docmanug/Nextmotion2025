"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-[#081F4D] text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          The <span className="text-[#1650EF]">NextMotion Team</span> is happy
          to participate in your development!
        </h2>

        <Link href="/contact_form" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#1650EF] text-white font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl hover:bg-transparent hover:text-[#1650EF] hover:border hover:border-[#1650EF]">
            Request a Demo
          </Button>
        </Link>
      </div>
    </section>
  );
}
