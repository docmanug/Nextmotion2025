"use client";

import { useEffect, useState } from "react";
import { getMessages, useTranslations } from "@/utils/i18n";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    load();
  }, []);
  const t = useTranslations(messages?.starter?.testimonial || {});

  if (!messages) return null;

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Stars */}
        <div className="flex justify-center mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 italic">
          &quot;{t('quote')}&quot;
        </blockquote>

        {/* Author */}
        <div className="space-y-2">
          <p className="text-xl font-semibold text-gray-900">
            {t('author.name')}
          </p>
          <p className="text-gray-600">
            {t('author.title')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
