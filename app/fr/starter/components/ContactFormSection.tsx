"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { getMessages, useTranslations } from "@/utils/i18n";

const ContactFormSection = () => {
  const [messages, setMessages] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    clinicName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    const load = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    load();
  }, []);

  const t = useTranslations(messages?.starter?.contact || {});

  if (!messages) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          clinicName: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const features = [
    t("features.quickSetup"),
    t("features.support"),
    t("features.gdpr"),
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              {t("title")}
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              {t("subtitle")}
            </p>

            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t("cta")}
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {t("success.title")}
                </h3>
                <p className="text-gray-600">{t("success.message")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t("form.firstName")}
                    required
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t("form.lastName")}
                    required
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("form.email")}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder={t("form.phone")}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="clinicName"
                  value={formData.clinicName}
                  onChange={handleChange}
                  placeholder={t("form.clinicName")}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? t("form.submitting") : t("form.submit")}
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  {t("form.setupTime")}
                </p>

                {submitStatus === "error" && (
                  <p className="text-red-600 text-center">
                    {t("error.message")}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
