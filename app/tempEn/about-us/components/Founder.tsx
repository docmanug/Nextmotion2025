"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/utils/i18n";
import { getMessages } from "@/utils/i18n";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function Founder() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.aboutUs?.founder || {});

  if (!messages) return null;

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-[#051238] text-2xl sm:text-3xl md:text-4xl text-center max-w-5xl mx-auto mb-8 sm:mb-16 font-bold">
          {t("title")}
        </h2>

        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm max-w-sm mx-auto">
            <div className="relative w-full h-[360px]">
              <OptimizedImage
                src="/about/about_emmanuel.webp"
                alt="Dr Emmanuel Elard"
                width={360}
                height={360}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <p className="text-[#051238] text-base mb-6">{t("quote")}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[#051238] font-bold text-lg">
                    {t("name")}
                  </h3>
                  <p className="text-[#051238] text-sm">{t("role")}</p>
                </div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6"
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
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="bg-[#F3F8FD] rounded-2xl overflow-hidden shadow-lg max-h-[420px]">
            <div className="flex flex-row h-full">
              <div className="w-[35%] h-full">
                <OptimizedImage
                  src="/about/about_emmanuel.webp"
                  alt="Dr Emmanuel Elard"
                  width={360}
                  height={360}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[65%] p-12 flex flex-col">
                <p className="text-[#051238] text-lg leading-[1.6] font-normal">
                  {t("quote")}
                </p>
                <div className="flex items-center justify-between mt-auto pt-8">
                  <div>
                    <h3 className="text-[#051238] text-[42px] font-bold leading-[1.1]">
                      {t("name")}
                    </h3>
                    <p className="text-[#051238] text-[28px] font-light">
                      {t("role")}
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11"
                  >
                    <OptimizedImage
                      src="/about/icons/about_link.webp"
                      alt="LinkedIn"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
