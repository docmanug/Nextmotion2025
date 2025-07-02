import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PainPointsSection from '@/components/PainPointsSection';
import AIModulesSection from '@/components/AIModulesSection';
import ApiAutomationSection from '@/components/ApiAutomationSection';
import ImpactSection from '@/components/ImpactSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LogoSlider from '@/components/LogoSlider';

export const metadata: Metadata = {
    title: 'Nextmotion AI - Automate Your Aesthetic Clinic with Artificial Intelligence',
    description: 'Discover Consult AI, Secretary AI, Copilot and our API: 3 modules + no-code automations to save time and grow your clinic.',
    alternates: {
        canonical: 'https://www.nextmotion.net/intelligence-artificielle',
    },
};

export default function AIPage() {
    return (
        <main>
            <Hero
                title="Your Clinic Powered by AI, 24/7"
                subtitle="Automate, structure, and grow your practice with 3 intelligent modules designed for aesthetic physicians."
                demoButton="📅 Schedule a Free AI Demo"
                watchButton="Watch Video"
            />

            <PainPointsSection
                title="Solve Your Biggest Challenges"
                subtitle="Eliminate repetitive tasks, streamline patient journeys, and boost your revenue with AI-powered automation"
            />

            <LogoSlider
                title="Trusted by Leading Aesthetic Clinics"
                subtitle="Join hundreds of clinics already using Nextmotion AI solutions"
            />

            <AIModulesSection
                title="Three AI Modules to Transform Your Practice"
                subtitle="Our AI solutions are designed specifically for aesthetic clinics, addressing your unique workflows and challenges"
            />

            <ApiAutomationSection
                title="Connect Your Clinic to Your Entire Ecosystem"
                subtitle="Thanks to our open API, Nextmotion connects to the tools you already use: make.com, Zapier, Google Sheets, WhatsApp, Stripe, Mailchimp, Notion..."
            />

            <ImpactSection
                title="Why Adopt AI Now?"
                subtitle="Join over 500 aesthetic clinics already transforming their practice with Nextmotion AI"
            />

            <TestimonialsSection
                title="What Our Clients Say"
                subtitle="Hear from physicians who have transformed their practices with Nextmotion AI"
            />
        </main>
    );
}