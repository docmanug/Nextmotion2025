import type { Metadata } from "next";
import AIHero from "@/components/AIHero";
import AIModulesSection from "@/components/AIModulesSection";
import CommunitySection from "@/components/CommunitySection";
import FinalCTA from "@/components/FinalCTA";
import { FAQSection } from "@/components/ui/faq-section";
import { getMessages } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "Analyse de peau IA – Nextmotion",
  description:
    "Détectez rides, taches, rougeurs et déshydratation en un clic depuis votre smartphone. Fonctionnalité incluse à partir du forfait Essential.",
  alternates: { canonical: "https://www.nextmotion.net/fr/analyse-peau-ia" },
};

export default async function IASkinAnalysisPage() {
  const messages = await getMessages('fr');
  const t = (key: string) => {
    const keys = key.split('.');
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  const aiModules = [
    {
      icon: "💧",
      title: t("aiSkinAnalysis.detection.items.0.title"),
      description: t("aiSkinAnalysis.detection.items.0.description"),
      features: [
        "Analyse du glow naturel de la peau",
        "Détection des zones sèches et déshydratées",
        "Score d'hydratation automatique",
        "Recommandations personnalisées"
      ],
      testimonial: {
        quote: "L'analyse d'hydratation m'aide à recommander les bons soins à mes patients",
        author: "Dr. Martin",
        role: "Dermatologue"
      },
      image: "/ai-consult.webp"
    },
    {
      icon: "👵",
      title: t("aiSkinAnalysis.detection.items.1.title"),
      description: t("aiSkinAnalysis.detection.items.1.description"),
      features: [
        "Cartographie complète des rides",
        "Classification par profondeur",
        "Suivi de l'évolution dans le temps",
        "Zones d'analyse personnalisables"
      ],
      image: "/ai-copilot.webp"
    },
    {
      icon: "🌑",
      title: t("aiSkinAnalysis.detection.items.2.title"),
      description: t("aiSkinAnalysis.detection.items.2.description"),
      features: [
        "Détection des taches pigmentaires",
        "Analyse des mélasmas",
        "Cartographie des zones à risque",
        "Suivi photographique automatique"
      ],
      image: "/ai-receptionist.webp"
    }
  ];

  const comparisonData = [
    {
      criteria: "Appareil dédié requis",
      visia: { value: "Oui", icon: "✅" },
      nextmotion: { value: "Non (smartphone uniquement)", icon: "❌" }
    },
    {
      criteria: "Nombre de critères analysés",
      visia: { value: "8", icon: "✅" },
      nextmotion: { value: "4 essentiels (évolutif)", icon: "✅" }
    },
    {
      criteria: "Rapport PDF généré",
      visia: { value: "Oui", icon: "✅" },
      nextmotion: { value: "Automatique", icon: "✅" }
    },
    {
      criteria: "Suivi dans le temps",
      visia: { value: "Manuel", icon: "❌" },
      nextmotion: { value: "Comparaison intégrée", icon: "✅" }
    },
    {
      criteria: "Coût",
      visia: { value: "> 20 000 €", icon: "💰" },
      nextmotion: { value: "Inclus dans vos formules", icon: "✔️" }
    }
  ];

  const faqData = [
    {
      question: "L'IA est-elle fiable ?",
      answer: "Oui, elle a été entraînée sur plus de 70 000 cas cliniques réels. Son algorithme évolue en continu."
    },
    {
      question: "Est-ce RGPD compliant ?",
      answer: "100 %. Toutes les données sont hébergées en Europe selon les normes en vigueur."
    },
    {
      question: "Faut-il un appareil spécifique ?",
      answer: "Non. Une photo prise avec NM Capture suffit. Aucun matériel à acheter."
    },
    {
      question: "Est-ce compatible avec mon activité ?",
      answer: "Oui, la technologie est conçue pour la médecine esthétique quotidienne."
    }
  ];

  return (
    <main>
      <AIHero
        title={t("aiSkinAnalysis.hero.title")}
        subtitle={t("aiSkinAnalysis.hero.subtitle")}
        demoButton={t("aiSkinAnalysis.hero.demoButton")}
        discoverButton={t("aiSkinAnalysis.hero.discoverButton")}
      />

      <AIModulesSection
        title={t("aiSkinAnalysis.benefits.title")}
        subtitle="Montrez à vos patients ce que leurs yeux ne perçoivent pas encore. Une image vaut mieux qu'un long discours."
        modules={aiModules}
      />

      {/* Section Comparaison avec VISIA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4">
              Et si vous pouviez faire mieux que VISIA, sans machine à 20 000 € ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le dispositif IA de Nextmotion vous offre une alternative moderne, mobile et tout-en-un aux systèmes traditionnels d'analyse de peau.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Critères</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">VISIA Canfield</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Analyse IA Nextmotion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.criteria}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      <span className="mr-2">{row.visia.icon}</span>
                      {row.visia.value}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                      <span className="mr-2">{row.nextmotion.icon}</span>
                      {row.nextmotion.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg">
              Comparer en démo
            </button>
          </div>
        </div>
      </section>

      {/* Section Témoignage */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <blockquote className="text-xl sm:text-2xl text-gray-700 mb-6 italic">
              "Grâce à l'analyse IA, je peux illustrer mes diagnostics en quelques secondes. C'est un game-changer dans mes consultations."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">Dr Lefevre</div>
            <div className="text-gray-600">médecin esthétique à Paris</div>

            <div className="mt-8 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              +150 centres utilisent déjà la technologie IA de Nextmotion
            </div>
          </div>
        </div>
      </section>

      <CommunitySection
        title={t("aiSkinAnalysis.testimonial.badge")}
        subtitle="Rejoignez plus de 150 centres qui utilisent déjà la technologie d'analyse IA de Nextmotion pour améliorer leurs consultations et fidéliser leurs patients."
      />

      {/* Section FAQ */}
      <FAQSection
        title="Questions fréquentes"
        faqs={faqData}
        background="gray"
      />

      {/* Section Pricing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4">
              Disponible à partir du forfait Essential
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Essential</h3>
              <p className="text-gray-600">20 analyses par mois incluses</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">✅ Premium</h3>
              <p className="text-blue-700">100 analyses par mois incluses</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              ➕ Vous pouvez acheter des scans supplémentaires à <strong>1 € / scan</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg">
                Voir les formules
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg">
                Passer à Essential
              </button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Prêt à révéler ce que l'IA voit dans la peau de vos patients ?"
        description="Cette fonctionnalité est incluse dans les formules Essential et Premium de Nextmotion."
        buttonText="Je veux une démo"
      />
    </main>
  );
}