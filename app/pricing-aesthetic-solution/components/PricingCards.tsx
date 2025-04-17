"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pricingData = [
  {
    title: "NM Capture",
    description:
      "Shoot perfectly standardized images to attract, convert your patients and boost your practice",
    price: "€99",
    period: "/ month",
    note: "Available on iOS only excl. taxes",
    image: "/pricing/pricing_capture.png",
    features: [
      "Color reproduction capabilities",
      "Consistent patient positioning",
      "Image Compare technology",
    ],
  },
  {
    title: "Nextmotion 3D",
    description:
      "Educate your patients and engage them with the treatment's plans proposed",
    price: "€49",
    period: "/ month",
    note: "Available for iOS and Android",
    image: "/pricing/pricing_3d.png",
    features: [
      "Color reproduction capabilities",
      "Consistent patient positioning",
      "Image Compare technology",
    ],
  },
  {
    title: "NextMotion Revolution",
    description: "Reach the ultimate level of medical photography",
    price: "€19 990",
    period: "",
    note: "",
    image: "/pricing/pricing_revolution.png",
    features: [
      "Color reproduction capabilities",
      "Consistent patient positioning",
      "Image Compare technology",
    ],
  },
];

export default function PricingCards() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {pricingData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            >
              <div className="flex flex-col items-center md:flex-row gap-6 sm:gap-8">
                <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39]">
                    {card.title}
                  </h2>
                  <p className="text-[#005FA6] text-base sm:text-lg font-semibold">
                    {card.description}
                  </p>

                  <div className="flex items-baseline justify-center md:justify-start">
                    <span className="text-3xl sm:text-4xl font-bold text-[#0B1C39]">
                      {card.price} {card.period}
                    </span>
                  </div>

                  {card.note && (
                    <p className="text-sm sm:text-md text-gray-500">
                      {card.note}
                    </p>
                  )}

                  <div className="flex justify-center md:justify-start">
                    <Link
                      href="/contact_form"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#284fe6] hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg">
                        Request a Demo
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 w-full md:w-auto">
                  <div className="relative h-[200px] sm:h-[300px] w-full bg-[#284fe6] rounded-lg overflow-hidden">
                    <Image
                      src={card.image}
                      alt={`${card.title} Interface`}
                      fill
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
