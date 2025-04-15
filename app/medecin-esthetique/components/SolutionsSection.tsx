"use client";

import Image from "next/image";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: "third/icons/contract.png",
      title: "Paperless solution",
    },
    {
      icon: "third/icons/signature.png",
      title: "Electronic Signature",
    },
    {
      icon: "third/icons/leaderboard.png",
      title: "Business Development",
    },
    {
      icon: "third/icons/graph.png",
      title: "Process Optimization",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#081F4D] mb-8">
            All-in-One Software to Streamline Administrative Tasks and
            Accelerate Your Aesthetic Clinic's Growth
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto">
            Nextmotion: Tailored for Aesthetic Doctors and Surgeons. Learn How
            Our Solution Saves You Time, Reduces Administrative Work, and
            Enhances the Efficiency of Your Aesthetic Practice.
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
              <h3 className="text-2xl font-semibold text-gray-900">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
