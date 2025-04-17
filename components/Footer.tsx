"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Facebook, Linkedin } from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
  target?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: Record<string, FooterSection> = {
  plateform: {
    title: "Plateform",
    links: [
      { name: "Home", href: "/" },
      { name: "Nextmotion - Capture", href: "/before-after" },
      { name: "Nextmotion Revolution", href: "/revolution" },
      { name: "Nextmotion - 3D", href: "/3d-aesthetic-simulation" },
      { name: "Nextmotion - Consult", href: "/clinic-management-software" },
      { name: "Nextmotion - Agenda", href: "/agenda-online-booking-reminders" },
      { name: "Virtual Classes", href: "/virtual-classes" },
      { name: "Robotics", href: "/injector-robot-aesthetic-medicine" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About us", href: "/about-us" },
      { name: "Contact", href: "/contact" },
      { name: "Our contents", href: "/" },
      { name: "Case studies", href: "/case-studies" },
      { name: "NextMotion Blog", href: "/blog" },
      { name: "Events 2024", href: "/" },
      { name: "Podcast", href: "/podcast" },
      { name: "Release notes", href: "/release-notes" },
    ],
  },
  needHelp: {
    title: "Need Help",
    links: [
      { name: "Sign in as doctor", href: "/login" },
      { name: "Request a Demo", href: "/contact_form", target: "_blank" },
      {
        name: "Privacy policy",
        href: "https://www.nextmotion.net/hubfs/2021-04-08_Privacy%20Policy%20NEXT%20MOTION.pdf",
        target: "_blank",
      },
      {
        name: "Legal notice",
        href: "https://www.nextmotion.net/hubfs/2021-04-08_Legal%20notice_%20NextMotion.pdf",
        target: "_blank",
      },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
        {/* Dark Blue Section */}
        <div className="bg-[#051238] pt-8 pb-12 px-6 md:pt-16 md:pb-24 md:px-20 flex items-start">
          <div className="w-full md:max-w-[400px] md:ml-auto">
            <Image
              src="/logo.png"
              alt="Nextmotion"
              width={160}
              height={24}
              className="mb-6"
            />
            <h3 className="text-[#005fa6] text-[20px] md:text-[24px] font-bold mb-4">
              Are you a professional in industry or education?
            </h3>
            <p className="text-white text-[15px] md:text-[16px] font-light mb-6 leading-relaxed">
              We offer tailor-made solutions for companies in the sector to
              satisfy all their needs. Do you want to offer tailor-made
              state-of-the-art technology for your teams or clients? We may have
              something to suit your needs.
            </p>
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-white text-black hover:bg-white hover:text-black px-8 py-2.5 h-auto text-sm font-semibold"
              >
                Know more
              </Button>
            </Link>
          </div>
        </div>

        {/* White Section */}
        <div className="pt-8 pb-12 px-6 md:pt-16 md:pb-24 md:pl-16 md:pr-20">
          {/* Navigation Grid */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-0">
            {/* Platform and Company sections side by side on mobile */}
            <div className="grid grid-cols-2 gap-6 md:gap-0 md:block">
              {/* Platform Section */}
              <div className="flex flex-col">
                <h4 className="text-[#000B45] font-bold text-[15px] mb-4 md:mb-6">
                  {footerLinks.plateform.title}
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {footerLinks.plateform.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.target}
                        rel={link.target ? "noopener noreferrer" : undefined}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Section */}
              <div className="flex flex-col">
                <h4 className="text-[#000B45] font-bold text-[15px] mb-4 md:mb-6">
                  {footerLinks.company.title}
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {footerLinks.company.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.target}
                        rel={link.target ? "noopener noreferrer" : undefined}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Need Help Section */}
            <div className="flex flex-col md:col-start-3">
              <h4 className="text-[#000B45] font-bold text-[15px] mb-4 md:mb-6">
                {footerLinks.needHelp.title}
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {footerLinks.needHelp.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.target}
                      rel={link.target ? "noopener noreferrer" : undefined}
                      className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter and Social Media */}
          <div className="mt-8 md:mt-16">
            <div className="mb-4">
              <p className="text-[#000B45] font-bold text-[15px]">
                Subscribe to our{" "}
                <span className="text-[#0045FF]">newsletter</span>
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-4">
              <div className="flex w-full md:flex-1 md:max-w-[330px]">
                <Input
                  type="email"
                  placeholder="Enter your email address*"
                  className="flex-1 bg-[#F8F9FB] text-[#4A5578] h-11 rounded-r-none border-r-0"
                />
                <Button className="bg-[#0045FF] text-white font-semibold hover:bg-[#0037CC] px-6 h-11 rounded-l-none">
                  Send
                </Button>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0 md:gap-3">
                <Link
                  href="http://instagram.com/nextmotion_solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors"
                >
                  <Instagram size={16} className="md:w-5 md:h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/nextmotion.solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors"
                >
                  <Facebook size={16} className="md:w-5 md:h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/next-motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors"
                >
                  <Linkedin size={16} className="md:w-5 md:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
