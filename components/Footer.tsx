"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  plateform: {
    title: "Plateform",
    links: [
      { name: "Home", href: "/" },
      { name: "Nextmotion - Capture", href: "/capture" },
      { name: "Nextmotion Revolution", href: "/revolution" },
      { name: "Nextmotion - 3D", href: "/3d" },
      { name: "Nextmotion - Consult", href: "/consult" },
      { name: "Nextmotion - Agenda", href: "/agenda" },
      { name: "Virtual Classes", href: "/virtual-classes" },
      { name: "Robotics", href: "/robotics" }
    ]
  },
  company: {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Our contents", href: "/contents" },
      { name: "Case studies", href: "/case-studies" },
      { name: "NextMotion Blog", href: "/blog" },
      { name: "Events 2024", href: "/events" },
      { name: "Podcast", href: "/podcast" },
      { name: "Release notes", href: "/release-notes" }
    ]
  },
  needHelp: {
    title: "Need Help",
    links: [
      { name: "Sign in as doctor", href: "/signin" },
      { name: "Request a Demo", href: "/demo" },
      { name: "Privacy policy", href: "/privacy" },
      { name: "Legal notice", href: "/legal" }
    ]
  }
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-[40%_60%]">
        {/* Dark Blue Section */}
        <div className="bg-[#051238] pt-16 pb-24 px-20 flex items-start">
          <div className="max-w-[400px] ml-auto">
            <Image
              src="/logo.png"
              alt="Nextmotion"
              width={160}
              height={24}
              className="mb-6"
            />
            <h3 className="text-[#005fa6] text-[24px] font-bold mb-4">
              Are you a professional in industry or education?
            </h3>
            <p className="text-white text-[16px] font-light mb-6 leading-relaxed">
              We offer tailor-made solutions for companies in the sector to satisfy all their needs. Do you want to offer tailor-made state-of-the-art technology for your teams or clients? We may have something to suit your needs.
            </p>
            <Button 
              variant="outline"
              className=" border-2 border-white text-black hover:bg-white/10 px-8 py-2.5 h-auto text-sm font-semibold"
            >
              Know more
            </Button>
          </div>
        </div>

        {/* White Section */}
        <div className="pt-16 pb-24 pl-16 pr-20">
          {/* Navigation Grid */}
          <div className="grid grid-cols-3">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-[#000B45] font-bold text-base mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[15px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter and Social Media */}
          <div className="mt-16">
            <div className="mb-4">
              <p className="text-[#000B45] font-bold text-base">
                Subscribe to our <span className="text-[#0045FF]">newsletter</span>
              </p>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex gap-2 flex-1 max-w-[330px]">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className=" bg-[#F8F9FB] text-[#4A5578] h-11 px-6"
                />
                <Button 
                  className=" bg-[#0045FF] text-white font-semibold hover:bg-[#0037CC] px-8 h-11"
                >
                  Send
                </Button>
              </div>
              <div className="flex gap-3">
                <Link href="https://instagram.com" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="https://facebook.com" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="https://linkedin.com" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}