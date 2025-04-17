"use client";

import { ChevronLeft, ChevronRight, Link as LucideLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    name: "Dr. Sophie Loubeyres",
    title: "Dermatologist",
    location: "Pau",
    videoThumbnail: "/covers/iframe1.png",
    videoUrl: "#",
  },
  {
    name: "Dr. Joseph Marciano",
    title: "Aesthetic doctor",
    location: "Paris",
    videoThumbnail: "/covers/iframe2.png",
    videoUrl: "#",
  },
  {
    name: "Meline Puech",
    title: "Clinic owner",
    location: "Toulouse",
    videoThumbnail: "/covers/iframe3.png",
    videoUrl: "#",
  },
  {
    name: "Dr. Nabila AZIB",
    title: "Plastic surgeon",
    location: "Morocco",
    videoThumbnail: "/covers/iframe4.png",
    videoUrl: "#",
  },
  {
    name: "Dr. Miguel Stanley",
    title: "Founder of White Clinic",
    location: "Lisbon",
    videoThumbnail: "/covers/iframe5.png",
    videoUrl: "#",
  },
  {
    name: "Dr. Per Heden",
    title: "Plastic surgeon",
    location: "Stockholm",
    videoThumbnail: "/covers/iframe5.png",
    videoUrl: "#",
  },
];

export default function CommunitySection() {
  return (
    <section className="py-20 bg-[#051238] text-white">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-[40px] font-bold mb-3">
            Join the Nextmotion community
          </h2>
          <p className="text-white/80 max-w-[700px] mx-auto mb-12 text-base leading-relaxed">
            Adopting our technology also means joining a community of doctors
            committed to the democratization of digital consultation and
            knowledge sharing.
          </p>

          <Link href="/contact_form" target="_blank" rel="noopener noreferrer">
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
          <div className="flex gap-4 overflow-x-hidden mb-6 px-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[250px] bg-white rounded-[10px] p-4"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                  <Image
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-[#000B45] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
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
            <button className="p-4 rounded-full bg-[#1A245C] hover:bg-[#2A3573] transition-colors">
              <ChevronLeft className="w-6 h-6 text-white/90" />
            </button>
            <button className="p-4 rounded-full bg-[#1A245C] hover:bg-[#2A3573] transition-colors">
              <ChevronRight className="w-6 h-6 text-white/90" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
