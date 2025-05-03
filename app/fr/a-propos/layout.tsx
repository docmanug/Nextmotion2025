import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Une équipe talentueuse pour vous apporter les meilleurs outils",
  description:
    "Depuis 2015, nous proposons toujours plus d'outils à nos médecins. Nous apportons de la valeur pour les médecins et les patients du monde entier.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/a-propos",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
