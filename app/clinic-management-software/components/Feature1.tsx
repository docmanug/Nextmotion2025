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
              <h2 className="text-4xl font-bold text-gray-900">Innovative Patient Management</h2>
            </div>
      
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
            Software designed by a Doctor for Fellow Practitioners An intuitive, user-friendly, and scalable interface: access all relevant information
              on a single page. Benefit from automated medical observations (via
              questionnaires or AI) and an efficient "treatment plan" module that
              allows you to generate quotes, consents, and invoices with a single
              click.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Intuitive Interface</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  All relevant information on a single page—no more wasting time
                  searching for the right consultation, before/after photos, treatment
                  plan, or administrative documents.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Automated Observations</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Using our quick questionnaires (Bolt notes) or AI-powered
                  transcription of consultation audio recordings, your observations are
                  effortlessly recorded, allowing you to focus on your patients.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Treatment Plans</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Generate quotes, consents, and invoices with just one click.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}