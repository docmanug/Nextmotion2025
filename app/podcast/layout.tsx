import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Podcast",
  alternates: {
    canonical: "https://www.nextmotion.net/podcast",
  },
};

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
