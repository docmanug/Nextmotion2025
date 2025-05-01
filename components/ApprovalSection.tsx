"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ApprovalSectionProps {
  title: string;
  subtitle: string;
  description: string;
  certifications: {
    medical: string;
    security: string;
    quality: string;
  };
  resources: {
    ebook: {
      type: string;
      title: string;
    };
    social: {
      type: string;
      title: string;
    };
    events: {
      type: string;
      title: string;
    };
  };
  discoverButton: string;
}

const resources = [
  {
    type: "E-BOOK",
    title: "Learn more about Digital Consultation in Aesthetic Medicine",
    image: "/ebook.png",
  },
  {
    type: "SOCIAL MEDIA KIT",
    title: "Increase awareness of your clinic on Social Media",
    image: "/ebook.png",
  },
  {
    type: "EVENTS FOR AESTHETIC SURGEONS",
    title: "Our events for the year 2025",
    image: "/ebook.png",
  },
];

export default function ApprovalSection({
  title,
  subtitle,
  description,
  certifications,
  resources: translatedResources,
  discoverButton,
}: ApprovalSectionProps) {
  const translatedContent = resources.map((resource, index) => {
    const keys = ["ebook", "social", "events"];
    const key = keys[index];
    const translatedResource =
      translatedResources?.[key as keyof typeof translatedResources];

    return {
      ...resource,
      type: translatedResource?.type || resource.type,
      title: translatedResource?.title || resource.title,
    };
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[32px] font-bold text-[#000B45] mb-12">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-10">
          {translatedContent.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow cursor-pointer max-w-[380px] w-full mx-auto"
            >
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src={resource.image}
                  alt={resource.type}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[16px] font-medium text-[#0045FF] tracking-wide mb-2">
                {resource.type}
              </div>
              <h3 className="text-[24px] font-bold text-[#000B45] leading-snug">
                {resource.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-2 border-[#0045FF] text-[#0045FF] hover:bg-[#0045FF] hover:text-white px-8 py-3 h-auto text-base font-semibold transition-colors"
          >
            {discoverButton || "Discover all our resources"}
          </Button>
        </div>
      </div>
    </section>
  );
}
