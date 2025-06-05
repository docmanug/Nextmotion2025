"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import Hero from "./components/Hero";
import BlogPosts from "./components/BlogPosts";

export default function BlogPage() {
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
    <main className="min-h-screen bg-white">
      <Hero />
      <BlogPosts />
    </main>
  );
}
