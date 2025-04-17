"use client";

import Link from "next/link";

interface CaseStudy {
  id: string;
  name: string;
  image: string;
  isComingSoon?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: "nabila-azib",
    name: "Dr. Nabila AZIB",
    image: "/case/case_1.png",
    isComingSoon: false,
  },
  {
    id: "diala-haykal",
    name: "Dr. Diala HAYKAL",
    image: "/case/case_2.png",
    isComingSoon: true,
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={study.isComingSoon ? "/case-studies" : "#"}
              className="block group"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)]">
                <div className="relative h-[280px] sm:h-[380px]">
                  <img
                    src={study.image}
                    alt={`${study.name} Case Study`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#081F4D]">
                      {study.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
