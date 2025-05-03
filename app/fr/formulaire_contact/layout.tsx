import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obtenez une démonstration de nos solutions",
  description:
    "Nos experts sont à votre disposition pour répondre à vos questions et vous présenter les solutions NextMotion pour booster votre pratique.",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/formulaire_contact",
  },
};

export default function ContactFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
