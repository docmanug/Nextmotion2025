"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getMessages, useTranslations } from "@/utils/i18n";

const HeroSection = () => {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);

      setMessages(msgs);
    };
    load();
  }, []);

  const t = useTranslations(messages?.starter?.hero || {});

  if (!messages) return null;

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {t("subtitle")}
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t("cta")}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom*"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Nom*"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("form.email")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder={t("form.phone")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t("form.clinicName")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                {t("form.submit")}
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-gray-500 text-center">
                {t("form.setupTime")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
