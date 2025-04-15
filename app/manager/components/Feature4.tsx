"use client";

import Image from "next/image";
import Link from "next/link";

export default function Feature4() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/manager/manager_4.png"
                  alt="Interface Agenda et RDV"
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
                  src="/manager/icons/manager_4_icon.png"
                  alt="Agenda Icon"
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Agenda et RDV
              </h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              Notre partie Agenda offre une gestion complète des plannings par
              salle, collaborateur et machine, permettant une organisation
              optimale de votre clinique esthétique. Intégrez facilement notre
              portail de prise de rendez-vous en ligne directement sur votre
              site internet, offrant à vos patients une interface conviviale
              pour planifier leurs visites. De plus, la gestion des SMS et
              emails de rappel automatisés assure que vos patients n'oublient
              jamais leurs rendez- vous, réduisant ainsi les absences et
              augmentant l'efficacité de votre clinique.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Portail de Prise de Rendez-vous en Ligne
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  Intégrez facilement notre portail de prise de rendez-vous en
                  ligne directement sur votre site internet, offrant à vos
                  patients une interface conviviale pour planifier leurs
                  visites.
                </p>
              </div>

              <div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                  Rappels Automatisés par SMS et Email
                </h3>
                <p className="text-[18px] leading-relaxed text-gray-600">
                  La gestion des SMS et emails de rappel automatisés assure que
                  vos patients n'oublient jamais leurs rendez-vous, réduisant
                  ainsi les absences et augmentant l'efficacité de votre
                  clinique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
