"use client";

import { usePathname } from "next/navigation";

export default function HreflangTags() {
  const pathname = usePathname();
  const baseUrl = "https://www.nextmotion.net";

  return (
    <>
      <link rel="alternate" href={`${baseUrl}${pathname}`} hrefLang="en-US" />
      <link
        rel="alternate"
        href={`${baseUrl}/fr${pathname}`}
        hrefLang="fr-FR"
      />
      <link
        rel="alternate"
        href={`${baseUrl}${pathname}`}
        hrefLang="x-default"
      />
    </>
  );
}
