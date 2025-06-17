"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";

export default function ImageSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Section */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <div className="flex justify-center">
            <div className="relative w-full aspect-[16/9] rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Q8PiP6CIoeQ"
                title="Nextmotion Virtual Classes Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
