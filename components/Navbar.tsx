"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex justify-around items-center h-[72px]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
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
                <span>Solution</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-72 bg-[#0066FF] shadow-lg rounded-lg mt-1 transition-all duration-300">
                <div className="absolute h-6 w-full -top-6 bg-transparent"></div>
                <Link
                  href="/before-after"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  NextMotion - Capture
                </Link>
                <Link
                  href="/revolution"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Nextmotion Revolution
                </Link>
                <Link
                  href="/3d-aesthetic-simulation"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Nextmotion - 3D
                </Link>
                <Link
                  href="/clinic-management-software"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  NextMotion - Consult
                </Link>
                <Link
                  href="/agenda-online-booking-reminders"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Nextmotion Agenda
                </Link>
                <Link
                  href="/virtual-classes"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Virtual Classes
                </Link>
                <Link
                  href="/injector-robot-aesthetic-medicine"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Robotics
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] text-gray-900 hover:text-[#0066FF]">
                <span>You are</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-56 bg-[#0066FF] shadow-lg rounded-lg mt-1 transition-all duration-300">
                <div className="absolute h-6 w-full -top-6 bg-transparent"></div>
                <Link
                  href="/manager"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Clinic manager
                </Link>
                <Link
                  href="/medecin-esthetique"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Aesthetic practitioner
                </Link>
                <Link
                  href="/assistant"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Assistant / Secretary
                </Link>
                <Link
                  href="/chaines"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Clinic chain manager
                </Link>
                <Link
                  href="/marketing"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Responsable Marketing
                </Link>
              </div>
            </div>

            <Link
              href="/pricing-aesthetic-solution"
              className="text-[15px] text-gray-900 hover:text-[#0066FF]"
            >
              Pricing
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] text-gray-900 hover:text-[#0066FF]">
                <span>Resources</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-56 bg-[#0066FF] shadow-lg rounded-lg mt-1 transition-all duration-300">
                <div className="absolute h-6 w-full -top-6 bg-transparent"></div>
                <Link
                  href="/about-us"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  About us
                </Link>
                <Link
                  href="/blog"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Blog
                </Link>
                <Link
                  href="https://honey-vulture-ed5.notion.site/Nextmotion-Academy-1b4dff6c85d9808e9c01fb45bf1b173b?pvs=4"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Academy
                </Link>
                <Link
                  href="/podcast"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Podcast
                </Link>
                <Link
                  href="/contact"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Contact us
                </Link>
                <Link
                  href="/case-studies"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Case studies
                </Link>
                <Link
                  href="/release-notes"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                >
                  Release notes
                </Link>
                <Link
                  href="https://api.nextmotion.net/open_api/docs/redoc/"
                  className="block px-6 py-3 text-[15px] text-white hover:bg-[#F3F8FD] hover:text-[#1650EF]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API
                </Link>
              </div>
            </div>

            <Link
              href="/login"
              className="text-[15px] text-gray-900 hover:text-[#0066FF]"
            >
              Login
            </Link>

            <Link
              href="/contact_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0066FF] hover:bg-blue-700 text-white text-[15px] font-bold px-5 py-2.5 h-auto">
                Contact us
              </Button>
            </Link>

            <div className="flex items-center pl-2">
              <div className="flex items-center gap-2 border border-black rounded-md px-3 py-1.5 relative">
                <Globe className="w-5 h-5 text-black" />
                <select className="bg-transparent border-none text-black text-sm focus:outline-none cursor-pointer appearance-none pr-6">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                </select>
                <ChevronDown className="w-4 h-4 text-black absolute right-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
