import { usePathname, useRouter } from "next/navigation";

export async function getMessages(locale: string) {
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    return (await import(`../messages/en.json`)).default;
  }
}

export function useTranslations(messages: any) {
  function t(key: string) {
    return key.split(".").reduce((obj, k) => obj?.[k], messages) || key;
  }
  return t;
}

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
