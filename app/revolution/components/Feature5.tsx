"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature5() {
  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/seventh/icons/rev_5_icon.png"
                  alt="Dynamic Videos Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Dynamic Videos</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Use Nextmotion Revolution's Dynamic Videos: showcase the natural
              results achieved. Extract photos at any point in the video for precise
              image comparisons.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Transparency and Trust</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Utilize the power of dynamic videos to instill confidence in your
                  patients about the natural results achieved with treatments, such as
                  Botox that doesn't freeze expressions when done correctly, or lip
                  injections that provide a natural look when smiling or puckering.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Maximum Engagement</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Create captivating content to illustrate your social media posts and
                  provide material for all your communication channels.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Multi-Angle Results</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Showcase your results from all angles to better demonstrate the
                  quality of your care.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Dynamic Comparisons</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Select any moment in the video to extract photos and compare
                  them in perfect synchronization.
                </p>
              </div>
            </div>
            
            
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/seventh/rev_5.png"
                alt="Dynamic Videos Demonstration"
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