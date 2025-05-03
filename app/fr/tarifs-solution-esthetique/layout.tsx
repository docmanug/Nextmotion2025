import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "A partir de 59€/mois avec des formules qui correspondent à vos besoins",
  description: "Une solution tout en un qui débute à partir de 59€/mois",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/tarifs-solution-esthetique",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
