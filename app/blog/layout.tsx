import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.nextmotion.net';

export const metadata: Metadata = {
  title: "Discover the latest news about aesthetic medicine - NextMotion",
  description: "NextMotion Takes all aspects of aesthetic medicine into account and brings the most relevant technologies together to build an evolutive solution for today's aesthetic doctors.",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 