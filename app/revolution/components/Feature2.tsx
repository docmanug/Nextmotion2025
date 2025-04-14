"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature2() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/seventh/rev_2.png"
                alt="Nextmotion Revolution Patient Experience"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/seventh/icons/easeofuse.png"
                  alt="Patient Experience Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Patient Experience</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Offer a Unique Experience to Your Patients with Nextmotion
              Revolution; the modern and aesthetic device not only enhances the
              patient experience but also sets your clinic apart from competitors.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Unique Experience</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Provide your patients with an innovative and memorable experience
                  using modern technology that reassures them about the quality of
                  care you offer in your clinic.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Aesthetic Device</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  A visually appealing machine that will seamlessly integrate into your
                  premises and enhance their appearance.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Differentiation of Your Clinic</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Utilize technology that your patients won't find anywhere else,
                  significantly improving the experience they have during their
                  successive visits to your clinic.
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
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}