"use client";

import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative pt-[200px] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-white to-white -z-10" />
      <div className="max-w-[1300px] mx-auto px-14">
        <div className="flex flex-col items-start gap-8 pt-0 pb-16">
          <div className="flex flex-col items-start gap-6 max-w-[700px]">
            <h1 className="text-[50px] font-extrabold leading-tight text-gray-900">
              Transform Your Aesthetic Practice with Nextmotion
            </h1>
            <p className="text-xl font-bold leading-relaxed text-gray-700 max-w-2xl">
              Explore our cutting-edge tools designed to enhance your consultations, standardize your results, and engage your patients like never before
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 h-auto rounded-full"
              >
                Schedule a demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-gray-900 border-2 border-black hover:bg-gray-50 font-semibold text-base px-12 py-3 h-auto rounded-full"
              >
                Watch video
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="max-w-[1300px] mx-auto px-6 py-16">
        <div className="flex justify-center">
          <Image 
            src="/covers/iframe1.png" 
            alt="Nextmotion Platform" 
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}