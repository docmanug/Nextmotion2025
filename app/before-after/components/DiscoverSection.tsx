"use client";

import Image from "next/image";
import Link from "next/link";

const DiscoverCard = ({ 
  title, 
  imageSrc,
  isPhone = false
}: { 
  title: string;
  imageSrc: string;
  isPhone?: boolean;
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white h-[400px] w-full shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <div className="relative h-full w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover ${isPhone ? 'object-contain px-12' : ''}`}
        />
        <div className="absolute bottom-8 left-8">
          <h3 className="text-[#081F4D] text-[28px] font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default function DiscoverSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-4">
            Want to go further ?
          </h2>
          <p className="text-lg text-gray-600">
            Discover Nextmotion Revolution and Nextmotion 3D
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <DiscoverCard
              title="Nextmotion Revolution"
              imageSrc="/second/part1.jpg"
            />
          </div>
          <div className="w-full">
            <DiscoverCard
              title="Nextmotion 3D"
              imageSrc="/second/part2.jpg"
              isPhone={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 