"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature7() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/medecin/icons/medecin_7_icon.png"
                  alt="Optimal Integration Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Optimal Integration
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Nextmotion integrates with Stripe for payments, Mailchimp for
              marketing emails, Hubspot for marketing & sales automation and
              Zapier for task automation. These integrations save you time and
              automate repetitive tasks.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Personnalisation et Prise de Rendez-vous
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  L'icône de l'application affiche le logo de votre clinique et
                  intègre un portail de prise de rendez-vous en ligne avec la
                  possibilité de modifier les rendez-vous.
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
                <Image
                  src="/medecin/medecin_7.png"
                  alt="Optimal Integration Interface"
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
