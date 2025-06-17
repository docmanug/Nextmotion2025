"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";
import { OptimizedImage } from "@/components/ui/optimized-image";

const specialties = [
  "Aesthetic doctor",
  "Assistant",
  "Beautician",
  "Clinic Manager",
  "Clinic owner",
  "Dental surgeon",
  "Dermatologist",
  "Dietician",
  "Distributor",
  "Industry representative",
  "Injecting nurse",
  "Intern/Student",
  "Journalist",
  "Kinesitheraphist",
  "Marketing (industry/clinic)",
  "Marketing (industry)",
  "Orl Distributor",
  "Other surgeon",
  "Plastic surgeon",
  "Teaching school",
  "clinic team member",
];

const clientTypes = [
  "Médecin seul",
  "Cabinet",
  "Centre",
  "Clinique",
  "Groupe",
  "Partenaire",
  "Distributeur",
  "Investisseur",
  "Industriel",
  "Hôpital",
  "Autre",
  "Beauty center",
];

const countryData = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Brazil", code: "+55" },
  { name: "Bulgaria", code: "+359" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "Estonia", code: "+372" },
  { name: "Ethiopia", code: "+251" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Greenland", code: "+299" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Jamaica", code: "+1" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Madagascar", code: "+261" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Malta", code: "+356" },
  { name: "Mexico", code: "+52" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Morocco", code: "+212" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nigeria", code: "+234" },
  { name: "North Korea", code: "+850" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Panama", code: "+507" },
  { name: "Paraguay", code: "+595" },
  { name: "Peru", code: "+51" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Thailand", code: "+66" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vatican City", code: "+379" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
  { name: "Zimbabwe", code: "+263" },
];

const interests = [
  "NextMotion Consult",
  "NextMotion Capture",
  "NextMotion 3D",
  "Revolution",
  "Agenda",
];

export default function ContactForm() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.contact?.form || {});

  if (!messages) return null;

  return (
    <section className="py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex items-center justify-center lg:justify-start text-center lg:text-left">
            <div className="space-y-6 sm:space-y-8 max-w-lg mx-auto lg:mx-0">
              <div>
                <h2 className="text-3xl sm:text-[32px] font-bold text-[#081F4D] mb-3 sm:mb-4">
                  {t("title")}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {t("description")}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                    <OptimizedImage
                      src="/contact/contact_1.webp"
                      alt={t("features.beforeAfter")}
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[#081F4D] font-semibold text-sm sm:text-base">
                    {t("features.beforeAfter")}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                    <OptimizedImage
                      src="/contact/contact_2.webp"
                      alt={t("features.clinicManagement")}
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[#081F4D] font-semibold text-sm sm:text-base">
                    {t("features.clinicManagement")}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                    <OptimizedImage
                      src="/contact/contact_3.webp"
                      alt={t("features.simulation")}
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[#081F4D] font-semibold text-sm sm:text-base">
                    {t("features.simulation")}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                    <OptimizedImage
                      src="/contact/contact_4.webp"
                      alt={t("features.patientServices")}
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[#081F4D] font-semibold text-sm sm:text-base">
                    {t("features.patientServices")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-[0_4px_20px_#3E7AB6AB]">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm mb-1.5">
                    {t("fields.firstName.label")}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none"
                    placeholder={t("fields.firstName.placeholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1.5">
                    {t("fields.lastName.label")}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none"
                    placeholder={t("fields.lastName.placeholder")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1.5">
                  {t("fields.email.label")}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none"
                  placeholder={t("fields.email.placeholder")}
                />
              </div>

              <div>
                <label className="block text-sm mb-1.5">
                  {t("fields.phone.label")}
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select className="w-full sm:w-[180px] px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none">
                    {countryData.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    required
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none"
                    placeholder={t("fields.phone.placeholder")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1.5">
                  {t("fields.clientType.label")}
                </label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none">
                  <option value="">{t("fields.clientType.placeholder")}</option>
                  {clientTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1.5">
                  {t("fields.specialty.label")}
                  <span className="text-red-500">*</span>
                </label>
                <div className="max-h-48 sm:max-h-none overflow-y-auto border border-gray-300 rounded-lg divide-y divide-gray-200">
                  {specialties.map((specialty) => (
                    <label
                      key={specialty}
                      className="flex items-center px-3 sm:px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#1650EF] focus:ring-[#1650EF]"
                      />
                      <span className="ml-2 text-sm">{specialty}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1.5">
                  Country<span className="text-red-500">*</span>
                </label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none">
                  <option value="">{t("fields.specialty.placeholder")}</option>
                  {countryData.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1.5">
                  {t("fields.interest.label")}
                </label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none">
                  <option value="">{t("fields.interest.placeholder")}</option>
                  {interests.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1.5">
                  {t("fields.message.label")}
                </label>
                <textarea
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-[#1650EF] focus:ring-1 focus:ring-[#1650EF] outline-none resize-none h-20 sm:h-24"
                  placeholder={t("fields.message.placeholder")}
                />
              </div>

              <Button className="w-full bg-[#1650EF] text-white hover:bg-[#1345D1] py-4 sm:py-6 h-auto text-sm sm:text-base font-semibold">
                {t("submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
