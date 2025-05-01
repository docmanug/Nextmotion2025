"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  demoButton: string;
  watchButton: string;
}

export default function Hero({
  title,
  subtitle,
  demoButton,
  watchButton,
}: HeroProps) {
  return (
    <div className="relative pt-[120px] sm:pt-[160px] lg:pt-[200px] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-white to-white -z-10" />
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col items-start gap-6 sm:gap-8 pt-0 pb-8 sm:pb-16">
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[700px]">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-tight text-gray-900">
              {title}
            </h1>
            <p className="text-lg sm:text-xl font-bold leading-relaxed text-gray-700 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact_form">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 sm:px-8 py-3 h-auto rounded-full"
                >
                  {demoButton}
                </Button>
              </Link>
              <Link
                href="https://youtu.be/5ppBRo2iFYg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-gray-900 border-2 border-black hover:bg-gray-50 font-semibold text-base px-8 sm:px-12 py-3 h-auto rounded-full"
                >
                  {watchButton}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex justify-center">
          <Image
            src="/covers/iframe1.png"
            alt="Nextmotion Platform"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
