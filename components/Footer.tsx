"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { TranslationMessages } from "@/types";

interface FooterProps {
  professional?: {
    title: string;
    description: string;
    button: string;
  };
  platform?: {
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
  company?: {
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
  help?: {
    title: string;
    links: {
      login: string;
      demo: string;
      privacy: string;
      legal: string;
    };
  };
  newsletter?: {
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
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith("/fr") ? "fr" : "en";
  const [translations, setTranslations] = useState<Record<string, any> | null>(
    null
  );

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const messages = await import(`../messages/${currentLocale}.json`);
        setTranslations(messages.default);
      } catch (error) {
        const messages = await import(`../messages/en.json`);
        setTranslations(messages.default);
      }
    };

    if (!professional || !platform || !company || !help || !newsletter) {
      loadTranslations();
    }
  }, [professional, platform, company, help, newsletter, currentLocale]);

  const t = (key: string): string => {
    if (!translations) return key;
    return (
      key.split(".").reduce((obj: any, k: string) => obj?.[k], translations) ||
      key
    );
  };

  // If props are not provided and translations are not loaded yet, show a loading state
  if (
    (!professional || !platform || !company || !help || !newsletter) &&
    !translations
  ) {
    return null;
  }

  const footerData = {
    professional: professional || {
      title: t("footer.professional.title"),
      description: t("footer.professional.description"),
      button: t("footer.professional.button"),
    },
    platform: platform || {
      title: t("footer.platform.title"),
      links: {
        home: t("footer.platform.links.home"),
        capture: t("footer.platform.links.capture"),
        revolution: t("footer.platform.links.revolution"),
        "3d": t("footer.platform.links.3d"),
        consult: t("footer.platform.links.consult"),
        agenda: t("footer.platform.links.agenda"),
        classes: t("footer.platform.links.classes"),
        robotics: t("footer.platform.links.robotics"),
      },
    },
    company: company || {
      title: t("footer.company.title"),
      links: {
        about: t("footer.company.links.about"),
        contact: t("footer.company.links.contact"),
        contents: t("footer.company.links.contents"),
        cases: t("footer.company.links.cases"),
        blog: t("footer.company.links.blog"),
        events: t("footer.company.links.events"),
        podcast: t("footer.company.links.podcast"),
        releases: t("footer.company.links.releases"),
      },
    },
    help: help || {
      title: t("footer.help.title"),
      links: {
        login: t("footer.help.links.login"),
        demo: t("footer.help.links.demo"),
        privacy: t("footer.help.links.privacy"),
        legal: t("footer.help.links.legal"),
      },
    },
    newsletter: newsletter || {
      title: t("footer.newsletter.title"),
      highlight: t("footer.newsletter.highlight"),
      placeholder: t("footer.newsletter.placeholder"),
      button: t("footer.newsletter.button"),
    },
  };

  // Update links based on currentLocale to match navbar
  const contactFormLink =
    currentLocale === "fr" ? "/fr/formulaire_contact" : "/contact_form";
  const beforeAfterLink =
    currentLocale === "fr" ? "/fr/photos-avant-apres" : "/before-after";
  const revolutionLink =
    currentLocale === "fr" ? "/fr/revolution" : "/revolution";
  const threeDLink =
    currentLocale === "fr"
      ? "/fr/3d-simulation-esthetique"
      : "/3d-aesthetic-simulation";
  const consultLink =
    currentLocale === "fr"
      ? "/fr/logiciel-consultation-esthetique"
      : "/clinic-management-software";
  const agendaLink =
    currentLocale === "fr"
      ? "/fr/agenda-patient-en-ligne-rdv"
      : "/agenda-online-booking-reminders";
  const virtualClassesLink =
    currentLocale === "fr" ? "/fr/virtual-classes" : "/virtual-classes";
  const roboticsLink =
    currentLocale === "fr"
      ? "/fr/robot-injecteur-medecine-esthetique"
      : "/injector-robot-aesthetic-medicine";
  const managerLink = currentLocale === "fr" ? "/fr/manager" : "/manager";
  const medecinLink =
    currentLocale === "fr" ? "/fr/medecin-esthetique" : "/medecin-esthetique";
  const assistantLink = currentLocale === "fr" ? "/fr/assistant" : "/assistant";
  const chainesLink = currentLocale === "fr" ? "/fr/chaines" : "/chaines";
  const marketingLink = currentLocale === "fr" ? "/fr/marketing" : "/marketing";
  const pricingLink =
    currentLocale === "fr"
      ? "/fr/tarifs-solution-esthetique"
      : "/pricing-aesthetic-solution";
  const aboutUsLink = currentLocale === "fr" ? "/fr/a-propos" : "/about-us";
  const blogLink = currentLocale === "fr" ? "/fr/blog" : "/blog";
  const podcastLink = currentLocale === "fr" ? "/fr/podcast" : "/podcast";
  const caseStudiesLink =
    currentLocale === "fr" ? "/fr/cas-clients" : "/case-studies";

  const contactLink = currentLocale === "fr" ? "/fr/contact" : "/contact";
  const loginLink = "https://app.nextmotion.net";

  return (
    <footer className="bg-white w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
          {/* Dark Blue Section */}
          <div className="bg-[#051238] p-8 md:p-16">
            <div className="max-w-[1300px] mx-auto">
              <div className="max-w-[400px] mx-auto md:ml-auto">
                <OptimizedImage
                  src="/logo.webp"
                  alt="Nextmotion"
                  width={220}
                  height={24}
                  className="mb-6 w-[220px] h-[24px]"
                />
                <h3 className="text-[#005fa6] text-[20px] md:text-[24px] font-bold mb-4">
                  {footerData.professional.title}
                </h3>
                <p className="text-white text-[15px] md:text-[16px] font-light mb-6 leading-relaxed">
                  {footerData.professional.description}
                </p>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-black hover:bg-white hover:text-black px-8 py-2.5 h-auto text-sm font-semibold"
                  >
                    {footerData.professional.button}
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
                    {footerData.platform.title}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.platform.links.home}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={beforeAfterLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.platform.links.capture}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={revolutionLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.platform.links.revolution}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={threeDLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.platform.links["3d"]}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={consultLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.platform.links.consult}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={agendaLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.platform.links.agenda}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={virtualClassesLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.platform.links.classes}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={roboticsLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.platform.links.robotics}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Company Section */}
                <div className="flex flex-col">
                  <h4 className="text-[#000B45] font-bold text-[15px] mb-4">
                    {footerData.company.title}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href={aboutUsLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.company.links.about}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={contactFormLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.company.links.contact}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.company.links.contents}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={caseStudiesLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.company.links.cases}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={blogLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.company.links.blog}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.company.links.events}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={podcastLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.company.links.podcast}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/release-notes"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.company.links.releases}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Need Help Section */}
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <h4 className="text-[#000B45] font-bold text-[15px] mb-4">
                    {footerData.help.title}
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href={loginLink}
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.help.links.login}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={contactFormLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.help.links.demo}
                      </Link>
                    </li>
                    <li>
                      {/* Comment out the privacy link */}
                      <Link
                        href="https://drive.google.com/file/d/1_v0eIKvtJ2LbBMSsxeLxdjHrUp8F443O/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.help.links.privacy}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.nextmotion.net/hubfs/2021-04-08_Legal%20notice_%20NextMotion.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4A5578] hover:text-[#0045FF] transition-colors text-[14px]"
                      >
                        {footerData.help.links.legal}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter and Social Media */}
              <div className="mt-12">
                <div className="mb-4">
                  <p className="text-[#000B45] font-bold text-[15px]">
                    {footerData.newsletter.title}{" "}
                    <span className="text-[#0045FF]">
                      {footerData.newsletter.highlight}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="flex w-full md:w-auto">
                    <Input
                      type="email"
                      placeholder={footerData.newsletter.placeholder}
                      className="w-full md:w-[330px] bg-[#F8F9FB] text-[#4A5578] h-11 rounded-r-none border-r-0"
                    />
                    <Button className="bg-[#0045FF] text-white font-semibold hover:bg-[#0037CC] px-6 h-11 rounded-l-none">
                      {footerData.newsletter.button}
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
