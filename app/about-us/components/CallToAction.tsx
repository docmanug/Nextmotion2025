"use client";

import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const handleDemoClick = () => {
    window.open("/contact_form", "_blank");
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-[#081F4D] text-3xl md:text-4xl font-bold mb-12">
          The <span className="text-[#1650EF]">NextMotion Team</span> is happy
          to participate in your development!
        </h2>

        <Button
          onClick={handleDemoClick}
          className="bg-[#1650EF] text-white font-medium px-8 py-6 text-lg rounded-xl hover:bg-transparent hover:text-[#1650EF] hover:border hover:border-[#1650EF]"
        >
          Request a Demo
        </Button>
      </div>
    </section>
  );
}
