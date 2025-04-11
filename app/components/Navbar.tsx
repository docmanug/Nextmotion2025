"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Nextmotion"
                width={140}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[15px] text-gray-900 hover:text-[#0066FF]">
                <span>Solution</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-1 py-2">
                <Link href="/capture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Nextmotion Capture
                </Link>
                <Link href="/consult" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Nextmotion Consult
                </Link>
                <Link href="/3d" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Nextmotion 3D
                </Link>
                <Link href="/revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Nextmotion Revolution
                </Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[15px] text-gray-900 hover:text-[#0066FF]">
                <span>You are</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-1 py-2">
                <Link href="/plastic-surgeon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Plastic Surgeon
                </Link>
                <Link href="/dermatologist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Dermatologist
                </Link>
                <Link href="/aesthetic-doctor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Aesthetic Doctor
                </Link>
              </div>
            </div>
            
            <Link href="/pricing" className="text-[15px] text-gray-900 hover:text-[#0066FF]">
              Pricing
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[15px] text-gray-900 hover:text-[#0066FF]">
                <span>Resources</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-1 py-2">
                <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Blog
                </Link>
                <Link href="/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Case Studies
                </Link>
                <Link href="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Events
                </Link>
              </div>
            </div>
            
            <Link href="/login" className="text-[15px] text-gray-900 hover:text-[#0066FF]">
              Login
            </Link>
            
            <Button className="bg-[#0066FF] hover:bg-blue-700 text-white text-[15px] font-normal px-5 py-2.5 rounded-full h-auto">
              Contact us
            </Button>
            
            <div className="flex items-center pl-2">
              <div className="flex items-center gap-1.5 border rounded-full px-3 py-1.5">
                <Image
                  src="/globe.svg"
                  alt="Language"
                  width={16}
                  height={16}
                />
                <select className="bg-transparent border-none text-[15px] text-gray-900 focus:outline-none cursor-pointer appearance-none pr-6">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                </select>
                <ChevronDown className="h-3.5 w-3.5 absolute right-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 