"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

interface TryNextmotionProps {
    translationKey: string; // e.g. 'assistantPage.tryNextmotion', 'manager.features.tryNextmotion', etc.
    contactFormLink?: string; // fallback to '/contact_form' if not provided
    sectionClassName?: string;
    buttonClassName?: string;
}

export default function TryNextmotion({
    translationKey,
    contactFormLink = "/contact_form",
    sectionClassName = "py-12",
    buttonClassName = "bg-white text-[#1650EF] hover:bg-white/90 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto",
}: TryNextmotionProps) {
    const [messages, setMessages] = useState<Record<string, any> | null>(null);
    const [link, setLink] = useState(contactFormLink);

    useEffect(() => {
        setLink(
            window.location.pathname.startsWith("/fr")
                ? "/fr/formulaire_contact"
                : contactFormLink
        );
    }, [contactFormLink]);

    useEffect(() => {
        const loadMessages = async () => {
            const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
            const msgs = await getMessages(locale);
            setMessages(msgs);
        };
        loadMessages();
    }, []);

    // Helper to get nested translation key
    function getNested(obj: Record<string, any>, path: string) {
        return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
    }

    const t = useTranslations(getNested(messages || {}, translationKey) || {});

    if (!messages) return null;

    return (
        <section className={sectionClassName}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#1650EF] rounded-[32px] px-12 py-16">
                    <div className="max-w-5xl">
                        <h2 className="text-4xl font-bold text-white mb-6">{t("title")}</h2>
                        <p className="text-[18px] leading-relaxed text-white/90 mb-8">
                            {t("description")}
                        </p>
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <Button className={buttonClassName}>{t("button")}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 