"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-20 sm:pt-32 pb-16 sm:pb-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <div className="text-[#284fe6] font-medium mb-3 sm:mb-4">ABOUT</div>
            <h1 className="text-3xl sm:text-[40px] font-bold text-[#051238] leading-tight mb-4 sm:mb-6">
              Innovation at the service of doctors and their patients
            </h1>
            <p className="text-[#051238] text-base sm:text-lg opacity-80 mb-6 sm:mb-8">
              Spend less time managing your clinical records with NextMotion
              Consult. Quotes, consents, invoices or even patient accounts: take
              advantage of our many features in a unique environment.
            </p>
            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-transperant hover:bg-[#1650EF] hover:text-white text-[#284fe6] font-semibold px-6 py-2.5 border-2 border-[#284fe6] rounded-md">
                Request a Demo
              </Button>
            </Link>
          </div>
          <div className="relative w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] md:pr-10">
            <Image
              src="/about/about_logo.png"
              alt="NextMotion Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
