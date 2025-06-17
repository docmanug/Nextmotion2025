"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "@/utils/i18n";
import { getMessages } from "@/utils/i18n";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function Timeline() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.aboutUs?.timeline || {});

  if (!messages) return null;

  const timelineData = [
    {
      year: "2015",
      icon: "/about/icons/about_1_icon.webp",
      description: t("items")[0].description,
    },
    {
      year: "2016",
      icon: "/about/icons/about_2_icon.webp",
      description: t("items")[1].description,
    },
    {
      year: "2017",
      icon: "/about/icons/about_3_icon.webp",
      description: t("items")[2].description,
    },
    {
      year: "2018",
      icon: "/about/icons/about_4_icon.webp",
      description: t("items")[3].description,
    },
    {
      year: "2019",
      icon: "/about/icons/about_5_icon.webp",
      description: t("items")[4].description,
    },
    {
      year: "2020",
      icon: "/about/icons/about_6_icon.webp",
      description: t("items")[5].description,
    },
    {
      year: "2021",
      icon: "/about/icons/about_7_icon.webp",
      description: t("items")[6].description,
    },
  ];

  const cardClasses =
    "bg-white rounded-lg p-5 flex flex-col items-center text-center relative max-w-[200px] mx-auto w-full min-h-[240px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-[#051238] text-2xl md:text-3xl text-center max-w-5xl mx-auto mb-20 leading-normal font-normal">
          {t("title")}
        </h2>

        <div className="space-y-16">
          {/* First row */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              {timelineData.slice(0, 4).map((item) => (
                <div key={item.year} className={cardClasses}>
                  <div className="w-14 h-14 mb-2 flex items-center justify-center relative z-10 bg-white">
                    <OptimizedImage
                      src={item.icon}
                      alt={`${item.year} icon`}
                      width={70}
                      height={70}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#284fe6] text-[32px] font-bold mb-2">
                    {item.year}
                  </h3>
                  <p className="text-[#051238] text-[15px] leading-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second row */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
              {timelineData.slice(4).map((item) => (
                <div key={item.year} className={cardClasses}>
                  <div className="w-14 h-14 mb-2 flex items-center justify-center relative z-10 bg-white">
                    <OptimizedImage
                      src={item.icon}
                      alt={`${item.year} icon`}
                      width={70}
                      height={70}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#284fe6] text-[32px] font-bold mb-2">
                    {item.year}
                  </h3>
                  <p className="text-[#051238] text-[15px] leading-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
