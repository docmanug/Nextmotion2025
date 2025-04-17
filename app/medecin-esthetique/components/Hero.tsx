"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative pt-[100px] sm:pt-[200px] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-white to-white -z-10" />
      <div className="max-w-[1300px] mx-auto px-4 sm:px-14">
        <div className="flex flex-col items-start gap-6 sm:gap-8 pt-0 pb-8 sm:pb-16">
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[700px]">
            <h1 className="text-3xl sm:text-[50px] font-extrabold leading-tight text-gray-900">
              Attract, Convert, and Retain Your Patients in Your Aesthetic
              Clinic
            </h1>
            <p className="text-lg sm:text-xl font-bold leading-relaxed text-black max-w-2xl">
              An All-in-One Solution to Streamline Your Aesthetic Clinic
              Management and Improve Patient Satisfaction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 sm:px-8 py-2.5 sm:py-3 h-auto rounded-full"
                >
                  Request a demo
                </Button>
              </Link>
              <Link
                href="https://youtu.be/5ppBRo2iFYg"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-gray-900 border-2 border-black hover:bg-gray-50 font-semibold text-base px-8 sm:px-12 py-2.5 sm:py-3 h-auto rounded-full"
                >
                  Play video
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
