"use client";

import { useState } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { OptimizedVideo } from "@/components/ui/optimized-video";

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6666 5L7.49992 14.1667L3.33325 10"
      stroke="#22C55E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5L5 15M5 5L15 15"
      stroke="#D1D5DB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductCard = ({
  title,
  videoSrc,
  features,
  isPopular = false,
  variant = "white",
}: {
  title: string;
  videoSrc: string;
  features: { text: string; available: boolean }[];
  isPopular?: boolean;
  variant?: "dark" | "white" | "light";
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const bgColor = {
    dark: "bg-[#081F4D]",
    white: "bg-white",
    light: "bg-white",
  }[variant];

  const textColor = variant === "dark" ? "text-white" : "text-[#1650EF]";
  const subTextColor = variant === "dark" ? "text-white" : "text-black";
  const featureTextColor = variant === "dark" ? "text-white" : "text-black";

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={`${bgColor} rounded-2xl p-6 relative flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.08)]`}
    >
      {isPopular && (
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#284fe6] text-white px-6 py-2 rounded-full uppercase text-sm font-semibold">
            Populaire
          </div>
        </div>
      )}
      <div
        className="mb-6 relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <OptimizedVideo
          src={videoSrc}
          className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
          controls
          playsInline
          onClick={handleVideoClick}
        />
      </div>
      <div className="text-center mb-8">
        <OptimizedImage src="/logo.webp" alt="Next Motion" className="mx-auto mb-2 w-20 h-auto" />
        <h2 className={`text-4xl font-bold ${textColor}`}>{title}</h2>
      </div>
      <div className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="mt-1 ml-4">
              {feature.available ? <CheckIcon /> : <CrossIcon />}
            </div>
            <div
              className={`${
                feature.available ? featureTextColor : "text-gray-400"
              } text-[15px] mr-4`}
            >
              {feature.text}
              {feature.text === "Consistent colors" && (
                <div className={`text-sm ${subTextColor}`}>
                  (white balance, exposure)
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ComparisonSection() {
  const captureFeatures = [
    { text: "Patient Front Positioning", available: true },
    { text: "Consistent colors", available: true },
    { text: "Before/after pictures", available: true },
    { text: "Before/after videos", available: true },
    { text: "Consistent lighting", available: false },
    { text: "Consistent Patient/Camera distance", available: false },
    { text: "Consistent patient Side Profile Positioning", available: false },
    { text: "Dynamic videos (180°, 360°, 720°)", available: false },
  ];

  const ringLightFeatures = [
    { text: "Patient Front Positioning", available: true },
    { text: "Consistent colors", available: true },
    { text: "Before/after pictures", available: true },
    { text: "Before/after videos", available: true },
    { text: "Consistent lighting", available: true },
    { text: "Consistent Patient/Camera distance", available: true },
    { text: "Consistent patient Side Profile Positioning", available: false },
    { text: "Dynamic videos (180°, 360°, 720°)", available: false },
  ];

  const revolutionFeatures = [
    { text: "Patient Front Positioning", available: true },
    { text: "Consistent colors", available: true },
    { text: "Before/after pictures", available: true },
    { text: "Before/after videos", available: true },
    { text: "Consistent lighting", available: true },
    { text: "Consistent Patient/Camera distance", available: true },
    { text: "Consistent patient Side Profile Positioning", available: true },
    { text: "Dynamic videos (180°, 360°, 720°)", available: true },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            title="Capture"
            videoSrc="/before/capture.mp4"
            features={captureFeatures}
            isPopular={true}
            variant="dark"
          />
          <ProductCard
            title="RingLight"
            videoSrc="/before/ringlight.m4v"
            features={ringLightFeatures}
            variant="white"
          />
          <ProductCard
            title="Revolution"
            videoSrc="/before/revolution.m4v"
            features={revolutionFeatures}
            variant="light"
          />
        </div>
      </div>
    </section>
  );
}
