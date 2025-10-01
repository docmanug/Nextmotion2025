"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ApiAutomationSectionProps {
    title: string;
    subtitle: string;
    className?: string;
    isFrenchlanguage?: boolean;
}

export default function ApiAutomationSection({
    title,
    subtitle,
    className,
    isFrenchlanguage = false,
}: ApiAutomationSectionProps) {
    const [contactFormLink, setContactFormLink] = useState<string>("/contact_form");

    useEffect(() => {
        setContactFormLink(
            window.location.pathname.startsWith("/fr")
                ? "/fr/formulaire_contact"
                : "/contact_form"
        );
    }, []);

    const automationsEN = [
        {
            title: "Appointment Confirmation",
            description: "When an appointment is confirmed, automatically send an SMS reminder and email with consent forms",
            icon: "/icons/automation-calendar.svg",
            tools: ["Zapier", "Twilio", "Gmail"]
        },
        {
            title: "Patient Synchronization",
            description: "When a new patient is added, synchronize their information with your Notion database or Google Sheets",
            icon: "/icons/automation-sync.svg",
            tools: ["Make.com", "Notion", "Google Sheets"]
        },
        {
            title: "Task Creation",
            description: "Create a task in Asana or Trello when a quote is signed or a treatment is completed",
            icon: "/icons/automation-task.svg",
            tools: ["Zapier", "Asana", "Trello"]
        }
    ];

    const automationsFR = [
        {
            title: "Confirmation de rendez-vous",
            description: "Quand un rendez-vous est confirmé, envoyez automatiquement un SMS de rappel et un email avec les formulaires de consentement",
            icon: "/icons/automation-calendar.svg",
            tools: ["Zapier", "Twilio", "Gmail"]
        },
        {
            title: "Synchronisation patient",
            description: "Quand un nouveau patient est ajouté, synchronisez ses informations avec votre base Notion ou Google Sheets",
            icon: "/icons/automation-sync.svg",
            tools: ["Make.com", "Notion", "Google Sheets"]
        },
        {
            title: "Création de tâches",
            description: "Créez une tâche dans Asana ou Trello lorsqu'un devis est signé ou qu'un traitement est terminé",
            icon: "/icons/automation-task.svg",
            tools: ["Zapier", "Asana", "Trello"]
        }
    ];

    const automations = isFrenchlanguage ? automationsFR : automationsEN;
    const ctaText = isFrenchlanguage ? "Découvrir nos automatisations les plus populaires" : "Discover our most popular automations";

    return (
        <Section className={cn("py-16 bg-gradient-to-b from-white to-blue-50", className)}>
            <SectionHeader title={title} subtitle={subtitle} />

            <div className="mt-12 relative">
                {/* API Visualization */}
                <div className="mb-16 relative">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-blue-100">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/3">
                                <div className="bg-blue-600 text-white p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3">Nextmotion API</h3>
                                    <p className="text-blue-100 mb-4">Une interface programmable sécurisée pour connecter votre clinique à tous vos outils</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">REST</span>
                                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">JSON</span>
                                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">OAuth2</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Créez</h4>
                                            <p className="text-sm text-gray-600">Patients, RDV, traitements, factures</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Synchronisez</h4>
                                            <p className="text-sm text-gray-600">Données bidirectionnelles avec vos outils</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">Automatisez</h4>
                                            <p className="text-sm text-gray-600">Workflows sans code avec Zapier ou Make</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Intégrations populaires</h4>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                                    <OptimizedImage src="/logos/zapier.webp" alt="Zapier" width={24} height={24} className="w-6 h-6" />
                                    <span>Zapier</span>
                                </div>
                                <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                                    <OptimizedImage src="/logos/make.webp" alt="Make.com" width={24} height={24} className="w-6 h-6" />
                                    <span>Make.com</span>
                                </div>
                                <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                                    <OptimizedImage src="/logos/google.webp" alt="Google" width={24} height={24} className="w-6 h-6" />
                                    <span>Google</span>
                                </div>
                                <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                                    <OptimizedImage src="/logos/notion.webp" alt="Notion" width={24} height={24} className="w-6 h-6" />
                                    <span>Notion</span>
                                </div>
                                <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                                    <OptimizedImage src="/logos/stripe.webp" alt="Stripe" width={24} height={24} className="w-6 h-6" />
                                    <span>Stripe</span>
                                </div>
                                <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
                                    <OptimizedImage src="/logos/mailchimp.webp" alt="Mailchimp" width={24} height={24} className="w-6 h-6" />
                                    <span>Mailchimp</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Automation Examples */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {automations.map((automation, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{automation.title}</h3>
                            <p className="text-gray-600 mb-4">{automation.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {automation.tools.map((tool, idx) => (
                                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">{tool}</span>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <span className="text-sm font-medium">
                                        {isFrenchlanguage ? "Configurer cette automatisation" : "Configure this automation"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href={contactFormLink}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 text-lg h-auto">
                            {ctaText}
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
}