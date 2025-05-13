"use client";

import { useEffect, useState } from "react";

export default function ImageSection() {
  const [isFrench, setIsFrench] = useState(false);

  useEffect(() => {
    const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
    setIsFrench(locale === "fr");
  }, []);

  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Video Container */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl mb-10 sm:mb-16">
            <iframe
              src={
                isFrench
                  ? "https://www.youtube.com/embed/punh7RY8teY?si=WWfFhsGgLs5zhKoR"
                  : "https://www.youtube.com/embed/SY3cs5jWV0s?si=5tbZnPGu-t--uldb"
              }
              title="Before After Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
