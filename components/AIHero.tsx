"use client";

import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AIHeroProps {
  title: string;
  subtitle: string;
  demoButton: string;
  discoverButton: string;
  className?: string;
}

export default function AIHero({
  title,
  subtitle,
  demoButton,
  discoverButton,
  className,
  ...props
}: AIHeroProps) {
  const [contactFormLink, setContactFormLink] = useState<string>("/contact_form");

  useEffect(() => {
    setContactFormLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/formulaire_contact"
        : "/contact_form"
    );
  }, []);

  return (
    <div
      className={`relative pt-[120px] sm:pt-[160px] lg:pt-[200px] px-4 sm:px-6 lg:px-8 ${className || ''}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-white to-white -z-10" />
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col items-center gap-6 sm:gap-8 pt-0 pb-8 sm:pb-16 text-center">
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[900px]">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-tight text-gray-900">
              {title}
            </h1>
            <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-700 max-w-3xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link href={contactFormLink}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-6 sm:px-8 py-3 h-auto rounded-full"
                >
                  {demoButton}
                </Button>
              </Link>
              <Link href="#ai-modules">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-gray-900 border-2 border-black hover:bg-gray-50 font-semibold text-base px-8 sm:px-12 py-3 h-auto rounded-full"
                >
                  {discoverButton}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex justify-center">
          <div className="relative w-full aspect-[16/9] rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/5ppBRo2iFYg"
              title="Nextmotion Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}