"use client";

import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function ImageSection() {
  const [messages, setMessages] = useState<any>(null);
  const [isFrench, setIsFrench] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
      setIsFrench(locale === "fr");
    };
    loadMessages();
  }, []);

  if (!messages) return null;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
          <iframe
            src={
              isFrench
                ? "https://www.youtube.com/embed/CILpFl28cfM"
                : "https://www.youtube.com/embed/LIZQ9LJmcXo"
            }
            title="3D Aesthetic Simulation Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
