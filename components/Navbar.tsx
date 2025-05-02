"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Globe, X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, getMessages } from "@/utils/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [messages, setMessages] = useState<any>(null);
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
  const router = useRouter();

  useEffect(() => {
    const loadMessages = async () => {
      const msgs = await getMessages(currentLocale);
      setMessages(msgs);
    };
    loadMessages();
  }, [currentLocale]);

  const t = useTranslations(messages || {});

  if (!messages) return null;

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (newLocale === currentLocale) return;

    if (newLocale === "en") {
      // Handle special case for photos-avant-apres to before-after
      if (pathname === "/fr/photos-avant-apres") {
        router.push("/before-after");
      } else if (pathname === "/fr/tarifs-solution-esthetique") {
        router.push("/en/pricing-aesthetic-solution");
      } else if (pathname.includes("/fr/cas-clients")) {
        router.push("/en/case-studies");
      } else if (pathname === "/fr/contact" || pathname === "/contact") {
        router.push("/en/contact");
      } else if (pathname === "/fr/a-propos") {
        router.push("/en/about-us");
      } else if (pathname === "/fr/podcast") {
        router.push("/podcast");
      } else if (pathname === "/fr/formulaire_contact") {
        router.push("/contact_form");
      } else if (pathname === "/fr/3d-simulation-esthetique") {
        router.push("/en/3d-aesthetic-simulation");
      } else if (pathname === "/fr/logiciel-consultation-esthetique") {
        router.push("/clinic-management-software");
      } else if (pathname === "/fr/agenda-patient-en-ligne-rdv") {
        router.push("/agenda-online-booking-reminders");
      } else if (pathname === "/fr/virtual-classes") {
        router.push("/en/virtual-classes");
      } else if (pathname === "/fr/robot-injecteur-medecine-esthetique") {
        router.push("/en/injector-robot-aesthetic-medicine");
      } else if (pathname === "/fr/manager") {
        router.push("/en/manager");
      } else if (pathname === "/fr/medecin-esthetique") {
        router.push("/en/medecin-esthetique");
      } else if (pathname === "/fr/assistant") {
        router.push("/en/assistant");
      } else if (pathname === "/fr/chaines") {
        router.push("/en/chaines");
      } else if (pathname === "/fr/marketing") {
        router.push("/en/marketing");
      } else if (pathname === "/fr") {
        router.push("/");
      } else {
        router.push(pathname.replace("/fr", ""));
      }
    } else {
      // Handle special case for before-after to photos-avant-apres
      if (pathname === "/before-after") {
        router.push("/fr/photos-avant-apres");
      } else if (pathname.includes("/en/pricing-aesthetic-solution")) {
        router.push("/fr/tarifs-solution-esthetique");
      } else if (pathname.includes("/en/case-studies")) {
        router.push("/fr/cas-clients");
      } else if (pathname === "/en/contact" || pathname === "/contact") {
        router.push("/fr/contact");
      } else if (pathname === "/en/about-us") {
        router.push("/fr/a-propos");
      } else if (pathname === "/podcast") {
        router.push("/fr/podcast");
      } else if (pathname === "/contact_form") {
        router.push("/fr/formulaire_contact");
      } else if (pathname === "/en/3d-aesthetic-simulation") {
        router.push("/fr/3d-simulation-esthetique");
      } else if (pathname === "/clinic-management-software") {
        router.push("/fr/logiciel-consultation-esthetique");
      } else if (pathname === "/agenda-online-booking-reminders") {
        router.push("/fr/agenda-patient-en-ligne-rdv");
      } else if (pathname === "/en/virtual-classes") {
        router.push("/fr/virtual-classes");
      } else if (pathname === "/en/injector-robot-aesthetic-medicine") {
        router.push("/fr/robot-injecteur-medecine-esthetique");
      } else if (pathname === "/en/manager") {
        router.push("/fr/manager");
      } else if (pathname === "/en/medecin-esthetique") {
        router.push("/fr/medecin-esthetique");
      } else if (pathname === "/en/assistant") {
        router.push("/fr/assistant");
      } else if (pathname === "/en/chaines") {
        router.push("/fr/chaines");
      } else if (pathname === "/en/marketing") {
        router.push("/fr/marketing");
      } else if (pathname === "/") {
        router.push("/fr");
      } else {
        router.push(`/fr${pathname}`);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex items-center">
            <Link
              href={window.location.pathname.startsWith("/fr") ? "/fr" : "/"}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="Nextmotion"
                className="h-[22px] w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] text-gray-900 hover:text-[#0066FF]">
                <span>{t("navbar.solutions")}</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-72 bg-[#0066FF] shadow-lg rounded-lg mt-1 transition-all duration-300">
                <div className="absolute h-6 w-full -top-6 bg-transparent"></div>
                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/photos-avant-apres"
                      : "/before-after"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.solutionsMenu.capture")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr" ? "/fr/revolution" : "/revolution"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.solutionsMenu.revolution")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/3d-simulation-esthetique"
                      : "/en/3d-aesthetic-simulation"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.solutionsMenu.3d")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/logiciel-consultation-esthetique"
                      : "/clinic-management-software"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.solutionsMenu.consult")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/agenda-patient-en-ligne-rdv"
                      : "/agenda-online-booking-reminders"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.solutionsMenu.agenda")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/virtual-classes"
                      : "/en/virtual-classes"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.solutionsMenu.virtualClasses")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/robot-injecteur-medecine-esthetique"
                      : "/en/injector-robot-aesthetic-medicine"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.solutionsMenu.robotics")}
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] text-gray-900 hover:text-[#0066FF]">
                <span>{t("navbar.youAre")}</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-72 bg-[#0066FF] shadow-lg rounded-lg mt-1 transition-all duration-300">
                <div className="absolute h-6 w-full -top-6 bg-transparent"></div>
                <Link
                  href={currentLocale === "fr" ? "/fr/manager" : "/en/manager"}
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.youAreMenu.clinicManager")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/medecin-esthetique"
                      : "/en/medecin-esthetique"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.youAreMenu.aestheticPractitioner")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr" ? "/fr/assistant" : "/en/assistant"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.youAreMenu.assistant")}
                </Link>
                <Link
                  href={currentLocale === "fr" ? "/fr/chaines" : "/en/chaines"}
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.youAreMenu.clinicChainManager")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr" ? "/fr/marketing" : "/en/marketing"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.youAreMenu.marketingManager")}
                </Link>
              </div>
            </div>

            <Link
              href={
                currentLocale === "fr"
                  ? "/fr/tarifs-solution-esthetique"
                  : "/en/pricing-aesthetic-solution"
              }
              className="text-[15px] text-gray-900 hover:text-[#0066FF]"
            >
              {t("navbar.pricing")}
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] text-gray-900 hover:text-[#0066FF]">
                <span>{t("navbar.resources")}</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-72 bg-[#0066FF] shadow-lg rounded-lg mt-1 transition-all duration-300">
                <div className="absolute h-6 w-full -top-6 bg-transparent"></div>
                <Link
                  href={
                    currentLocale === "fr" ? "/fr/a-propos" : "/en/about-us"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.resourcesMenu.aboutUs")}
                </Link>
                <Link
                  href={currentLocale === "fr" ? "/fr/blog" : "/blog"}
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.resourcesMenu.blog")}
                </Link>
                <Link
                  href="https://honey-vulture-ed5.notion.site/Nextmotion-Academy-1b4dff6c85d9808e9c01fb45bf1b173b?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.resourcesMenu.academy")}
                </Link>
                <Link
                  href={currentLocale === "fr" ? "/fr/podcast" : "/podcast"}
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.resourcesMenu.podcast")}
                </Link>
                <Link
                  href={`/${currentLocale}/contact`}
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.resourcesMenu.contact")}
                </Link>
                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/cas-clients"
                      : "/en/case-studies"
                  }
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.resourcesMenu.caseStudies")}
                </Link>
                <Link
                  href="/release-notes"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.resourcesMenu.releaseNotes")}
                </Link>
                <Link
                  href="https://api.nextmotion.net/open_api/docs/redoc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  {t("navbar.resourcesMenu.api")}
                </Link>
              </div>
            </div>

            <Link
              href="/login"
              className="text-[15px] text-gray-900 hover:text-[#0066FF]"
            >
              {t("navbar.login")}
            </Link>

            <Link
              href={
                currentLocale === "fr"
                  ? "/fr/formulaire_contact"
                  : "/contact_form"
              }
            >
              <Button className="bg-[#0066FF] hover:bg-blue-700 text-white text-[15px] font-bold px-5 py-2.5 h-auto">
                {t("navbar.contactUs")}
              </Button>
            </Link>

            <div className="flex items-center pl-2">
              <div className="flex items-center gap-2 border border-black rounded-md px-3 py-1.5 relative">
                <Globe className="w-5 h-5 text-black" />
                <select
                  className="bg-transparent border-none text-black text-sm focus:outline-none cursor-pointer appearance-none pr-6"
                  value={currentLocale}
                  onChange={handleLanguageChange}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
                <ChevronDown className="w-4 h-4 text-black absolute right-2" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-black"></div>
                  <div className="w-6 h-0.5 bg-black"></div>
                  <div className="w-6 h-0.5 bg-black"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-[72px] border-b border-gray-100 shadow-sm">
            <div className="max-w-[1300px] mx-auto">
              <div className="flex flex-col py-4">
                {/* Solution Dropdown */}
                <div className="relative">
                  <button
                    className="w-full flex items-center justify-between px-6 py-3 text-[15px] text-gray-900 hover:text-[#0066FF]"
                    onClick={() => toggleDropdown("solution")}
                  >
                    <span>{t("navbar.solutions")}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === "solution" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "solution" && (
                    <div className="bg-[#F8F9FB] py-2">
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/photos-avant-apres"
                            : "/before-after"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.solutionsMenu.capture")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/revolution"
                            : "/revolution"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.solutionsMenu.revolution")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/3d-simulation-esthetique"
                            : "/en/3d-aesthetic-simulation"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.solutionsMenu.3d")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/logiciel-consultation-esthetique"
                            : "/clinic-management-software"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.solutionsMenu.consult")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/agenda-patient-en-ligne-rdv"
                            : "/agenda-online-booking-reminders"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.solutionsMenu.agenda")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/virtual-classes"
                            : "/en/virtual-classes"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.solutionsMenu.virtualClasses")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/robot-injecteur-medecine-esthetique"
                            : "/en/injector-robot-aesthetic-medicine"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.solutionsMenu.robotics")}
                      </Link>
                    </div>
                  )}
                </div>

                {/* You are Dropdown */}
                <div className="relative">
                  <button
                    className="w-full flex items-center justify-between px-6 py-3 text-[15px] text-gray-900 hover:text-[#0066FF]"
                    onClick={() => toggleDropdown("youare")}
                  >
                    <span>{t("navbar.youAre")}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === "youare" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "youare" && (
                    <div className="bg-[#F8F9FB] py-2">
                      <Link
                        href={
                          currentLocale === "fr" ? "/fr/manager" : "/en/manager"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.youAreMenu.clinicManager")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/medecin-esthetique"
                            : "/en/medecin-esthetique"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.youAreMenu.aestheticPractitioner")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/assistant"
                            : "/en/assistant"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.youAreMenu.assistant")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr" ? "/fr/chaines" : "/en/chaines"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.youAreMenu.clinicChainManager")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/marketing"
                            : "/en/marketing"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.youAreMenu.marketingManager")}
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href={
                    currentLocale === "fr"
                      ? "/fr/tarifs-solution-esthetique"
                      : "/en/pricing-aesthetic-solution"
                  }
                  className="px-6 py-3 text-[15px] text-gray-900 hover:text-[#0066FF]"
                >
                  {t("navbar.pricing")}
                </Link>

                {/* Resources Dropdown */}
                <div className="relative">
                  <button
                    className="w-full flex items-center justify-between px-6 py-3 text-[15px] text-gray-900 hover:text-[#0066FF]"
                    onClick={() => toggleDropdown("resources")}
                  >
                    <span>{t("navbar.resources")}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === "resources" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "resources" && (
                    <div className="bg-[#F8F9FB] py-2">
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/a-propos"
                            : "/en/about-us"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.resourcesMenu.aboutUs")}
                      </Link>
                      <Link
                        href={currentLocale === "fr" ? "/fr/blog" : "/blog"}
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.resourcesMenu.blog")}
                      </Link>
                      <Link
                        href="https://honey-vulture-ed5.notion.site/Nextmotion-Academy-1b4dff6c85d9808e9c01fb45bf1b173b?pvs=4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.resourcesMenu.academy")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr" ? "/fr/podcast" : "/podcast"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.resourcesMenu.podcast")}
                      </Link>
                      <Link
                        href={`/${currentLocale}/contact`}
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.resourcesMenu.contact")}
                      </Link>
                      <Link
                        href={
                          currentLocale === "fr"
                            ? "/fr/cas-clients"
                            : "/en/case-studies"
                        }
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.resourcesMenu.caseStudies")}
                      </Link>
                      <Link
                        href="/release-notes"
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.resourcesMenu.releaseNotes")}
                      </Link>
                      <Link
                        href="https://api.nextmotion.net/open_api/docs/redoc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-2 text-[14px] text-gray-900 hover:text-[#0066FF]"
                      >
                        {t("navbar.resourcesMenu.api")}
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/login"
                  className="px-6 py-3 text-[15px] text-gray-900 hover:text-[#0066FF]"
                >
                  {t("navbar.login")}
                </Link>

                <div className="px-6 py-3">
                  <Link
                    href={`/${currentLocale}/contact`}
                    className="w-full bg-[#0066FF] hover:bg-blue-700 text-white text-[15px] font-bold px-5 py-2.5 h-auto"
                  >
                    {t("navbar.contactUs")}
                  </Link>
                </div>

                {/* Language Selector - Mobile */}
                <div className="px-6 py-3">
                  <div className="flex items-center gap-2 border border-black rounded-md px-3 py-1.5 relative">
                    <Globe className="w-5 h-5 text-black" />
                    <select
                      className="w-full bg-transparent border-none text-black text-sm focus:outline-none cursor-pointer appearance-none pr-6"
                      value={currentLocale}
                      onChange={handleLanguageChange}
                    >
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-black absolute right-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
