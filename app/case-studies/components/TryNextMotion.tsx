"use client";

import { Button } from "@/components/ui/button";

export default function TryNextmotion() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1650EF] rounded-[32px] px-12 py-16">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to join the revolution?
            </h2>

            <p className="text-[18px] leading-relaxed text-white/90 mb-8">
              Try NextMotion solutions for free for 14 days!
            </p>

            <Button
              className="bg-white hover:bg-white/90 text-[#1650EF] rounded-md px-6 py-2 flex items-center gap-2 font-bold"
              onClick={() =>
                window.open("/contact_form", "_blank", "noopener,noreferrer")
              }
            >
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
