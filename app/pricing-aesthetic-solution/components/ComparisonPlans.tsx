"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    type: "NEXTMOTION",
    title: "Practice",
    subtitle: "Perfect for small aesthetic practices",
    price: "€199",
    period: "/month",
    note: "excl. taxes, non-binding",
    features: [
      "Up to 2 collaborators",
      "Nextmotion Consult Digital",
      "Nextmotion Capture iOS app",
      "Accounting",
      "Medical cloud (data sync 150 GB)",
      "Unlimited access to our digital Nextmotion academy",
      "Email assistance",
    ],
  },
  {
    type: "NEXTMOTION",
    title: "Clinic",
    subtitle: "The right plan for medium clinics",
    price: "€399",
    period: "/month",
    note: "excl. taxes",
    features: [
      "Up to 5 collaborators",
      "Nextmotion Consult Digital",
      "Nextmotion Capture iOS app",
      "Accounting",
      "Nextmotion Agenda",
      "Good reviews",
      "Medical cloud (data sync 150 GB)",
      "Unlimited access to our digital Nextmotion academy",
      "Email assistance",
    ],
  },
  {
    type: "NEXTMOTION",
    title: "Enterprise",
    subtitle: "Dedicated to large clinics with multiple locations",
    price: "€599",
    period: "/month",
    note: "excl. taxes",
    features: [
      "Up to 10 collaborators",
      "Nextmotion Consult Digital",
      "Nextmotion Capture iOS app",
      "Accounting",
      "Nextmotion Agenda",
      "Good reviews",
      "Patient portal and web application",
      "Nextmotion visio",
      "Medical cloud (data sync 150 GB)",
      "Unlimited access to our digital Nextmotion academy",
      "Email assistance ad dedicated Whatsapp group",
    ],
  },
];

export default function ComparisonPlans() {
  const handleDemoClick = () => {
    window.open("/contact_form", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#284fe6] mb-16">
          Find the right plan that meets your needs
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
                  Request a Demo
                </Button>

                <div className="space-y-3 mt-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
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
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
