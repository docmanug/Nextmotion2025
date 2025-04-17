"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature8() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/third/icons/feature8_icon.png"
                  alt="Integration Center Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Integration center
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Nextmotion allows you to seamlessly connect your clinic to a wide
              ecosystem of tools via our marketplace. Enjoy native integrations
              with solutions like Mailchimp, Brevo, HubSpot, and Stripe to
              automate your communications, simplify payment processing, and
              boost your clinic's efficiency. With a single click, access these
              services to improve both performance and patient relationships.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Mailchimp, Brevo & HubSpot
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Automate marketing campaigns, schedule communications, and
                  track patient engagement with smooth integrations with these
                  CRM platforms.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Stripe
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Simplify online payments with Stripe, providing your patients
                  with a secure and fast way to pay for consultations directly
                  through the online booking system.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Zapier
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Connect over 8,000 apps to Nextmotion, allowing you to further
                  customize workflows and automate repetitive tasks like
                  appointment reminders or resource management.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  APIs for Custom Integrations
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Our APIs enable you to take integration even further with your
                  internal systems. Whether you're embedding the online booking
                  page directly into your website or syncing your patient
                  database with existing software, our APIs provide full
                  flexibility to meet your specific needs.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="https://api.nextmotion.net/open_api/docs/redoc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent
 hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  Know more about our API
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/third/feature8.png"
                  alt="Nextmotion Integration Center Screenshot"
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
