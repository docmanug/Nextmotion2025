"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function CountryRedirect() {
  useEffect(() => {
    // Method 1: Check browser language preferences
    const userLanguages = navigator.languages || [navigator.language];
    console.log(userLanguages);
    const hasFrenchPreference = userLanguages.some(
      (lang) => lang === "fr" || lang === "fr-FR" || lang.startsWith("fr-")
    );

    // Method 2: Check if timezone suggests France
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isPossiblyFrance = timeZone === "Europe/Paris";

    // Method 3: Check Accept-Language header (indirectly through language preferences)

    // If we detect French preference and not already on French version
    if (
      (hasFrenchPreference || isPossiblyFrance) &&
      !window.location.pathname.startsWith("/fr")
    ) {
      window.location.href = "/fr" + window.location.pathname;
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}
