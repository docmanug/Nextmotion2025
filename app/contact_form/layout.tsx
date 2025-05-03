import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obtenez une démonstration de nos solutions",
  description:
    "Our experts are available to answer your questions and present NextMotion solutions to help boost your practice.",
  alternates: {
    canonical: "https://www.nextmotion.net/contact_form",
  },
};

export default function ContactFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
