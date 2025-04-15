"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature2() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/marketing/marketing_2.png"
                  alt="Good reviews Interface"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/marketing/icons/marketing_2_icon.png"
                  alt="Good reviews Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Good reviews</h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Easily Request Positive Reviews : use NM Consult to send
              invitations for patients to leave reviews about your clinic and
              practitioners, enhancing your online reputation.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Easy Requests
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Invite your patients to leave reviews with just one click.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Reputation Boost
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Enhance your online reputation with positive reviews.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Using NM Consult
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Generate review requests directly through NM Consult.
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
                Demandez une démo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
