"use client";

import Image from "next/image";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: "/second/solutions/light.png",
      title: "Consistent Lighting",
    },
    {
      icon: "/second/solutions/color.png",
      title: "Consistent colors",
    },
    {
      icon: "/second/solutions/position.png",
      title: "Consistent positioning",
    },
    {
      icon: "/second/solutions/picture.png",
      title: "Pictures and videos",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-8">
          Intuitive and Professional Before/After Photos
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto">
          Take the hassle out of capturing before/after photos with the NM Capture app. Designed
for iPhone and iPad, our solution ensures speed, simplicity, and high-quality
standardization, empowering clinics with professional results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 w-16 h-16">
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={70}
                  height={70}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}