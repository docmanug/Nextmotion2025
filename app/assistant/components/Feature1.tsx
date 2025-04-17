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
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/assistant/assistant_1.png"
                  alt="Key Features Interface"
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
                  src="/assistant/icons/assistant_1_icon.png"
                  alt="Key Features Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Key features</h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Use Our Solution for Seamless Pre-Consultation and Administrative
              Management : fill out pre-consultation questionnaires on iPad or
              smartphone, generate quotes and consents with electronic
              signatures, and automatically adjust stock levels. Simplify the
              conversion of quotes into invoices, streamline accounting and
              stock management, and integrate before/after photos directly into
              patient records.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Digital Pre-Consultation Questionnaire
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Have patients fill out questionnaires on iPad or smartphone,
                  automatically synced with their patient records.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Quote and Consent Generation
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Generate documents with a single click, allowing patients to
                  sign electronically on a tablet or smartphone.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Product Traceability
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Take photos of consumable labels for automatic stock deduction
                  in the digital inventory.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Quote to Invoice Transformation
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Easily convert quotes into invoices with a single click and
                  manage payments, including deferred ones.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Simplified Accounting
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Quickly export accounting data in Excel format, tailored for
                  aesthetic clinic accounting with VAT management.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Simplified Inventory
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Easily manage consumables, receive low-stock alerts, and
                  conduct inventory checks effortlessly.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Before/After Photos
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Integrate Nextmotion Capture with the software for automatic
                  inclusion of before/after photos in patient records.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  Schedule a demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
