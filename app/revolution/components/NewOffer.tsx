"use client";

import Image from "next/image";
import Link from "next/link";

export default function NewOffer() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background Image */}
          <Image
            src="/seventh/new_offer_bg.png"
            alt="Special Offer Background"
            fill
            className="object-cover"
            priority
          />

          {/* Content */}
          <div className="relative z-10 py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
            {/* Logo */}
            <div className="mb-6 sm:mb-8">
              <Image
                src="/seventh/new_offer_logo.png"
                alt="Nextmotion Logo"
                width={64}
                height={64}
                className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              IMCAS SPECIAL OFFER
            </h2>

            {/* Main Offer Text */}
            <p className="text-lg sm:text-xl text-white mb-3 sm:mb-4">
              Enjoy a 35% discount on the Nextmotion Revolution device !
            </p>

            {/* Availability Text */}
            <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 opacity-90">
              (Available on 20 units only, between jan 30 and feb 1st 2025 - 6pm
              CET)
            </p>

            {/* Price Button */}
            <Link href="/revolution">
              <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-colors">
                €12 990 instead of €19 990
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
