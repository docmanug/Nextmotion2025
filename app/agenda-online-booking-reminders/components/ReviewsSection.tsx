"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const reviews = [
  {
    rating: 5,
    date: "5 months ago",
    text: "Software used in my cosmetic dermatology practice, I couldn't do without it today: it allows me to trace the history of",
    author: "Marie Jourdan",
    more: "...more"
  },
  {
    rating: 5,
    date: "6 months ago",
    text: "Management software for the aesthetic medicine center, created by an aesthetic doctor and therefore completely adapted",
    author: "Christine Chivilo",
    more: "...more"
  },
  {
    rating: 5,
    date: "6 months ago",
    text: "Nextmotion is an ideal patient management platform for clinics or independent doctors specializing in aesthetic",
    author: "Florian Coldepin",
    more: "...more"
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Left side - Rating summary */}
          <div className="flex flex-col items-center justify-center shrink-0 lg:mr-8">
            <h2 className="text-[32px] text-gray-700 font-normal leading-none mb-1">4.4 Stars</h2>
            <div className="flex items-center gap-0.5 mb-1">
              {[1, 2, 3, 4].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-8 h-8 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-[15px] mb-1">
              <span className="text-gray-600">Based on </span>
              <span className="text-gray-500 font-bold">21 reviews</span>
            </p>
            <div className="flex items-center gap-1">
              <OptimizedImage
                src="/icons/gooogle-fill.webp"
                alt="Google"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-gray-600 text-[15px] font-bold">Google<br /> Reviews</span>
            </div>
          </div>

          {/* Right side - Reviews grid with navigation */}
          <div className="flex items-center w-full lg:max-w-[1000px]">
            <button className="p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors shrink-0">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-3 border border-[#BBBDBF] rounded-lg w-full min-w-[280px]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex gap-0.5">
                      {Array(5).fill(null).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <OptimizedImage
                      src="/icons/google.webp"
                      alt="Google"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-gray-500 text-[15px] mb-1">{review.date}</div>
                  <p className="text-gray-700 text-[15px] mb-1">
                    {review.text}
                    <span className="text-gray-500 cursor-pointer ml-1">{review.more}</span>
                  </p>
                  <div className="font-medium text-[15px] text-gray-900">{review.author}</div>
                </div>
              ))}
            </div>

            <button className="p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors shrink-0">
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 