"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature5() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/manager/icons/manager_5_icon.png"
                  alt="Business Development Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Développement du business
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Nos outils de développement business intégrés propulsent votre
              activité. Utilisez des rappels automatiques par email ou SMS pour
              relancer les patients ayant un devis en cours ou leur rappeler de
              reprendre rendez-vous. La synchronisation avec Hubspot vous permet
              de réaliser du marketing professionnel et des ventes performantes
              grâce aux séquences et automatisations. Avec l'application
              Nextmotion Capture et son portfolio, attirez plus de patients et
              augmentez votre taux de conversion, stimulant ainsi la croissance
              de votre clinique.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Rappels Automatiques
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Vous aurez à disposition des outils de rappels automatiques
                  par email ou SMS pour relancer les patients avec un devis en
                  cours de réflexion ou leur rappeler de reprendre rendez-vous
                  pour leurs traitements récurrents.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Synchronisation avec Hubspot
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  La synchronisation avec Hubspot vous permettra de faire du
                  marketing professionnel et de la vente à un tout autre niveau
                  de performance via les séquences et autres automatisations.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Nextmotion Capture et Portfolio
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  L'application Nextmotion Capture et son portfolio vous
                  permettront d'attirer plus de patients et d'augmenter votre
                  taux de conversion, stimulant ainsi la croissance de votre
                  clinique.
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/manager/manager_5.png"
                  alt="Interface de développement business"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
