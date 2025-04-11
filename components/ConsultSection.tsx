"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ConsultSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/capture-app-demo.png"
                alt="Nextmotion Consult App Screenshot"
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
                  src="/icons/consult.png"
                  alt="Consult Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Nextmotion Consult</h2>
            </div>
            
            <p className="text-[18px] font-[700] text-gray-900 mb-6">
              A powerful Electronic medical record to simplify patient management and boost efficiency.
            </p>
            
            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Access all your patient data in one place. From treatment records to invoices, streamline your workflow with our secure, cloud-based platform designed for aesthetic clinics.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Centralized Patient Management</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Access all patient records, treatments, and documents from a single, secure platform.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Integrated Online Agenda and Booking System</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Simplify scheduling with an intuitive agenda and allow patients to book appointments online seamlessly.
                </p>
              </div>
              
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Seamless Workflow</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Streamline your daily operations with tools for invoicing, consent forms, and medical records management.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">API and Integration Center</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Connect Nextmotion Consult with your favorite tools (HubSpot, Stripe, Mailchimp) or customize your workflow with our API.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">Secure Cloud Access</h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Store and retrieve your data anytime, anywhere with medical-grade cloud storage.
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
                Know more about Nextmotion Consult
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}