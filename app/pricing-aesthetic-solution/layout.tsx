import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing and plans for NextMotion aesthetic all-in-one solution",
  description:
    "A perfect control of your images, an optimized management of your practice. Choose the ideal formula to develop your practice.",
  alternates: {
    canonical: "https://www.nextmotion.net/pricing-aesthetic-solution",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
