"use client";

import { ChevronLeft, ChevronRight, Link as LucideLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface CommunitySectionProps {
  title: string;
  subtitle: string;
}

const testimonials = [
  {
    name: "Dr. Diala Haykal",
    title: "Aesthetic doctor",
    location: "Paris",
    videoThumbnail: "/covers/iframe1.png",
    videoUrl: "/videos/itw.mp4",
  },
  {
    name: "Dr. Sophie Loubeyres",
    title: "Dermatologist",
    location: "Pau",
    videoThumbnail: "/covers/iframe1.png",
    videoUrl: "",
  },
  {
    name: "Dr. Joseph Marciano",
    title: "Aesthetic doctor",
    location: "Paris",
    videoThumbnail: "/covers/iframe2.png",
    videoUrl: "/videos/joseph.mp4",
  },
  {
    name: "Dr. Nabila AZIB",
    title: "Plastic surgeon",
    location: "Morocco",
    videoThumbnail: "/covers/iframe4.png",
    videoUrl: "/videos/nabila.mp4",
  },
  {
    name: "Dr. Miguel Stanley",
    title: "Founder of White Clinic",
    location: "Lisbon",
    videoThumbnail: "/covers/iframe5.png",
    videoUrl: "/videos/miguel.mp4",
  },
  {
    name: "Dr. Per Heden",
    title: "Plastic surgeon",
    location: "Stockholm",
    videoThumbnail: "/covers/iframe5.png",
    videoUrl: "/videos/perheden.mp4",
  },
  {
    name: "Dr. Nikola Milojevic",
    title: "Aesthetic doctor",
    location: "Croatia",
    videoThumbnail: "/covers/iframe2.png",
    videoUrl: "/videos/nikola.mp4",
  },
  {
    name: "Dr. Jesica Sosa",
    title: "Aesthetic doctor",
    location: "Columbia",
    videoThumbnail: "/covers/iframe3.png",
    videoUrl: "/videos/jessica.mp4",
  },
  {
    name: "Dr. Hermes Godoy",
    title: "Plastic surgeon",
    location: "Uruguay",
    videoThumbnail: "/covers/iframe4.png",
    videoUrl: "/videos/hermes.mp4",
  },
];

export default function CommunitySection({
  title,
  subtitle,
}: CommunitySectionProps) {
  const [contactFormLink, setContactFormLink] = useState("/contact_form");
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const handlePlayVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: -300, // Scroll approximately one card width plus gap
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: 300, // Scroll approximately one card width plus gap
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setContactFormLink(
      window.location.pathname.startsWith("/fr")
        ? "/fr/formulaire_contact"
        : "/contact_form"
    );
  }, []);

  return (
    <section className="py-20 bg-[#051238] text-white">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-[40px] font-bold mb-3">{title}</h2>
          <p className="text-white/80 max-w-[700px] mx-auto mb-12 text-base leading-relaxed">
            {subtitle}
          </p>

          <Link
            href={contactFormLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black px-8 py-3 h-auto text-base font-medium tracking-wide"
            >
              Request a Demo
            </Button>
          </Link>
        </div>

        <div className="relative">
          {/* Video Cards */}
          <div
            ref={cardsContainerRef}
            className="flex gap-4 overflow-x-auto mb-6 px-2 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[250px] bg-white rounded-[10px] p-4"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={testimonial.videoUrl}
                    className="object-cover w-full h-full"
                    preload="metadata"
                    muted
                    controls
                  />
                  {/* <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayVideo(index)}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-[#000B45] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div> */}
                </div>
                <h3 className="font-bold text-[#000B45] text-lg leading-tight mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-[13px] text-[#8792A8]">
                  {testimonial.title}, {testimonial.location}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Directly below videos */}
          <div className="flex justify-center gap-3">
            <button
              className="p-4 rounded-full bg-[#1A245C] hover:bg-[#2A3573] transition-colors"
              onClick={scrollLeft}
            >
              <ChevronLeft className="w-6 h-6 text-white/90" />
            </button>
            <button
              className="p-4 rounded-full bg-[#1A245C] hover:bg-[#2A3573] transition-colors"
              onClick={scrollRight}
            >
              <ChevronRight className="w-6 h-6 text-white/90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
