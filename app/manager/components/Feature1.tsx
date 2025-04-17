"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature1() {
  return (
    <section className="py-12 sm:py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-blue-100 rounded-full p-2 sm:p-3">
                <Image
                  src="/manager/icons/manager_1_icon.png"
                  alt="Patient Icon"
                  width={60}
                  height={60}
                  className="text-blue-600 w-10 h-10 sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Parcours patient simplifié
              </h2>
            </div>

            <p className="text-base sm:text-[18px] leading-relaxed text-gray-600 mb-6 sm:mb-10">
              Le module parcours patient simplifie l'utilisation de notre
              solution par vos équipes grâce à une interface épurée qui liste
              des patients de la journée, impose des étapes pré-définies sans
              nécessité d'aller dans le dossier médical ainsi que des filtres
              pour trier les parcours complétés, en cours ou non débuté.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  Liste des Patients de la Journée
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  Accédez rapidement à la liste des patients prévus pour la
                  journée, permettant une gestion efficace et sans stress de
                  votre emploi du temps.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  Étapes Pré-définies
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  Suivez les étapes pré-définies du parcours patient sans avoir
                  à naviguer dans chaque dossier. Cela simplifie le flux de
                  travail et réduit le temps de gestion administrative.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3">
                  Filtres par Parcours
                </h3>
                <p className="text-base sm:text-[18px] leading-relaxed text-gray-600">
                  Filtrez facilement les patients par parcours complété, en
                  cours, ou non débuté. Cette fonctionnalité vous offre une
                  vision claire de l'état des soins, vous permettant de
                  prioriser vos actions et d'assurer un suivi rigoureux.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
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
                  Réservez votre démo
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <Image
                src="/manager/manager_1.png"
                alt="Nextmotion Capture App Screenshot"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
