"use client";

import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function PricingPlans() {
    const [messages, setMessages] = useState<any>(null);
    const [contactFormLink, setContactFormLink] = useState("/contact_form");

    useEffect(() => {
        setContactFormLink(
            window.location.pathname.startsWith("/fr")
                ? "/fr/formulaire_contact"
                : "/contact_form"
        );
    }, []);

    const pathname = usePathname();
    const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

    useEffect(() => {
        const loadMessages = async () => {
            const msgs = await getMessages(currentLocale);
            setMessages(msgs);
        };
        loadMessages();
    }, [currentLocale]);

    const t = useTranslations(messages);

    if (!messages) return null;

    const plans = [
        {
            name: currentLocale === "fr" ? "Starter" : "Starter",
            description: currentLocale === "fr"
                ? "Idéal pour les praticiens indépendants qui souhaitent se digitaliser simplement."
                : "Ideal for independent practitioners who want to digitize simply.",
            features: [
                currentLocale === "fr" ? "Nextmotion Capture" : "Nextmotion Capture",
                currentLocale === "fr" ? "Nextmotion Consult digital" : "Nextmotion Digital Consult",
                currentLocale === "fr" ? "1 utilisateur inclus" : "1 user included",
                currentLocale === "fr" ? "Accès Nextmotion Academy" : "Access to Nextmotion Academy",
            ],
            price: currentLocale === "fr" ? "€99" : "$99",
            period: currentLocale === "fr" ? "/mois" : "/month",
            originalPrice: currentLocale === "fr" ? "€187" : "$187",
            taxNote: currentLocale === "fr" ? "hors taxes, 12 mois d'engagement" : "excl. taxes, 12-month commitment",
            supportNote: currentLocale === "fr" ? "Support Chatbot et email inclus." : "Chatbot and email support included.",
            popular: false,
            selfServe: true
        },
        {
            name: currentLocale === "fr" ? "Essential" : "Essential",
            description: currentLocale === "fr"
                ? "Pour les cabinets en développement qui veulent gagner en efficacité et en organisation."
                : "For developing practices that want to gain efficiency and organization.",
            features: [
                currentLocale === "fr" ? "Nextmotion Starter Pack" : "Nextmotion Starter Pack",
                currentLocale === "fr" ? "Consult AI (1 utilisateur)" : "Consult AI (1 user)",
                currentLocale === "fr" ? "Comptabilité" : "Accounting",
                currentLocale === "fr" ? "2 utilisateurs inclus" : "2 users included",
                currentLocale === "fr" ? "Good reviews" : "Good reviews",
            ],
            price: currentLocale === "fr" ? "€199" : "$199",
            period: currentLocale === "fr" ? "/mois" : "/month",
            originalPrice: currentLocale === "fr" ? "€352" : "$352",
            taxNote: currentLocale === "fr" ? "hors taxes, 12 mois d'engagement" : "excl. taxes, 12-month commitment",
            supportNote: currentLocale === "fr" ? "Support chatbot et email." : "Chatbot and email support.",
            popular: false,
            selfServe: false
        },
        {
            name: currentLocale === "fr" ? "Premium" : "Premium",
            description: currentLocale === "fr"
                ? "Pensé pour les cabinets structurés qui veulent automatiser et intégrer l'IA dans leur quotidien."
                : "Designed for structured practices that want to automate and integrate AI into their daily operations.",
            features: [
                currentLocale === "fr" ? "Nextmotion Essential" : "Nextmotion Essential",
                currentLocale === "fr" ? "Nextmotion copilot AI" : "Nextmotion copilot AI",
                currentLocale === "fr" ? "Accès automatisations & API" : "Access to automations & API",
                currentLocale === "fr" ? "5 utilisateurs inclus" : "5 users included",
                currentLocale === "fr" ? "Nextmotion Agenda" : "Nextmotion Agenda",
                currentLocale === "fr" ? "1h support/mois" : "1h support/month",
            ],
            price: currentLocale === "fr" ? "€399" : "$399",
            period: currentLocale === "fr" ? "/mois" : "/month",
            originalPrice: currentLocale === "fr" ? "€569" : "$569",
            taxNote: currentLocale === "fr" ? "hors taxes, 12 mois d'engagement" : "excl. taxes, 12-month commitment",
            supportNote: currentLocale === "fr" ? "Support chatbot, email prioritaire et Whatsapp." : "Chatbot, priority email and Whatsapp support.",
            popular: true,
            selfServe: false
        },
        {
            name: currentLocale === "fr" ? "Enterprise" : "Enterprise",
            description: currentLocale === "fr"
                ? "Pour les groupes ou réseaux de cliniques. Intégrations sur mesure et pilotage global."
                : "For groups or clinic networks. Custom integrations and global management.",
            features: [
                currentLocale === "fr" ? "Nextmotion Premium" : "Nextmotion Premium",
                currentLocale === "fr" ? "Portail patient" : "Patient portal",
                currentLocale === "fr" ? "Messagerie interne & visio" : "Internal messaging & video",
                currentLocale === "fr" ? "10 utilisateurs inclus" : "10 users included",
                currentLocale === "fr" ? "2h support/mois" : "2h support/month",
            ],
            price: currentLocale === "fr" ? "Sur devis" : "Custom quote",
            period: "",
            originalPrice: "",
            taxNote: "",
            supportNote: currentLocale === "fr" ? "Contactez-nous pour une offre personnalisée." : "Contact us for a personalized offer.",
            popular: false,
            selfServe: false
        }
    ];

    const faqs = [
        {
            question: currentLocale === "fr"
                ? "🧠 Les modules IA sont-ils inclus dans tous les packs ?"
                : "🧠 Are AI modules included in all packages?",
            answer: currentLocale === "fr"
                ? "Non. Les modules IA (Consult AI, Secrétariat IA, Copilot) sont inclus à partir du pack Premium. Si vous êtes en Starter ou Essential, vous pouvez aussi les activer à la carte selon vos besoins."
                : "No. AI modules (Consult AI, AI Receptionist, Copilot) are included from the Premium package. If you are on Starter or Essential, you can also activate them à la carte according to your needs."
        },
        {
            question: currentLocale === "fr"
                ? "⚖️ Quelle différence entre Essential et Premium ?"
                : "⚖️ What's the difference between Essential and Premium?",
            answer: currentLocale === "fr"
                ? "Essential vous donne accès à tous les outils métiers classiques (Consult, Capture, agenda, consentements, facturation). Premium y ajoute l'intelligence artificielle pour automatiser la prise de rendez-vous, les comptes rendus et les tâches répétitives."
                : "Essential gives you access to all classic business tools (Consult, Capture, agenda, consents, billing). Premium adds artificial intelligence to automate appointment booking, reports, and repetitive tasks."
        },
        {
            question: currentLocale === "fr"
                ? "🗓 Puis-je commencer petit et ajouter l'IA plus tard ?"
                : "🗓 Can I start small and add AI later?",
            answer: currentLocale === "fr"
                ? "Absolument. Vous pouvez démarrer avec le pack Starter ou Essential et activer les modules IA plus tard, au rythme de votre croissance. Nous proposons un audit gratuit pour vous aider à identifier le moment optimal."
                : "Absolutely. You can start with the Starter or Essential package and activate AI modules later, at your own pace. We offer a free audit to help you identify the optimal time."
        },
        {
            question: currentLocale === "fr"
                ? "🏢 Est-ce que Nextmotion est adapté aux groupes de cliniques ?"
                : "🏢 Is Nextmotion suitable for clinic groups?",
            answer: currentLocale === "fr"
                ? "Oui. Le pack Enterprise est conçu pour les structures multi-sites : dashboard centralisé, accès par rôle, modules IA intégrés et accompagnement personnalisé à l'échelle du groupe."
                : "Yes. The Enterprise package is designed for multi-site structures: centralized dashboard, role-based access, integrated AI modules, and personalized support at the group level."
        },
        {
            question: currentLocale === "fr"
                ? "📊 Comment savoir quel pack me fera gagner le plus ?"
                : "📊 How do I know which package will benefit me the most?",
            answer: currentLocale === "fr"
                ? "Utilisez notre calculateur de ROI pour estimer votre temps gagné, vos consultations supplémentaires et l'impact sur votre chiffre d'affaires. Puis planifiez un audit gratuit avec notre équipe pour recevoir une recommandation sur-mesure."
                : "Use our ROI calculator to estimate your time saved, additional consultations, and impact on your revenue. Then schedule a free audit with our team to receive a customized recommendation."
        }
    ];

    const serviceOffers = [
        {
            title: currentLocale === "fr" ? "Nextmotion Support" : "Nextmotion Support",
            description: currentLocale === "fr"
                ? "69€/mois HT, comprend 1h de training par mois avec nos équipes support"
                : "€69/month excl. tax, includes 1h of training per month with our support teams"
        },
        {
            title: currentLocale === "fr" ? "Nextmotion Quickstart" : "Nextmotion Quickstart",
            description: currentLocale === "fr"
                ? "1000€ HT, paramétrage (15h) + 3h de formation"
                : "€1000 excl. tax, setup (15h) + 3h of training"
        },
        {
            title: currentLocale === "fr" ? "Formations complémentaires" : "Additional Training",
            description: currentLocale === "fr"
                ? "200€ ht/heure"
                : "€200 excl. tax/hour"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-6 shadow-md border flex flex-col h-full ${plan.popular ? 'border-blue-500 relative' : 'border-gray-200'}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                                    {currentLocale === "fr" ? "Recommandé" : "Recommended"}
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-[#081F4D] mb-2 mt-2">{plan.name}</h3>

                            <p className="text-gray-600 text-sm mb-4 h-12">
                                {plan.description}
                            </p>

                            <div className="mb-4">
                                <div className="flex items-baseline">
                                    <span className="text-3xl font-bold text-[#081F4D]">{plan.price}</span>
                                    <span className="text-gray-600">{plan.period}</span>
                                </div>
                                {plan.originalPrice && (
                                    <div className="text-sm text-gray-500 line-through">{plan.originalPrice}{plan.period}</div>
                                )}
                                {plan.taxNote && (
                                    <p className="text-xs text-gray-500 mt-1">{plan.taxNote}</p>
                                )}
                            </div>

                            <ul className="space-y-3 mb-6 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <Link href={plan.selfServe ? "https://account.nextmotion.net/auth/register" : contactFormLink} className="block">
                                    <Button
                                        className={`w-full py-2.5 rounded-lg ${plan.selfServe
                                                ? "bg-green-600 hover:bg-green-700 text-white"
                                                : "bg-[#284fe6] hover:bg-blue-700 text-white"
                                            }`}
                                    >
                                        {plan.selfServe
                                            ? (currentLocale === "fr" ? "Démarrer maintenant" : "Start now")
                                            : (currentLocale === "fr" ? "Demander une démo" : "Request a demo")}
                                    </Button>
                                </Link>

                                <p className="text-xs text-gray-500 mt-3 text-center">
                                    {plan.supportNote}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gray-50 rounded-xl p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-center text-[#081F4D] mb-6">
                        {currentLocale === "fr" ? "Paiement annuel" : "Annual payment"}
                    </h2>

                    <p className="text-center text-lg mb-6 text-gray-700">
                        {currentLocale === "fr"
                            ? "5% de remise pour 1 an, 7% pour 2 ans, 10% pour 3 ans."
                            : "5% discount for 1 year, 7% for 2 years, 10% for 3 years."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                            <h3 className="font-bold text-xl text-[#081F4D] mb-2">
                                {currentLocale === "fr" ? "Économisez jusqu'à 15%" : "Save up to 15%"}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {currentLocale === "fr" ? "Réduction significative sur le tarif" : "Significant reduction on the rate"}
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                            <h3 className="font-bold text-xl text-[#081F4D] mb-2">
                                {currentLocale === "fr" ? "Support prioritaire" : "Priority support"}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {currentLocale === "fr" ? "Accès privilégié à notre équipe" : "Privileged access to our team"}
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                            <h3 className="font-bold text-xl text-[#081F4D] mb-2">
                                {currentLocale === "fr" ? "Stabilité budgétaire" : "Budget stability"}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {currentLocale === "fr" ? "Planifiez vos dépenses sur le long" : "Plan your expenses long-term"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 bg-gray-50 rounded-xl p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-center text-[#081F4D] mb-8">
                        {currentLocale === "fr" ? "Nos offres de service" : "Our service offers"}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {serviceOffers.map((offer, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 text-center">
                                <h3 className="font-bold text-xl text-[#081F4D] mb-2">{offer.title}</h3>
                                <p className="text-gray-600">{offer.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-[#081F4D] mb-8">
                        {currentLocale === "fr" ? "Vous avez des questions ? Nous avons les réponses" : "You have questions? We have answers"}
                    </h3>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h4 className="font-semibold text-[#081F4D] mb-3 text-lg">{faq.question}</h4>
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center bg-blue-50 rounded-xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#081F4D] mb-4">
                        {currentLocale === "fr" ? "Vous hésitez ?" : "Not sure which to choose?"}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                        {currentLocale === "fr"
                            ? "Demandez un audit gratuit et recevez votre plan IA sur mesure"
                            : "Request a free audit and receive your customized AI plan"}
                    </p>
                    <Link href={contactFormLink}>
                        <Button
                            className="bg-[#284fe6] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg"
                        >
                            {currentLocale === "fr" ? "Planifier mon audit gratuit" : "Schedule my free audit"}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}