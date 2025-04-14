"use client";

import Image from "next/image";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: "/seventh/icons/robot_icon.png",
      title: "Rotating Motorized Robot",
    },
    {
      icon: "/seventh/icons/automated_icon.png",
      title: "Automated Captures",
    },
    {
      icon: "/seventh/icons/camera_icon.png",
      title: "Dynamic videos",
    },
    {
      icon: "/seventh/icons/quality_icon.png",
      title: "Unmatched Quality",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-8">
          The Gold Standard of Standardization
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto">
          Discover How the Nextmotion Revolution Machine, Combined with the NM Capture App,
Can Transform Your Before/After Photos and Videos. Achieve professional results with
advanced features and unparalleled image quality.
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