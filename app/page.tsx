import { Metadata } from "next";
import { getMessages, useTranslations } from "@/utils/i18n";
import CountryRedirect from "./components/CountryRedirect";
import SchemaManager from "./components/shared/SchemaManager";
import AIHero from "@/components/AIHero";
import ChallengesSection from "@/components/ChallengesSection";
import AIModulesSection from "@/components/AIModulesSection";
import TransitionSection from "@/components/TransitionSection";
import ProductsSection from "@/components/ProductsSection";
import ImpactSection from "@/components/ImpactSection";
import FinalCTA from "@/components/FinalCTA";
import LogoSlider from "@/components/LogoSlider";

export const metadata: Metadata = {
  title:
    "AI-powered management software for aesthetic clinics | Nextmotion",
  description:
    "Boost your aesthetic clinic's growth with Nextmotion's AI-powered software. Attract more patients, streamline operations, and automate administrative tasks.",
  alternates: {
    canonical: "https://www.nextmotion.net",
  },
};

export default async function Home() {
  const messages = await getMessages("en");
  const t = useTranslations(messages);

  // Challenges data
  const challenges = [
    {
      icon: "💰",
      title: "Not enough revenue",
      description: "Nextmotion helps you attract, convert, and retain patients with powerful AI and visual tools."
    },
    {
      icon: "🔁",
      title: "Complex patient journey",
      description: "Digitize every step of the patient journey: photos, quotes, consents, documents, rebooking."
    },
    {
      icon: "🗂",
      title: "Tedious administrative work",
      description: "Automate repetitive tasks and centralize all your data in one place."
    }
  ];

  // AI Modules data
  const aiModules = [
    {
      icon: "🧠",
      title: "Create medical reports in 30s with Consult AI",
      description: "Automatically generate structured medical reports from your voice during consultations.",
      features: [
        "Voice transcription during consultations",
        "Automatic generation of structured medical reports",
        "Customizable templates for different procedures",
        "Time savings of up to 70% on documentation"
      ],
      testimonial: {
        quote: "I save 2 hours every day on paperwork thanks to Consult AI.",
        author: "Dr. Sophie Martin",
        role: "Aesthetic Physician, Paris"
      },
      image: "/ai-consult.webp"
    },
    {
      icon: "📞",
      title: "An AI receptionist that works 24/7 for you",
      description: "Let our AI handle appointment scheduling, answer common questions, and update your CRM - all with your own voice.",
      features: [
        "24/7 availability for patient inquiries",
        "Automatic appointment scheduling and reminders",
        "Seamless integration with your calendar",
        "Natural voice interaction using your own voice"
      ],
      testimonial: {
        quote: "My clinic now books appointments even when we're closed. It's like having an extra staff member.",
        author: "Dr. Jean Dupont",
        role: "Clinic Manager"
      },
      image: "/ai-receptionist.webp"
    },
    {
      icon: "🤖",
      title: "Control your CRM from ChatGPT",
      description: "Manage your entire practice with simple voice or text commands through ChatGPT integration.",
      features: [
        "Voice and text commands for all CRM functions",
        "Quick access to patient records and history",
        "Generate reports and analytics on demand",
        "Seamless integration with your existing workflow"
      ],
      testimonial: {
        quote: "Being able to pull up patient information with a simple voice command has transformed my consultations.",
        author: "Dr. Thomas Laurent",
        role: "Plastic Surgeon"
      },
      image: "/ai-copilot.webp"
    }
  ];

  // Products data
  const products = [
    {
      icon: "📷",
      title: "Nextmotion Capture",
      description: "Standardized before/after photos that showcase your expertise and build patient trust. Automatic alignment, professional results, effortlessly.",
      image: "/capture-app-demo.webp"
    },
    {
      icon: "📁",
      title: "Nextmotion Consult",
      description: "The most aesthetic-focused digital medical record: smooth workflows, consents, invoices, API integrations, and a comprehensive medical CRM.",
      image: "/consult.webp"
    },
    {
      icon: "🧠",
      title: "Nextmotion 3D",
      description: "Project anatomical layers in augmented reality to better explain procedures and engage your patients in their treatment.",
      image: "/3d_anatomy.webp"
    },
    {
      icon: "🤖",
      title: "Nextmotion Revolution",
      description: "A robotic arm to capture perfectly standardized dynamic videos from all angles. A technology demonstration that impresses patients.",
      image: "/capturegirl.webp"
    }
  ];

  // Impact metrics
  const metrics = [
    {
      value: "+30%",
      label: "Time saved",
      icon: "⏱️"
    },
    {
      value: "+15%",
      label: "Average revenue increase",
      icon: "📈"
    },
    {
      value: "+35pts",
      label: "Patient satisfaction",
      icon: "🌟"
    }
  ];

  return (
    <main>
      <CountryRedirect />
      <AIHero
        title="The all-in-one AI solution to boost your aesthetic clinic's growth"
        subtitle="Attract more patients, digitize the patient experience, automate your daily management"
        demoButton="Schedule a personalized AI demo"
        discoverButton="Discover AI features"
      />
      <ChallengesSection
        title="The 3 critical challenges for clinics today"
        challenges={challenges}
      />
      <AIModulesSection
        title="Powerful AI modules to transform your practice"
        subtitle="Nextmotion's AI assistant is at the core of a complete ecosystem designed for aesthetic clinics"
        modules={aiModules}
      />
      <TransitionSection
        title="Artificial intelligence is at the heart of Nextmotion. But our solution goes much further."
        description="Nextmotion also integrates tools designed to cover all the business needs of a clinic: photo capture, patient records, robotics, 3D and more."
      />
      <ProductsSection
        title="Our flagship tools"
        products={products}
      />
      <ImpactSection
        metrics={metrics}
      />
      <LogoSlider 
        title="Trusted by leading aesthetic clinics worldwide" 
        subtitle="Join thousands of practitioners who have transformed their practice with Nextmotion"
      />
      <FinalCTA
        title="Ready to transform your practice?"
        description="Book a demo and receive a free 15-minute diagnostic of your organization."
        buttonText="Schedule an AI demo"
      />
      <SchemaManager schemas={['organization', 'softwareApplication']} />
    </main>
  );
}