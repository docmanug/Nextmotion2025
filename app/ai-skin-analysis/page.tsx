import type { Metadata } from "next";
import AIHero from "@/components/AIHero";
import AIModulesSection from "@/components/AIModulesSection";
import CommunitySection from "@/components/CommunitySection";
import FinalCTA from "@/components/FinalCTA";
import { FAQSection } from "@/components/ui/faq-section";
import { getMessages } from "@/utils/i18n";

export const metadata: Metadata = {
  title: "AI Skin Analysis – Nextmotion",
  description:
    "Detect wrinkles, spots, redness and dehydration with one click from your smartphone. Feature included from the Essential plan.",
  alternates: { canonical: "https://www.nextmotion.net/ai-skin-analysis" },
};

export default async function IASkinAnalysisPage() {
  const messages = await getMessages('en');
  const t = (key: string) => {
    const keys = key.split('.');
    return keys.reduce((obj, key) => obj?.[key], messages) as string;
  };

  const aiModules = [
    {
      icon: "💧",
      title: "Hydration",
      description: "Analyze natural skin glow and texture to detect dry or dehydrated skin.",
      features: [
        "Natural skin glow analysis",
        "Detection of dry and dehydrated areas",
        "Automatic hydration score",
        "Personalized recommendations"
      ],
      testimonial: {
        quote: "Hydration analysis helps me recommend the right treatments to my patients",
        author: "Dr. Martin",
        role: "Dermatologist"
      },
      image: "/ai-consult.webp"
    },
    {
      icon: "👵",
      title: "Wrinkles",
      description: "Automatic detection of furrows and fine lines on key facial areas.",
      features: [
        "Complete wrinkle mapping",
        "Classification by depth",
        "Evolution tracking over time",
        "Customizable analysis zones"
      ],
      image: "/ai-copilot.webp"
    },
    {
      icon: "🌑",
      title: "Pigmentation spots",
      description: "Mapping of sun spots, melasma or pigmentation irregularities.",
      features: [
        "Pigmentation spot detection",
        "Melasma analysis",
        "Risk area mapping",
        "Automatic photographic tracking"
      ],
      image: "/ai-receptionist.webp"
    }
  ];

  const comparisonData = [
    {
      criteria: "Dedicated device required",
      visia: { value: "Yes", icon: "✅" },
      nextmotion: { value: "No (smartphone only)", icon: "❌" }
    },
    {
      criteria: "Number of analyzed criteria",
      visia: { value: "8", icon: "✅" },
      nextmotion: { value: "4 essential (evolving)", icon: "✅" }
    },
    {
      criteria: "PDF report generated",
      visia: { value: "Yes", icon: "✅" },
      nextmotion: { value: "Automatic", icon: "✅" }
    },
    {
      criteria: "Tracking over time",
      visia: { value: "Manual", icon: "❌" },
      nextmotion: { value: "Integrated comparison", icon: "✅" }
    },
    {
      criteria: "Cost",
      visia: { value: "> $20,000", icon: "💰" },
      nextmotion: { value: "Included in your plans", icon: "✔️" }
    }
  ];

  const faqData = [
    {
      question: "Is the AI reliable?",
      answer: "Yes, it has been trained on more than 70,000 real clinical cases. Its algorithm evolves continuously."
    },
    {
      question: "Is it GDPR compliant?",
      answer: "100%. All data is hosted in Europe according to current standards."
    },
    {
      question: "Do I need a specific device?",
      answer: "No. A photo taken with NM Capture is sufficient. No equipment to buy."
    },
    {
      question: "Is it compatible with my practice?",
      answer: "Yes, the technology is designed for daily aesthetic medicine practice."
    }
  ];

  return (
    <main>
      <AIHero
        title="Analyze your patients' skin using artificial intelligence"
        subtitle="In seconds, identify wrinkles, spots, redness and signs of dehydration from a simple photo. Automatic PDF report generation, overlay visualization and skin evolution tracking."
        demoButton="Request a demo"
        discoverButton="See in action"
      />

      <AIModulesSection
        title="AI technology designed to boost your practice"
        subtitle="Show your patients what their eyes don't perceive yet. A picture is worth a thousand words."
        modules={aiModules}
      />

      {/* VISIA Comparison Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4">
              What if you could do better than VISIA, without a $20,000 machine?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nextmotion's AI device offers you a modern, mobile and all-in-one alternative to traditional skin analysis systems.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Criteria</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">VISIA Canfield</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Nextmotion AI Analysis</th>
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
              Compare in demo
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <blockquote className="text-xl sm:text-2xl text-gray-700 mb-6 italic">
              "Thanks to AI analysis, I can illustrate my diagnoses in seconds. It's a game-changer in my consultations."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">Dr Simon Lamquin</div>
            <div className="text-gray-600">aesthetic physician in Cagnes sur mer</div>

            <div className="mt-8 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              +150 centers already use Nextmotion's AI technology
            </div>
          </div>
        </div>
      </section>

      <CommunitySection
        title="+150 centers already use Nextmotion's AI technology"
        subtitle="Join more than 150 centers that already use Nextmotion's AI analysis technology to improve their consultations and retain their patients."
      />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently asked questions"
        faqs={faqData}
        background="gray"
      />

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#081F4D] mb-4">
              Available from the Essential plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Essential</h3>
              <p className="text-gray-600">20 analyses per month included</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">✅ Premium</h3>
              <p className="text-blue-700">100 analyses per month included</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              ➕ You can purchase additional scans at <strong>$1 / scan</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg">
                View plans
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg">
                Upgrade to Essential
              </button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to reveal what AI sees in your patients' skin?"
        description="This feature is included in Nextmotion's Essential and Premium plans."
        buttonText="I want a demo"
      />
    </main>
  );
}