import tr from "@/locales/tr.json";
import en from "@/locales/en.json";

export type Locale = "tr" | "en";

const dictionaries = {
  tr,
  en,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.tr;
}

export function getLocale(): Locale {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "tr" || saved === "en")) {
      return saved;
    }
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === "en" ? "en" : "tr";
  }
  return "tr";
}

export function setLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    localStorage.setItem("locale", locale);
    window.location.reload();
  }
}

// Simple translation helper
export function t(key: string, locale: Locale = "tr"): string {
  const dict = getDictionary(locale);
  const keys = key.split(".");
  let result: unknown = dict;

  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof result === "string" ? result : key;
}
