"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature4() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/fourth/icons/feature4_icon.png"
                  alt="Online Patient Access Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Online Patient Access</h2>
            </div>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Offer your patients the ability to schedule appointments online,
              anytime. A secure and customizable portal allows you to attract
              new patients and manage their scheduling efficiently.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Secure Portal</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Patients can view their appointment history and book online
                  securely.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Customizable Portal</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Add your branding and easily integrate the portal into your website.
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

          <div className="order-1 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/fourth/feature4.png"
                  alt="Online Patient Access Screenshot"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}