"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TryNextmotion() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1650EF] rounded-[32px] px-12 py-16">
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Essayez Nextmotion
            </h2>

            <p className="text-[18px] leading-relaxed text-white/90 mb-8">
              Inscrivez-vous pour une démonstration gratuite et découvrez
              comment Nextmotion peut transformer la gestion de votre clinique
              esthétique. Maximisez votre efficacité et attirez plus de patients
              dès aujourd'hui. Demandez une démonstration gratuite dès
              maintenant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
