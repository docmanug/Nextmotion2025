"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature3() {
  return (
    <section className="py-24 bg-[#F3F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Image
                  src="/manager/icons/manager_3_icon.png"
                  alt="Dashboard Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Suivi de l'Activité
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Grâce à notre Dashboard intuitif, suivez les principaux
              indicateurs de votre activité, comme le nombre de nouveaux
              patients, le chiffre d'affaires généré, l'état des stocks, et les
              sources des prises de rendez-vous. Gérez précisément les impayés
              et anticipez le chiffre d'affaires futur en fonction des
              rendez-vous à venir, pour une gestion optimale de votre clinique.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Suivi des Nouveaux Patients
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Grâce à notre Dashboard, suivez le nombre de nouveaux patients
                  qui ont pris rendez-vous. Gardez un œil sur la croissance de
                  votre patiente.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Chiffre d'Affaires Généré
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Visualisez le chiffre d'affaires généré par votre équipe sur
                  une période donnée. Analysez les performances financières de
                  votre clinique.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Gestion des Stocks
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Surveillez l'état de votre stock avec des alertes pour ne
                  jamais être à court. Assurez une disponibilité constante de
                  vos produits.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Sources des Prises de Rendez-vous
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Identifiez les sources des prises de rendez-vous de vos
                  patients. Optimisez vos efforts marketing en fonction des
                  canaux les plus efficaces.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Suivi des Impayés
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Effectuez un suivi précis des impayés pour une gestion
                  financière rigoureuse. Relancez les paiements en retard
                  facilement.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Prévisionnel du Chiffre d'Affaires
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Anticipez le chiffre d'affaires en fonction des rendez-vous à
                  venir. Planifiez stratégiquement pour maximiser vos revenus
                  futurs.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Analyse des Performances
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Utilisez des indicateurs clés pour évaluer et améliorer les
                  performances de votre clinique. Prenez des décisions éclairées
                  pour une gestion optimale.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contact_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  Demo personnalisée
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/manager/manager_3.png"
                  alt="Dashboard de suivi d'activité"
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
