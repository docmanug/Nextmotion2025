"use client";

import { Check } from "lucide-react";
import { getMessages, useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";

const PricingSection = () => {
  const [messages, setMessages] = useState<any>(null);
  
  useEffect(() => {
    const load = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    load();
  }, []);

  const t = useTranslations(messages?.starter?.pricing || {});

  if (!messages) return null;

  const plans = [
    {
      name: "Starter",
      price: "€99",
      priceUnit: "/mois",
      originalPrice: "€187/mois",
      description: "Idéal pour les praticiens indépendants qui souhaitent se digitaliser simplement.",
      engagement: "hors taxes, 12 mois d'engagement",
      features: [
        "Nextmotion Capture",
        "Nextmotion Consult digital",
        "1 utilisateur inclus",
        "Accès Nextmotion Academy"
      ],
      highlighted: true,
      badge: "Starter Pack"
    },
    {
      name: "Essential",
      price: "€199",
      priceUnit: "/mois",
      originalPrice: "€352/mois",
      description: "Pour les cabinets en développement qui veulent gagner en efficacité et en organisation.",
      engagement: "hors taxes, 12 mois d'engagement",
      features: [
        "Nextmotion Starter Pack",
        "Consult AI (1 utilisateur)",
        "Comptabilité",
        "2 utilisateurs inclus"
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: "€399",
      priceUnit: "/mois",
      originalPrice: "€569/mois",
      description: "Pensé pour les cabinets structurés qui veulent automatiser et intégrer l'IA dans leur quotidien.",
      engagement: "hors taxes, 12 mois d'engagement",
      features: [
        "Nextmotion Essential",
        "Nextmotion copilot AI",
        "Accès automatisations & API"
      ],
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: "€Sur devis",
      priceUnit: "",
      originalPrice: "",
      description: "Pour les groupes ou réseaux de cliniques. Intégrations sur mesure et pilotage global.",
      engagement: "hors taxes, 12 mois d'engagement",
      features: [
        "Nextmotion Premium",
        "Portail patient",
        "Messagerie interne & visio",
        "10 utilisateurs inclus",
        "2h support/mois"
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm ${
                plan.highlighted
                  ? 'ring-2 ring-blue-500 border-2 border-blue-500'
                    : 'border border-gray-200 hover:shadow-md'
              } transition-all`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  plan.highlighted 
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 min-h-[60px]">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-600">
                    {plan.priceUnit}
                  </span>
                </div>
                {plan.originalPrice && (
                  <p className="text-gray-400 line-through text-sm mb-2">
                    {plan.originalPrice}
                  </p>
                )}
                <p className="text-gray-500 text-xs">
                  {plan.engagement}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
