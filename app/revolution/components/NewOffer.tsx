"use client";

import Image from "next/image";

export default function NewOffer() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Image */}
          <Image
            src="/seventh/new_offer_bg.png"
            alt="Special Offer Background"
            fill
            className="object-cover"
            priority
          />

          {/* Content */}
          <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 text-center">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/seventh/new_offer_logo.png"
                alt="Nextmotion Logo"
                width={64}
                height={64}
                className="mx-auto"
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-white mb-4">
              IMCAS SPECIAL OFFER
            </h2>

            {/* Main Offer Text */}
            <p className="text-xl text-white mb-4">
              Enjoy a 35% discount on the Nextmotion Revolution device !
            </p>

            {/* Availability Text */}
            <p className="text-white text-lg mb-8 opacity-90">
              (Available on 20 units only, between jan 30 and feb 1st 2025 - 6pm CET)
            </p>

            {/* Price Button */}
            <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors">
              €12 990 instead of €19 990
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 