"use client";
import { useEffect, useState } from "react";
import { Users, Clock, TrendingUp, FileText } from "lucide-react";
import { getMessages, useTranslations } from "@/utils/i18n";

const BenefitsSection = () => {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    load();
  }, []);

  const t = useTranslations(messages?.starter?.benefits || {});

  if (!messages) return null;

  const benefits = [
    {
      icon: Clock,
      title: t('timeGain.title'),
      description: t('timeGain.description'),
    },
    {
      icon: TrendingUp,
      title: t('revenue.title'),
      description: t('revenue.description'),
    },
    {
      icon: FileText,
      title: t('admin.title'),
      description: t('admin.description'),
    },
    {
      icon: Users,
      title: t('patient.title'),
      description: t('patient.description'),
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
