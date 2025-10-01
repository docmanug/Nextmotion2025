"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import Hero from "@/app/podcast/components/Hero";
import Episodes from "@/app/podcast/components/Episodes";

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
      <Hero />
      <Episodes />
    </main>
  );
}
