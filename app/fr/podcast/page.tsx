"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/app/podcast/components/Hero";
import Episodes from "@/app/podcast/components/Episodes";
import Footer from "@/components/Footer";

export default function PodcastPage() {
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

  const t = useTranslations(messages?.footer || {});

  if (!messages) return null;

  return (
    <main className="bg-[#F8FAFF]">
      <Navbar />
      <Hero />
      <Episodes />
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
