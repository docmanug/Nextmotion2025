"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Facebook, Linkedin } from "lucide-react";

interface FooterProps {
  professional: {
    title: string;
    description: string;
    button: string;
  };
  platform: {
    title: string;
    links: {
      home: string;
      capture: string;
      revolution: string;
      "3d": string;
      consult: string;
      agenda: string;
      classes: string;
      robotics: string;
    };
  };
  company: {
    title: string;
    links: {
      about: string;
      contact: string;
      contents: string;
      cases: string;
      blog: string;
      events: string;
      podcast: string;
      releases: string;
    };
  };
  help: {
    title: string;
    links: {
      login: string;
      demo: string;
      privacy: string;
      legal: string;
    };
  };
  newsletter: {
    title: string;
    highlight: string;
    placeholder: string;
    button: string;
  };
}

export default function Footer({
  professional,
  platform,
  company,
  help,
  newsletter,
}: FooterProps) {
  return (
    <footer className="bg-white w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
          {/* Dark Blue Section */}
          <div className="bg-[#051238] p-8 md:p-16">
            <div className="max-w-[1300px] mx-auto">
              <div className="max-w-[400px] mx-auto md:ml-auto">
                <Image
                  src="/logo.png"
                  alt="Nextmotion"
                  width={160}
                  height={24}
                  className="mb-6"
                />
                <h3 className="text-[#005fa6] text-[20px] md:text-[24px] font-bold mb-4">
                  {professional.title}
                </h3>
                <p className="text-white text-[15px] md:text-[16px] font-light mb-6 leading-relaxed">
                  {professional.description}
                </p>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-black hover:bg-white hover:text-black px-8 py-2.5 h-auto text-sm font-semibold"
                  >
                    {professional.button}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* White Section */}
          <div className="p-8 md:p-16">
            <div className="max-w-[1300px] mx-auto">
              {/* Navigation Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Platform Section */}
                <div className="flex flex-col">
                  <h4 className="text-[#000B45] font-bold text-[15px] mb-4">
                    {platform.title}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {platform.links.home}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/before-after"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {platform.links.capture}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/revolution"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {platform.links.revolution}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/3d-aesthetic-simulation"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {platform.links["3d"]}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/clinic-management-software"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {platform.links.consult}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/agenda-online-booking-reminders"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {platform.links.agenda}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/virtual-classes"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {platform.links.classes}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/injector-robot-aesthetic-medicine"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {platform.links.robotics}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Company Section */}
                <div className="flex flex-col">
                  <h4 className="text-[#000B45] font-bold text-[15px] mb-4">
                    {company.title}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/about-us"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {company.links.about}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {company.links.contact}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {company.links.contents}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/case-studies"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {company.links.cases}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {company.links.blog}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {company.links.events}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/podcast"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {company.links.podcast}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/release-notes"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {company.links.releases}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Need Help Section */}
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <h4 className="text-[#000B45] font-bold text-[15px] mb-4">
                    {help.title}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/login"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {help.links.login}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact_form"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {help.links.demo}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.nextmotion.net/hubfs/2021-04-08_Privacy%20Policy%20NEXT%20MOTION.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {help.links.privacy}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.nextmotion.net/hubfs/2021-04-08_Legal%20notice_%20NextMotion.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {help.links.legal}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter and Social Media */}
              <div className="mt-12">
                <div className="mb-4">
                  <p className="text-[#000B45] font-bold text-[15px]">
                    {newsletter.title}{" "}
                    <span className="text-[#0045FF]">
                      {newsletter.highlight}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="flex w-full md:w-auto">
                    <Input
                      type="email"
                      placeholder={newsletter.placeholder}
                      className="w-full md:w-[330px] bg-[#F8F9FB] text-[#4A5578] h-11 rounded-r-none border-r-0"
                    />
                    <Button className="bg-[#0045FF] text-white font-semibold hover:bg-[#0037CC] px-6 h-11 rounded-l-none">
                      {newsletter.button}
                    </Button>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="http://instagram.com/nextmotion_solution/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors"
                    >
                      <Instagram size={20} />
                    </Link>
                    <Link
                      href="https://www.facebook.com/nextmotion.solution/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors"
                    >
                      <Facebook size={20} />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/next-motion/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0045FF] text-white hover:bg-[#0037CC] transition-colors"
                    >
                      <Linkedin size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
