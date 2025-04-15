"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Feature1() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/medecin/medecin_1.png"
                  alt="Paperless Management Interface"
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
                  src="/medecin/icons/medecin_1_icon.png"
                  alt="Paperless Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Zéro papier</h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Streamline Your Aesthetic Clinic's Administrative Management with
              Advanced Digital Tools. Go Paperless, Save Time, and Ensure
              Accurate Traceability of Documents and Inventory.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Génération de Devis et Consentements en un Clic
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Créez rapidement des devis et consentements que les patients
                  peuvent signer électroniquement.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Signature Électronique
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Simplifiez la validation de tous vos documents avec des
                  signatures électroniques.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Transformation en Factures
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Transformez les devis en factures d'un simple geste.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Comptabilité Simplifiée
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Logiciel de caisse certifié NF525 pour une gestion comptable
                  efficace
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Traçabilité et Gestion du Stock
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Suivi dynamique et digital des stocks
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Reporting Digital
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Génération de rapports détaillés des points d'injections.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Envoi de Documents
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Envoyez des documents à vos patients en un clic.
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
                Réserver une démo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
