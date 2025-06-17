"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature7() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <OptimizedImage
                  src="/manager/icons/manager_7_icon.webp"
                  alt="Portail Patient Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Portail patient
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              La web-application portail patient affiche le logo de votre
              clinique et intègre un portail de prise de rendez-vous en ligne,
              avec chat intégré et questionnaires de pré-consultation
              synchronisés. Elle simplifie la gestion avec la signature
              électronique, un carnet digital de traçabilité et un portfolio
              avant/après. Tous les documents sont centralisés et des
              notifications pour relances, anniversaires et promotions peuvent
              être envoyées.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Personnalisation et Prise de Rendez-vous
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  {`L'icône de l'application affiche le logo de votre clinique et
                  intègre un portail de prise de rendez-vous en ligne avec la
                  possibilité de modifier les rendez-vous.`}
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Communication et Pré-consultation
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Le chat intégré permet une communication directe avec la
                  clinique, tandis que le questionnaire de pré-consultation se
                  synchronise automatiquement avec le dossier patient.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Documents et Traçabilité
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  La signature électronique facilite la gestion des documents,
                  et le carnet digital assure la traçabilité des interventions.
                  Le portfolio digital permet de partager facilement les
                  avant/après.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Centralisation et Notifications
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Tous les documents, tels que les factures et ordonnances, sont
                  centralisés pour un accès facile. Vous pouvez également
                  envoyer des notifications pour les relances, anniversaires et
                  offres promotionnelles (fonctionnalité en cours de
                  développement).
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <OptimizedImage
                  src="/manager/manager_7.webp"
                  alt="Nextmotion Integration Center Screenshot"
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
