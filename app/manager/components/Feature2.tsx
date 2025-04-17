"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature2() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/manager/manager_2.png"
                  alt="Interface d'optimisation des process"
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
                  src="/manager/icons/manager_2_icon.png"
                  alt="Process Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Optimisez vos Process
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Réduisez le temps administratif avec la signature électronique et
              les questionnaires synchronisés. Gérez facilement les honoraires
              entre la clinique et les praticiens. Optimisez les appels entrants
              avec des notes et mots-clés pour les rendez-vous. Utilisez des
              outils de caisse et de comptabilité avancés pour la TVA et les
              exports en un clic. Suivez intuitivement le statut des patients
              présents depuis notre agenda.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Signature Électronique et Questionnaires Synchronisés
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Réduisez le temps administratif avec la signature électronique
                  des documents et les questionnaires de pré-consultation sur
                  tablette synchronisés avec les dossiers médicaux.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Répartition des Honoraires
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Gérez facilement la répartition des honoraires entre la
                  clinique et les praticiens pour une gestion financière
                  transparente.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Gestion des Appels Entrants
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Gardez un oeil sur les appels entrants depuis votre logiciel
                  qui intègre prise de notes et mots-clés pour identifier
                  facilement les opportunités de rendez-vous.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Outils de Caisse et Comptabilité
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Utilisez des outils avancés pour la gestion de la TVA et des
                  exports comptables personnalisés en un clic, simplifiant ainsi
                  vos tâches comptables.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Suivi du Statut des Patients
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Suivez intuitivement le statut des patients présents dans la
                  clinique grâce à notre agenda, indiquant les paiements réglés,
                  les séances forfait, et les paiements en attente
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
                  Démo personnalisée
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
