"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature5() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/marketing/icons/marketing_5_icon.png"
                  alt="Marketing emails Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Marketing emails
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Connect Nextmotion to Brevo or Sendgrid : create pixel-perfect
              custom HTML emails! Launch effective and engaging email campaigns
              for your current and potential patients to promote special events
              or simply wish them a happy birthday 🎉.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Sendgrid Integration
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Create high-quality HTML emails.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Effective Campaigns
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Launch engaging email campaigns.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Personalized Emails
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Design custom emails tailored for your patients.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/marketing/marketing_5.png"
                  alt="Marketing emails Interface"
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
