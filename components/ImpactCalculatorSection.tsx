"use client";

import { useState, useEffect } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface ImpactCalculatorSectionProps {
    className?: string;
    isFrenchlanguage?: boolean;
}

export default function ImpactCalculatorSection({
    className,
    isFrenchlanguage = false,
}: ImpactCalculatorSectionProps) {
    const [contactFormLink, setContactFormLink] = useState<string>("/contact_form");

    // Form state
    const [reportTime, setReportTime] = useState<number>(15);
    const [documentTime, setDocumentTime] = useState<number>(10);
    const [consentTime, setConsentTime] = useState<number>(10);
    const [photoTime, setPhotoTime] = useState<number>(15);
    const [patientsPerDay, setPatientsPerDay] = useState<number>(8);
    const [daysPerWeek, setDaysPerWeek] = useState<number>(5);
    const [conversionRate, setConversionRate] = useState<number>(50);
    const [hasPortfolio, setHasPortfolio] = useState<boolean>(false);

    // Calculated results
    const [timeSaved, setTimeSaved] = useState<string>("0h00");
    const [additionalConsultations, setAdditionalConsultations] = useState<number>(0);
    const [additionalRevenue, setAdditionalRevenue] = useState<number>(0);
    const [conversionIncrease, setConversionIncrease] = useState<number>(0);
    const [selectedMicroCopyIndex, setSelectedMicroCopyIndex] = useState<number>(0);

    // Calculate results whenever inputs change
    useEffect(() => {
        // Calculate time saved per week in minutes
        const totalTimePerPatient = reportTime + documentTime + consentTime + photoTime;
        const totalPatientsPerWeek = patientsPerDay * daysPerWeek;
        const totalMinutesSaved = totalTimePerPatient * totalPatientsPerWeek * 0.7; // Assuming 70% time reduction

        // Convert to hours and minutes format
        const hours = Math.floor(totalMinutesSaved / 60);
        const minutes = Math.round(totalMinutesSaved % 60);
        setTimeSaved(`${hours}h${minutes.toString().padStart(2, '0')}`);

        // Calculate additional consultations possible
        const additionalConsults = Math.floor((totalMinutesSaved / 60) / 0.75); // Assuming 45min per consultation
        setAdditionalConsultations(additionalConsults);

        // Calculate additional revenue (assuming €150 per consultation)
        const monthlyRevenue = additionalConsults * 150 * 4; // 4 weeks per month
        setAdditionalRevenue(monthlyRevenue);

        // Calculate conversion rate increase
        setConversionIncrease(hasPortfolio ? 20 : 40);
    }, [reportTime, documentTime, consentTime, photoTime, patientsPerDay, daysPerWeek, conversionRate, hasPortfolio]);

    useEffect(() => {
        setContactFormLink(
            window.location.pathname.startsWith("/fr")
                ? "/fr/formulaire_contact"
                : "/contact_form"
        );
    }, []);

    // Translations
    const title = isFrenchlanguage
        ? "Découvrez l'impact concret de Nextmotion sur votre quotidien et vos revenus"
        : "Discover the concrete impact of Nextmotion on your daily practice and revenue";

    const subtitle = isFrenchlanguage
        ? "Renseignez vos habitudes actuelles et obtenez une estimation personnalisée du temps gagné, des patients en plus… et de votre potentiel de chiffre d'affaires."
        : "Enter your current habits and get a personalized estimate of time saved, additional patients, and your revenue potential.";

    const ctaTitle = isFrenchlanguage
        ? "Prêt à découvrir le potentiel d'automatisation de votre clinique ?"
        : "Ready to discover your clinic's automation potential?";

    const ctaSubtitle = isFrenchlanguage
        ? "Recevez une analyse personnalisée de vos réponses avec un expert IA Nextmotion."
        : "Receive a personalized analysis of your responses with a Nextmotion AI expert.";

    const ctaButton = isFrenchlanguage
        ? "📊 Planifier un audit gratuit"
        : "📊 Schedule a free audit";

    const labels = {
        reportTime: isFrenchlanguage ? "Temps moyen pour rédiger un compte-rendu (en minutes)" : "Average time spent writing reports (in minutes)",
        documentTime: isFrenchlanguage ? "Temps moyen pour envoyer les documents aux patients (en minutes)" : "Average time spent sending documents to patients (in minutes)",
        consentTime: isFrenchlanguage ? "Temps moyen pour imprimer et faire signer les consentements (en minutes)" : "Average time spent printing and signing consent forms (in minutes)",
        photoTime: isFrenchlanguage ? "Temps moyen pour prendre et classer les photos avant/après (en minutes)" : "Average time spent taking and organizing before/after photos (in minutes)",
        patientsPerDay: isFrenchlanguage ? "Nombre de patients vus par jour" : "Number of patients seen per day",
        daysPerWeek: isFrenchlanguage ? "Jours travaillés par semaine" : "Days worked per week",
        conversionRate: isFrenchlanguage ? "Taux de conversion actuel (%)" : "Current conversion rate (%)",
        hasPortfolio: isFrenchlanguage ? "Utilisez-vous déjà un portfolio ou une visualisation 3D ?" : "Do you already use a portfolio or 3D visualization?",
        yes: isFrenchlanguage ? "Oui" : "Yes",
        no: isFrenchlanguage ? "Non" : "No",
        timeSaved: isFrenchlanguage ? "Temps économisé par semaine" : "Time saved per week",
        additionalConsultations: isFrenchlanguage ? "Consultations supplémentaires possibles" : "Additional consultations possible",
        additionalRevenue: isFrenchlanguage ? "CA additionnel mensuel estimé" : "Estimated additional monthly revenue",
        conversionIncrease: isFrenchlanguage ? "Augmentation du taux de conversion estimée" : "Estimated conversion rate increase",
        recommendedModules: isFrenchlanguage ? "Modules recommandés pour ces gains" : "Recommended modules for these gains",
    };

    const microCopy = isFrenchlanguage
        ? [
            "Vous perdez en moyenne 1h30 par jour sur des tâches que Nextmotion automatise.",
            "Saviez-vous que les visuels avant/après augmentent les conversions de 67% en moyenne ?"
        ]
        : [
            "You lose an average of 1.5 hours per day on tasks that Nextmotion automates.",
            "Did you know that before/after visuals increase conversions by 67% on average?"
        ];

    // Set random micro copy index on mount to avoid hydration mismatch
    useEffect(() => {
        setSelectedMicroCopyIndex(Math.floor(Math.random() * microCopy.length));
    }, [microCopy.length]);

    return (
        <Section className={cn("py-16 bg-gray-50", className)}>
            <SectionHeader title={title} subtitle={subtitle} />

            <div className="mt-12 max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Input Form */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {isFrenchlanguage ? "Vos habitudes actuelles" : "Your current habits"}
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {labels.reportTime}
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <Slider
                                            value={[reportTime]}
                                            min={5}
                                            max={60}
                                            step={5}
                                            onValueChange={(value) => setReportTime(value[0])}
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-medium">{reportTime}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {labels.documentTime}
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <Slider
                                            value={[documentTime]}
                                            min={5}
                                            max={30}
                                            step={5}
                                            onValueChange={(value) => setDocumentTime(value[0])}
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-medium">{documentTime}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {labels.consentTime}
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <Slider
                                            value={[consentTime]}
                                            min={5}
                                            max={30}
                                            step={5}
                                            onValueChange={(value) => setConsentTime(value[0])}
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-medium">{consentTime}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {labels.photoTime}
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <Slider
                                            value={[photoTime]}
                                            min={5}
                                            max={45}
                                            step={5}
                                            onValueChange={(value) => setPhotoTime(value[0])}
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-medium">{photoTime}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {labels.patientsPerDay}
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <Slider
                                            value={[patientsPerDay]}
                                            min={1}
                                            max={20}
                                            step={1}
                                            onValueChange={(value) => setPatientsPerDay(value[0])}
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-medium">{patientsPerDay}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {labels.daysPerWeek}
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <Slider
                                            value={[daysPerWeek]}
                                            min={1}
                                            max={7}
                                            step={1}
                                            onValueChange={(value) => setDaysPerWeek(value[0])}
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-medium">{daysPerWeek}</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {labels.conversionRate}
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <Slider
                                            value={[conversionRate]}
                                            min={10}
                                            max={90}
                                            step={5}
                                            onValueChange={(value) => setConversionRate(value[0])}
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-medium">{conversionRate}%</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {labels.hasPortfolio}
                                    </label>
                                    <div className="flex gap-4">
                                        <button
                                            className={`px-4 py-2 rounded-md border ${hasPortfolio
                                                    ? "bg-blue-600 text-white border-blue-600"
                                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                                                }`}
                                            onClick={() => setHasPortfolio(true)}
                                        >
                                            {labels.yes}
                                        </button>
                                        <button
                                            className={`px-4 py-2 rounded-md border ${!hasPortfolio
                                                    ? "bg-blue-600 text-white border-blue-600"
                                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                                                }`}
                                            onClick={() => setHasPortfolio(false)}
                                        >
                                            {labels.no}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <p className="text-blue-800 text-sm italic">
                                    {microCopy[selectedMicroCopyIndex]}
                                </p>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                {isFrenchlanguage ? "Votre impact personnalisé" : "Your personalized impact"}
                            </h3>

                            <div className="space-y-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">{labels.timeSaved}</div>
                                            <div className="text-2xl font-bold text-blue-600">{timeSaved}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">{labels.additionalConsultations}</div>
                                            <div className="text-2xl font-bold text-green-600">+{additionalConsultations} / {isFrenchlanguage ? "semaine" : "week"}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">{labels.additionalRevenue}</div>
                                            <div className="text-2xl font-bold text-purple-600">+{additionalRevenue.toLocaleString()} €</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600">{labels.conversionIncrease}</div>
                                            <div className="text-2xl font-bold text-amber-600">+{conversionIncrease}%</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                    <h4 className="font-medium text-blue-800 mb-2">{labels.recommendedModules}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Consult AI</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{isFrenchlanguage ? "Secrétariat IA" : "Secretary AI"}</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Capture</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Consult</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">3D</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{ctaTitle}</h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{ctaSubtitle}</p>
                            <Link href={contactFormLink}>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 h-auto rounded-lg">
                                    {ctaButton}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}