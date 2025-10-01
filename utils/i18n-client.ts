"use client";

import { usePathname, useRouter } from "next/navigation";

export function useLanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";
    if (newLocale === currentLocale) return;

    if (newLocale === "en") {
      router.push(pathname.replace("/fr", ""));
    } else {
      router.push(`/fr${pathname}`);
    }
  };

  return switchLanguage;
}
