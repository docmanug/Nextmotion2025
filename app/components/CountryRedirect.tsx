"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CountryRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Skip redirection if already on a localized path
    if (window.location.pathname.startsWith("/fr")) {
      return;
    }

    // Method 1: Check browser language preferences
    const userLanguages = navigator.languages || [navigator.language];
    const hasFrenchPreference = userLanguages.some(
      (lang) => lang === "fr" || lang === "fr-FR" || lang.startsWith("fr-")
    );

    // Method 2: Check if timezone suggests France
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isPossiblyFrance = timeZone === "Europe/Paris";

    // If we detect French preference and not already on French version
    if ((hasFrenchPreference || isPossiblyFrance)) {
      router.push("/fr" + window.location.pathname);
    }
  }, [router]);

  // This component doesn't render anything visible
  return null;
}