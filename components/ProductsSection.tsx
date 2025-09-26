"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

interface ProductsSectionProps {
  title: string;
  subtitle: string;
  className?: string;
  isFrenchlanguage?: boolean;
}

export default function ProductsSection({
  title,
  subtitle,
  className,
  isFrenchlanguage = false,
}: ProductsSectionProps) {
  const [links, setLinks] = useState({
    capture: "/before-after",
    consult: "/consult",
    revolution: "/revolution",
    threeD: "/3d-aesthetic-simulation"
  });

  useEffect(() => {
    if (window.location.pathname.startsWith("/fr")) {
      setLinks({
        capture: "/fr/photos-avant-apres",
        consult: "/fr/consulter",
        revolution: "/fr/revolution",
        threeD: "/fr/3d-simulation-esthetique"
      });
    }
  }, []);

  const productsEN: Product[] = [
    {
      title: "Capture",
      description: "Standardized before/after photos and videos",
      features: [
        "Consistent, high-quality clinical imagery",
        "Automated positioning guides",
        "Secure patient photo management",
        "Enhanced patient engagement"
      ],
      image: "/capture-app-demo.webp",
      link: links.capture
    },
    {
      title: "Consult",
      description: "Intelligent patient management system",
      features: [
        "Complete electronic medical records",
        "Integrated scheduling and reminders",
        "Automated billing and invoicing",
        "Secure patient communication"
      ],
      image: "/consult.webp",
      link: links.consult
    },
    {
      title: "Revolution",
      description: "Dynamic video capture system",
      features: [
        "Automated video standardization",
        "Multi-angle capture technology",
        "Enhanced patient visualization",
        "Seamless integration with patient records"
      ],
      image: "/capturegirl.webp",
      link: links.revolution
    },
    {
      title: "3D",
      description: "Advanced anatomical visualization",
      features: [
        "Interactive 3D anatomy models",
        "Treatment simulation capabilities",
        "Patient education tools",
        "Precise treatment planning"
      ],
      image: "/3d_anatomy.webp",
      link: links.threeD
    }
  ];

  const productsFR: Product[] = [
    {
      title: "Capture",
      description: "Photos et vidéos avant/après standardisées",
      features: [
        "Imagerie clinique cohérente et de haute qualité",
        "Guides de positionnement automatisés",
        "Gestion sécurisée des photos des patients",
        "Engagement patient amélioré"
      ],
      image: "/capture-app-demo.webp",
      link: links.capture
    },
    {
      title: "Consult",
      description: "Système intelligent de gestion des patients",
      features: [
        "Dossiers médicaux électroniques complets",
        "Planification et rappels intégrés",
        "Facturation et comptabilité automatisées",
        "Communication sécurisée avec les patients"
      ],
      image: "/consult.webp",
      link: links.consult
    },
    {
      title: "Revolution",
      description: "Système de capture vidéo dynamique",
      features: [
        "Standardisation vidéo automatisée",
        "Technologie de capture multi-angles",
        "Visualisation patient améliorée",
        "Intégration transparente avec les dossiers patients"
      ],
      image: "/capturegirl.webp",
      link: links.revolution
    },
    {
      title: "3D",
      description: "Visualisation anatomique avancée",
      features: [
        "Modèles anatomiques 3D interactifs",
        "Capacités de simulation de traitement",
        "Outils d'éducation des patients",
        "Planification précise des traitements"
      ],
      image: "/3d_anatomy.webp",
      link: links.threeD
    }
  ];

  const products = isFrenchlanguage ? productsFR : productsEN;
  const learnMoreText = isFrenchlanguage ? "En savoir plus" : "Learn more";

  return (
    <Section className={cn("py-16 bg-white", className)}>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={product.link}>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  {learnMoreText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}