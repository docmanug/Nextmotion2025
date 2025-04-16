"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <div className="text-[#284fe6] font-medium mb-4">ABOUT</div>
            <h1 className="text-[40px] font-bold text-[#051238] leading-tight mb-6">
              Innovation at the service of doctors and their patients
            </h1>
            <p className="text-[#051238] text-lg opacity-80 mb-8">
              Spend less time managing your clinical records with NextMotion
              Consult. Quotes, consents, invoices or even patient accounts: take
              advantage of our many features in a unique environment.
            </p>
            <Button
              className="bg-transperant hover:bg-[#1650EF] hover:text-white text-[#284fe6] font-semibold px-6 py-2.5 border-2 border-[#284fe6] rounded-md"
              onClick={() =>
                window.open("/contact_form", "_blank", "noopener,noreferrer")
              }
            >
              Request a Demo
            </Button>
          </div>
          <div className="relative w-[300px] h-[300px] pr-10">
            <img
              src="/about/about_logo.png"
              alt="NextMotion Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
