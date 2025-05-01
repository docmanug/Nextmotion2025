"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { countries } from "../../lib/countries";
import { FormEvent } from "react";

export default function ContactFormPage() {
  const [messages, setMessages] = useState<any>(null);
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

  useEffect(() => {
    const loadMessages = async () => {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    };
    loadMessages();
  }, [currentLocale]);

  const t = useTranslations(messages || {});

  if (!messages) return null;

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
                {t("contactForm.title")}
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                      {t("contactForm.form.firstName.label")}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
                      placeholder={t("contactForm.form.firstName.placeholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                      {t("contactForm.form.lastName.label")}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
                      placeholder={t("contactForm.form.lastName.placeholder")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                      {t("contactForm.form.email.label")}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] text-sm sm:text-base"
                      placeholder={t("contactForm.form.email.placeholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                      {t("contactForm.form.phone.label")}
                      <span className="text-red-500">*</span>
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
                        placeholder={t("contactForm.form.phone.placeholder")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-2 sm:mb-3">
                    {t("contactForm.form.profession.label")}
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
                        {t(
                          "contactForm.form.profession.options.aestheticPhysician"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.profession.options.aestheticSurgeon"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t("contactForm.form.profession.options.clinicManager")}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t("contactForm.form.profession.options.assistant")}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t("contactForm.form.profession.options.secretary")}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.profession.options.marketingSpecialist"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t("contactForm.form.profession.options.industry")}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="profession"
                        required
                        className="w-4 h-4 text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t("contactForm.form.profession.options.other")}
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-2 sm:mb-3">
                    {t("contactForm.form.practitioners.label")}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.practitioners.options.privatePractice"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.practitioners.options.smallFacility"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.practitioners.options.mediumFacility"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.practitioners.options.largeFacility"
                        )}
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                    {t("contactForm.form.country.label")}
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none text-[#081F4D] bg-white text-sm sm:text-base">
                    <option value="">
                      {t("contactForm.form.country.placeholder")}
                    </option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-2 sm:mb-3">
                    {t("contactForm.form.interestedIn.label")}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-sm sm:text-base">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t("contactForm.form.interestedIn.options.photoApp")}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.interestedIn.options.consultationSoftware"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.interestedIn.options.onlineAgenda"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.interestedIn.options.3DAnatomyTool"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.interestedIn.options.nextmotionRevolutionMachine"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.interestedIn.options.mixedRealityHeadset"
                        )}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-[#1650EF] border-[#E5E7EB] focus:ring-[#1650EF]"
                      />
                      <span className="text-[#081F4D]">
                        {t(
                          "contactForm.form.interestedIn.options.injectionRobot"
                        )}
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#081F4D] mb-1.5 sm:mb-2">
                    {t("contactForm.form.additionalInfo.label")}
                  </label>
                  <textarea
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-[#E5E7EB] focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none resize-none h-20 sm:h-24 text-[#081F4D] text-sm sm:text-base"
                    placeholder={t(
                      "contactForm.form.additionalInfo.placeholder"
                    )}
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-[200px] bg-[#1650EF] text-white hover:bg-[#1345D1] py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
                  >
                    {t("contactForm.form.submitButton")}
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
      <Footer
        professional={{
          title: t("professional.title"),
          description: t("professional.description"),
          button: t("professional.button"),
        }}
        platform={{
          title: t("platform.title"),
          links: {
            home: t("platform.links.home"),
            capture: t("platform.links.capture"),
            revolution: t("platform.links.revolution"),
            "3d": t("platform.links.3d"),
            consult: t("platform.links.consult"),
            agenda: t("platform.links.agenda"),
            classes: t("platform.links.classes"),
            robotics: t("platform.links.robotics"),
          },
        }}
        company={{
          title: t("company.title"),
          links: {
            about: t("company.links.about"),
            contact: t("company.links.contact"),
            contents: t("company.links.contents"),
            cases: t("company.links.cases"),
            blog: t("company.links.blog"),
            events: t("company.links.events"),
            podcast: t("company.links.podcast"),
            releases: t("company.links.releases"),
          },
        }}
        help={{
          title: t("help.title"),
          links: {
            login: t("help.links.login"),
            demo: t("help.links.demo"),
            privacy: t("help.links.privacy"),
            legal: t("help.links.legal"),
          },
        }}
        newsletter={{
          title: t("newsletter.title"),
          highlight: t("newsletter.highlight"),
          placeholder: t("newsletter.placeholder"),
          button: t("newsletter.button"),
        }}
      />
    </main>
  );
}
