import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A talentuous team dedicated to innovate",
  description:
    "Creating value for physicians and patients worldwide : since our first years, mostly investing time and money in R&D, we are now a fast growing company",
  alternates: {
    canonical: "https://www.nextmotion.net/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
