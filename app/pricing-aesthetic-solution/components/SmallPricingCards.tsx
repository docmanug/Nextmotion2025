"use client";

import Link from "next/link";

const pricingData = [
  {
    title: "Nextmotion Consult Digital",
    description:
      "The basic version of our patient management software : create patients files, add visits, issue quotes and consent forms your patients can sign, manage your digital stock and trace ability",
    price: "€59",
    period: "/ month",
    note: "excl. taxes",
    learnMoreLink: "Learn more about e-reputation",
  },
  {
    title: "Accounting",
    description:
      "Issue invoices, manage payments and generate powerful reports with the blink of an eye",
    price: "€29",
    period: "/month",
    note: "excl. taxes",
    learnMoreLink: "Learn more about accounting",
  },
  {
    title: "Collaborators",
    description:
      "Add extra collaborators you'll be able to track and control. Give them access to your Nextmotion agenda",
    price: "€29",
    period: "/ month",
    note: "excl. taxes. per collaborator",
    learnMoreLink: "Learn more about collaborators",
  },
  {
    title: "Nextmotion agenda",
    description:
      "A simple, intuitive, and powerful calendar manage schedule of your collaborators",
    price: "€99",
    period: "/month",
    note: "excl. taxes",
    learnMoreLink: "Learn more about agenda",
  },
  {
    title: "Good reviews",
    description:
      "Get good reviews from your patients with a legal top face/3D app or from our online payment link",
    price: "€19",
    period: "/month",
    note: "excl. taxes",
    learnMoreLink: "Learn more about e-reputation",
  },
  {
    title: "Unlimited Cloud",
    description:
      "Store unlimited space on our secure cloud that will sync your data across all your and your collaborators",
    price: "49€",
    period: "/ month",
    note: "excl. taxes",
    learnMoreLink: "Learn more about our medical cloud",
  },
  {
    title: "Patient portal",
    description:
      "Propose a custom web application with your clinic's logo to your patients to access their medical records and much more",
    price: "€49",
    period: "/month",
    note: "excl. taxes",
    learnMoreLink: "Learn more about patient portal",
  },
  {
    title: "Nextmotion Visio",
    description:
      "Propose video consultations to your patients. Requires Patient portal option",
    price: "49€",
    period: "/ month",
    note: "excl. taxes",
    learnMoreLink: "Learn more about Nextmotion Visio",
  },
];

export default function SmallPricingCards() {
  return (
    <section className="py-24 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-grow space-y-3">
                <h2 className="text-3xl font-bold text-[#0B1C39]">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-[#0B1C39]">
                      {card.price} {card.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{card.note}</p>
                </div>
              </div>

              <div className="mt-4">
                <Link
                  href="/"
                  className="block text-start text-[#284fe6] hover:text-blue-700 font-bold text-sm"
                >
                  {card.learnMoreLink}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
