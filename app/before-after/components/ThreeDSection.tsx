"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThreeDSection() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/second/showcase.png"
                  alt="Portfolio Icon"
                  width={80}
                  height={80}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Showcase Expertise with Portfolios and Keywords</h2>
            </div>
        
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
            Boost your expertise by adding searchable keywords to your photos and building a complete treatment portfolio. Use this powerful tool to showcase similar cases, enhance consultations, and inspire
              confidence by presenting successful results.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Keyword-Driven Organization</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Tag your photos with searchable keywords to instantly locate specific before/after cases and build a comprehensive archive.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Powerful Patient Portfolio</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Create a visually compelling portfolio of your treatments to convert prospects during consultations, showcasing similar cases to inspire confidence and trust.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Consultation Illustration</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Showcase results from similar patients to highlight your expertise, reassure, and build trust during consultations.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[2px] border-[#284fe6] text-black-600 bg-transparent
hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
              >
                Sign up for a 15min demo
              </Button>
            </div>
          </div>

          <div>
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Portfolio Showcase"
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