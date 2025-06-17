"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/utils/i18n";
import { getMessages } from "@/utils/i18n";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function Specialists() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.aboutUs?.specialists || {});

  if (!messages) return null;

  const specialists = [
    {
      firstName: "per",
      name: t("members")[0].name,
      credentials: t("members")[0].credentials,
      description: t("members")[0].description,
      linkedin: "https://www.linkedin.com/in/per-hedén-98607742/",
      isInstagram: false,
    },
    {
      firstName: "constantin",
      name: t("members")[1].name,
      credentials: t("members")[1].credentials,
      description: t("members")[1].description,
      linkedin: "https://www.linkedin.com/in/constantin-stan-md-phd-84961615a/",
      isInstagram: false,
    },
    {
      firstName: "jean_paul",
      name: t("members")[2].name,
      credentials: t("members")[2].credentials,
      description: t("members")[2].description,
      linkedin: "https://www.linkedin.com/in/jean-paul-meningaud-8a9a8469/",
      isInstagram: false,
    },
    {
      firstName: "nabila",
      name: t("members")[3].name,
      credentials: t("members")[3].credentials,
      description: t("members")[3].description,
      linkedin: "https://www.instagram.com/azib_nabila/",
      isInstagram: false,
    },
    {
      firstName: "ali",
      name: t("members")[4].name,
      credentials: t("members")[4].credentials,
      description: t("members")[4].description,
      linkedin: "https://www.linkedin.com/in/alipirayesh/",
      isInstagram: false,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-[#051238] text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-16 font-bold">
          {t("title.prefix")}{" "}
          <span className="text-[#284fe6]">{t("title.highlight")}</span>{" "}
          {t("title.suffix")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {specialists.map((specialist, index) => (
            <div
              key={specialist.firstName}
              className={`bg-white md:bg-[#F3F8FD] rounded-lg md:rounded-2xl shadow-sm md:shadow-lg overflow-hidden ${index === specialists.length - 1
                  ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto"
                  : ""
                }`}
            >
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="relative w-full h-[400px]">
                  <OptimizedImage
                    src={`/about/about_${specialist.firstName}.webp`}
                    alt={specialist.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#051238] text-base mb-6">
                    {specialist.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#051238] font-bold text-lg">
                        {specialist.name}
                      </h3>
                      <p className="text-[#051238] text-sm">
                        {specialist.credentials}
                      </p>
                    </div>
                    <a
                      href={specialist.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <OptimizedImage
                        src={`/about/icons/${specialist.isInstagram
                            ? "about_instagram.webp"
                            : "about_link.webp"
                          }`}
                        alt={specialist.isInstagram ? "Instagram" : "LinkedIn"}
                        width={70}
                        height={70}
                        className="w-6 h-6 object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row h-full">
                <div className="w-[45%] relative">
                  <OptimizedImage
                    src={`/about/about_${specialist.firstName}.webp`}
                    alt={specialist.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="w-[55%] p-8 flex flex-col">
                  <p className="text-[#051238] text-lg leading-relaxed mb-8">
                    {specialist.description}
                  </p>
                  <div className="mt-auto">
                    <h3 className="text-[#051238] text-[38px] font-bold leading-tight">
                      {specialist.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-[#051238] text-2xl">
                        {specialist.credentials}
                      </p>
                      <a
                        href={specialist.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8"
                      >
                        <OptimizedImage
                          src={`/about/icons/${specialist.isInstagram
                              ? "about_instagram.webp"
                              : "about_link.webp"
                            }`}
                          alt={
                            specialist.isInstagram ? "Instagram" : "LinkedIn"
                          }
                          width={70}
                          height={70}
                          className="w-full h-full object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
