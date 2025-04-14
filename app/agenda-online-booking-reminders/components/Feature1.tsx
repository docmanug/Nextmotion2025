"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature1() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex justify-center items-center">
              <Image
                src="/third/patient.png"
                alt="Nextmotion Consult App Screenshot"
                width={800}
                height={1000}
                className="w-full h-auto max-w-[600px]"
                priority
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/third/icons/camera.png"
                  alt="Consult Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Simplified Appointment
              Management</h2>
            </div>
      
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
            Organize and track all your patient appointments in real time with
an intuitive interface designed for aesthetic clinics. Save time and
avoid scheduling errors with automatic synchronization.
 
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Real-Time Calendar</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                



View your day, week, or month appointments at a glance.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Automatic Notifications</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                Receive alerts for changes or cancellations.
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
                Demandez une demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}