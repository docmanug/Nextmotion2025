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
