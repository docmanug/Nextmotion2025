"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";

export default function ComparisonPlans() {
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

  const t = useTranslations(messages);

  if (!messages) return null;

  const plans = [
    {
      type: t("pricing.comparisonPlans.plans.practice.type"),
      title: t("pricing.comparisonPlans.plans.practice.title"),
      subtitle: t("pricing.comparisonPlans.plans.practice.subtitle"),
      price: t("pricing.comparisonPlans.plans.practice.price"),
      period: t("pricing.comparisonPlans.plans.practice.period"),
      note: t("pricing.comparisonPlans.plans.practice.note"),
      features: t("pricing.comparisonPlans.plans.practice.features"),
    },
    {
      type: t("pricing.comparisonPlans.plans.clinic.type"),
      title: t("pricing.comparisonPlans.plans.clinic.title"),
      subtitle: t("pricing.comparisonPlans.plans.clinic.subtitle"),
      price: t("pricing.comparisonPlans.plans.clinic.price"),
      period: t("pricing.comparisonPlans.plans.clinic.period"),
      note: t("pricing.comparisonPlans.plans.clinic.note"),
      features: t("pricing.comparisonPlans.plans.clinic.features"),
    },
    {
      type: t("pricing.comparisonPlans.plans.enterprise.type"),
      title: t("pricing.comparisonPlans.plans.enterprise.title"),
      subtitle: t("pricing.comparisonPlans.plans.enterprise.subtitle"),
      price: t("pricing.comparisonPlans.plans.enterprise.price"),
      period: t("pricing.comparisonPlans.plans.enterprise.period"),
      note: t("pricing.comparisonPlans.plans.enterprise.note"),
      features: t("pricing.comparisonPlans.plans.enterprise.features"),
    },
  ];

  const handleDemoClick = () => {
    window.open("/contact_form", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#284fe6] mb-16">
          {t("pricing.comparisonPlans.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 ${
                index === 1 ? "ring-2 ring-[#284fe6]" : ""
              }`}
            >
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] text-[#081F4D] tracking-wider uppercase">
                    {plan.type}
                  </div>
                  <h3 className="text-2xl font-bold text-[#081F4D]">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-[#081F4D] mt-2">{plan.subtitle}</p>
                </div>

                <div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-[#081F4D]">
                      {plan.price} {plan.period}
                    </span>
                  </div>
                  <div className="text-sm text-[#081F4D80] mt-1">
                    {plan.note}
                  </div>
                </div>

                <Button
                  className={`w-full py-2 rounded-lg font-semibold ${
                    index === 1
                      ? "bg-[#284fe6] text-white hover:bg-blue-600"
                      : "bg-white text-[#284fe6] border-2 border-[#284fe6] hover:bg-blue-50"
                  }`}
                  onClick={handleDemoClick}
                >
                  {t("pricing.cards.demoButton")}
                </Button>

                <div className="space-y-3 mt-8">
                  {plan.features.map(
                    (feature: string, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-green-500 flex-shrink-0"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-sm text-[#081F4D] leading-tight pr-9">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
