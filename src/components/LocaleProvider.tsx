"use client";

import { createContext, useContext, ReactNode } from "react";
import { Locale, isRTL as checkRTL } from "@/lib/i18n";

type Dictionary = Record<string, unknown>;

interface LocaleContextType {
  locale: Locale;
  dictionary: Dictionary;
  isRTL: boolean;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}

export function LocaleProvider({ children, locale, dictionary }: Props) {
  const isRTL = checkRTL(locale);

  const t = (key: string): string => {
    const keys = key.split(".");
    let result: unknown = dictionary;

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof result === "string" ? result : key;
  };

  return (
    <LocaleContext.Provider value={{ locale, dictionary, isRTL, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
