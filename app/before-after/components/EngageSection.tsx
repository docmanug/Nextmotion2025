"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EngageSection() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/second/engage_icon.png"
                  alt="Engage Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Attract and Engage New Patients</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Attract new patients with engaging, social media-ready content. Effortlessly create vertical-format visuals that highlight before/after transformations. Secure patient consent electronically through the app and generate interactive web links to showcase your results, boosting visibility and trust.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Social Media-Ready Content</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Instantly generate vertical-format content optimized for social platforms. Drive engagement with authentic before/after stories that resonate with potential patients.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Integrated Consent Management</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Secure patient image rights within the app and ensure compliance when sharing their transformations across digital platforms.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Interactive Web Links</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  With a single click, generate web links that can be easily integrated into your website, enabling your audience to interact with before/after image comparisons of your best results.
                </p>
              </div>
            </div>
            
          </div>

          <div>
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Engage Showcase"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 