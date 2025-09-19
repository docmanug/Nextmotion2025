"use client";

import { useEffect, useState } from "react";
import { Server, Award, Trophy } from "lucide-react";
import { getMessages, useTranslations } from "@/utils/i18n";

const ReassuranceSection = () => {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    load();
  }, []);
  const t = useTranslations(messages?.starter?.reassurance || {});

  if (!messages) return null;

  const items = [
    {
      icon: Server,
      title: t('aws.title'),
      description: t('aws.description'),
    },
    {
      icon: Award,
      title: t('innovation.title'),
      description: t('innovation.description'),
    },
    {
      icon: Trophy,
      title: t('certification.title'),
      description: t('certification.description'),
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReassuranceSection;
