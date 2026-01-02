import tr from "@/locales/tr.json";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

export type Locale = "tr" | "en" | "ar";

export const locales: Locale[] = ["tr", "en", "ar"];
export const defaultLocale: Locale = "tr";

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  ar: "العربية",
};

const dictionaries: Record<Locale, typeof tr> = {
  tr,
  en,
  ar,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.tr;
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar";
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocale(): Locale {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && isValidLocale(saved)) {
      return saved;
    }
    const browserLang = navigator.language.slice(0, 2);
    if (isValidLocale(browserLang)) {
      return browserLang;
    }
  }
  return defaultLocale;
}

export function setLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    localStorage.setItem("locale", locale);
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
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
