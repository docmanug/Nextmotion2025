"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative pt-[200px] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-white to-white -z-10" />
      <div className="max-w-[1300px] mx-auto px-14">
        <div className="flex flex-col items-start gap-8 pt-0 pb-16">
          <div className="flex flex-col items-start gap-6 max-w-[700px]">
            <h1 className="text-[50px] font-extrabold leading-tight text-gray-900">
              Optimize the Management of Your Aesthetic Clinic
            </h1>
            <p className="text-xl font-bold leading-relaxed text-black max-w-2xl">
              All-in-One Software to Simplify and Optimize Your Administrative
              Tasks
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-8 py-3 h-auto rounded-full"
              >
                Sign up for a demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-gray-900 border-2 border-black hover:bg-gray-50 font-semibold text-base px-12 py-3 h-auto rounded-full"
              >
                Play video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
