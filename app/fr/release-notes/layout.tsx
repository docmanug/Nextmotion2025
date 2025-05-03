import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Release Notes",
  description: "",
  alternates: {
    canonical: "https://www.nextmotion.net/fr/release-notes",
  },
};

export default function ReleaseNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
