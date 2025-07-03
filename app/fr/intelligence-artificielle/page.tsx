import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PainPointsSection from '@/components/PainPointsSection';
import AIModulesSection from '@/components/AIModulesSection';
import ApiAutomationSection from '@/components/ApiAutomationSection';
import ImpactSection from '@/components/ImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LogoSlider from '@/components/LogoSlider';

export const metadata: Metadata = {
    title: 'Nextmotion IA - Automatisez votre clinique esthétique avec l\'intelligence artificielle',
    description: 'Découvrez Consult AI, Secrétariat IA, Copilot et notre API : 3 modules + des automatisations no-code pour libérer du temps et faire croître votre clinique.',
    alternates: {
        canonical: 'https://www.nextmotion.net/fr/intelligence-artificielle',
    },
};

export default function AIPage() {
    return (
        <main>
            <Hero
                title="Votre clinique pilotée par l'IA, 24h/24, 7j/7"
                subtitle="Automatisez, structurez, et faites grandir votre activité grâce à 3 modules intelligents pensés pour les médecins esthétiques."
                demoButton="📅 Planifier une démo IA gratuite"
                watchButton="Voir la vidéo"
                videoId="u9K8h1yLzNo"
            />

            <PainPointsSection
                title="Résoudre vos plus grands défis"
                subtitle="Éliminez les tâches répétitives, simplifiez le parcours patient et augmentez votre chiffre d'affaires grâce à l'automatisation par IA"
                isFrenchlanguage={true}
            />

            <LogoSlider
                title="Approuvé par les meilleures cliniques esthétiques"
                subtitle="Rejoignez des centaines de cliniques qui utilisent déjà les solutions IA de Nextmotion"
            />

            <AIModulesSection
                title="Trois modules IA pour transformer votre pratique"
                subtitle="Nos solutions d'IA sont conçues spécifiquement pour les cliniques esthétiques, répondant à vos flux de travail et défis uniques"
                isFrenchlanguage={true}
            />

            <ApiAutomationSection
                title="Connectez votre clinique à tout votre écosystème"
                subtitle="Grâce à notre API ouverte, Nextmotion se connecte aux outils que vous utilisez déjà : make.com, Zapier, Google Sheets, WhatsApp, Stripe, Mailchimp, Notion..."
                isFrenchlanguage={true}
            />

            <ImpactSection
                title="Pourquoi adopter l'IA maintenant ?"
                subtitle="Rejoignez plus de 500 cliniques esthétiques qui transforment déjà leur pratique avec Nextmotion IA"
                isFrenchlanguage={true}
            />

            <TestimonialsSection
                title="Ce que disent nos clients"
                subtitle="Écoutez les médecins qui ont transformé leur pratique avec Nextmotion IA"
                isFrenchlanguage={true}
            />
        </main>
    );
}