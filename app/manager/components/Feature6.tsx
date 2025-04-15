"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature6() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/manager/manager_6.png"
                  alt="Interface de marketing optimisé"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/manager/icons/manager_6_icon.png"
                  alt="Marketing Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Marketing optimisé
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Attirez plus de patients avec des campagnes email et SMS ciblées.
              Sollicitez les automatiquement pour obtenir une bonne évaluation
              sur internet. Collectez des données précises pour personnaliser
              vos stratégies marketing et obtenir de bonnes évaluations.
              Intégrez Google Tag Manager pour connaitre les sources de prise de
              rendez-vous. Synchronisez Nextmotion avec Hubspot pour une gestion
              fluide et efficace de vos campagnes marketing.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Campagnes Email et SMS Ciblées
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Attirez plus de patients avec des campagnes email et SMS
                  ciblées. Sollicitez-les automatiquement pour obtenir une bonne
                  évaluation sur internet.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Collecte de Données Précises
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Collectez des données précises pour personnaliser vos
                  stratégies marketing.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Intégration de Google Tag Manager
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Intégrez Google Tag Manager pour connaître les sources de
                  prise de rendez-vous et optimiser vos efforts marketing.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Synchronisation avec Hubspot
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Synchronisez Nextmotion avec Hubspot pour une gestion fluide
                  et efficace de vos campagnes marketing.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button
                variant="outline"
                size="lg"
                className="border-[2px] border-[#284fe6] text-black-600 bg-transparent
 hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
              >
                En savoir plus sur les Intégrations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
