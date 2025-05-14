"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function CountryRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only redirect at the root path
    if (pathname !== "/") {
      return;
    }

    // Get browser language to determine if user might be French
    const userLanguage = navigator.language || (navigator as any).userLanguage;
    const isLikelyFrench = userLanguage.startsWith("fr");

    // Try to get country using a geolocation service
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=7b69057a270148e1b27dac2813385c5a"
    )
      .then((response) => response.json())
      .then((data) => {
        const country = data.country_code2;
        if (country === "FR" || (country === "" && isLikelyFrench)) {
          router.push("/fr");
        }
      })
      .catch(() => {
        // Fallback to browser language if geolocation fails
        if (isLikelyFrench) {
          router.push("/fr");
        }
      });
  }, [pathname, router]);

  // This component doesn't render anything
  return null;
}
