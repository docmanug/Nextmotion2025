"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Feature8() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.manager?.features?.feature8 || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative w-full max-w-[600px] mx-auto">
              <Image
                src="/third/feature9.png"
                alt="Use Case Illustration"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="lg:max-w-[470px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/third/icons/feature9_icon.png"
                  alt="Use Case Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{t("title")}</h2>
            </div>

            <p className="text-[14px] leading-relaxed text-gray-600 pt-2">
              {t("description")}
            </p>
            <div className="mt-10">
              <Link href="/before-after">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  {t("videoButton")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
