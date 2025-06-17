"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/utils/i18n";
import { getMessages } from "@/utils/i18n";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function TeamMembers() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.aboutUs?.team || {});

  if (!messages) return null;

  const teamMembers = [
    {
      firstName: "yasmina",
      name: t("members")[0].name,
      role: t("members")[0].role,
      linkedin: "https://www.linkedin.com",
    },
    {
      firstName: "santiago",
      name: t("members")[1].name,
      role: t("members")[1].role,
      linkedin: "https://www.linkedin.com/in/santiago-estrada-nicol-5a9b50143/",
    },
    {
      firstName: "romain",
      name: t("members")[2].name,
      role: t("members")[2].role,
      linkedin: "https://www.linkedin.com/in/romain-buisson-6229aa114/",
    },
    {
      firstName: "david",
      name: t("members")[3].name,
      role: t("members")[3].role,
      linkedin: "https://www.linkedin.com/in/david-m-41300021/",
    },
    {
      firstName: "anastasia",
      name: t("members")[4].name,
      role: t("members")[4].role,
      linkedin: "https://www.linkedin.com/in/aseguigoldenberg/",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-[#051238] text-3xl md:text-4xl text-center mb-16 font-bold">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.firstName}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <OptimizedImage
                  src={`/about/about_${member.firstName}.webp`}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center items-center">
                <h3 className="text-[#051238] text-2xl font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-[#051238] text-2xl font-light text-center">
                  {member.role}
                </p>
                <div className="mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 inline-block"
                  >
                    <OptimizedImage
                      src="/about/icons/about_link.webp"
                      alt="LinkedIn"
                      width={70}
                      height={70}
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
