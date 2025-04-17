"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { countries } from "../../lib/countries";
import { FormEvent } from "react";

export default function ContactFormPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-20 pb-8 md:pt-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[45%,55%] gap-0 items-center relative">
            {/* Form Section */}
            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:mr-[-120px] relative z-20">
              <h1 className="text-2xl sm:text-[28px] font-bold text-[#081F4D] mb-6 sm:mb-8">
                Contact form
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                      First name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                      Last name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                      E-mail<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
                      placeholder="E-mail"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                      Mobile phone number<span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                      <select className="w-[120px] px-2 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm">
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name} ({country.dial_code})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        required
                        className="flex-1 min-w-[180px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-2 sm:mb-3">
                    What is your profession?
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Aesthetic physician
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">Aesthetic surgeon</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Aesthetic clinic manager
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">Assistant</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">Secretary</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Marketing specialist
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">Industry</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">Other</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-2 sm:mb-3">
                    How many practitioners work within your clinic?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Private Practice (Single Practitioner)
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Small Facility (Fewer than 3 Practitioners)
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Medium Facility (4-10 Practitioners)
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Large Facility (More than 10 Practitioners)
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                    Select Your Country
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm sm:text-base">
                    <option value="">Please Select</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-2 sm:mb-3">
                    You Are Interested In (Multiple Choices Possible)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Our Photo App (NM Capture)
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Our Consultation Software (NM Consult)
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">Our Online Agenda</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Our 3D Anatomy Tool (Nextmotion 3D)
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Our Nextmotion Revolution Machine
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Our Mixed Reality Headset (Virtual Classes)
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        Our Injection Robot (ELENA)
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                    Additional Information (Best Time to Contact You, etc.)
                  </label>
                  <textarea
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none resize-none h-20 sm:h-24 text-[#081F4D] text-sm sm:text-base"
                    placeholder="Additional questions, best moment to contact you, etc..."
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-[200px] bg-[#1650EF] text-white hover:bg-[#1345D1] py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
                  >
                    Send my request
                  </button>
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div className="hidden lg:block relative z-10">
              <div className="relative max-w-[420px] drop-shadow-2xl lg:ml-[120px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1650EF]/20 to-transparent shadow-[0_8px_30px_rgb(0,0,0,0.12)]" />
                <Image
                  src="/contact_form/contact_form_1.png"
                  alt="Contact Form"
                  width={420}
                  height={525}
                  className="rounded-2xl object-contain relative z-10 shadow-[0_20px_50px_rgba(8,31,77,0.2)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
