"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Testimonial {
    quote: string;
    author: string;
    title: string;
    location: string;
    image: string;
}

interface TestimonialsSectionProps {
    title: string;
    subtitle: string;
    className?: string;
    isFrenchlanguage?: boolean;
}

export default function TestimonialsSection({
    title,
    subtitle,
    className,
    isFrenchlanguage = false,
}: TestimonialsSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonialsEN: Testimonial[] = [
        {
            quote: "Nextmotion's AI has completely transformed how I run my clinic. The automated consultation notes alone save me hours every day, and patients love the interactive 3D visualizations.",
            author: "Dr. Diala Haykal",
            title: "Aesthetic doctor",
            location: "Paris",
            image: "/testimonials/nabila-azib.webp"
        },
        {
            quote: "The Secretary AI feature has been a game-changer for our clinic. We've reduced missed appointments by 45% and our staff can focus on providing better care instead of answering routine calls.",
            author: "Dr. Joseph Marciano",
            title: "Aesthetic doctor",
            location: "Paris",
            image: "/testimonials/ali-pirayesh.webp"
        },
        {
            quote: "As someone managing multiple clinics, Nextmotion gives me the analytics and oversight I need. The AI-powered insights help us make better business decisions and optimize our operations.",
            author: "Dr. Per Heden",
            title: "Plastic surgeon",
            location: "Stockholm",
            image: "/testimonials/constantin-stan.webp"
        },
        {
            quote: "The platform's ease of use and comprehensive features have made it an essential tool for our practice. The ROI has been exceptional, with a 30% increase in patient conversions.",
            author: "Pr. Jean Paul Meningaud",
            title: "Plastic surgeon",
            location: "Paris",
            image: "/testimonials/rolf-bartsch.webp"
        },
        {
            quote: "Nextmotion has revolutionized our patient consultations. The before/after imaging capabilities are unmatched, and patients are much more confident in their treatment decisions.",
            author: "Dr. Nabila Azib",
            title: "Plastic surgeon",
            location: "Morocco",
            image: "/testimonials/nabila-azib.webp"
        },
        {
            quote: "I've tried many clinic management solutions, but Nextmotion stands out for its intuitive interface and AI capabilities. It's truly designed with aesthetic practitioners in mind.",
            author: "Dr. Sophie Loubeyres",
            title: "Dermatologist",
            location: "Pau",
            image: "/testimonials/tracy-cohen.webp"
        }
    ];

    const testimonialsFR: Testimonial[] = [
        {
            quote: "L'IA de Nextmotion a complètement transformé la façon dont je gère ma clinique. Les notes de consultation automatisées me font gagner des heures chaque jour, et les patients adorent les visualisations 3D interactives.",
            author: "Dr. Diala Haykal",
            title: "Médecin esthétique",
            location: "Paris",
            image: "/testimonials/nabila-azib.webp"
        },
        {
            quote: "La fonctionnalité Secrétariat IA a été un véritable changement pour notre clinique. Nous avons réduit les rendez-vous manqués de 45% et notre personnel peut se concentrer sur les soins plutôt que de répondre aux appels de routine.",
            author: "Dr. Joseph Marciano",
            title: "Médecin esthétique",
            location: "Paris",
            image: "/testimonials/ali-pirayesh.webp"
        },
        {
            quote: "En tant que gestionnaire de plusieurs cliniques, Nextmotion me donne les analyses et la supervision dont j'ai besoin. Les insights alimentés par l'IA nous aident à prendre de meilleures décisions commerciales et à optimiser nos opérations.",
            author: "Dr. Per Heden",
            title: "Chirurgien plasticien",
            location: "Stockholm",
            image: "/testimonials/constantin-stan.webp"
        },
        {
            quote: "La facilité d'utilisation et les fonctionnalités complètes de la plateforme en ont fait un outil essentiel pour notre pratique. Le ROI a été exceptionnel, avec une augmentation de 30% des conversions de patients.",
            author: "Pr. Jean Paul Meningaud",
            title: "Chirurgien plasticien",
            location: "Paris",
            image: "/testimonials/rolf-bartsch.webp"
        },
        {
            quote: "Nextmotion a révolutionné nos consultations avec les patients. Les capacités d'imagerie avant/après sont inégalées, et les patients sont beaucoup plus confiants dans leurs décisions de traitement.",
            author: "Dr. Nabila Azib",
            title: "Chirurgien plasticien",
            location: "Maroc",
            image: "/testimonials/nabila-azib.webp"
        },
        {
            quote: "J'ai essayé de nombreuses solutions de gestion de clinique, mais Nextmotion se démarque par son interface intuitive et ses capacités d'IA. Il est vraiment conçu en pensant aux praticiens esthétiques.",
            author: "Dr. Sophie Loubeyres",
            title: "Dermatologue",
            location: "Pau",
            image: "/testimonials/tracy-cohen.webp"
        }
    ];

    const testimonials = isFrenchlanguage ? testimonialsFR : testimonialsEN;

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToTestimonial = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <Section className={cn("py-16 bg-white", className)}>
            <SectionHeader title={title} subtitle={subtitle} />

            <div className="mt-12 max-w-4xl mx-auto">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    {/* Quote marks */}
                    <div className="absolute top-6 left-8 text-6xl text-blue-100 font-serif">&quot;</div>

                    <div className="relative z-10">
                        <p className="text-xl text-gray-700 mb-8 pl-8 italic">
                            {testimonials[activeIndex].quote}
                        </p>

                        <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                <OptimizedImage
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].author}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <div className="font-bold text-gray-900">{testimonials[activeIndex].author}</div>
                                <div className="text-gray-600 text-sm">
                                    {testimonials[activeIndex].title}, {testimonials[activeIndex].location}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="absolute bottom-8 right-8 flex space-x-2">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            aria-label={isFrenchlanguage ? "Témoignage précédent" : "Previous testimonial"}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            aria-label={isFrenchlanguage ? "Témoignage suivant" : "Next testimonial"}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                                aria-label={isFrenchlanguage ? `Aller au témoignage ${index + 1}` : `Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}