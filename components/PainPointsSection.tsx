"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

interface PainPoint {
    title: string;
    description: string;
    solution: string;
    benefit: string;
    icon: string;
}

interface PainPointsSectionProps {
    title: string;
    subtitle: string;
    className?: string;
    isFrenchlanguage?: boolean;
}

export default function PainPointsSection({
    title,
    subtitle,
    className,
    isFrenchlanguage = false,
}: PainPointsSectionProps) {
    const [contactFormLink, setContactFormLink] = useState<string>("/contact_form");

    useEffect(() => {
        setContactFormLink(
            window.location.pathname.startsWith("/fr")
                ? "/fr/formulaire_contact"
                : "/contact_form"
        );
    }, []);

    const painPointsEN: PainPoint[] = [
        {
            title: "Not enough revenue",
            description: "Struggling to grow your clinic's revenue despite quality services",
            solution: "AI-powered marketing and patient retention tools",
            benefit: "Increase revenue by up to 30% with targeted campaigns and automated follow-ups",
            icon: "/icons/revenue-icon.svg",
        },
        {
            title: "Complex patient journey",
            description: "Patients face friction points from booking to post-treatment",
            solution: "Streamlined digital patient experience",
            benefit: "Improve patient satisfaction by 35% with intuitive booking and communication",
            icon: "/icons/journey-icon.svg",
        },
        {
            title: "Administrative burden",
            description: "Too much time spent on paperwork and administrative tasks",
            solution: "Automated documentation and AI assistants",
            benefit: "Save 15+ hours per week with AI-generated reports and automated workflows",
            icon: "/icons/admin-icon.svg",
        },
    ];

    const painPointsFR: PainPoint[] = [
        {
            title: "Chiffre d'affaires insuffisant",
            description: "Difficultés à développer le chiffre d'affaires malgré des services de qualité",
            solution: "Outils de marketing et de fidélisation des patients propulsés par l'IA",
            benefit: "Augmentez vos revenus jusqu'à 30% grâce aux campagnes ciblées et suivis automatisés",
            icon: "/icons/revenue-icon.svg",
        },
        {
            title: "Parcours patient complexe",
            description: "Les patients rencontrent des points de friction de la réservation au suivi post-traitement",
            solution: "Expérience patient digitale simplifiée",
            benefit: "Améliorez la satisfaction patient de 35% avec une réservation et communication intuitive",
            icon: "/icons/journey-icon.svg",
        },
        {
            title: "Charge administrative",
            description: "Trop de temps consacré aux tâches administratives et à la paperasse",
            solution: "Documentation automatisée et assistants IA",
            benefit: "Économisez plus de 15 heures par semaine grâce aux rapports générés par IA",
            icon: "/icons/admin-icon.svg",
        },
    ];

    const painPoints = isFrenchlanguage ? painPointsFR : painPointsEN;
    const ctaText = isFrenchlanguage ? "Découvrir nos solutions" : "Discover our solutions";

    return (
        <Section className={cn("py-16 bg-white", className)}>
            <SectionHeader title={title} subtitle={subtitle} />
            <div className="mt-12">
                {painPoints.map((point, index) => (
                    <div key={index} className="mb-10 last:mb-0">
                        <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl overflow-hidden shadow-md">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/3 bg-blue-600 text-white p-8">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                                            <span className="text-white font-bold text-xl">{index + 1}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">{point.title}</h3>
                                    </div>
                                    <p className="text-blue-100 mb-4">{point.description}</p>
                                </div>

                                <div className="w-full md:w-2/3 p-8">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <h4 className="text-xl font-semibold text-blue-800 mb-3">Notre solution :</h4>
                                            <p className="text-gray-700 text-lg mb-6">{point.solution}</p>
                                        </div>

                                        <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-green-800 font-medium text-lg">{point.benefit}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mt-10 text-center">
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